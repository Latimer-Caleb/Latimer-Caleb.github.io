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
  <div className={logoStyles.footerWrapper}>
        <ul className={logoStyles.logoWrapper}>
          <li><a href="http://google.com/" target="_blank" style={{textDecoration:'none'}}><Button><img src={linkedimg}    alt="LinkedIn Icon"      className={logoStyles.logoImage}/>LinkedIn</Button></a></li>
          <li><a href="http://google.com/" target="_blank" style={{textDecoration:'none'}}><Button><img src={handshakeimg} alt="Handshake Icon"     className={logoStyles.logoImage}/>Handshake</Button></a></li>
          <li><a href="http://google.com/" target="_blank" style={{textDecoration:'none'}}><Button><img src={githubimg}    alt="Github Icon"        className={logoStyles.logoImage}/>Github</Button></a></li>
          <li><a href="http://google.com/" target="_blank" style={{textDecoration:'none'}}><Button><img src={codepenlogo}  alt="Codepen Icon"       className={logoStyles.logoImage}/>Codepen</Button></a></li>
          <li><a href="http://google.com/" target="_blank" style={{textDecoration:'none'}}><Button><img src={hranklogo}    alt="Hackerrank Icon"    className={logoStyles.logoImage}/>Hackerrank</Button></a></li>
          <li><a href="http://google.com/" target="_blank" style={{textDecoration:'none'}}><Button><img src={udemylogo}    alt="Udemy Icon"         className={logoStyles.logoImage}/> Udemy</Button></a></li>
        </ul>
        <Divider/>
        <p style={{textAlign:'center'}}>V5 <Copyright></Copyright>2019 Caleb Latimer</p>
  </div>
)
