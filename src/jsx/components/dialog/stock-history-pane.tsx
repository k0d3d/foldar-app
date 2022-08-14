import React from 'react'

function StockHistoryPane({ stockhistory, goBack }) {
  return stockhistory && (
    <div className="chatbox active">
      <div className="chatbox-close" />
      <div className="summary custom-tab-1">
        <div className="p-3">
          <div className="card">
            <div className="card-body">
              <div
                id="DZ_W_TimeLine"
                className="widget-timeline dz-scroll height370 ps ps--active-y"
              >
                <ul className="timeline">
                  <li>
                    <div className="timeline-badge primary" />
                    <a className="timeline-panel text-muted" href="#">
                      <span>10 minutes ago</span>
                      <h6 className="mb-0">
                        Youtube, a video-sharing website, goes live{" "}
                        <strong className="text-primary">$500</strong>.
                      </h6>
                    </a>
                  </li>
                  <li>
                    <div className="timeline-badge info"></div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>20 minutes ago</span>
                      <h6 className="mb-0">
                        New order placed <strong className="text-info">#XF-2356.</strong>
                      </h6>
                      <p className="mb-0">
                        Quisque a consequat ante Sit amet magna at volutapt...
                      </p>
                    </a>
                  </li>
                  <li>
                    <div className="timeline-badge danger"></div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>30 minutes ago</span>
                      <h6 className="mb-0">
                        john just buy your product{" "}
                        <strong className="text-warning">Sell $250</strong>
                      </h6>
                    </a>
                  </li>
                  <li>
                    <div className="timeline-badge success"></div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>15 minutes ago</span>
                      <h6 className="mb-0">StumbleUpon is acquired by eBay. </h6>
                    </a>
                  </li>
                  <li>
                    <div className="timeline-badge warning"></div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>20 minutes ago</span>
                      <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                    </a>
                  </li>
                  <li>
                    <div className="timeline-badge dark"></div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>20 minutes ago</span>
                      <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                    </a>
                  </li>
                </ul>
                <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                  <div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} />
                </div>
                <div className="ps__rail-y" style={{ top: 0, height: 370, right: 0 }}>
                  <div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 236 }} />
                </div>
              </div>

            </div>
          </div>
          <div className="summary-actions">
            <p><a className="btn btn-sm btn-block btn-warning" ui-sref="items.edit({itemId: summary._id,action: 'iv-edit'})">Edit Item</a></p>
            <p><a className="btn btn-sm btn-block btn-warning" ui-sref="items.summary.quickorder">Add to cart</a></p>
            <p><a className="btn btn-sm btn-block btn-warning" ui-sref="items.summary.stockhistory">Stock History</a></p>
            <p><a className="btn btn-sm btn-block btn-danger" data-ng-click="delConfirm = !delConfirm; delBtnText = 'Are you sure ?'">Delete</a>
            </p>
            <p>
              <button className="btn btn-sm btn-block btn-link" onClick={() => goBack()}>Close</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockHistoryPane