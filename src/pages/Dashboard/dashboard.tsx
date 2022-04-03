import React from 'react'
import DashboardBody from '../../components/dashboardBody/dashboardBody'
import SideMenu from '../../components/sideMenu/sideMenu'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className='container'>
      <div className={styles.dashboard}>
      <SideMenu />
        <DashboardBody />
      </div>
       
    </div>
  )
}

export default Dashboard