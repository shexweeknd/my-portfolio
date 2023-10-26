import React from "react";
import "./Exp.css";

import Experience from "../../assets/imgs/exp.png";
import { services } from "./services";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants.js";

export default function Exp() {
  return (
    <section id="exp" className="exp">

      {/* text & image */}
      <motion.div
      className="text-image"
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2>Ce que je fais</h2>
        <h3>
          Etant polyvalent, je travaille généralement sur les réseaux et le
          developpement d'application.
        </h3>
        <button>
          <a href="%PUBLIC_URL%/CV.pdf" target="blank">Voir mon CV</a>
        </button>
        <img src={Experience} alt=""/>
      </motion.div>

      {/* services */}
      <motion.div
      className="services"
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* service list */}
        <div>
          {services.map((service, index) => {
            // destructuration de service
            const { name, description } = service;

            return (
              <div
                className="exp-element"
                key={index}
              >
                <div style={{maxWidth: "476px"}}>
                  <h4>
                    {name}
                  </h4>
                  <p>{description}</p>
                </div>
                <div style={{display: "flex", flexDirection: "column", flex: "1 1", alignItems: "flex-end"}}>
                  <div style={{width: "320px", border: "1px solid gray"}}></div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
