import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [isEmailSent, setIsEmailSent] = useState(false); // Dodajemy stan do obsługi komunikatu

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const contactCenterFlexDirection = windowWidth < 1100 ? "column" : "row";
  const contactCenterFontSizeH2 = windowWidth < 1100 ? "5vh" : "8vh";
  const contactCenterMaxWidthForm = windowWidth < 1100 ? "300px" : "400px";

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "grzesiu_one",
        "template_e857q8u",
        form.current,
        "ek-GFUbUdk3vIfYBb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true); // Ustawiamy stan, że e-mail został wysłany
          form.current.reset();
          toast.success(
            "Dziękuję za kontakt :) Odezwę się najszybciej jak to możliwe."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="kontakt">
      <div
        className="contact-container"
        style={{ flexDirection: contactCenterFlexDirection }}
      >
        <div className="contact-info">
          <h2 style={{ fontSize: contactCenterFontSizeH2 }}>Kontakt</h2>
          <p>Numer telefonu: </p>
          <p>+48 123 456 789</p>
        </div>
        <div
          className="contact-form"
          style={{ maxWidth: contactCenterMaxWidthForm }}
        >
          <h2 style={{ fontSize: contactCenterFontSizeH2 }}>
            Formularz kontaktowy
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Imię:</label>
            <input type="text" id="name" name="from_name" required />

            <label htmlFor="email">Adres email:</label>
            <input type="email" id="email" name="from_email" required />

            <label htmlFor="message">Wiadomość:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Wyślij</button>
          </form>
        </div>
      </div>
      <ToastContainer
        autoClose={5000}
        draggable
        position="top-center"
        theme="dark"
        closeOnClick
      />
    </section>
  );
}

export default Contact;
