import React from "react";
import Preloader from "../helper/Preloader";

import HeaderTwo from "../templateComponents/HeaderTwo";
import Breadcrumb from "../templateComponents/Breadcrumb";
import FooterTwo from "../templateComponents/FooterTwo";
import BottomFooter from "../templateComponents/BottomFooter";
import ShippingOne from "../templateComponents/ShippingOne";
import Account from "../templateComponents/Account";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";


const AccountPage = () => {



  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Account"} />

      {/* Account */}
      <Account />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default AccountPage;
