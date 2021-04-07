module.exports = {
    user_update: (req,res,con) => {
        let sql = "UPDATE users SET user_name = '"+req.body.user_name+"' , picture = '"+req.body.picture+"' , birthdate = '"+req.body.birthdate+"' WHERE user_no = '"+req.body.user_no+"' ";
        con.query(sql, (err,result)=>{
            if (err) throw err;
            res.json({status:true, message:'User Updated Successfull'})
        })
    }
}