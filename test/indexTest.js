let idx = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key
    
    idx = (codes[idx] === key) ? ++idx : 0
    
    if (idx === codes.length) {
      window.alert("Hurray!");
      idx = 0
    }
    
  });