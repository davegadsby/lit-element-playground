
export class Pure {

    private jan = false

    constructor() {
        console.log('hmmm');
    }

    NotCalled() {
        this.jan = false;
    }

    NotCalled2() {
        this.jan = false;
    }
    
    setJan(bool: boolean) {
        this.jan = bool;
    }

}
