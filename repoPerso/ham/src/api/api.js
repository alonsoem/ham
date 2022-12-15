import axios from 'axios';


const foreignRequest = (type, fullPath,params,config) => axios
    .request({ url: `${fullPath}`, method: type, params:params, headers:{'Accept': 'application/xml'}})
    .then(req => req.data);

export const getSolar = (params) => foreignRequest('get', 'http://ham.qrits.com.ar/solarConditions/solarData.php',{},{});


