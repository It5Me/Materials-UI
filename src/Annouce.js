import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { positions } from '@material-ui/system';
const useStyles = makeStyles({
	gridall: {
		// positions:"absolute",
		// float:"right"
	},
	root: {
		width: 300,
		height: 300,
		background: '#616161',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	gridcontent: {
		padding: '0px 0px 10px 0px',
	},
	container_annouce: {
		positions: 'absolute',
		// float: 'right',
		left: -500,
		marginRight: '10px',
	},
});
const Annouce = () => {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<div className={classes.container_annouce}>
			<Grid xs={4} className={classes.gridall}>
				<Grid className={classes.gridcontent}>
					<Card className={classes.root} variant='outlined'>
						<CardContent className={classes.cardcontent}>
							<Typography
								className={classes.title}
								color='textSecondary'
								gutterBottom
							>
								Word of the Day
							</Typography>
							<Typography variant='outlined' component='h2'>
								be{bull}nev{bull}o{bull}lent
							</Typography>
							<Typography
								className={classes.pos}
								color='textSecondary'
							>
								adjective
							</Typography>
							<Typography variant='outlined' component='p'>
								well meaning and kindly.
								<br />
								{'"a benevolent smile"'}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small'>Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid className={classes.gridcontent}>
					<Card className={classes.root} variant='outlined'>
						<CardContent>
							<Typography
								className={classes.title}
								color='textSecondary'
								gutterBottom
							>
								Word of the Day
							</Typography>
							<Typography variant='outlined' component='h2'>
								be{bull}nev{bull}o{bull}lent
							</Typography>
							<Typography
								className={classes.pos}
								color='textSecondary'
							>
								adjective
							</Typography>
							<Typography variant='outlined' component='p'>
								well meaning and kindly.
								<br />
								{'"a benevolent smile"'}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small'>Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default Annouce;
