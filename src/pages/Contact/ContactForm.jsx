import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  console.log(name, email);

  return (
    <div className=" broder p-5 flex flex-col gap-2">
      <div className=" flex flex-col gap-1 ">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          className=" py-2 border rounded-lg outline-none pl-2"
          onChange={(e) => setName(e.target.value)} // render
        />
      </div>

      <div className=" flex flex-col gap-1 ">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          className=" py-2 border rounded-lg outline-none pl-2"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button className=" py-3 px-3 rounded-lg bg-green-600 text-white">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
