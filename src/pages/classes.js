import React from "react"
import Sidebar from "../components/sidebar/sidebar"
import MainWindow from "../components/main-window/main-window";
import Grid from '@material-ui/core/Grid';
export default () => (
  <Grid container
        spacing={8}
        direction="row">
    <Sidebar title="Classes" />
    <MainWindow>
      <p>The below are Computer Science Courses that were required for my Undergraduate Degree</p>
      <ul>
        <li>CSC 1100: Problem Solving and Programming</li>
        <li>CSC 1500: Fundamental Structures in Computer Science</li>
        <li>CSC 2000: Introduction to C++ Programming Language</li>
        <li>CSC 2110: Computer Science I</li>
        <li>CSC 2200: Computer Science II</li>
        <li>CSC 3100: Computer Architecture &amp; Organization</li>
        <li>CSC 3110: Algorithm Analysis &amp; Design</li>
        <li>CSC 3400: Human-Computer Interface Design</li>
        <li>CSC 3750: Introduction to Web Technology</li>
        <li>CSC 4110: Software Engineering</li>
        <li>CSC 4420: Computer Operating Systems</li>
        <li>CSC 4500: Introduction to Theoretical Computer Science</li>
        <li>CSC 4996: Senior Project</li>
        <li>CSC 5750: Principles of Web Technology</li>
        <li>CSC 5991: .NET Web Development(C# &amp; F#)</li>
      </ul>
    </MainWindow>
  </Grid>
)
