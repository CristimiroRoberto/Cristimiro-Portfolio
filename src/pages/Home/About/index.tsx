// Third-party library
import { ReactSVG } from 'react-svg';

// Images and icons
import Image1 from '../../../assets/images/image-1.jpg';
import Image2 from '../../../assets/images/image-2.jpg';
import Image3 from '../../../assets/images/image-3.jpg';
import Image4 from '../../../assets/images/image-4.jpg';
import Image5 from '../../../assets/images/image-5.jpg';
import Image6 from '../../../assets/images/image-6.jpg';
import IconCheck from '../../../assets/svg/icon-check.svg';
export const About = () => {
  return (
    <>
      <section id='about' className="about">
        <div className="container">
          <div className="title-section">
            <h4 data-aos="fade-up">About Me</h4>
          </div>
          <div className="row">
            <div className="grid-6">
              <p className="p1" data-aos="fade-up">
                Hello! I am Cristimiro Roberto, a user interface designer and
                frontend developer with knowledge in creating custom themes for
                WordPress. Currently, I am improving my skills in React and web
                accessibility, to create more responsive and accessible designs
                for my clients. I also plan to study Webflow in the future to
                further expand my design and website development skills. In my
                portfolio, you can see some of the projects I have worked on.
                Feel free to contact me if you have a project in mind or want to
                discuss your design and development needs. I am excited to work
                with you!
              </p>
              <div className="check mt-5">
                <div className="check-item flex mb-3"   data-aos="fade-up"
                  data-aos-delay="100">
                  <div className="check-circle mr-2">
                    <ReactSVG src={IconCheck} data-alt="Verification icon" />
                  </div>
                  <p className="check-text p1">
                    Information Technology and Telecommunications from IPET
                  </p>
                </div>
                <div className="check-item flex mb-3" data-aos="fade-up"
                  data-aos-delay="200">
                  <div className="check-circle mr-2">
                    <ReactSVG src={IconCheck} data-alt="Verification icon" />
                  </div>
                  <p className="check-text p1">UI and freelance developer</p>
                </div>
                <div className="check-item flex mb-3" data-aos="fade-up"
                  data-aos-delay="300">
                  <div className="check-circle mr-2">
                    <ReactSVG src={IconCheck} data-alt="Verification icon" />
                  </div>
                  <p className="check-text p1">Computer Technician</p>
                </div>
                <div className="check-item flex mb-3" data-aos="fade-up"
                  data-aos-delay="400">
                  <div className="check-circle mr-2">
                    <ReactSVG src={IconCheck} data-alt="Verification icon" />
                  </div>
                  <p className="check-text p1">+10 projects developed</p>
                </div>
                <div className="check-item flex" data-aos="fade-up"
                  data-aos-delay="500">
                  <div className="check-circle mr-2">
                    <ReactSVG src={IconCheck} data-alt="Verification icon" />
                  </div>
                  <p className="check-text p1">
                    Languages: Portuguese, English
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-6 picture"   data-aos="fade-up">
              <div className="row relative">
                <div className="blur-1"></div>
                <div className="grid-nobreak-6 images-1">
                  <img
                    src={Image1}
                    alt="Picture"
                    className="grayscale mb-3"
                  />
                  <img
                    src={Image2}
                    alt="Picture"
                    className="grayscale mb-3"
                  />
                  <img
                    src={Image3}
                    alt="Picture"
                    className="grayscale mb-3"
                  />
                </div>
                <div className="grid-nobreak-6 images-2">
                  <img
                    src={Image4}
                    alt="Picture"
                    className="grayscale mb-3"
                  />
                  <img
                    src={Image5}
                    alt="Picture"
                    className="grayscale mb-3"
                  />
                  <img
                    src={Image6}
                    alt="Picture"
                    className="grayscale mb-3"
                  />
                </div>
                <div className="blur-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
