/* /*  Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  */

function rotateSTR() {
  const element = document.querySelector(".str");
  let text = element.textContent;

  setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    element.innerHTML = text;
<<<<<<< HEAD
  }, 100);
=======
  }, 1000);
>>>>>>> 75c4acef0d753fcb3b33a47d6dd481a355a5f391
}

rotateSTR();
