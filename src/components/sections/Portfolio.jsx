const PortfolioSection = () => {
  return (
    <>
      {/*======= Portfolio Section =======*/}
      <section id="portfolio" className="portfolio section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>
              Portfolios are a great way to demonstrate the competencies you would list on a resume or talk about
              in an interview — they allow you to show and not just tell. During a job search, the portfolio
              showcases your work to potential employers. It presents evidence of your relevant skills and
              abilities. That's why i listed some of my previous works below as portfolio and some i can not due
              to privacy issues of client and/or company.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-web">Web</li>
                <li data-filter=".filter-card">Others</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={require("../../images/portfolio/portfolio-1.jpg")} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a href="../../images/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery"
                         className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="portfolio-details-lightbox"
                         data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={require("../../images/portfolio/portfolio-2.jpg")} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a href="../public/assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery"
                         className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="portfolio-details-lightbox"
                         data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={require("../../images/portfolio/portfolio-3.jpg")} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a href="../public/assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery"
                         className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="portfolio-details-lightbox"
                         data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={require("../../images/portfolio/portfolio-4.jpg")} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a href="../public/assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery"
                         className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="portfolio-details-lightbox"
                         data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={require("../../images/portfolio/portfolio-5.jpg")} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a href="../public/assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery"
                         className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="portfolio-details-lightbox"
                         data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={require("../../images/portfolio/portfolio-6.jpg")} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a href="../public/assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery"
                         className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="portfolio-details-lightbox"
                         data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={require("../../images/portfolio/portfolio-7.jpg")} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a href="../public/assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery"
                         className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="portfolio-details-lightbox"
                         data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={require("../../images/portfolio/portfolio-8.jpg")} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a href="../public/assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery"
                         className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="portfolio-details-lightbox"
                         data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={require("../../images/portfolio/portfolio-9.jpg")} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a href="../public/assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery"
                         className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="portfolio-details-lightbox"
                         data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default PortfolioSection;
