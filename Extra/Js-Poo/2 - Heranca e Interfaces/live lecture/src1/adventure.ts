import { Human, Orc, People, Weapon } from "./middleearth";

const axe = new Weapon("axe", "chunk");
const sword = new Weapon("sword", "shhs");

const capi = new Human("Capi", "Etheriel", 1.84, sword);
const birl = new Orc("BIRL", 2, axe);

function greet(person: People) {
  console.log(person.present());
}
greet(capi);
greet(birl);

birl.attack(capi);
capi.attack(birl);
