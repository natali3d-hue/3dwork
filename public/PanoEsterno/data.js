var APP_DATA = {
  "scenes": [
    {
      "id": "0-fronte-destra",
      "name": "Fronte Destra",
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
        "fov": 1.3572162071804879
      },
      "linkHotspots": [
        {
          "yaw": 0.6165616894618964,
          "pitch": 0.3017390155719113,
          "rotation": 0,
          "target": "0-fronte-destra"
        },
        {
          "yaw": -0.20673027218122897,
          "pitch": 0.12846144592134578,
          "rotation": 0,
          "target": "1-fronte-sinistra"
        },
        {
          "yaw": 0.8799511127653084,
          "pitch": 0.15091169078243283,
          "rotation": 0,
          "target": "4-centrale-fronte"
        },
        {
          "yaw": 0.9360010115786395,
          "pitch": 0.0567635030630278,
          "rotation": 0,
          "target": "2-retro-destra"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-fronte-sinistra",
      "name": "Fronte Sinistra",
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
          "yaw": 0.054186508521993915,
          "pitch": 0.2594045426167426,
          "rotation": 0,
          "target": "1-fronte-sinistra"
        },
        {
          "yaw": 0.6958920336484731,
          "pitch": 0.08581974825913186,
          "rotation": 0,
          "target": "0-fronte-destra"
        },
        {
          "yaw": -0.27490507764019334,
          "pitch": 0.14854615060374599,
          "rotation": 0,
          "target": "5-centrale-retro"
        },
        {
          "yaw": -0.5163370276914119,
          "pitch": 0.0690705697727072,
          "rotation": 0,
          "target": "3-retro-sinistra"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-retro-destra",
      "name": "Retro Destra",
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
          "yaw": -0.5392745861257922,
          "pitch": 0.2433064605193902,
          "rotation": 0,
          "target": "2-retro-destra"
        },
        {
          "yaw": 0.22054380415987218,
          "pitch": 0.09323129342607217,
          "rotation": 0,
          "target": "3-retro-sinistra"
        },
        {
          "yaw": -1.0142410763489664,
          "pitch": 0.048671389886809635,
          "rotation": 0,
          "target": "0-fronte-destra"
        },
        {
          "yaw": -0.8950829917575494,
          "pitch": 0.13042962290863436,
          "rotation": 0,
          "target": "4-centrale-fronte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-retro-sinistra",
      "name": "Retro Sinistra",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.457043974250654,
          "pitch": 0.35287378717448625,
          "rotation": 0,
          "target": "3-retro-sinistra"
        },
        {
          "yaw": -0.4453302617422974,
          "pitch": 0.10243421650001139,
          "rotation": 0,
          "target": "2-retro-destra"
        },
        {
          "yaw": 0.8915311894087985,
          "pitch": 0.06804377159939179,
          "rotation": 0,
          "target": "1-fronte-sinistra"
        },
        {
          "yaw": 0.7761830233317397,
          "pitch": 0.16366426516339416,
          "rotation": 0,
          "target": "5-centrale-retro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-centrale-fronte",
      "name": "Centrale Fronte",
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
          "yaw": 0.05058044663477368,
          "pitch": 0.23056354319148475,
          "rotation": 0,
          "target": "4-centrale-fronte"
        },
        {
          "yaw": -0.7898069973712403,
          "pitch": 0.14035093460228865,
          "rotation": 0,
          "target": "0-fronte-destra"
        },
        {
          "yaw": 0.8227133414697647,
          "pitch": 0.13929559289551818,
          "rotation": 0,
          "target": "2-retro-destra"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-centrale-retro",
      "name": "Centrale Retro",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.012655228874669078,
          "pitch": 0.2239665238563724,
          "rotation": 0,
          "target": "5-centrale-retro"
        },
        {
          "yaw": 0.7960397834651012,
          "pitch": 0.1345124713451824,
          "rotation": 0,
          "target": "1-fronte-sinistra"
        },
        {
          "yaw": -0.7924878188278051,
          "pitch": 0.15239968646055146,
          "rotation": 0,
          "target": "3-retro-sinistra"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
