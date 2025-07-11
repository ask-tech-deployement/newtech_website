import { FloatingWhatsApp } from "react-floating-whatsapp";

const Whatsapp = () => {
  const customChatboxStyle = {
    backgroundColor: "#43ad7f",
  };
  const customButtonStyle = {
    width: "40px",
    height: "40px",
  };
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="+918050222555"
        accountName="NewTech E Office"
        avatar="https://ik.imagekit.io/wxftuzt48/newtech.png?updatedAt=1749644009711"
        chatboxStyle={customChatboxStyle}
        buttonStyle={customButtonStyle}
      />
    </>
  );
};

export default Whatsapp;
