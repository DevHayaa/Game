var character = document.getElementById("character")
var right = 0;
function animation(){
    console.log(event.keyCode)

    if(event.keyCode===39 && right <1400){
        character.src= "images/bbhood_lalala_walk.gif"
        right = right +10
        character.style.left = right +"px"
        setTimeout(function(){
            character.src = "images/bbhood-vampiresavior-stance-with-butterflies.gif"
        },1000)
      
    }
    if(event.keyCode===37 && right >10){
        character.src = "images/bbhood-mk.gif"
        right = right-10
        character.style.left = right +"px"
        setTimeout(function(){
            character.src = "images/bbhood-vampiresavior-stance-with-butterflies.gif"
        },1000)
        
    }
    if(event.keyCode===32){
        character.src= "images/bbhood-jumping-missile-attack.gif"
        character.style.height = "350px"
        character.style.width = "250px"
        setTimeout(function(){
            character.src = "images/bbhood-vampiresavior-stance-with-butterflies.gif"
            character.style.height = "250px"
        character.style.width = "200px"
        },1000)

    }
}
window.onkeydown = animation