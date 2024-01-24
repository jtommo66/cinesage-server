/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("movie").del();
  await knex("movie").insert([
    {
      id: 1,
      title: "Shaun of the Dead",
      image: "/images/ShaunOfTheDead.jpg",
      trailer: "https://www.youtube.com/watch?v=LIfcaZ4pC-4",
      synopsis:
        "The uneventful, aimless lives of a London electronics salesman and his layabout roommate are disrupted by the zombie apocalypse.",
    },
    {
      id: 2,
      title: "Superbad",
      image: "/images/Superbad.jpg",
      trailer: "https://www.youtube.com/watch?v=4eaZ_48ZYog",
      synopsis:
        "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
    },
    {
      id: 3,
      title: "Mr Bean's Holiday",
      image: "/images/MrBeansHoliday.jpg",
      trailer: "https://www.youtube.com/watch?v=hSxLUd8aly4",
      synopsis:
        "Mr. Bean wins a trip to Cannes where he unwittingly separates a young boy from his father and must help the two reunite. On the way he discovers France, bicycling, and true love.",
    },
    {
      id: 4,
      title: "Reservoir Dogs",
      image: "/images/ReservoirDogs.jpg",
      trailer: "https://www.youtube.com/watch?v=vayksn4Y93A&t=43s",
      synopsis:
        "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    },
    {
      id: 5,
      title: "Kill Bill: Vol 1",
      image: "/images/KillBillVol1.jpg",
      trailer: "https://www.youtube.com/watch?v=7kSuas6mRpk",
      synopsis:
        "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    },
    {
      id: 6,
      title: "Kill Bill: Vol 2",
      image: "/images/KillBillVol2.jpg",
      trailer: "https://www.youtube.com/watch?v=WTt8cCIvGYI",
      synopsis:
        "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.",
    },
    {
      id: 7,
      title: "Lord of the Rings: The Fellowship of the Ring",
      image: "/images/lotrFellowshipOfTheRing.jpg",
      trailer: "https://www.youtube.com/watch?v=aStYWD25fAQ",
      synopsis:
        "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    },
    {
      id: 8,
      title: "Lord of the Rings: The Two Towers",
      image: "/images/lotrTheTwoTowers.jpeg",
      trailer: "https://www.youtube.com/watch?v=Y4neBR0h39c",
      synopsis:
        "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    },
    {
      id: 9,
      title: "Lord of the Rings: The Return of the King",
      image: "/images/lotrReturnOfTheKing.jpg",
      trailer: "https://www.youtube.com/watch?v=r5X-hFf6Bwo",
      synopsis:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    },
    {
      id: 10,
      title: "No Country for Old Men",
      image: "/images/NoCountryForOldMen.jpeg",
      trailer: "https://www.youtube.com/watch?v=38A__WT3-o0",
      synopsis:
        "While out hunting, Llewelyn finds the grisly aftermath of a drug deal. Though he knows better, he cannot resist the cash left behind and takes it. The hunter becomes the hunted when a merciless killer named Chigurh picks up his trail.",
    },
    {
      id: 11,
      title: "Hot Fuzz",
      image: "/images/HotFuzz.jpg",
      trailer: "https://www.youtube.com/watch?v=ayTnvVpj9t4",
      synopsis:
        "A skilled London police officer, after irritating superiors with his embarrassing effectiveness, is transferred to a village where the easygoing officers object to his fervor for regulations, as a string of grisly murders strikes the town.",
    },
    {
      id: 12,
      title: "Parasite",
      image: "/images/Parasite.jpg",
      trailer: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
      synopsis:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    },
    {
      id: 13,
      title: "Midsommar",
      image: "/images/Midsommar.jpg",
      trailer: "https://www.youtube.com/watch?v=1Vnghdsjmd0",
      synopsis:
        "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
    },
    {
      id: 14,
      title: "The Grand Budapest Hotel",
      image: "/images/TheGrandBudapestHotel.jpg",
      trailer: "https://www.youtube.com/watch?v=1Fg5iWmQjwk&t=41s",
      synopsis:
        "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    },
    {
      id: 15,
      title: "The French Dispatch",
      image: "/images/TheFrenchDispatch.jpg",
      trailer: "https://www.youtube.com/watch?v=TcPk2p0Zaw4",
      synopsis:
        "A love letter to journalists set in an outpost of an American newspaper in a fictional twentieth century French city that brings to life a collection of stories published in The French Dispatch Magazine.",
    },
    {
      id: 16,
      title: "Isle of Dogs",
      image: "/images/IsleOfDogs.jpg",
      trailer: "https://www.youtube.com/watch?v=dt__kig8PVU&t=90s",
      synopsis:
        "Set in Japan, Isle of Dogs follows a boy's odyssey in search of his lost dog.",
    },
    {
      id: 17,
      title: "The Darjeeling Limited",
      image: "/images/TheDarjeelingLimited.jpeg",
      trailer: "https://www.youtube.com/watch?v=aO1bYukdvLI",
      synopsis:
        "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    },
    {
      id: 18,
      title: "Marcel the Shell with Shoes on",
      image: "/images/MarcelTheShellWithShoesOn.jpg",
      trailer: "https://www.youtube.com/watch?v=k98Afd7Nf3Y",
      synopsis:
        "A cash-strapped documentary maker decides to make his newest documentary about a mollusk shell he finds living in his Airbnb with his friends.",
    },
    {
      id: 19,
      title: "Fear and Loathing in Las Vegas",
      image: "/images/FearAndLoathingInLasVegas.jpg",
      trailer: "https://www.youtube.com/watch?v=CiTllYeJc48&t=17s",
      synopsis:
        "An oddball journalist and his psychopathic lawyer travel to Las Vegas for a series of psychedelic escapades.",
    },
    {
      id: 20,
      title: "The Death of Stalin",
      image: "/images/TheDeathOfStalin.png",
      trailer: "https://www.youtube.com/watch?v=E9eAshaPvYw",
      synopsis:
        "Moscow, 1953. After being in power for nearly 30 years, Soviet dictator, Joseph Vissarionovich Stalin, takes ill and quickly dies. Now the members of the Council of Ministers scramble for power.",
    },
    {
      id: 21,
      title: "Boiling Point",
      image: "/images/BoilingPoint.jpg",
      trailer: "https://www.youtube.com/watch?v=UBUfCL_tvro",
      synopsis:
        "Enter the relentless pressure of a restaurant kitchen as a head chef wrangles his team on the busiest day of the year.",
    },
    {
      id: 22,
      title: "Chef",
      image: "/images/Chef.jpg",
      trailer: "https://www.youtube.com/watch?v=FF_rYNupPwg",
      synopsis:
        "A head chef quits his restaurant job and buys a food truck in an effort to reclaim his creative promise, while piecing back together his estranged family.",
    },
    {
      id: 23,
      title: "Spiderman: Into the Spiderverse",
      image: "/images/SpidermanIntoTheSpiderverse.jpg",
      trailer: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ&t=4s",
      synopsis:
        "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    },
    {
      id: 24,
      title: "Spiderman: Across the Spiderverse",
      image: "/images/SpidermanAcrossTheSpiderverse.jpg",
      trailer: "https://www.youtube.com/watch?v=shW9i6k8cB0",
      synopsis:
        "Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    },
    {
      id: 25,
      title: "Seven Psychopaths",
      image: "/images/SevenPsychopaths.jpg",
      trailer: "https://www.youtube.com/watch?v=jsHR77oQKEY",
      synopsis:
        "A struggling screenwriter inadvertently becomes entangled in the Los Angeles criminal underworld after his oddball friends kidnap a gangster's beloved Shih Tzu.",
    },
    {
      id: 26,
      title: "In Bruges",
      image: "/images/InBruges.jpg",
      trailer: "https://www.youtube.com/watch?v=p-gG2qo_l_A",
      synopsis:
        "After a job gone wrong, hitman Ray and his partner await orders from their ruthless boss in Bruges, Belgium, the last place in the world Ray wants to be.",
    },
    {
      id: 27,
      title: "Three Billboards Outside Ebbing, Missouri",
      image: "/images/ThreeBillboardsOutsideEbbingMissouri.jpg",
      trailer: "https://www.youtube.com/watch?v=Jit3YhGx5pU",
      synopsis:
        "A mother personally challenges the local authorities to solve her daughter's murder when they fail to catch the culprit.",
    },
    {
      id: 28,
      title: "The Banshees of Inisherin",
      image: "/images/TheBansheesOfInishurin.jpg",
      trailer: "https://www.youtube.com/watch?v=uRu3zLOJN2c",
      synopsis:
        "Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.",
    },
    {
      id: 29,
      title: "Moneyball",
      image: "/images/Moneyball.jpeg",
      trailer: "https://www.youtube.com/watch?v=-4QPVo0UIzc",
      synopsis:
        "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
    },
    {
      id: 30,
      title: "The Last Duel",
      image: "/images/TheLastDuel.jpg",
      trailer: "https://www.youtube.com/watch?v=mgygUwPJvYk",
      synopsis:
        "The Knight Jean de Carrouges must settle the dispute over his wife Marguerite by challenging his former friend to a duel to the death.",
    },
    {
      id: 31,
      title: "Bullet Train",
      image: "/images/BulletTrain.jpeg",
      trailer: "https://www.youtube.com/watch?v=0IOsk2Vlc4o",
      synopsis:
        "Five assassins aboard a swiftly-moving bullet train find out that their missions have something in common.",
    },
    {
      id: 32,
      title: "Toy Story",
      image: "/images/ToyStory.jpg",
      trailer: "https://www.youtube.com/watch?v=v-PjgYDrg70",
      synopsis:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
    },
    {
      id: 33,
      title: "Toy Story 2",
      image: "/images/ToyStory2.jpg",
      trailer: "https://www.youtube.com/watch?v=t0bxljESZ5U",
      synopsis:
        "When Woody is stolen by a toy collector, Buzz and his friends set out on a rescue mission to save Woody before he becomes a museum toy property with his roundup gang Jessie, Prospector, and Bullseye.",
    },
    {
      id: 34,
      title: "Toy Story 3",
      image: "/images/ToyStory3.jpg",
      trailer: "https://www.youtube.com/watch?v=ZZv1vki4ou4",
      synopsis:
        "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
    },
    {
      id: 35,
      title: "Kubo and the Two Strings",
      image: "/images/KuboAndTheTwoStrings.png",
      trailer: "https://www.youtube.com/watch?v=qZefKaANfe0",
      synopsis:
        "A young boy named Kubo must locate a magical suit of armour worn by his late father in order to defeat a vengeful spirit from the past.",
    },
    {
      id: 36,
      title: "Drive",
      image: "/images/Drive.jpg",
      trailer: "https://www.youtube.com/watch?v=KBiOF3y1W0Y",
      synopsis:
        "A mysterious Hollywood action film stuntman gets in trouble with gangsters when he tries to help his neighbor's husband rob a pawn shop while serving as his getaway driver.",
    },
    {
      id: 37,
      title: "Goodfellas",
      image: "/images/Goodfellas.jpg",
      trailer: "https://www.youtube.com/watch?v=2ilzidi_J8Q",
      synopsis:
        "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
    },
    {
      id: 38,
      title: "The Wolf of Wall Street",
      image: "/images/TheWolfOfWallStreet.jpg",
      trailer: "https://www.youtube.com/watch?v=iszwuX1AK6A",
      synopsis:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    },
    {
      id: 39,
      title: "Shutter Island",
      image: "/images/ShutterIsland.jpg",
      trailer: "https://www.youtube.com/watch?v=v8yrZSkKxTA",
      synopsis:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
    },
    {
      id: 40,
      title: "Monsters, Inc.",
      image: "/images/MonstersInc.jpg",
      trailer: "https://www.youtube.com/watch?v=CGbgaHoapFM",
      synopsis:
        "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
    },
    {
      id: 41,
      title: "Monsters University",
      image: "/images/MonstersUniversity.jpg",
      trailer: "https://www.youtube.com/watch?v=QxrQ6BaijAY",
      synopsis:
        "A look at the relationship between Mike Wazowski (Billy Crystal) and James P. Sully Sullivan (John Goodman) during their days at Monsters University, when they weren't necessarily the best of friends.",
    },
  ]);
};
