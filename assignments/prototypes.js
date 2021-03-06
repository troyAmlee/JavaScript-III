/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct 
  inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/





function Gameobject(Object) {         
  this.createdAt = Object.createdAt;
  this.dimensions = Object.dimensions;
  
}




function CharacterStats(Attributes) {
  this.hp = Attributes.hp;
  this.name = Attributes.name;
//   Parent.call(this, childAttributes);
//   this.toy = childAttributes.toy;
// }
  Gameobject.call(this, Attributes);


}

CharacterStats.prototype = Object.create(Gameobject.prototype);

//Child.prototype = Object.create(Parent.prototype);


function Humanoid(Character) {
  this.faction = Character.faction;
  this.weapons = Character.weapons;
  this.language = Character.language;
  CharacterStats.call(this, Character);

  
}


Humanoid.prototype = Object.create(CharacterStats.prototype);


function Hero (Good) {                                
                         
                                                      //*createdAt
                                                      //*Dimensions
                                                      //*hp
                                                      //*name
                                                      //*faction
                                                      //*weapons
                                                      //*language
                                                      //Attacks math function: use 
                                                      //Defense if math function
 this.summoning = Good.summoning;                      //Summoning speech
 this.magic = Good.magic;                              //Magic                      
 this.items = Good.items;                             //Items array of items
  Humanoid.call(this, Good);                               
} 

Hero.prototype = Object.create(Humanoid.prototype);  


function Villian (Evil) {
  this.summoning = Evil.summoning;                     
  this.magic = Evil.magic;                                                  
  this.items = Evil.items;
  Humanoid.call(this, Evil);
  console.log(this.hp[0]);
  
}

Gameobject.prototype.destroy = function(){
 return `${this.name} was removed from the game`;
}

CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage!`
}

Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`
}

Hero.prototype.attack = function(){
  let x = assassin.hp;
  let newhp = x.map(health => health - Math.random()*13);
  console.log(`${assassin.name} took ${assassin.hp[0] - newhp[0]} points of damage from ${paladin.name}!`)
  if (newhp <= 0){
    console.log(`"UUUAAAAAAAAAAH!!!" ${assassin.name} is dead... ${this.name} is the victor.`);
  }
  return assassin.hp = newhp;
}

Villian.prototype.summon = function(){
  let x = paladin.hp;
  if (assassin.hp[0] <= 0){
    return `${assassin.name} cannot summon when he's dead.`
    
  }
  
    console.log(`${assassin.name} summons ${assassin.summoning[0]} forth, a dark portal opens from the Earths core`);
    console.log(`${assassin.summoning[0]} hurls a gravity distortion field at ${paladin.name}`);
    let newhp = x.map(health => health - Math.random()*50);
    console.log(`${paladin.name} took ${paladin.hp[0] - newhp[0]} points of damage from ${assassin.name}'s summon!`);
    paladin.hp = newhp;
  
  if (paladin.hp[0] <= 0){
    console.log(`"Ugh!!!" ${paladin.name} has been torn apart... ${this.name} is the victor.`);
  }

    return paladin.hp = newhp;
}







// const counter = () => {
//   let x = 0
  
//   function counting (){
//     ++x;
//     return x;
    
//   }

//   return counting;

  
// }


// Test you work by uncommenting these 3 objects and the list of console logs below:
const assassin = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 6,
    height: 6,
  },
  hp: [35,],
  name: 'Shadow',
  faction: 'Horde',
  weapons:["Duel Daggers",],
  language: 'Javascript',
  summoning: ['Diablo',],
  magic: 'Vanish',
  items: ['health potion', 'magic ether', 'poison herbs', 'revive potion',],
})

  const paladin = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 3,
  },
  hp: [40,],
  name: 'Akatosh',
  faction: 'Alliance',
  weapons:["Two-Handed Mace",],
  language: 'Common Tongue',
  summoning: 'Alexander',
  magic: 'lightning',
  items: ['health potion', 'magic ether', 'herbs', 'revive potion',],

  })

console.log(paladin);

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(paladin.attack());
  console.log(paladin.attack());
  console.log(paladin.attack());
  console.log(paladin.attack());
  console.log(paladin.attack());
  console.log(assassin.summon());
 
  

  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

