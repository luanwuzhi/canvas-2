function Lining(opt){
    this.cow=opt.cow;
    this.rol=opt.rol;
    this.ctx=document.getElementById("canvass").getContext("2d");
    this.step=100;
    this.inde=0;
    this.indes=0;
    this.Drawline();
    this.point();
}
Lining.prototype={
    Drawline:function(){
        var that=this
        /*y轴*/
        this.ctx.beginPath();
        this.ctx.strokeStyle="black";
        this.ctx.moveTo(20,300);
        this.ctx.lineTo(750,300);
        this.ctx.stroke();
        this.ctx.closePath();
        /*x轴*/
        this.ctx.beginPath();
        this.ctx.strokeStyle="black";
        this.ctx.moveTo(20,0);
        this.ctx.lineTo(20,300);
        this.ctx.stroke();
        this.ctx.closePath();
        /*x轴箭头*/
        this.ctx.beginPath();
        this.ctx.strokeStyle="black";
        this.ctx.moveTo(10,15);
        this.ctx.lineTo(20,0);
        this.ctx.lineTo(30,15);
        this.ctx.stroke();
        this.ctx.closePath();
        /*x轴箭头*/
        this.ctx.beginPath();
        this.ctx.strokeStyle="black";
        this.ctx.moveTo(735,290);
        this.ctx.lineTo(750,300);
        this.ctx.lineTo(735,310);
        this.ctx.stroke();
        this.ctx.closePath();

        /*折线*/
        this.ctx.beginPath();
        this.ctx.strokeStyle="blue";
        this.ctx.moveTo(20,300);
        setInterval(function(){
            that.ctx.lineTo((that.inde+1)*that.step,that.rol[that.inde]);
            that.ctx.strokeText(that.cow[that.inde],(that.inde+1)*that.step,320);
            if(that.inde>4){
                that.inde=4;
            }
            that.inde++;
            that.ctx.stroke();
        },300)
        this.ctx.closePath();
        this.ctx.save();
    },
    point:function(){
        var that=this;
        setInterval(function(){
            that.ctx.beginPath();
            that.ctx.fillStyle="red";
            that.ctx.arc((that.indes+1)*that.step,that.rol[that.indes],5,0,2*Math.PI,false);
            that.ctx.closePath();
            that.ctx.fill();
            if(that.indes>4){
                that.indes=4;
            }
            that.indes++;
        },300)
    }
}