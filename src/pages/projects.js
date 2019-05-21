import React from "react"
import Sidebar from "../components/sidebar/sidebar"
import MainWindow from "../components/main-window/main-window";
import Grid from '@material-ui/core/Grid';
export default () => (
  <Grid container
        spacing={8}
        direction="row">
    <Sidebar title="Projects" />
    <MainWindow>
    <h3>Projects</h3>
    {/*
      Need to redesign this and remove all dead bootstrap code since it doesn't apply here
      Mind the button use it throws warnings
      How to redesign?  
    */}
            <div class='col-md-12'>
              <div class='row'>
                <div class='col-md-4'>
                    <div class='panel panel-info'>
                        <div class='panel-heading'>
                          <button class='btn btn-primary' role='button' data-toggle='collapse' href='#GOMCpanel'><span class='glyphicon glyphicon-chevron-right icon-style'></span>GOMC Capstone</button>
                        </div>
                        <div class='panel-body collapse' id='GOMCpanel'>
                          <p>Dynamic Web Application built to support Wayne State GOMC Research Project</p>
                          <ul>
                            <li>MVC-5</li>
                            <li>.NET 4.6.1</li>
                            <li>Razor</li>
                            <li>Bootstrap 3</li>
                            <li>jQuery</li>
                            <li>C#</li>
                            <li>Entity Framework</li>
                            <li>MySQL</li>
                          </ul>
                          <p>Project link here: <a href='https://github.com/WSU-Capstone-2017/GOMC-Website'>Project Code</a></p>
                        </div>
                      </div>
                </div>
                <div class='col-md-4'>
                    <div class='panel panel-info'>
                        <div class='panel-heading'>
                          <button class='btn btn-primary' role='button' data-toggle='collapse' href='#ToDoApp'><span class='glyphicon glyphicon-chevron-right icon-style'></span>To Do App</button>
                        </div>
                        <div class='panel-body collapse' id='ToDoApp'>
                          <p>Simple task list web application built on the WAMP Full-Stack</p>
                          <ul>
                            <li>HTML5</li>
                            <li>Bootstrap 3</li>
                            <li>jQuery</li>
                            <li>MySQL</li>
                            <li>PHP</li>
                            <li>Apache</li>
                          </ul>
                          <p>Project link here: <a href='https://github.com/latimercaleb/WAMP-ToDo-ej1297'>Project Code</a></p>
                        </div>
                      </div>
                </div>
                <div class='col-md-4'>
                    <div class='panel panel-info'>
                        <div class='panel-heading'>
                            <button class='btn btn-primary' role='button' data-toggle='collapse' href='#S3'><span class='glyphicon glyphicon-chevron-right icon-style'></span>S3FS</button>
                        </div>
                        <div class='panel-body collapse' id='S3'>
                          <p>Secure File Storage System built on AWS S3 and custom open ssl RC4 encryption</p>
                          <ul>
                            <li>AWS-S3</li>
                            <li>C++</li>
                            <li>Ubuntu 16.04LTS</li>
                          </ul>
                            <p>Project link here: <a href='https://github.com/latimercaleb/secure-s3fs'>Project Code</a></p>
                        </div>
                      </div>
                </div>
              </div>
            </div>
            <div class='col-md-12'>
              <div class='row'>
                  <div class='col-md-4'>
                    <div class='panel panel-info'>
                      <div class='panel-heading'>
                        <button class='btn btn-primary' role='button' data-toggle='collapse' href='#ChapterWebsite'><span class='glyphicon glyphicon-chevron-right icon-style'></span>Chapter Website</button>
                    </div>
                      <div class='panel-body collapse' id='ChapterWebsite'>
                        <p>Static website for the Wayne State Theta Tau Chapter</p>
                        <ul>
                            <li>Wordpress</li>
                          </ul>
                          <p>Project link here: <a href='http://ebthetatau.org/'>Project Code</a></p>
                      </div>
                    </div>
                  </div>
                  <div class='col-md-4'>
                      <div class='panel panel-info'>
                          <div class='panel-heading'>
                            <button class='btn btn-primary' role='button' data-toggle='collapse' href='#RandomQuoteGen'><span class='glyphicon glyphicon-chevron-right icon-style'></span>Random Quote Generator</button>
                          </div>
                          <div class='panel-body collapse' id='RandomQuoteGen'>
                              <p>JS Random Quote Generator</p>
                              <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>jQuery</li>
                              </ul>
                              <p>Project link here: <a href='https://codepen.io/latimeks/pen/VzdEoy'>Project Code</a></p>
                          </div>
                        </div>
                  </div>
                  <div class='col-md-4'>
                      <div class='panel panel-info'>
                          <div class='panel-heading '>
                            <button class='btn btn-primary' role='button' data-toggle='collapse' href='#TributePage'><span class='glyphicon glyphicon-chevron-right icon-style'></span>Tribute Page</button>
                          </div>
                          <div class='panel-body collapse' id='TributePage'>
                              <p>Static web project</p>
                              <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>jQuery</li>
                              </ul>
                              <p>Project link here: <a href='https://codepen.io/latimeks/pen/ZOWoaq'>Project Code</a></p>
                          </div>
                        </div>
                  </div>
              </div>
            </div>
    </MainWindow>
  </Grid>
)
