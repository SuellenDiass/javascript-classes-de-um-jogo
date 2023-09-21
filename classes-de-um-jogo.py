## Ele cria instâncias da classe Hero e chama o método attack() em cada instância
## self é uma convenção que se refere ao próprio objeto da classe em um método.

class Hero:
    def __init__(self, name, age, type):
        self.name = name
        self.age = age
        self.type = type
 # Dentro do método, podemos acessar os atributos da instância usando self
    def attack(self):
        ataque = ''

        if self.type == 'mago':
            ataque = 'usou magia'
        elif self.type == 'guerreiro':
            ataque = 'usou espada'
        elif self.type == 'monge':
            ataque = 'usou artes marciais'
        elif self.type == 'ninja':
            ataque = 'usou shuriken'
        else:
            ataque = 'usou um ataque desconhecido'

        print(f'O {self.type} atacou usando {ataque}')
 # Criando uma instância da classe Hero
paladino = Hero("paladino", 20, "guerreiro")
arcanoLendario = Hero("arcanoLendario", 25, "mago")
monge = Hero("monge", 30, "monge")
ninjago = Hero("ninjago", 26, "ninja")
# Chamando o método attack na instância
paladino.attack()
arcanoLendario.attack()
monge.attack()
ninjago.attack()
