import React from 'react';
import heroBgImage from '.././assets/imagest/hero-bg.svg';
import heroBanner1 from '.././assets/imagest/sch.jpg';
import heroBanner2 from '.././assets/imagest/Output.jpg';
import heroShape1 from '.././assets/imagest/hero-banner-2.jpg';
import heroShape2 from '.././assets/imagest/hero-banner-2.jpg';
import aboutBannerImage from '.././assets/imagest/about-banner.jpg';
import aboutShape1Image from '.././assets/imagest/about-shape-1.svg';
import aboutShape2Image from '.././assets/imagest/about-shape-2.svg';
import aboutShape3Image from '.././assets/imagest/about-shape-3.png';
import aboutShape4Image from '.././assets/imagest/about-shape-4.svg';
import Category from './Category';
import Courses from './Courses';



const HomeSection = () => {
  return (
    <div>
      <section>
      <div
        className="section hero has-bg-image"
        id="home"
        aria-label="home"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 section-title text-12px">
            Elevate Your Future With <span className="span">Arafah</span> International School
            </h1>
            <p className="hero-text">
            Empowering Minds, Building Leaders, and Nurturing Excellence in Education
            </p>
           
          </div>

          <figure className="hero-banner">
            <div className="img-holder one" style={{ '--width': 270, '--height': 300 }}>
              <img src={heroBanner1} width="270" height="300" alt="hero banner" className="img-cover" />
            </div>

            <div className="img-holder two" style={{ '--width': 240, '--height': 370 }}>
              <img src={heroBanner2} width="240" height="370" alt="hero banner" className="img-cover" />
            </div>

           
          </figure>
        </div>

      </div>
      </section>
      <Courses/>
      <Category />
      <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <div className="img-holder" style={{ '--width': 520, '--height': 370 }}>
            <img
              src={aboutBannerImage}
              width="520"
              height="370"
              loading="lazy"
              alt="about banner"
              className="img-cover"
            />
          </div>
          <img src={aboutShape1Image} width="360" height="420" loading="lazy" alt="" className="shape about-shape-1" />
          <img src={aboutShape2Image} width="371" height="220" loading="lazy" alt="" className="shape about-shape-2" />
          <img src={aboutShape3Image} width="722" height="528" loading="lazy" alt="" className="shape about-shape-3" />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="h2 section-title">
            Over 10 Years in <span className="span">Distant learning</span> for Skill Development
          </h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna
            aliquaenim ad minim.
          </p>
          <ul className="about-list">
            <li className="about-item">
              <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
              <span className="span">Expert Trainers</span>
            </li>
            <li className="about-item">
              <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
              <span className="span">Online Remote Learning</span>
            </li>
            <li className="about-item">
              <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
              <span className="span">Lifetime Access</span>
            </li>
          </ul>
          <img src={aboutShape4Image} width="100" height="100" loading="lazy" alt="" className="shape about-shape-4" />
        </div>
        
      </div>
    </section>
    
    </div>


  );

};

export default HomeSection;
