import { useContext, useEffect, useState } from "react";
import { BudgetContext } from "../contexts/BudgetContext";
import { v4 } from "uuid"

export const useBudget = () => {
    const { budgetData, setBudgetData } = useContext( BudgetContext );

    useEffect( () => {
        updateExpense();
    }, [ budgetData.listOfExpenses ] );

    function updateExpense () {
        const expense = budgetData.listOfExpenses.reduce(
            ( acc, val ) => acc + parseInt( val.expenseAmount ),
            0
        )
        setBudgetData( prev => {
            return { ...prev, totalExpenses: expense }
        } );
    }

    function addExpense ( expenseName, expenseAmount ) {
        if ( expenseName === "" || expenseAmount === "" )
            return alert( "Please enter valid expenses." );
        setBudgetData( {
            ...budgetData,
            listOfExpenses: [
                ...budgetData.listOfExpenses,
                {
                    id: v4(),
                    expenseName: expenseName,
                    expenseAmount: expenseAmount,
                },
            ],
        } );
    }

    function deleteExpense ( id ) {
        setBudgetData( {
            ...budgetData,
            listOfExpenses: budgetData.listOfExpenses.filter( ( val ) => val.id != id ),
        } );
    }

    function getRemainingBudget () {
        return budgetData.monthlyIncome - budgetData.totalExpenses;
    }

    return {
        budgetData,
        setBudgetData,
        addExpense,
        deleteExpense,
        updateExpense,
        getRemainingBudget,
    };
};

