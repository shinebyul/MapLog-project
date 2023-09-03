import { uniqBy } from "lodash";
import { useState } from "react";
 function Prac(){
    const arr = [
        {id: 1, title : 'a'},
        {id: 1, title : 'b'},
        {id:2, title : 'c'}
    ]
    const arr2 = uniqBy(arr,'id');
    
    const[test,settest]=useState(0);


    return(
        <div>
        </div>
    );

 }

 export default Prac;