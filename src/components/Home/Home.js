import React from "react";
import "./Home.css";

import { Link } from "react-scroll";

import { FaGithub, FaHackerrank, FaFacebook, FaLinkedin } from "react-icons/fa";
import Avatar from "../../assets/imgs/avatar.svg";

// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants.js";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-left">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          Shex <span>Weeknd</span>
        </motion.h1>

        <motion.div
          className="type-animation"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <TypeAnimation
            sequence={[
              "Developpement Web.",
              2000,
              "Conteneurisation Docker.",
              2000,
              "Hacking éthique & Pentesting.",
              2000,
              "Technique des Réseaux.",
              2000,
              "Administration Système Linux.",
              2000,
              "Programmation avancé bas niveau.",
              2000
            ]}
            speed={50}
            className="text-accent"
            wrapper="span"
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          BIENVENU sur mon Portfolio.
          <br />
          Bonne visite à vous.
        </motion.p>

        <motion.div
          className="bouttons"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Link to="contact" activeClass="active" smooth={true} spy={true}>
            <button>Me contacter</button>
          </Link>
          <a href="CV.pdf" target="blank" className="text-gradient">
            Télécharger mon CV
          </a>
        </motion.div>

        <motion.div
          className="links-container"
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <a href="https://www.facebook.com/NRA303" target="blank">
            <FaFacebook />
          </a>
          <a href="https://github.com/shexweeknd" target="blank">
            <FaGithub />
          </a>
          <a href="https://www.hackerrank.com/profile/ShexWeeknd" target="blank">
            <FaHackerrank />
          </a>
          <a href="https://www.linkedin.com/in/nantenaina-ramarosandratana" target="blank">
            <FaLinkedin />
          </a>
        </motion.div>
        <div></div>
      </div>

      <motion.div
        className="home-right"
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
      >
        <img src={Avatar} alt="" />
      </motion.div>
    </section>
  );
}
