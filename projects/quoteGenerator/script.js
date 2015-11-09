var quotes = [
    {
        quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
        speaker: "&minus;Steve Jobs"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.",
        speaker: "&minus;Steve Jobs"
    },
    {
        quote: "You have to learn the rules of the game. And then you have to play better than anyone else.",
        speaker: "&minus;Albert Einstein"
    },
    {
        quote: "It has become appallingly obvious that our technology has exceeded our humanity.",
        speaker: "&minus;Albert Einstein"
    },
    {
        quote: "This life, which had been the tomb of his virtue and of his honour, is but a walking shadow; a poor player, that struts and frets his hour upon the stage, and then is heard no more: it is a tale told by an idiot, full of sound and fury, signifying nothing.",
        speaker: "&minus;William Shakespeare"
    },
    {
        quote: "Good night, good night! Parting is such sweet sorrow, that I shall say good night till it be morrow.",
        speaker: "&minus;William Shakespeare"
    },
    {
        quote: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
        speaker: "&minus;Confucius"
    },
    {
        quote: "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
        speaker: "&minus;Confucius"
    },
    {
        quote: "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
        speaker: "&minus;John F. Kennedy"
    },
    {
        quote: "The cost of freedom is always high, but Americans have always paid it. And one path we shall never choose, and that is the path of surrender, or submission.",
        speaker: "&minus;John F. Kennedy"
    },
    {
        quote: "People assume that time is a strict progression of cause to effect, but *actually* from a non-linear, non-subjective viewpoint - it's more like a big ball of wibbly wobbly... time-y wimey... stuff.",
        speaker: "&minus;The Doctor"
    },
    /*{
        quote: "I have a dream",
        speaker: '&minus;Martin Luther King"
    },*/
];

$(document).ready(function(){
    $('#quote_button').on("click", function() {
        var quoteNum = Math.ceil(Math.random() * quotes.length -1);
    $('.quote-container').replaceWith('<div class="quote-container"><p class="quote">'+ quotes[quoteNum].quote+'</p><h3 class="speaker">'+quotes[quoteNum].speaker+'</h3></div>');
});
    $('.back-button').hover(function() {
        $(this).text('Back');
    },
    function() {
        $(this).text('');
    });
});