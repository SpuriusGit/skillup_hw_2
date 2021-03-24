const formatString = function(string) {
    if(string.length > 40){
        return console.log((string.slice(0,40))+'...');
    }else{
        return console.log(string);
    }
};
formatString('May the force be with you May the force be with you');