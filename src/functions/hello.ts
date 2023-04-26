import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function hello(
  request: VercelRequest,
  response: VercelResponse
) {
  response.status(200).json({
    data: {
      msg: "Hello World",
    },
  });
}
