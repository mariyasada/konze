import React from 'react'
import {Tab, Tabs} from '@mui/material';


export const TabsComponent = ({value,setValue}) => {
  
  const handleChange=(e,newValue)=>{
    setValue(newValue);
  }
  return (
    <Tabs aria-label="monthly plan" onChange={handleChange} value={value}
            TabIndicatorProps={{hidden:true}}
            sx={{ "& button.Mui-selected":{backgroundColor:"white",borderRadius:"11px",fontWeight:700,color:"black",height:"26px"}}}>
             
              <Tab label="ANNUALLY" value="annually" sx={{width:"160px"}}/>
              <Tab label="MONTHLY" value="monthly" sx={{width:"160px"}} />
            
     </Tabs>
  )
}

