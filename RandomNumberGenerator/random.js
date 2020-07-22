var array = new Array();
function random(){
    if (array.length === 0){
       array.push(Math.floor(Math.random()*10));
       random();
    }
    else if (array.length < 8){
        array.push(Math.floor(Math.random()*10));
        random();
    }
    else{
        return document.write(array.join(""))
    }
 
}
random();

      
      