const fs = require('fs');

const basefilename = 'route_r1t19';

const d = fs.readFileSync(`./timeline.csv`, 'utf8');

console.log(d);

const story = {
  style: 'https://gsi-cyberjapan.github.io/optimal_bvmap/style/std.json',
  accessToken: '',
  showMarkers: true,
  markerColor: '#3FB1CE',
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  theme: 'dark',
  use3dTerrain: false, //set true for enabling 3D maps.
  title: '令和元年台風19号と荒川の様子',
  subtitle: '',
  byline: 'テストで作成したものです。網羅的ではありません。また、誤りがある可能性があります。',
  footer: 'Source: '
          + '<a target="_blank" href="https://www.bousai.go.jp/updates/r1typhoon19/pdf/r1typhoon19_45.pdf">内閣府</a>・'
          + '<a target="_blank" href="https://www.fdma.go.jp/publication/hakusho/r1/topics1/47534.html">消防庁</a>・'
          + '<a target="_blank" href="https://www.data.jma.go.jp/yoho/typhoon/route_map/bstv2019.html">気象庁</a>・'
          + '<a target="_blank" href="https://www.ktr.mlit.go.jp/ktr_content/content/000805533.pdf">荒川下流河川事務所</a>'
          + '<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: []
};

const lines = d.split("\n").sort();

lines.forEach( line => {
  
  if(!line) return;
  if(!line.match(/^\d/)) return;
  
  const c = line.split(",");
  
  const onChapterEnter = [];
  
  c[6].split(";").forEach( cond => {
    if(!cond.match(/:/)) return;
    const layerOpacityArray = cond.split(":");
    onChapterEnter.push({
      layer: layerOpacityArray[0],
      opacity: +layerOpacityArray[1]
    },);
  });
  
  const onChapterExit = [];
  c[7].split(";").forEach( cond => {
    if(!cond.match(/:/)) return;
    const layerOpacityArray = cond.split(":");
    onChapterExit.push({
      layer: layerOpacityArray[0],
      opacity: +layerOpacityArray[1]
    },);
  });
  
  const chapter = {
    id: "ch-" + Date.now() + Math.random(),
    alignment: 'left',
    hidden: false,
    title: c[4],
    description: c[0] + "<hr>" + c[5],
    location: {
      center: [ +c[1], +c[2] ],
      zoom: +c[3],
      pitch: 0,
      bearing: 0,
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: onChapterEnter,
    onChapterExit: onChapterExit
  };
  
  story.chapters.push(chapter);
  
});


const res = "var config = " + JSON.stringify(story, null, 2) + ";";
fs.writeFileSync(`./config.js`, res);
