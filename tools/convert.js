const fs = require('fs');

const basefilename = 'route_r1t19';

const d = fs.readFileSync(`./raw_${basefilename}.txt`, 'utf8');

console.log(d);

let tmp = {
  "month": null,
  "date": null,
  "ns": "N",
  "ew": "E"
};

let res = "";
let ls = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": []
    },
    "properties": {
      "name": "R1 台風19号",
      "reference": "https://www.data.jma.go.jp/yoho/data/typhoon/T1919.pdf"
    }
  }]
};
let pt = {
  "type": "FeatureCollection",
  "features": []
};

d.split("\n").forEach( line => {
  if(!line) return;
  
  const m = line.match(/^(\S*)\s?(\S*)\s?(\d\d)\s(\d+\.\d+)\s?(N?S?)\s(\d+\.\d+)\s?(E?W?)\s(\d+)\s(.*)/);
  if(!m) return;
  
  console.log(`${m[1]}月${m[2]}日${m[3]}時, lnlat=[${m[4]} ${m[5]}, ${m[6]} ${m[7]}], ${m[8]} hPa, | ${m[9]}`);
  
  if(m[1] && m[2]) tmp.month = +m[1];
  if(m[1] && !m[2]) tmp.date = +m[1];
  if(m[2]) tmp.date = +m[2];
  if(m[5]) tmp.ns = m[5];
  if(m[7]) tmp.ew = m[7];
  
  const lat = +m[4] * ( tmp.ns == "S" ? -1 : 1 );
  const lng = +m[6] * ( tmp.ew == "W" ? -1 : 1 );
  
  const feature = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [ lng, lat ]
    },
    "properties": {
      "month": +m[1] || tmp.month,
      "date": +m[2] || tmp.date,
      "hour": +m[3],
      "atm": +m[8],
      "other": m[9]
    }
  }
  
  pt.features.push(feature);
  ls.features[0].geometry.coordinates.push([ lng, lat ]);
  
  res += `${tmp.month}月${tmp.date}日${m[3]}時,${lng},${lat},${m[8]}` + "\n"
  
});


console.log(res);

fs.writeFileSync(`./points_${basefilename}.geojson`, JSON.stringify(pt, null, 2));
fs.writeFileSync(`./${basefilename}.geojson`, JSON.stringify(ls, null, 2));
