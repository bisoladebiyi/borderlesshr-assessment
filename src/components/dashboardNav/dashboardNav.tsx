import { Avatar } from "@mui/material";
import React from "react";
import styles from "./DashboardNav.module.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { UserDataType } from "../../types";

interface Props {
    userData: UserDataType
}

const DashboardNav:React.FC<Props> = ({ userData }) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.nav}>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Search ..." />
          <SearchRoundedIcon className={styles.searchIcon} />
        </div>
        <div className={styles.userInfo}>
            <div className={styles.notifIcon}>
            <NotificationsRoundedIcon />
            </div>
          <div>
            <p>{userData.name}</p>
            <p>{userData.title}</p>
          </div>
          <Avatar className={styles.avatar} />
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
