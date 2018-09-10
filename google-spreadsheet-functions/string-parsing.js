/**
 * custom function by Ani Agajanian - Parse specifires and sub-specifires into JavaScript object
 *
 * @param {id, description, string} takes the the list of DSM5 specifires with suboptions.
 * @return Parsed specifires into JavaScript object.
 * @customfunction
 */
function GET_SPECIFIRES(id, descr, input){
  var optionsRes = [];
  var subOptionsRes = [];
  var subTextRes =[];
  if(input){
    
    // get array of all options with suboptions 
    var optArr = input.split("-");
    // remove the extra null element in the beginnign of array 
    if (typeof(optArr[0]) === "undefined" || optArr[0] === null || optArr[0]==="") optArr.shift();
  
    var regExp = /\(.+?\)/g;
    
    for (var i = 0; i < optArr.length; i++){
      // options 
      optArr[i] = optArr[i].trim();
      
      // get array of suboption groups 
      var tempSubOpts = optArr[i].match(regExp);
      
      if (tempSubOpts){
        // get array of options
        var indx = optArr[i].indexOf("(");
        optionsRes[i] = optArr[i].slice(0, indx).trim();
        
        for (var j = 0; j < tempSubOpts.length; j++) {
          tempSubOpts[j] = tempSubOpts[j].replace(/\)/gi, "").replace(/\(/gi, "");
          
          // check if subtext suboption exists
          if (tempSubOpts[j].indexOf("subtext") > -1){
            // parse subtext
            subTextRes.push("'" + optionsRes[i] + "':true");
          }else{
            // parse suboptions
            tempSubOpts[j] = tempSubOpts[j].replace(/,/gi, "','");
            subOptionsRes.push("'" + optionsRes[i] + "':['" + tempSubOpts[j] + "'],");            
          }
        }
      }
      else optionsRes[i] = optArr[i].trim();

    }
    
    return "id:'"+id+
      "', description:'"+descr+
      "', options:['" + optionsRes.join("','") + "']" + 
      ", suboptions:{" + subOptionsRes.join("") + "}" +
      ", subtextareas:{" + subTextRes.join(",") + "}";
    
  }else return "";
  
}

