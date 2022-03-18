const PLAYERS = { 0: 'Player 1', 1: 'Player 2' };

const constructMsg = (draw, score, winner, loser) => {
  if (draw) return `It is a draw. Final score: ${score[0]}:${score[1]}`;

  return `${PLAYERS[winner]} beats ${PLAYERS[loser]} ${score[winner]}:${score[loser]}`;
};

const assignScoreMsg = (score) => {
  return score[0] > score[1]
    ? constructMsg(false, score, 0, 1)
    : score[1] > score[0]
    ? constructMsg(false, score, 1, 0)
    : constructMsg(true, score);
};

exports.createResponseMessage = (gameEnded, nextTurn, score) => {
  if (gameEnded) return assignScoreMsg(score);

  return `${PLAYERS[nextTurn]} is next`;
};
