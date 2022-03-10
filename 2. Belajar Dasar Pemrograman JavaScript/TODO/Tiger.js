class Tiger {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
  
    growl() {
      return 'grrrrrrr';
    }
}
 
// make sure to export your class so that it can be used elsewhere
export {Tiger};

// export the value of the class
// export default Tiger;