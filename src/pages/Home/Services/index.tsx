 // Custom components
import { Card } from '../../../components/Card';

// Images and icons
import IconDesign from '../../../assets/svg/icon-design.svg';
import IconCode from '../../../assets/svg/icon-code.svg';
import IconWordpress from '../../../assets/svg/icon-wordpress.svg';
import IconSeo from '../../../assets/svg/icon-seo.svg';

export const Services = () => {
  return (
    <>
      <section id='services' className="services">
        <div className="container">
          <div className="title-section">
            <h4 data-aos="fade-up">My Services</h4>
          </div>
          <div className="grid-container">
            <div className="grid-3" data-aos="fade-up" data-aos-delay="200">
              <Card
                icon={IconDesign}
                title="UI Design"
                description="I provide personalized and creative design services
                    UI for businesses of all sizes. Of
                    planning and wireframing to visual design and
                    prototyping and handoff"
                altIcon="Icon Search"
              />
            </div>
            <div className="grid-3" data-aos="fade-up" data-aos-delay="400">
              <Card
                icon={IconCode}
                title="Development"
                description="With my front-end development service, I can
                    turning UI designs into code
                    clean, semantic and responsive, using the most
                    recent..."
                altIcon="Icon Code"
              />
            </div>
            <div className="grid-3" data-aos="fade-up" data-aos-delay="600">
              <Card
                icon={IconWordpress}
                title="Wordpress"
                description="With my WordPress development services, I transform the
                    condition your website into something dynamic and manageable. With
                    a frontend-focused approach."
                altIcon="Wordpress Icon"
              />
            </div>
            <div className="grid-3" data-aos="fade-up" data-aos-delay="800">
              <Card
                icon={IconSeo}
                title="Seo"
                description=" With my SEO services I can help you get a presence
                    online stronger and increase the visibility of your website
                    in Google search results and other search engines
                    search."
                altIcon="Icon Seo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
