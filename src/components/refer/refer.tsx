import React from "react";
import styles from "./Refer.module.css";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CopyToClipboard from 'react-copy-to-clipboard'

const Refer = () => {
const value = "https://refer/win/borderlesshr.com/"
  return (
    <div className={styles.referContainer}>
      <div className={styles.iconAndTextBox}>
        <div className={styles.campaignIcon}>
          <CampaignRoundedIcon className={styles.icon} />
        </div>
        <p>Refer and Earn</p>
      </div>
      <p className={styles.referText}>
        Refer a friend and earn CA$250 when they get hired.
      </p>
      <div className={styles.inputContainer}>
        <input
          type="text"
          id="link"
          value={value}
          readOnly
        />
        <CopyToClipboard text={value} onCopy={()=> alert("Link copied!")}>
          <ContentCopyOutlinedIcon className={styles.copyIcon} />
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Refer;
