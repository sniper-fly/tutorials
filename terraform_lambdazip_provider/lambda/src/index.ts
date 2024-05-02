import axios from "axios";

export const handler = (event, context) => {
  // const url = "https://api.animethemes.moe/anime";
  // const res = await axios.get(url);
  // console.log(res.data);
  return context.logStreamName;
};
