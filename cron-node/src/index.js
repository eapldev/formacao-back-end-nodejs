const app = require("./app");
const cron = require("node-cron");

cron.schedule("* * * * *", () => {
  console.log("Chamando a cron...");
});

app.listen(3333, () => console.log("Server is running..."));
