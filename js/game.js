$(document).ready(function () 
{

    
   
      hangarea.innerHTML = '<img src="http://tinyurl.com/j7vdmn4" width=30% >';  

     var words = ["dog","cat","rock","apple","banana","pond","frog","spider","zebra"];

     playarea2.innerHTML = '__________' 


function randompick() 
            {
            var x = Math.floor((Math.random() * words.length) + 1);
            document.getElementById("playarea2").innerHTML = x + ' letters';
            }



$(document).keyup(event, function() 
        {
     var chr = String.fromCharCode(event.keyCode);//converts the keycode into a character
        chr = chr.toLowerCase();
        document.getElementById("playarea2").innerHTML = chr + 'test';
        });


})