import conndb from "../../../middleware/conndb";
import RestaurantDetails from "../../../models/RestaurantDetails";
import Restaurant_credentials from "../../../models/Restaurant_credentials";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import RestaurantItems from "../../../models/RestaurantItems";
import { v4 as uuid } from "uuid";

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
      const { combinedValues, state, area, district, pincode } = req.body;
      const {
        restaurantname,
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
      } = combinedValues;
      const existing = await Restaurant_credentials.findOne({
        username: username,
      });
      if (existing == null) {
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
          restaurantarea: area,
          restaurantdistrict: district,
          restaurantstate: state,
          restaurantpincode: pincode,
        });

        const u = await newRestaurant.save();

        const resitems = new RestaurantItems({
          restaurant_id: resid,
          restaurant_name: restaurantname,
          sgst: sgst,
          cgst: cgst,
          nooftables: nooftables,
          phone: restaurantphoneNo,
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
            restaurantid: resid,
          });

          const x = await newCred.save();
          // console.log("Saved Credentials:", x);

          if (x) {
            // Send emails asynchronously
            setImmediate(() => {
              sendEmail(
                restaurantemail,
                "Welcome to Our Platform",
                `Your restaurant has been successfully registered.\nWe will verify your details and reach out to you soon.\nThanks for choosing us. Have a nice day!`
              ).catch((err) =>
                console.error("Failed to send email to restaurant:", err)
              );
              sendEmail(
                email,
                "Welcome to Our Platform",
                `Your account has been successfully created for admin access of ${restaurantname}.\nYour credentials are : \nUsername:${username}\nPassword:${password}\n\nWe will verify your details and reach out to you soon.\nHave a nice day!`
              ).catch((err) =>
                console.error("Failed to send email to user:", err)
              );
            });

            res.status(200).json({ success: true, data: u });
          } else {
            await RestaurantDetails.findByIdAndDelete(u._id);
            res
              .status(201)
              .json({ success: false, error: "Couldn't save credentials" });
          }
        } else {
          res
            .status(201)
            .json({ success: false, error: "Couldn't save restaurant" });
        }
      } else {
        res
          .status(201)
          .json({ success: false, error: "Username already exists" });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(201).json({ success: false, error: error.message });
    }
  } else {
    res.status(201).json({ success: false, error: "Method not allowed" });
  }
};

export default conndb(handler);
