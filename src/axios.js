import axios from "axios";

// DEV
// const URL = "http://localhost:1999/api"

// LIVE
const URL = "https://live.asktek.net/website_manager_common_api";

const baseURL = `${URL}/api`;
export const imageURL = `${URL}/Images`;
export default axios.create({
  baseURL,
  headers: {
    authtoken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRldGltZSI6MTc0ODUyMzg4MDM5OSwiaWF0IjoxNzQ4NTIzODgwfQ.CcJHVMlFRW7EtX1tnriK0EWh54ttuca5rYggq-kOpqI",
    companycode: "NEWTECH",
  },
});
