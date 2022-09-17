import React,{useState} from 'react'
import {Card,CardContent,Typography,Button,CardActions} from "@mui/material"
import { cardStyle, listStyles,nameStyle,subtitleStyle,fontStyle,cardButton ,badgeStyle,cardHoverStyle,fontHoverStyle,cardAction,cardHoverButton,cardActionHover} from '../../utils/commonStyles'
import {ArrowForward } from '@mui/icons-material'
import {ListComponent} from '../index'
import List from '@mui/material/List';
import styled from '@emotion/styled'

const StyledButton = styled(Button)`
  &:hover {
    background: white;
  }
`


export const CardComponent = ({Item}) => {
  const [isHover,setIsHover]=useState(false);
  return (
    <Card sx={isHover ? cardHoverStyle :cardStyle} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
      <CardContent >
            <Typography  gutterBottom sx={nameStyle}>{Item.name} </Typography>
            <Typography sx={subtitleStyle} gutterBottom>{Item.subtitle} </Typography>
            <Typography sx={isHover?fontHoverStyle:fontStyle}>{Item.name==="Advance"?`${Item.number}`:`${Item.price}`} </Typography>
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

