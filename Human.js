class Human {
    constructor(name) {
        this.name = name;
        this.avt = 'default.jpg';
        this.damage = 0;
        this.hp = 100;
    }

    attack(enemy){
        this.damage = this.getDamage(5,15);
        let critTxt = '';
        if(this.isCritical()){
            this.damage *= 3;
            critTxt = " CRITICAL!"
        }
        enemy.takeHit(this.damage);
        alert(this.name + " attack "+enemy.name +" with "+this.damage+" damage" + critTxt);
    }

    takeHit(damage){
        this.hp -= damage;
        if(this.hp <= 0){
            alert(this.name + " lose");
        }
    }
    getDamage(min, max){
        return Math.floor(Math.random()*(max-min))+min;
    }

    isCritical(){
        let rand = Math.floor(Math.random()*10);
        return rand < 5;

    }


}
