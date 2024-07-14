import conndb from "../../../Middlewire/Conndb";
import RestaurantDetails from "../../../Models/RestaurantDetails";
import Restaurant_credentials from "../../../Models/Restaurant_credentials";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import RestaurantItems from "../../../Models/RestaurantItems";
import { uuid } from "uuidv4";

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.NODEMAILER_API_KEY,
  },
});

const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const resid = "RES_" + uuid(); //console.log(req.body);
    try {
      const {
        restaurantname,
        restaurantid,
        restaurantlocation,
        restaurantphoneNo,
        restaurantemail,
        restaurantwebsite,
        restaurantaddress,
        restaurantopeninghours,
        restaurantclosinghours,
        restaurantdescription,
        restaurantimage,
        noofchef,
        noofemployees,
        nooftables,
        noofwaiters,
        noofseatingcapacity,
        sgst,
        cgst,
        gstin,
        username,
        password,
        email,
        name,
        phoneNo,
      } = req.body;

      const newRestaurant = new RestaurantDetails({
        restaurantname,
        restaurantid: resid,
        restaurantlocation,
        restaurantphoneNo,
        restaurantemail,
        restaurantwebsite,
        restaurantaddress,
        restaurantopeninghours,
        restaurantclosinghours,
        restaurantdescription,
        restaurantimage,
        noofchef,
        noofemployees,
        nooftables,
        noofwaiters,
        noofseatingcapacity,
        sgst,
        cgst,
        gstin,
      });

      const u = await newRestaurant.save();

      const resitems = new RestaurantItems({
        restaurant_id: resid,
        restaurant_name: restaurantname,
        sgst: sgst,
        cgst: cgst,
        nooftables: nooftables,
      });
      await resitems.save();

      if (u) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newCred = new Restaurant_credentials({
          username,
          password: hashedPassword,
          email,
          name,
          phoneNo,
          restaurantid:resid,
        });

        const x = await newCred.save();
        // console.log("Saved Credentials:", x);

        if (x) {
          // Send emails asynchronously
          setImmediate(() => {
            sendEmail(
              restaurantemail,
              "Welcome to Our Platform",
              "Your restaurant has been successfully registered."
            ).catch((err) =>
              console.error("Failed to send email to restaurant:", err)
            );
            sendEmail(
              email,
              "Welcome to Our Platform",
              "Your account has been successfully created."
            ).catch((err) =>
              console.error("Failed to send email to user:", err)
            );
          });

          res.status(201).json({ success: true, data: u });
        } else {
          await RestaurantDetails.findByIdAndDelete(u._id);
          res
            .status(500)
            .json({ success: false, error: "Couldn't save credentials" });
        }
      } else {
        res
          .status(500)
          .json({ success: false, error: "Couldn't save restaurant" });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(200).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
};

export default conndb(handler);
