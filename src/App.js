import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from './Gridcard';
import Annouce from './Annouce';
import Test from './Test';
const useStyles = makeStyles({
	helloworld: {
		color: 'red',
	},
	buttonStyle: {
		borderColor: 'green',
	},
	App: {
		flexDirection: 'column',
	},
	grid: {},
	annouce: {},
});
function App() {
	const classes = useStyles();
	return (
		<div className='App'>
			ค{/* <div className={classes.App}> */}
			<Grid className={classes.grid}></Grid>
			<Annouce className={classes.annouce}></Annouce>
			{/* </div> */}
			{/* <Test></Test> */}
		</div>
	);
}

export default App;
