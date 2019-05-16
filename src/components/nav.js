import React from "react"
import { Link } from "gatsby"
import sidebarStyles from './sidebar/sidebar.module.css';

export const Nav = (props) => (
  <div className={sidebarStyles.navContainer}>
    <h3>{props.pageTitle}</h3>
    <ul className={sidebarStyles.siteLinks}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/projects/'>Projects</Link></li>
      <li><Link to='/employment/'>Past Employment</Link></li>
      <li><Link to='/classes/'>Coursework</Link></li>
    </ul>
  </div>
)
