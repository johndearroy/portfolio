import SocialLinks from "../Social/links";
import data from "../../../mock/data.json";
import React from "react";
import purpleSvg from '../../../images/hero/purple-svg.svg';
import purpleSvg2 from '../../../images/hero/purple-svg-2.svg';
import orangeSvg from '../../../images/hero/orange-svg.svg';
import yellowBigSvg from '../../../images/hero/yellow-big-svg.svg';
import dearPicture from '../../../images/hero/dear-roy-profile.png';
import "./hero.css";

const Hero = () => {
  return (
    <div className={'container'}>
      <div className={'hero-wrapper row d-flex justify-content-center align-items-center'}>
        <div className={'left col-lg-6'}>
          <p>Hy! I Am</p>
          <h1>{data.name}</h1>
          <p>{data.designation}</p>
          <SocialLinks className={'hero-social'}/>
        </div>
        <div className={'right d-none d-lg-block col-lg-6'}>
          <img className={'hero-particles purple-1'} src={purpleSvg} alt={'purpleSvg'} />
          <img className={'hero-particles purple-2'} src={purpleSvg2} alt={'purpleSvg2'} />
          <img className={'hero-particles orange'} src={orangeSvg} alt={'orangeSvg'} />
          <div className={'hero-profile-picture'}>
            <img src={yellowBigSvg} alt={'yellowBigSvg'} />
            <img className={'bg-blur'} src={yellowBigSvg} alt={'yellowBigSvg'} />
            <img src={dearPicture} alt={'dear-roy-profile-picture'} />
          </div>
        </div>
      </div>
      <div className="blur-shadow shadow-1"/>
      <div className="blur-shadow shadow-2"/>
    </div>
  )
}

export default Hero;
