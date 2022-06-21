/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import Contract from "./components/Contract";
import Evidence from "./components/Evidence";
import { titleCSS } from "./styles/components";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2 className={titleCSS}>Demo</h2>
        <div className="flex gap-7 flex-wrap justify-center">
          <Contract />
          <Evidence />
        </div>
        {/*
        <h2>Descargar pdf</h2>
        <textarea
          placeholder="Introduzca el hash"
          value={hash}
          onChange={(e) => setHash(e.target.value)}
        ></textarea>
        <button onClick={getPdf}>pdf</button>
        <textarea
          placeholder="Token de su cartera digital"
          type="text"
          value={token2}
          onChange={(e) => setToken2(e.target.value)}
        ></textarea>
        <br></br>
        <textarea
          type="text"
          placeholder="Código de su contrato"
          value={contract}
          onChange={(e) => setContract(e.target.value)}
        ></textarea>
        <br></br>
        <textarea
          placeholder="Llave privada de su cartera digital"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        ></textarea>
        <br></br>
        <input
          className="input__field"
          type="file"
          onChange={selectedHandler}
        />
        <br></br>
        <button onClick={sendFiles} type="submit">
          Generar transacción blockchain
        </button>
        <br></br>
        <button onClick={uploadBlockchain} type="submit">
          Subir a la blockchain
        </button>
        <br></br>
        <p>Código de firma </p>
        <textarea
          placeholder="Firma de confirmación generada"
          value={rawmessage}
          onChange={(e) => setRawmessage(e.target.value)}
        ></textarea>
        */}
      </div>
    </div>
  );
}

export default App;
