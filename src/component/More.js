import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { folderdata } from '../data';
import { updateFolderData } from '../data';


export default function LongMenu({folder}) {

  const options = [
    '이름수정',
    '삭제',
  ];
  
  const ITEM_HEIGHT = 48;
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function optionClick(option){
    if(option==='이름수정'){
      editFolder(folder.id);
    }
    else if(option==='삭제'){
      console.log(folder.id);
      deleteFolderById(folder.id);
    }
  }

  function deleteFolderById(id) {
    const updatedFolderData = folderdata.filter((folder) => folder.id !== id);
    updateFolderData(updatedFolderData); // 데이터 업데이트 함수를 호출하여 상태 업데이트
  }

  function editFolder(id){
    
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            <button onClick={()=>optionClick(option)}>{option}</button>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}