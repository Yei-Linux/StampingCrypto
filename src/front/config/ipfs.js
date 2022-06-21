import { create } from "ipfs-http-client";

const createIPFSServer = () => {
  try {
    const response = create({
      url: "https://ipfs.infura.io:5001/api/v0",
    });

    return response;
  } catch (error) {
    console.error("IPFS error ", error);
    return undefined;
  }
};

const ipfs = createIPFSServer()

export default ipfs