function changevideo(index) {
  const player = document.querySelector('#player');
  console.log('player', player);
  switch (index) {
    case 1:
      player.innerHTML = 
      '<iframe width="560"height="315" src="https://www.youtube.com/embed/RechrtUxfQc"frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>';
      break;
    case 2:
      player.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      break;
    case 3:
      player.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      break;
    case 4:
      player.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      break;
    case 5:
      player.innerHTML =
        '<iframe width="560"  height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>';
      break;
  }
}

function changeColor(index) {
  const p = document.querySelector('#section');
  switch (index) {
    case 1:
      p.style.border = '10px solid #c9decf';
      break;
    case 2:
      p.style.border = '10px solid #e9e1d4';
      break;
    case 3:
      p.style.border = '10px solid #ccdbe2';
      break;
  }
}

function changeImage(index) {
  const pl = document.querySelector('#player');
  console.log('player', player);
  switch (index) {
    case 1:
      pl.innerHTML = '<img src="./1.jpg" style="width: 100%; height: 100%" />';
      break;
    case 2:
      pl.innerHTML = '<img src="./2.jpg" style="width: 100%; height: 100%" />';
      break;
    case 3:
      pl.innerHTML = '<img src="./3.jpg" style="width: 100%; height: 100%" />';
      break;
    case 4:
      pl.innerHTML = '<img src="./4.jpg" style="width: 100%; height: 100%" />';
      break;
    case 5:
      pl.innerHTML = '<img src="./5.jpg" style="width: 100%; height: 100%" />';
      break;
  }
}