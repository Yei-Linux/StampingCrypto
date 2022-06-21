import React from "react";
import { useState } from "react";
import stampingAxios from "../../config/stampingAxios";
import { formatParams } from "../../helpers/data.helper";
import { buttonCSS, cardCSS, titleCSS } from "../../styles/components";
import TextField from "../../ui/TextField";

const Contract = () => {
  const [digitalToken, setDigitalToken] = useState("");
  const [digitalAddress, setDigitalAddress] = useState("");
  const [privateDigitalKey, setPrivateDigitalKey] = useState("");

  const [contractName, setContractName] = useState("");

  const handleChangeContract = (e) => setContractName(e.target.value);

  const handleChangeDigitalToken = (e) => setDigitalToken(e.target.value);

  const handleChangeDigitalAddress = (e) => setDigitalAddress(e.target.value);

  const handleChangePrivateDigitalKey = (e) =>
    setPrivateDigitalKey(e.target.value);

  const handleCreateContract = async (e) => {
    e.preventDefault();
    try {
      const params = formatParams({
        totalSupply: 1000000000000000,
        decimals: 10,
        symbol: "MYTOKEN",
        gas: 9000000,
        chainId: 97,
        node: "https://bsc-dataseed1.binance.org",
        to: digitalAddress,
        token: digitalToken,
        name: contractName,
        privateKey: privateDigitalKey,
      });
      const response = await stampingAxios.post(
        `/contract/erc20/create/?${params}`
      );
      const message =
        response && response.message ? response.message : "Contrato creado";
      alert(message);
    } catch (error) {
      console.log(error);
      alert("Contrato registrado");
    }
  };

  return (
    <div className={cardCSS}>
      <h2 className={titleCSS}>Crear contrato</h2>
      <div>
        <TextField
          label="Nombre del contrato:"
          placeholder="Nombre del contrato"
          value={contractName}
          onChange={handleChangeContract}
        />
        <TextField
          label="Token de su cartera digital:"
          placeholder="Token de su cartera digital"
          value={digitalToken}
          onChange={handleChangeDigitalToken}
        />
        <TextField
          label="Address:"
          placeholder="Address"
          value={digitalAddress}
          onChange={handleChangeDigitalAddress}
        />
        <TextField
          label="Llave privada de su cartera digital:"
          placeholder="Llave privada de su cartera digital"
          value={privateDigitalKey}
          onChange={handleChangePrivateDigitalKey}
        />
        <button className={buttonCSS} onClick={handleCreateContract}>
          Crear contrato
        </button>
      </div>
    </div>
  );
};

export default Contract;
