# stolytelling-R1-T19-arage
Storytelling で令和元年台風19号の状況を荒川下流を中心に振り返ってみる

https://mghs15.github.io/stolytelling-R1-T19-arage/

## tools
* convert.js: 気象庁の[台風経路図](https://www.data.jma.go.jp/yoho/typhoon/route_map/index.html)の PDF をコピペしたテキストから、日時、経緯度、気圧を取り出す（すべての PDF に適用できるか検証はしていない）。
  * Webツール版：https://mghs15.github.io/stolytelling-R1-T19-arage/pdf2route.html
* csv2story.js: CSVで作成した時系列の情報を Stollytelling の `config.js` へ変換する。

## blog
* StoryTelling について→ https://qiita.com/mg_kudo/items/d7bd91219346ff9b0385
* ツールについて→https://qiita.com/mg_kudo/items/d490f7b47f44e74e8b8e

## 参考文献・使用データ

* https://github.com/mapbox/storytelling
* https://www.bousai.go.jp/updates/r1typhoon19/
* https://www.fdma.go.jp/publication/hakusho/r1/topics1/47534.html
* https://www.data.jma.go.jp/yoho/typhoon/route_map/bstv2019.html
* https://www.ktr.mlit.go.jp/arage/arage01033.html
* https://github.com/gsi-cyberjapan/optimal_bvmap
