class Veiculo {
    placa: string;
    ano: number;
}

class Carro extends Veiculo {
    modelo: string;
}

class CarroEletrico extends Carro {
    autonomiaBateria: number;
}