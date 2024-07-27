import React, { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";
import { useBudget } from "../customHooks/useBudget";
import { useCurrencies } from "../customHooks/useCurrency";
import SelectCurrency from "./SelectCurrency";

const Step3 = () => {
  const { budgetData, getRemainingBudget } = useBudget();
  const { monthlyIncome, totalExpenses, preferredCurrency } = budgetData;
  const [conversionRate, setConversionRate] = useState(1);
  const { convertCurrency, convertAmount } = useCurrencies();

  //currency select tag states
  const [currentCurrency, setCurrentCurrency] = useState(preferredCurrency);
  const [targetCurrency, setTargetCurrency] = useState(preferredCurrency);

  useEffect(() => {
    async function getCurrencyConversionRate() {
      const conversionRate = await convertCurrency(
        currentCurrency,
        targetCurrency
      );
      setConversionRate(conversionRate);
    }
    getCurrencyConversionRate();
  }, [currentCurrency, targetCurrency]);

  const displayConvertedAmount = (amount) => {
    const convertedAmount = convertAmount(amount, conversionRate);
    return convertedAmount;
  };

  return (
    <FormWrapper title="Budget Summary">
      <div className="border bg-[#f0f0f0] rounded  p-2 mb-4">
        <span>Total Income : </span>
        <span>{displayConvertedAmount(monthlyIncome, conversionRate)}</span>
      </div>
      <div className="border bg-[#f0f0f0] rounded  p-2 mb-4">
        <span>Total Expenses : </span>
        <span>{displayConvertedAmount(totalExpenses, conversionRate)}</span>
      </div>
      <div className="border bg-[#f0f0f0] rounded  p-2 mb-4">
        <span>Remaining Budget : </span>
        <span>
          {displayConvertedAmount(getRemainingBudget(), conversionRate)}
        </span>
      </div>
      <label className="block text-md"> Convert Currency: </label>
      <div className="flex gap-[10px] mt-2 items-center">
        <SelectCurrency value={currentCurrency} setValue={setCurrentCurrency} />
        <div className="font-medium">TO</div>
        <SelectCurrency value={targetCurrency} setValue={setTargetCurrency} />
      </div>
    </FormWrapper>
  );
};

export default Step3;
