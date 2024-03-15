const { v4: uuidv4 } = require('uuid');
const { param } = require('./routes');
var todoArray = [];

const createTodo = async (req,res) => {
    try{
    const {title,description=''} = req.body;
    const id = uuidv4();
    todoArray.push({title,description,completed:false,id});
    res.status(200).json({title,description,completed:false,id});
    }catch (error) {
        return res.status(500).json({ error: "Server error" });
      }
}


const getTodoList = async (req,res) => {
    try{
    res.status(200).json(todoArray); 
    }catch (error) {
        return res.status(500).json({ error: "Server error" });
    }   
}


const editTodo = async (req,res) => {
    try{
    const {id} = req.params;
    const {completed=false,title} = req.body;
    const index = todoArray.findIndex(task=>task.id===id);
    index>-1 && (todoArray[index]={...todoArray[index],completed,title})
    res.status(200).json(todoArray);
    }catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}

const deleteTodo = async (req,res) => {
    try{
    todoArray = todoArray.filter(item=>item.id!==req.params.id);
    res.status(200).json({message:'Deleted'});
    }catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}

module.exports = {
    createTodo,
    getTodoList,
    editTodo,
    deleteTodo,
}

