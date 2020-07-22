class Lingkaran{
    constructor(p, r){

        this.phi = p
        this.jarijari = r
    }

    luas = () => {
        return this.phi * this.jarijari * this.jarijari
    } 

    keliling = () => {
        return 2 * this.phi * this.jarijari
    }
}

class Bola extends Lingkaran{
    constructor(p, r){
        super(p, r)
    }

    Luas = () => {
        return 4 * this.phi * this.jarijari ** 2
    }

    Volume = () => {
        return 4 / 3 * this.phi * this.jarijari ** 3
    }
}

class Kerucut extends Lingkaran{
    constructor(p,r,t,s){
        super(p,r)
        this.tinggi = t
        this.pelukis = s
    }

    Volume = () => {
        return 1 / 3 * this.phi * this.jarijari * this.tinggi
    }

    Luas = () => {
        return this.phi * this.jarijari * ( this.pelukis + this.jarijari)
    }

    Selimut = () => {
        return this.phi * this.jarijari * this.pelukis
    }
}

class Tabung extends Lingkaran{
    constructor(p,r,t){
        super(p,r)
        this.tinggi = t
    }

    Volume = () => {
        return this.phi * this.jarijari ** 2 * this.tinggi
    }

    Luas = () => {
        return 2 * this.phi * this.jarijari * (this.jarijari + this.tinggi)
    }

    Selimut = () => {
        return 2 * this.phi * this.jarijari * this.tinggi
    }
}

let bola = new Bola(3.14, 15)
console.log("Volume Bola = " + bola.Volume())
console.log("Luas Bola = " + bola.Luas())

let kerucut = new Kerucut(3.14, 10, 40, 50)
console.log("Volume Kerucut = " + kerucut.Volume())
console.log("Luas Permukaan Kerucut = " + kerucut.Luas())
console.log("Luas Selimut Kerucut = " + kerucut.Selimut())

let tabung = new Tabung(3.14, 7.5, 50)
console.log("Volume Tabung = " + tabung.Volume())
console.log("Luas Permukaan Tabung = " + tabung.Luas())
console.log("Luas Selimut Tabung = " + tabung.Luas())