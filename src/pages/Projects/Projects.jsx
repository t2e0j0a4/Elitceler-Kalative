import React, { useState, useContext } from 'react'
import styles from "./Projects.module.css";
import Drishtikon from "../../assets/DRISHTIKON.svg";
import Kalaarth from "../../assets/KALAARTH.svg";
import Pencil from "../../assets/Pencil.png";
import Principles from "../../assets/Principles.svg";
import Context from '../../context/createContext';

const Projects = () => {

  const { app__projects, pro__section1, section1__center, section1__details, section1__img, pro__section2, section2__center, section2__details, section2__img, pro__section3, section3__center, section3__head, drishti__box, drishti__text, drishti__carousal, drishti___wrap, drishti__slide1, drishti__slide2, drishti__slide3, drishti__slide4, drishti__slide5, drishti__btns, pro__section4, section4__center, section4__head, popup__form, form__inputs, section4__main, show__popup, popup__close } = styles;

  // Carousal

  const [carousalRate, setCarousalRate] = useState(1);

  const changeRate = (rate) => {

    if (rate === 'prev') {
      setCarousalRate((prev) => {
        return prev ===  1 ? 5 : prev - 1;
      })
    }

    if (rate === 'next') {
      setCarousalRate((prev) => {
        return prev === 5 ? 1 : prev + 1 ;
      })
    }
  }

  // Popup

  const [showPopup, setShowPopup] = useState(false);

  const context = useContext(Context);
  const { downloadInputs, updateInputs, popupFormSubmit } = context;

  return (
    <main className={app__projects}>

      {/* Section 1 - Drishtikon */}

      <section className={pro__section1}>
        <div className={section1__center}>

          {/* Details */}
          <div className={section1__details}>
            <h2>DRISHTIKON</h2>
            <p>A magazine for students presenting tales from our Indian culture with a modern perspective. This magazine consists of creative format, that'll help a student get access to topics like different careers, authentic Indian history, morals-ethics etc.</p>
            <a href="#drishtikon">Learn More</a>
          </div>

          {/* Image */}
          <div className={section1__img}>
            <img src={Drishtikon} alt="Drishtikon" />
          </div>

        </div>
      </section>

      {/* Section 1 - Drishtikon */}

      {/* Section 2 - Kalaarth */}

      <section className={pro__section2}>
        <div className={section2__center}>

          {/* Details */}
          <div className={section2__details}>
            <h2>कला Aarth</h2>
            <p>Project कला Aarth - is a comprehensive program for students covering the essential Life-skills and exposure to 21 holistically advancing chapters.</p>
            <a href="#kalaarth">Learn More</a>
          </div>

          {/* Image */}
          <div className={section2__img}>
            <img src={Kalaarth} alt="Kalaarth" />
          </div>

        </div>
      </section>

      {/* Section 2 - Kalaarth */}

      {/* Section 3 - Drishtikon */}

      <section className={pro__section3} id='drishtikon'>
        <div className={section3__center}>

          {/* Heading */}
          <div className={section3__head}>
            <h1>DRISHTIKON</h1>
          </div>

          {/* Project Box */}
          <div className={drishti__box}>

            {/* Text */}
            <div className={drishti__text}>
              <h3>Made for Students, by Students</h3>
              <p>Drishtikon is our introductory product, a monthly based self-help cum info-entertainment magazine for the youth of this country. This magazine consists of a creative format, that'll help a student get access to topics like different career opportunities, authentic Indian history, morals-ethics etc.</p>
            </div>

            {/* Carousal */}
            <div className={drishti__carousal}>
              <div className={drishti___wrap}>

                {/* Slide 1 */}
                <div className={drishti__slide1} style={{ display : `${carousalRate === 1 ? 'flex' : 'none'}` }}>
                  <p>Want to know more about Drihtikon?</p>
                </div>

                {/* Slide 2 */}
                <div className={drishti__slide2} style={{ display : `${carousalRate === 2 ? 'flex' : 'none'}` }}>
                  <p>Imagine a Pencil</p>
                  <img src={Pencil} alt="Pencil" />
                </div>

                {/* Slide 3 */}
                <div className={drishti__slide3} style={{ display : `${carousalRate === 3 ? 'flex' : 'none'}` }}>
                  <div>
                    <h4>The Lead, The Core</h4>
                    <p>Some concepts in our magazine are like the graphite of a pencil. Concepts like teaching lifestyle habits, emotions management, morals etc are our defining factors. ​Columns like these are eye opening and intriguing</p>
                  </div>
                  <img src={Pencil} alt="Pencil" />
                </div>

                {/* Slide 4 */}
                <div className={drishti__slide4} style={{ display : `${carousalRate === 4 ? 'flex' : 'none'}` }}>
                  <div>
                    <h4>The Wood, The Quality</h4>
                    <p>We cover concepts like different careers, breakdown of different sorts of media (books, movies, animes, etc), authentic historical events. These columns in our magazine is filled with interesting and wholesome content!</p>
                  </div>
                  <img src={Pencil} alt="Pencil" />
                </div>

                {/* Slide 5 */}
                <div className={drishti__slide5} style={{ display : `${carousalRate === 5 ? 'flex' : 'none'}` }}>
                  <div>
                    <h4>The Cover, The Beauty</h4>
                    <p>Our magazine consists of a story arc of two characters, Radhe and Paarth that will be presented in a comic fashion. These will be developing stories, and the content will grow with subsequent issues of our book.</p>
                  </div>
                  <img src={Pencil} alt="Pencil" />
                </div>

              </div>

              <div className={drishti__btns}>
                <button type='button' onClick={() => {
                  changeRate('prev')
                }} >
                  <ion-icon name="arrow-back"></ion-icon>
                </button>
                <button type='button' onClick={() => {
                  changeRate('next')
                }} >
                  <ion-icon name="arrow-forward"></ion-icon>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 3 - Drishtikon */}

      {/* Section 4 - Kaalarth */}

      <section className={pro__section4} id='kalaarth'>
        <div className={section4__center}>

          {/* Heading */}
          <div className={section4__head}>
            <h1>कला Aarth</h1>
            <button type='button' onClick={() => {
              setShowPopup(true);
            }} >Download</button>
          </div>

          {/* Download Popup */}
          <form onSubmit={(e) => {popupFormSubmit(e)}} className={`${popup__form} ${showPopup ? show__popup : ''}`}>
            <h2>Donwload Magazine</h2>
            <button type='button' className={popup__close} onClick={() => {
              setShowPopup(false);
            }} ><ion-icon name="close"></ion-icon></button>
            <div className={form__inputs}>
              <input required type="text" name='name' value={downloadInputs.name} onChange={(e) => {updateInputs(e)}} placeholder='Full Name' />
              <input required type="email" name='email' value={downloadInputs.email} onChange={(e) => {updateInputs(e)}} placeholder='Email' />
              <input required type="text" name='mobile' value={downloadInputs.mobile} onChange={(e) => {updateInputs(e)}} placeholder='Mobile Number' />
            </div>
            <button type='submit'>Submit</button>
          </form>

          {/* Main */}
          <div className={section4__main}>
            <img src={Principles} alt="Principles" />
          </div>

        </div>
      </section>

      {/* Section 4 - Kaalarth */}

    </main>
  )
}

export default Projects