import axios from "axios";

const baseURL = "http://localhost:1999/api"
// const baseURL = "https://live.asktek.net/buroneed_manage_website_api/api";


const ImageURL = "http://localhost:1999";

// axios.defaults.logo = `${ImageURL}/Images/logo`;
// axios.defaults.products = `${ImageURL}/Images`;

export const imageURL = `${ImageURL}/Images`;

export default axios.create({
  baseURL,
  headers: {
    authtoken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRldGltZSI6MTc0ODUyMzg4MDM5OSwiaWF0IjoxNzQ4NTIzODgwfQ.CcJHVMlFRW7EtX1tnriK0EWh54ttuca5rYggq-kOpqI",
    companycode: "NEWTECH",
  },
});
