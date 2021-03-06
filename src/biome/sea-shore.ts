
import { Biome } from './biome';
import { Output } from '../terminal/output';

export class SeaShore implements Biome {
    public name: string = 'sea-shore';
    public type: string = 'Sea Shore';
    public description: string = 'Well I can’t swim. Do you ?';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        if (this.searchedCount == 1) {
            output.writeToTerminal("Don’t count on me to dip a wheel in the water.");
        }
        if (this.searchedCount == 2) {
            output.writeToTerminal("More details");
        }
        if (this.searchedCount > 2) {
            output.writeToTerminal("Full details");
        }
    }
}
