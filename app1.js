function convertCurrency() {
    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
  
    var query = `${fromCurrency}_${toCurrency}`;
  
    var url = `https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=your_api_key_here`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        var rate = data[query];
        var result = amount * rate;
        document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
}
