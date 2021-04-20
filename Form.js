class Form {

    constructor() {
      
    }
    display(){
    var  input = createInput("Please enter your time(IN HOURS)");
    var information = createInput("Goal");
    var button = createButton('SUBMIT');
    
    input.position(width/2, height/2);
    information.position(width/2, height/2+20);
    button.position(width/2,height/2+100);
        
    button.mousePressed(()=>{
        information.hide();
        input.hide();
        time1 =input.value();
        gameState="homepage"
    console.log(time1)
            
        } )
    }
    hide(){
        this.information.hide();
        this.button.hide();
        this.input.hide();
        
      }
}
