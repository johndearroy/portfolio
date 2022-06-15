import SocialLinks from "../Social/links";
import data from "../../../mock/data.json";

const Hero = () => {
  let setRandomHeroImage = () => {
    const image = data.heroImages[Math.floor(
        Math.random() * data.heroImages.length
    )];
    return `url(${require(`../../../images/hero/${image}`)}) no-repeat top right / cover`;
  }

  return (
    <>
      {/*======= Hero Section =======*/}
      <section style={{
        background: setRandomHeroImage()
      }} id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>{data?.name || "Dear Roy"}</h1>
          <p>{data?.designation || "Software Engineer"}</p>
          <SocialLinks/>
        </div>
      </section>
    </>
  )
}

export default Hero;
