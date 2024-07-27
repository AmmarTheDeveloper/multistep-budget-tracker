import React, { createContext, useState } from "react";

export const BudgetContext = createContext();

export const BudgetContextProvider = ({ children }) => {
  const storedBudgetData = localStorage.getItem("budgetData");
  const [budgetData, setBudgetData] = useState(
    storedBudgetData
      ? JSON.parse(storedBudgetData)
      : {
          name: "",
          email: "",
          preferredCurrency: "",
          monthlyIncome: "",
          listOfExpenses: [],
          totalExpenses: 0,
        }
  );
  return (
    <BudgetContext.Provider value={{ budgetData, setBudgetData }}>
      {children}
    </BudgetContext.Provider>
  );
};
