alert ("This js is ok")


var names =  ["Bob","John","Maria","Lester","Philip","Marcus","Rodrigo"];

function whoispaying (names){
    var numberpeople = names.length;
    var randompersonp = Math.floor(Math.random() * numberpeople);
    var randomperson = names[randompersonp];

    console.log(randomperson)

    alert (randomperson + " is buying us cake today !")


}