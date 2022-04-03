import React from 'react'
import styles from './RecruitmentProcess.module.css'
const RecruitmentProcess = () => {
  return (
    <div className={styles.process}>
                    <h3>Our Recruitment Process</h3>
                    <div className={styles.steps}>
                        <div className={styles.numberDiv}>
                            <div className={styles.number}>
                                1
                            </div>
                            <div className={styles.arrow}></div>
                        </div>
                        <div className={styles.stepsDetails}>
                            <p>Upload your resume</p>
                            <p>Upload your updated resume showing your skills and previous works.</p>
                        </div>
                    </div>
                    <div className={styles.steps}>
                        <div className={styles.numberDiv}>
                            <div className={styles.number}>
                                2
                            </div>
                            <div className={styles.arrow}></div>
                        </div>
                        <div className={styles.stepsDetails}>
                            <p>Take assessment</p>
                            <p>Pass the mandatory stack specific assessments to prove your proficiency.</p>
                        </div>
                    </div>
                    <div className={styles.steps}>
                        <div className={styles.numberDiv}>
                            <div className={styles.number}>
                                3
                            </div>
                        </div>
                        <div className={styles.stepsDetails}>
                            <p>Recieve job offers</p>
                            <p>Get offers directly from hiring managers actively hiring for roles that match your profile.</p>
                        </div>
                    </div>
                </div>
  )
}

export default RecruitmentProcess