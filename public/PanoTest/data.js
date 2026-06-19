var APP_DATA = {
  "scenes": [
    {
      "id": "0-camera-muro",
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
          "yaw": -1.0903792462352229,
          "pitch": 0.557644276706986,
          "rotation": 0,
          "target": "1-camera-centro"
        },
        {
          "yaw": -1.1120137745889025,
          "pitch": 0.31803925067484684,
          "rotation": 0,
          "target": "2-camera-finestra"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-camera-centro",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.9199808197841541,
          "pitch": 0.18022659765678384,
          "rotation": 0,
          "target": "0-camera-muro"
        },
        {
          "yaw": -0.6278901684332929,
          "pitch": 0.35845082038733267,
          "rotation": 0,
          "target": "2-camera-finestra"
        },
        {
          "yaw": -0.3613126424407387,
          "pitch": 0.24673832566626963,
          "rotation": 0,
          "target": "3-bagno-ingresso"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.37638152095734156,
          "pitch": -0.49313721973999236,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">Pano Test</font></font>",
          "text": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">Scena di prova Panoramica 360°</font></font>"
        }
      ]
    },
    {
      "id": "2-camera-finestra",
      "name": "Camera Finestra",
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
          "yaw": 0.061332160188605656,
          "pitch": 0.35102484443400783,
          "rotation": 0,
          "target": "3-bagno-ingresso"
        },
        {
          "yaw": 1.8607794567362692,
          "pitch": 0.5087568246205016,
          "rotation": 0,
          "target": "1-camera-centro"
        },
        {
          "yaw": 1.596947882390003,
          "pitch": 0.28330627850637313,
          "rotation": 0,
          "target": "0-camera-muro"
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
          "yaw": 0.4374378555813667,
          "pitch": 0.5302264596522921,
          "rotation": 0,
          "target": "4-bagno-doccia"
        },
        {
          "yaw": 2.606776338621036,
          "pitch": 0.507114244046381,
          "rotation": 0,
          "target": "0-camera-muro"
        },
        {
          "yaw": 2.3463659291383054,
          "pitch": 0.29049319799576523,
          "rotation": 0,
          "target": "1-camera-centro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bagno-doccia",
      "name": "Bagno Doccia",
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
          "yaw": 2.118694789539238,
          "pitch": 0.7469728947160927,
          "rotation": 0,
          "target": "3-bagno-ingresso"
        },
        {
          "yaw": 1.8619612134329557,
          "pitch": 0.40979537507621444,
          "rotation": 0,
          "target": "0-camera-muro"
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
