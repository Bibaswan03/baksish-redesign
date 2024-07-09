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
  username: Yup.string().required("Full name is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
    )
    .required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const validationSchema3 = Yup.object({
  restaurantname: Yup.string().required("Restaurant name is required"),
  restaurantemail: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  restaurantphoneNo: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  restaurantwebsite: Yup.string().url("Invalid URL").notRequired(),
});
export const validationSchema4 = Yup.object({
  opensAt: Yup.string().required("Opening time is required"),
  closesAt: Yup.string().required("Closing time is required"),
  chef: Yup.number()
    .min(0, "Number of chefs must be at least 0")
    .required("Number of chefs is required"),
  seating: Yup.number()
    .min(0, "Seating capacity must be at least 0")
    .required("Seating capacity is required"),
  tables: Yup.number()
    .min(0, "Number of tables must be at least 0")
    .required("Number of tables is required"),
  employees: Yup.number()
    .min(0, "Number of employees must be at least 0")
    .required("Number of employees is required"),
  waiter: Yup.number()
    .min(0, "Number of waiters must be at least 0")
    .required("Number of waiters is required"),
  pic: Yup.mixed()
    .required("Restaurant image is required")
});
export const validationSchema5 = Yup.object({
  address: Yup.string()
    .required("Restaurant address is required")
    .min(5, "Restaurant address must be at least 5 characters long"),
  description: Yup.string()
    .required("Restaurant description is required")
    .min(10, "Restaurant description must be at least 10 characters long"),
});
