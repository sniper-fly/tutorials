import axios from "axios";

export const handler = async (event, context) => {
  const url = "https://api.animethemes.moe/anime";
  const res = await axios.get(url);
  return res;
};
