// let time = [
//     {
//         "hari" : "senin",
//         "waktu" : 2 
//     },{
//             "hari" : "selasa",
//            "waktu" : 2 
//     },{
//         "hari" : "rabu",
//         "waktu" : 3
// },{
//     "hari" : "kamis",
//     "waktu" : 3
// },{
//     "hari" : "jum'at",
//    "waktu" : 1
// },{
//     "hari" : "sabtu",
//    "waktu" : 4
// },{
//     "hari" : "minggu",
//     "waktu" : 5

// }
// ]

let time =[2,2,3,3,1,4,5];

var total = 0;
var total2 = 0;
for (i= 0; i <time.length;i++){
 total += time[i];
    if(time[i]>2){
       total2++
    }
}

console.log("hari yang melebihi batas adalah : "+total2)
console.log(`total jam ${total}`)


// let timeFilt = time.filter(function(timee){
//     return timee.waktu >2
// });
// console.log(timeFilt)