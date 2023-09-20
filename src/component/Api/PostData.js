import React from "react";
import axios from "axios";

export async function postData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    ); //http://3.39.142.157:8000/postlist/
    return response.data;
  } catch {
    console.log("error");
    return [];
  }
}
