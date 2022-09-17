import { Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import {TableComponent} from './TableComponent';

const useStyles=makeStyles({
    container:{
        margin:"2.5rem 0",
        textAlign:"center",
    },
    subtitleStyle:{
        fontSize:{ xs: 'x-small', sm: 'small', md: 'medium', lg: 'large' },
        color:"#079A6B",
        
    },
    headingStyle:{
        fontSize:{ xs: 'x-small', sm: 'small', md: 'medium', lg: 'large' },
    }

})

export const FeatureComponent = () => {
    const classes=useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="subtitle1" className={classes.subtitleStyle} style={{fontWeight:"bold"}}>FEATURES</Typography>
      <Typography variant="h6" className={classes.headingStyle}>All The Features Your Need</Typography>
      <TableComponent/>
    </Container>
  )
}

