import emailjs from "@emailjs/browser";

const sendEmail = (correo,mensaje) => {
  emailjs
    .send(
      "service_ms5wysg",
      "template_jarbjur",
      {
        message : mensaje,
        user_email: correo
      },
      "NsLZ0P4BjB_vcL4lF"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

const CorreoService = {
  sendEmail,
};

export default CorreoService;
