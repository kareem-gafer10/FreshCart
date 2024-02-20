import ScrollToTop from "react-scroll-to-top";
import { FooterData, stores } from "./Data";
import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <ScrollToTop smooth={3000} top={500} color=" #0aad0a" />
      <footer className="footer">
        <div className="container">
          <h2 className=" fw-bold">Get The FreshCart App</h2>
          <p className="text-muted">
            We will send you a link, Open it in your phone to download App
          </p>
          <div className="row mb-4">
            <div className="col-md-9">
              <input
                type="email"
                placeholder="Email"
                className="form-control "
              />
            </div>

            <div className="col-md-3">
              <button className="btn btn-success w-100 mt-3 mt-md-0">
                Share App Link
              </button>
            </div>
          </div>

          <hr />

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <h6 className=" me-4">Payment Partners</h6>

                {FooterData.map((data) => {
                  const { id, image, alt } = data;
                  return (
                    <img src={image} className="footerImg" alt={alt} key={id} />
                  );
                })}
              </div>
            </div>

            <div className="col-lg-6">
              <div className=" d-flex align-items-center">
                <h6 className="text-muted me-4 footer-title">
                  Get deliveries with FreshCart
                </h6>
                {stores.map((store) => {
                  const { id, image, alt } = store;
                  return (
                    <img
                      src={image}
                      className="storeImg cursor-pointer"
                      alt={alt}
                      key={id}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="copy-right">
            <p className="text-center">
              Copy Right {date} © By Kareem Gafer All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
