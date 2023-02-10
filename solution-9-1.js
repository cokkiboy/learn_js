class Pet{
   constructor(name,color){
    this.name =name;
    this.color=color;
   }
   run(){
    alert(`${this.name} is runing`);
   }
}


const pet = new Pet("치즈","yellow");

pet.run();