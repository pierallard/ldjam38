
import Play from "./states/Play";
import Preload from "./states/Preload";
import {Output} from "./terminal/output";


export default class Speaker {
	private state: Play;
	private output: Output;

	constructor(state: Play) {
		this.state = state;
	}

	static loadAssets (state: Preload) {
        state.load.audio('notifications/error', 'assets/sounds/notifications/01.wav');
        state.load.audio('notifications/bip', 'assets/sounds/notifications/02.wav');
        state.load.audio('notifications/01', 'assets/sounds/notifications/01.wav');
        state.load.audio('notifications/success', 'assets/sounds/notifications/success.wav');
        state.load.audio('hdd/load/1', 'assets/sounds/hdd/load_1.wav');
        state.load.audio('hdd/load/2', 'assets/sounds/hdd/load_2.wav');
        state.load.audio('hdd/load/3', 'assets/sounds/hdd/load_3.wav');
        state.load.audio('hdd/load/4', 'assets/sounds/hdd/load_4.wav');
        state.load.audio('hdd/load/5', 'assets/sounds/hdd/load_5.wav');
        state.load.audio('hdd/load/6', 'assets/sounds/hdd/load_6.wav');
        state.load.audio('hdd/load/7', 'assets/sounds/hdd/load_7.wav');
        state.load.audio('hdd/load/8', 'assets/sounds/hdd/load_8.wav');
	}

	playSound(name: string, volume: number = 1, loop: boolean = false) {
		return this.state.sound.play(name, volume, loop);
	}

	setOutput (output: Output) {
		this.output = output;
		output.speaker = this;
	}
}
