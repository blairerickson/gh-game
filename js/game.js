$(document).ready(function () 
{

    
   
     hangarea.innerHTML = '<img src="assets/imgs/frame1.jpg" width=40% >';  


     var words = ["dog","cat","rock","apple","banana","pond","frog","spider","zebra"];
     var CurrentWord = words[Math.floor(Math.random() * words.length)];
     var chr = 'd';
     var WordScore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //detects if a letter has been guessed.
     var win = 0; //checks if victory has been achieved
     var lose = 1; //checks if user has run out of turns
     var totalwins = 0; //counts players total wins
     var LetterCount = 0; //tallies letters guessed
     var hangcount = 0; //totals up points towards losing scenario
     var wordcheck = 0; //checks the word for no match

     document.getElementById("playarea3").innerHTML = 'Your current word is ' + CurrentWord + '<br>';


// first draw
     for (var i = 0; i < CurrentWord.length; i++) {
       document.getElementById("playarea2").insertAdjacentHTML('beforeend', "  ___  ");   
     }


//redraw function that places the letters in case of a hit.

function redraw()
{
    if (win == 0)
    {
     document.getElementById("playarea2").innerHTML = " ";  
     console.log("emptied" + chr);

             for (var i = 0; i < CurrentWord.length; i++) 
             {
                if (CurrentWord[i].charAt(0) != chr)
                {
                  wordcheck++;
                  if (wordcheck == CurrentWord.length) 
                  {
                   lose++;
                   console.log("LOSE POINT SCENARIO TRIGGERED" + lose);   
                   wordcheck = 0;  
                   document.getElementById("hangarea").innerHTML ='<img src="assets/imgs/frame' + lose +'.jpg" width=40%>';
                  }
                }
             }


             for (var i = 0; i < CurrentWord.length; i++)      //draw and check function, tallies the letters to their positions.
             {
                if (WordScore[i] == 1)
                    {
                        document.getElementById("playarea2").insertAdjacentHTML('beforeend', CurrentWord.charAt(i));
                        console.log ('skipped a letter. ')
                    }
                else if (CurrentWord[i].charAt(0) == chr)
                    {
                        console.log("HIT " + chr);
                        LetterCount++;
                        wordcheck = 0;  
                        console.log(LetterCount);
                        document.getElementById("playarea2").insertAdjacentHTML('beforeend', chr);
                        WordScore[i] = 1;   
                    }
                else 
                    {
                    document.getElementById("playarea2").insertAdjacentHTML('beforeend', "  ___  ");   
                     }
             }

    

    }


if (lose >= 6)
             {
              document.getElementById("hangarea").innerHTML = '<img src="assets/imgs/emojihang.gif" width=40% >'; 
              console.log("you LOST!!!"); 
             }

}

// victory scenario


function victory()
                {
                console.log('victorious scenario run');
                CurrentWord = words[Math.floor(Math.random() * words.length)];
                totalwins++;
                 document.getElementById("playarea3").innerHTML = "<p>YOU WON! Current wins: </p> " + totalwins;
                LetterCount = 0;
                WordScore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //clears WordScore array
                win = 0;      //resets win checking variable  
                }

// looks for keystrokes and then sets them in lowercase before pasing them to the chr variable.

$(document).keyup(event, function() 
        {
      chr = String.fromCharCode(event.keyCode);//converts the keycode into a character
        chr = chr.toLowerCase();
        redraw();
        console.log("redrawn..." + chr);

 if (CurrentWord.length == LetterCount)
             {
                win = 1;
                console.log("U   W O N!!")
                victory();
             }
        });



while (win < 0)
{
    victory();
}


})