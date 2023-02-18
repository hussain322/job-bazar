import React from "react";
import cartoon from "../../assets/2021flat_248.jpg";

const About = () => {
  return (
    <div className="w-[90%] mx-auto mt-4">
      <h1 className="text-5xl font-bold text-center text-green-600 my-10">
        About Us
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="mt-24">
          <p className="font-semibold text-xl">
            Our team is made up of experienced professionals with a deep
            understanding of the job market. We know how challenging it can be
            for job seekers to navigate the job search process, and we are
            committed to making it easier and more effective. By leveraging the
            latest technology and industry insights, we are able to provide job
            seekers with access to a wide range of job openings across various
            industries and locations.
          </p>
          <p className="font-semibold text-xl pt-6">
            Thank you for choosing our job portal website as your go-to
            destination for all your job search and hiring needs. We look
            forward to helping you achieve your goals and succeed in your
            career.
          </p>
        </div>
        <div>
          <img src={cartoon} alt="cartoon" />
        </div>
      </div>
    </div>
  );
};

export default About;
