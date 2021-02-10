
import {createMuiTheme} from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple';
import {blue} from '@material-ui/core/colors' 
import { IconButton } from '@material-ui/core';
const theme = createMuiTheme({
    palette:{
        primary: purple,
        secondary:blue
    },
    status : {
        danger :"orange"
    }
    
});
export default theme