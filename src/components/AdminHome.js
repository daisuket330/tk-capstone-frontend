import { render } from "@testing-library/react";
import React from "react";
import AdminLogout from "./AdminLogout";
import DisplayComments from "./DisplayComments";



function AdminHome () {
  return ( 
    <div className="adminhome">
      <h1> My home </h1>
      <AdminLogout/>
      <DisplayComments/>
    </div>
   );
}


  
       


    


export default AdminHome;