import React, { useState } from "react";
import axios from "axios";
import { buttonCSS } from "../../styles/components";
import TextField from "../../ui/TextField";

const Sender = ({ name, lastName, hash, trsxid }) => {
  const [emailTo, setEmailTo] = useState("");

  const handleChangeEmail = (e) => setEmailTo(e.target.value);

  const handleSendEmail = async () => {
    if (!emailTo) return;

    const { data } = await axios.post("http://localhost:3035/email", {
      to: emailTo,
      name,
      lastName,
      hash,
      trsxid,
    });

    console.log(data);
  };

  return (
    <div>
      <TextField
        label="Coloca el correo del destinatario:"
        placeholder="Coloca el correo del destinatario..."
        value={emailTo}
        onChange={handleChangeEmail}
        type="input"
      />

      <button className={buttonCSS} onClick={handleSendEmail}>
        Enviar Correo
      </button>
    </div>
  );
};

export default Sender;
