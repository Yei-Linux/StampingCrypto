import React, { Fragment } from "react";
import {
  buttonCSS,
  cardCSS,
  labelCSS,
  titleCSS,
} from "../../styles/components";
import Sender from "../Sender";

const EvidenceDetail = ({ hashIPFS, transactionId, name, lastName }) => {
  const copyClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Fragment>
      {hashIPFS && (
        <div className={cardCSS}>
          <h2 className={titleCSS}>Detalle de Evidencia</h2>
          <div>
            <div>
              <div>
                <label className={labelCSS} htmlFor="hash">
                  Hash:
                </label>
              </div>
              <div className="flex justify-between">
                <strong className={labelCSS}>{hashIPFS}</strong>

                <button
                  onClick={() => copyClipboard(hashIPFS)}
                  className={buttonCSS}
                  type="submit"
                >
                  Copiar
                </button>
              </div>
            </div>
          </div>

          {transactionId && (
            <div>
              <div>
                <label className={labelCSS} htmlFor="trsxid">
                  Evidence ID(TrsxId):
                </label>
              </div>
              <div className="flex justify-between">
                <strong className={labelCSS}>{transactionId}</strong>

                <button
                  onClick={() => copyClipboard(transactionId)}
                  className={buttonCSS}
                  type="submit"
                >
                  Copiar
                </button>
              </div>
            </div>
          )}

          <div className="flex justify-between mb-2">
            <div>
              <a
                className="underline text-xs"
                target="_blank"
                href={`https://stamping.io/api/hash/certificate/?hash=${hashIPFS}`}
                rel="noreferrer"
              >
                Descargar Certificado
              </a>
            </div>

            <div>
              <a
                className="underline text-xs"
                target="_blank"
                href={`https://ipfs.infura.io/ipfs/${hashIPFS}`}
                rel="noreferrer"
              >
                Descargar PDF
              </a>
            </div>
          </div>
          <Sender
            name={name}
            lastName={lastName}
            hash={hashIPFS}
            trsxid={transactionId}
          />
        </div>
      )}
    </Fragment>
  );
};

export default EvidenceDetail;
