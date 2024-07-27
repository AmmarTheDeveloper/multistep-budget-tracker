import React, { useEffect } from "react";
import { useBudget } from "../customHooks/useBudget";

export const ExpenseList = ({ isDeleteAble = true }) => {
  const { budgetData, deleteExpense } = useBudget();
  return (
    <>
      <h1 className="text-center text-xl font-medium mb-6 md:text-3xl">
        Expenses List
      </h1>
      {budgetData.listOfExpenses.length == 0 ? (
        <div className="mt-2 text-center border rounded p-2 text-3xl text-red-500 font-medium">
          No Data Available
        </div>
      ) : (
        budgetData.listOfExpenses.map((val, i) => (
          <div key={i} className="border bg-[#f0f0f0] rounded my-2">
            <div
              className={`${
                isDeleteAble && "border-b border-b-2"
              } px-2 pt-2 mb-2`}
            >
              <div className="mb-1">
                <span className="text-md font-medium">Expense Name :</span>
                <span className="text-md"> {val.expenseName}</span>
              </div>
              <div className="mb-2">
                <span className="text-md font-medium">Expense Amount :</span>{" "}
                <span className="text-md">{val.expenseAmount}</span>
              </div>
            </div>
            {isDeleteAble ? (
              <div className="text-right">
                <button
                  onClick={() => deleteExpense(val.id)}
                  type="button"
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                >
                  Delete
                </button>
              </div>
            ) : null}
          </div>
        ))
      )}
    </>
  );
};
