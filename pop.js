  var totalURLWeight = 0,
   currentURL = 0,
   weighedURL = [],
   URLlist = [
   ["https://erp-software-review-business.blogspot.com/p/partner-1.html", 10], // first column is URL, second column is the relative weight
   ["https://erp-software-review-business.blogspot.com/p/partner-1.html", 70], // since the total weight is 100, this will happen 70% of the time
   ["https://erp-software-review-business.blogspot.com/p/partner-1.html", 10],
   ["https://erp-software-review-business.blogspot.com/p/partner-1.html", 10] // last element doesn't get a comma
  ];
 
  for (var i = 0; i < URLlist.length; i++) {
   totalURLWeight += URLlist[i][1];
  }
 
  while (currentURL < URLlist.length){
   for (i = 0; i < URLlist[currentURL][1]; i++) {
    weighedURL[weighedURL.length] = URLlist[currentURL][0]
   }
   currentURL++
  }
 
  var pURL = weighedURL[Math.floor(Math.random() * weighedURL.length)];
  jsUnda(pURL, {
   width: 1100, // Width of the popunder
   height: 850, // Height of the popunder
   cap: 1, // Number of times the popunder can happen in the time period
   wait: (1 * 2), // Time period delimiting the cap
   cookie: "FAKYU" // Name of the cookie, change this to force the popunders to happen
  });
