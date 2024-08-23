import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import footer_image from '../images/footer1_image.jpg';
const Footer = () => {
  const footerStyle = {
    background: `url(${footer_image}) no-repeat center center`, 
    backgroundSize: 'cover',
  //  fontFamily: 'Comic Sans MS, cursive, sans-serif '
  fontFamily: 'Courier New, monospace'
  };
  const infoColumnStyle = {
    fontFamily:'Courier New monospace'
  };

  return (
    <footer className="bg-dark text-light py-5" style={footerStyle}>
      <div className="container">
        <div className="row">
          {/* Info Column */}
          <div className="col-md-3" >
            <h5 className="text-uppercase" style={infoColumnStyle}>Info</h5><br></br>
            <ul className="list-unstyled">
              <li><a href="/about-us" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contact-us" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="/faqs" className="text-light text-decoration-none">FAQs</a></li>
              <li><a href="/careers" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="/size-guide" className="text-light text-decoration-none">Size Guide</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-md-3">
            <h5 className="text-uppercase"style={infoColumnStyle}>Legal</h5><br></br>
            <ul className="list-unstyled">
              <li><a href="/terms-conditions" className="text-light text-decoration-none">Terms & Conditions</a></li>
              <li><a href="/shipping-return" className="text-light text-decoration-none">Shipping & Return</a></li>
              <li><a href="/policies" className="text-light text-decoration-none">Policies</a></li>
            </ul>
          </div>

          {/* Need Help Column */}
          <div className="col-md-3">
            <h5 className="text-uppercase"style={infoColumnStyle}>Need Help?</h5><br></br>
            <ul className="list-unstyled">
              <li><a href="/track-order" className="text-light text-decoration-none">Track my Order</a></li>
              <li><a href="/privacy-cookies" className="text-light text-decoration-none">Privacy & Cookies</a></li>
            </ul>
          </div>

          {/* Subscribe Column */}
          <div className="col-md-3">
            <h5 className="text-uppercase"style={infoColumnStyle}>Subscribe to offers and newsletters</h5><br></br>
            <form className="d-flex mb-3">
              <input type="email" className="form-control" placeholder="Email address" />
              <button type="submit" className="btn btn-outline-light">Submit</button>
            </form>
            <div className="d-flex justify-content-start">
              {/* Social Media Icons */}
              <a href="https://www.facebook.com" className="text-light me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.threads.net" className="text-light me-3">
                <i className="fab fa-threads"></i>
              </a>
              <a href="https://www.instagram.com" className="text-light me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.whatsapp.com" className="text-light me-3">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="text-center mt-4">
          <a href="https://www.paypal.com" className="text-light me-1">
            <i className="fab fa-paypal"></i>
          </a>
          <p className="mb-0">&copy; 2024 Nikshi Couture</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
