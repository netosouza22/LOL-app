import React from 'react';

import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const EditedTooltip = withStyles({
    tooltip: {
      color: "white",
      backgroundColor: "#101010",
    //   marginTop: '-100px',
      borderBottom: '4px solid #FF8C00',
      fontFamily: 'roboto',
    },
  })(Tooltip);

const useStyles = makeStyles((theme) => ({

    img: props => ({
        width: '50px',
        height: '50px',
        backgroundImage: `url(${props.url})`,
        backgroundSize: 'cover',
        border: '1px solid #FF8C00'

    }),
    text: {
        fontSize: '15px',
    }
}));

export default function InfoPaperSkills(props){
    let skill = props.skill;

    function isPsv(){
        if(Object.keys(skill)[0] === 'pImg'){
            let img = `http://ddragon.leagueoflegends.com/cdn/11.6.1/img/passive/${skill.pImg}`
            return img;
        }else {
            var img = `http://ddragon.leagueoflegends.com/cdn/11.6.1/img/spell/${skill.img}`
            return img;
        }
    }
    
    let url = isPsv();
    const classes = useStyles({url});

    return(
        <EditedTooltip title={
                <div >
                  <Typography variant="h5" color="inherit">{skill.name}</Typography>
                  <Typography  className={classes.text} >{skill.description}</Typography>
                </div>
              
        } placement="top-start"> 
            <Paper className={classes.img} /> 
        </EditedTooltip>
        
    )
}