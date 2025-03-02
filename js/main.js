var quotes = [  
    {  
        text: "“If my mind can conceive it, and my heart can believe it - then I can achieve it.”",  
        author: "― Muhammad Ali"  
    },
    {  
        text: "“Be yourself; everyone else is already taken.”",  
        author: "― Oscar Wilde"  
    },  
    {  
        text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",  
        author: "― Albert Einstein"  
    },  
    {  
        text: "“A room without books is like a body without a soul.”",  
        author: "― Marcus Tullius Cicero"  
    },  
    {  
        text: "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",  
        author:  "― William Shakespeare"  
    },  
    {  
        text: "“I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion'.”",  
        author:  "― Muhammad Ali"  
    },  
    {  
        text: "“We read to know we're not alone.”",  
        author:  "― William Nicholson"  
    },  
    {  
        text: "“Be the change that you wish to see in the world.”",  
        author:  "― Mahatma Gandhi"  
    },  
    {  
        text: "“Life is pain, highness. Anyone who says differently is selling something.”",  
        author:  "― William Goldman"  
    },  
    {  
        text: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",  
        author:  "― Maya Angelou"  
    }, 
    {  
        text: "“I do not believe in taking the right decision, I take a decision and make it right.”",  
        author:  "― Muhammad Ali Jinnah"  
    }, 
    {  
        text: "“A friend is someone who knows all about you and still loves you.”",  
        author: "― Elbert Hubbard" 
    }  
];  

var lastIndex = -1; 

function generateQuote() {  
    var randomIndex;  
    
    do {  
        randomIndex = Math.floor(Math.random() * quotes.length);  
    } while (randomIndex === lastIndex); 
    lastIndex = randomIndex; 
    var selectedQuote = quotes[randomIndex];  
 
    document.getElementById('quoteOutput').innerText = selectedQuote.text;  
    document.getElementById('authorOutput').innerText = selectedQuote.author;  
}