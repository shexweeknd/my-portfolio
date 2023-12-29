import React from "react";
import "./Work.css";

//compétences
import Reacjs from "../../assets/icons/React.png";
import Nodejs from "../../assets/icons/Node.js.png";
import Socketio from "../../assets/icons/Socket-io.png";
import Kivymd from "../../assets/icons/kivymd.png";
import Qt5 from "../../assets/icons/QT5.svg";
import Linux from "../../assets/icons/Linux.png";
import Docker from "../../assets/icons/Docker.png";
import C from "../../assets/icons/C++.png";
import Python from "../../assets/icons/Python.png";
import JavaScript from "../../assets/icons/JavaScript.png";

//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../variants";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { worklist } from "./worklist.js";

export default function Work() {
  return (
    <section id="work" className="work">
      {/* gauche */}
      <motion.div
        className="work-details"
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div>
          <h2>
            Mes derniers <br />
            Travaux.
          </h2>
          <p>
            Mes projets archivés concernant le developpement d'application sont
            hébérgés sur mon compte{" "}
            <a
              href="https://github.com/shexweeknd?tab=repositories"
              target="blank"
            >
              Github
            </a>
            , cependant voici quelques aperçus de mes meilleurs travaux :
          </p>
        </div>
        <div className="icon-container">
          <img src={C} />
          <img src={Python} />
          <img src={JavaScript} />
          <img src={Reacjs} />
          <img src={Nodejs} />
          <img src={Socketio} />
          <img src={Kivymd} />
          <img src={Qt5} />
          <img src={Linux} />
          <img src={Docker} />
        </div>
      </motion.div>

      {/* droite */}
      <motion.div
        className="carousel-container"
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* caroussel */}
        <Carousel className="carousel">
          {worklist.map((item) => (
            <div key={item.title}>
              <img src={item.image} />
              <p>
                <em>{item.title}</em>
              </p>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
}
