import { $broadcast } from "../events/events";
import { EventType } from "../events/type";
import { TCreateNotificationArgs, TNotice } from "./notification";
import * as toastr from 'toastr'


const TOASTR_TIMEOUT = 5000

export type TEventNotificationHandler = {

  resetNotification: () => void,
  notifier: (noticeArgs: TCreateNotificationArgs) => void,
  broadcastEvent: () => void

}

export function CreateEventHandler() {

  const s = {} as TEventNotificationHandler;


  const notice = {} as TNotice;

  s.resetNotification = function () {
    notice.message = '';
    notice.type = '';
    notice.icon = '';
    broadcastNotification();
  };

  //Opens a modal box
  s.notifier = function (m) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const icon = {
      'error': 'fa-exclamation-triangle',
      'success': 'fa-check',
      'info': 'fa-info'
    };
    notice.message = m.message;
    notice.type = m.notificationType;
    notice.icon = icon[m.notificationType];

    broadcastNotification();
    //$timeout(self.resetNotification(),5000 );
    setTimeout(function () {
      self.resetNotification();
    }, TOASTR_TIMEOUT);
  };



  const broadcastNotification = () => {
    $broadcast(EventType.newNotification);

    if (notice.type === "error") {
      return toastr.error(notice.message, notice.heading, { timeOut: TOASTR_TIMEOUT })
    }
    if (notice.type === "success") {
      return toastr.success(notice.message, notice.heading, { timeOut: TOASTR_TIMEOUT })
    }
    toastr.info(notice.message, notice.heading, { timeOut: TOASTR_TIMEOUT })
  };

  s.broadcastEvent = function () {
    $broadcast(EventType.newEvent);
  };

  return s;


}