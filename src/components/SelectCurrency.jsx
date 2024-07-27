import React, { useEffect, useState } from "react";
import { useCurrencies } from "../customHooks/useCurrency";

const SelectCurrency = ({ value, setValue }) => {
  const [currencies, setCurrencies] = useState({});
  const { getCurrencies } = useCurrencies();
  useEffect(() => {
    const fetchCurrencies = async () => {
      const currencyData = await getCurrencies();
      setCurrencies(currencyData);
    };
    fetchCurrencies();
  }, []);
  return (
    <select
      className="border outline-none rounded w-full mt-2 mb-4 h-10 px-2 text-md"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {Object.keys(currencies).map((val, i) => (
        <option key={i} value={val}>
          {val}
        </option>
      ))}
    </select>
  );
};

export default SelectCurrency;
