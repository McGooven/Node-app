const router=require('express').Router();    //now "express" is to make routes for main like functions in the page

router.get('/',(req,res)=>{
    res.send('Index');
});

router.get('/about', (req,res)=>{
    res.send('About');
});
module.exports=router;