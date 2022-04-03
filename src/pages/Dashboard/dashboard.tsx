import React, { useState } from 'react'
import DashboardBody from '../../components/dashboardBody/dashboardBody'
import SideMenu from '../../components/sideMenu/sideMenu'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  const [ sideMenu, setSideMenu] = useState<string>("")
  const toggleMenu = () => {
    if(sideMenu === "")
      setSideMenu("active")
    else 
      setSideMenu("")
  }
  return (
    <div className='container'>
      <div className={styles.dashboard}>
      <SideMenu toggle={toggleMenu} menu={sideMenu} />
        <DashboardBody toggle={toggleMenu} />
      </div>
       
    </div>
  )
}

export default Dashboard