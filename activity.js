  function Pokemon(name, level) {
    this.name = name;
    this.level = level;
    this.health = level * 10;
    this.attack = level * 5;
  }
  
  Pokemon.prototype.tackle = function(targetPokemon) {
    targetPokemon.health -= this.attack;
    if (targetPokemon.health <= 0) {
      this.faint(targetPokemon);
    }
  };
  
  Pokemon.prototype.faint = function(targetPokemon) {
    console.log(`${targetPokemon.name} has fainted.`);
  };
  
  const pikachu = new Pokemon("Pikachu", 10);
  const charizard = new Pokemon("Charizard", 20);
  const squirtle = new Pokemon("Squirtle", 5);
  const onix = new Pokemon("Onix", 15);
  const staryu = new Pokemon("Staryu", 8);
  
  const trainer = {
    name: "Ash",
    age: 10,
    pokemon: [pikachu, charizard, squirtle, onix, staryu],
    friends: {
      brock: ["Onix", "Geodude"],
      misty: ["Staryu", "Starmie"]
    },
    talk: function() {
      console.log("Pikachu! I choose you!");
    }
  };
  
  console.log(trainer.name);
  console.log(trainer["age"]);
  console.log(trainer.pokemon);
  console.log(trainer.friends);
  trainer.talk();
  
  const pokemonList = [pikachu, charizard, squirtle, onix, staryu];
  
  pikachu.tackle(charizard);
  console.log(charizard.health);

  console.log(pokemonList);
