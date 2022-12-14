import { TrendingDownRounded } from '@mui/icons-material';
import { Box, Toolbar, Typography, useMediaQuery} from '@mui/material'
import { makeStyles } from '@mui/styles';
import React,{useState} from 'react';
import { spanStyle,spanMediaQuery,trendingIcon,trendingIconQuery } from '../../utils/commonStyles';
import {TabsComponent} from '../index';



const useStyles=makeStyles(theme=>({
  containerBox:{
    height:255,
    width:"100%", 
    position:"absolute",
    top:0,
    left:0,
    backgroundColor:"#079A6B",
  },
  smallBox:{
    height:35,
    backgroundColor:"#20a47a",
    boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.1)"
  },
  toolBarStyle:{
    marginTop:19,
    fontWeight:700,
    color:"white",
    fontFamily:"Roboto",
    display:"flex", 
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    width:"100%"
  },
  tabBox:{
    width:"fit-content",
    padding:7,
    backgroundColor:"#079A6B",
    borderRadius:7,
    marginTop:12,
    border: "1px solid #0DAE7A",
    marginLeft:"auto",
    marginRight:"auto",
    boxShadow:"inset 0px 0px 20px rgba(0, 0, 0, 0.25)",
    position:"relative"
  }, 
  
}));

 export const Header = () => {
  const [value,setValue]=useState('annually');
  const classes=useStyles();
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));
  return (
    <>
    <Box className={classes.containerBox}>
      <Box  className={classes.smallBox}>
      </Box>
      
      <Toolbar className={classes.toolBarStyle}>
        <Typography  variant={isSmallScreen ?"h5":"h4"}>Simple,Transparent Pricing</Typography>
        <Typography variant={isSmallScreen?"subtitle2":"subtitle1"} sx={{mt:1,fontWeight:300,width:"300px"}}>Choose the plan that's right for you.</Typography>
      </Toolbar>

     <Box className={classes.tabBox}>
            <TabsComponent value={value} setValue={setValue}/>  
     </Box>
     {value==="annually" && (
          <TrendingDownRounded  fontSize="large" sx={isSmallScreen?trendingIconQuery:trendingIcon}/>
     )}

     {value==="annually" &&<Typography component="span" sx={isSmallScreen ? spanMediaQuery:spanStyle}>SAVE 17%</Typography>}
    </Box>
    </>
  )
}

