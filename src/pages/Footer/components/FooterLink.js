import React from 'react'

function FooterLink() {
  return (
    <div className="col-lg-6 order-md-3 order-lg-2">

        {/* <!-- Footer Widget Link Start --> */}
        <div className="footer-widget-link">

            {/* <!-- Footer Widget Start --> */}
            <div className="footer-widget">
                <h4 className="footer-widget-title">Category</h4>

                <ul className="widget-link">
                    <li><a href="#">WAEC</a></li>
                    <li><a href="#">JAMB</a></li>
                    <li><a href="#">Post-UTME</a></li>
                    <li><a href="#">UnderGraduates</a></li>
                    <li><a href="#">Uniport</a></li>
                    <li><a href="#">RSUST</a></li>
                </ul>

            </div>
            {/* <!-- Footer Widget End --> */}

            {/* <!-- Footer Widget Start --> */}
            <div className="footer-widget">
                <h4 className="footer-widget-title">Quick Links</h4>

                <ul className="widget-link">
                    <li><a href="#">Pre-Degree</a></li>
                    <li><a href="#">A-Level</a></li>
                </ul>

            </div>
            {/* <!-- Footer Widget End --> */}

        </div>
        {/* <!-- Footer Widget Link End --> */}

    </div>
  )
}

export default FooterLink