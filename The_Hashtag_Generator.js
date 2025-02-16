function generateHashtag (str) {
  if (str.trim().length == '') {
    return false 
  };
  
  let result = '#' + str.split(' ').map(function(a) {
    return a = a.charAt(0).toUpperCase() + a.slice(1)
  }).join('');
  
  return (result.length > 140) ? false : result;
}
