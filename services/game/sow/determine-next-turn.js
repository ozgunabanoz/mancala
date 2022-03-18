exports.determineNextTurn = (lastIndex, player) => {
  const isOwnMancala =
    Math.floor(lastIndex / 7) === player && (lastIndex + 1) % 7 === 0; // check if the last position is the player's mancala
  const nextTurn = isOwnMancala ? player : (player + 1) % 2; // determine which player next based on above condition

  return { nextTurn, isOwnMancala };
};
