// npm init , npm install --save-dev lite-server
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Name = "furkan";
var Soyad = "şahin";
var Age = 22;
var Change = true;
console.log(Name);
var add = "Adi: ".concat(Name, " ve Soyadi: ").concat(Soyad);
console.log(add);
var dizi = ["furkan", "şahin", "hey"];
console.log(dizi);
var dizi2 = ["furkan", "şahin", 5, 15, true];
console.log(dizi2);
for (var i = 0; i < dizi.length; i++) {
    console.log(dizi[i]);
}
var tuple = [["frkn", 15], ["shn", 20]];
console.log(tuple);
console.log("--------------------------------------------");
var char = {
    firstName: "Furkan",
    lastName: "Şahin",
    age: 22
};
console.log(char);
var changed;
changed = "FURKAN";
console.log(changed);
var herşeyOlabilir = 5;
herşeyOlabilir = "şahin";
console.log(herşeyOlabilir);
var dizi3 = ["furkan", 3, 2, 1, true];
console.log(dizi3);
var x = 15;
var y = 20;
x > y ? console.log("x y den büyüktür.") : console.log("y x den büyüktür.");
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
console.log("------------------------------------------------");
for (var i = 0; i < 3; i++) {
    console.log("İ değerim", i);
}
var Sayi = [10, 20, 30];
for (var _i = 0, Sayi_1 = Sayi; _i < Sayi_1.length; _i++) {
    var item = Sayi_1[_i];
    console.log(item);
}
var furkann = 5;
while (furkann < 10) {
    console.log(furkann);
    furkann++;
    if (furkann == 10)
        break;
}
var sahinn = 500;
do {
    console.log(sahinn);
} while (sahinn < 500);
//function
function Add(a, b) {
    return a + b;
}
var newAdd = Add(5, 10);
console.log(newAdd);
//arrow function
var Add1 = function (a, b) {
    return a + b;
};
var newAdd1 = Add1(5, 15);
console.log(newAdd1);
function birlestir(message) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(message + " " + names.join(", "));
}
birlestir("Merhaba", "Can", "Osman");
console.log("------------------------------------------------");
var Sahin = /** @class */ (function () {
    function Sahin(newID, newFirstName, newLastName) {
        this.id = newID;
        this.firstName = newFirstName;
        this.lastName = newLastName;
    }
    Sahin.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Sahin;
}());
var newFurkan = new Sahin(15, "furkan", "sahin");
console.log(newFurkan);
console.log(newFurkan.getFullName());
function getFullName(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "ahmet",
    lastName: "şahin",
    middleName: "--"
};
console.log(getFullName(person));
console.log("---------------------------------------------");
function Sahinnn(Sahinler) {
    return Sahinler.Change ? Sahinler.Name.toLocaleUpperCase() : Sahinler.Name.toLocaleLowerCase();
}
console.log(Sahinnn({
    Name: "murat",
    Change: true
}));
var taked = {
    Name: "React",
    Numbers: 5,
    lastName: "JS"
};
console.log(taked);
var newFrkn = {
    Name: "kahkaha",
    Numbers: 123,
    lastName: "asdasd",
    Age: 22
};
console.log(newFrkn);
function adds(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    if (typeof a === "string" && typeof b === "string")
        return "".concat(a, " ").concat(b);
    throw new Error("Lütfen doğru formatta data gönderin.");
}
console.log(adds("furkan", "sahin"));
// class a da bidaha bakarsan daha iyi olabilir gibi.
// Generics de istersen any koyarak yaparsın istersen <isim> olarak yaparsın sana kalmış any çok önerilmiyor.
var diziler = [5, 3, 2, 1];
function handleDiziler(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(handleDiziler(diziler));
// ------
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
console.log(merge({ name: "furkan" }, { age: 22 }));
// npm start yap önce sonra cmd den devam.
