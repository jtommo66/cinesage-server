/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("review").del();
  await knex("review").insert([
    {
      id: 1,
      review:
        "Every zombie movie should have a scene where the characters beat the zombies to death with a pool cue, to the beat of Don't Stop Me Now.",
      movie_id: 1,
      user_id: 9,
      rating: 5,
    },
    {
      id: 2,
      review: "Most quotable movie ever made.",
      movie_id: 2,
      user_id: 10,
      rating: 5,
    },
    {
      id: 3,
      review:
        "Mr. Bean is directly responsible for multiple deaths AND the blowing up of Willem Dafoe — he has blood on his hands that shall never be cleansed",
      movie_id: 3,
      user_id: 3,
      rating: 5,
    },
    {
      id: 4,
      review:
        "I feel like if this were made today Nice Guy Eddie would be played by Jonah Hill",
      movie_id: 4,
      user_id: 4,
      rating: 4,
    },
    {
      id: 5,
      review: "Tarantino's casting call for this like 'bad bitches only'.",
      movie_id: 5,
      user_id: 5,
      rating: 4,
    },
    {
      id: 6,
      review:
        "Listen..... the entire chapter 'Elle and I' is absolutely one of the best sequences that quantum toronto has ever MADE",
      movie_id: 6,
      user_id: 6,
      rating: 4,
    },
    {
      id: 7,
      review: "Just guys bein' dudes. Whats better?",
      movie_id: 7,
      user_id: 7,
      rating: 5,
    },
    {
      id: 8,
      review: "PO-TA-TOES. BOIL 'EM, MASH 'EM, STICK 'EM IN A STEW.",
      movie_id: 8,
      user_id: 8,
      rating: 5,
    },
    {
      id: 9,
      review: "Best movie of the best trilogy of movies ever made.",
      movie_id: 9,
      user_id: 9,
      rating: 5,
    },
    {
      id: 10,
      review:
        "The most jarring movie I've ever seen and that's without taking Javier Bardem's haircut into account",
      movie_id: 10,
      user_id: 2,
      rating: 5,
    },
    {
      id: 11,
      review:
        "Line delivery was invented when Olivia Colman went 'Nothin' like a bit of girl on girl!'.",
      movie_id: 11,
      user_id: 1,
      rating: 5,
    },
    {
      id: 12,
      review:
        "No-one can imitate North Korean news anchors like you has to be the rarest compliment ever.",
      movie_id: 12,
      user_id: 1,
      rating: 4.5,
    },
    {
      id: 13,
      review: "I am SO glad ari aster clearly never went to therapy",
      movie_id: 13,
      user_id: 3,
      rating: 4,
    },
    {
      id: 14,
      review: "How do I hire Wes Anderson to decorate my home?",
      movie_id: 14,
      user_id: 3,
      rating: 5,
    },
    {
      id: 15,
      review:
        "I feel like I just ate a perfectly cooked meal by one of my favorite chefs. Just the right number of courses. Delicious.",
      movie_id: 15,
      user_id: 5,
      rating: 3.5,
    },
    {
      id: 16,
      review:
        "Say ISLE OF DOGS slowly. Now say I LOVE DOGS slowly. I just blew your mind.",
      movie_id: 16,
      user_id: 6,
      rating: 5,
    },
    {
      id: 17,
      review: "The Holy Trinity of Noses.",
      movie_id: 17,
      user_id: 7,
      rating: 4.5,
    },
    {
      id: 18,
      review:
        "I challenge anyone to watch this film after a bottle of wine and remain dry eyed.",
      movie_id: 18,
      user_id: 4,
      rating: 4,
    },
    {
      id: 19,
      review: "What just happened? Was that Tobey Maguire?",
      movie_id: 19,
      user_id: 5,
      rating: 5,
    },
    {
      id: 20,
      review: "Jason Isaacs' introduction deserves its own Oscar.",
      movie_id: 20,
      user_id: 10,
      rating: 5,
    },
    {
      id: 21,
      review:
        "I will never work in a professional kitchen. I need a drink after watching that.",
      movie_id: 21,
      user_id: 6,
      rating: 5,
    },
    {
      id: 22,
      review: "Pasta and Scarlett Johansson - whats not to like?",
      movie_id: 22,
      user_id: 2,
      rating: 3.5,
    },
    {
      id: 23,
      review: "Best Spider-man movie without question.",
      movie_id: 23,
      user_id: 3,
      rating: 4,
    },
    {
      id: 24,
      review: "My holes can take me anywhere.",
      movie_id: 24,
      user_id: 4,
      rating: 3.5,
    },
    {
      id: 25,
      review:
        "I relate to woody harrelson in seven psychopaths and keanu reeves in john wick because I, too, would go on a killing rampage for a dog",
      movie_id: 25,
      user_id: 5,
      rating: 5,
    },
    {
      id: 26,
      review: "And the oscar for most brutal death scene ever goes to...",
      movie_id: 26,
      user_id: 7,
      rating: 5,
    },
    {
      id: 27,
      review:
        "more movies with frances mcdormand threatening to kill all rapists please",
      movie_id: 27,
      user_id: 7,
      rating: 4.5,
    },
    {
      id: 28,
      review: "I will NOT leave my donkey outside when I'm sad",
      movie_id: 28,
      user_id: 8,
      rating: 5,
    },
    {
      id: 29,
      review:
        "Never seen a baseball game. (Watches Moneyball) HOW CAN YOU NOT BE ROMANTIC ABOUT BASEBALL?!",
      movie_id: 29,
      user_id: 9,
      rating: 4,
    },
    {
      id: 30,
      review: "How doth ye like yon apples?!",
      movie_id: 30,
      user_id: 10,
      rating: 3.5,
    },
    {
      id: 31,
      review: "We demand a tangarine/lemon spinoff. NOW.",
      movie_id: 31,
      user_id: 8,
      rating: 4.5,
    },
    {
      id: 32,
      review:
        "The most relatable part of this movie is when buzz becomes self-aware, has an existential crisis and sinks into depression",
      movie_id: 32,
      user_id: 10,
      rating: 4,
    },
    {
      id: 33,
      review:
        "Did Al build his Toy Barn across the street from his apartment, or did he move into the apartment because it was across the street from his Toy Barn?",
      movie_id: 33,
      user_id: 8,
      rating: 3,
    },
    {
      id: 34,
      review:
        "Can we do another barbie movie, but its this barbie and ken plz?",
      movie_id: 34,
      user_id: 10,
      rating: 3,
    },
    {
      id: 35,
      review:
        "Some of the most beautiful animation I've ever seen. The imagination and creativity behind this movie is absolutely mind-blowing. Step aside Pixar, Laika is taking over.",
      movie_id: 35,
      user_id: 8,
      rating: 4.5,
    },
    {
      id: 36,
      review: "When Ryan Gosling said '...', man, I felt that.",
      movie_id: 36,
      user_id: 10,
      rating: 5,
    },
    {
      id: 37,
      review: "idk man there were some pretty bad fellas in this one",
      movie_id: 37,
      user_id: 8,
      rating: 5,
    },
    {
      id: 38,
      review:
        "the most realistic thing about this movie is that Leo dates a 22 year old",
      movie_id: 38,
      user_id: 10,
      rating: 5,
    },
    {
      id: 39,
      review:
        "Take a shot every time Leo reminds you he's a fedrul you ess maashull",
      movie_id: 39,
      user_id: 8,
      rating: 4,
    },
    {
      id: 40,
      review:
        "The Monsters Inc warehouse closet door chase scene > the inception hotel corridor fight scene",
      movie_id: 40,
      user_id: 10,
      rating: 4,
    },
    {
      id: 41,
      review:
        "Perfect movie for eight-year-olds who are also college students.",
      movie_id: 41,
      user_id: 8,
      rating: 2.5,
    },
    {
      id: 42,
      review:
        "There need to be more movies where the characters win with weaponized depression.",
      movie_id: 42,
      user_id: 10,
      rating: 4,
    },
    {
      id: 43,
      review: "Just throw the whole damn kid away tbh",
      movie_id: 43,
      user_id: 8,
      rating: 3,
    },
    {
      id: 44,
      review:
        "the population dropped to 12 million people due to the virus and people still watched shrek. iconic",
      movie_id: 44,
      user_id: 10,
      rating: 3,
    },
    {
      id: 45,
      review: "Jet Li so badass he made it rain",
      movie_id: 45,
      user_id: 8,
      rating: 3.5,
    },
    {
      id: 46,
      review: "I love those silly looking goobers. - Poetic Cinema.",
      movie_id: 46,
      user_id: 10,
      rating: 4,
    },
    {
      id: 47,
      review: "why was this filmed with a pink motorola razr",
      movie_id: 47,
      user_id: 8,
      rating: 3.5,
    },
    {
      id: 48,
      review: "Aaaand as usual kids ruin everything.",
      movie_id: 48,
      user_id: 10,
      rating: 3,
    },
    {
      id: 49,
      review:
        "When the zombie apocalypse happens, I really home they aren't fast zombies... I hate fast zombies...",
      movie_id: 49,
      user_id: 8,
      rating: 2.5,
    },
    {
      id: 50,
      review: "Someone's ear is in danger of having hair brushed over it",
      movie_id: 50,
      user_id: 10,
      rating: 4,
    },
    {
      id: 51,
      review: "Tallahassee carried...",
      movie_id: 51,
      user_id: 8,
      rating: 3.5,
    },
    {
      id: 52,
      review:
        "I would never invite hitler to my movie premiere. That guy is bad news.",
      movie_id: 52,
      user_id: 10,
      rating: 4.5,
    },
    {
      id: 53,
      review:
        "Me when christoph waltz smoothly talks his way out of death threatening situations: thats my aesthetic that is what i want to achieve",
      movie_id: 53,
      user_id: 8,
      rating: 5,
    },
    {
      id: 54,
      review: "David Bowie's Bulge The Movie.",
      movie_id: 54,
      user_id: 10,
      rating: 3.5,
    },
    {
      id: 55,
      review:
        "oscar isaac: yeah can I get uuuuhhhhhh five more of those little robot women plz",
      movie_id: 55,
      user_id: 8,
      rating: 4,
    },
    {
      id: 56,
      review: "As Owen Wilson would say: wow",
      movie_id: 56,
      user_id: 10,
      rating: 3,
    },
    {
      id: 57,
      review: "Hans Zimmer really ate this one up",
      movie_id: 57,
      user_id: 8,
      rating: 4,
    },
    {
      id: 58,
      review: "Everyone: David, don't touch it. David: Oops.",
      movie_id: 58,
      user_id: 10,
      rating: 3.5,
    },
    {
      id: 59,
      review: "The monkey thing was cool",
      movie_id: 59,
      user_id: 8,
      rating: 4,
    },
    {
      id: 60,
      review:
        "I wanted the full experience, so am going into this without drinking water for the last 24 hours. I'm very dehydrated. ",
      movie_id: 60,
      user_id: 10,
      rating: 5,
    },
    {
      id: 61,
      review:
        "I'm just like Eloise because i too am lonely and spend most of my time thinking about anya taylor joy",
      movie_id: 61,
      user_id: 8,
      rating: 3,
    },
    {
      id: 62,
      review:
        "I love Paul Dano but I also love watching people beat the shit out of Paul Dano",
      movie_id: 62,
      user_id: 10,
      rating: 4.5,
    },
    {
      id: 63,
      review: "Where the hell was Bugs Bunny?",
      movie_id: 63,
      user_id: 8,
      rating: 3.5,
    },
    {
      id: 64,
      review: "Biden should do this with Fortnite.",
      movie_id: 64,
      user_id: 10,
      rating: 3,
    },
    {
      id: 65,
      review:
        "It feels good when one of your childhood favorites holds up. A solid flick all around.",
      movie_id: 65,
      user_id: 8,
      rating: 4,
    },
    {
      id: 66,
      review:
        "I hate to say I hope I dont sound ridiculous I dont know who Le Mans is. He could be walking down the street, I wouldnt know a thing. Sorry to Le Mans.",
      movie_id: 66,
      user_id: 10,
      rating: 2,
    },
    {
      id: 67,
      review: "I hope Daniel Brühl is having a great day.",
      movie_id: 67,
      user_id: 8,
      rating: 4,
    },
    {
      id: 68,
      review:
        "not to be that filmbro guy, but this film was an experience and it changed me",
      movie_id: 68,
      user_id: 10,
      rating: 4,
    },
    {
      id: 69,
      review: "They ain't even catch any foxes... Michael Scott looks bad too",
      movie_id: 69,
      user_id: 8,
      rating: 2.5,
    },
    {
      id: 70,
      review:
        "This film is like a 2 and a half hour line of cocaine. Movie magic.",
      movie_id: 70,
      user_id: 10,
      rating: 4,
    },
    {
      id: 71,
      review: "Captain Insano shows no mercy",
      movie_id: 71,
      user_id: 8,
      rating: 4,
    },
    {
      id: 72,
      review:
        "Mediocre dramas based on true stories that nobody under the age of 50 will see are the backbone of the uk film industry",
      movie_id: 72,
      user_id: 10,
      rating: 2,
    },
    {
      id: 73,
      review:
        "Brad Pitt's German seems a lot more convincing than his Italian.",
      movie_id: 73,
      user_id: 8,
      rating: 5,
    },
    {
      id: 74,
      review:
        "Benedict Cumberbatch saying “hope is a dangerous thing” really threw me for a loop like damn ma, you listening to lana del rey before heading into battle?",
      movie_id: 74,
      user_id: 10,
      rating: 4,
    },
    {
      id: 75,
      review: "Harry Styles and the mysterious ticking noise",
      movie_id: 75,
      user_id: 8,
      rating: 4,
    },
    {
      id: 76,
      review: "That Gary Oldman fella sure can act",
      movie_id: 76,
      user_id: 10,
      rating: 4,
    },
    {
      id: 77,
      review: "Jake Gyllenhaal bouta turn ISIS into WASWAS",
      movie_id: 77,
      user_id: 8,
      rating: 4,
    },
    {
      id: 78,
      review: "That's not a knife... That a f***ing duck?!",
      movie_id: 78,
      user_id: 10,
      rating: 4,
    },
    {
      id: 79,
      review: "Who isn't in this movie?",
      movie_id: 79,
      user_id: 8,
      rating: 5,
    },
    {
      id: 80,
      review: "Y'all talkin' to me?",
      movie_id: 80,
      user_id: 10,
      rating: 4,
    },
    {
      id: 81,
      review: "12 years a slave more like 12 years of me crying",
      movie_id: 81,
      user_id: 8,
      rating: 4,
    },
    {
      id: 82,
      review: "Wait, where was David Bowie?",
      movie_id: 82,
      user_id: 10,
      rating: 3.5,
    },
    {
      id: 83,
      review: "This went so hard for absolutely no reason.",
      movie_id: 83,
      user_id: 8,
      rating: 4,
    },
    {
      id: 84,
      review: "would die for each and every one of these guys",
      movie_id: 84,
      user_id: 10,
      rating: 4,
    },
    {
      id: 85,
      review: "Brendan Fraser is an all-time great movie yeller",
      movie_id: 85,
      user_id: 8,
      rating: 4,
    },
    {
      id: 86,
      review:
        "Moral of the movie - if you kick cool enough it's fine to kick a girl",
      movie_id: 86,
      user_id: 10,
      rating: 3,
    },
    {
      id: 87,
      review:
        "This movie has some of the most satisfying punching sound effects ever",
      movie_id: 87,
      user_id: 8,
      rating: 3,
    },
    {
      id: 88,
      review: "I could do this.",
      movie_id: 88,
      user_id: 10,
      rating: 4,
    },
    {
      id: 89,
      review: "Johnny Lawrence was the Logan Paul of the 1980s.",
      movie_id: 89,
      user_id: 8,
      rating: 4,
    },
    {
      id: 90,
      review: "To be fair, he literally never backs down...",
      movie_id: 90,
      user_id: 10,
      rating: 1.5,
    },
    {
      id: 91,
      review:
        "Keanu Reeves truly sees martial arts as an art, and that love pours out of every frame of this movie",
      movie_id: 91,
      user_id: 8,
      rating: 3,
    },
    {
      id: 92,
      review: "Thank you, Canada",
      movie_id: 92,
      user_id: 10,
      rating: 4,
    },
    {
      id: 93,
      review:
        "If ben wade kills me, do NOT prosecute him. He caught ME slipping, that is on ME.",
      movie_id: 93,
      user_id: 8,
      rating: 4,
    },
    {
      id: 94,
      review:
        "A genuinely funny and wonderfully acted version of A Million Ways to Die in the West.",
      movie_id: 94,
      user_id: 10,
      rating: 4,
    },
    {
      id: 95,
      review: "Are we sure tarantino made this film? There were no feet shots",
      movie_id: 95,
      user_id: 8,
      rating: 5,
    },
    {
      id: 96,
      review:
        "Every man who meets Ned Kelly: no homo but I would literally kill 100 cops for you",
      movie_id: 96,
      user_id: 10,
      rating: 2.5,
    },
    {
      id: 97,
      review:
        "I got a lot going on in my life right now, but at least I'm not this dude.",
      movie_id: 97,
      user_id: 8,
      rating: 3.5,
    },
    {
      id: 98,
      review: "I like these guys. I hope they were okay after the movie ended",
      movie_id: 98,
      user_id: 10,
      rating: 4,
    },
    {
      id: 99,
      review:
        "Any film that recognizes that John C. Reilly is a perfect romantic lead is good by me",
      movie_id: 99,
      user_id: 8,
      rating: 4,
    },
    {
      id: 100,
      review: "Gotta be the best ending of all time",
      movie_id: 100,
      user_id: 10,
      rating: 4,
    },
  ]);
};
