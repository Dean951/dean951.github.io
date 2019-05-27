new Glide('.restaurant-slider', {
  type: 'carousel',
  perView: 1,
  gap: 10,
}).mount({
  Stats: Stats('.restaurant-slider .stats'),
})
