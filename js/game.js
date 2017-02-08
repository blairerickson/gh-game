$(document).ready(function () 
{

    
   
     hangarea.innerHTML = '<img src="assets/imgs/frame1.jpg" width=40% >';  


     var words = ["dog","cat","rock","apple","banana","pond","frog","spider","zebra"];
     var CurrentWord = words[Math.floor(Math.random() * words.length)];
     var chr = 'a';
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
       document.getElementById("playarea2").insertAdjacentHTML('beforeend', " _ ");   
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
                  if (wordcheck == CurrentWord.length & lose < 6) 
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
                else if (CurrentWord[i].charAt(0) == chr)    //adds letters to board
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
                    document.getElementById("playarea2").insertAdjacentHTML('beforeend', " _ ");   
                     }
             }

    if (totalwins > 0) 
    {
          document.getElementById("playarea3").innerHTML = "<p><br>Current wins: <br></p> " + totalwins + '<br><br> <button type="button" class="btn btn-secondary" id="nextword">NEXT WORD</button>';
    } 

    }


if (lose >= 6)
             {
              document.getElementById("hangarea").innerHTML = '<img src="assets/imgs/emojihang.gif" width=40% >'; 
              document.getElementById("playarea2").innerHTML = 'GAME OVER!'; 
              document.getElementById("playarea3").innerHTML = '<br><br> <button type="button" class="btn btn-secondary" id="restartbutton">RESTART</button>';
              document.getElementById("restartbutton").addEventListener("click", restart);
              console.log("you LOST!!!"); 
             }

}

// victory scenario


function victory()
                {
                console.log('victorious scenario run');
                CurrentWord = words[Math.floor(Math.random() * words.length)];
                totalwins++;
                document.getElementById("playarea3").innerHTML = "<p>YOU WON! <br>Current wins: <br></p> " + totalwins + '<br><br> <button type="button" class="btn btn-secondary" id="nextword">NEXT WORD</button>';
                LetterCount = 0;
                hangcount = 0;
                lose = 1;
                WordScore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //clears WordScore array
                win = 0;      //resets win checking variable  
                document.getElementById("nextword").addEventListener("click", newword);
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



//next level
function newword()
{
     console.log ("NEW WORD!");
     CurrentWord = words[Math.floor(Math.random() * words.length)];
     LetterCount = 0;
     hangarea.innerHTML = '<img src="assets/imgs/frame1.jpg" width=40% >';  
     document.getElementById("playarea2").innerHTML = " ";  
     document.getElementById("playarea3").innerHTML = "<p><br>Current wins: <br></p> " + totalwins + '<br><br> <button type="button" class="btn btn-secondary" id="nextword">NEXT WORD</button>';


            for (var i = 0; i < CurrentWord.length; i++)      //draw and check function, tallies the letters to their positions.
             {
             document.getElementById("playarea2").insertAdjacentHTML('beforeend', " _ ");   
             }
}


function restart()
{
     console.log ("NEW GAME STARTED!");
     document.getElementById("playarea2").innerHTML = " ";  
     CurrentWord = words[Math.floor(Math.random() * words.length)];
         for (var i = 0; i < CurrentWord.length; i++)      //draw the blanks to their positions.
             {
             document.getElementById("playarea2").insertAdjacentHTML('afterbegin', " _ "); 
             console.log("blank.");  
             }
     LetterCount = 0;
     totalwins = 0;
     hangcount = 0;
     wordcheck = 0;
     win = 0;
     lose = 1;
     WordScore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
     hangarea.innerHTML = '<img src="assets/imgs/frame1.jpg" width=40% >';  
     document.getElementById("playarea3").innerHTML = "<p><br>Current wins: <br></p> " + totalwins;
     console.log(CurrentWord);


}

while (win < 0)
{
    victory();
}


})