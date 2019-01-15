const express = require('express');
const router =  express.Router();

const Tasks = require('../models/tasks');

router.get('/', async (req,res) =>{
   const tasks = await Tasks.find();
   console.log(tasks);
   res.json(tasks);
});
//reques es toda la info que envia el navegador al servidor
router.post('/', async(req, res) =>{
    const task = new Tasks(req.body);
    //console.log(new Tasks());
   // console.log(new Tasks(req.body));
   //console.log(task);
    await task.save();
    //res.json('recibido');
    res.json({
        status: 'Tarea Guardada'
    });
});

router.get('/:id', async (req,res) =>{
    const task = await Tasks.findById(req.params.id);
    res.json(task);
});

router.put('/:id', async (req,res) =>{
    //console.log(req.params);
    //req.params: ID del objeto a actualizar en la base de datos
    //req.body: Son los datos que queremos actualizar 
    await Tasks.findByIdAndUpdate(req.params.id, req.body);

    res.json({
        status: 'Tarea actualizada'
    });
});

router.delete('/:id', async(req, res)=>{
    await Tasks.findByIdAndRemove(req.params.id);

    res.json({
        status: 'Tarea eliminada'
    });
});

module.exports = router;