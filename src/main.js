let config = {
    type: Phaser.CANVAS,
    width: 680,
    height: 480,
    scene: [ Menu, Play ]
}

// instantiate the game
let game = new Phaser.Game(config);

// set UI size
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;