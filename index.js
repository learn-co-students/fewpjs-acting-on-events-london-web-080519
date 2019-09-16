// Your code here
function moveDodgerRight() {
    let leftness = dodger.style.left.replace("px", "");
    let lefty = parseInt(leftness, 10);
   
    if (lefty < 300) {
      dodger.style.left = `${lefty + 1}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerLeft();
    }
  });

  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }