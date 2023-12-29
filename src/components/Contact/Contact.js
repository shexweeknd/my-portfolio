import React, { useState } from "react";
import "./Contact.css";

//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../variants";

import { validateMessage, validateName, validateMail } from "./Validator";

import emailjs from '@emailjs/browser';

import sendNotification from "../../shared/utils/showNotification";

export default function Contact() {

  const [ nom, setNom ] = useState("");
  const [ mail, setMail ] = useState("");
  const [ message, setMessage ] = useState("");

  const [ nameValidation, setNameValidation ] = useState({ message: "", state: false});  
  const [ mailValidation, setMailValidation ] = useState({ message: "", state: false});
  const [ messageValidation, setMessageValidation ] = useState({ message: "", state: false});

  const handleName = (e) => {
    setNom(e.target.value);
    setNameValidation(validateName(e.target.value));
  }

  const handleMessage = (e) => {
    setMessage(e.target.value);
    setMessageValidation(validateMessage(e.target.value));
  }

  const handleMail = (e) => {
    setMail(e.target.value);
    setMailValidation(validateMail(e.target.value));
  }

  const sendEmail = (e) => {
    e.preventDefault();

    e.target.disabled = true;

    const userData = {
      name: nom,
      mail: mail,
      message: message,
    };

    emailjs.send('service_n11z4ff', 'template_j0q3ax2', userData, 'NB7HdcMddHibzkIet')
     .then((result) => {
          sendNotification("success", result.text);
          e.target.disabled = false;
      }, (error) => {
          sendNotification("error", error.text);
          e.target.disabled = false;
      });

  }

  return (
    <section id="contact" className="contact">

      {/* text */}
      <motion.div
        className="texte"
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div>
          <h4>
            Allons-y
          </h4>
          <h2>
            Travaillons <br />
            ensemble!
          </h2>
        </div>
      </motion.div>

      {/* form */}
      <motion.form
        className="formulaire"
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <input
          style={nameValidation.message.length <= 0 ? {borderBottomColor: "gray"}: {borderBottomColor: "red"}}
          type="text"
          placeholder="Votre nom"
          onChange={handleName}
        />
        <p className="error-message"> { nameValidation.state ? "" : nameValidation.message } </p>

        <input
          style={mailValidation.message.length <= 0 ? {borderBottomColor: "gray"}: {borderBottomColor: "red"}}
          type="text"
          placeholder="Votre email"
          onChange={handleMail}
        />
        <p className="error-message"> { mailValidation.state ? "" : mailValidation.message } </p>

        <textarea
          style={messageValidation.message.length <= 0 ? {borderBottomColor: "gray"}: {borderBottomColor: "red"}}
          placeholder="Votre message"
          onChange={handleMessage}
        ></textarea>
        <p className="error-message"> { messageValidation.state ? "" : messageValidation.message } </p>

        <button disabled={!(mailValidation.state && nameValidation.state && messageValidation.state)} onClick={sendEmail}>Envoyer</button>
      </motion.form>
    </section>
  );
}
