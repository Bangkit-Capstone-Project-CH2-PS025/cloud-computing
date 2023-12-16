const app = require("./app.js");
const { PORT, IP_ADDRESS } = process.env;

app.listen(PORT, "0.0.0.0", () => {
  return console.log(`running on http://${IP_ADDRESS}:${PORT}`);
});
