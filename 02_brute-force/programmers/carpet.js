function solution(brown, yellow) {
  let w = yellow;
  let h = 1;
  while (w <= yellow) {
    console.log(w, h);
    let brownCount = 0;
    let curW = w;
    let curH = h;

    while (brownCount < brown) {
      brownCount += curW * 2;
      brownCount += curH * 2;
      brownCount += 4;
      curW += 2;
      curH += 2;
    }

    if (brownCount === brown) {
      return [curW, curH];
    }

    h += 1;
    while (yellow % h !== 0) {
      h += 1;
    }
    w = yellow / h;
  }
}

solution(24, 24);
