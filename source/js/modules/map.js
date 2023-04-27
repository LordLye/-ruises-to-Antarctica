let cent = [59.93749, 30.32245];

function init() {
  let map = new ymaps.Map('map', {
    center: cent,
    zoom: 16,
  });

  let placemark = new ymaps.Placemark(cent, {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/svg/map-mark.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-5, -20],
  });
  map.geoObjects.add(placemark);
}

ymaps.ready(init);
