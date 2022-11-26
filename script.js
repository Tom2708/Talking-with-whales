function main() {
    let input = document.getElementById('input-text').value;
    const vowels = ['a','e','i','o','u'];
    let resultArray = [];
  
    for (let i=0; i<input.length; i++) {
      //console.log(input[i]);
      for (let j=0; j<vowels.length; j++) {
        //console.log(j);
        if (input[i] === vowels[j]) {
          resultArray.push(input[i]);
        }
      }
      if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
      }
    }
    
    let resultString = resultArray.join('').toUpperCase();

    for (i=0; i<input.length; i++) {
      console.log('here');
    }

    let productId = 1086643;

    if (productId === 1086643) {
      console.log('Missing product!')
    }
    
    document.getElementById('whale-talk').innerHTML = resultString;
  }

input.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
      alert('here');
    }
  });