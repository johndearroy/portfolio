import {getRandomItemFromArray} from "../../../services/helper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const ModalContent = ({project}) => {
  const getBadgeVariant = () => {
    return getRandomItemFromArray([
      "bg-primary",
      "bg-secondary",
      "bg-success",
      "bg-danger",
      "bg-warning",
      "bg-info",
      "bg-info text-dark",
      "bg-dark"
    ]);
  }

  return (
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-8">
            <div className="portfolio-details-slider swiper">
              <div style={{ maxHeight: '70vh' }} className="swiper-wrapper align-items-center">

                <Swiper
                  spaceBetween={50}
                  slidesPerView={project && project?.images.length > 1 ? 1 : 1}
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  navigation
                  autoplay={false}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  {project && project?.images.length > 0 && project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="swiper-slide" style={{ maxHeight: '70vh', width: '100%' }}>
                        <img style={{ height: '70vh', width: '100%' }} src={image} alt={`${project.name}-images-${index}}`} />
                      </div>
                    </SwiperSlide>
                  ))}

                  {project && project?.images.length === 0 && project.image &&
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src={project.image.url ?? project.image.path} alt={project.name} />
                      </div>
                    </SwiperSlide>
                  }
                </Swiper>

              </div>
              <div className="swiper-pagination"/>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul style={{textAlign: 'left'}}>
                <li><strong>Name</strong>: {project?.name}</li>
                <li><strong>Category</strong>: {project?.category}</li>
                <li><strong>Client</strong>: {project?.client}</li>
                <li><strong>Project date</strong>: {project?.deliveryDate}</li>
                {project.links &&
                  <li><strong>Project URL</strong>: <br/>
                    {project.links.map((link, index) => <a key={index} href={link}>{link}</a>)}
                  </li>
                }
              </ul>
            </div>
            {project.technologies &&
              <div className="portfolio-info">
                <h3>Technology used</h3>
                {project.technologies && project.technologies.map((technology, index) => (
                  <p key={index}
                    style={ project.technologies.length !== index + 1 ? {marginRight: '10px'} : {} }
                    className={`badge rounded-pill px-3 mr-5 mb-1 ${getBadgeVariant()}`}
                  >
                    {technology}
                  </p>
                ))}
              </div>
            }
          </div>

          {project.overview && 
            <div className="col-lg-12">
              <div className="portfolio-description">
                <h2>Overview</h2>
                <p>{project.overview}</p>
              </div>
            </div>
          }

        </div>

      </div>
    </section>
  )
}

export default ModalContent;
