var siglas;
(function (siglas) {
    siglas[siglas["PI"] = 0] = "PI";
    siglas[siglas["CE"] = 1] = "CE";
    siglas[siglas["MA"] = 2] = "MA";
})(siglas || (siglas = {}));
//imprimindo os conteudos
for (var i = 0; i < 3; i++) {
    console.log(siglas[i]);
}
//ao chamar somente o enum, ele imprime os índices
console.log(siglas);
//# sourceMappingURL=Q03.js.map