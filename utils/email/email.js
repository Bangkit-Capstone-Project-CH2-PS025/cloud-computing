const nodemailer = require("nodemailer");

// p : avzptedynmwigihy

module.exports = {
  sendEmail: async (dataEmail) => {
    return new Promise(async (resolve, reject) => {
      try {
        const transport = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: "ofc.itinergo@gmail.com",
            pass: "avzptedynmwigihy",
          },
        });

        const response = await transport.sendMail(dataEmail);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
};
