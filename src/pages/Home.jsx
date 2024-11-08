import Navbar from "../components/Navbar";
import arrowUp from "../assets/arrowup.svg";
import { useRef, useState } from "react";
import Projets from "../components/Projets";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import "../style/home.scss";

function Home() {
  const sectionSkills = useRef(null);
  const sectionProjets = useRef(null);
  const sectionContact = useRef(null);

 
  

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  return (
    <>
      <nav>
        <Navbar
          scrollToSection={scrollToSection}
          sectionSkills={sectionSkills}
          sectionProjets={sectionProjets}
          sectionContact={sectionContact}
        />
      </nav>
      <header>
        <div className="arrow_up" onClick={scrollToTop}>
          <img src={arrowUp} alt="" />
        </div>
        <Header />
      </header>

      <section className="section_container">
        <About />
      </section>
      <section className="section_container" ref={sectionSkills}>
        <Skills />
      </section>
      <section className="section_container" ref={sectionProjets}>
        <div className="title_section">
          <h2>PROJETS</h2>
          <div className="line"></div>
        </div>
        <Projets />
      </section>
      <span ref={sectionContact}></span>
    </>
  );
}
export default Home;
