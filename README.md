# adityaTugas_5.gihub.io

### _JavaScript - Object Oriented Programming_

##### - Class
###### * _Class di JavaScript diperkenalkan pada ECMAScript 6 seperti pemanis dari prototype-based JavaScript yang sudah ada. Syntax dari class tidak menggunakan model object-oriented inheritance yang baru_
````
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

// Usage:
let user = new User("John");
user.sayHi();
````

##### - Static Method
###### * _Kata kunci statis mendefinisikan metode statis untuk suatu class. static method tidak dipanggil pada instance kelas. Sebaliknya, mereka dipanggil di class itu sendiri_
````
class StaticMethodCall {
  static staticMethod() {
    return 'Static method has been called';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' from another static method';
  }
}
StaticMethodCall.staticMethod(); 
StaticMethodCall.anotherStaticMethod();
````

##### - Method Chaining
###### * _Metode Chaining, juga dikenal sebagai Cascading, artinya dapat berulang kali memanggil satu metode demi satu pada suatu objek, dalam lanjutan satu baris kode_
````
class Car {
   constructor() {
      this.wheels = 4
      this.doors = 4
      this.topSpeed = 100
      this.feulCapacity = "400 Litres"
   }
   setWheels(w) {
      this.wheels = w
   }
   setDoors(d) {
      this.doors = d
   }
   setTopSpeed(t) {
      this.topSpeed = t
   }
   setFeulCapacity(fc) {
      this.feulCapacity = fc
   }
   displayCarProps() {
      console.log(`Your car has ${this.wheels} wheels,\
      ${this.doors} doors with a top speed of ${this.topSpeed}\
      and feul capacity of ${this.feulCapacity}`)
   }
}
let sportsCar = new Car();
sportsCar.setDoors(2)
sportsCar.setTopSpeed(250)
sportsCar.setFeulCapacity("600 Litres")
sportsCar.displayCarProps()
````

##### - Encapsulation
###### * _adalah mengisolisasi source code supaya terbagi dalam blok-blok di mana programmer lain tidak perlu memikirikan detail dari blok-blok source code_
````
class Student  
  {  
    constructor()  
    {  
       let name;  
       let marks;  
    }  
        getName()  
        {  
          return this.name;  
        }  
      setName(name)  
      {  
        this.name=name;  
      }  
        
      getMarks()  
      {  
        return this.marks;  
      }  
    setMarks(marks)  
    {  
      this.marks=marks;  
    }  
  
    }  
    const stud=new Student();  
     stud.setName("John");  
     stud.setMarks(80);  
     console.log(stud.getName()+" "+stud.getMarks());  
````

##### - Inheritence
###### * _Dengan fitur inheritance maka method-method atau function-function dalam object/class dari parent dapat diturunkan ke children/sub class. Dengan inheritance ini maka method-method yang ada pada parent dapat digunakan oleh anak-anaknya atau sub objectnya._
````
//Orang Constructor
function Orang(nama,umur){
	this.nama = nama;
	this.umur = umur;
}
Orang.prototype.hitungLahir = function()
{
	let thn = 2019 - this.umur;
	return thn;			
}
Orang.prototype.salam = function()
{
	let salamku = 'Yth ' + this.nama;
	return salamku;
}

//Siswa Constructor
function Siswa(nama,umur,kelas){
	Orang.call(this,nama,umur);
	this.kelas = kelas;
}
//inherit prototype dari Orang
Siswa.prototype = Object.create(Orang.prototype);
//overiding 
Siswa.prototype.salam = function()
{
	let salamku = 'Hai ' + this.nama;
	return salamku;
}

let andi = new Orang('Andi',30);
console.log('Andi Obj:',andi);
console.log('Andi lahir pada tahun:', andi.hitungLahir());
console.log('Salam:', andi.salam());
````

##### - Polymorphism
###### * _ Pada polymorhism ada object-object parent yang mempunyai method dan property yang diturunkan. Method atau property dari object-object parent ini dapat dipakai oleh object-object turunannya ataupun diganti sesuai dengan kebutuhannya_
````
class people{
    constructor(name){
        this.name = name;
    }
    greet(){
        return "My Name is "+this.name;
    }
}

class person extends people {
    constructor(name) {
        super(name);        
    }
}

const tes = new person("Andi");
console.log(tes.greet());
````

### _JavaScript - Design Pattern_

##### - Design Pattern
###### * _merupakan suatu metode untuk membantu mensolusikan permasalahan-permasahan yang umumnya berulang atau memiliki pola dalam pengembangan software.  Design Pattern bukan merupakan sebuah metode yang langsung dapat diubah menjadi kode program melainkan sebuah pola dasar atau template dari sebuah cara untuk menyelesaikan suatu permasalahan dalam situasi yang berbeda-beda_
````
1. Creational Pattern (Pola Pembuatan) 
   Creational Pattern merupakan pola yang digunakan untuk mensolusikan permasalahan yang ditemui dalam kejadian pembuatan suatu instance atau object. Creational Pattern dibagi menjadi 5 macam yaitu:
   ♦ Factory Method
   ♦ Prototype 
   ♦ Abstract Factory
   ♦ Builder
   ♦ Singleton
 
2. Behavioral Pattern (Pola Perilaku)
   Behavioral Pattern merupakan pola yang digunakan untuk mensolusikan permasahalan yang ditemui dalam komunikasi antar object-object. Behavioral Pattern dibagi menjadi 11 macam, yaitu:
   ♦ Template Method
   ♦ Strategy
   ♦ Command
   ♦ Memento
   ♦ Mediator
   ♦ State
   ♦ Observer
   ♦ Iterator
   ♦ Chain of Responsibility
   ♦ Interpreter
   ♦ Visitor
 
3. Structural Pattern (Pola Struktural)
   Structural Pattern merupakan pola yang digunakan untuk mensolusikan permasalahan yang ditemui dalam pengaturan komposisi class dan object. Structural Pattern dibagi menjadi structural class instantiation pattern yang menggunakan inheritance untuk mengubah interface, dan structural object pattern yang menjelaskan cara untuk mengubah object dengan fungsionalitas baru. Structural Pattern dibagi menjadi 7 macam pola, yaitu:
   ♦ Adapter
   ♦ Composite
   ♦ Decorator
   ♦ Proxy
   ♦ Facade
   ♦ Flyweight
   ♦ Bridge
````

##### - Separation Of Concern
###### * _Untuk sebuah software dapat berevolusi mengikuti perubahan yang terjadi pada aturan bisnis yang senantiasa berubah, sebuah perangkat lunak dimodifikasi agar memenuhi kebutuhan baru penggunanya. Kendala yang terjadi, modifikasi tersebut menimbulkan masalah baru yaitu timbulnya bugs ataupun error yang tidak terduga. Untuk meminimalisir agar bugs maupun error tersebut tidak menyebar ke seluruh bagian sistem sehingga sulit dilacak, maka dibentuklah separation of concern(SoC) yang membagi suatu domain permasalahan ke dalam sub domain-sub domain yang lebih kecil._
###### * _Model      : Komponen ini akan secara ketat menangani data_
###### * _View       : Komponen ini akan secara ketat menangani Tampilan_
######  * _Controller : Kompenen ini bekerja dengan model dan view. Contoh. Mendapatkan data dari server (model), lalu menampilkan dengan baik di HTML (view). Atau sebaliknya, mengirim data dari formulir HTML (view), dan memformat data sebelum dikirim ke server (model)_
````
const modal = { 
    data : ["JS in object based language"," JS implements prototypal inheritance"]
    };
    
    // View is created with modal
    function View(m) {
        this.modal = m;
        this.display = function () {
            console.log("***********************************");
            console.log(this.modal.data[1]);
            console.log("***********************************");
        };
    }
    
    function Controller(v){
        this.view = v;
        this.informView = function(){
            this.view.display();
        };
    }
    const consoleView = new View(modal);
    const controller = new Controller(consoleView);
    controller.informView();
````

##### - Factory Pattern
###### * _Tentukan interface untuk membuat objek, tetapi biarkan subclass memutuskan kelas mana yang akan dipakai. factory pattern memungkinkan instantiasi penangguhan class ke subclass_
````
const Animal = function(name){
    const animal = {};
    animal.name = name;
    animal.walk = function(){
        console.log(this.name + " walks");
    }
    return animal;
};

const poo = Animal("poo");
const tommy = Animal("tommy");
poo.walk() 
tommy.walk()
````

##### - Main Class
###### * _Class utama pada yang akan di panggil pada aplikasi_.
````
function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
}

var person1 = new Person();
person1.firstName = "Steve";
person1.lastName = "Jobs";
            
console.log(person1.firstName + " " + person1.lastName);
````

##### - Adapter Pattern
###### * _Pola desain strtuctural yang digunakan untuk membuat dua interface atau class yang tidak terkait dan tidak kompatibel bekerja bersama yang tidak dapat dicapai jika interface tidak cocok._
````
function TicketPrice() {
    this.request = function(start, end, overweightLuggage) {
        // price calculation ...
        return "$150.34";
    }
}
 
// new interface
function NewTicketPrice() {
    this.login = function(credentials) { /* process credentials */ };
    this.setStart = function(start) { /* set start point */ };
    this.setDestination = function(destination) { /* set destination */ };
    this.calculate = function(overweightLuggage) { 
        //price calculation ...
        return "$120.20"; 
    };
}
 
// adapter interface
function TicketAdapter(credentials) {
    var pricing = new NewTicketPrice();
  
    pricing.login(credentials);
  
    return {
        request: function(start, end, overweightLuggage) {
            pricing.setStart(start);
            pricing.setDestination(end);
            return pricing.calculate(overweightLuggage);
        }
    };
}
 
const pricing = new TicketPrice();
const credentials = { token: "30a8-6ee1" };
const adapter = new TicketAdapter(credentials);
 

let price = pricing.request("Bern", "London", 20);
console.log("Old price: " + price);

price = adapter.request("Bern", "London", 20);
console.log("New price: " + price);
````
##### - Depedency Class
````
class JNE{
    constructor(){
        this.name = "JNE";
    }
    send(){
        console.log("Send With" + this.name);
    }
}

class TIKI{
    constructor(){
        this.name = "TIKI"
    }
    send(){
        console.log("Send With" + this.name);
    }
}

class Sender{
    constructor(provider){
        this.provider = provider
    }
    send(){
        this.provider.send()
    }
}

const sender = new Sender(new JNE())
sender.send()
````
