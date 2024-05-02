import axios from "axios";
// const url = "https://api.animethemes.moe/anime";
// const res = await axios.get(url);
// console.log(res.data);

import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world",
    }),
  };
};
