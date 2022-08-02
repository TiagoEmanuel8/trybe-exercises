enum TypesEnum {
  mana,
  stamina,
}
// Solução encontrada na documentação https://www.typescriptlang.org/docs/handbook/enums.html#union-enums-and-enum-member-types
export type EnergyType = keyof typeof TypesEnum;

export default interface Energy {
  type_: EnergyType,
  amount: number,
}
