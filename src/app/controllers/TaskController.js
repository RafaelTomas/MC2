//const jwt = require('jsonwebtoken');
const Task = require('../Models/Task')
const User = require('../Models/User')


module.exports = {

  async create(req, res) {
    try {
      const { userId } = req.params;
      const { nome, descricao, data_inicio, data_fim, status } = req.body;
  
      const user = await User.findByPk(userId);
      if (!user) return res.status(404).json({ error: 'user not found' })
  
      const task = await Task.create({ userId, nome, descricao, data_inicio, data_fim, status });
      return res.status(200).json(task);
    } catch (error) {
      return res.status(400).json({error: error.message}) 
    }
  },

  async readAllTask(req, res) {
    const { userId } = req.params;
    const user = await User.findByPk(userId);

    if (!user) return res.status(404).json({ error: 'user not found' })
    const task = await Task.findAll({ where: { userId } });

    return res.status(200).json(task);
  },

  async update(req, res) {
    try {
    const { userId, id } = req.params;
    const { nome, descricao, data_inicio, data_fim, status } = req.body;
    const user = await User.findByPk(userId);

    if (!user) return res.status(404).json({ error: 'user not found' })

    const task = await Task.update({
      nome: nome,
      descricao: descricao,
      data_inicio: data_inicio,
      data_fim: data_fim,
      status: status
    },
      {
        where: {
          userId: userId,
          id: id,
        },
      }
    );

    return res.json(task);
    } catch (error) {
      return res.status(400).json({error: error.message}) 
    }
    
  },

  async delete(req, res) {
    try {
      const { userId } = req.params;
      const user = await User.findByPk(userId);
      if (!user) return res.status(404).json({ error: 'user not found' })
      
      const task = await Task.destroy({ where: { userId } })
      return res.status(200).json({ succes: 'deleted task' });
    } catch (err) {
      return res.status(400).json({error: error.message}) 
    }
  }

}