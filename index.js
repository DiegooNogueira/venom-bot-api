// index.js
const express = require("express");
const venom = require("venom-bot");

const app = express();
const PORT = 3000;

app.use(express.json());

let client;

// Inicializa o Venom Bot
venom
  .create()
  .then((clientInstance) => {
    client = clientInstance;
    console.log("Venom Bot está pronto!");
  })
  .catch((error) => {
    console.error("Erro ao iniciar o Venom Bot:", error);
  });

// Rota para enviar mensagens
app.post("/send-message", (req, res) => {
  const { number, message } = req.body;

  if (!number || !message) {
    return res.status(400).send("Número e mensagem são obrigatórios.");
  }

  client
    .sendText(number, message)
    .then((result) => {
      res.status(200).send("Mensagem enviada com sucesso!");
    })
    .catch((error) => {
      res.status(500).send("Erro ao enviar mensagem: " + error);
    });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
