import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Content from './Content'

const useStyles=makeStyles({
      container:{
        justifyContent:"center"
        
      }
})
const Gridcard = ()=>{
    const classes=useStyles()
    return (
        <Grid>
        <Grid  className={classes.container} container spacing={2}>
          <Grid item  >
          <Content></Content>
          </Grid>
          <Grid  item  >
          <Content></Content>
          </Grid>
          <Grid item  >
          <Content></Content>
          </Grid>
        </Grid>
        <Grid  className={classes.container} container spacing={2}>
          <Grid item  >
          <Content></Content>
          </Grid>
          <Grid  item  >
          <Content></Content>
          </Grid>
          <Grid item  >
          <Content></Content>
          </Grid>
        </Grid>
        </Grid>
        
        
      )
    }
export default Gridcard