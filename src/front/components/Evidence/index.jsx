import React, { Fragment, useState } from "react";
import ipfs from "../../config/ipfs";
import axios from "axios";
import { buttonCSS, cardCSS, titleCSS } from "../../styles/components";
import TextField from "../../ui/TextField";
import EvidenceDetail from "../EvidenceDetail";

const Evidence = () => {
  const [digitalToken, setDigitalToken] = useState("");
  const [file, setFile] = useState(null);
  const [transactionId, setTransactionId] = useState(null);
  const [hashIPFS, setHashIPFS] = useState(null);
  const [names, setNames] = useState(null);
  const [lastNames, setLastNames] = useState(null);

  const generateEvidence = async (pdfHash) => {
    try {
      const body = {
        evidence: pdfHash,
        token: digitalToken,
        async: false,
      };
      const {
        data: { data },
      } = await axios.post(`http://localhost:3035`, body);

      const { trxid } = data;

      if (!trxid) throw new Error("Error on create evidence");

      setHashIPFS(pdfHash);
      setTransactionId(trxid);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleUploadFileToIpfs = async () => {
    try {
      const response = await ipfs.add(file);

      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleGenerateEvidence = async () => {
    try {
      const { path } = await handleUploadFileToIpfs();
      await generateEvidence(path);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeName = (e) => setNames(e.target.value);
  const handleChangeLastName = (e) => setLastNames(e.target.value);
  const handleChangeDigitalToken = (e) => setDigitalToken(e.target.value);

  const selectedHandler = (e) => setFile(e.target.files[0]);

  return (
    <Fragment>
      <div className={cardCSS}>
        <h2 className={titleCSS}>Crear Evidencia</h2>

        <TextField
          label="Nombres:"
          placeholder="Nombres..."
          value={names}
          onChange={handleChangeName}
          type="input"
        />
        <TextField
          label="Apellidos:"
          placeholder="Apellidos..."
          value={lastNames}
          onChange={handleChangeLastName}
          type="input"
        />
        <TextField
          label="Selecciona el pdf a cargar:"
          onChange={selectedHandler}
          type="input_file"
        />
        <TextField
          label="Token de su cartera digital:"
          placeholder="Token de su cartera digital..."
          value={digitalToken}
          onChange={handleChangeDigitalToken}
        />

        <button
          className={buttonCSS}
          onClick={handleGenerateEvidence}
          type="submit"
        >
          Generar transacción
        </button>
      </div>

      <EvidenceDetail
        name={names}
        lastName={lastNames}
        hashIPFS={hashIPFS}
        transactionId={transactionId}
      />
    </Fragment>
  );
};

export default Evidence;
