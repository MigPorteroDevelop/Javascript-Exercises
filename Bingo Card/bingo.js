function bingo() {
  let th = document.querySelectorAll(".Square");

  th.forEach(th => {
    th.textContent = Math.floor(Math.random()*75);
    console.log(th);
  });
}

bingo();
