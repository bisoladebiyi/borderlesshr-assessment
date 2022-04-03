import React from "react";
import styles from "./SideMenu.module.css";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface Props{
    toggle:() => void;
    menu:string
}
const SideMenu:React.FC<Props> = ({toggle, menu}) => {
  return (
    <div className={`${styles.container} ${styles[menu]}`}>
        <button className={styles.btn} onClick={toggle}>
<CloseRoundedIcon />
        </button>
      <div className={styles.logo}>
        <img
          src="https://blog.borderlesshr.com/wp-content/themes/networker/img/logo.svg"
          alt=""
        />
      </div>
      <div className={styles.menuLinksContainer}>
        <div className={`${styles.menuLinks} ${styles.active}`}>
          <GridViewOutlinedIcon className={styles.icon} />
          <p>Home</p>
        </div>

        <div className={`${styles.menuLinks}`}>
          <FeedOutlinedIcon className={styles.icon} />
          <p>Applications</p>
        </div>
        <div className={`${styles.menuLinks}`}>
          <AssessmentOutlinedIcon className={styles.icon} />
          <p>Assessment</p>
        </div>
        
        <div className={styles.menuLinks}>
          <PersonOutlineRoundedIcon className={styles.icon} />
          <p>Profile</p>
        </div>
        <div className={styles.menuLinks}>
          <SettingsOutlinedIcon className={styles.icon} />
          <p>Settings</p>
        </div>
        <div className={styles.menuLinks}>
          <ContactSupportOutlinedIcon className={styles.icon} />
          <p>Help</p>
        </div>
      </div>
    </div>
  ); 
};

export default SideMenu;
