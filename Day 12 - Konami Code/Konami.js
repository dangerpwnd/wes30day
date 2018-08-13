const pressed = [];
const secretCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightababEnter';



alert("Enter is start");

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if(pressed.join('').includes(secretCode)){
    console.log("That's it!");
    document.body.style.backgroundImage = "url('contra.jpg')";
  }
  console.log(pressed);
});
