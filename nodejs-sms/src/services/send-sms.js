const { Vonage } = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: "YOUR_API_KEY",
  apiSecret: "YOUR_API_SECRET",
});

const from = "<your_name>";
const to = "<person_number>";

async function sendSMS(code) {
  const text = `O seu código é ${code}`;

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