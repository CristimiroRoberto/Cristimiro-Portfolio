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
                <div  data-aos="fade-up">
                  <p className="p1">
                     I'm a passionate frontend developer who loves creating amazing digital experiences with a focus on web 
                    accessibility, usability, and UI design. I have skills in HTML, CSS (including SCSS), and JavaScript.<br>
                  </p>
                  <p className="p1">
                     I have experience with modern frameworks like React JS and have been dedicated to enhancing my skills in 
                      Next.js.<br>
                  </p>
                  <p className="p1">
                    Additionally, I use Tailwind CSS, which allows me to efficiently create responsive and visually appealing user 
                    interfaces. As a UI design enthusiast, I strive to apply design principles, create intuitive layouts, and care 
                    about visual aesthetics in all my projects.
                  <p className="p1">
                    I constantly seek to learn and stay updated on the latest industry trends and best practices in UI design. 
                    I believe in balancing functionality with aesthetics and work collaboratively with multidisciplinary teams 
                    to create exceptional digital solutions.
                  </p>
                </div>
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
