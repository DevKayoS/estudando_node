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
  static showTasks(req,res){
    res.render('tasks/all')
  }
}