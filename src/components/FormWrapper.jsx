import React from "react";

const FormWrapper = ({ title, children }) => {
  return (
    <>
      <h1 className="text-center text-xl font-medium mb-6 md:text-3xl">
        {title}
      </h1>
      <div>{children}</div>
    </>
  );
};

export default FormWrapper;
