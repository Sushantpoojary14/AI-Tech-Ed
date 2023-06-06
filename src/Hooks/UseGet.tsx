import axios from 'axios';
import React from 'react'
import BaseUrl from './BaseUrl';

const UseGet = (url:string) => {
  return (
            async () => await axios.get(url).then((res: { data: any; }) => res.data).catch((err: any) => console.log(err)
        )

  )
}

export default UseGet
