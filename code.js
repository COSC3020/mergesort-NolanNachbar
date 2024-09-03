function mergesort(array) {
    var subarraysize = 1;
    var subIndex = 0;
    
    while (2*subarraysize <= array.length)
    {
      while(subIndex*subarraysize <= array.length)
      {
      for(var i = subIndex*subarraysize; i <= (subIndex + 1)*subarraysize; i++) 
      {
        for(var j = (subIndex + 1)*subarraysize; j <= (subIndex + 2)*subarraysize; j++) 
      {
        if(array[i] > array[j])
        {
          let t = array[i];
          array[i] = array[j];
          array[j] = t;
        }
      }
      }
      subIndex++;
      }
      subIndex = 0;
      subarraysize *= 2;
    }
    
    return array;
}
