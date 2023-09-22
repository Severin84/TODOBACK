const Task=require('../models/task.js')

const getAllTask=async(req,res)=> {
    try{
       const tasks=await Task.find({});
       res.status(200).json({tasks});
    }catch{
        res.status(500).json({msg:error})
    }
}

const createTask=async (req,res)=>{
    try{
        const task=await Task.create(req.body)
        res.status(200).json({task});
    }catch{
        res.status(500).json({msg:error})
    }
}

const getTask=async(req,res)=>  {
    try{
        const {id:taskId}=req.params;
        const task=await Task.findOne({_id:taskId})
        if(!task){
            return res.status(404).json({msg:`No task with id:${taskId}`});

        }
        res.status(200).json({task});
    }catch(error){
        res.status(500).json({msg:error})
    }
    // const responce=res.json({id:req.param.id})
    // console.log(responce)
}

const updateTask=async (req,res)=>{
    try{
        const {id:taskId}=req.params;

        const task=await Task.findOneAndUpdate({_id:taskId},req.body,{
            new:true,
            runValidators:true,
        })
       if(!task){
         return res.status(404).json({msg:`No task with Id:${taskId}`})
       }

       res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error});
    }
    //res.send("Update TASK");
}

const deleteTask= async (req,res)=>{
    try{
        const {id:taskId}=req.params;
        const task=await Task.findOneAndDelete({_id:taskId});
        if(!task){
            return res.status(404).json({msg:`No task with id:${taskId}`});
        }
       res.status(200).json({task});
        //res.status(200).json({task:null,status:'success'});
    }catch(error){
        res.status(500).json({msg:error});
    }
    //res.send("Delete TASK");
}




module.exports={
    getAllTask,createTask,getTask,updateTask,deleteTask
}