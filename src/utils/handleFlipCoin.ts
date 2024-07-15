export function flipCoin(side:string) {
  const portraitFront = document.querySelector('.portrait.front') as HTMLElement;
  const portraitBack = document.querySelector('.portrait.back') as HTMLElement;

  const isFront = side === 'front';
  portraitFront.style.zIndex = isFront ? '1' : '2';
  portraitFront.style.opacity = isFront ? '0' : '1';
  portraitFront.style.transform = isFront ? 'rotateY(180deg)' : 'rotateY(0deg)';
  portraitFront.style.transitionDelay = isFront ? '2000' : 'none';

  portraitBack.style.zIndex = isFront ? '2' : '1';
  portraitBack.style.opacity = isFront ? '1' : '0';
  portraitBack.style.transform = isFront ? 'rotateY(0deg)' : 'rotateY(180deg)';
  portraitBack.style.transitionDelay = isFront ? 'none' : '2000';
}

export function handleFlipCoin() {
  const portraitFront = document.querySelector('.portrait.front') as HTMLElement;
  const portraitBack = document.querySelector('.portrait.back') as HTMLElement;

  if (portraitFront && portraitBack) {
    portraitFront.addEventListener('click', () => flipCoin('front'));
    portraitBack.addEventListener('click', () => flipCoin('back'));
  }
}