// Entry point, should contain containers
import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Sidebar from "../components/sidebar/sidebar";
import MainWindow from "../components/main-window/main-window";

export default () => (
  <Grid container
        spacing={8}
        direction="row">
    <Sidebar title="Home" />
    <MainWindow>
      <p>Hello, I'm a Software Engineer from Detroit working RevSpring as Level 2 Software Engineer. Have a closer look at some of the things I've worked on over on the right or click the links below to learn more about my background and experience.
    </p>
    </MainWindow>
  </Grid>
)
