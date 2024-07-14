import conndb from "../../../Middlewire/Conndb";
import Request from "../../../Models/Requests";
import nodemailer from "nodemailer";

const handler = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.NODEMAILER_API_KEY,
    },
  });

  const { restaurantName, email, phone, address } = req.body;

  try {
    const newRequest = new Request({
      resturant_name: restaurantName,
      email,
      phone,
      address,
    });

    const resdata = await newRequest.save();

    if (resdata) {
      setImmediate(async () => {
        try {
          await transporter.sendMail({
            from: "Baksish", // sender address
            to: email, // list of receivers
            subject: "Request Received",
            text: `Dear ${restaurantName},

We have received your request and will review it shortly.

Details:
Restaurant Name: ${restaurantName}
Email: ${email}
Phone: ${phone}
Address: ${address}

Thank you,
Baksish`,
          });
        } catch (err) {
          console.error("Error sending email:", err);
        }
      });

      res.status(200).json({ success: true, data: resdata });
    } else {
      res.status(400).json({ success: false, data: null });
    }
  } catch (err) {
    res.status(400).json({ success: false, data: null });
  }
};

export default conndb(handler);
