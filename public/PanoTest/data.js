var APP_DATA = {
  "scenes": [
    {
      "id": "0-camera-centro",
      "name": "Camera Centro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5776641960571993,
          "pitch": 0.39199141486079725,
          "rotation": 0,
          "target": "2-camerta-finestra"
        },
        {
          "yaw": 1.0072663765045942,
          "pitch": 0.2846323907472108,
          "rotation": 0,
          "target": "1-camera-muro"
        },
        {
          "yaw": -0.3723251989883902,
          "pitch": 0.2712985901010949,
          "rotation": 0,
          "target": "3-bagno-ingresso"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6265455610112305,
          "pitch": -0.56015500598218,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">Tour 360°</font></font>",
          "text": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">Test Pano 360°</font></font>"
        }
      ]
    },
    {
      "id": "1-camera-muro",
      "name": "Camera Muro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.092970886459776,
          "pitch": 0.28376715423744514,
          "rotation": 0,
          "target": "2-camerta-finestra"
        },
        {
          "yaw": -0.8931603851218526,
          "pitch": 0.5818527898744961,
          "rotation": 0,
          "target": "0-camera-centro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-camerta-finestra",
      "name": "Camerta Finestra",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.060128406737305795,
          "pitch": 0.35626709616597907,
          "rotation": 0,
          "target": "3-bagno-ingresso"
        },
        {
          "yaw": 1.7336570395016508,
          "pitch": 0.5425127175241418,
          "rotation": 0,
          "target": "0-camera-centro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bagno-ingresso",
      "name": "Bagno Ingresso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.31466648667536745,
          "pitch": 0.6196483358913447,
          "rotation": 0,
          "target": "4-bagno--doccia"
        },
        {
          "yaw": 2.4838388522839274,
          "pitch": 0.6410768843106975,
          "rotation": 0,
          "target": "2-camerta-finestra"
        },
        {
          "yaw": 2.3720839302370873,
          "pitch": 0.3106591454584837,
          "rotation": 0,
          "target": "0-camera-centro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bagno--doccia",
      "name": "Bagno  Doccia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1397615951852202,
          "pitch": 0.8085703623379992,
          "rotation": 0,
          "target": "3-bagno-ingresso"
        },
        {
          "yaw": 1.87068916881345,
          "pitch": 0.4291418996515155,
          "rotation": 0,
          "target": "2-camerta-finestra"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
