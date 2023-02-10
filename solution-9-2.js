class Pet{
    constructor(name,color){
     this.name =name;
     this.color=color;
    }
    run(){
     
    }
 }
 
 
 const pet = new Pet("치즈","yellow");
 
 pet.run();

 class Pet extends Cat{
     constructor(name,color,breed){
        super(name,color);
        this.breed=breed;
     }
     viewInfo(){
        alert(`이름:${this.name},품종:${this.breed},색깔:${this.color}`);
     }
 }
  const cat = new Cat("보리","코숏","흰색");
  cat.viewInfo();