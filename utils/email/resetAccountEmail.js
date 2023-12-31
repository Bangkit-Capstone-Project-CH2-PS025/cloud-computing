const { header, footer } = require("./template");

const resetAccount = (link) => {
  const content = `
  <p>
  You received this email because you have made a Password Reset request at Itinergo.
    <br>
    Change your password immediately by clicking the button below.
  </p>
  
  <a href="${link}" style="color: white;" class="auth-button">Reset Your Password</a>
  
  <p>
    If you don't think you have made a Password Reset request at Itinergo, please ignore this email.
    <br>
    Alternative link: <a href="${link}">${link}</a>
  </p>
  

  <hr>
  
  <p>Copyright &copy; ${new Date().getFullYear()} Itinergo`;

  return header + content + footer;
};

module.exports = resetAccount;
