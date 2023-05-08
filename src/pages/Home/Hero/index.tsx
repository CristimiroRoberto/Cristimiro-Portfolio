// Third-party library
import { ReactSVG } from 'react-svg';

// Images and icons
import Globe from '../../../assets/svg/globe.svg';
import IconLinkedin from '../../../assets/svg/icon-linkedin.svg';
import IconBehance from '../../../assets/svg/icon-behance.svg';
import IconDribble from '../../../assets/svg/icon-dribbble.svg';
import IconInstagram from '../../../assets/svg/icon-instagram.svg';

export const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container flex">
          <div className="flex-item-1 inner-text">
            <div className="div" data-aos="fade-up" data-aos-delay="1300">
              <h1 className="mb-8">Cristimiro</h1>
              <ul className="flex stack">
                <li className="flex">Ui Design</li>
                <li className="flex">
                  <span>Fron-End Developer</span>
                  <span className="mx-2">React JS</span>
                  <span>wordpress</span>
                </li>
              </ul>
            </div>
            <nav className="social-media-links mt-10">
              <ul className="social-media-list flex">
                <li
                  className="social-media-item"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  <a href="https://www.linkedin.com/in/cristimiroroberto/" aria-label="LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <ReactSVG src={IconLinkedin} data-alt=" Icon Linkedin " />
                  </a>
                </li>
                <li
                  className="social-media-item"
                  data-aos="fade-up"
                  data-aos-delay="1400"
                >
                  <a href="https://www.behance.net/cristimirositoe" aria-label="Behance">
                    <span className="sr-only">Behance</span>
                    <ReactSVG src={IconBehance} data-alt="Icon Behance " />
                  </a>
                </li>
                <li
                  className="social-media-item"
                  data-aos="fade-up"
                  data-aos-delay="1600"
                >
                  <a href="https://dribbble.com/cristimiro" aria-label="Dribbble">
                    <span className="sr-only">Dribbble</span>
                    <ReactSVG src={IconDribble} data-alt="Icon Dribbble " />
                  </a>
                </li>
                <li
                  className="social-media-item"
                  data-aos="fade-up"
                  data-aos-delay="1800"
                >
                  <a href="https://www.instagram.com/cristimiroroberto/" aria-label="Instagram">
                    <span className="sr-only">Instagram</span>
                    <ReactSVG
                      src={IconInstagram}
                      data-alt=" Icon Instagram"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="flex-item-1 globe"
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-delay="2000"
          >
            <ReactSVG src={Globe} data-data-alt="globe" />
          </div>
        </div>
      </div>
    </>
  );
};
