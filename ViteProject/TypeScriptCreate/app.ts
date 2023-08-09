// Önce bir index.html oluşturuyoruz. ! yapip kisayol ile devam ederiz. 
// Bunu <script src="app.js"></script> body nin içine yazariz.
// Terminale npm init yazariz.
// Terminale npm install --save-dev lite-server yazariz.
// Package.json içerisindeki scripts e "start":"lite-server" yazariz.
// Terminale npm start yazariz
// Güncellemelerdede farkli terminalde tsc app.ts -w yazariz.

// Hata alırsak eğer npm install -g typescript cmd ye yazabiliriz.

var Name:string = "furkan";
var Soyad: string ="şahin";
var add: string = `Adi: ${Name} ve Soyadi: ${Soyad}`;
console.log(add);

var dizi: string[] = ["furkan","şahin","hey"];
var dizi2 = ["furkan","şahin",5,15,true];
console.log(dizi,dizi2);

for(var i=0 ; i<dizi.length; i++ ) {
    console.log(dizi[i]);
}

var Sayi = [10,20,30];
for(var item of Sayi) {
    console.log(item);
}

var tuple: [string,number][] = [["frkn",15],["shn",20]];
console.log(tuple);

var char: {
    firstName: string,
    lastName: string,
    age: number
} = {
    firstName: "Furkan",
    lastName: "Şahin",
    age: 22
}
console.log(char);

var changed: string | number | boolean;
changed="FURKAN";
console.log(changed);

var herşeyOlabilir: any = 5;
herşeyOlabilir = "şahin";
console.log(herşeyOlabilir);

var x = 15;
var y = 20;
x>y ? console.log("x y den büyüktür.") : console.log("y x den büyüktür.");

var day = 5;
switch (day) {
    case 0:
        console.log("Pazartesi");
    break;
    case 1:
        console.log("Sali");
    break;
    case 2:
        console.log("Çarşamba");
    break;
    case 3:
        console.log("Perşembe");
    break;
    case 4:
        console.log("Cuma");
    break;
    default:
        console.log("Böyle bir gün yok.");
        break;
    }

var furkann = 5;
while(furkann < 10) {
    console.log(furkann);
    furkann++;
if(furkann==10)
    break;
}

var sahinn = 500;
do {
    console.log(sahinn);
} while (sahinn<500)

// Create a function
function Add (a:number,b:number) {
    return a+b
}
var newAdd = Add(5,10);
console.log(newAdd);

// Create an Arrow Function
var Add1 = (a:any,b:any) => {
    return a+b
}
var newAdd1 = Add1(5,15);
console.log(newAdd1);

function birlestir(message:string,...names:string[]) {
    console.log(message+ " " + names.join(" , "));
}
birlestir("Merhaba","Can","Eyüp");

// Class Yapısı

// Aşşağıdaki tanımladığım değerlerin önüne birşey koymasssam otamatik public olur ve heryerde kullanabiliriz.
// Private koyarsam sadece o class da kullanabilirim.
// Readonly koyarsam sadece o değeri esas alır aşşağıda yeni değer atarsan kabul etmez.

class Sahin {
    id:number;
    firstName:string;
    lastName:string;

    constructor(newID:any,newFirstName:any,newLastName:any) {
        this.id=newID;
        this.firstName=newFirstName;
        this.lastName=newLastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
var newFurkan = new Sahin(15,"furkan","sahin");
console.log(newFurkan);
console.log(newFurkan.getFullName());

// Interface

interface Person {
    firstName: string;
    lastName: string;
    middleName?: string
}
function getFullName (person: Person) {
    if(person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`
    }
        return `${person.firstName} ${person.lastName}`
}
var person = {
    firstName: "ahmet",
    lastName: "şahin",
    middleName: "--"
}
console.log(getFullName(person));

// Interface 2.örnek

interface Sahinler {
    Name: string;
    Change: boolean
}
function Sahinnn (Sahinler:any) {
    return Sahinler.Change ? Sahinler.Name.toLocaleUpperCase() : Sahinler.Name.toLocaleLowerCase();
}
console.log(Sahinnn({
Name: "murat",
Change: true
}));

// Extends

interface Deneme {
    Name: string;
    Numbers: number
}
interface newDeneme extends Deneme {
    lastName: string
}
var taked: newDeneme = {
    Name:"React",
    Numbers:5,
    lastName:"JS"
}
console.log(taked);

// Intersection

interface Deneme1 {
    Name: string;
    Numbers: number
}
interface Deneme2 {
    lastName: string;
    Age: number
}
type frkNN = Deneme1 & Deneme2;
var newFrkn: frkNN = {
    Name: "kahkaha",
    Numbers: 123,
    lastName: "asdasd",
    Age: 22
}
console.log(newFrkn);

// type Guard

type tip = string | number;
function adds(a:tip,b:tip) {
    if(typeof a === "number" && typeof b === "number")
        return a+b
    if(typeof a === "string" && typeof b === "string")
        return `${a} ${b}`
    throw new Error("Lütfen doğru formatta data gönderin.");
}
console.log(adds("furkan","sahin"));

// Generics
// İstersen any koyarak yaparsın, istersen <isim> olarak yaparsın.

var diziler = [5,3,2,1];
function handleDiziler<T>(items: T[]): T {
    const randomIndex = Math.floor(Math.random()* items.length);
    return items[randomIndex];
}
console.log(handleDiziler<number>(diziler));

