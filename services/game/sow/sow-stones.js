const { BadRequestError } = require('../../../models');

exports.sowStones = (game, pit, player) => {
  const { pits } = game;
  const pitsLength = pits.length;
  const totalPitsPerPlayer = pitsLength / 2; // total pits of a player e.g 14 / 2 = 7
  const smallPitsPerPlayer = totalPitsPerPlayer - 1; // total pits of a player except their mancala e.g 7 -1 = 6
  const oppMancalaIndex = // opposition's mancala index
    ((player + 1) % 2) * totalPitsPerPlayer + smallPitsPerPlayer;
  const index = player * totalPitsPerPlayer + pit; // index of the selected pit
  let numOfStones = pits[index]; // number of stones in the selected pit
  let currIndex = index; // starting index before sowing

  if (numOfStones === 0) throw new BadRequestError('Pit is empty'); // if no stones left in the selected pit, throw an error

  pits[index] = 0; // empty the selected pit

  // sow the stones to the next pits except the opposite player's mancala
  while (numOfStones > 0) {
    currIndex = (currIndex + 1) % pitsLength;

    if (currIndex !== oppMancalaIndex) {
      pits[currIndex]++;
      numOfStones--;
    }
  }

  return { pits, lastIndex: currIndex };
};
