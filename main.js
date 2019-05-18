const quotes = [

    {
        quote: 'Aku lapar jek',
        author: 'Orang',
    },
    {
        quote: 'Jap aku tengah masak',
        author: 'Jesus',
    },
    {
        quote: 'Tahfiz bagus',
        author: 'Moses',
    },
    {
        quote: 'Siallaaaa',
        author: 'Ayman',
    },
    {
        quote: 'LETS KILL THIS LOVE',
        author: 'Hakam',
    },
]

let index = 0;

function getRandomQuote() {

    let randomIndex = Math.floor((Math.random() * quotes.length));
    document.getElementById('quote').innerHTML=quotes[randomIndex].quote;
    document.getElementById('author').innerHTML=quotes[randomIndex].author;

}


 