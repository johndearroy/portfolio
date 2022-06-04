import SocialLinks from "./basic/Social/links";

const Footer = () => {
  return (
    <>
      {/*======= Footer =======*/}
      <footer id="footer">
        <div className="container">
          <h3>Brandon Johnson</h3>
          <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi
            placeat.
          </p>
          <SocialLinks/>
          <div className="copyright">
            &copy; Copyright <strong><span>Portfolio</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://ueepinc.com/">UEEP Inc</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
