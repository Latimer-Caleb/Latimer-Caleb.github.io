// Entry point, should contain containers
import React from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Sidebar from "../components/sidebar/sidebar";
import MainWindow from "../components/main-window/main-window";

export default () => (
  <Grid container
        spacing={8}
        direction="row">
    <Sidebar title="Home" />
    <MainWindow>
      <Card>
        <p>I graduated from Wayne State University with my Bachelor's of Science and Engineering in Computer Science. I'm interested in Web, and mobile development with a fascination for UI, UX and XR development and currently a Software Engineer with RevSpring.</p>
        <p>Have a closer look at some of the things I've worked on by clicking the links on the left or scrolling through the page.</p>
      </Card>
    </MainWindow>
  </Grid>
)
