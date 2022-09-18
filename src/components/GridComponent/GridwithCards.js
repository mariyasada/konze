import {Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'
import { cardsData } from '../../Data/data'
import { containerStyle } from '../../utils/commonStyles'
import {CardComponent} from '../index';



const useStyles=makeStyles(theme=>({
  containerQuery:{
    [theme.breakpoints.down('md')]: {
      marginLeft:"0rem",
    },
  },
  cardStyle:{
    [theme.breakpoints.down('md')]: {
      width:300
    },

  }
    
  
}));

export const GridwithCards = () => {
  const classes=useStyles();
  return (
    <Grid container spacing={2} columns={12} sx={{...containerStyle}} className={classes.containerQuery}>
        {cardsData.map((cardItem)=>{
            return( 
            <Grid item xs={12} md={4} key={cardItem.name}>
            <CardComponent  Item={cardItem} key={cardItem.name} className={classes.cardStyle}/>
        </Grid>)
        })}        
    </Grid>
  )
}


