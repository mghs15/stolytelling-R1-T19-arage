var config = {
  "style": {
    "version": 8,
    "name": "gsimapvector",
    "glyphs": "https://gsi-cyberjapan.github.io/optimal_bvmap/glyphs/{fontstack}/{range}.pbf",
    "sprite": "https://gsi-cyberjapan.github.io/optimal_bvmap/sprite/std",
    "sources": {
        "r": {
            "type": "raster",
            "tiles": ["https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"],
            "tileSize": 256,
            "minzoom": 2,
            "maxzoom": 18,
            "attribution": "地理院タイル"
        }
    },
    "layers": [
        {
            "id": "pale",
            "type": "raster",
            "source": "r"
        },
    ]
  },
  "accessToken": "",
  "showMarkers": true,
  "markerColor": "#3FB1CE",
  "inset": false,
  "theme": "dark",
  "use3dTerrain": false,
  "title": "令和元年台風19号と荒川の様子",
  "subtitle": "",
  "byline": "テストで作成したものです。網羅的ではありません。また、誤りがある可能性があります。",
  "footer": "Source: <a target=\"_blank\" href=\"https://www.bousai.go.jp/updates/r1typhoon19/pdf/r1typhoon19_45.pdf\">内閣府</a>・<a target=\"_blank\" href=\"https://www.fdma.go.jp/publication/hakusho/r1/topics1/47534.html\">消防庁</a>・<a target=\"_blank\" href=\"https://www.data.jma.go.jp/yoho/typhoon/route_map/bstv2019.html\">気象庁</a>・<a target=\"_blank\" href=\"https://www.ktr.mlit.go.jp/ktr_content/content/000805533.pdf\">荒川下流河川事務所</a><br> Created using <a href=\"https://github.com/mapbox/storytelling\" target=\"_blank\">Mapbox Storytelling</a> template.",
  "chapters": [
    {
      "id": "ch-16646319234950.7355393634266423",
      "alignment": "left",
      "hidden": false,
      "title": "熱帯低気圧発生",
      "description": "10月05日03時<hr>中心気圧 1008 hPa",
      "location": {
        "center": [
          164.4,
          15.7
        ],
        "zoom": 4,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 1
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 1
        }
      ],
      "onChapterExit": [
        {
          "layer": "typhoon-route-point",
          "opacity": 0
        }
      ]
    },
    {
      "id": "ch-16646319234950.5371702237338001",
      "alignment": "left",
      "hidden": false,
      "title": "台風19号発生",
      "description": "10月06日03時<hr>中心気圧 1000 hPa",
      "location": {
        "center": [
          157.4,
          15.1
        ],
        "zoom": 4,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 1
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 1
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234950.4819151528961516",
      "alignment": "left",
      "hidden": false,
      "title": "台風19号の動き",
      "description": "10月07日03時<hr>中心気圧 955 hPa",
      "location": {
        "center": [
          151.2,
          14.9
        ],
        "zoom": 4,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 1
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 1
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234950.9383900179074884",
      "alignment": "left",
      "hidden": false,
      "title": "台風19号の動き",
      "description": "10月08日03時<hr>中心気圧 915 hPa",
      "location": {
        "center": [
          144.9,
          16.5
        ],
        "zoom": 4,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 1
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 1
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234950.16767008674053097",
      "alignment": "left",
      "hidden": false,
      "title": "気象庁会見",
      "description": "10月09日14時<hr>",
      "location": {
        "center": [
          139.761672,
          35.689858
        ],
        "zoom": 4,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 0
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234950.2720068243587057",
      "alignment": "left",
      "hidden": false,
      "title": "台風19号の動き",
      "description": "10月09日15時<hr>中心気圧 915 hPa",
      "location": {
        "center": [
          140,
          20.6
        ],
        "zoom": 4,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 1
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 1
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.5438088050457992",
      "alignment": "left",
      "hidden": false,
      "title": "台風19号の動き",
      "description": "10月10日03時<hr>中心気圧 915 hPa",
      "location": {
        "center": [
          139.7,
          22
        ],
        "zoom": 4,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 1
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 1
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.6244861266077721",
      "alignment": "left",
      "hidden": false,
      "title": "台風19号の動き",
      "description": "10月11日09時<hr>中心気圧 935 hPa",
      "location": {
        "center": [
          138.1,
          27.5
        ],
        "zoom": 4,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 1
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 1
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.1044195957118399",
      "alignment": "left",
      "hidden": false,
      "title": "気象庁会見",
      "description": "10月11日11時<hr>",
      "location": {
        "center": [
          139.761672,
          35.689858
        ],
        "zoom": 4,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 0
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.17363961464169608",
      "alignment": "left",
      "hidden": false,
      "title": "台風19号の動き",
      "description": "10月12日03時<hr>中心気圧 945 hPa",
      "location": {
        "center": [
          137.1,
          30.8
        ],
        "zoom": 4,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 1
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 1
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.46671083648627576",
      "alignment": "left",
      "hidden": false,
      "title": "綾瀬排水機場の運転開始",
      "description": "10月12日10時40分<hr>綾瀬水門を閉鎖し、綾瀬川へ洪水が逆流するのを防ぎ、排水機場のポンプで荒川への排水を実施。",
      "location": {
        "center": [
          139.820058,
          35.750152
        ],
        "zoom": 14,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.27260364533968895",
      "alignment": "left",
      "hidden": false,
      "title": "台風19号の動き",
      "description": "10月12日15時<hr>中心気圧 950 hPa",
      "location": {
        "center": [
          138.2,
          33.7
        ],
        "zoom": 6,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 1
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 1
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.7612359450781985",
      "alignment": "left",
      "hidden": false,
      "title": "大雨特別警報発令",
      "description": "10月12日15時30分<hr>東京都や埼玉県等に大雨特別警報発令。（静岡県、神奈川県、東京都、埼玉県、群馬県、山梨県、長野県。12 日 19 時 50 分に茨城県、栃木県、新潟県、福島県、宮城県に、13 日 0 時 40 分に岩手県。）",
      "location": {
        "center": [
          139.702148,
          35.757657
        ],
        "zoom": 8,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.07731420774438869",
      "alignment": "left",
      "hidden": false,
      "title": "気象庁会見",
      "description": "10月12日16時30分<hr>",
      "location": {
        "center": [
          139.761672,
          35.689858
        ],
        "zoom": 6,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 0
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.5639987295887099",
      "alignment": "left",
      "hidden": false,
      "title": "熊谷の水位ピーク",
      "description": "10月12日18時<hr>熊谷の水位がピーク 6.25 m（氾濫危険水位 5.50 m） 。",
      "location": {
        "center": [
          139.377494,
          36.137078
        ],
        "zoom": 12,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.503169776593668",
      "alignment": "left",
      "hidden": false,
      "title": "台風19号が伊豆半島に上陸",
      "description": "10月12日19時前<hr>中心気圧 955 hPa（10月12日18時時点）",
      "location": {
        "center": [
          138.7,
          34.6
        ],
        "zoom": 6,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 1
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 1
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.7461973054655975",
      "alignment": "left",
      "hidden": false,
      "title": "気象庁会見",
      "description": "10月12日20時40分<hr>",
      "location": {
        "center": [
          139.761672,
          35.689858
        ],
        "zoom": 8,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 0
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.2766920892102034",
      "alignment": "left",
      "hidden": false,
      "title": "台風19号の動き",
      "description": "10月12日21時<hr>中心気圧 965 hPa",
      "location": {
        "center": [
          139.6,
          35.6
        ],
        "zoom": 8,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 1
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 1
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.7439025974083069",
      "alignment": "left",
      "hidden": false,
      "title": "岩淵水門全閉",
      "description": "10月12日21時17分<hr>岩淵水門を全閉。荒川の洪水が隅田川へ流入することを防ぎ、隅田川の洪水氾濫を防止。",
      "location": {
        "center": [
          139.733466,
          35.785535
        ],
        "zoom": 14,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.266638128507491",
      "alignment": "left",
      "hidden": false,
      "title": "荒川上流で大雨",
      "description": "10月12日24時<hr>荒川の上流にあたる地域で記録的な大雨となった。10日19時～12日24時 解析雨量（53時間積算）で秩父市付近 約700ﾐﾘ。",
      "location": {
        "center": [
          138.996277,
          35.999119
        ],
        "zoom": 10,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.34315689556274",
      "alignment": "left",
      "hidden": false,
      "title": "台風19号の動き",
      "description": "10月13日00時<hr>中心気圧 970 hPa",
      "location": {
        "center": [
          140.6,
          36.9
        ],
        "zoom": 8,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 1
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 1
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.8611563220328007",
      "alignment": "left",
      "hidden": false,
      "title": "新芝川排水機場の運転開始",
      "description": "10月13日00時54分<hr>芝川水門を閉鎖し、新芝川へ洪水が逆流するのを防ぎ、排水機場のポンプで荒川への排水を実施。",
      "location": {
        "center": [
          139.743626,
          35.782606
        ],
        "zoom": 14,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.6240830516584384",
      "alignment": "left",
      "hidden": false,
      "title": "菅間の水位ピーク ",
      "description": "10月13日01時<hr>菅間（支川入間川）の水位がピーク 12.60 m（氾濫危険水位 12.00 m） 。",
      "location": {
        "center": [
          139.514072,
          35.954022
        ],
        "zoom": 12,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.22625893091650595",
      "alignment": "left",
      "hidden": false,
      "title": "気象庁会見",
      "description": "10月13日01時40分<hr>",
      "location": {
        "center": [
          139.761672,
          35.689858
        ],
        "zoom": 8,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 0
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.5420310706489146",
      "alignment": "left",
      "hidden": false,
      "title": "治水橋の水位ピーク ",
      "description": "10月13日05時<hr>治水橋の水位がピーク 13.08 m（氾濫危険水位 12.60 m） 。",
      "location": {
        "center": [
          139.56218,
          35.893135
        ],
        "zoom": 12,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.4859902631853039",
      "alignment": "left",
      "hidden": false,
      "title": "堤防決壊（越辺川）",
      "description": "10月13日05時25分頃<hr>越辺川右岸0.0k付近堤防決壊確認。",
      "location": {
        "center": [
          139.468362,
          35.959092
        ],
        "zoom": 12,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.24879154987116503",
      "alignment": "left",
      "hidden": false,
      "title": "堤防決壊（越辺川）",
      "description": "10月13日06時00分頃<hr>越辺川左岸7.6k付近堤防決壊確認。",
      "location": {
        "center": [
          139.416955,
          35.994718
        ],
        "zoom": 12,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.34456826556669173",
      "alignment": "left",
      "hidden": false,
      "title": "堤防決壊（都幾川）",
      "description": "10月13日07時15分頃<hr>都幾川右岸0.4k付近堤防決壊確認。",
      "location": {
        "center": [
          139.422469,
          35.998259
        ],
        "zoom": 12,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.08675008345766289",
      "alignment": "left",
      "hidden": false,
      "title": "岩淵水門の水位ピーク",
      "description": "10月13日09時50分<hr>岩淵水門（上）の水位がピーク 7.17 m（氾濫危険水位 7.70 m） 。戦後3番目の水位を記録。",
      "location": {
        "center": [
          139.729217,
          35.788045
        ],
        "zoom": 12,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.1541377797063106",
      "alignment": "left",
      "hidden": false,
      "title": "台風19号は温帯低気圧へ",
      "description": "10月13日12時<hr>中心気圧 980 hPa",
      "location": {
        "center": [
          147,
          41
        ],
        "zoom": 4,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 1
        },
        {
          "layer": "typhoon-route-point",
          "opacity": 1
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.6207288129533008",
      "alignment": "left",
      "hidden": false,
      "title": "綾瀬排水機場の運転終了",
      "description": "10月13日13時09分<hr>綾瀬排水機場の運転終了。",
      "location": {
        "center": [
          139.820058,
          35.750152
        ],
        "zoom": 14,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        }
      ],
      "onChapterExit": []
    },
    {
      "id": "ch-16646319234960.6324125642278298",
      "alignment": "left",
      "hidden": false,
      "title": "新芝川排水機場の運転終了",
      "description": "10月14日11時27分<hr>新芝川排水機場の運転終了。",
      "location": {
        "center": [
          139.743626,
          35.782606
        ],
        "zoom": 14,
        "pitch": 0,
        "bearing": 0
      },
      "mapAnimation": "flyTo",
      "rotateAnimation": false,
      "callback": "",
      "onChapterEnter": [
        {
          "layer": "typhoon-route",
          "opacity": 0.2
        }
      ],
      "onChapterExit": []
    }
  ]
};
