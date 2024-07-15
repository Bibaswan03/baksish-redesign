// Utils/ValidationSchema.js

import * as Yup from "yup";

export const validationSchema1 = Yup.object({
  name: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNo: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
});

export const validationSchema2 = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_^])[A-Za-z\d@$!%*#?&_^]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
    )
    .required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const validationSchema3 = Yup.object({
  restaurantname: Yup.string().required(
    "Restaurant name is required"
  ),
  restaurantemail: Yup.string()
    .email("Invalid restaurantemail address")
    .required("Restaurant email is required"),
  restaurantphoneNo: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Restaurant Phone number is required"),
  restaurantwebsite: Yup.string()
    .matches(
      /^(?:www\.)?[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.[a-zA-Z]{2,6}$/,
      "Invalid website url"
    )
    .notRequired(),
});

export const validationSchema4 = Yup.object({
  restaurantopeninghours: Yup.string().required("Opening time is required"),
  restaurantclosinghours: Yup.string().required("Closing time is required"),
  noofchef: Yup.number()
    .min(0, "Number of chefs must be at least 0")
    .required("Number of chefs is required"),
  noofseatingcapacity: Yup.number()
    .min(0, "Seating capacity must be at least 0")
    .required("Seating capacity is required"),
  nooftables: Yup.number()
    .min(0, "Number of tables must be at least 0")
    .required("Number of tables is required"),
  noofemployees: Yup.number()
    .min(0, "Number of employees must be at least 0")
    .required("Number of employees is required"),
  noofwaiters: Yup.number()
    .min(0, "Number of waiters must be at least 0")
    .required("Number of waiters is required"),
  
});

const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

export const validationSchema5 = Yup.object().shape({
  restaurantaddress: Yup.string()
    .required('Restaurant address is required'),
  restaurantdescription: Yup.string()
    .required('Restaurant description is required'),
  sgst: Yup.string()
    .required('SGST is required'),
  cgst: Yup.string()
    .required('CGST is required'),
  gstin: Yup.string()
    .matches(gstinRegex, 'Invalid GSTIN format')
    .required('GSTIN is required'),
});
