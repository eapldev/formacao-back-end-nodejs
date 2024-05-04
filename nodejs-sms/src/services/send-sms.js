const { Vonage } = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: "<apikey>",
  apiSecret: "<apisecret>",
});

const from = "<seunome>";
const to = "<seunumero>";

async function sendSMS(code) {
  const text = `O seu código é: ${code}`;

  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log("Message sent successfully");
      console.log(resp);
    })
    .catch((err) => {
      console.log("There was an error sending the messages.");
      console.error(err);
    });
}

module.exports = { sendSMS };
