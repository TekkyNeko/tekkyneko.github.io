function buttonToggle()
{
  var text = document.getElementById("swapText");
  if(text.innerHTML === "Hello World!")
  {
    text.innerHTML = "Goodbye World!";
  }
  else
  {
    text.innerHTML = "Hello World!";
  }
}