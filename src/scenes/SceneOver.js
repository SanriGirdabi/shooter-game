import Phaser from 'phaser';

export default class SceneOver extends Phaser.Scene {
  constructor() {
    super('SceneOver');
  }

  preload() {
    this.load.image('background', 'assets/background.jpg');
    this.load.image('Re-play', 'assets/Play.png');
    this.load.image('leaderboard', 'assets/leaderboard.png');
  }

  create() {
    this.bckimage = this.add.image(0, 0, 'background');
    this.bckimage.scale = 1.6;
    this.leaderboard = this.add.image(400, 150, 'leaderboard').setInteractive();
    this.title = this.add.text(230, 0, 'The game is over', { fontSize: '32px', fill: '#fff' });
    if (window.model.playerWon === true) {
      this.explanation = this.add.text(50, this.game.config.height / 2, `You've won the game\n Your score is ${window.model.point}`);
      this.explanation2 = this.add.text(50, this.game.config.height / 2 + 50, `Your time is: ${window.model.clock}`);
    } else {
      this.explanation = this.add.text(50, this.game.config.height / 2, `You've lost the game\n Your score is ${window.model.point}`);
      this.explanation2 = this.add.text(50, this.game.config.height / 2 + 50, `Your time is: ${window.model.clock}`);
    }
    this.leaderboard.on('pointerdown', () => this.scene.start('SceneLeaderBoard'));
  }
}