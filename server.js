const app = require("./app.js");
const { PORT } = process.env;
const IP_ADDRESS = "127.0.0.1";

app.listen(PORT, () => {
  return console.log(`running on http://${IP_ADDRESS}:${PORT}`);
});
