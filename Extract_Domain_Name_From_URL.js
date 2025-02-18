//Title: Extract the domain name from a URL

function domainName(url) { 
  // Remove "http://", "https://", and "www." if they exist
  let cleanUrl = url.replace("http://", "")
                    .replace("https://", "") //replaces string with nothing
                    .replace("www.", "");

  // Extract the domain name before the first "."
  return cleanUrl.split(".")[0];
}

//this was too manual, worked sometimes but not when there was both http(s) and www.
// function domainName(url){
//   //
//   let newurl = url.split("")
//   let indexo;
//   let domain = [];
//   let domainString;
//   if (url.includes("http://")) {
//     newurl.shift(0)
//     newurl.shift(1)
//     newurl.shift(2)
//     newurl.shift(3)
//     newurl.shift(4)
//     newurl.shift(5)
//     newurl.shift(6)
//     indexo = newurl.indexOf(".");
//     for (i = 0; i < indexo; i++) {
//       domain.push(newurl[i]);
//     }
    
//     domainString = domain.join("");
//   } 
  
//   else if (url.includes("www.")) {
//     newurl.shift(0)
//     newurl.shift(1)
//     newurl.shift(2)
//     newurl.shift(3)

//     indexo = newurl.indexOf(".");
//     for (i = 0; i < indexo; i++) {
//       domain.push(newurl[i]);
//     }
    
//     domainString = domain.join("");
//   } 
  
//   else if (url.includes("https://")) {
//     newurl.shift(0)
//     newurl.shift(1)
//     newurl.shift(2)
//     newurl.shift(3)
//     newurl.shift(4)
//     newurl.shift(5)
//     newurl.shift(6)
//     newurl.shift(7)

//     indexo = newurl.indexOf(".");
//     for (i = 0; i < indexo; i++) {
//       domain.push(newurl[i]);
//     }
    
//     domainString = domain.join("");

//   }
  
//   return domainString;
// }
