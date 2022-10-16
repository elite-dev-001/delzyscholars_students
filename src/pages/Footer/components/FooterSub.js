import React from 'react'

function FooterSub() {
  return (
    <div className="col-lg-3 col-md-6 order-md-2 order-lg-3">

        {/* <!-- Footer Widget Start --> */}
        <div className="footer-widget">
            <h4 className="footer-widget-title">Subscribe</h4>

            <div className="widget-subscribe">
                <p>Lorem Ipsum has been them an industry printer took a galley make book.</p>

                <div className="widget-form">
                    <form action="#">
                        <input type="text" placeholder="Email here" />
                        <button className="btn btn-primary btn-hover-dark">Subscribe Now</button>
                    </form>
                </div>
            </div>
        </div>
        {/* <!-- Footer Widget End --> */}

    </div>
  )
}

export default FooterSub