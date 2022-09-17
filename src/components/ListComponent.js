import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { listItemStyle } from '../utils/commonStyles';

export const ListComponent = ({List}) => {
  return (
    
        <ListItem sx={{...listItemStyle, display: 'list-item'}}>
                  <ListItemText
                    sx={{ml:-2,...listItemStyle}}
                    primary={List}
                  />
         </ListItem>
              
  )
}


