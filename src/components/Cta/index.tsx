// Third-party library
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

// Images and icons
import Rocket from '../../assets/svg/rocket.svg';

export const Cta = () => {
  return (
    <>
      <section className="call-to-action">
        <div className="container center-flex ">
          <div className="wrapper">
            <div className="rocket center-flex" data-aos="fade-right">
              <ReactSVG src={Rocket} data-alt="Rocket icon" />
            </div>
            <div className="content-box" data-aos="fade-left">
              <h5>Let's create something exceptional together.</h5>
              <p className="mt-2 mb-3 p1">
                If you enjoyed viewing my portfolio, please do not hesitate to
                contact me. I'm eager to learn more about your project and
                explore how we can collaborate to turn your vision into reality.
              </p>
              <Link to="/contact" className="btn btn-md btn-primary">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
