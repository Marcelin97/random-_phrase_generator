// The array of quotes (source: https://addicted2success.com/quotes/30-famous-quotes-that-will-inspire-success-in-you/)
let quotes = [
  {
    quote: "You can do anything but not everything",
    source: "David Allen",
    citation: "Making it All Work",
  },
  {
    quote:
      "If you don’t build your dream, someone else will hire you to help them build theirs.",
    source: "Dhirubhai Ambani",
    tags: ["personal development"],
  },
  {
    quote:
      "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    source: "Mark Caine",
    citation: "Awesome book ever write",
    year: 1998,
    tags: ["personal development", "personal", "future"],
  },
  {
    quote:
      "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    source: "Audre Lorde",
    tags: ["business", "personal", "future"],
  },
  {
    quote:
      "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    source: "Mark Twain",
    citation: "Mark Twain's like book",
  },
  {
    quote: "I have not failed. I’ve just found 10,000 ways that won’t work.",
    source: "Thomas A. Edison",
    citation: "Edison's biography",
    year: 1900,
    tags: ["personal"],
  },
  {
    quote:
      "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    source: "David Brinkley",
    tags: ["business", "personal development"],
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    source: "Eleanor Roosevelt",
    year: 1936,
    tags: ["famous", "future"],
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: "Mahatma Gandhi",
    citation: "Gandhi's book maximum edition",
    year: 1965,
    tags: ["famous", "political", "future"],
  },
  {
    quote:
      "Success is about creating benefit for all and enjoying the process. If you focus on this & adopt this definition, success is yours.",
    source: "Kelly Kim",
    citation: "My book, my story",
    tags: ["business", "personal development"],
  },
];

//   select the btn who change the quote
let btn = document.getElementById("loadQuote");

// variables
let quote = document.querySelector(".quote");
let source = document.querySelector(".source");
let citation = document.querySelector(".citation");
let year = document.querySelector(".year");
let tags = document.querySelector(".tags");

// choose a random quote
// const randomNumber = Math.floor(Math.random() * quotes.length);

// Adding the event listeners on click
btn.addEventListener("click", function () {
  // choose a random quote
  let random = Math.floor(Math.random() * quotes.length);
//   console.log(random);

// store the object within a variable
  let quoteObject = quotes[random]
//   console.log(quoteObject);

  // Once the quote has been constructed, add it to the DOM
  quote.innerHTML = quoteObject.quote;
  source.innerHTML = "-" + quoteObject.source;

  // If the citation property exists, add it
  if (quoteObject.hasOwnProperty('citation')) {
    // console.log(quoteObject.citation);
    citation.innerHTML = quoteObject.citation;

  }
  // If the year property exists, add it
  if (quoteObject.hasOwnProperty('year')) {
    year.innerHTML = quoteObject.year;
  }
  // If the array of tags property exists, add it
  if (quoteObject.hasOwnProperty('tags')) {
    for (var i = 0; i < quoteObject.tags.length; i++) {
        tags.innerHTML = quoteObject.tags[i];
    }
  }
});
