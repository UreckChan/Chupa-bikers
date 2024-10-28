import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-holder">
          <div className="row">
            <div className="col-md-6">
              <h3>Vive la experiencia</h3>
              <p>Retos con causa</p>
            </div>
            <div className="col-md-6 text-right">
              <ul className="social">
                <li><a href="javascript:"><i className="fa fa-facebook-f"></i></a></li>
                <li><a href="javascript:"><i className="fa fa-twitter"></i></a></li>
                <li><a href="javascript:"><i className="fa fa-dribbble"></i></a></li>
                <li><a href="javascript:"><i className="fa fa-pinterest"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
