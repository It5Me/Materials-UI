import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import FolderIcon from '@material-ui/icons/Folder';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Grid from '@material-ui/core/Grid';
import img from './test.jpg'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
      },
    media: {
        height: 140,
      },
    allicon:{
        color: "#616161"
    },
    gridall:{
        positions:"absolute",
        float:"right"
    },
    root: {
      width: 300,
      height: 300,
      background: "#616161"
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
    gridcontent:{
        padding:'0px 0px 10px 0px',
    }
    });

const Test = ()=>{
    const classes = useStyles()
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img}          
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Class Name  
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                detail class
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
            <NotificationsNoneIcon className={classes.allicon}></NotificationsNoneIcon>
            </Button>
            <Button size="small" color="primary">
              <AssignmentIcon className={classes.allicon}></AssignmentIcon>
            </Button>
            <Button size="small" color="primary">
              <LiveTvIcon className={classes.allicon}></LiveTvIcon>
            </Button>
            <Button size="small" color="primary">
              <FolderIcon className={classes.allicon}></FolderIcon>
            </Button>
          </CardActions>
        </Card>
        

        <Grid xs={4} className={classes.gridall} >
    <Grid className={classes.gridcontent} >
      <Card className={classes.root} variant="outlined">
        <CardContent  className={classes.cardcontent}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="outlined" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="outlined" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
        <Grid  className={classes.gridcontent}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="outlined" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="outlined" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
      </Grid>
      </div>
      );
    }
export default Test