import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import CoursePageLayer from "../components/CoursePageLayer";




const CoursePage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Course Form" />

        {/* CoursePageLayer */}
        <CoursePageLayer />


      </MasterLayout>

    </>
  );
};

export default CoursePage;
