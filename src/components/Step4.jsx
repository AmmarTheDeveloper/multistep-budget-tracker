import React from "react";
import { useBudget } from "../customHooks/useBudget";
import FormWrapper from "./FormWrapper";
import { ExpenseList } from "./ExpenseList";

const Step4 = ({ goto }) => {
  const { budgetData, getRemainingBudget } = useBudget();
  const { name, email, preferredCurrency, monthlyIncome, totalExpenses } =
    budgetData;

  return (
    <FormWrapper title="Review and Save">
      <div className="border bg-[#f0f0f0] rounded  p-2 mb-4">
        <span>Name : </span>
        <span>{name}</span>
      </div>
      <div className="border bg-[#f0f0f0] rounded  p-2 mb-4">
        <span>Email : </span>
        <span>{email}</span>
      </div>
      <div className="border bg-[#f0f0f0] rounded  p-2 mb-4">
        <span>Preferred Currency : </span>
        <span>{preferredCurrency}</span>
      </div>
      <div className="text-right">
        <button
          onClick={() => goto(0)}
          type="button"
          className="mb-4 font-medium text-blue-600 dark:text-blue-500 hover:underline bg-transparent outline-none border-none"
        >
          Update User Information
        </button>
      </div>
      <div className="border bg-[#f0f0f0] rounded  p-2 mb-4">
        <span> Monthly Income : </span>
        <span>{monthlyIncome}</span>
      </div>
      <div className="border bg-[#f0f0f0] rounded  p-2 mb-4">
        <span> Total Expense : </span>
        <span>{totalExpenses}</span>
      </div>
      <div className="border bg-[#f0f0f0] rounded  p-2 mb-4">
        <span> Remaining Budget : </span>
        <span>{getRemainingBudget()}</span>
      </div>
      <ExpenseList isDeleteAble={false} />

      <div className="text-right">
        <button
          onClick={() => goto(1)}
          type="button"
          className="mb-4 font-medium text-blue-600 dark:text-blue-500 hover:underline bg-transparent outline-none border-none"
        >
          Update Income And Expenses
        </button>
      </div>
      <div className="text-right">
        <button
          onClick={() => goto(2)}
          type="button"
          className="mb-4 font-medium text-blue-600 dark:text-blue-500 hover:underline bg-transparent outline-none border-none"
        >
          Go To Budget Summary
        </button>
      </div>
    </FormWrapper>
  );
};

export default Step4;
