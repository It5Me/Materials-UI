import './App.css';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from './Gridcard'

const useStyles = makeStyles({
    helloworld: {
      color:"red"
    },
    buttonStyle:{
      borderColor:"green"
    }
})
function App() {
  const classes = useStyles()
  return (
    <div className="App">
    {/* <Typography className={classes.helloworld}>
        Helloworld
    </Typography>
          <Button color="primary" variant="outlined" className={classes.buttonStyle} >Button</Button> */}
          <p>App</p>
          
  
          <Grid></Grid>
          
    </div>
  );
}

export default App;
