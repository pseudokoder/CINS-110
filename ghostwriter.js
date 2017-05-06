function writeTweet()
{
  var randIndex;
  var sentence;
  // Leadership quotes by BrainyQuote
  // source: https://www.brainyquote.com/quotes/topics/topic_leadership.html
  var intro = ["The essence of leadership is, be, know, do.",
               "A leader is one who knows the way, goes the way, and shows the way.",
               "If your actions inspire others to dream more, learn more, do more and become more, you are a leader."];
  var body = ["Leadership is not about a title or designation.",
              "Ultimately leadership is not about glorious crowning acts.",
              "Leadership is not about seeking consensus."];
  var end = ["It's about impact, influence and inspiration.",
             "It's about keeping your team focused on a goal and motivated to do their best to achieve it.",
             "Leadership is unlocking people's potential to become better."];
  randIndex = randomUpTo(intro.length-1);
  sentence = intro[randIndex];
  randIndex = randomUpTo(body.length-1);
  sentence = sentence +" "+ body[randIndex];
  randIndex = randomUpTo(end.length-1);
  sentence = sentence +" "+ end[randIndex];
  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
