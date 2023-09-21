import React, { useState } from "react";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import ChatIcon from '@mui/icons-material/Chat';

function MiniBar({placeMarker}){
    

    return(
        <>
            <div className='minibar'>
                <button onClick={placeMarker}><GpsFixedIcon/></button>
                <button><FolderSpecialIcon/></button>
                <button><ChatIcon/></button>
            </div>
        </>
    );
}
export default MiniBar;