const Student=require('../../models/student') 

module.exports=function (router){  
    //GET :the newest stand-up meeting notes
    router.get('/student',function(req,res){ 
 
        Student.find({},(err,product)=>{ 
            //check if err was found or not
            if(err){
                res.json({success:false,message:err}); //return err msg
            }
            else{ 
                //check if standup were found in db
                if(!product){
                    res.json({success:false,message:'No product found'});
                }else{
                    res.json({success:true,student:student}); //return success
                }
            }
            
        })
    }) 


    //POST:Get new meeting note document..
    router.post('/student',function(req,res){
        let note=new Student(req.body)
        note.save(function(err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    }) 

    //PUT :update 

    router.put('/updateStudent',(req,res)=>{
        if(!req.body._id){
            res.json({success:false,message:'No product is provided'});

        }else{
            Student.findOne({_id:req.body._id},(err,student)=>{
                if(err){
                    res.json({success:false,message:'No a valid product id'});
                }else{
                    student.studentName=req.body.productName; 
                    student.studentDesc=req.body.productDesc; 
                    student.studentgrade=req.body.productPrice; 
                    student.studentBarcode=req.body.studentBarcode

                    student.save((err)=>{
                        if(err){
                            res.json({success:false,message:err});
                        } 
                        else{
                            res.json({success:true,message:'product updated'});
                        }
                    });
                }
            });
        }
    }); 

    //DELETE 

    router.delete('/deleteStudent/:id',(req,res)=>{
        if(!req.params.id){
            res.json({success:false,message:'no id provided'});
        }
        else{
            student.findOne({_id:req.params.id},(err,product)=>{
                if(err){
                    res.json({success:false,message:'invalid id'});
                }
                else{
                    product.remove((err)=>{
                        if(err){
                            res.json({success:false,message:err});  
                        }
                        else{
                            res.json({success:true,message:'product deleted'});
                        }
                    });
                }
            });


        }
    });
}


