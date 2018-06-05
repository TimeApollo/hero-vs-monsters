"use strict";

function Monster( name , classification , health ){
    LivingThing.call( this , name , health );
    this.classification = classification;
}

