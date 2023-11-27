const app = require("./app.js");
const { PORT, IP_ADDRESS } = process.env;

app.listen(PORT, () => {
  return console.log(`running on http://${IP_ADDRESS}:${PORT}`);
});
