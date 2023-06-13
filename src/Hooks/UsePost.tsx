import axios from 'axios';
import React from 'react'

const UsePost = async (url: string, data: any) => {
    try {
      const response = await axios.post(url, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (err) {
      console.log(err);
      throw err; 
    }
  };
  
  
  export default UsePost;
