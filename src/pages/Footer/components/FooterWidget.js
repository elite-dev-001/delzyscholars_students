import React from 'react'

function FooterWidget() {
  return (
    <div className="col-lg-3 col-md-6 order-md-1 order-lg-1">

        {/* <!-- Footer Widget Start --> */}
        <div className="footer-widget">
            <div className="widget-logo">
                <a href="#"><img src="assets/images/logo2.png" alt="Logo" /></a>
            </div>

            <div className="widget-address">
                <h4 className="footer-widget-title">Smartech Global</h4>
                <p>Choba Uniport (CU).</p>
            </div>

            <ul className="widget-info">
                <li>
                    <p> <i className="flaticon-email"></i> <a href="mailto:address@gmail.com">support@delzyscholars.com</a> </p>
                </li>
                <li>
                    <p> <i className="flaticon-phone-call"></i> <a href="tel:9702621413">(234) 703-810-1576</a> </p>
                </li>
            </ul>

            <ul className="widget-social">
                <li><a href="#"><i className="flaticon-facebook"></i></a></li>
                <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                <li><a href="#"><i className="flaticon-skype"></i></a></li>
                <li><a href="#"><i className="flaticon-instagram"></i></a></li>
            </ul>
        </div>
        {/* <!-- Footer Widget End --> */}

    </div>
  )
}

export default FooterWidget