const hamletButton = document.querySelector("#randLine");
hamletButton.addEventListener('click', hamlet);

const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener('click', searchShake);

const searchedWord = document.querySelector('#searchedWord');
const wordsList = document.querySelector("#words");
const totalSpan = document.querySelector("#totalArea");

const playsArr = ['a_and_c', 'all_well', 'as_you', 'com_err', 'coriolan', 'cymbelin', 'dream', 'hamlet', 'hen_iv_1', 'hen_iv_2', 'hen_v', 'hen_vi_1', 'hen_vi_2', 'hen_vi_3', 'hen_viii', 'j_caesar', 'john', 'lear', 'lll', 'm_for_m', 'm_wives', 'macbeth', 'merchant', 'much_ado', 'othello', 'pericles', 'r_and_j', 'rich_ii', 'rich_iii', 't_night', 'taming', 'tempest', 'timon', 'titus', 'troilus', 'two_gent', 'win_tale'];

const playsArrFixed = [`Antony and Cleopatra`, `All's Well That Ends Well`, `As You Like It`, `Comedy of Errors`, `Coriolanus`, `Cymbelin`, `Midsummer Night's Dream`, `Hamlet`, `Henry IV, Part I`, `Henry IV, Part II`, `Henry V`, `Henry VI, Part I`, `Henry VI, Part II`, `Henry VI, Part III`, `Julius Caesar`, `King John`, `King Lear`, `Love's Labour's Lost`, `Measure for Measure`, `Merry Wives of Windsor`, `Macbeth`, `Merchant of Venice`, `Much Ado about Nothing`, `Othello`, `Pericles`, `Romeo and Juliet`, `Richard II`, `Richard III`, `Twelfth Night`, `Taming of the Shrew`, `Tempest`, `Timon of Athens`, `Titus Andronicus`, `Troilus and Cressida`, `Two Gentlemen of Verona`, `Winter's Tale`];

function hamlet() {
 
  const xhttp = new XMLHttpRequest();
  const method = 'GET';
  const name = `shaks200/hamlet.xml`;
  
  xhttp.open(method, name, true);
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == 200) {
      randomHamlet(this);
    }
  };

  xhttp.send();

  function randomHamlet(xml) {
    const xmlDoc = xml.responseXML;
    const lines = xmlDoc.getElementsByTagName("LINE");
    const linesArr = Array.from(lines);
    let hamletArr = [];
    
    for (let i = 0; i < linesArr.length; i++) {
        if (linesArr[i].innerHTML.includes('Hamlet')) {
        hamletArr.push(linesArr[i].innerHTML);
      }
    }
    
    for (let i = 0; i < hamletArr.length; i++) {
      if (hamletArr[i] === undefined) {
        hamletArr.splice(i, 1);
      }
    }
    
    const randNum = Math.floor(Math.random() * hamletArr.length);
    const randLine = hamletArr[randNum];
    
    document.getElementById("demo").innerHTML = randLine;

  }
}

function searchShake() {
  wordsList.innerHTML = '';
  const word = searchedWord.value;
  let total = 0;
  
   if (word.trim().length == 0) {
     return alert('Please enter a word.');
  }

 for (let i = 0; i < playsArr.length; i++) {
    const xhttp = new XMLHttpRequest();
    const method = 'GET';

    let name = `shaks200/${playsArr[i]}.xml`;

    xhttp.open(method, name, true);

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == 200) {
        findWord(this);
      }
    };

    xhttp.send();

    function findWord(xml) {
      const xmlDoc = xml.responseXML;
      const lines = xmlDoc.getElementsByTagName("LINE");
      const linesArr = Array.from(lines);
      let wordArr = [];

      for (let i = 0; i < linesArr.length; i++) {
        if (linesArr[i].innerHTML.includes(` ${word} `) || 
          linesArr[i].innerHTML.includes(` ${word},`) ||
          linesArr[i].innerHTML.includes(` ${word}!`) ||
          linesArr[i].innerHTML.includes(` ${word}?`) ||
          linesArr[i].innerHTML.includes(` ${word}-`) ||
          linesArr[i].innerHTML.includes(` ${word};`) ||
          linesArr[i].innerHTML.includes(` ${word}:`) 
          ) {
          wordArr.push(linesArr[i].innerHTML);
        }
      }

      const joinedWordArr = wordArr.join(' || ');
      const appearances = wordArr.length;
      total += appearances;

      if (wordArr.length > 0) {
        $("#words").append(`<li><strong>${playsArr[i]}:</strong> ${joinedWordArr} <strong>${appearances} time(s)</strong></li>`);
      }

      totalSpan.innerHTML = '';
      $("#totalArea").append(`<span>${total} total time(s).</span>`);
      
    }
  }
}



