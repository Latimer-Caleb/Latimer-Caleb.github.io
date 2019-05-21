import React from "react"
import { Helmet } from "react-helmet"
import { Nav } from "../nav"
import Footer from "../footer"

// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import sidebarStyle from './sidebar.module.css';

export default (props) => (
  <Grid item xs={12} sm={4} className={sidebarStyle.sidebarWrapper}>
    <Helmet>
      <title>CL {props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
      <meta name="description" content={'Portfolio ' + props.title} />
      <meta name="description" content="Icon made by Freepik from www.flaticon.com " />
      <meta name="keywords" content="HTML,CSS,JavaScript,React" />
      <meta name="author" content="Caleb Latimer" />
      <meta name='subject' content='Personal Project, Collection of former classes and projects' />
      <meta name='language' content='EN' />
      <meta name='HandheldFriendly' content='True' />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>
    <Nav pageTitle = {props.title}/>
    <Footer />
  </Grid>
)
