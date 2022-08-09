export enum EventType {
  "newEvent" = "newEvent",
  "newNotification" = "newNotification"
}

export type TAppEventsHandler = {
  $broadcast: (eventName: EventType) => void
} 