const checkForSpam = function(message) {
    let arr = message.toUpperCase().split(' ');
    if((arr.indexOf('SPAM') != -1)||(arr.indexOf('SALE') != -1)){
        return console.log(true);
    }else{
        return console.log(false);
    }
};
checkForSpam('dsfs rgerg trhtr SpAm');