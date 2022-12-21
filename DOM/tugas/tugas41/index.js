function myFunction(){
   var color = document.getElementById("mySelect").value
   document.body.style.background= color;
   var teks = document.getElementById('teks')
   
   if(color === 'blue'){teks = document.body.style.color="white";
    }else teks = document.body.style.color="black";
   
}