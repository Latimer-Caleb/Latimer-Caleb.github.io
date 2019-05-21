import React from "react";
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
export default ({children}) => (
  <Grid item xs={12} sm={8}>
    {children}
  </Grid>
)
