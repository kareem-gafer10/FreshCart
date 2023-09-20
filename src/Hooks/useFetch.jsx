import { useEffect, useState } from "react";
import baseInstance from "../Networking/baseInstance";


const useFetch = (url) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllDetails = async () => {
    setLoading(true);
    const { data } = await baseInstance.get(`${url}`);
    setDataList(data.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllDetails();
  }, []);

  return { dataList, loading};
};

export default useFetch;
