(function() {
  "use strict";

  /**
   * Portfolio generator (for DOM)
   */
  function generatePortfolio() {
    [
      1,2,3,4,5,6,7,8
    ].map(skill => {
      document.getElementById("myPortfolio").innerHTML += `
      <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <div class="portfolio-links">
                      <a href="../../../src/images/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery"
                         class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                      <a href="../../../src/portfolio-details.html" class="portfolio-details-lightbox"
                         data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
              </div>
          </div>
      </div>
    `;
    });
  }

  /**
   * Window on load
   */
  window.addEventListener('load', () => {
    //generatePortfolio();
  });
})()
