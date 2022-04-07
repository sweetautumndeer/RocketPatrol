let config = {
    type: Phaser.CANVAS,
    width: 680,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);