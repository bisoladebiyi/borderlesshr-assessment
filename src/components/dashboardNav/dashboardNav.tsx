import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./DashboardNav.module.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { UserDataType } from "../../types";

interface Props {
  userData: UserDataType;
  toggle: () => void;
}

const DashboardNav: React.FC<Props> = ({ userData, toggle }) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <button className={styles.menu} onClick={toggle}>
            <MenuRoundedIcon />
          </button>

          <img
            src="https://blog.borderlesshr.com/wp-content/themes/networker/img/logo.svg"
            alt=""
          />
        </div>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Search ..." />
          <SearchRoundedIcon className={styles.searchIcon} />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.notifIcon}>
            <NotificationsRoundedIcon />
          </div>
          <div>
            <p>{userData?.name}</p>
            <p>{userData?.title}</p>
          </div>
          <Avatar className={styles.avatar} />
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
