exports.collectOpponentStones = (pits, player) => {
  const pitsLength = pits.length;
  const totalPitsPerPlayer = pitsLength / 2; // e.g 14/2=7
  const smallPitsPerPlayer = totalPitsPerPlayer - 1; // e.g 7 -1 = 6
  const oppPlayer = (player + 1) % 2; // if the current player is 0, opposite is 1 and vice versa
  // if player is 1, its mancala index is 1*7 + 6 = 13, if it is 0, its mancala is 0*6 + 6 = 6
  const oppMancalaIndex = oppPlayer * totalPitsPerPlayer + smallPitsPerPlayer;
  const startIndex = oppPlayer * totalPitsPerPlayer; // if the player is 0, it is 0*7, if 1, it is 1*7
  let stones = 0;

  // loop through opposite player's pits and if any stones left, add them to their mancala
  for (let i = startIndex; i < oppMancalaIndex; i++) {
    stones += pits[i];
    pits[i] = 0;
  }

  pits[oppMancalaIndex] += stones;

  return pits;
};
