import axios from 'axios';


export const downloadWhitePaper =async()=>{
    let res =await axios.get(`${process.env.REACT_APP_API}/api/v1/whitepaper`).then(res=>res.data);
    window.open(res.data, "_blank")
  }