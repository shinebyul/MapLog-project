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
import { savedlocation } from '../../data';
import { MapStore } from '../../zustand/MapStore';
import { updateFolderData } from '../../data';
//folder에 장소 추가 관련
import { placeStore } from '../../zustand/PlaceStore';

const {kakao}=window;

export default function MyPlace() {
  const {map,setMap}=MapStore();
  //folder에 장소 추가 관련
  const {folderlist}=placeStore();

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: '#FCF7EC',
    // backgroundColor: theme.palette.background.paper,
  }));

  const Box = styled('div')(({ theme }) => ({
    backgroundColor: '#FCF7EC',
    // backgroundColor: theme.palette.background.paper,
  }));

const[folderClick,setFolderClick]=React.useState(true);
const[folderDetail,setFolderDetail]=React.useState([]);

function FolderClick(data){
    const folderDetailIndexes = [];
    for (let i = 0; i < data.place_id.length; i++) {
      const currentPlaceId = data.place_id[i];
      for (let j = 0; j < savedlocation.length; j++) {
        if (savedlocation[j].place_id === currentPlaceId) {
          folderDetailIndexes.push(j);
        }
      }
    }
    setFolderDetail(folderDetailIndexes);
    setFolderClick(!folderClick);

}

//const[preMarker,setPreMarker]=React.useState(null);
const[preInfo,setPreInfo]=React.useState(null);

function PlaceClick(loc){
    if(preInfo){
        preInfo.close();
    }
    var iwContent = '<div style="padding:5px;">'
                    +loc.place_name+'<br/>'
                    +loc.place_address+'<br/>'
                    +loc.place_phone
                    +'</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    var iwPosition = new kakao.maps.LatLng(loc.place_y,loc.place_x);  //인포윈도우 표시 위치입니다
    var iwRemoveable = true;

    var infowindow = new kakao.maps.InfoWindow({
        map: map, // 인포윈도우가 표시될 지도
        position : iwPosition, 
        content : iwContent,
        removable : iwRemoveable
    });
    setPreInfo(infowindow);
    // if(preMarker){
    //     preMarker.setMap(null);
    // }
    // // 마커가 표시될 위치입니다 
    // console.log(loc.place_x + '/' + loc.place_y);
    // var markerPosition  = new kakao.maps.LatLng(loc.place_y,loc.place_x); 

    // // 마커를 생성합니다
    // var marker = new kakao.maps.Marker({
    //     position: markerPosition
    // });

    // // 마커가 지도 위에 표시되도록 설정합니다
    // marker.setMap(map);
    var centerPosition  = new kakao.maps.LatLng(loc.place_y,loc.place_x+0.003); 
    map.setCenter(centerPosition);
    // setPreMarker(marker);
}

function gotoList(){
    // if(preMarker){
    //     preMarker.setMap(null);
    // }
    if(preInfo){
        preInfo.close();
    }
    setFolderClick(!folderClick);
    setFolderDetail([]);
}



function addFolder(){
    const newfolder={
            id:3,
            name : '새로운 폴더',
            place_id : []
    }

    const newfolderdata = folderdata;
    newfolderdata.push(newfolder);
    updateFolderData(newfolderdata);
}

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 900, width: 450, height: 920 }}>
        <Grid container spacing={2}>
            <Typography sx={{ mt: 4, mb: 2 , marginLeft: 25, marginRight: 20}} variant="h6" component="div">
                My Place 
            </Typography>
            {folderClick?(
                <Grid item xs={12} md={15}>
                    <button onClick={()=>addFolder()} style={{display:'block', marginLeft:'15px',background:'transparent', border:'none'}}>+ 폴더 추가</button>
                <Demo>
                    <List dense={false}>
                    {folderlist.map((folder) => (
                        <ListItem
                        key={folder.id}
                        secondaryAction={<LongMenu folder={folder}/>}
                        >
                        <ListItemAvatar>
                            <Avatar>
                            <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={folder.name}
                            onClick={() => FolderClick(folder)}
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
                    {folderDetail.map((i, index)=>(
                        <ListItem key={index}>
                        <ListItemText
                            primary={savedlocation[i].place_name}
                            onClick={()=>PlaceClick(savedlocation[i])}
                        />
                        </ListItem>
                    ))}
                    </List>
                    <button onClick={()=>gotoList()}>목록으로</button>
                </Demo>
                </Grid>
            
            )}
        </Grid>
    </Box>
  );
}
