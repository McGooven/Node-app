const router=require('express').Router();    //now "express" is to make routes for accounts like functions in the page.

router.get('/users/singin',(req,res)=>{
    res.send('singing to the app...');
});

router.get('/users/signup',(req,res)=>{
    res.send('authentication form');
});
module.exports=router;