
// Part 1: Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
    }

console.log(adventurer.inventory[0]);

function allItems() {
    for (let i = 0; i <= adventurer.inventory.length; i++) {
        console.log(adventurer.inventory[i]);
    }
    
}

allItems();

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat", 
        compItems: []
    }
};

adventurer.companion = {
        name: "Frank",
        type: "Flea",
        compItems: ["small hat", "sunglasses"]
};

console.log(adventurer);

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: [],
    roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
    }
}

adventurer.roll();

// Part 2: Class Fantasy
class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
      }

roll() {
    return Math.floor(Math.random()*20) + 1;
    }
}

class Companion extends Character {
    constructor(name, type) {
      super(name); 
      this.type = type;  
    }
  }

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo", "Cat");
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin.roll());              
console.log(robin.companion.roll());   
console.log(robin.companion.companion.roll()); 


// Part 3: Class Features
class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

  class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
    }
    support(adventurer) {
      console.log(`${this.name} the ${this.type} is supporting ${adventurer.name}.`);
      adventurer.health = Math.min(adventurer.health + 10, 100); 
      console.log(`${adventurer.name} now has ${adventurer.health} health.`);
    }
  }
  
// Part 4: Class Uniforms
class Character {
    static MAX_HEALTH = 100;
    constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
      this.inventory = [];
    }
    roll() {
      return Math.floor(Math.random() * 20) + 1;
    }
}

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
  
    constructor(name, role) {
      super(name);
      if (!Adventurer.ROLES.includes(role)) {
        throw new Error(`${role} is not a valid role. Choose from: ${Adventurer.ROLES.join(", ")}`);
      }
      this.role = role;
      this.level = 1;
      this.xp = 0;
      this.stamina = 100;
      this.inventory.push("bedroll", "50 gold coins");
      this.abilities = [];
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      return super.roll();
    }
  
    fight(enemy) {
      console.log(`${this.name} is fighting ${enemy}`);
      const rollResult = this.roll();
      console.log(`${this.name} rolled a ${rollResult} in combat.`);
    }
  
    rest() {
      console.log(`${this.name} is resting...`);
      this.health = Math.min(this.health + 20, Character.MAX_HEALTH);
      this.stamina = 100;
      console.log(`${this.name} now has ${this.health} health and ${this.stamina} stamina.`);
    }
  
    gainXP(amount) {
      this.xp += amount;
      if (this.xp >= this.level * 100) {
        this.levelUp();
      }
    }
  
    levelUp() {
      this.level += 1;
      this.health = Character.MAX_HEALTH;
      console.log(`${this.name} leveled up to ${this.level}!`);
    }
  }  

// Part 5: Gather your Party
class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    generateMultiple(names) {
        names.forEach(name => this.generate(name));
      }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
    removeByName(name) {
        const index = this.adventurers.findIndex((a) => a.name === name);
        if (index !== -1) {
          return this.adventurers.splice(index, 1)[0];
        } else {
          console.log(`${name} not found in the adventurers list.`);
          return null;
        }
  }
  
  listAdventurers() {
    console.log("Adventurers:");
    this.adventurers.forEach(adventurer => console.log(adventurer.name));
  }
}

  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");
  healers.generateMultiple(["Lynda", "Maria", "Tessica"]);
  healers.listAdventurers(); 
  const foundAdventurer = healers.findByName("Lynda");
  console.log(foundAdventurer);
  healers.removeByName("Tessica");  
    healers.listAdventurers();

// Part 6: Developing Skills

// Part 7: 