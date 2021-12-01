var Postagem = /** @class */ (function () {
    function Postagem(id, texto) {
        this.id = id;
        this.texto = texto;
    }
    Postagem.prototype.curtir = function (likes) {
        this.likes = likes;
    };
    Postagem.prototype.toString = function () {
        var log = this.texto;
        return log + "\nLikes: " + this.likes.toString();
    };
    return Postagem;
}());
var Microblog = /** @class */ (function () {
    function Microblog() {
        this.arrayPosts = [];
    }
    Microblog.prototype.postar = function (post) {
        if (this.consultarPorIndice(post.id) == -1)
            this.arrayPosts.push(post);
    };
    Microblog.prototype.consultarPorIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this.arrayPosts.length; i++) {
            if (this.arrayPosts[i].id == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Microblog.prototype.excluir = function (numero) {
        var indice = this.consultarPorIndice(numero);
        for (var i = indice; i < this.arrayPosts.length; i++) {
            this.arrayPosts[i] = this.arrayPosts[i + 1];
        }
        this.arrayPosts.pop();
    };
    Microblog.prototype.curtir = function (likes, id) {
        if (this.consultarPorIndice(id) != -1)
            this.arrayPosts[this.consultarPorIndice(id)].curtir(likes);
        else {
            console.log("Erro ao curtir postagem de id", id, ": Post inexistente");
        }
    };
    Microblog.prototype.maisCurtida = function () {
        var maior = 0, maiorP;
        for (var _i = 0, _a = this.arrayPosts; _i < _a.length; _i++) {
            var post = _a[_i];
            if (post.likes > maior) {
                maior = post.likes;
                maiorP = post;
            }
        }
        return maiorP;
    };
    Microblog.prototype.toString = function () {
        var logTotal = "";
        for (var _i = 0, _a = this.arrayPosts; _i < _a.length; _i++) {
            var post = _a[_i];
            logTotal += post.toString() + "\n";
        }
        return logTotal;
    };
    Microblog.prototype.imprimirTodosPosts = function () {
        console.log(this.arrayPosts);
    };
    return Microblog;
}());
var blog = new Microblog();
var post1 = new Postagem(1, "texto1");
blog.postar(post1);
var post2 = new Postagem(2, "texto2");
blog.postar(post2);
var post3 = new Postagem(3, "texto3");
blog.postar(post3);
var post4 = new Postagem(4, "texto4");
blog.postar(post4);
blog.curtir(250, 1);
blog.curtir(7474, 2);
blog.curtir(555555, 3);
blog.curtir(456, 4);
console.log(blog.toString());
//blog.imprimirTodosPosts();
//# sourceMappingURL=q4_microBlog.js.map