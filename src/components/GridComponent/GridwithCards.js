import {Grid } from '@mui/material'
import React from 'react'
import { cardsData } from '../../Data/data'
import { containerStyle } from '../../utils/commonStyles'
import {CardComponent} from '../index';

export const GridwithCards = () => {
  return (
    <Grid container spacing={2} columns={12} sx={{...containerStyle}}>
        {cardsData.map((cardItem)=>{
            return( 
            <Grid item xs={12} md={4} key={cardItem.name}>
            <CardComponent  Item={cardItem} key={cardItem.name}/>
        </Grid>)
        })}        
    </Grid>
  )
}


