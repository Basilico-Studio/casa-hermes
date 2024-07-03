import Mailjet from "node-mailjet";

export const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC || "public-api-key",
  process.env.MJ_APIKEY_PRIVATE || "private-api-key",
  {
    config: {},
    options: {},
  }
);
