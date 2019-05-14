var gameType = "conversation";

var questions = [
    {
        id: 2,
        question: 'What was the first record you ever bought',
    },
    {
        id: 4,
        question: 'What do you think people say when they talk about you',
    },
    {
        id: 6,
        question: 'If you had a tattoo, where and what would it be',
    },
    {
        id: 7,
        question: 'Is there a right way to load the dishwasher',
    },
    {
        id: 8,
        question: 'Is there anyone you regret losing touch with',
    },
    {
        id: 9,
        question: 'How would you describe your sense of humour',
    },
    {
        id: 10,
         question: 'What\'s your favourite word, based on sound alone',
    },
    {
        id: 11,
        question: 'What\'s your least favourite word',
    },
    {
        id: 12,
        question: 'If money were no object, what would you hang on your wall',
    },
    {
        id: 13,
        question: 'What\'s your claim to fame',
    },
    {
        id: 14,
        question: 'Can money buy happiness',
    },
    {
        id: 15,
        question: 'What\'s the strangest thing you have ever seen at someone else\'s house',
    },
    {
        id: 16,
        question: 'Do you have a place you go to be alone',
    },
    {
        id: 17,
        question: 'What\'s your favourite sandwich',
    },
    {
        id: 18,
        question: 'Did you have any Christmas traditions when you were a child',
    },
    {
        id: 19,
        question: 'What\'s your favourite Disney film',
    },
    {
        id: 20,
        question: 'What would you choose as your superpower',
    },
    {
        id: 22,
        question: 'If you could rent out a whole cinema, what would you show',
    },
    {
        id: 23,
        question: 'What was your favourite TV show as a child',
    },
    {
        id: 24,
        question: 'What has been your favourite ever computer game',
    },
    {
        id: 25,
        question: 'If money were no object, where would you go',
    },
    {
        id: 35,
        question: 'Where do you most want to travel but have never been',
    },
    {
        id: 36,
        question: 'What book has affected you the most',
    },
    {
        id: 37,
        question: 'What\'s the hardest thing you have ever done',
    },
    {
        id: 38,
        question: 'What\'s the thing you are most proud of? Your biggest success so far',
    },     
    {
        id: 39,
        question: 'What\'s the one thing that should be taught in schools but isn\'t',
    },     
    {
        id: 40,
        question: 'What does your life say about you',
    },     
    {
        id: 41,
        question: 'How would your friends describe you',
    },     
    {
        id: 42,
        question: 'What\'s your favourite kitchen gadget',
    },     
    {
        id: 43,
        question: 'What was your first job',
    },     
    {
        id: 44,
        question: 'Describe your dream job',
    },     
    {
        id: 45,
        question: 'What was your worst job',
    },     
    {
        id: 46,
        question: 'If you wrote a book, what would it be about',
    },     
    {
        id: 47,
        question: 'Describe your perfect day',
    },     
    {
        id: 48,
        question: 'Who would be at your dream dinner party from the past, present or future',
    },     
    {
        id: 49,
        question: 'If you were going to be famous, what would it be for',
    },     
    {
        id: 50,
        question: 'How do you decide what gift to buy someone',
    },     
    {
        id: 51,
        question: 'What frightens you',
    },     
    {
        id: 52,
        question: 'What\'s your comfort food',
    },     
    {
        id: 53,
        question: 'What was your favourite food as a child',
     },     
    {
        id: 54,
        question: 'What\'s your earlist memory',
    },     
    {
        id: 55,
        question: 'What would you cook to impress someone',
    },     
    {
        id: 56,
        question: 'What are you jealous of in your family',
    },     
    {
        id: 57,
        question: 'What music makes you happy',
    },     
    {
        id: 58,
        question: 'What\'s your party trick',
    },     
    {
        id: 59,
        question: 'What did you inherit from your parents that you are most grateful for',
    },     
    {
        id: 60,
        question: 'Do you cry easily',
    },     
    {
        id: 61,
        question: 'What advice would you give 16 year old you',
    },     
    {
        id: 62,
        question: 'If you could have been born anywhere different, where do you wish you had been born',
    },     
    {
        id: 63,
        question: 'What\'s the thing you ought to regret but don\'t',
    },     
    {
        id: 64,
        question: 'What\'s the most adventurous thing you have ever done',
    },     
    {
        id: 65,
        question: 'What do you dream about',
    },     
    {
        id: 66,
        question: 'If you could change one thing about you, what would it be',
    },     
    {
        id: 67,
        question: 'How often do you daydream',
    },     
    {
        id: 68,
        question: 'Who\'s your celebrity crush',
    },     
    {
        id: 69,
        question: 'Are you where you want to be at this point in your life',
    },     
    {
        id: 70,
        question: 'If you could travel in time, what year would you visit',
    },     
    {
        id: 71,
        question: 'What do you define as manliness',
    },     
    {
        id: 72,
        question: 'If you had to live without one of your five senses, which one would you give up',
    },     
    {
        id: 73,
        question: 'Is change always good',
    },     
    {
        id: 74,
        question: 'What\'s your favourite memory',
    },     
    {
        id: 75,
        question: 'What\'s the best piece of advice you\'ve ever been given',
    },     
    {
        id: 76,
        question: 'Would you ever travel on your own',
    },     
    {
        id: 77,
        question: 'Do you prefer people in your life to be simple or complex',
    },     
    {
        id: 78,
        question: 'What is it about you that makes you good at something',
    },     
    {
        id: 79,
        question: 'What turns you on creatively, spiritually or emotionally',
    },     
    {
        id: 80,
        question: 'If Heaven exists, what would you like to hear God say when you arrive at the Pearly Gates',
    },     
    {
        id: 81,
        question: 'If the world was going to end and you knew it, what 3 things would you do',
    },     
    {
        id: 82,
        question: 'What\'s the best gift you ever received',
    },     
    {
        id: 83,
        question: 'What\'s something you wish you were better at',
    },     
    {
        id: 84,
        question: 'What was the last thing you did for the first time',
    },     
    {
        id: 85,
        question: 'What\'s your go-to random fact',
    },     
    {
        id: 86,
        question: 'If you had stayed with your childhood sweetheart, what would your life be like now',
    },     
    {
        id: 87,
        question: 'What\'s your guilty pleasure',
    },     
    {
        id: 88,
        question: 'Should we respect our elders more',
    },     
    {
        id: 89,
        question: 'How competitive are you',
    },     
    {
        id: 90,
        question: 'What\'s the most suprising thing you\'ve ever been told',
    },     
    {
        id: 91,
        question: 'Have you ever had to dial the emergency services',
    },     
    {
        id: 92,
        question: 'Are you happy to talk to your friends about how much you earn',
    },     
    {
        id: 93,
        question: 'If you could give up sleep with no physical consequences would you',
    },     
    {
        id: 94,
        question: 'Have you ever had a recurring dream',
    },     
    {
        id: 95,
        question: 'You win the lottery. What\s the first thing you buy',
    },     
    {
        id: 96,
        question: 'Do you have an addictive personality',
    },     
    {
        id: 97,
        question: 'Have you fulfilled your potential',
    },     
    {
        id: 98,
        question: 'What did you want to be as a child',
    },     
    {
        id: 99,
        question: 'Do you believe in fate',
    },     
    {
        id: 100,
        question: 'Are you superstitious',
    },     
    {
        id: 101,
        question: 'How ambitious are you',
    },     
    {
        id: 102,
        question: 'Would you go into space if you could',
    },     
    {
        id: 103,
        question: 'What phrases do you use too much',
    },     
    {
        id: 104,
        question: 'What are you most sad to have lost',
    },        
    {
        id: 106,
        question: 'Describe the best time you\'ve ever had',
    },     
    {
        id: 107,
        question: 'How would you spend your time if you only had a year to live',
    },         
    {
        id: 109,
        question: 'Describe a piece of art that you like',
    },     
    {
        id: 110,
        question: 'Have you ever researched your family tree',
    },     
    {
        id: 111,
        question: 'Do you like it when your different groups of friends mix',
    },     
    {
        id: 112,
        question: 'What do you do to relax',
    },     
    {
        id: 113,
        question: 'If you could only build a happy home life or a successful career which would you choose',
    },     
    {
        id: 114,
        question: 'What is the most meaningful thing a person can do with their life',
    },     
    {
        id: 115,
        question: 'How would you like to be remembered',
    },     
    {
        id: 116,
        question: 'Should being happy be a primary objective in life',
    },     
    {
        id: 117,
        question: 'What would make you live somewhere else',
    },     
    {
        id: 118,
        question: 'What\'s the coolest thing you own',
    },
    {
        id: 119,
        question: 'What\s the most embarrassing song you know all the words to',
    },
    {
        id: 120,
        question: 'What\'s the most vain thing you\'ve ever done',
    },
    {
        id: 121,
        question: 'Is there an explanation for everything',
    },
    {
        id: 122,
        question: 'Do you believe in fate or destiny',
    },
    {
        id: 123,
        question: 'Is it more important to you to build a family or build a career',
    },
    {
        id: 124,
        question: 'Does everything happen for a reason',
    },
    {
        id: 125,
        question: 'Describe your dream house',
    },
    
]