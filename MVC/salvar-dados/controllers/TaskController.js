const Task = require('../models/Task')

module.exports = class TaskController {
  static createTask(req, res){
    res.render('task/create')
  }

  static async createTaskSave(req,res){
    const taskInfo = {
      title: req.body.title,
      description: req.body.description,
      done: false
    }

    await Task.create(taskInfo)
    res.redirect('/tasks')
  }
  static showTasks(req,res){
    res.render('tasks/all')
  }
}