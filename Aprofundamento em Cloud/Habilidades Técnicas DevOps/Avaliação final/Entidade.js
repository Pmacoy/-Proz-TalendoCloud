app.get('/api/entities', async (req, res) => {
  const { type, name, creationDate } = req.query;

  const whereClause = {};
  if (type) whereClause.type = type;
  if (name) whereClause.name = { [Op.like]: `%${name}%` };
  if (creationDate) whereClause.createdAt = { [Op.gte]: new Date(creationDate) };

  const entities = await Entity.findAll({ where: whereClause });
  res.json(entities);
});
app.get('/api/entities/:id', async (req, res) => {
    const entity = await Entity.findByPk(req.params.id);
    if (entity) {
      res.json(entity);
    } else {
      res.status(404).json({ message: 'Entidade não encontrada' });
    }
  });
  