import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://www.facebook.com/" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="https://twitter.com/" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="https://www.google.co.in/" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="https://www.instagram.com/" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="https://www.linkedin.com/" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                INNOVIOUS IT SERVICES
              </h6>
              <p>
                With a relentless pursuit of excellence, Innovious IT Services
                empowers businesses with cutting-edge IT solutions that drive
                growth and success.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Groceries
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Electronics
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Footwear
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Pan
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Princeville Embassy Golf Links, Princeville Block, Embassy Golf
                Links Business Park,Challaghatta, Bengaluru, Karnataka 560071.
                BANGALORE - 560001, 29- Karnataka.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                @innoviousitservices.in
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                +91 812345 9617
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://www.innoviousitservices.in/"
        >
          Innovious.com
        </a>
      </div>
    </MDBFooter>
    
  );
}
