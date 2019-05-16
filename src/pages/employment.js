import React from "react"
import Sidebar from "../components/sidebar/sidebar"
import MainWindow from "../components/main-window/main-window";
import Grid from '@material-ui/core/Grid';
export default () => (
  <Grid container
        spacing={8}
        direction="row">
  <Sidebar title="Employment" />
  <MainWindow>
      <p>Employment</p>
      <h3>Past Employment</h3>
      <h4>Tutor: Wayne State</h4>
      <ul>
        <li>Tutored students in undergraduate CSC courses </li>
        <li>Supported coursework for all &lt; 4000 level required CSC classes </li>
        <li>Provided course study groups with guidance and fostered collaborative learning experience</li>
      </ul>
      <h4>Computer Lab Assistant: Wayne State</h4>
      <ul>
        <li>Troubleshot and provided minor repairs to workstations</li>
        <li>Completed disk imaging of computers</li>
        <li>Installed, configured and supported workstation hardware</li>
        <li>Provided technical assistance to faculty and students using various windows and mac platforms</li>
        <li>Oversaw daily operations of computer labs</li>
        <li>Performed daily and weekly lab maintenance tasks</li>
        <li>Ensured security of lab and computers and equipment</li>
        <li>Maintained a log of checked out equipment</li>
        <li>Administered French &amp; German Language Placement Exams</li>
      </ul>
      <h4>Software Engineering Intern: Quicken Loans</h4>
      <ul>
        <li>Developed full-stack features with HTML5, CSS3, Polymer JS, C#, F# and TSQL</li>
        <li>Built and integrated new custom components in polymer js </li>
        <li>Completed smaller sized UI tasks and bugs</li>
        <li>Coded to styling standard of material design guidelines</li>
        <li>Worked with team to maintain integrity and functionality of QTrade</li>
        <li>Regularly participated in code reviews</li>
        <li>Regularly participated in paired-programming with team engineers</li>
        <li>Regularly performed regression tests</li>
        <li>Managed tasks, progress, commits and merges with TFS</li>
        <li>Learned business process of Capital Markets and supported trade desk</li>
      </ul>
      <h4>Software Engineering Intern: Humanetics Innovative Solutions</h4>
      <ul>
        <li>Run repeatability tests in linux ubuntu 14.04 </li>
        <li>Perform TCP/IP packet analysis using Wireshark </li>
        <li>Conduct amplitude tests on port controller modules </li>
        <li>Administer Frequency response tests </li>
        <li>Order pcb components </li>
        <li>Modify schematics using Altium </li>
        <li>Apply DTI crash recorder to simulate signals across dimod embbed system</li>
        <li>Operate DTIControl and DTIViewer suite</li>
        <li>Perform waveform saturation analysis</li>
        <li>Develop mockup of web interface using HTML5 and reactJS</li>
      </ul>
    </MainWindow>
  </Grid>
)
