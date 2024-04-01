import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bsolqky", "template_xylo6f7", form.current, {
        publicKey: "n6K5VQAsnQQUIwx2R",
      })
      .then(
        () => {
          setSuccess(true);
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log("succes");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
        }
      );
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-white p-4  dark:bg-gray-900 dark:text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            action="https://getform.io/f/pbqgkmyb"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md  focus:outline-none"
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md  focus:outline-none"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md  focus:outline-none"
            ></textarea>

            <button className="text-white font-semibold bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
            {error && "Error"}
            {success && "success"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
