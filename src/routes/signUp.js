import React, { useState } from "react";

export default function SignUp() {
  const [lastName, serLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("/create-customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({lastName: lastName, firstName: firstName, email: email})
    });
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <input type="text" id="last-name" name="lastName" onChange={(e) => serLastName(e.target.value)}></input>
      <input type="text" id="first-name" name="firstName" onChange={(e) => setFirstName(e.target.value)}></input>
      <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
      <button id="submit">
        <span>作成</span>
      </button>
    </form>
  );
}
