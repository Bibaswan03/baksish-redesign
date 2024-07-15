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

  const { restaurantName, email, phone, address, name } = req.body;

  try {
    const newRequest = new Request({
      resturant_name: restaurantName,
      name,
      email,
      phone,
      address,
    });

    const resdata = await newRequest.save();

    if (resdata) {
      setImmediate(async () => {
        try {
          await transporter.sendMail({
            from: '"Baksish" <no-reply@baksish.com>', // sender address
            to: email, // list of receivers
            subject: "Request Received",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                <h2 style="color: #661268; text-align: center;">Request Received</h2>
                <p style="font-size: 16px;">Dear <strong>${restaurantName}</strong>,</p>
                <p style="font-size: 16px;">
                  We have received your request and will review it shortly.
                </p>
                <h3 style="color: #661268;">Details:</h3>
                <ul style="font-size: 16px; list-style: none; padding: 0;">
                  <li><strong>Restaurant Name:</strong> ${restaurantName}</li>
                  <li><strong>Email:</strong> ${email}</li>
                  <li><strong>Phone:</strong> ${phone}</li>
                  <li><strong>Address:</strong> ${address}</li>
                </ul>
                <p style="font-size: 16px;">
                  Thank you,
                </p>
                <p style="font-size: 16px; font-weight: bold; color: #661268;">Baksish</p>
              </div>
            `,
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
