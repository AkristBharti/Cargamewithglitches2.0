class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement('h2' );
        this.reset = createButton('Reset');
        this.title = createElement('h2');
        this.rank = createElement('h1');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
        this.rank.hide();    }
    display(){
        this.rank.hide();
        this.title.html("Racing Multiplayer Game");
        this.reset.position(displayWidth/2 + 270, displayHeight/2-500);
        this.title.position(displayWidth/2, displayHeight/2);
        this.input.position(displayWidth/2, displayHeight/2+50);
        this.button.position(displayWidth/2-350, displayHeight/2+80);
        this.button.mousePressed(() =>{
            this.input.hide();
            this.title.hide();
            this.button.hide();
            player.name = this.input.value();
            playercount +=1;
            player.index = playercount;
            player.update();
            player.updatecount(playercount);
            this.greeting.html("Welcome "+ player.name);
            this.greeting.position(200, 250);
            
        });
        this.reset.mousePressed(()=>{
            player.updatecount(0);
            game.update(0);
        });

    }
}