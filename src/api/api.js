import axios from 'axios';


const foreignRequest = (type, fullPath,params,config) => axios
    .request({ url: `${fullPath}`, method: type, params:params, headers:config})
    .then(req => req.data);

export const getSolar = (params) => foreignRequest('get', 'http://ham.qrits.com.ar/api/solarData.php',{},{'Content-Type':'application/json'});


export const getUtcTime = (params) => foreignRequest('get', 'http://ham.qrits.com.ar/api/utcTime.php',{},{'Content-Type':'application/json'});


