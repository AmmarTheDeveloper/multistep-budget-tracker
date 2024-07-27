import React, { useEffect, useState } from "react";
import { useBudget } from "../customHooks/useBudget";
import { ExpenseList } from "./ExpenseList";
import FormWrapper from "./FormWrapper";

const Step2 = () => {
  const { budgetData, setBudgetData, addExpense } = useBudget();
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  return (
    <FormWrapper title="Income And Expenses">
      <div>
        <label htmlFor="monthlyIncome" className="block text-md">
          Enter Monthly Income (Number) :
        </label>
        <input
          required
          className="border outline-none rounded w-full mt-2 mb-4 h-10 px-2  text-md"
          type="number"
          id="monthlyIncome"
          defaultValue={budgetData.monthlyIncome}
          onChange={(e) =>
            setBudgetData({ ...budgetData, monthlyIncome: e.target.value })
          }
        />
        <h1 className="text-center font-medium mb-6 text-2xl">Add Expenses</h1>
        <label htmlFor="expenseName" className="block text-md">
          Enter Expense Name:
        </label>
        <input
          className="border outline-none rounded w-full mt-2 mb-4 h-10 px-2  text-md"
          type="text"
          id="expenseName"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <label htmlFor="expenseAmount" className="block text-md">
          Enter Expense Amount:
        </label>
        <input
          className="border outline-none rounded w-full mt-2 mb-4 h-10 px-2  text-md"
          type="number"
          id="expenseAmount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <div className="text-right">
          <button
            onClick={() => {
              addExpense(expenseName, expenseAmount);
              setExpenseAmount("");
              setExpenseName("");
            }}
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          >
            Add
          </button>
        </div>
        <ExpenseList />
      </div>
    </FormWrapper>
  );
};

export default Step2;
