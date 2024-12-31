const allowedOrigins = ['http://localhost:5173','http://localhost:5174','https://food-del-copy-admin.onrender.com','https://food-del-frontend-fp7s.onrender.com']

const corsOptions ={
    origin: (origin,callback)=>{
        if(allowedOrigins.indexOf(origin)!== -1 || !origin){
            callback(null,true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
   },
    credentials:true,  //access-control-allow-credentials:true
    optionSuccessStatus:200
}
module.exports = corsOptions;   