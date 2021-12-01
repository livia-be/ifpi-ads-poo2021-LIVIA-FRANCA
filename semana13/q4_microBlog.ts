class Postagem {
    id: number;
    texto: string;
    likes: number;

    constructor(id: number, texto: string) {
        this.id = id;
        this.texto = texto;
    }
    curtir(likes: number): void {
        this.likes = likes;
    }
    toString(): string {
        var log = this.texto;
        return log + "\nLikes: " + this.likes.toString();
    }
}

class Microblog {
    arrayPosts: Postagem[] = [];

    postar(post: Postagem): void {
        if (this.consultarPorIndice(post.id) == -1)
            this.arrayPosts.push(post);
    }

    consultarPorIndice(numero: number): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.arrayPosts.length; i++) {
            if (this.arrayPosts[i].id == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }

    excluir(numero: number): void {
        let indice: number = this.consultarPorIndice(numero);

        for (let i: number = indice; i < this.arrayPosts.length; i++) {
            this.arrayPosts[i] = this.arrayPosts[i + 1];
        }
        this.arrayPosts.pop();
    }

    curtir(likes: number, id: number): void {
        if (this.consultarPorIndice(id) != -1)
            this.arrayPosts[this.consultarPorIndice(id)].curtir(likes);
        else { console.log("Erro ao curtir postagem de id", id, ": Post inexistente") }
    }

    maisCurtida(): Postagem {
        var maior = 0, maiorP;
        for (let post of this.arrayPosts) {
            if (post.likes > maior) {
                maior = post.likes;
                maiorP = post;
            }
        }
        return maiorP;
    }

    toString(): string {
        let logTotal: string = "";
        for (let post of this.arrayPosts) {
            logTotal += post.toString() + "\n";
        }
        return logTotal;
    }

    imprimirTodosPosts(): void {
        console.log(this.arrayPosts)
    }
}
let blog: Microblog = new Microblog();

let post1: Postagem = new Postagem(1, "texto1");
blog.postar(post1);
let post2: Postagem = new Postagem(2, "texto2");
blog.postar(post2);
let post3: Postagem = new Postagem(3, "texto3");
blog.postar(post3);
let post4: Postagem = new Postagem(4, "texto4");
blog.postar(post4);
blog.curtir(250, 1);
blog.curtir(7474, 2);
blog.curtir(555555, 3);
blog.curtir(456, 4);

console.log(blog.toString());
//blog.imprimirTodosPosts();
