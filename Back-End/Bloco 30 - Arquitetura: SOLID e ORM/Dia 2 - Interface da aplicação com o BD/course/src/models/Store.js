// 4 - posso criar de forma manual ou com o comando  npx sequelize model:generate --name Store --attributes name:string description:string
// name é o nome do arquivo da model || atributos são os nomes de colunas

// mas esse comando gera uma nova migration, entao se ja tiver ela criada, 
// criação manualmene

const Store = (sequelize, DataTypes) => {
  // 4.1 - a mesma lógica dos anteriores, esse define() é para definir as tabelas
  const Store = sequelize.define("Store", { // esse 1ºP se refere a tabela store + atributos da tabela
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, 
    {
      timestamps: false, // esse 2ºP se refere ao tipo da tabela
      // freezeTableName: true, // ver os comentários na última linha
      // tableName: 'xableu' => essa propriedade o sequelize vai entender que deve procurar uma tabela chamada xableu no BD
    }
  );

  return Store;
};

module.exports = Store;

// freezeTableName comentários
// obs: PARA O MODEL X BD NA HORA DE FAZER A TABELA EXISTE UMA REGRA CHATA
//   * se na models o nome da tabela for no singular, o sequelize entende que na migrations a tabela está no plural
//   * se na migrations a tabela está no singular, o sequelize entende que na models essa tabela está no plural
// o freezeTableName é para justamente ACABAR com essa chatice padrão do sequelize