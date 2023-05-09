let trainer = {
    name: "Ash Ketchum",
    age: 10,
    pokemon: [],
    friends: {
      brock: ["Onix", "Geodude"],
      misty: ["Staryu", "Starmie"]
    },
    talk() {
      console.log("Pikachu! I choose you!");
    }
  };
  
  function Pokemon(name, level) {
    this.name = name;
    this.level = level;
    this.health = level * 5;
    this.attack = level * 2;
  }
  
  let pikachu = new Pokemon("Pikachu", 3);
  let charmander = new Pokemon("Charmander", 5);
  let squirtle = new Pokemon("Squirtle", 2);
  
  trainer.pokemon.push(pikachu);
  trainer.pokemon.push(charmander);
  trainer.pokemon.push(squirtle);

  Pokemon.prototype.tackle = function(targetPokemon) {
    targetPokemon.health -= this.attack;
    if (targetPokemon.health <= 0) {
      this.faint(targetPokemon);
    }
  };
  
  Pokemon.prototype.faint = function(targetPokemon) {
    console.log(targetPokemon.name + " has fainted.");
  };
  
  pikachu.tackle(squirtle);
  
  console.log(trainer);
  