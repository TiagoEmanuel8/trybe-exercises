const { Patients, Plans } = require('../models');

const getAllPlans = (req, res) =>
  Plans.findAll({
    where: { plan_id: req.params.id },
    include: [{ model: Patients, as: 'patients' }]
  })
    .then((listOfPatients) => {
      if (!listOfPatients.length) {
        return res.status(404).send({ message: 'No plan found' });
      }
      return res.status(200).json(listOfPatients);
    })
    .catch(() => {
      return res.status(500).json({ message: 'Algo deu errado' });
    });

module.exports = getAllPlans;
