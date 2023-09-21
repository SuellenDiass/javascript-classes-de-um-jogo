
// classe e dentro dela uma função com propriedades
class hero{
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
// dando comportamento para classe com metodos que é uma função(dentro de classe não precisa utilizar a palavra function)
attack() {
    let ataque = '';

    switch (this.type) {
        case 'mago':
            ataque = 'magia';
            break;
        case 'guerreiro':
            ataque = ' espada';
            break;
        case 'monge':
            ataque = ' artes marciais';
            break;
        case 'ninja':
            ataque = 'shuriken';
            break;
        default:
            ataque = ' um ataque desconhecido';
    }

    console.log(`O ${this.type} atacou usando ${ataque}`);
}
}
// objetos que usa a classe instancia a classe
let paladino = new hero("paladino", 20, "guerreiro");
let arcanoLendario = new hero("arcanoLendario", 25, "mago");
let monge = new hero("monge", 30, "monge");
let ninjago = new hero("ninjago", 26, "ninja");

//chamar os métodos nas instâncias da classe 
/* O método attack() verifica o tipo do herói e atribui o ataque apropriado com base nesse tipo. Quando você chama o método attack() em cada instância do herói, ele imprimirá a mensagem correta de acordo com o tipo.*/

paladino.attack();
arcanoLendario.attack();
monge.attack();
ninjago.attack();







