import React from "react";

const PersonData = ({ name, interests }) => {
    return (
      <div>
        <h1>{name}</h1>
        <h2>Huvid ja hobid:</h2>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        <form className="contact-form">
            <input 
                type="text"
                name="name"
                placeholder="Sinu nimi"
            />
            <textarea 
                name="message"
                placeholder="Sinu tekst"
            />
            <button type="button">Saada info</button>
        </form>
      </div>
    )
  }
  
  export default PersonData