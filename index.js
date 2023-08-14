const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const { email, name, content } = JSON.parse(event.body); // Parse the incoming JSON body

    const apiKey = process.env.BREVO_API_KEY; // Use the API key from environment variable

    const response = await axios.post(
      "https://api.sendinblue.com/v3/smtp/email",
      {
        sender: { name: "Daman Mokha", email: "daman@damanmokha.com" },
        to: [{ email: "damanmokha24@gmail.com" }],
        subject: "New Contact on site",
        htmlContent: `
          <p>Someone contacted on site.</p>
          <table border="1">
            <tr><td>Name:</td><td>${name}</td></tr>
            <tr><td>Email:</td><td>${email}</td></tr>
            <tr><td>Content:</td><td>${content}</td></tr>
          </table>
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent successfully",
        response: response.data,
      }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error sending email" }),
    };
  }
};
