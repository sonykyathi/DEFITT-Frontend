import axios from 'axios';
import React, {useEffect, useRef } from 'react';


export const downloadWhitePaper = async () => {
  let res = await axios.get(`${process.env.REACT_APP_API}/api/v1/whitepaper`).then(res => res.data);
  window.open(res.data, "_blank")
}


export const useInterval = (callback, delay) => {

  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);


  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}