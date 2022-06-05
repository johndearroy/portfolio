import SocialLinks from "./basic/Social/links";
import data from "../mock/data.json";

const Footer = () => {
  return (
    <>
      {/*======= Footer =======*/}
      <footer id="footer">
        <div className="container">
          <h3>{data?.name || "Dear Roy"}</h3>
          <p>{data.summary}</p>
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
