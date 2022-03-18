exports.isGameEnded = (pits, player) => {
  const pitsLength = pits.length;
  const pitsPerPlayer = pitsLength / 2;
  const smallPits = pitsPerPlayer - 1;
  const startIndex = player * pitsPerPlayer;

  for (let i = startIndex; i < startIndex + smallPits; i++) {
    if (pits[i] > 0) return false;
  }

  return true;
};
