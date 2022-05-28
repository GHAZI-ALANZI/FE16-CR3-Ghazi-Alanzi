//create nine (9) variables
var tickt_1=100;   var tickt_3=140;  var tickt_5=170;  var tickt_7=122;
var tickt_2=120;  var tickt_4=110;  var tickt_6=130;  var tickt_8=190;
var tickt_9=155;

console.log(tickt_1+'€');
console.log(tickt_2+'€');
console.log(tickt_3+'€');
console.log(tickt_4+'€');
console.log(tickt_5+'€');
console.log(tickt_6+'€');
console.log(tickt_7+'€');
console.log(tickt_8+'€');
console.log(tickt_9+'€');


//Create  three(3) variables
var fest_day1=[4,1];        //[band-4, band-1]
var fest_day2=[2,5,7];    //[band-2, band-3,band-5, band-7]    
var fest_day3=[6,8,9,3];      //[band-6, band-8,band-9]

//out put on consol with use 3 var above

console.log('On the first day of the festival, I was lucky to watch bands'+ fest_day1[1]+','+fest_day2[0]+'and'+fest_day3[3]);
console.log('Then I watched the bands'+ fest_day1[1]+','+fest_day2[0]+'and'+fest_day3[3]+'on the second day and it cost me €€€€ in total that day.');
console.log('I was a bit tired on the third day but it was so much worth it to watch the bands'+ fest_day1[1]+','+fest_day2[0]+'and'+fest_day3[3]+'I spent €€€€ for the three days of the festival.');


//30% save
var save=(30/100)*tickt_1;// ue can also use var save=(30/100)*tickt_2 or var save=(30/100)*tickt_3;........etc
var cost=tickt_1-save;
console.log('If I had booked the concert with enough time in advance, it would have cost me a total of'+ cost+ '€ and I would have saved' +save+'€');
