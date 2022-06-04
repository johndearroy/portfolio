(function() {
  "use strict";

  /**
   * Universal Variables
   */
  let hexString = "0123456789abcdef";
  const careerStartsAt = new Date(2015,1,1);

  /**
   * Generate random colors
   */
  let randomColor = () => {
    let hexCode = "#";
    for(let i=0; i<6; i++){
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  }

  /**
   * Gradient generator
   */
  let generateGradient = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor();
    let colorThree = randomColor();
    let angle = Math.floor(Math.random() * 360);
    return `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}, ${colorThree})`;
  }

  /**
   * Humanize string
   */
  function humanize(str) {
    return str
      .replace(/^[\s_]+|[\s_]+$/g, '')
      .replace(/[_\s]+/g, ' ')
      .replace(/^[a-z]/, function(m) { return m.toUpperCase(); });
  }

  /**
   * Calculate service year
   */
  function diffYears(dateOne, dateTow)
  {
    let diff =(dateTow.getTime() - dateOne.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff/365.25));
  }

  /**
   * Get date difference from now
   */
  function getDateDifferenceFromNow(startDate) {
    const now = new Date();
    const words = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    const number = diffYears(startDate, now);
    return words[number] ? humanize(words[number]) : number;
  }

  /**
   * Skill generator (for DOM)
   */
  function generateSkills() {
    [
      {name: 'html', value: 100, color: 'blue'},
      {name: 'css', value: 95, color: 'red'},
      {name: 'javascript', value: 80, color: 'green'},
      {name: 'php', value: 85, color: 'yellow'},
      {name: 'dart', value: 45, color: 'pink'},
      {name: 'mysql', value: 60, color: 'purple'},
      {name: 'mongodb', value: 60, color: 'red'},
      {name: 'graphql', value: 60, color: 'teal'},
      {name: 'laravel', value: 90, color: 'orange'},
      {name: 'symfony', value: 80, color: 'gray'},
      {name: 'cakephp', value: 50, color: 'red'},
      {name: 'react', value: 85, color: 'red'},
      {name: 'react native', value: 85, color: 'red'},
      {name: 'nextjs', value: 80, color: 'red'},
      {name: 'vuejs', value: 90, color: 'red'},
      {name: 'nodejs', value: 70, color: 'red'},
      {name: 'expressjs', value: 85, color: 'red'},
      {name: 'flutter', value: 75, color: 'red'},
      {name: 'bootstrap', value: 100, color: 'red'},
      {name: 'tailwindcss', value: 100, color: 'red'},
      {name: 'aws', value: 60, color: 'red'},
      {name: 'ci/cd', value: 45, color: 'red'},
      {name: 'test driven development', value: 60, color: 'red'}
    ].map(skill => {
      document.getElementById("mySkills").innerHTML += `
      <div class="col-lg-6 progress">
        <span class="skill">${skill.name} <i class="val">${skill.value}%</i></span>
        <div class="progress-bar-wrap">
          <div style="background: ${generateGradient()};" class="progress-bar" role="progressbar" aria-valuenow="${skill.value}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    `;
    });
  }

  /**
   * Set random hero images
   */
  let setHeroImage = () => {
    const image = Math.floor(Math.random() * 6)  + 1 + '.png';
    const hero = document.getElementById("hero");
    hero.style.background = `url("./assets/img/${image}") no-repeat top right / cover`;
  }

  /**
   * Window on load
   */
  window.addEventListener('load', () => {
    setHeroImage();
    // Set all placeholders for year of experience I have
    [...document.getElementsByClassName("yearOfExperience")].map(item => {
      item.innerText = getDateDifferenceFromNow(careerStartsAt).toString();
    });
    // Calculate and set my current age
    document.getElementById("getAge").innerText = getDateDifferenceFromNow(new Date(1993,10,5)).toString();
    //generateSkills();
  });

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()
