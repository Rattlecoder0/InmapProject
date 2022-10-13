var express = require("express")

var router = express.Router();

router.get("/getdata", (req,res) => {
    console.log('Hii Friends')
    res.send('get user data')
})
router.post("/adddata", (req,res) => {
    console.log('Hii Friends')
    res.send('new user data add')
})
router.put("/update", (req,res) => {
    console.log('Hii Friends')
    res.send('user data updated')
})
router.delete("/delete", (req,res) => {
    console.log('Hii Friends')
    res.send('delete user data')
})


module.exports = router;