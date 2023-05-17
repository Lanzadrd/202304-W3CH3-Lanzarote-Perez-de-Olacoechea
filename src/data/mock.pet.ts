import { Pet } from "../models/pet";

export const getMockPets = (): Pet[] => [
  new Pet("Juanillo", "toro de lidia", "Lanza"),
  new Pet("Adolfo", "gato egipcio", "Luis aka El peri"),
  new Pet("Coco", "Labrador", "Ladilla"),
];
