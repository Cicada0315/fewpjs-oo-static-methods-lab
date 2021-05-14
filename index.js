class Formatter {
  //add static methods here
  static capitalize(str){
    let words=str.split(" ");
    for(let i=0; i<words.length; i++){
      words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return words.join(" ");
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(str){
    const exceptarr=['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words=str.split(" ");
    words[0]=this.capitalize(words[0]);
    
    for(let i=1; i<words.length; i++){
      if (!(exceptarr.includes(words[i]))){
        words[i]=this.capitalize(words[i]);
      }
    }
    return words.join(" ");
  }  
}