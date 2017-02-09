$(document).ready(function () 
{

    
   
     hangarea.innerHTML = '<img src="assets/imgs/frame1.jpg" width=40% >';  


     var words = ["facebook","app","twitter","email","wikipedia","android","iphone","google","apple","emoji","windows","text","reddit","instagram","snapchat"];
     var hints = ["most popular social media platform","mobile software","short message platform","classic internet communication","massive collection of knowledge","widespread mobile OS","profitable mobile device","search engine","fruit company","text faces","classic desktop OS","send message","front page of the internet","photosharing","vanishing images"];
     var wordindex = Math.floor(Math.random() * words.length);
     var CurrentWord = 0;
     var chr = 'a';
     var WordScore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //detects if a letter has been guessed.
     var win = 0; //checks if victory has been achieved
     var lose = 1; //checks if user has run out of turns
     var totalwins = 0; //counts players total wins
     var LetterCount = 0; //tallies letters guessed
     var hangcount = 0; //totals up points towards losing scenario
     var wordcheck = 0; //checks the word for no match

     CurrentWord = words[wordindex];
     document.getElementById("playarea3").innerHTML = 'Your current word hint is ' + hints[wordindex] + '<br>';


// first draw
     for (var i = 0; i < CurrentWord.length; i++) {
       document.getElementById("playarea2").insertAdjacentHTML('beforeend', " _ ");   
     }


//redraw screen function that places the letters in case of a hit.

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

    if (lose > 3) 
    {
     document.getElementById("playarea3").innerHTML = 'Your current word hint is ' + hints[wordindex] + '<br>';
     console.log("wordindex: " + wordindex + "    Current word is: " + CurrentWord + "hint: " + hints[wordindex]);
          console.log ("Word:" + CurrentWord + "wordindex:" + wordindex);
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

     console.log("wordindex: " + wordindex + "    Current word is: " + CurrentWord + "hint: " + hints[wordindex]);

}

// victory scenario


function victory()
                {
                console.log('victorious scenario run');
                console.log ("Word:" + CurrentWord + "wordindex:" + wordindex);
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
     var wordindex = Math.floor(Math.random() * words.length);
     CurrentWord = words[wordindex];
     console.log ("Word:" + CurrentWord + "wordindex:" + wordindex);
     LetterCount = 0;
     hangarea.innerHTML = '<img src="assets/imgs/frame1.jpg" width=40% >';  
     document.getElementById("playarea2").innerHTML = " ";  
     document.getElementById("playarea3").innerHTML = "<p><br>Current wins: <br></p> " + totalwins + '<br><br> <button type="button" class="btn btn-secondary" id="nextword">NEXT WORD</button>';


            for (var i = 0; i < CurrentWord.length; i++)      //draw and check function, tallies the letters to their positions.
             {
             document.getElementById("playarea2").insertAdjacentHTML('beforeend', " _ ");   
             }

    console.log("wordindex: " + wordindex + "    Current word is: " + CurrentWord + "hint: " + hints[wordindex]);

}


function restart()
{
     console.log ("NEW GAME STARTED!");
     document.getElementById("playarea2").innerHTML = " ";  
     var wordindex = Math.floor(Math.random() * words.length);
     CurrentWord = words[wordindex];
     console.log ("Restarted Word:" + CurrentWord + "wordindex:" + wordindex);

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

     console.log("wordindex: " + wordindex + "    Current word is: " + CurrentWord + "hint: " + hints[wordindex]);



}

while (win < 0)
{
    victory();
}


})