import React, { useState } from "react";
import "./form.css";
import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    try {
      const dbRef = collection(db, "Message");
      const added = await addDoc(dbRef, {
        Name: name,
        Email: email,
        Message: message,
        Timestamp: new Date(),
      });

      if (added) {
        alert("Message Sent!");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="form">
      <div className="container">
        <div className="box">
          <input
            type="text"
            placeholder="Name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="box">
          <input
            type="email"
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="box">
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="btn">
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
