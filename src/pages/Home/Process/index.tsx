 // Custom components
import { Card } from '../../../components/Card';

// Images and icons
import IconBriefing from '../../../assets/svg/icon-briefing.svg';
import IconSearch from '../../../assets/svg/icon-search.svg';
import IconDesign from '../../../assets/svg/icon-design.svg';
import IconCode from '../../../assets/svg/icon-code.svg';
export const Process = () => {
  return (
    <>
      <section id='process' className="process">
        <div className="container">
          <div className="title-section">
            <h4 data-aos="fade-up">Creative process</h4>
          </div>
          <div className="row">
            <div className="grid-3" data-aos="fade-up" data-aos-delay="200">
              <Card
                icon={IconBriefing}
                title="Briefing"
                description="Before starting any project, it is essential to understand the needs of the client. I start with a kickoff meeting to gather information and create a detailed brief that allows me to understand the project requirements and prepare the best possible design strategy."
                altIcon="Icon People"
              />
            </div>
            <div className="grid-3" data-aos="fade-up" data-aos-delay="400">
              <Card
                icon={IconSearch}
                title="Search"
                description="After the briefing, I start the research phase. I investigate current design trends, competitors, target audience, and other relevant information for the project. Based on the research, I create a design strategy that meets the client's needs and objectives."
                altIcon="Icon Search"
              />
            </div>

            <div className="grid-3" data-aos="fade-up" data-aos-delay="600">
              <Card
                icon={IconDesign}
                title="Design"
                description="Based on the research and design strategy, I start creating initial designs. I use tools like Adobe XD and Figma to create wireframes, layouts, and user interface designs. I work collaboratively with the client to create a design that meets their expectations."
                altIcon="Icon Design"
              />
            </div>
            <div className="grid-3" data-aos="fade-up" data-aos-delay="800">
              <Card
                icon={IconCode}
                title="development"
                description="After project approval, development begins. I use modern front-end technologies like HTML, CSS, JavaScript and ReactJS to create a dynamic and responsive UI. I test the site on multiple browsers and devices to ensure it works properly."
                altIcon="Icon Seo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
