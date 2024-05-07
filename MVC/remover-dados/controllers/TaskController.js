const Task = require('../models/Task')

module.exports = class TaskController {
  // formulário para criar task
  static createTask(req, res){
    res.render('task/create')
  }

  // salvando a task no banco de dados
  static async createTaskSave(req,res){
    const taskInfo = {
      title: req.body.title,
      description: req.body.description,
      done: false
    }

    await Task.create(taskInfo)
    res.redirect('/tasks')
  }
  //mostrando todas as taks 
  static async showTasks(req,res){
    const tasks = await Task.findAll({raw: true})
    res.render('task/all', {tasks})
  }

  // removendo dados
  static async removeTask(req,res){
    const id = req.params.id
    await Task.destroy({where: {id:id}})

    res.redirect('/tasks')
  }
}