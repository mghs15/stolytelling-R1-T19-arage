var _test = [];

map.on('load', function(){
  map
  .addSource('typhoon-route', {
    'type': 'geojson',
    'data': './data/route_r1t19.geojson'
  })
  .addLayer({
    'id': 'typhoon-route',
    'source': 'typhoon-route',
    'type': 'line',
    'paint': {
      'line-color': 'rgba(100, 100, 100, 1)',
      'line-width': 2,
      'line-opacity': 0.5
    }
  });
  
  map
  .addSource('typhoon-route-point', {
    'type': 'geojson',
    'data': './data/points_route_r1t19.geojson'
  })
  .addLayer({
    'id': 'typhoon-route-point',
    'source': 'typhoon-route-point',
    'type': 'symbol',
    'layout': {
      'text-field': ["format",
        ["concat", ["get", "month"], "月", ["get", "date"], "日",  ["get", "date"], "時"], { "font-scale": 0.8 },
        "\n",
        ["concat", ["get", "atm"], " hPa"], { "font-scale": 0.8 }
      ],
      'text-anchor': 'left',
      'text-font': ["NotoSansJP-Regular"]
    },
    'paint': {
      'text-color': 'rgba(100, 100, 100, 1)',
      'text-halo-color': 'rgba(255, 255, 255, 1)',
      'text-halo-width': 1,
      'text-opacity': 1
    }
  });
  
  /*
  map
  .addSource('20191012typhoon19_arakawa_1014dansaizu', {
    'type': 'raster',
    'tiles': [
      'https://maps.gsi.go.jp/xyz/20191012typhoon19_arakawa_1014dansaizu/{z}/{x}/{y}.png'
    ],
    "tileSize": 256,
    "minzoom": 2,
    "maxzoom": 16,
    "attribution": "<a target='_blank' href='https://maps.gsi.go.jp/development/ichiran.html#t20191012typhoon19_arakawa_1014dansaizu'>地理院タイル(令和元年台風第19号 浸水推定段彩図 荒川水系（入間川・越辺川・都幾川）)</a>"
  })
  .addLayer({
    'id': '20191012typhoon19_arakawa_1014dansaizu',
    'source': '20191012typhoon19_arakawa_1014dansaizu',
    'type': 'raster',
    'layout': {},
    'paint': {
      'raster-opacity': 0
    }
  });
  */
  
});


