import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../../utils";
import JobCard from "../jobCard/jobCard";
import RecruitmentProcess from "../recruitmentProcess/recruitmentProcess";
import Refer from "../refer/refer";
import styles from "./DashboardContent.module.css";



const DashboardContent = () => {
  const [userName, setUserName] = useState<string>("");
  useEffect(() => {
    const nameArr = getCurrentUser()?.name.split(" ");
    setUserName(nameArr[0]);
  }, []);
  return (
    <div className={styles.contentContainer}>
      <h1 className={styles.welcomeText}>
        <span>Welcome, </span>
        {userName}
      </h1>
      <div className={styles.jobsAndRecruitment}>
        <div className={styles.assessmentAndJobs}>
          <div className={styles.assessment}>
            <div>
              <h2>Take assessment</h2>
              <p>
                Become visible to employers and eligible for jobs by passing the
                skill assessment.
              </p>
              <button>Start Test</button>
            </div>
          </div>
          <p className={styles.recommendations}>Job recommendations</p>
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <div className={styles.recruitment}>
          <RecruitmentProcess />
          <Refer />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
