exports.isOwnEmptyPit = (pits, lastIndex, player) => {
  const lastIndexStones = pits[lastIndex];
  const pitsLength = pits.length;
  const totalPitsPerPlayer = pitsLength / 2;
  const smallPitsPerPlayer = totalPitsPerPlayer - 1;
  const ownMancalaIndex = player * totalPitsPerPlayer + smallPitsPerPlayer;
  const isOwnPit = Math.floor(lastIndex / totalPitsPerPlayer) === player;

  // if the latest pit belongs to the player and it is left with one stone (meaning, before it was empty)
  // collect opposite pit's stones and add them to the player's mancala with the last stone
  if (isOwnPit && lastIndexStones === 1) {
    const oppositePitIndex = pitsLength - lastIndex - 2;
    const oppositePitStones = pits[oppositePitIndex];
    const totalStones = oppositePitStones + lastIndexStones;

    pits[lastIndex] = 0;
    pits[oppositePitIndex] = 0;
    pits[ownMancalaIndex] += totalStones;
  }

  return pits;
};
