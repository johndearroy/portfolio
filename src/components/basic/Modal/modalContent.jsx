import {resolveImagePathUrl} from "../../../services/helper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ModalContent = ({project}) => {
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
                >
                  {project && project?.images.length > 0 && project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="swiper-slide" style={{ maxHeight: '70vh', width: '100%' }}>
                        <img style={{ height: '70vh', width: 'auto' }} src={resolveImagePathUrl(image)} alt={`${project.name}-images-${index}}`} />
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
                <li><strong>Project URL</strong>: <a href={project?.link}>{project?.link}</a></li>
              </ul>
            </div>
            <div className="portfolio-description">
              <h2>Overview</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ModalContent;
