const { LEVEL_TRAVELLER } = require("./handlers/enum");

const addXp = 990;

let addLevelTravel = LEVEL_TRAVELLER.NEWBIE;

if (addXp <= 500) {
  addLevelTravel = LEVEL_TRAVELLER.NEWBIE;
} else if (addXp <= 1000) {
  addLevelTravel = LEVEL_TRAVELLER.SEASONAL;
} else if (addXp <= 2000) {
  addLevelTravel = LEVEL_TRAVELLER.TRAVELLER;
} else if (addXp <= 3000) {
  addLevelTravel = LEVEL_TRAVELLER.EXPLORER;
}

console.log(addLevelTravel);
