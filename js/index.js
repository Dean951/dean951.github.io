new Glide('.restaurant-slider', {
  type: 'carousel',
  perView: 1,
  gap: 10,
}).mount({
  Stats: Stats('.restaurant-slider .stats'),
})

new Glide('.room-slider', {
  type: 'carousel',
  perView: 3,
  gap: 0,
  breakpoints: {
    768: {
      perView: 2,
    },
    480: {
      perView: 1,
    },
  }
}).mount({
  Overlay: Overlay('.room-slider .overlay'),
})

new Glide('.spec-slider', {
  type: 'carousel',
  perView: 3,
  gap: 35,
  breakpoints: {
    768: {
      perView: 2,
    },
    480: {
      perView: 1,
    },
  }
}).mount({
  Overlay: Overlay('.spec-slider .overlay'),
})

new Glide('.galera-slider', {
  type: 'carousel',
  perView: 4,
  gap: 20,
  breakpoints: {
    768: {
      perView: 2,
    },
    480: {
      perView: 1,
    },
  }
}).mount({
  Overlay: Overlay('.galera-slider .overlay'),
})
