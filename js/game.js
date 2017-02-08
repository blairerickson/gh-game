$(document).ready(function () 
{

    
   
      hangarea.innerHTML = '<img src="http://tinyurl.com/j7vdmn4" width=30% >';  

     var words = ["dog","cat","rock","apple","banana","pond","frog","spider","zebra"];
     var CurrentWord = words[Math.floor(Math.random() * words.length)];
     var chr = 'd';
     var WordScore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //detects if a letter has been guessed.
     var win = 0; //checks if victory has been achieved
     var totalwins = 0; //counts players total wins

     document.getElementById("playarea3").innerHTML = 'Your current word is ' + CurrentWord + '<br>';


// first draw
     for (var i = 0; i < CurrentWord.length; i++) {
       document.getElementById("playarea2").insertAdjacentHTML('beforeend', "  ___  ");   
     }


//redraw function that places the letters in case of a hit.

function redraw()
{
     document.getElementById("playarea2").innerHTML = " ";
     console.log("emptied" + chr);

     for (var i = 0; i < CurrentWord.length; i++) 
     {
        if (WordScore[i] == 1)
            {
                document.getElementById("playarea2").insertAdjacentHTML('beforeend', CurrentWord.charAt(i));
                console.log ('skipped a letter. ')
            }
        else if (CurrentWord[i].charAt(0) == chr)
            {
                console.log("HIT " + chr);
                document.getElementById("playarea2").insertAdjacentHTML('beforeend', chr);
                WordScore[i] = 1;   
            }
        else 
            {
            document.getElementById("playarea2").insertAdjacentHTML('beforeend', "  ___  ");   
             }
     }
 
}

// victory scenario

function victory()
                {

                WordScore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //clears WordScore array
                win = 0;        //resets win checking variable
                }

// looks for keystrokes and then sets them in lowercase before pasing them to the chr variable.

$(document).keyup(event, function() 
        {
      chr = String.fromCharCode(event.keyCode);//converts the keycode into a character
        chr = chr.toLowerCase();
        redraw();
        console.log("redrawn..." + chr)
        });


})