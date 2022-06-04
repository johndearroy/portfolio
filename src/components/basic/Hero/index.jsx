import SocialLinks from "../Social/links";

const Hero = () => {
  return (
    <>
      {/*======= Hero Section =======*/}
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Dear Roy</h1>
          <p>
            I'm
            <span
              className="typed"
              data-typed-items="Full Stack Developer, Freelancer, Mobile Application Developer"
            />
          </p>
          <SocialLinks/>
        </div>
      </section>
    </>
  )
}

export default Hero;
