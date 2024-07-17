import { useState, useEffect } from "react";

const useHome = () => {
  const [data, SetData] = useState();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");


  useEffect(() => {
    const api = async () => {
      const url = "https://restcountries.com/v2/all?fields=name,region,flag";
      try {
        const response = await fetch(url);
        const json = await response.json();
        SetData(json);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    api();
  }, []);


  const tabs = ["All", "Asia", "Europe"];

  const filterCountries = () => {
    if (activeTab === "All") {
      return data;
    }
    return data.filter((country) => country.region === activeTab);
  };


  return {
     tabs,loading,activeTab, setActiveTab,filterCountries
  };
};

export default useHome;
