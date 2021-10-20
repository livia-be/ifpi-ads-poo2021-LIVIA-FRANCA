class Radio {
    volume: number;
    constructor(volume: number) {
        this.volume = volume;
    }
}
let r: Radio = new Radio(10); // precisa de um parâmetro
r.volume = 10;