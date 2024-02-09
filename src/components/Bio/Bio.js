import React from "react";
import "./Bio.css";

import About from "../../assets/imgs/bio.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants.js";

export default function Bio() {
  return (
    <section id="bio" className="bio">
      <motion.div
        className="image"
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img src={About} alt="" />
      </motion.div>

      <motion.div
        className="details"
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2>Que suis-je ?</h2>
        <h3>
          Ecole Supérieure Polytechnique d'Antsiranana.
        </h3>
        <p>
          J'ai intégré l'ESP Antsiranana depuis l'an 2020, et ai obtenu ma licence en 2023, mon parcours se base sur
          l'Electronique Informatique et la Technologie <strong>(EIT)</strong>.
          <br />
          Ma formation s'appuie sur :<br />
          <em>- les réseaux Informatiques</em>
          <br />
          <em>- les systèmes d'exploitation Linux</em>
          <br />
          <em>- le developpement d'applications multiplateforme</em>
          <br />
          <em>- l'électronique numérique et analogique</em>
          <br />
        </p>

        <h3>
          Ecole 42 - Antananarivo
        </h3>
        <p>
          J'apprécie vivement le système pédagogique proposé par l'école 42, j'ai intégré l'école par passion pour mes disciplines antérieures reçu à l'ESP Antsiranana.
          <br />
          Intégrer le campus 42 Antananarivo me permet de :<br />
          <em>- perfectionner mes acquis en programmation</em>
          <br />
          <em>- savoir travailler en équipe éfficacement</em>
          <br />
          <em>- perfectionner mon sens du relationnel</em>
          <br />
          <em>- améliorer mon sens de la discipline et de rigueur</em>
        </p>
        <p>
          J'ai actuelement 22 ans et je suis à la recherche d'une opportunité pour
          investir mes talents dans le monde evolutif de <em>l'IT</em>.
        </p>
        
      </motion.div>
    </section>
  );
}
