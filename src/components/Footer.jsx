import SocialLinks from "./basic/Social/links";
import data from "../mock/data.json";

const Footer = () => {
  return (
    <>
      {/*======= Footer =======*/}
      {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FCA61F"
          d="m0 160 34.3 10.7C68.6 181 137 203 206 213.3 274.3 224 343 224 411 192c69-32 138-96 206-85.3 68.7 10.3 137 96.3 206 96 68.4.3 137-85.7 206-85.4 68.1-.3 137 85.7 205 112 68.9 26.7 137-5.3 172-21.3l34-16v128H0Z"
        />
      </svg>*/}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 200 1440 120">
        <path
          fill="#FCA61F"
          d="m0 320 60-26.7c60-26.3 180-80.3 300-80 120-.3 240 53.7 360 64C840 288 960 256 1080 240c120-16 240-16 300-16h60v96H0Z"
        />
      </svg>
      {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FCA61F"
          d="m0 32 60 26.7c60 26.3 180 80.3 300 128C480 235 600 277 720 245.3 840 213 960 107 1080 53.3 1200 0 1320 0 1380 0h60v320H0Z"
        />
      </svg>*/}
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
