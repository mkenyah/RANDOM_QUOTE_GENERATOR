const QUOTEBANK = [
        
        {
          quote: " Wealth is the smallest thing on earth, the least gift that God has bestowed on mankind",
          author:"Martin luther"
        },
        
        {
          quote: "There is no wisdom save in truth",
 
          author:"Joseph kirika"
        },
        
          {
          quote:
        "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree",
          author:"Nelson  j"
        }
       
       

      ]
        
      
      window.onload = qoutee;
      function qoutee(){
       generatequote(); 
      }
      
      function generatequote(){
       let quoteSize = QUOTEBANK.length;
        let randomIndex = Math.floor(Math.random() * quoteSize);
        let randomQuoteDate = QUOTEBANK[randomIndex];
        let twitterlink = `https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Two%20roads%20diverged%20in%20a%20wood%2C%20and%20I%E2%80%94I%20took%20the%20one%20less%20traveled%20by%2C%20And%20that%20has%20made%20all%20the%20difference.%22%20Robert%20Frost`;
       
           
         
        
        document.getElementById("tweet-quote").href=twitterlink;
        document.getElementById("text").innerText = randomQuoteDate.quote;
        document.getElementById("author").innerText = randomQuoteDate.author;
      }
