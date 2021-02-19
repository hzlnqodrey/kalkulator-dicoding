// belajar objek
let user = {
    name: {
        firstName : "Hazlan Muhammad",
        lastName : "Qodri",
    },

    age : "21",
    isHuman : true,
    stuff : ["PC, Meja, Kursi, Springbed"]
};

dataDiri();

function dataDiri() {
    // string interpolation
    console.log(`hallo nama saya ${user.name.firstName} ${user.name.lastName}`);
    console.log(`Umur saya ${user.age} tahun`);
    console.log(`Barang-barang saya disini ada ${user.stuff} `);
    
 
}
console.log("\n");
console.log("\n");

const object1 = {
    a : 'foo',
    b : 42,
    c : {},
};

console.log(object1.a);

const a = 'foo';
const b = 42;
const c = {};
const object2 = {
    a : a,
    b : b,
    c : c,
};

console.log(object2.b);

const object3 = {
    a,
    b,
    c,
};

console.log(object3.a);

console.log("\n");
console.log("\n");

// array + for loop
let arr = ['1', '2', '4', '11', '17'];

for(let i = 0; i < arr.length; i++ ) {
    console.log(arr[i]);
}