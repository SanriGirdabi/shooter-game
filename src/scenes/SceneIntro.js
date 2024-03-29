import Phaser from 'phaser';
import Button from '../Objects/Button';
import Toggler from '../Functions/Toggler';

class SceneIntro extends Phaser.Scene {
  constructor() {
    super('SceneIntro');
  }

  create() {
    this.btnStart = new Button(this, 400, 250, 'play', 'play', '', 'SceneMain');
    this.SoundButton = this.add.text(520, 50, 'Toggle-Sound').setInteractive();
    if (window.model.backgroundMusic === null && window.model.musicMode === true) {
      window.model.backgroundMusic = this.sound.add('mainTheme', { loop: true });
      window.model.backgroundMusic.play();
    }
    this.SoundButton.on('pointerdown', () => Toggler());
    this.element = this.add.dom(400, 120).createFromCache('nameform');
    this.element.setPerspective(800);
    this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    this.returnKey.on('down', () => {
      const name = this.element.getChildByName('name');
      if (name.value !== '') {
        window.model.user = name.value;
      }
    });
  }
}

export default SceneIntro;