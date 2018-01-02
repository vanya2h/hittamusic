const mongoose = require('mongoose');
const mapBeat = require("../utils/mapBeat");
const Schema = mongoose.Schema;

const BeatSchema = new Schema({
  image: { type: String, default: null, },
  title: { type: String, default: null, },
  description: { type: String, default: null },
  soundcloudId: { type: String, default: null },
  tags: [{ type: String, default: [] }],
  isFree: { type: Boolean, default: false },
  price: { 
    exclusive: { type: Number, default: 3 },
    premium: { type: Number, default: 20 },
    basic: { type: Number, default: 10 },
  },
  created: { type: Date, default: Date.no }
});

const Beat = mongoose.model("Beat", BeatSchema);

Beat.getBeat = query => Beat
  .findOne(query)
  .then(beat => mapBeat(beat));

Beat.getBeats = (query, params) => Beat
  .find(query, null, params)
  .then(beats => beats.map(beat => mapBeat(beat)));

Beat.createBeat = beat => Beat
  .create(beat)
  .then(createdBeat => mapBeat(createdBeat));

Beat.updateBeat = (query, values) => Beat
  .findOneAndUpdate(query, values, { new : true })
  .then(updatedBeat => mapBeat(updatedBeat));

Beat.removeBeat = (query) => Beat
  .remove(query);

module.exports = Beat;