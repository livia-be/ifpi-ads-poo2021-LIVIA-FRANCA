class Triangulo {
    a: number; b: number; c: number;

    constructor(la: number, lb: number, lc: number) {
        this.a = la;
        this.b = lb;
        this.c = lc;

    }

    retangulo(): boolean {
        if (Math.abs(this.b - this.c) < this.a && this.a < this.b + this.c) {
            return true;
        } else {
            return false;
        }
        // |b-c| < a < b+c;
    }

    ehIsoceles(): boolean {
        if (this.retangulo() == false)
            return false;
        if ( (this.a == this.b || this.a == this.c || this.c == this.b) 
            && !(this.a == this.b && this.a == this.c))
            return true;
        else { return false }
    }

    ehEquilatero():boolean{
        if (this.retangulo() == false)
            return false;
        if (this.a == this.b && this.a == this.c)
        return true;
        else { return false}

    }

    ehEscaleno(): boolean{
        if (this.retangulo() == false)
        return false;
        if (this.a != this.b && this.a != this.c && this.b != this.c)
        return true;
        else { return false}
    }
}

let trg: Triangulo = new Triangulo(2, 3, 4);
console.log(trg.ehEscaleno());