"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Footer from "../Components/Footer";
import NotFound from "../not-found";
import axios from "axios";
import Loader from "../Components/Loader";


const SignupController = ({decodedToken}) => {
  const searchParams=useSearchParams();
  const [decodedtoken, setdecodedtoken] = useState("")
  const [validpage, setvalidpage] = useState(null);

  useEffect(() => {
    const token = searchParams.get('token');
    const checktoken=async()=>{
      const res=await axios.post('/api/verifytoken',{token});
      if(res.data.success){
        setdecodedtoken(res.data.data);
        setvalidpage(true);
      }
      else{
        setvalidpage(false);
      }
    }
    checktoken();  
  }, [])
  

  const [values, setValues] = useState({
    restaurantname:decodedToken?.restaurant_name ,
    restaurantid: "",
    restaurantlocation: "",
    restaurantphoneNo: "",
    restaurantemail: "",
    restaurantwebsite: "",
    restaurantaddress: "",
    restaurantopeninghours: "",
    restaurantclosinghours: "",
    restaurantdescription: "",
    restaurantimage: "",
    noofchef: "",
    noofemployees: "",
    nooftables: "",
    noofwaiters: "",
    noofseatingcapacity: "",
    sgst: "",
    cgst: "",
    gstin: "",
    verified: false,
    username: "",
    password: "",
    email: decodedToken?.email,
    name: decodedToken?.name,
    phoneNo: decodedToken?.phoneNo,
  });
  const appendvalues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      ...value,
    }));
  };

  

  const [page, setpage] = useState(0);
  const handleForward = () => {
    if (page < 5) setpage(page + 1);
  };
  const handleBackward = () => {
    if (page >= 0) setpage(page - 1);
  };

  const renderpage = (pagenum) => {
    switch (pagenum) {
      case 0:
        return (
          <>
            <Page1
              appendvalues={appendvalues}
              values={values}
              page={page}
              handleForward={handleForward}
              handleBackward={handleBackward}
            />
            
          </>
        );

      case 1:
        return (
          <>
            <Page2
              page={page}
              appendvalues={appendvalues}
              values={values}
              handleForward={handleForward}
              handleBackward={handleBackward}
            />
            
          </>
        );
      case 2:
        return (
          <>
            <Page3
              page={page}
              appendvalues={appendvalues}
              values={values}
              handleForward={handleForward}
              handleBackward={handleBackward}
            />
            
          </>
        );

      case 3:
        return (
          <>
            <Page4
              page={page}
              appendvalues={appendvalues}
              values={values}
              handleForward={handleForward}
              handleBackward={handleBackward}
            />
            
          </>
        );

      case 4:
        return (
          <>
            <Page5
              page={page}
              appendvalues={appendvalues}
              values={values}
              handleForward={handleForward}
              handleBackward={handleBackward}
            />
            
          </>
        );

      default:
        return <><NotFound/></>;
    }
  };

  if(validpage==null){
    return(
      <div><Loader/></div>
    )
  }
  if(!validpage){
    return(
      <div><NotFound/><Footer/></div>
    )
  }

  if(validpage){
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#FFF9EA] to-[#fce9bb]">
        {renderpage(page)}
      </div>
    </>
  )}
};

export default SignupController;
