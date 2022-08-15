

import React from 'react'

function QuickCartWidget() {
  return (
    <li className="nav-item dropdown notification_dropdown">
      <a
        className="nav-link ai-icon show"
        href="javascript:void(0);"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        <svg
          width={20}
          height={24}
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.83333 3.91738V1.50004C8.83333 0.856041 9.356 0.333374 10 0.333374C10.6428 0.333374 11.1667 0.856041 11.1667 1.50004V3.91738C12.9003 4.16704 14.5208 4.97204 15.7738 6.22504C17.3057 7.75687 18.1667 9.8347 18.1667 12V16.3914L19.1105 18.279C19.562 19.1832 19.5142 20.2565 18.9822 21.1164C18.4513 21.9762 17.5122 22.5 16.5018 22.5H11.1667C11.1667 23.144 10.6428 23.6667 10 23.6667C9.356 23.6667 8.83333 23.144 8.83333 22.5H3.49817C2.48667 22.5 1.54752 21.9762 1.01669 21.1164C0.484686 20.2565 0.436843 19.1832 0.889509 18.279L1.83333 16.3914V12C1.83333 9.8347 2.69319 7.75687 4.22502 6.22504C5.47919 4.97204 7.0985 4.16704 8.83333 3.91738ZM10 6.1667C8.45183 6.1667 6.96902 6.78154 5.87469 7.87587C4.78035 8.96904 4.16666 10.453 4.16666 12V16.6667C4.16666 16.8475 4.12351 17.026 4.04301 17.1882C4.04301 17.1882 3.52384 18.2265 2.9755 19.322C2.88567 19.5029 2.89501 19.7187 3.00117 19.8902C3.10734 20.0617 3.29517 20.1667 3.49817 20.1667H16.5018C16.7037 20.1667 16.8915 20.0617 16.9977 19.8902C17.1038 19.7187 17.1132 19.5029 17.0234 19.322C16.475 18.2265 15.9558 17.1882 15.9558 17.1882C15.8753 17.026 15.8333 16.8475 15.8333 16.6667V12C15.8333 10.453 15.2185 8.96904 14.1242 7.87587C13.0298 6.78154 11.547 6.1667 10 6.1667Z"
            fill="#1362FC"
          />
        </svg>
        <div className="pulse-css" />
      </a>
      <div className="dropdown-menu dropdown-menu-end show" data-bs-popper="none">
        <div
          id="DZ_W_Notification1"
          className="widget-media dz-scroll p-3 ps ps--active-y"
          style={{ height: 380 }}
        >
          <ul className="timeline">
            <li>
              <div className="timeline-panel">
                <div className="media me-2">
                  <img alt="image" width={50} src="images/avatar/1.jpg" />
                </div>
                <div className="media-body">
                  <h6 className="mb-1">Dr sultads Send you Photo</h6>
                  <small className="d-block">29 July 2020 - 02:26 PM</small>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-panel">
                <div className="media me-2 media-info">KG</div>
                <div className="media-body">
                  <h6 className="mb-1">Resport created successfully</h6>
                  <small className="d-block">29 July 2020 - 02:26 PM</small>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-panel">
                <div className="media me-2 media-success">
                  <i className="fa fa-home" />
                </div>
                <div className="media-body">
                  <h6 className="mb-1">Reminder : Treatment Time!</h6>
                  <small className="d-block">29 July 2020 - 02:26 PM</small>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-panel">
                <div className="media me-2">
                  <img alt="image" width={50} src="images/avatar/1.jpg" />
                </div>
                <div className="media-body">
                  <h6 className="mb-1">Dr sultads Send you Photo</h6>
                  <small className="d-block">29 July 2020 - 02:26 PM</small>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-panel">
                <div className="media me-2 media-danger">KG</div>
                <div className="media-body">
                  <h6 className="mb-1">Resport created successfully</h6>
                  <small className="d-block">29 July 2020 - 02:26 PM</small>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-panel">
                <div className="media me-2 media-primary">
                  <i className="fa fa-home" />
                </div>
                <div className="media-body">
                  <h6 className="mb-1">Reminder : Treatment Time!</h6>
                  <small className="d-block">29 July 2020 - 02:26 PM</small>
                </div>
              </div>
            </li>
          </ul>
          <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
            <div
              className="ps__thumb-x"
              tabIndex={0}
              style={{ left: 0, width: 0 }}
            />
          </div>
          <div className="ps__rail-y" style={{ top: 0, right: 0, height: 380 }}>
            <div
              className="ps__thumb-y"
              tabIndex={0}
              style={{ top: 0, height: 296 }}
            />
          </div>
        </div>
        <a className="all-notification" href="javascript:void(0);">
          See all notifications <i className="ti-arrow-end" />
        </a>
      </div>
    </li>

  )
}

export default QuickCartWidget