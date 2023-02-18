import React from "react";

const Banner = () => {
  return (
    <div className="bg-green-100 min-h-screen items-center flex">
      <div className="text-center w-[90%] mx-auto">
        <h1 className="text-8xl font-bold mt-5">JOB BAZAR</h1>
        <h2 className="text-5xl font-bold mt-5">Searching for a job?</h2>
        <h2 className="text-5xl font-bold mt-5">
          Get Your <span className="text-green-600">Dream Job</span>
        </h2>
      </div>
    </div>
  );
};

export default Banner;
