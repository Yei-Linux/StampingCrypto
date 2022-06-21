/*import { useState } from "react";

export const useBackupCode = () => {
  const [hash, setHash] = useState("");
  const [key, setKey] = useState("");
  const [token2, setToken2] = useState("");
  const [contract, setContract] = useState("");
  const [files, setFiles] = useState("");
  const [rawmessage, setRawmessage] = useState("");

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const selectedHandler = (e) => {
    setFiles(e.target.files[0]);
  };
  const uploadBlockchain = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `https://api.stamping.io/util/blockchain/sendTX/?token=${token2}&rawTransaction=${rawmessage}&node=https://bsc-dataseed1.binance.org`
    );

    alert("Contrato registrado con éxito");
    console.log(response.data);
  };
  const getPdf = async () => {
    const response = await axios.get(`${endpoint}/?hash=${hash}`, {
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    window.open(url, "_blank");
  };

  const sendFiles = async (e) => {
    e.preventDefault();

    const f = new FormData();

    const response2 =await axios.post(`https://api.stamping.io/contract/abi/base64/`,{
        headers: { "Content-Type": "multipart/form-data","Authorization":"Basic MTY1NDQ4MjI1MTE0MDoyZDk5YWI2YzRkMjQ0NDcyMGY5NTg5ZGE2MjQwYzQyZTRhM2M1OTg1ZGJjZmMxZWRhMTM2NjBhMGY1YQ==" },
        data:{
          "token":getBase64(token2),
          "contract":contract,
          "abi":getBase64(files)
          
        }      
      });
    const response2 =await axios.post(`https://api.stamping.io/contract/abi/base64/?token=${getBase64(token2)}&contract=${contract}&abi=${getBase64(files)}`,{
         "token":getBase64(token2),
          "contract":contract,
          "abi":getBase64(files)     
      });
    const qs = require("qs");
    const response2 = await axios.post(
      `https://api.stamping.io/contract/abi/base64/?token=${btoa(
        token2
      )}&contract=${contract}&abi=${btoa(
        "466f61582a07ecdf3d6685e55128a0a8388bd244bb0b8a94cf6b65f4bad1f592"
      )}`,
      qs.stringify({
        token: btoa(token2),
        contract: contract,
        abi: btoa(
          "466f61582a07ecdf3d6685e55128a0a8388bd244bb0b8a94cf6b65f4bad1f592"
        ),
      })
    );

    const response1 = await axios.post(
      `https://api.stamping.io/contract/send/?token=${token2}&contract=${contract}&method=data&param1=0x828831030210E162b68296b31e2d0fa964d5D404&node=https://bsc-dataseed1.binance.org&chainid=648529&privateKey=${key}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Basic MTY1NDQ4MjI1MTE0MDoyZDk5YWI2YzRkMjQ0NDcyMGY5NTg5ZGE2MjQwYzQyZTRhM2M1OTg1ZGJjZmMxZWRhMTM2NjBhMGY1YQ==",
        },
        auth: {
          username: "tu usuario",
          password: "tu contraseña",
        },
      }
    );

    const response = await axios.post(
      `https://api.stamping.io/util/keys/signTX/?token=${token2}&privateKey=${key}&address=0x0Ca82c887265a45F81ea19Ba0b77479F1E81B919&nonce=0&data=&gas=200000&value=0&chainId=1`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Basic MTY1NDQ4MjI1MTE0MDoyZDk5YWI2YzRkMjQ0NDcyMGY5NTg5ZGE2MjQwYzQyZTRhM2M1OTg1ZGJjZmMxZWRhMTM2NjBhMGY1YQ==",
        },
        auth: {
          username: "",
          password: "",
        },
      }
    );
    alert("Transacción completada");

    const response3 = await axios.post(
      `https://api.stamping.io/contract/send/?token=${token2}&contract=${contract}&method=data&param1=0x828831030210E162b68296b31e2d0fa964d5D404&node=https://bsc-dataseed1.binance.org&chainid=648529&privateKey=${key}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Basic MTY1NDQ4MjI1MTE0MDoyZDk5YWI2YzRkMjQ0NDcyMGY5NTg5ZGE2MjQwYzQyZTRhM2M1OTg1ZGJjZmMxZWRhMTM2NjBhMGY1YQ==",
        },
        auth: {
          username: "tu usuario",
          password: "tu contraseña",
        },
      }
    );
    setRawmessage(response.data.data.data.rawMessage);
  };
};*/
