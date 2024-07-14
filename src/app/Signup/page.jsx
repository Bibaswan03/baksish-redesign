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
import LinearDeterminate from "./ProgressBar";
import { v4 as uuidv4 } from 'uuid';

const page = () => {

  const [values, setValues] = useState({
    restaurantname: "",
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
    email: "",
    name: "",
    phoneNo: "",
  });
  const appendvalues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      ...value,
    }));
  };

  // useEffect(() => {
  //   console.log(values);
  // }, [values]);
  // useEffect(() => {
  //   appendvalues("name", "sudip");
  // }, []);

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
        return <></>;
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#FFF9EA] to-[#fce9bb]">
        {renderpage(page)}
      </div>
    </>
  );
};

export default page;
