const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
  {
    turn: {
      type: Number,
      default: 0,
    },
    pits: [Number],
    active: { type: Boolean, default: true },
    score: {
      0: { type: Number, default: 0 },
      1: { type: Number, default: 0 },
    },
  },
  { timestamps: true },
);

gameSchema.set('toObject', { versionKey: false });

gameSchema.statics.create = async function () {
  const Game = this;
  const pitNum = 14;
  const stones = 6;
  const pits = [];

  for (let i = 0; i < pitNum; i++) {
    pits[i] = (i + 1) % 7 === 0 ? 0 : stones;
  }

  const args = { pits };
  const newGame = new Game(args);

  await newGame.save();

  return newGame;
};

exports.Game = mongoose.model('Games', gameSchema);
