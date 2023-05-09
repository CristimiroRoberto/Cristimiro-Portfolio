// Third-party library
import { ReactSVG } from 'react-svg';

// Images and icons
import IconIndicator from '../../../assets/svg/icon-arrow-right.svg';

export const Portfolio = () => {
   return (
      <section id="portfolio" className="portfolio">
         <div className="container">
            <div className="title-section">
               <h4>My Portfolio</h4>
            </div>
            <div className="content row">
               <div className="grid-6" data-aos="fade-up">
                  <article className="card-portfolio">
                     <figure>
                        <img
                           src="https://i.pinimg.com/750x/20/4f/d5/204fd51b433faac4c6f593992956faac.jpg"
                           alt="Redesign of LAM's website"
                        />
                     </figure>
                     <div className="card-overlay">
                        <figcaption className="card-caption flex-between">
                           <div className="div mr-3">
                              <span className="card-category badge mr-1">
                                 UI Design
                              </span>
                              <a
                                 href="https://www.behance.net/gallery/165259099/Redesign-LAM"
                                 className=" title mt-3"
                              >
                                 Redesign of LAM's website
                              </a>
                           </div>
                           <a
                              href="https://www.behance.net/gallery/165259099/Redesign-LAM"
                              className="indicator flex-center"
                           >
                              <ReactSVG
                                 src={IconIndicator}
                                 data-alt="Icon Arrow"
                              />
                           </a>
                        </figcaption>
                     </div>
                  </article>
               </div>
               <div className="grid-6" data-aos="fade-up">
                  <article className="card-portfolio">
                     <figure>
                        <img
                           src="https://i.pinimg.com/750x/24/e8/c4/24e8c47336be196dc54cad2297985488.jpg"
                           alt="Personal Portfolio"
                        />
                     </figure>
                     <div className="card-overlay">
                        <figcaption className="card-caption flex-between">
                           <div className="div mr-3">
                              <span className="card-category badge mr-1">
                                 UI Design
                              </span>
                               <span className="card-category badge mr-1">
                                 Front-End
                              </span>
                              <a
                                 href="https://www.behance.net/gallery/170193413/Cristimiro-Personal-Portfolio"
                                 className=" title mt-3"
                              >
                                 Personal Portfolio
                              </a>
                           </div>
                           <a
                              href="https://www.behance.net/gallery/170193413/Cristimiro-Personal-Portfolio"
                              className="indicator flex-center"
                           >
                              <ReactSVG
                                 src={IconIndicator}
                                 data-alt="Icon Arrow"
                              />
                           </a>
                        </figcaption>
                     </div>
                  </article>
               </div>
            </div>
         </div>
      </section>
   );
};
