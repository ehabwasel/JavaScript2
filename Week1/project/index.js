// your code goes in here
const quotes = [
  {
  quote :`Quiet people have the loudest minds.`,
  author : '― Stephen King'
},{
  quote:`The first draft is just you telling yourself the story.`,
  author: ' ― Terry Pratchett'
},{
  quote:`Read a thousand books, and your words will flow like a river..`,
  author: '― Lisa See'
},{
  quote:`You can always edit a bad page. You can’t edit a blank page.`,
  author: '― Jodi Picoult'
},{
  quote:`There is no greater agony than bearing an untold story inside you.`,
  author: '― Maya Angelou'
},{
  quote:`I think all writing is a disease. You can’t stop it.`,
  author: '— William Carlos '
}];

const btn1 = document.getElementById("btn-1");

btn1.addEventListener("click",function displayQuote(){
  let random =Math.floor(Math.random()*quotes.length);
document.getElementById('quote').innerText = ` ${quotes[random].quote}`;
  document.getElementById('auther').innerText = quotes[random].author;
});

