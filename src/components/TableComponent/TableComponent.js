import { CheckCircle } from '@mui/icons-material'
import { Paper, TableContainer ,TableHead,TableCell,TableRow,Table,TableBody} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { tableHeading,featuresData } from '../../Data/data'

const useStyles=makeStyles(theme=>({
    container:{
        width:1020,
        margin:" 1.2rem auto",
        boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px" ,
        [theme.breakpoints.down('md')]: {
        width:500,
    },
    },
    cellStyle:{
        width:160,
        borderRight:"1px solid #e2e8f0",
        color:"black",
        "&:last-child ": { borderRight: 0 },

    },
    iconColor:{
        color:"#079A6B",
    },
    featureStyle:{
        fontSize:9,
        borderRight:"1px solid #e2e8f0",
    },
    borderStyle:{
        borderRight:"1px solid #e2e8f0",
    }


}));


export const TableComponent = () => {
    const classes=useStyles();
  return (
    <TableContainer component={Paper} className={classes.container}>
        <Table>
        <TableHead >
          <TableRow sx={{borderBottom:"1.1px solid #cbd5e1"}}>
             {tableHeading.map((data)=>{
                  return( <TableCell key={data} className={classes.cellStyle} style={{fontWeight:"bold"}} align={data === "Features" ? "left" : "center"}>{data}</TableCell>)
             }
             )}
          </TableRow>
        </TableHead>
        <TableBody>
          {featuresData.map((rowData) => (
            <TableRow 
              key={rowData.name}              
            >
              <TableCell component="th" scope="row" className={classes.featureStyle}>
                {rowData.name}
              </TableCell>
              <TableCell align="center" className={classes.borderStyle}>{rowData.isBasic && <CheckCircle className={classes.iconColor} />}</TableCell>
              <TableCell align="center" className={classes.borderStyle}>{rowData.isMedium && <CheckCircle className={classes.iconColor}/>}</TableCell>
              <TableCell align="center">{rowData.isAdvance && <CheckCircle className={classes.iconColor} />}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
       </Table>
    </TableContainer>
  )
}

