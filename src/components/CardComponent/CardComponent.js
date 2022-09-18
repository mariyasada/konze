import React,{useState} from 'react'
import {Card,CardContent,Typography,Button,CardActions} from "@mui/material"
import { cardStyle, listStyles,nameStyle,subtitleStyle,fontStyle,cardButton ,badgeStyle,cardHoverStyle,fontHoverStyle,cardAction,cardHoverButton,cardActionHover} from '../../utils/commonStyles'
import {ArrowForward } from '@mui/icons-material'
import {ListComponent} from '../index'
import List from '@mui/material/List';
import styled from '@emotion/styled'
import { makeStyles } from '@mui/styles';

const StyledButton = styled(Button)`
  &:hover {
    background: white;
  }
`
const useStyles=makeStyles(theme=>({
  cardStyleQuery:{
    [theme.breakpoints.down('md')]: {
      width:"250px",
      marginLeft:"-4.8rem"
    },
  },
  fontStyleQuery:{
    [theme.breakpoints.down('md')]: {
      fontSize:"1rem"
    },

  }
  
}));



export const CardComponent = ({Item}) => {
  const [isHover,setIsHover]=useState(false);
  const classes=useStyles();
  return (
    <Card sx={isHover ? cardHoverStyle :cardStyle} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}  className={classes.cardStyleQuery}>
      <CardContent >
            <Typography  gutterBottom sx={nameStyle} className={classes.fontStyleQuery}>{Item.name} </Typography>
            <Typography sx={subtitleStyle} gutterBottom>{Item.subtitle} </Typography>
            <Typography sx={isHover?fontHoverStyle:fontStyle} >{Item.name==="Advance"?`${Item.number}`:`${Item.price}`} </Typography>
            <StyledButton variant="contained" sx={isHover ? cardHoverButton :cardButton}>{Item.name==="Advance"?"Talk to Us":"Get started"}</StyledButton>
            <List sx = {{...listStyles}}>
                {Item.features.map((list)=>{
                    return ( <ListComponent List={list} key={list}/>)
                })}
            </List>
      </CardContent>

      <CardActions sx={{marginTop:"-8px",marginBottom:"-15px"}}>
            <Button variant="text" sx={isHover ?cardActionHover:cardAction} endIcon={<ArrowForward />}>
                See All Features
            </Button>
       </CardActions>
       {Item.isPopular &&<Typography component="span" sx={{...badgeStyle}}>Popular</Typography>}
    </Card>
  )
}

