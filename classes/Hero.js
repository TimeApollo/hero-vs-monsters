"use strict";

function Hero( name , identity , health ) {
  LivingThing.call( this , name , health );
  this.secretIdentity = identity;
  console.log("hey" , this)
}

Hero.prototype.constructor = Hero;

Hero.prototype.attack = function( monsterInstance ){
  let monsterDamage = Math.floor(Math.random() * 12);
  this.health -= monsterDamage;
    
  let heroDamage = Math.floor(Math.random() * 15);
  monsterInstance.health -= heroDamage;

  if( this.health <= 0 ){
    this.health = 0;
    this.isAlive = false;
  }

  if( monsterInstance.health <= 0 ){
    monsterInstance.health = 0;
    monsterInstance.isAlive = false;
  }

  console.log( 
    this.name + "\'s health (" + this.health + ") reduced by " + monsterDamage 
    + ". " + monsterInstance.name + "\'s health (" + monsterInstance.health + 
    ") reduced by " + heroDamage + ".");
}

Hero.prototype.fight = function( monstersArray ){
  monstersArray.forEach( monster => {
    while( monster.isAlive && this.isAlive ){
      this.attack( monster );
    }
  });
}