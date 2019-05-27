new Glide('.rooms-slider', {
  type: 'carousel',
  perView: 4,
  gap: 0,
  breakpoints: {
    768: {
      perView: 2,
    },
    480: {
      perView: 1,
    },
  }
}).mount()
