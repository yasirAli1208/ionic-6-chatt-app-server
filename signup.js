module.exports = {

    signup: (req, res, con) =>{
        console.log(req)
      let sql = "SELECT * FROM  users where (user_no = '"+req.body.phone+"')";
      con.query(sql, (err, result)=> {
          if (err) throw err;
  
          if(result.length > 0){
              res.json({status: false, message: 'Phone Already Exists'})
          }else{
            console.log(req)
              let sql = "INSERT INTO users (user_no, user_name, picture) VALUES ('"+req.body.user_no+"', '"+req.body.user_name+"', '"+req.body.picture+"');";
              con.query(sql, (err, result)=>{
                  if (err) throw err;
                  console.log(result)
                  res.json({status: true, message:'User Signup Successfull'});
              })			
          }
      });
        }
    };