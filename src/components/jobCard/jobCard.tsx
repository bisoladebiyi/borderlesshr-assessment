import React from 'react'
import styles from './JobCard.module.css'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

const JobCard = () => {
  return (
    <div className={styles.jobCard}>
        <div className={styles.jobTitle}>
            <p>Junior Frontend Developer</p>
            <BookmarkBorderOutlinedIcon className={styles.bookmark} />
        </div>
        <div className={styles.jobInfo}>
            <div>
                <BusinessCenterOutlinedIcon className={styles.jobInfoIcon} />
                <p>Full time</p>
            </div>
            <div>
                <LanguageOutlinedIcon className={styles.jobInfoIcon} />
                <p>Remote</p>
            </div>
            <div>
                <LocationOnOutlinedIcon className={styles.jobInfoIcon} />
                <p>Germany</p>
            </div>
            <div>
                <CreditCardOutlinedIcon className={styles.jobInfoIcon} />
                <p>$80k / year</p>
            </div>
        </div>
        <p className={styles.description}>We are looking for a qualified Junior Front-end developer to join our IT team.You will be responsible for building the 'client-side' of our web applications...</p>
        <div className={styles.apply}>
            <a href="#">Easy Apply</a>
            <p>Posted 30 mins ago</p>
        </div>
    </div>
  )
}

export default JobCard