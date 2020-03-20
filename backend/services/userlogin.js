const query=require('../database/connect');

module.exports= class userLoginService{
    async register(username,password){
        try{
            let result= await query('insert into login values($1,$2)',[username,password]);
            return result;
        }catch (error){
            throw error;
        }
    }
        async checkUsername(username){
            try{
                let result=await query('select * from login where username=$1 and password=$2',[username,password]);
                return result;
            }catch (error){
                throw error;;
                
            }
            
        }

        async userlogin(username,password){
            try{
                let result= await query('select * from login where username=$1 and password =$2',[username,password]);
                return result;
            }catch (error){
                throw error;
            }
        }

}