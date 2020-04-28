import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer m9RV3bIVN46BiSw2yjLkJqexfjw81EHkmtz7ql2Vw1rtQY35PVU3uhZhp30E6qaKE7j0bN7-FnCQMk9vmqh5Hz34Qk13FXqSufqq22_Z7TUmPKWtyK4P4U7RnQCjXnYx",
  },
});
