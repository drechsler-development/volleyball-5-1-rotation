let speed = 1000;
let currentView = 'name';
let situation = 'standard';
let setterPosition = 1;
let playerPosArray = [
    {
        "setterPos": 1,
        "situation": "standard",
        "name": "setter",
        "top": 264,
        "left": 384,
        "playerPos": 1
    },
    {
        "setterPos": 1,
        "situation": "standard",
        "name": "mittleblock1",
        "top": -95,
        "left": 209,
        "playerPos": 6
    },
    {
        "setterPos": 1,
        "situation": "standard",
        "name": "attacker1",
        "top": -235,
        "left": 380,
        "playerPos": 5
    },
    {
        "setterPos": 1,
        "situation": "standard",
        "name": "diagonal",
        "top": -33,
        "left": 53,
        "playerPos": 4
    },
    {
        "setterPos": 1,
        "situation": "standard",
        "name": "mittleblock2",
        "top": -62,
        "left": 584,
        "playerPos": 3
    },
    {
        "setterPos": 1,
        "situation": "standard",
        "name": "attacker2",
        "top": -82,
        "left": 59,
        "playerPos": 2
    },
    {
        "setterPos": 1,
        "situation": "standard",
        "name": "libero",
        "top": -150,
        "left": 213,
        "playerPos": 7
    },
    {
        "setterPos": 1,
        "situation": "preServe",
        "name": "setter",
        "top": 434,
        "left": 387,
        "playerPos": 1
    },
    {
        "setterPos": 1,
        "situation": "preServe",
        "name": "mittleblock1",
        "top": -95,
        "left": 209,
        "playerPos": 6
    },
    {
        "setterPos": 1,
        "situation": "preServe",
        "name": "attacker1",
        "top": -192,
        "left": 268,
        "playerPos": 5
    },
    {
        "setterPos": 1,
        "situation": "preServe",
        "name": "diagonal",
        "top": -63,
        "left": 153,
        "playerPos": 4
    },
    {
        "setterPos": 1,
        "situation": "preServe",
        "name": "mittleblock2",
        "top": -62,
        "left": 584,
        "playerPos": 3
    },
    {
        "setterPos": 1,
        "situation": "preServe",
        "name": "attacker2",
        "top": -133,
        "left": 55,
        "playerPos": 2
    },
    {
        "setterPos": 1,
        "situation": "preServe",
        "name": "libero",
        "top": -150,
        "left": 213,
        "playerPos": 7
    },
    {
        "setterPos": 1,
        "situation": "afterServe",
        "name": "setter",
        "top": 188,
        "left": 392,
        "playerPos": 1
    },
    {
        "setterPos": 1,
        "situation": "afterServe",
        "name": "mittleblock1",
        "top": -95,
        "left": 209,
        "playerPos": 6
    },
    {
        "setterPos": 1,
        "situation": "afterServe",
        "name": "attacker1",
        "top": -238,
        "left": 113,
        "playerPos": 5
    },
    {
        "setterPos": 1,
        "situation": "afterServe",
        "name": "diagonal",
        "top": -24,
        "left": 308,
        "playerPos": 4
    },
    {
        "setterPos": 1,
        "situation": "afterServe",
        "name": "mittleblock2",
        "top": -62,
        "left": 584,
        "playerPos": 3
    },
    {
        "setterPos": 1,
        "situation": "afterServe",
        "name": "attacker2",
        "top": -133,
        "left": 55,
        "playerPos": 2
    },
    {
        "setterPos": 1,
        "situation": "afterServe",
        "name": "libero",
        "top": -150,
        "left": 213,
        "playerPos": 7
    },
    {
        "setterPos": 1,
        "situation": "preServeReceive",
        "name": "setter",
        "top": 257,
        "left": 429,
        "playerPos": 1
    },
    {
        "setterPos": 1,
        "situation": "preServeReceive",
        "name": "mittleblock1",
        "top": -95,
        "left": 209,
        "playerPos": 6
    },
    {
        "setterPos": 1,
        "situation": "preServeReceive",
        "name": "attacker1",
        "top": -49,
        "left": 350,
        "playerPos": 5
    },
    {
        "setterPos": 1,
        "situation": "preServeReceive",
        "name": "diagonal",
        "top": -25,
        "left": 94,
        "playerPos": 4
    },
    {
        "setterPos": 1,
        "situation": "preServeReceive",
        "name": "mittleblock2",
        "top": -62,
        "left": 584,
        "playerPos": 3
    },
    {
        "setterPos": 1,
        "situation": "preServeReceive",
        "name": "attacker2",
        "top": -133,
        "left": 55,
        "playerPos": 2
    },
    {
        "setterPos": 1,
        "situation": "preServeReceive",
        "name": "libero",
        "top": -150,
        "left": 213,
        "playerPos": 7
    },
    {
        "setterPos": 1,
        "situation": "afterServeReceive",
        "name": "setter",
        "top": 9,
        "left": 297,
        "playerPos": 1
    },
    {
        "setterPos": 1,
        "situation": "afterServeReceive",
        "name": "mittleblock1",
        "top": -37,
        "left": 211,
        "playerPos": 6
    },
    {
        "setterPos": 1,
        "situation": "afterServeReceive",
        "name": "attacker1",
        "top": -173,
        "left": 414,
        "playerPos": 5
    },
    {
        "setterPos": 1,
        "situation": "afterServeReceive",
        "name": "diagonal",
        "top": 26,
        "left": 38,
        "playerPos": 4
    },
    {
        "setterPos": 1,
        "situation": "afterServeReceive",
        "name": "mittleblock2",
        "top": -62,
        "left": 584,
        "playerPos": 3
    },
    {
        "setterPos": 1,
        "situation": "afterServeReceive",
        "name": "attacker2",
        "top": -133,
        "left": 55,
        "playerPos": 2
    },
    {
        "setterPos": 1,
        "situation": "afterServeReceive",
        "name": "libero",
        "top": -150,
        "left": 213,
        "playerPos": 7
    },
    {
        "setterPos": 6,
        "situation": "standard",
        "name": "setter",
        "top": 272,
        "left": 223,
        "playerPos": 1
    },
    {
        "setterPos": 6,
        "situation": "standard",
        "name": "mittleblock1",
        "top": -100,
        "left": 369,
        "playerPos": 6
    },
    {
        "setterPos": 6,
        "situation": "standard",
        "name": "attacker1",
        "top": -10,
        "left": 375,
        "playerPos": 5
    },
    {
        "setterPos": 6,
        "situation": "standard",
        "name": "diagonal",
        "top": -32,
        "left": 219,
        "playerPos": 4
    },
    {
        "setterPos": 6,
        "situation": "standard",
        "name": "mittleblock2",
        "top": -62,
        "left": 584,
        "playerPos": 3
    },
    {
        "setterPos": 6,
        "situation": "standard",
        "name": "attacker2",
        "top": -314,
        "left": 57,
        "playerPos": 2
    },
    {
        "setterPos": 6,
        "situation": "standard",
        "name": "libero",
        "top": -140,
        "left": 63,
        "playerPos": 7
    },
    {
        "setterPos": 6,
        "situation": "preServe",
        "name": "setter",
        "top": 168,
        "left": 342,
        "playerPos": 1
    },
    {
        "setterPos": 6,
        "situation": "preServe",
        "name": "mittleblock1",
        "top": -128,
        "left": 263,
        "playerPos": 6
    },
    {
        "setterPos": 6,
        "situation": "preServe",
        "name": "attacker1",
        "top": 157,
        "left": 391,
        "playerPos": 5
    },
    {
        "setterPos": 6,
        "situation": "preServe",
        "name": "diagonal",
        "top": 9,
        "left": 223,
        "playerPos": 4
    },
    {
        "setterPos": 6,
        "situation": "preServe",
        "name": "mittleblock2",
        "top": -62,
        "left": 584,
        "playerPos": 3
    },
    {
        "setterPos": 6,
        "situation": "preServe",
        "name": "attacker2",
        "top": -302,
        "left": 45,
        "playerPos": 2
    },
    {
        "setterPos": 6,
        "situation": "preServe",
        "name": "libero",
        "top": -215,
        "left": 86,
        "playerPos": 7
    },
    {
        "setterPos": 6,
        "situation": "afterServe",
        "name": "setter",
        "top": 220,
        "left": 374,
        "playerPos": 1
    },
    {
        "setterPos": 6,
        "situation": "afterServe",
        "name": "mittleblock1",
        "top": -100,
        "left": 224,
        "playerPos": 6
    },
    {
        "setterPos": 6,
        "situation": "afterServe",
        "name": "attacker1",
        "top": 3,
        "left": 216,
        "playerPos": 5
    },
    {
        "setterPos": 6,
        "situation": "afterServe",
        "name": "diagonal",
        "top": -32,
        "left": 328,
        "playerPos": 4
    },
    {
        "setterPos": 6,
        "situation": "afterServe",
        "name": "mittleblock2",
        "top": -62,
        "left": 584,
        "playerPos": 3
    },
    {
        "setterPos": 6,
        "situation": "afterServe",
        "name": "attacker2",
        "top": -305,
        "left": 114,
        "playerPos": 2
    },
    {
        "setterPos": 6,
        "situation": "afterServe",
        "name": "libero",
        "top": -211,
        "left": 58,
        "playerPos": 7
    },
    {
        "setterPos": 6,
        "situation": "preServeReceive",
        "name": "setter",
        "top": 105,
        "left": 242,
        "playerPos": 1
    },
    {
        "setterPos": 6,
        "situation": "preServeReceive",
        "name": "mittleblock1",
        "top": -112,
        "left": 393,
        "playerPos": 6
    },
    {
        "setterPos": 6,
        "situation": "preServeReceive",
        "name": "attacker1",
        "top": -10,
        "left": 345,
        "playerPos": 5
    },
    {
        "setterPos": 6,
        "situation": "preServeReceive",
        "name": "diagonal",
        "top": -18,
        "left": 176,
        "playerPos": 4
    },
    {
        "setterPos": 6,
        "situation": "preServeReceive",
        "name": "mittleblock2",
        "top": -62,
        "left": 584,
        "playerPos": 3
    },
    {
        "setterPos": 6,
        "situation": "preServeReceive",
        "name": "attacker2",
        "top": -127,
        "left": 33,
        "playerPos": 2
    },
    {
        "setterPos": 6,
        "situation": "preServeReceive",
        "name": "libero",
        "top": -123,
        "left": 191,
        "playerPos": 7
    },
    {
        "setterPos": 6,
        "situation": "afterServeReceive",
        "name": "setter",
        "top": 16,
        "left": 320,
        "playerPos": 1
    },
    {
        "setterPos": 6,
        "situation": "afterServeReceive",
        "name": "mittleblock1",
        "top": -52,
        "left": 395,
        "playerPos": 6
    },
    {
        "setterPos": 6,
        "situation": "afterServeReceive",
        "name": "attacker1",
        "top": 41,
        "left": 235,
        "playerPos": 5
    },
    {
        "setterPos": 6,
        "situation": "afterServeReceive",
        "name": "diagonal",
        "top": 16,
        "left": 209,
        "playerPos": 4
    },
    {
        "setterPos": 6,
        "situation": "afterServeReceive",
        "name": "mittleblock2",
        "top": -62,
        "left": 584,
        "playerPos": 3
    },
    {
        "setterPos": 6,
        "situation": "afterServeReceive",
        "name": "attacker2",
        "top": -264,
        "left": 28,
        "playerPos": 2
    },
    {
        "setterPos": 6,
        "situation": "afterServeReceive",
        "name": "libero",
        "top": -155,
        "left": 65,
        "playerPos": 7
    },
    {
        "setterPos": 5,
        "situation": "standard",
        "name": "setter",
        "top": 268,
        "left": 58,
        "playerPos": 1
    },
    {
        "setterPos": 5,
        "situation": "standard",
        "name": "mittleblock1",
        "top": 122,
        "left": 377,
        "playerPos": 6
    },
    {
        "setterPos": 5,
        "situation": "standard",
        "name": "attacker1",
        "top": -19,
        "left": 227,
        "playerPos": 5
    },
    {
        "setterPos": 5,
        "situation": "standard",
        "name": "diagonal",
        "top": -38,
        "left": 372,
        "playerPos": 4
    },
    {
        "setterPos": 5,
        "situation": "standard",
        "name": "mittleblock2",
        "top": -171,
        "left": 56,
        "playerPos": 3
    },
    {
        "setterPos": 5,
        "situation": "standard",
        "name": "attacker2",
        "top": -318,
        "left": 220,
        "playerPos": 2
    },
    {
        "setterPos": 5,
        "situation": "standard",
        "name": "libero",
        "top": -248,
        "left": 615,
        "playerPos": 7
    },
    {
        "setterPos": 5,
        "situation": "preServe",
        "name": "setter",
        "top": 150,
        "left": 199,
        "playerPos": 1
    },
    {
        "setterPos": 5,
        "situation": "preServe",
        "name": "mittleblock1",
        "top": 319,
        "left": 378,
        "playerPos": 6
    },
    {
        "setterPos": 5,
        "situation": "preServe",
        "name": "attacker1",
        "top": -19,
        "left": 227,
        "playerPos": 5
    },
    {
        "setterPos": 5,
        "situation": "preServe",
        "name": "diagonal",
        "top": -38,
        "left": 358,
        "playerPos": 4
    },
    {
        "setterPos": 5,
        "situation": "preServe",
        "name": "mittleblock2",
        "top": -124,
        "left": 156,
        "playerPos": 3
    },
    {
        "setterPos": 5,
        "situation": "preServe",
        "name": "attacker2",
        "top": -318,
        "left": 220,
        "playerPos": 2
    },
    {
        "setterPos": 5,
        "situation": "preServe",
        "name": "libero",
        "top": -248,
        "left": 615,
        "playerPos": 7
    },
    {
        "setterPos": 5,
        "situation": "afterServe",
        "name": "setter",
        "top": 168,
        "left": 349,
        "playerPos": 1
    },
    {
        "setterPos": 5,
        "situation": "afterServe",
        "name": "mittleblock1",
        "top": 146,
        "left": 206,
        "playerPos": 6
    },
    {
        "setterPos": 5,
        "situation": "afterServe",
        "name": "attacker1",
        "top": -54,
        "left": 75,
        "playerPos": 5
    },
    {
        "setterPos": 5,
        "situation": "afterServe",
        "name": "diagonal",
        "top": -38,
        "left": 358,
        "playerPos": 4
    },
    {
        "setterPos": 5,
        "situation": "afterServe",
        "name": "mittleblock2",
        "top": -181,
        "left": 207,
        "playerPos": 3
    },
    {
        "setterPos": 5,
        "situation": "afterServe",
        "name": "attacker2",
        "top": -319,
        "left": 67,
        "playerPos": 2
    },
    {
        "setterPos": 5,
        "situation": "afterServe",
        "name": "libero",
        "top": -248,
        "left": 615,
        "playerPos": 7
    },
    {
        "setterPos": 5,
        "situation": "preServeReceive",
        "name": "setter",
        "top": 106,
        "left": -2,
        "playerPos": 1
    },
    {
        "setterPos": 5,
        "situation": "preServeReceive",
        "name": "mittleblock1",
        "top": -50,
        "left": 579,
        "playerPos": 6
    },
    {
        "setterPos": 5,
        "situation": "preServeReceive",
        "name": "attacker1",
        "top": -19,
        "left": 227,
        "playerPos": 5
    },
    {
        "setterPos": 5,
        "situation": "preServeReceive",
        "name": "diagonal",
        "top": 15,
        "left": 401,
        "playerPos": 4
    },
    {
        "setterPos": 5,
        "situation": "preServeReceive",
        "name": "mittleblock2",
        "top": -177,
        "left": 34,
        "playerPos": 3
    },
    {
        "setterPos": 5,
        "situation": "preServeReceive",
        "name": "attacker2",
        "top": -108,
        "left": 79,
        "playerPos": 2
    },
    {
        "setterPos": 5,
        "situation": "preServeReceive",
        "name": "libero",
        "top": -159,
        "left": 380,
        "playerPos": 7
    },
    {
        "setterPos": 5,
        "situation": "afterServeReceive",
        "name": "setter",
        "top": 7,
        "left": 324,
        "playerPos": 1
    },
    {
        "setterPos": 5,
        "situation": "afterServeReceive",
        "name": "mittleblock1",
        "top": -50,
        "left": 579,
        "playerPos": 6
    },
    {
        "setterPos": 5,
        "situation": "afterServeReceive",
        "name": "attacker1",
        "top": -28,
        "left": 63,
        "playerPos": 5
    },
    {
        "setterPos": 5,
        "situation": "afterServeReceive",
        "name": "diagonal",
        "top": 15,
        "left": 401,
        "playerPos": 4
    },
    {
        "setterPos": 5,
        "situation": "afterServeReceive",
        "name": "mittleblock2",
        "top": -109,
        "left": 207,
        "playerPos": 3
    },
    {
        "setterPos": 5,
        "situation": "afterServeReceive",
        "name": "attacker2",
        "top": -247,
        "left": 35,
        "playerPos": 2
    },
    {
        "setterPos": 5,
        "situation": "afterServeReceive",
        "name": "libero",
        "top": -114,
        "left": 213,
        "playerPos": 7
    },
    {
        "setterPos": 4,
        "situation": "standard",
        "name": "setter",
        "top": 33,
        "left": 52,
        "playerPos": 1
    },
    {
        "setterPos": 4,
        "situation": "standard",
        "name": "mittleblock1",
        "top": 33,
        "left": 596,
        "playerPos": 6
    },
    {
        "setterPos": 4,
        "situation": "standard",
        "name": "attacker1",
        "top": -19,
        "left": 52,
        "playerPos": 5
    },
    {
        "setterPos": 4,
        "situation": "standard",
        "name": "diagonal",
        "top": 200,
        "left": 375,
        "playerPos": 4
    },
    {
        "setterPos": 4,
        "situation": "standard",
        "name": "mittleblock2",
        "top": -180,
        "left": 213,
        "playerPos": 3
    },
    {
        "setterPos": 4,
        "situation": "standard",
        "name": "attacker2",
        "top": -317,
        "left": 377,
        "playerPos": 2
    },
    {
        "setterPos": 4,
        "situation": "standard",
        "name": "libero",
        "top": -151,
        "left": 213,
        "playerPos": 7
    },
    {
        "setterPos": 4,
        "situation": "preServe",
        "name": "setter",
        "top": 76,
        "left": 205,
        "playerPos": 1
    },
    {
        "setterPos": 4,
        "situation": "preServe",
        "name": "mittleblock1",
        "top": 33,
        "left": 596,
        "playerPos": 6
    },
    {
        "setterPos": 4,
        "situation": "preServe",
        "name": "attacker1",
        "top": -43,
        "left": 50,
        "playerPos": 5
    },
    {
        "setterPos": 4,
        "situation": "preServe",
        "name": "diagonal",
        "top": 366,
        "left": 376,
        "playerPos": 4
    },
    {
        "setterPos": 4,
        "situation": "preServe",
        "name": "mittleblock2",
        "top": -202,
        "left": 214,
        "playerPos": 3
    },
    {
        "setterPos": 4,
        "situation": "preServe",
        "name": "attacker2",
        "top": -217,
        "left": 248,
        "playerPos": 2
    },
    {
        "setterPos": 4,
        "situation": "preServe",
        "name": "libero",
        "top": -139,
        "left": 208,
        "playerPos": 7
    },
    {
        "setterPos": 4,
        "situation": "afterServe",
        "name": "setter",
        "top": 14,
        "left": 312,
        "playerPos": 1
    },
    {
        "setterPos": 4,
        "situation": "afterServe",
        "name": "mittleblock1",
        "top": 33,
        "left": 596,
        "playerPos": 6
    },
    {
        "setterPos": 4,
        "situation": "afterServe",
        "name": "attacker1",
        "top": -11,
        "left": 125,
        "playerPos": 5
    },
    {
        "setterPos": 4,
        "situation": "afterServe",
        "name": "diagonal",
        "top": 74,
        "left": 455,
        "playerPos": 4
    },
    {
        "setterPos": 4,
        "situation": "afterServe",
        "name": "mittleblock2",
        "top": -118,
        "left": 209,
        "playerPos": 3
    },
    {
        "setterPos": 4,
        "situation": "afterServe",
        "name": "attacker2",
        "top": -264,
        "left": 36,
        "playerPos": 2
    },
    {
        "setterPos": 4,
        "situation": "afterServe",
        "name": "libero",
        "top": -139,
        "left": 272,
        "playerPos": 7
    },
    {
        "setterPos": 4,
        "situation": "preServeReceive",
        "name": "setter",
        "top": 0,
        "left": 169,
        "playerPos": 1
    },
    {
        "setterPos": 4,
        "situation": "preServeReceive",
        "name": "mittleblock1",
        "top": 33,
        "left": 596,
        "playerPos": 6
    },
    {
        "setterPos": 4,
        "situation": "preServeReceive",
        "name": "attacker1",
        "top": -19,
        "left": 52,
        "playerPos": 5
    },
    {
        "setterPos": 4,
        "situation": "preServeReceive",
        "name": "diagonal",
        "top": 200,
        "left": 375,
        "playerPos": 4
    },
    {
        "setterPos": 4,
        "situation": "preServeReceive",
        "name": "mittleblock2",
        "top": -154,
        "left": 211,
        "playerPos": 3
    },
    {
        "setterPos": 4,
        "situation": "preServeReceive",
        "name": "attacker2",
        "top": -247,
        "left": 251,
        "playerPos": 2
    },
    {
        "setterPos": 4,
        "situation": "preServeReceive",
        "name": "libero",
        "top": -151,
        "left": 213,
        "playerPos": 7
    },
    {
        "setterPos": 4,
        "situation": "afterServeReceive",
        "name": "setter",
        "top": -2,
        "left": 312,
        "playerPos": 1
    },
    {
        "setterPos": 4,
        "situation": "afterServeReceive",
        "name": "mittleblock1",
        "top": 33,
        "left": 596,
        "playerPos": 6
    },
    {
        "setterPos": 4,
        "situation": "afterServeReceive",
        "name": "attacker1",
        "top": -25,
        "left": 108,
        "playerPos": 5
    },
    {
        "setterPos": 4,
        "situation": "afterServeReceive",
        "name": "diagonal",
        "top": 53,
        "left": 438,
        "playerPos": 4
    },
    {
        "setterPos": 4,
        "situation": "afterServeReceive",
        "name": "mittleblock2",
        "top": -154,
        "left": 211,
        "playerPos": 3
    },
    {
        "setterPos": 4,
        "situation": "afterServeReceive",
        "name": "attacker2",
        "top": -294,
        "left": 32,
        "playerPos": 2
    },
    {
        "setterPos": 4,
        "situation": "afterServeReceive",
        "name": "libero",
        "top": -147,
        "left": 274,
        "playerPos": 7
    },
    {
        "setterPos": 3,
        "situation": "standard",
        "name": "setter",
        "top": 26,
        "left": 210,
        "playerPos": 1
    },
    {
        "setterPos": 3,
        "situation": "standard",
        "name": "mittleblock1",
        "top": 33,
        "left": 596,
        "playerPos": 6
    },
    {
        "setterPos": 3,
        "situation": "standard",
        "name": "attacker1",
        "top": -260,
        "left": 56,
        "playerPos": 5
    },
    {
        "setterPos": 3,
        "situation": "standard",
        "name": "diagonal",
        "top": 201,
        "left": 216,
        "playerPos": 4
    },
    {
        "setterPos": 3,
        "situation": "standard",
        "name": "mittleblock2",
        "top": -188,
        "left": 374,
        "playerPos": 3
    },
    {
        "setterPos": 3,
        "situation": "standard",
        "name": "attacker2",
        "top": -85,
        "left": 383,
        "playerPos": 2
    },
    {
        "setterPos": 3,
        "situation": "standard",
        "name": "libero",
        "top": -152,
        "left": 55,
        "playerPos": 7
    },
    {
        "setterPos": 3,
        "situation": "preServe",
        "name": "setter",
        "top": 26,
        "left": 210,
        "playerPos": 1
    },
    {
        "setterPos": 3,
        "situation": "preServe",
        "name": "mittleblock1",
        "top": 33,
        "left": 596,
        "playerPos": 6
    },
    {
        "setterPos": 3,
        "situation": "preServe",
        "name": "attacker1",
        "top": -248,
        "left": 52,
        "playerPos": 5
    },
    {
        "setterPos": 3,
        "situation": "preServe",
        "name": "diagonal",
        "top": 222,
        "left": 333,
        "playerPos": 4
    },
    {
        "setterPos": 3,
        "situation": "preServe",
        "name": "mittleblock2",
        "top": -123,
        "left": 255,
        "playerPos": 3
    },
    {
        "setterPos": 3,
        "situation": "preServe",
        "name": "attacker2",
        "top": 79,
        "left": 278,
        "playerPos": 2
    },
    {
        "setterPos": 3,
        "situation": "preServe",
        "name": "libero",
        "top": -202,
        "left": 93,
        "playerPos": 7
    },
    {
        "setterPos": 3,
        "situation": "afterServe",
        "name": "setter",
        "top": 33,
        "left": 343,
        "playerPos": 1
    },
    {
        "setterPos": 3,
        "situation": "afterServe",
        "name": "mittleblock1",
        "top": 33,
        "left": 596,
        "playerPos": 6
    },
    {
        "setterPos": 3,
        "situation": "afterServe",
        "name": "attacker1",
        "top": -249,
        "left": 82,
        "playerPos": 5
    },
    {
        "setterPos": 3,
        "situation": "afterServe",
        "name": "diagonal",
        "top": 171,
        "left": 354,
        "playerPos": 4
    },
    {
        "setterPos": 3,
        "situation": "afterServe",
        "name": "mittleblock2",
        "top": -174,
        "left": 212,
        "playerPos": 3
    },
    {
        "setterPos": 3,
        "situation": "afterServe",
        "name": "attacker2",
        "top": -68,
        "left": 197,
        "playerPos": 2
    },
    {
        "setterPos": 3,
        "situation": "afterServe",
        "name": "libero",
        "top": -201,
        "left": 61,
        "playerPos": 7
    },
    {
        "setterPos": 3,
        "situation": "preServeReceive",
        "name": "setter",
        "top": 26,
        "left": 210,
        "playerPos": 1
    },
    {
        "setterPos": 3,
        "situation": "preServeReceive",
        "name": "mittleblock1",
        "top": 33,
        "left": 596,
        "playerPos": 6
    },
    {
        "setterPos": 3,
        "situation": "preServeReceive",
        "name": "attacker1",
        "top": -56,
        "left": 44,
        "playerPos": 5
    },
    {
        "setterPos": 3,
        "situation": "preServeReceive",
        "name": "diagonal",
        "top": 229,
        "left": 344,
        "playerPos": 4
    },
    {
        "setterPos": 3,
        "situation": "preServeReceive",
        "name": "mittleblock2",
        "top": -125,
        "left": 252,
        "playerPos": 3
    },
    {
        "setterPos": 3,
        "situation": "preServeReceive",
        "name": "attacker2",
        "top": -136,
        "left": 358,
        "playerPos": 2
    },
    {
        "setterPos": 3,
        "situation": "preServeReceive",
        "name": "libero",
        "top": -129,
        "left": 193,
        "playerPos": 7
    },
    {
        "setterPos": 3,
        "situation": "afterServeReceive",
        "name": "setter",
        "top": 19,
        "left": 299,
        "playerPos": 1
    },
    {
        "setterPos": 3,
        "situation": "afterServeReceive",
        "name": "mittleblock1",
        "top": 33,
        "left": 596,
        "playerPos": 6
    },
    {
        "setterPos": 3,
        "situation": "afterServeReceive",
        "name": "attacker1",
        "top": -161,
        "left": 34,
        "playerPos": 5
    },
    {
        "setterPos": 3,
        "situation": "afterServeReceive",
        "name": "diagonal",
        "top": 74,
        "left": 443,
        "playerPos": 4
    },
    {
        "setterPos": 3,
        "situation": "afterServeReceive",
        "name": "mittleblock2",
        "top": -107,
        "left": 188,
        "playerPos": 3
    },
    {
        "setterPos": 3,
        "situation": "afterServeReceive",
        "name": "attacker2",
        "top": -28,
        "left": 230,
        "playerPos": 2
    },
    {
        "setterPos": 3,
        "situation": "afterServeReceive",
        "name": "libero",
        "top": -142,
        "left": 87,
        "playerPos": 7
    },
    {
        "setterPos": 2,
        "situation": "standard",
        "name": "setter",
        "top": 26,
        "left": 374,
        "playerPos": 1
    },
    {
        "setterPos": 2,
        "situation": "standard",
        "name": "mittleblock1",
        "top": -114,
        "left": 54,
        "playerPos": 6
    },
    {
        "setterPos": 2,
        "situation": "standard",
        "name": "attacker1",
        "top": -253,
        "left": 209,
        "playerPos": 5
    },
    {
        "setterPos": 2,
        "situation": "standard",
        "name": "diagonal",
        "top": 207,
        "left": 58,
        "playerPos": 4
    },
    {
        "setterPos": 2,
        "situation": "standard",
        "name": "mittleblock2",
        "top": 67,
        "left": 375,
        "playerPos": 3
    },
    {
        "setterPos": 2,
        "situation": "standard",
        "name": "attacker2",
        "top": -71,
        "left": 208,
        "playerPos": 2
    },
    {
        "setterPos": 2,
        "situation": "standard",
        "name": "libero",
        "top": -340,
        "left": 576,
        "playerPos": 7
    },
    {
        "setterPos": 2,
        "situation": "preServe",
        "name": "setter",
        "top": 26,
        "left": 374,
        "playerPos": 1
    },
    {
        "setterPos": 2,
        "situation": "preServe",
        "name": "mittleblock1",
        "top": -127,
        "left": 113,
        "playerPos": 6
    },
    {
        "setterPos": 2,
        "situation": "preServe",
        "name": "attacker1",
        "top": -209,
        "left": 156,
        "playerPos": 5
    },
    {
        "setterPos": 2,
        "situation": "preServe",
        "name": "diagonal",
        "top": 213,
        "left": 140,
        "playerPos": 4
    },
    {
        "setterPos": 2,
        "situation": "preServe",
        "name": "mittleblock2",
        "top": 239,
        "left": 385,
        "playerPos": 3
    },
    {
        "setterPos": 2,
        "situation": "preServe",
        "name": "attacker2",
        "top": -127,
        "left": 186,
        "playerPos": 2
    },
    {
        "setterPos": 2,
        "situation": "preServe",
        "name": "libero",
        "top": -340,
        "left": 576,
        "playerPos": 7
    },
    {
        "setterPos": 2,
        "situation": "afterServe",
        "name": "setter",
        "top": 20,
        "left": 327,
        "playerPos": 1
    },
    {
        "setterPos": 2,
        "situation": "afterServe",
        "name": "mittleblock1",
        "top": -120,
        "left": 209,
        "playerPos": 6
    },
    {
        "setterPos": 2,
        "situation": "afterServe",
        "name": "attacker1",
        "top": -262,
        "left": 98,
        "playerPos": 5
    },
    {
        "setterPos": 2,
        "situation": "afterServe",
        "name": "diagonal",
        "top": 151,
        "left": 370,
        "playerPos": 4
    },
    {
        "setterPos": 2,
        "situation": "afterServe",
        "name": "mittleblock2",
        "top": 64,
        "left": 189,
        "playerPos": 3
    },
    {
        "setterPos": 2,
        "situation": "afterServe",
        "name": "attacker2",
        "top": -159,
        "left": 42,
        "playerPos": 2
    },
    {
        "setterPos": 2,
        "situation": "afterServe",
        "name": "libero",
        "top": -340,
        "left": 576,
        "playerPos": 7
    },
    {
        "setterPos": 2,
        "situation": "preServeReceive",
        "name": "setter",
        "top": 26,
        "left": 374,
        "playerPos": 1
    },
    {
        "setterPos": 2,
        "situation": "preServeReceive",
        "name": "mittleblock1",
        "top": -125,
        "left": 29,
        "playerPos": 6
    },
    {
        "setterPos": 2,
        "situation": "preServeReceive",
        "name": "attacker1",
        "top": -84,
        "left": 55,
        "playerPos": 5
    },
    {
        "setterPos": 2,
        "situation": "preServeReceive",
        "name": "diagonal",
        "top": 256,
        "left": 31,
        "playerPos": 4
    },
    {
        "setterPos": 2,
        "situation": "preServeReceive",
        "name": "mittleblock2",
        "top": -66,
        "left": 567,
        "playerPos": 3
    },
    {
        "setterPos": 2,
        "situation": "preServeReceive",
        "name": "attacker2",
        "top": -102,
        "left": 187,
        "playerPos": 2
    },
    {
        "setterPos": 2,
        "situation": "preServeReceive",
        "name": "libero",
        "top": -202,
        "left": 352,
        "playerPos": 7
    },
    {
        "setterPos": 2,
        "situation": "afterServeReceive",
        "name": "setter",
        "top": 9,
        "left": 316,
        "playerPos": 1
    },
    {
        "setterPos": 2,
        "situation": "afterServeReceive",
        "name": "mittleblock1",
        "top": -47,
        "left": 176,
        "playerPos": 6
    },
    {
        "setterPos": 2,
        "situation": "afterServeReceive",
        "name": "attacker1",
        "top": -190,
        "left": 30,
        "playerPos": 5
    },
    {
        "setterPos": 2,
        "situation": "afterServeReceive",
        "name": "diagonal",
        "top": 96,
        "left": 450,
        "playerPos": 4
    },
    {
        "setterPos": 2,
        "situation": "afterServeReceive",
        "name": "mittleblock2",
        "top": -126,
        "left": 577,
        "playerPos": 3
    },
    {
        "setterPos": 2,
        "situation": "afterServeReceive",
        "name": "attacker2",
        "top": -121,
        "left": 86,
        "playerPos": 2
    },
    {
        "setterPos": 2,
        "situation": "afterServeReceive",
        "name": "libero",
        "top": -135,
        "left": 234,
        "playerPos": 7
    }
];
let playerCircleSize = 70;
let currentClickedPlayer = null;

let playerRelationArray = {
    1: {
        'front': 2,
        'back': 0,
        'left': 6,
        'right': 0,
    },
    2: {
        'front': 0,
        'back': 1,
        'left': 3,
        'right': 0,
    },
    3: {
        'front': 0,
        'back': 6,
        'left': 4,
        'right': 2,
    },
    4: {
        'front': 0,
        'back': 5,
        'left': 0,
        'right': 3,
    },
    5: {
        'front': 4,
        'back': 0,
        'left': 0,
        'right': 6,
    },
    6: {
        'front': 3,
        'back': 0,
        'left': 5,
        'right': 1,
    },

};

$('#selectSetterPos').change(function () {

    let setterPos = $(this).val();
    ApplyPositionsToPlayers(setterPos);
    setterPosition = Number(setterPos);
    situation = 'standard';
    /*console.log({setterPosition});
    console.log({situation});*/
    $('.position').hide();
    $('#z' + setterPosition).show().find("button").first().trigger("click");
    SetPlayerArea(0, 0, 0, 0);
    $(".player").removeClass('CURRENT_CLICKED_PLAYER');
    $(".player").removeClass('OUTSIDE');

});

$(".player").draggable({
    stop: Log,
    drag: OnPlayerDrag
});

$(".player").click(function (){

    if(situation == 'standard' || situation == 'preServe' || situation == 'preServeReceive'){
        currentClickedPlayer = $(this);
        $(".player").removeClass('CURRENT_CLICKED_PLAYER');
        currentClickedPlayer.addClass('CURRENT_CLICKED_PLAYER');
        RenderPlayerRangeArea(currentClickedPlayer);
    }else{
        SetPlayerArea(0, 0, 0, 0);
    }

});

$('#btnClearArray').click(function () {
    playerPosArray = [];
});

$('#btnAddToArray').click(function(){

    $(".player").each(function () {
        let name = $(this).attr('id');
        let top = $(this).css('top');
        let left = $(this).css('left');
        let pos = $(this).attr('data-pos');
        let object = {
            setterPos: setterPosition,
            situation: situation,
            name: name,
            top: Number(top.slice(0, -2)),
            left: Number(left.slice(0, -2)),
            playerPos: Number(pos),
        }
        let index = playerPosArray.findIndex(object => {
            return Number(object.setterPos) === Number(setterPosition) && object.situation === situation && object.name === name;
        });

        if (index !== -1) {
            playerPosArray[index] = object;
        } else {
            playerPosArray.push(object);
        }

    });

});

$('.btnStep').click(function () {

    situation = $(this).attr('data-situation');
    CallMethod(setterPosition,situation);

    $('.btnStep').removeClass('btn-success').addClass('btn-outline-success');
    $(this).addClass('btn-success').removeClass('btn-outline-success');

    SetPlayerArea(0, 0, 0, 0);
    $(".player").removeClass('CURRENT_CLICKED_PLAYER');
    $(".player").removeClass('OUTSIDE');

});

$('.btnTogglePlayerInfo').click(TogglePosAndNames);

$('.names').change(ApplyNames);

function ApplyNames () {
    let text = $(this).val();
    let targetName = $(this).attr('data-target');
    let target = $('#' + targetName);
    target.attr('data-name', text);
    if (currentView === 'name') {
        target.text(text)
    }
}

function TogglePosAndNames() {

    currentView = $(this).attr('data-value');

    if(currentView == 'name'){
        $('.player').each(function () {
            let id = $(this).attr('id');
            //get appropriate field value
            let value = $('[data-target="' + id + '"]').val();
            $(this).text(value);
        });
    }else{
        $('.player').each(function () {
            let value = currentView === 'number' ? $(this).attr('data-pos') : $(this).attr('data-name');
            $(this).text(value);
        });
    }

    //Toggle css of buttons
    $('.btnTogglePlayerInfo').removeClass('btn-info').addClass('btn-outline-info');
    $(this).addClass('btn-info').removeClass('btn-outline-info');

}

function OnPlayerDrag() {
    //let position = $(this).position();
    //$(this).text('l:' + parseInt(position.left) + 't:' + parseInt(position.top));
    if (situation == 'standard' || situation == 'preServe' || situation == 'preServeReceive') {
        RenderPlayerRangeArea(currentClickedPlayer);

        CheckIfPlayerIsInArea(currentClickedPlayer);
    }
}

function CheckIfPlayerIsInArea(currentClickedPlayer) {

    let player = currentClickedPlayer;
    let area = $('#playerArea');
    let playerPos = player.position();
    let areaPos = area.position();

    let playerWidth = playerPos.left + player.width();
    let playerHeight = playerPos.top + player.height();
    let areaWidth = areaPos.left + area.width();
    let areaHeigth = areaPos.top + area.height();

    /*console.log(playerPos.left);
    console.log(areaPos.left);
    console.log(playerPos.top);
    console.log(areaPos.top);
    console.log('###############');*/

    //Now you can do something like...
    if (playerPos.left + (playerCircleSize / 2) >= areaPos.left &&
        playerPos.top + (playerCircleSize / 2) >= areaPos.top &&
        playerWidth - (playerCircleSize / 2) < areaWidth &&
        playerHeight - (playerCircleSize / 2) < areaHeigth) {
        console.log("INSIDE");
        currentClickedPlayer.removeClass('OUTSIDE');
    } else {
        console.log("OUTSIDE");
        currentClickedPlayer.addClass('OUTSIDE');
    }

}

function RenderPlayerRangeArea (_this) {

    console.log(_this);

    let _areaLeft, _areaTop, _areaWidth, _areaHeight = 0;
    let _net = $('#net');
    let netHeight = 50;

    let frontPlayerPos = 0;
    let backPlayerPos = 0;
    let rightPlayerPos = 0;
    let leftPlayerPos = 0;

    let netPos = _net.position();
    let fieldTop = netPos.top + netHeight;
    let fieldBottom = 800;
    let borderLeft = netPos.left;
    let borderRight = netPos.left + _net.width();

    //Get related PlayerNumbers
    let thisPlayerNumber = Number(_this.attr('data-pos'));

    //Player is outside
    if (thisPlayerNumber == 0) {
        console.log("Als ob ein Auswechselspieler ne Spielfläche hat!?!? :)");
        SetPlayerArea(0,0,0,0);
        return;
    }

    let frontPlayerNumber = Number(playerRelationArray[Number(thisPlayerNumber)]['front']);
    let backPlayerNumber = Number(playerRelationArray[Number(thisPlayerNumber)]['back']);
    let leftPlayerNumber = Number(playerRelationArray[Number(thisPlayerNumber)]['left']);
    let rightPlayerNumber = Number(playerRelationArray[Number(thisPlayerNumber)]['right']);

    console.log('########### RELATED PLAYERS NUMBERS #############');
    console.log({thisPlayerNumber});
    console.log({frontPlayerNumber});
    console.log({backPlayerNumber});
    console.log({leftPlayerNumber});
    console.log({rightPlayerNumber});

    //Get POS of Right- and Leftplayer
    rightPlayerPos = $('[data-pos="' + rightPlayerNumber + '"]').position();
    leftPlayerPos = $('[data-pos="' + leftPlayerNumber + '"]').position();

    //Front Row
    if (frontPlayerNumber === 0) {

        //Get POS of Back PLayer
        backPlayerPos = $('[data-pos="' + backPlayerNumber + '"]').position();

        _areaTop = netPos.top + netHeight;
        _areaHeight = backPlayerPos.top - fieldTop + (playerCircleSize / 2);

    }
    //Back Row
    if (backPlayerNumber == 0) {

        //Get POS of Back PLayer
        frontPlayerPos = $('[data-pos="' + frontPlayerNumber + '"]').position();

        _areaTop = frontPlayerPos.top + (playerCircleSize / 2);
        _areaHeight = fieldBottom - frontPlayerPos.top - (playerCircleSize / 2);

    }

    console.log('########### RELATED PLAYERS POS #############');
    console.log({frontPlayerPos});
    console.log({backPlayerPos});
    console.log({leftPlayerPos});
    console.log({rightPlayerPos});

    //player is on left (hence, no leftPlayerPos exists)
    if (rightPlayerNumber > 0 && leftPlayerNumber == 0) {
        _areaLeft = borderLeft;
        _areaWidth = rightPlayerPos.left - borderLeft + (playerCircleSize / 2);
    } else if (rightPlayerNumber > 0 && leftPlayerNumber > 0) {
        _areaLeft = leftPlayerPos.left + (playerCircleSize / 2);
        _areaWidth = rightPlayerPos.left - leftPlayerPos.left;
    } else if (rightPlayerNumber == 0 && leftPlayerNumber > 0) {
        _areaLeft = leftPlayerPos.left + (playerCircleSize / 2);
        _areaWidth = borderRight - leftPlayerPos.left - (playerCircleSize / 2);
    }

    console.log('########### SQUARE POS/SIZE #############');
    console.log({_top: _areaTop});
    console.log({_left: _areaLeft});
    console.log({_width: _areaWidth});
    console.log({_height: _areaHeight});

    SetPlayerArea(_areaTop,_areaLeft,_areaWidth,_areaHeight);

}

function SetPlayerArea(top, left, width, height) {
    $('#playerArea').css({
        'top': top + 'px',
        'left': left + 'px',
        'width': width + 'px',
        'height': height + 'px'
    });
}

function ApplyPositionsToPlayers(setterPos) {

    $(".player").each(function () {

        let player = $(this).attr('id');
        let pos = GetPosFor(player,setterPos);

        $(this).attr('data-pos', pos);
        console.log({player});
        console.log({pos});

        if (currentView === 'number') {
            $(this).text(pos);
        }

    });

}

function GetPosFor (player, setterPos){

    let posArray = {
        1: {
            'setter': 1,
            'diagonal': 4,
            'mittleblock1': 3,
            'mittleblock2': 6,
            'attacker1': 2,
            'attacker2': 5,
            'libero': 6,
        },
        6: {
            'setter': 6,
            'diagonal': 3,
            'mittleblock1': 2,
            'mittleblock2': 5,
            'attacker1': 1,
            'attacker2': 4,
            'libero': 5,
        },
        5: {
            'setter': 5,
            'diagonal': 2,
            'mittleblock1': 1,
            'mittleblock2': 4,
            'attacker1': 6,
            'attacker2': 3,
            'libero': 1,
        },
        4: {
            'setter': 4,
            'diagonal': 1,
            'mittleblock1': 6,
            'mittleblock2': 3,
            'attacker1': 5,
            'attacker2': 2,
            'libero': 6,
        },
        3: {
            'setter': 3,
            'diagonal': 6,
            'mittleblock1': 5,
            'mittleblock2': 2,
            'attacker1': 4,
            'attacker2': 1,
            'libero': 5,
        },
        2: {
            'setter': 2,
            'diagonal': 5,
            'mittleblock1': 4,
            'mittleblock2': 1,
            'attacker1': 3,
            'attacker2': 6,
            'libero': 1,
        }

    };

    return posArray[setterPos][player];

}

function Log(e, ui) {

    let pos = ui.position;
    let name = ui.helper[0].id;

    let object = {
        setterPos: setterPosition,
        situation: situation,
        name: name,
        top: pos.top,
        left: pos.left,
    }

    console.log(object);
}

function MovePlayersTo(players) {

    let playerName;

    players.forEach(function (player) {
        playerName = $('#' + player.name);
        playerName.animate({top: player.top + 'px', left: player.left + 'px'}, speed, function () {
            //end of animation.. if you want to add some code here
        }).attr('data-pos',player.pos);
        if(currentView === 'number'){
            playerName.text(player.pos);
        }
        if(player.left > 500){
            playerName = $('#' + player.name).attr('data-pos',0);
        }
    });
}

function CallMethod(setterPosition,situation){

    let players = [];
    playerPosArray.forEach(function (item) {
        if(item.situation === situation && item.setterPos == setterPosition){
            players.push(item);
        }
    });

    MovePlayersTo(players);
}

CallMethod(setterPosition,situation);
