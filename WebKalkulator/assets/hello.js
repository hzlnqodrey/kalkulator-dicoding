const firstName = prompt("Apa nama depan mu ?");
const lastName = prompt("Apa nama belakang mu ?");
const languange = prompt("Bisa berbahasa apa?");

let pengguna = {
    nama : {
        firstName : firstName,
        lastName : lastName
    },

    languange : languange
};

if( pengguna.languange == "English" ) {
    alert(`Hello sir ${pengguna.nama.firstName} ${pengguna.nama.lastName}  ! Good Morning`);
} else if ( pengguna.languange == "Bahasa Indonesia" ) {
    alert(`Halo ${pengguna.nama.firstName} ${pengguna.nama.lastName} ! Selamat pagi`);
} else {
    alert("tolong input dengan benar!");
}