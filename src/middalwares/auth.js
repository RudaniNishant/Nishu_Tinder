const authToken = function authToken(req,res,next){
    console.log("token verified successfully...");
    
    const token = "3";
    const istokenTrue = token === "3";
    if(!istokenTrue){
        res.status(401).send("unauthorized token")
    }else{
        next();
    }
} 

module.exports = {
    authToken
}