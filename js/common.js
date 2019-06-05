const Overlay = (target) => (Glide, Components, Events) => {
  const { Sizes } = Components

  const el = document.querySelector(target)

  const setElSizes = () => {
    el.style.width = Sizes.slideWidth
  }

  Events.on(['build.before', 'resize', 'update'], () => {
    setElSizes()
  })

  return {
    mount() {},
  }
}

const Stats = (target) => (Glide, Components, Events) => {
  const el = document.querySelector(target)
  const { Sizes } = Components

  const stats = {
    current: 1,
    total: 0,
  }

  const updateStats = () => {
    stats.current = Glide.index + 1
    el.innerHTML = `${stats.current}/${stats.total}`
  }

  Events.on(['move', 'mount.after'], updateStats)

  return {
    mount() {
      stats.total = Sizes.length
    },
  }
}

const ToogleMenu = ({ buttonEl, menuEl }) => {
  const buttons = document.querySelectorAll(buttonEl)
  const menu = document.querySelector(menuEl)

  buttons.forEach((menuButton) => {
    menuButton.addEventListener('click', () => {
      menu.classList.toggle('open')
    })
  })
}

var header = new Headhesive('header', {
  offset: 170,
});

ToogleMenu({
  buttonEl: '.menu .burger-menu-left',
  menuEl: '.menu .header-left-menu',
})

ToogleMenu({
  buttonEl: '.menu .burger-menu-right',
  menuEl: '.menu .header-right-menu',
})

$(function() {
  var dateFormat = "mm/dd/yy",
    from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1
    })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
});

function openTab(evt, tabId) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add('hidden');
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active')
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabId).classList.remove('hidden');
  evt.currentTarget.classList.add('active');
}

$('.slider_block').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: 'linear'
});

window.onscroll = () => {
  document.querySelectorAll('.side-menu').forEach((el) => {
    el.classList.remove('open')
  })
}
