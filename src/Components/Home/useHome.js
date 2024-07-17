import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCountries, setActiveTab } from "../../store/slice/countriesSlice";

const useHome = () => {
  const dispatch = useDispatch();
  const { data, loading, activeTab } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filterCountries = () => {
    if (activeTab === "All") {
      return data;
    }
    return data.filter((country) => country.region === activeTab);
  };

  const tabs = ["All", "Asia", "Europe"];

  return {
    tabs,
    loading,
    activeTab,
    setActiveTab: (tab) => dispatch(setActiveTab(tab)),
    filterCountries,
  };
};

export default useHome;
