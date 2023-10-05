const studentData=[
    {id_student:1, firstname:'Teppo', lastname:'Testi'},
    {id_student:2, firstname:'Liisa', lastname:'Virta'},
    {id_student:3, firstname:'Aino', lastname:'Meri'}
];

const student={
    getAllStudents: function(callback){
        return db.query("SELECT * FROM student",callback)
    },
    getOneStudent: function(id,callback){
        return db.query("SELECT * FROM student where id_student=?",[id],callback);
    },
    addStudent: function(newData){
        let sql="insert into student values("+newData.id_student+","+newData.firstname+");";
        return sql;
    },
    updateStudent: function(id){
        return "Päivitetään opiskelija, jonka id = "+id;
    },
    deleteStudent: function(id){
        return "Poistetaan opiskelija, jonka id = "+id;
    }
};
module.exports=student;