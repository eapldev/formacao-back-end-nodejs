const { Router } = require("express");
const { sendSMS } = require("./services/send-sms");

const routes = Router();

routes.get("/health", (req, res) => {
  return res.status(200).json({ message: "Server on" });
});

routes.post("/send-sms", async (req, res) => {
  try {
    const code = Math.floor(Math.random() * 1000);
    // salvaria no banco de dados o código enviado
    await sendSMS(code);
    return res.status(200).json({ message: "SMS enviado com sucesso..." });
  } catch (error) {
    return res.status(400).json({ message: "Falha ao enviar o SMS..." });
  }
});

// outra rota para dar baixa no código já digitado

module.exports = routes;