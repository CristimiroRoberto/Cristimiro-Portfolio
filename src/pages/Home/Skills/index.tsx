// Third-party library
import { ReactSVG } from 'react-svg';

// Images and icons
import IconJavascript from '../../../assets/svg/icon-javascript.svg';
import IconDesign from '../../../assets/svg/icon-design-2.svg';
import IconHtml from '../../../assets/svg/icon-html.svg';
import IconCode from '../../../assets/svg/icon-code-2.svg';
import IconReact from '../../../assets/svg/icon-react.svg';
import IconScss from '../../../assets/svg/icon-scss.svg';
import IconWordpress from '../../../assets/svg/icon-wordpress-2.svg';
import IconTypescript from '../../../assets/svg/icon-type.svg';
import IconGithub from '../../../assets/svg/icon-github.svg';
import IconFigma from '../../../assets/svg/icon-figma.svg';
import IconCss from '../../../assets/svg/icon-css.svg';

export const Skills = () => {
  return (
    <>
      <section id="skill" className="skill">
        <div className="skill-1 flex-center">
          <div className="flex skill-box">
            <ReactSVG src={IconJavascript} data-alt="icon javascript" className="mr-3" />
            <p className="p1">Javascript</p>
          </div>
          <div className="flex skill-box">
            <ReactSVG src={IconDesign} data-alt="icon design" className="mr-3" />
            <p className="p1">User Interface</p>
          </div>
          <div className="flex skill-box">
            <ReactSVG src={IconHtml} data-alt="icon html" className="mr-3" />
            <p className="p1">Html</p>
          </div>
          <div className="flex skill-box">
            <ReactSVG src={IconCode} data-alt="icon code" className="mr-3" />
            <p className="p1">Front end Developer</p>
          </div>
          <div className="flex skill-box">
            <ReactSVG src={IconReact} data-alt="icon react" className="mr-3" />
            <p className="p1">React JS</p>
          </div>
        </div>
        <div className="skill-2 flex-center">
          <div className="flex skill-box">
            <ReactSVG src={IconScss} data-alt="icon scss" className="mr-3" />
            <p className="p1">Scss</p>
          </div>
          <div className="flex skill-box">
            <ReactSVG src={IconWordpress} data-alt="icon wordpress" className="mr-3" />
            <p className="p1">Wordpress</p>
          </div>
            <div className="flex skill-box">
            <ReactSVG src={IconTypescript} data-alt="icon typescript" className="mr-3" />
            <p className="p1">TypeScript</p>
          </div>
          <div className="flex skill-box">
            <ReactSVG src={IconGithub} data-alt="icon ui" className="mr-3" />
            <p className="p1">Github</p>
          </div>
          <div className="flex skill-box">
            <ReactSVG src={IconFigma} data-alt="icon Figma" className="mr-3" />
            <p className="p1">Figma</p>
          </div>
          <div className="flex skill-box">
            <ReactSVG src={IconCss} data-alt="icon css" className="mr-3" />
            <p className="p1">Css</p>
          </div>
        </div>
      </section>
    </>
  );
};
