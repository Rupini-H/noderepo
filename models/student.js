const mongoose=require('mongoose') 
const studentSchema=new mongoose.Schema({
    studentName:{type:String},
    studDesc:{type:String}, 
    studgrade:{type:Number}, 
    Barcode:{type:Number}
}) 
module.exports=mongoose.model('Student',studentSchema)