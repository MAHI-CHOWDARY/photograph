import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUser, FaWhatsapp, FaAnchor, FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,     
        process.env.REACT_APP_TEMPLATE_ID,    
        form.current,
        process.env.REACT_APP_PUBLIC_KEY      
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSuccess(true); // Set success state
          form.current.reset();

          // Reset button text after a delay
          setTimeout(() => setIsSuccess(false), 3000);
        },
        (error) => {
          console.error("Email send error:", error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 p-6">
        <div className="w-full max-w-4xl bg-gray-900 p-8 rounded-lg shadow-lg text-white relative">
          <h2 className="text-yellow-400 text-3xl font-bold text-center mb-6">CONTACT US</h2>

          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Form Section */}
            <form className="relative" ref={form} onSubmit={sendEmail}>
              <div className="absolute top-2 left-2 w-full h-full bg-gray-400/20 rounded-lg shadow-lg"></div>
              <div className="relative p-6 rounded-lg shadow-2xl bg-gray-300/20 border border-gray-700 overflow-hidden">
                <div className="mb-4">
                  <label className="block text-white text-sm font-semibold">NAME</label>
                  <input type="text" name="name" className="w-full bg-transparent border-b-2 border-gray-500 text-white py-1 outline-none focus:border-white" required />
                </div>
                <div className="mb-4">
                  <label className="block text-white text-sm font-semibold">E.MAIL</label>
                  <input type="email" name="email" className="w-full bg-transparent border-b-2 border-gray-500 text-white py-1 outline-none focus:border-white" required />
                </div>
                <div className="mb-4">
                  <label className="block text-white text-sm font-semibold">MESSAGE</label>
                  <textarea name="message" className="w-full bg-transparent border-b-2 border-gray-500 text-white py-1 outline-none focus:border-white" required></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full py-2 px-4 rounded-md transition-colors text-white ${
                    isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                >
                  {isSuccess ? "✔️ Success" : "Send Message"}
                </button>
              </div>
            </form>

            {/* Contact Details */}
            <div className="flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3 text-gray-400">
                <FaUser className="text-xl" />
                <span>Dharma Raju</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaWhatsapp className="text-xl" />
                <span>89789 49883</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaAnchor className="text-xl" />
                <span>Narasannapeta,Srikakulam</span>
              </div>

              {/* Social Media */}
              <div className="flex gap-4 mt-4 text-gray-400">
                <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=qjidncz" className="group">
                  <FaInstagram size={24} className="group-hover:text-pink-500 transition-colors duration-300" />
                </a>
                <a href="#Youtube" className="group">
                  <FaYoutube size={24} className="group-hover:text-red-500 transition-colors duration-300" />
                </a>
                <a href="#Twitter" className="group">
                  <FaTwitter size={24} className="group-hover:text-blue-400 transition-colors duration-300" />
                </a>
                <a href="#Facebook" className="group">
                  <FaFacebook size={24} className="group-hover:text-blue-600 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* QR Div */}
          <div className="flex justify-center gap-10 items-center mt-8 px-4">
            <div className="text-gray-400 text-sm">
              <p>SCAN ME HERE :: --</p>
            </div>
            <div>
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=YourDataHere" alt="QR Code" className="w-24 h-24" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;