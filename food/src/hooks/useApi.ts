import { useState, useEffect } from "react";
import yelp from "../api/yelp";

const useApi = () => {
  const [res, setRes] = useState([]);

  const onSubmitHandler: any = async (SearchTerm = "pasta"): Promise<any> => {
    const res = await yelp.get("/search", {
      params: {
        limit: 50,
        term: SearchTerm,
        location: "san hose",
      },
    });
    setRes(res.data.businesses);
  };
  useEffect(() => {
    onSubmitHandler();
  }, []);
  return [res, onSubmitHandler];
};
export default useApi;
