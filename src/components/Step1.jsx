import React, { useEffect, useState } from "react";
import { useBudget } from "../customHooks/useBudget";
import FormWrapper from "./FormWrapper";
import { useCurrencies } from "../customHooks/useCurrency";

const Step1 = () => {
  const { budgetData, setBudgetData } = useBudget();
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
    <FormWrapper title="User Information">
      <div>
        <label className="block text-md" htmlFor="name">
          Enter your name :
        </label>
        <input
          required
          className="border outline-none rounded w-full mt-2 mb-4 h-10 px-2  text-md"
          type="text"
          id="name"
          defaultValue={budgetData.name}
          onChange={(e) =>
            setBudgetData({ ...budgetData, name: e.target.value })
          }
        />
        <label className="block text-md" htmlFor="email">
          Enter your email :
        </label>
        <input
          required
          className="border outline-none rounded w-full mt-2 mb-4 h-10 px-2  text-md"
          type="email"
          id="email"
          defaultValue={budgetData.email}
          onChange={(e) =>
            setBudgetData({ ...budgetData, email: e.target.value })
          }
        />
        <label className="block text-md" htmlFor="preferredCurrency">
          Preferred Currency
        </label>
        <select
          required
          className="border outline-none rounded w-full mt-2 mb-4 h-10 px-2  text-md"
          name=""
          id="preferredCurrency"
          value={budgetData.preferredCurrency}
          onChange={(e) =>
            setBudgetData({ ...budgetData, preferredCurrency: e.target.value })
          }
        >
          <option value="">Choose Preferred Currency</option>
          {Object.keys(currencies).map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </FormWrapper>
  );
};

export default Step1;
