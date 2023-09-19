// import React, { useState } from "react";
// import { folderdata } from "../../data";
// import InteractiveList from "../../pages/Prac";


// function MyPlace(){

//     const[folder,setFolder]=useState(null);
//     const[folderClick,setFolderClick]=useState(true); //true(선택안함-폴더목록) false(선택-선택된 폴더의 장소 목록)

//     function FolderClick(data){
//         setFolder(data);
//         console.log(folder);
//         setFolderClick(!folderClick);
//     }

//     return(
//         // <div style={{width:'450px', height:'100vh',overflow:'auto', backgroundColor:'#FCF7EC', padding:'30px'}}>
//         // <h2>내장소</h2>
//         // {folderClick?
//         // (
//         //     <div>
//         //         <button
//         //             style={{display:'block',background:'transparent', border:'none', marginBottom:'20px'}}
//         //             >+폴더추가</button>
//         //         {folderdata.map((data)=>(<div style={{borderBottom:'solid black 1px', marginBottom:'10px'}}><button style={{display:'block', background:'transparent', border:'none'}} onClick={()=>FolderClick(data)}>{data.name}</button></div>))}
//         //     </div>
//         // ):(
//         //     <div> 
//         //         {folder && folder.location.map((loc) => 
//         //         <div key={loc} style={{borderBottom:'solid black 1px', marginBottom:'10px'}}><button style={{display:'block', background:'transparent', border:'none'}}>{loc}</button></div>)}
//         //         <button
//         //             style={{display:'block', background:'transparent', border:'none'}}
//         //             onClick={()=>setFolderClick(!folderClick)}>목록으로</button>
//         //     </div>
//         // )}
//         // </div>
//         <div style={{width:'420px', backgroundColor:'#FCF7EC', height:'100vh', padding:'30px'}}>
//             <h3>내장소</h3>
//             <InteractiveList/></div>
//     );
// }

// export default MyPlace;


// /*


// onClick={()=>folderClick(data)}*/




import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import FolderIcon from '@mui/icons-material/Folder';
import LongMenu from '../More';
import { folderdata } from '../../data';
import Typography from '@mui/material/Typography';

export default function MyPlace() {
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: '#FCF7EC',
    // backgroundColor: theme.palette.background.paper,
  }));

  const Box = styled('div')(({ theme }) => ({
    backgroundColor: '#FCF7EC',
    // backgroundColor: theme.palette.background.paper,
  }));

const[folderClick1,setFolderClick1]=React.useState(true);
const[folderDetail1,setFolderDetail1]=React.useState([]);
const[selectedFolder, setSelectedFolder]=React.useState([]);

function FolderClick1(data){
  setFolderDetail1(data.location);
  setFolderClick1(!folderClick1);
}


  return (
    <Box sx={{ flexGrow: 1, maxWidth: 900, width: 450, height: 920 }}>
        <Grid container spacing={2}>
            <Typography sx={{ mt: 4, mb: 2 , marginLeft: 25, marginRight: 20}} variant="h6" component="div">
                My Place 
            </Typography>
            {folderClick1?(
                <Grid item xs={12} md={15}>
                    <button style={{display:'block', marginLeft:'15px',background:'transparent', border:'none'}}>+ 폴더 추가</button>
                <Demo>
                    <List dense={false}>
                    {folderdata.map((folder) => (
                        <ListItem
                        key={folder.id}
                        secondaryAction={<LongMenu/>}
                        >
                        <ListItemAvatar>
                            <Avatar>
                            <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={folder.name}
                            onClick={() => FolderClick1(folder)}
                        />
                        </ListItem>
                    ))}
                    </List>
                </Demo>
                </Grid>
            ):(
                <Grid item xs={12} md={6}>
                <Demo>
                    <List dense={false}>
                    {folderDetail1.map((location, index)=>(
                        <ListItem key={index}>
                        <ListItemText
                            primary={location}
                        />
                        </ListItem>
                    ))}
                    </List>
                    <button onClick={()=>setFolderClick1(!folderClick1)}>목록으로</button>
                </Demo>
                </Grid>
            
            )}
        </Grid>
    </Box>
  );
}
