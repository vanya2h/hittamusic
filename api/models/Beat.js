const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beatSchema = new Schema({
  image: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  soundcloudId: {
    type: String,
    default: null,
  },
  tags: [{
    type: String,
    default: [],
  }],
  price: {
    exclusive: {
      type: Number,
      default: 35
    },
    premium: {
      type: Number,
      default: 20,
    },
    basic: {
      type: Number,
      default: 10,
    },
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Beat = mongoose.model("Beat", beatSchema);

Beat.getBeat = (response, id, onBeat, onError) => {
  Beat.findById(id, (err, beat) => {
    if (err) {
      if (onError) return onError("Неверный формат идентификатора")
      return response.status(500)
        .send("Неверный формат идентификатора");
    } else if (!beat) {
      if (onError) return onError("Бит не найден")
      return response.status(404)
        .send("Бит не найден");
    } else {
      if (onBeat) return onBeat(beat);
      return response.status(200)
        .json(beat);
    }
  });
};

Beat.createBeat = (response, beat, onBeat, onError) => {
  Beat.findById(id, (err, beat) => {
    if (err) {
      if (onError) return onError("Неверный формат идентификатора")
      return response.status(500)
        .send("Неверный формат идентификатора");
    } else if (!beat) {
      if (onError) return onError("Бит не найден")
      return response.status(404)
        .send("Бит не найден");
    } else {
      if (onBeat) return onBeat(beat);
      return response.status(200)
        .json(beat);
    }
  });
};

module.exports = Beat;


