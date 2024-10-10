import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_wfy15vy";
    const templateId = "template_1fqy99w";
    const publicKey = "ZRGJKx4cKL0sscDdp";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Aryan",
      number: number,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Details sent successfuly", response);
        setName("");
        setNumber("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending details:", error);
      });
  };

  return (
    <div className="mb-[-35px]">
      <div className="flex flex-col justify-center items-center mt-8">
        <h1 className="font-bold text-3xl mb-[45px] ">Contact Us</h1>

        <div className="flex gap-[220px]">
            {/* section 1 */}
             {/* Address */}
          <div className="flex flex-col gap-y-10">

<div className="flex items-center gap-6">
  <IoLocationOutline size={36}/>
  <div className="flex flex-col">
    <h2 className="font-semibold">Our Office Address</h2>
    <h3>area,city,pincode</h3>
  </div>
  </div>

  <div className="flex items-center gap-6">
    <IoMailOpenOutline size={36}/>
    <div className="flex flex-col">
      <h2 className="font-semibold">General Enquiries</h2>
      <h3>sample@gmail.com</h3>
    </div>
    </div>

    <div className="flex items-center gap-6">
      <IoCallOutline size={36} />
      <div className="flex flex-col">
        <h2 className="font-semibold">Call Us</h2>
        <h3>+91 78282-77226</h3>
      </div>
      </div>

      <div className="flex items-center gap-6">
        <GoClock size={36}/>
        <div className="flex flex-col">
          <h2 className="font-semibold">Our Timing</h2>
          <h3>Mon-Sun: 10:00 AM - 9:00 PM</h3>
        </div>
        </div>

      </div>



            {/* section 2 */}
          <form onSubmit={handleSubmit} className="flex flex-col     ">
            <div className="flex flex-col gap-x-4">
              {/* <div className="flex flex-col"> */}
                <input
                  type="text"
                  value={name}
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  className="p-1 mb-3 border min-h-[35px] w-[400px] rounded-md"
                />

                <input
                  type="number"
                  value={number}
                  placeholder="Mobile Number"
                  onChange={(e) => setNumber(e.target.value)}
                  className="p-1 mb-3 border min-h-[35px] w-[400px] rounded-md"
                />
                <input
                  type="email"
                  value={email}
                  placeholder="Email ID"
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-1 mb-3 border min-h-[35px] w-[400px] rounded-md"
                />
              {/* </div> */}
              {/* <div></div> */}
              <textarea
                cols="35"
                rows="3"
                placeholder="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-1 border rounded-md"
              ></textarea>
            </div>

            <div className="flex justify-center mt-5 ">
              <button
                className="w-[110px] h-[30px] rounded-3xl p-1 bg-yellow-300"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>

        </div>

        {/* map and address */}
        <div className="flex  justify-center items-center mt-[65px] mb-[100px]">
          {/* Map */}
          <div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.3821105597846!2d76.06146805693179!3d22.96758756419041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317944ac343e1%3A0x9e7ee2634d12411a!2sDewas%20mata%20Mandir!5e0!3m2!1sen!2sin!4v1724160306780!5m2!1sen!2sin" 
          width="1122" height="300"  allowFullScreen="" loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>

         
                </div>






              </div>
            </div>
          
  );
};

export default Contact;
