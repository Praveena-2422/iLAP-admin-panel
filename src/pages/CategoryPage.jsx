import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import CategoryPageLayer from "../components/CategoryPageLayer";
// import FormPageLayer from "../components/FormPageLayer";



const CategoryPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Category Form" />

        {/* FormPageLayer */}
        <CategoryPageLayer />


      </MasterLayout>

    </>
  );
};

export default CategoryPage;
