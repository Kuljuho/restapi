const express=require('express');
const router=express.Router();
const student=require('../models/student_model');

router.get('/',function(request,response){
    let data=student.getAllStudents(function(err, data){
        if(err){
            response.json(err);
        } else {
            response.send(data);
        }
    });
});

router.get('/:id',function(request,response){
    let data=student.getOneStudent(function(err, data){
        if(err){
            response.json(err);
        } else {
            response.send(data);
        }
    });
});

router.post('/',function(request,response){
    let data=student.addStudent();
    response.json(data);
});

router.put('/:id',function(request,response){
    let data=student.updateStudent(request.params.id);
    response.json(data);
});

router.delete('/:id',function(request,response){
    let data=student.deleteStudent(request.params.id);
    response.json(data);
});


module.exports=router;