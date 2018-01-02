module.exports = beat => beat ? ({
  id: beat._id,
  image: beat.image,
  title: beat.title,
  description: beat.description,
  soundcloudId: beat.soundcloudId,
  tags: beat.tags,
  price: {
    basic: beat.price.basic,
    premium: beat.price.premium,
    exclusive: beat.price.exclusive,
  },
  created: beat.created,
}) : null;