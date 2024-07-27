import { useEffect, useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import { useMultiStepForm } from "./customHooks/useMultiStepForm";
import { useBudget } from "./customHooks/useBudget";

const App = () => {
  const [FormSteps, setFormSteps] = useState([
    <Step1 />,
    <Step2 />,
    <Step3 />,
    <Step4 />,
  ]);
  const [isLoaded, setIsLoaded] = useState(false);

  const {
    step,
    steps,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    back,
    next,
    goto,
  } = useMultiStepForm(FormSteps);

  const { budgetData } = useBudget();

  useEffect(() => {
    setFormSteps([<Step1 />, <Step2 />, <Step3 />, <Step4 goto={goto} />]);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const storedBudgetData = localStorage.getItem("budgetData");
    if (storedBudgetData) {
      goto(steps.length - 1);
    } else {
      goto(0);
    }
  }, [isLoaded, FormSteps.length]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    localStorage.setItem("budgetData", JSON.stringify(budgetData));
    alert("Saved successfully.");
  }

  return (
    <>
      <div className=" bg-[#f0f0f0] w-full min-h-screen p-[20px] flex justify-center items-center">
        <form
          onSubmit={onSubmit}
          className="relative border border-1 p-[20px] rounded bg-white w-[500px] shadow"
        >
          <div className="absolute right-[15px] top-[5px]">
            {currentStepIndex + 1} / {steps.length}
          </div>
          <div className="mt-[30px]">{step}</div>
          <div className="flex justify-end mt-[30px]">
            {!isFirstStep && (
              <button
                onClick={back}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {isLastStep ? "Save" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
