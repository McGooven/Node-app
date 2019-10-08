const router=require('express').Router();    //now "express" is to make routes.

router.get('/notes',(req,res)=>{
    res.send('Notes from database...');
});
module.exports=router;