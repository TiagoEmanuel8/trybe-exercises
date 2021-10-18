module.exports = (sequelize, DataTypes) => {
  const PatientSurgeries = sequelize.define(
    'Patient_surgeries',
    {},
    { timestamps: false },
  );

  Patient_surgeries.associate = (models) => {
    // relacionamento N
    models.Surgeries.belongsToMany(models.Patients, {
      as: 'patients', // apelido
      through: Patient_surgeries, // referencio a própria tabela
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
    // relacionamento N
    models.Patients.belongsToMany(models.Surgeries, {
      as: 'surgeries',
      through: Patient_surgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };

  return PatientSurgeries;
};
