const router=require('express').Router();    //now "express" is to make routes for main like functions in the page

router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/about', (req,res)=>{
    res.render('about');
});
module.exports=router;