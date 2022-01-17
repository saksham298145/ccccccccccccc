class Tank{
    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.image=loadImage("tank.png")
    }
display(){
    push()
    translate(this.x,this.y)
    imageMode(CENTER)
    image(this.image,0, 0, this.width, this.height)
    pop()
}
}