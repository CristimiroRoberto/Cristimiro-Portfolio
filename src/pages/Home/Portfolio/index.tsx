// React hooks
import { useState, useEffect } from 'react'; 

// Third-party library
import { ReactSVG } from 'react-svg'; 
import { Link } from "react-router-dom";

// Custom service
import { api } from '../../../service/api';

// Images and icons
import IconIndicator from '../../../assets/svg/icon-arrow-right.svg'; 

type Project = {
      id: number;
      title:  string;
      category: string[],
      imageUrl: string[];
}

export const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api.get('projects')
    .then((response) => {
      setProjects(response.data.project);
    })
  }, []);

  return (
    <section id='portfolio' className="portfolio">
      <div className="container">
        <div className="title-section">
          <h4>My Portfolio</h4>
        </div>
        <div className="content row">
         {
          projects.map(project => {
            return(
                <div className="grid-6" data-aos="fade-up"key={project.id} >
                  <article className='card-portfolio' >
                    <figure>
                      <img src={project.imageUrl[0]} alt={project.title} />
                    </figure>
                    <div className="card-overlay">
                      <figcaption className="card-caption flex-between">
                        <div className="div mr-3" >
                            {project.category.map((cat) => (
                              <span className="card-category badge mr-1">{cat}</span>
                            ))}
                          <Link to={"/projects/" + project.id} className=" title mt-3"
                            >{project.title}</Link>
                        </div>
                        <Link to={"/projects/" + project.id} className="indicator flex-center"><ReactSVG src={IconIndicator} data-alt='Icon Arrow'/></Link>
                      </figcaption>
                    </div>
                  </article>
                </div>
            )
          })
         }
        </div>
      </div>
    </section>
  );
};
