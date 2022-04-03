import React, { useEffect, useState } from "react";
import { UserDataType } from "../../types";
import { getCurrentUser } from "../../utils";
import DashboardContent from "../dashboardContent/dashboardContent";
import DashboardNav from "../dashboardNav/dashboardNav";
import styles from "./DashboardBody.module.css";

interface Props {
  toggle: () => void;
}
const DashboardBody: React.FC<Props> = ({ toggle }) => {
  const [user, setUser] = useState<UserDataType>({
    name: "",
    title: "",
    avatar: "",
    email: "",
  });
  useEffect(() => {
    setUser(getCurrentUser());
  }, []);
  return (
    <div className={styles.bodyContainer}>
      <DashboardNav userData={user} toggle={toggle} />
      <DashboardContent />
    </div>
  );
};

export default DashboardBody;
