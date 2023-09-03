import React from "react";
import axios from "axios";

export async function postData(){
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    }
    catch{
        console.log('error');
        return([]);
    }
}