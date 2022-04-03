import React from "react";
import { UserDataType } from "../../types";
import DashboardContent from "../dashboardContent/dashboardContent";
import DashboardNav from "../dashboardNav/dashboardNav";
import styles from "./DashboardBody.module.css";

const data: any = localStorage.getItem("userData");
const userData: UserDataType = JSON.parse(data);
const DashboardBody = () => {
  return (
    <div className={styles.bodyContainer}>
      <DashboardNav userData={userData} />
      <DashboardContent name={userData.name} />
    </div>
  );
};

export default DashboardBody;
