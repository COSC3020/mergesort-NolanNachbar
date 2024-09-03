function mergesort(array) {
    var subarraysize = 1;

    while (subarraysize < array.length) 
    {
      for (var start = 0; start < array.length; start += 2 * subarraysize) 
      {
        var midsub = Math.min(start + subarraysize, array.length);
        var endsub = Math.min(start + 2 * subarraysize, array.length);
        
        var l = array.slice(start, midsub);
        var r = array.slice(midsub, endsub);
        
        for(var i = start; i <= midsub; i++) 
        {
          for(var j = midsub; j <= endsub; j++) 
          {
            if(array[i] > array[j])
            {
              let t = array[i];
              array[i] = array[j];
              array[j] = t;
            }
          }
        
        }
        
      
    }
      subarraysize *= 2;
    }

    return array;
}
