const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
    get appetizers (){
      return this._courses.appetizers
    },
    get mains (){
      return this._courses.mains
    },
    get desserts (){
      return this._courses.desserts
    },
    set appetizers (appetizers){
     this._courses.appetizers = appetizers
    },
    set mains (mains){
      this._courses.mains = mains
    },
    set dessert (desserts){
      this._courses.desserts = desserts
    },
    get courses (){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      }
    },
    addDishToCourse (courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice
      };
    return this._courses[courseName].push(dish);
    },
getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const random = Math.floor(Math.random() * dishes.length);
      return dishes[random];
    },
 generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
return `Your menu is - ${appetizer.name}, ${main.name} and ${dessert.name}. Total price is ${totalPrice}`;
   }
  };


menu.addDishToCourse('appetizers', 'water', 1);

menu.addDishToCourse('appetizers', 'salad', 5);

menu.addDishToCourse('appetizers', 'lemon', 1);

menu.addDishToCourse('mains', 'steak', 10);

menu.addDishToCourse('mains', 'monasterian',10);

menu.addDishToCourse('mains', 'kotleta', 6);

menu.addDishToCourse('desserts', 'waffle', 8);

menu.addDishToCourse('desserts', 'vulkan', 9);

menu.addDishToCourse('desserts', 'truffle', 6);


let meal = menu.generateRandomMeal();
console.log(meal)
