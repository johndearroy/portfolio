import React from "react";
import data from '../../mock/data.json';
import Modal from "../basic/Modal";
import {resolveImagePathUrl} from "../../services/helper";

const PortfolioSection = () => {
  const {portfolio, portfolio: {projects}} = data;
  const [show, setShow] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const portfolioRef = React.useRef();

  const handleClick = (project) => {
    setShow(true);
    setSelectedProject(project);
  }

  return (
    <>
      {/*======= Portfolio Section =======*/}
      <section id="portfolio" className="portfolio section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>{portfolio.description}</p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                {portfolio && portfolio.filters && portfolio.filters.map((filter, index) => (
                  <li key={index} data-filter={filter.modifier}>{filter.label}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

            {projects.map((project, index) => (
              <div ref={portfolioRef} key={index} className={`col-lg-4 col-md-6 portfolio-item filter-${project.category.toLowerCase()}`}>

                <div className="portfolio-wrap">

                  <img
                    src={resolveImagePathUrl(project.image)}
                    className="img-fluid"
                    alt={project.name}
                  />

                  <div className="portfolio-info">

                    <h4>{project.name}</h4>
                    <p>{project.category}</p>

                    <div className="portfolio-links">
                      <a href={resolveImagePathUrl(project.image)} target={'_blank'}>
                        <i className="bx bx-fullscreen"/>
                      </a>
                      {project.link && <a href={project.link} target={'_blank'}>
                        <i className="bx bx-link"/>
                      </a>}
                    </div>

                    <button
                      className={'btn btn-outline-dark mt-1'}
                      onClick={() => handleClick(project)}
                    >
                      See details
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
      {show && <Modal project={selectedProject} setShow={setShow}/>}
    </>
  )
}

export default PortfolioSection;
