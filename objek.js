// Nomor 1
let kucing ={
nama: "kucing",
kaki: "4",
spesies: "mamalia",
warna: ["grey", "black", "white"],
makanan: ["Ikan","Daging"],
keahlian: () => {
return "Melompat";
},
};
document.getElementById("tampilObjek").innerHTML =
`Hello, aku adalah seekor ${kucing.nama} berkaki ${kucing.kaki}. Aku tergolong ke dalam spesies ${kucing.spesies}. Aku berbeda dengan teman-temanku yang lainnya, itu karena aku punya beragam warna seperti: ${kucing.warna[0]}, ${kucing.warna[1]}, dan ${kucing.warna[2]}. Makanan favoritku tentu saja adalah ${kucing.makanan[0]} dan ${kucing.makanan[1]}. Yang terakhir, aku punya skil khusus yaitu ${kucing.keahlian()}.`;

//soal nomor 2
const data = [
{
name: "Alpha",
class: "Dragon",
club: ["Bola", "Bulutangkis"],
},
{
name: "Beta",
class: "Lizard",
club: ["Membaca", "Bulutangkis"],
},
];
//kita DOM, karna akan pake tag th pada HTML, maka jangan lupa hitung no urut indexnya yaa!!!
document.getElementsByTagName("th")[3].innerHTML = data[0].name;
document.getElementsByTagName("th")[4].innerHTML = data[0].class;
document.getElementsByTagName("th")[5].innerHTML = data[0].club; //untuk yang ini jika kita hanya ingin menampilkan salah satu saja maka harus sertakan index nya sesuai property club pada soal misal "data[0].club[2]"
//object pertama telah habis, sekarang kita DOM object yang kedua ya. jadi perhatikan urutan index data[] ya
document.getElementsByTagName("th")[6].innerHTML = data[1].name;
document.getElementsByTagName("th")[7].innerHTML = data[1].class;
document.getElementsByTagName("th")[8].innerHTML = data[1].club; //untuk yang ini jika kita hanya ingin menampilkan salah satu saja maka harus sertakan index nya sesuai property club pada soal misal "data[0].club[2]"
//Soal 3
let todos = [
{
id: 1,
todo: "belajar coding"
},
{
id: 2,
todo: "nanti tidur"
},
];

//membuat functionJam8 untuk menentukan aktifitas yang dilakukan ketika jam 8
function lihatJam8() {
document.getElementById("tampilObjek1").innerHTML = todos[0].todo;
}

//membuat functionJam10 untuk melihat aktifitas Todos setelah belajar coding di jam 8
//nanti yang kita ambil adalah todos[1] karna kita akan mengecek aktifitas todos yang kedua sesuai object array di soal
function lihatJam10() {
document.getElementById("tampilObjek2").innerHTML = todos[1].todo;
}

//membuat functionJam8Baru apabila si Todos sudah tidak belajar lagi di jam 8
//nanti kita bisa lihat akan ada metode delete dan mengganti yang sudah di delete di dalam function nya
function lihatJam8Baru() {
delete todos[0].todo;
todos[0].todo = "Mengerjakan tugas-tugas kantor yang belum selesai";
document.getElementById("tampilObjek3").innerHTML = todos[0].todo;
}

//soal nomor 4
let buah =[
    {
    pic : 'buah/an_vision-unsplash-apple.jpg',
    name : 'Apple',
    color : 'Red',
    family : 'Rosaceae',
    species : 'M. domestica'
    },
    {
    pic : 'buah/charles-deluvio-unsplash-mango.jpg',
    name : 'Mango',
    color : 'green',
    family : 'Maangifera',
    species : 'M. indica'
    },
    {
    pic : 'buah/han-lahandoe-unsplash-lemon.jpg',
    name : 'Lemon',
    color : 'Yellow',
    family : 'Rutaceae',
    species : 'citrus lemon'
    },
    {
    pic : 'buah/jocelyn-morales-unsplash-cherry.jpg',
    name : 'Cherry',
    color : 'Red',
    family : 'Rosaceae',
    species : 'Prunus Avium'
    },
    {
    pic : 'buah/marcos-ramirez-unsplash-orange.jpg',
    name : 'Orange',
    color : 'oranye',
    family : 'Rutaceae',
    species : 'Citrus sinensis'
    },
    {
    pic : 'buah/nao-xotl-unsplash-banana.jpg',
    name : 'Mango',
    color : 'Red',
    family : 'Musaceae',
    species : 'M. acuminata'
    },
    {
    pic : 'buah/rich-smith-unsplash-pear.jpg',
    name : 'Pear',
    color : 'White',
    family : 'Rosaceae',
    species : 'Pyrus communis'
    },
    {
    pic : 'buah/yulia-khlebnikova-unsplash-blueberry.jpg',
    name : 'Blueberry',
    color : 'Blue',
    family : 'Ericaceae',
    species : 'vaccinium'
    },
]
let objectBuah = document.getElementById("objectBuah");

for (let i = 0; i < buah.length; i++){
let fruit= buah;
objectBuah.innerHTML += `<div>
<div> <img src = ${fruit[i].pic}> </div>
<h2>${fruit[i].name}</h2>
<ul><li>Color: ${fruit[i].color}</li>
<li>Family: ${fruit[i].family}</li>
<li>Species: ${fruit[i].species}</li></ul></div>
</div>`;
}