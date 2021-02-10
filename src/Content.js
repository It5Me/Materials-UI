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
    }
    });

const Content = ()=>{
    const classes = useStyles()
    return (
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
      );
    }
export default Content