import React from "react";
import axios from "axios";

export async function postData() {
  try {
    const response = await axios.get(
      "http://3.39.142.157:8000/postlist/"
    ); //http://3.39.142.157:8000/postlist/ //https://jsonplaceholder.typicode.com/todos/
    return response.data;
  } catch {
    console.log("error");
    return [];
  }
}
