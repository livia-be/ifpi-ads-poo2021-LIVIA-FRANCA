var Triangulo = /** @class */ (function () {
    function Triangulo(la, lb, lc) {
        this.a = la;
        this.b = lb;
        this.c = lc;
    }
    Triangulo.prototype.retangulo = function () {
        if (Math.abs(this.b - this.c) < this.a && this.a < this.b + this.c) {
            return true;
        }
        else {
            return false;
        }
        // |b-c| < a < b+c;
    };
    Triangulo.prototype.ehIsoceles = function () {
        if (this.retangulo() == false)
            return false;
        if ((this.a == this.b || this.a == this.c || this.c == this.b)
            && !(this.a == this.b && this.a == this.c))
            return true;
        else {
            return false;
        }
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (this.retangulo() == false)
            return false;
        if (this.a == this.b && this.a == this.c)
            return true;
        else {
            return false;
        }
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (this.retangulo() == false)
            return false;
        if (this.a != this.b && this.a != this.c && this.b != this.c)
            return true;
        else {
            return false;
        }
    };
    return Triangulo;
}());
var trg = new Triangulo(2, 3, 4);
console.log(trg.ehEscaleno());
//# sourceMappingURL=q2_triangulo.js.map