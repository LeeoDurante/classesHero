
class Hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    atacar() {
      let attack = '';
      switch (this.type) {
        case 'mago':
            attack  = 'usou magia';
          break;
        case 'guerreiro':
            attack  = 'usou espada';
          break;
        case 'monge':
            attack  = 'usou artes marciais';
          break;
        case 'ninja':
            attack  = 'usou shuriken';
          break;
        default:
            attack  = 'usou um ataque desconhecido';
          break;
      }
  
      console.log(`O ${this.type} atacou usando ${attack}`);
    }
  }
  

  const heroi = new Hero('Herói', 25, 'mago');
  heroi.atacar();
  
  const outroHeroi = new Hero('Outro Herói', 30, 'guerreiro');
  outroHeroi.atacar();
  