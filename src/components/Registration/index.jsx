import "./style.css";
import { useState } from "react";

export const Registration = () => {
  const [userName, setUserName] = useState("");
  const [country, setCountry] = useState("Česká republika");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Uživatel ${userName} ze země ${country} se chce zaregistrovat.`);
  };

  return (
    <div className="registration-container">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user-name" className="registration-label">
          User name:
          <input
            type="text"
            name="user-name"
            id="user-name"
            className="registration-input"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </label>
        {userName === "" && <p>Uživatelské jméno je povinný údaj</p>}
        <label htmlFor="country" className="registration-label">
          Země původu:
          <select
            name="country"
            id="country"
            value={country}
            className="registration-input"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="Chorvatsko">Chorvatsko</option>
            <option value="Česká republika">Česká republika</option>
            <option value="Polsko">Polsko</option>
            <option value="Slovenská republika">Slovenská republika</option>
          </select>
        </label>
        <button
          type="submit"
          className="registration-button"
          disabled={userName === ""}
        >
          Register
        </button>
      </form>

    </div>
  );
};
