//from this
/* const countDown = start => {
    do {
      console.log(start);
      start -= 1;
    }
    while(start > 0);
  };
  countDown(10);
*/

//to this
  const countDown = start => {
    console.log(start);
    if(start > 0) countDown(start-1);
  };
  
  countDown(10);