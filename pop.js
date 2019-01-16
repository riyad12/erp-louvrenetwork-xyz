<script>
  var totalURLWeight = 0,
   currentURL = 0,
   weighedURL = [],
   URLlist = [
   ["https://erp-software-review-business.blogspot.com/p/partner-1.html", 100];
 
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
   wait: (3600 * 72), // Time period delimiting the cap
   cookie: "CookieName" // Name of the cookie, change this to force the popunders to happen
  });
 </script>
