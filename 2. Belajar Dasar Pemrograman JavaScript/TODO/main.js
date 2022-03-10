// import Tiger and Wolf classes from TODO\tiger.js and TODO\wolf.js
import Tiger from './tiger.js';
import Wolf from './wolf.js';

const fight = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
      return tiger.growl();
    }
    if (wolf.strength > tiger.strength) {
      return wolf.howl();
    }
    return 'Harimau dan serigala sama-sama kuat!';
  };
  
  const myTiger = new Tiger();
  const myWolf = new Wolf();
  
  const result = fight(myTiger, myWolf);

// export fight function, myTiger, myWolf, result
export { fight, myTiger, myWolf, result };