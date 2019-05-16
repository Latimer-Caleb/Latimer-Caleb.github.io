import React from "react"
import Code from "@material-ui/icons/Code"
import Copyright from "@material-ui/icons/Copyright"
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import linkedimg from '../../static/linkedin.png'
import handshakeimg from '../../static/hs-social-icon-yellow.png'
import githubimg from '../../static/GitHub-Mark-32px.png'
import hranklogo from '../../static/hrank-logo.png'
import udemylogo from '../../static/udemy-logo.jpg'
import codepenlogo from '../../static/codepenlogo.png'
import logoStyles from "./sidebar/sidebar.module.css"

export default () => (
  <div>
        <ul className={logoStyles.logoWrapper}>
          <li><Button> <img src={linkedimg} alt="You botched it" className={logoStyles.logoImage}/>LinkedIn</Button></li>
          <li><Button> <img src={handshakeimg} alt="You botched it" className={logoStyles.logoImage}/>Handshake</Button></li>
          <li><Button> <img src={githubimg} alt="You botched it" className={logoStyles.logoImage}/>Github</Button></li>
          <li><Button><img src={codepenlogo} alt="You botched it" className={logoStyles.logoImage}/>Codepen</Button></li>
          <li><Button> <img src={hranklogo} alt="You botched it" className={logoStyles.logoImage}/>Hackerrank</Button></li>
          <li><Button><img src={udemylogo} alt="You botched it" className={logoStyles.logoImage}/> Udemy</Button></li>
        </ul>
        <Divider/>
        <p style={{textAlign:'center'}}>V5 <Copyright></Copyright>2019 Caleb Latimer</p>
  </div>
)
