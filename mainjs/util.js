const getLogVal = (p, logMod) => 
  Math.log((logMod - 1) * p + 1) / Math.log(logMod);


function scrollEvent() {
  const startLen = this.startLen;
  const scrollLen = this.scrollLen;

  const scrollTop = $(document).scrollTop() - startLen;

  if(scrollTop >= scrollLen){
    this.cb(1);
    return;
  }

  if(scrollTop <= 0){
    this.cb(0);
    return;
  }

  const progress = scrollTop / scrollLen;

  this.cb(progress);
}