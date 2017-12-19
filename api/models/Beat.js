const mongoose = require('mongoose');
const mapBeat = require("../utils/mapBeat");
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

Beat.getBeats = (request, response, options, onBeats, onError) => {
  Beat.find(options, null, {
    limit: +request.query.limit || 10,
    skip: +request.query.skip || 0,
    lean: true,
  }, (err, beats) => {
    if (err) {
      if (onError) return onError("Ошибка во время поиска битов")
      return response.status(500)
        .send("Ошибка во время поиска битов");
    } else {
      if (onBeats) return onBeats(beats);
      return response.status(200)
        .json(beats.map(beat => 
          mapBeat(beat)));
    }
  });
}

Beat.getBeat = (request, response, id, onBeat, onError) => {
  Beat.findById(id, null, {
    lean: true,
  }, (err, beat) => {
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
        .json(mapBeat(beat));
    }
  });
};

Beat.createBeat = (request, response, beat, onBeat, onError) => {
  Beat.create(beat, (err, createdBeat) => {
    if (err) {
      if (onError) return onError("Ошибка во время создания бита")
      return response.status(500)
        .send("Ошибка во время создания бита");
    } else {
      if (onBeat) return onBeat(createdBeat);
      return response.status(200)
        .json(mapBeat(createdBeat));
    }
  });
};

Beat.removeBeat = (request, response, id, onRemove, onError) => {
  Beat.remove({_id: id}, (err, mongo) => {
    if (err) {
      if (onError) return onError("Ошибка во время удаления бита")
      return response.status(500)
        .send("Ошибка во время удаления бита");
    } else {
      if (onRemove) return onRemove(mongo);
      return response.status(200)
        .json(mongo);
    }
  });
};

module.exports = Beat;


