const query=require('../database/connect');

module.exports= class  detailsServices{

    async postMethod(data){
        try{
            let result= await query('insert into details values ($,$2,$3,$4)',[data.id, data.name, data.email,data.age]);
            console.log(result);
            return result.rowCount;
        } catch (error)
        {
            throw error;
        }
    }
 
     async getAllDetails(){
         try {
             let result= await query('select * from student order by id');
         return result;
        }catch (error){
         throw error;
        }
    }
async getDetailsById(){
    try{
        let result=await query('select * from student where id=$1',[id]);
          return result;
         } catch (error){
    throw error;
        }
     }

async updateDetails(){  
    try{
        if(data.id!==indefined){
            let result;
                if(data.name!==undefined)
                 {
                result=await query('update student set name=$1 where id=$2', [data.name,data.id]);
                 }
            if(data.email!==undefined){
            result= await query('update student set email=$1,where id=$2',[data.email,data.id]);
                 }
            if(data.age!==undefined){
                result= await query('update student set age=$1,where id=$2',[data.age,data.id]);
                 }
            return result;
         }
        else{
                    throw new error("please prvide id to update");
            }
        } catch (error){
            console.log('error is there');
            throw error;
        }
    }
async delete(){
    try{
        if(id!==undefined){
            let result=await query('delete from student where id=$1',[id]);
            console.log(result);
        return result;      
      }else{
          throw new error("error");
            }
        }
        catch (error){

        } 
   }
}
