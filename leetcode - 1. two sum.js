var twoSum = function(nums, target) {
     myarr = [];
     for (let i = 0; i < nums.length; i++){
         var remainder = target - i;
         if(nums.includes(remainder)){
          myarr.push(nums.indexOf(i), nums.indexOf(remainder) );
         };
     };
     return myarr;
 };

 twoSum()
