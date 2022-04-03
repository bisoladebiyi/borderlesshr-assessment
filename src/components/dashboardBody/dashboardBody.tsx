import React from "react";
import { UserDataType } from "../../types";
import DashboardContent from "../dashboardContent/dashboardContent";
import DashboardNav from "../dashboardNav/dashboardNav";
import styles from "./DashboardBody.module.css";

const data: any = localStorage.getItem("userData");
const userData: UserDataType = JSON.parse(data);
interface Props {
    toggle:()=>void
}
const DashboardBody:React.FC<Props> = ({toggle}) => {
  return (
    <div className={styles.bodyContainer}>
      <DashboardNav userData={userData} toggle={toggle} />
      <DashboardContent name={userData.name} />
    </div>
  );
};

export default DashboardBody;
