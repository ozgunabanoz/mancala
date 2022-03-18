// calculating the score

exports.calculateScore = (pits) => {
  const score = {};
  const pitsLength = pits.length;
  const totalPitsPerPlayer = pitsLength / 2;
  const smallPitsPerPlayer = totalPitsPerPlayer - 1;

  for (let i = 0; i < 2; i++) {
    score[i] = pits[i * totalPitsPerPlayer + smallPitsPerPlayer]; // e.g score[0] = pits[6] or score[1] = pits[13]
  }

  return score;
};
