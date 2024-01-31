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
      image: "images/ShaunOfTheDead.jpg",
      trailer: "https://www.youtube.com/embed/LIfcaZ4pC-4?si=BKgv6jPUOR0ydZmd",
      synopsis:
        "The uneventful, aimless lives of a London electronics salesman and his layabout roommate are disrupted by the zombie apocalypse.",
    },
    {
      id: 2,
      title: "Superbad",
      image: "images/Superbad.jpg",
      trailer: "https://www.youtube.com/embed/4eaZ_48ZYog?si=GMrJ7eTAgI1nwhWV",
      synopsis:
        "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
    },
    {
      id: 3,
      title: "Mr Bean's Holiday",
      image: "images/MrBeansHoliday.jpg",
      trailer: "https://www.youtube.com/embed/hSxLUd8aly4?si=qYuA9zFLu_5-cqpv",
      synopsis:
        "Mr. Bean wins a trip to Cannes where he unwittingly separates a young boy from his father and must help the two reunite. On the way he discovers France, bicycling, and true love.",
    },
    {
      id: 4,
      title: "Reservoir Dogs",
      image: "images/ReservoirDogs.jpg",
      trailer: "https://www.youtube.com/embed/vayksn4Y93A?si=hC40J4Nx3q5IcaYR",
      synopsis:
        "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    },
    {
      id: 5,
      title: "Kill Bill: Vol 1",
      image: "images/KillBillVol1.jpg",
      trailer: "https://www.youtube.com/embed/7kSuas6mRpk?si=6gDnztRtpYoL4Iwo",
      synopsis:
        "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    },
    {
      id: 6,
      title: "Kill Bill: Vol 2",
      image: "images/KillBillVol2.jpg",
      trailer: "https://www.youtube.com/embed/WTt8cCIvGYI?si=iSOX0V1c9DUBX6ri",
      synopsis:
        "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.",
    },
    {
      id: 7,
      title: "Lord of the Rings: The Fellowship of the Ring",
      image: "images/lotrFellowshipOfTheRing.jpg",
      trailer: "https://www.youtube.com/embed/aStYWD25fAQ?si=DazuNfd4p9Xt-IZq",
      synopsis:
        "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    },
    {
      id: 8,
      title: "Lord of the Rings: The Two Towers",
      image: "images/lotrTheTwoTowers.jpeg",
      trailer: "https://www.youtube.com/embed/Y4neBR0h39c?si=lNthpCDogm6oJsw1",
      synopsis:
        "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    },
    {
      id: 9,
      title: "Lord of the Rings: The Return of the King",
      image: "images/lotrReturnOfTheKing.jpg",
      trailer: "https://www.youtube.com/embed/r5X-hFf6Bwo?si=5uHpQRRFseHrYF02",
      synopsis:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    },
    {
      id: 10,
      title: "No Country for Old Men",
      image: "images/NoCountryForOldMen.jpeg",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0?si=5dHReLoZ4PopW4eO",
      synopsis:
        "While out hunting, Llewelyn finds the grisly aftermath of a drug deal. Though he knows better, he cannot resist the cash left behind and takes it. The hunter becomes the hunted when a merciless killer named Chigurh picks up his trail.",
    },
    {
      id: 11,
      title: "Hot Fuzz",
      image: "images/HotFuzz.jpg",
      trailer: "https://www.youtube.com/embed/ayTnvVpj9t4?si=RP9ywIF_Fv_U-VRF",
      synopsis:
        "A skilled London police officer, after irritating superiors with his embarrassing effectiveness, is transferred to a village where the easygoing officers object to his fervor for regulations, as a string of grisly murders strikes the town.",
    },
    {
      id: 12,
      title: "Parasite",
      image: "images/Parasite.jpg",
      trailer: "https://www.youtube.com/embed/5xH0HfJHsaY?si=_LsA6_kd6Aj-nEQI",
      synopsis:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    },
    {
      id: 13,
      title: "Midsommar",
      image: "images/Midsommar.jpg",
      trailer: "https://www.youtube.com/embed/1Vnghdsjmd0?si=gDo9Ey6xwoHbFA5W",
      synopsis:
        "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
    },
    {
      id: 14,
      title: "The Grand Budapest Hotel",
      image: "images/TheGrandBudapestHotel.jpg",
      trailer: "https://www.youtube.com/embed/1Fg5iWmQjwk?si=strgCUWJzRfc27HD",
      synopsis:
        "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    },
    {
      id: 15,
      title: "The French Dispatch",
      image: "images/TheFrenchDispatch.jpg",
      trailer: "https://www.youtube.com/embed/TcPk2p0Zaw4?si=KmYJYc6uEq5TQZ0n",
      synopsis:
        "A love letter to journalists set in an outpost of an American newspaper in a fictional twentieth century French city that brings to life a collection of stories published in The French Dispatch Magazine.",
    },
    {
      id: 16,
      title: "Isle of Dogs",
      image: "images/IsleOfDogs.jpg",
      trailer: "https://www.youtube.com/embed/dt__kig8PVU?si=oDZs0SffZiXmKnt7",
      synopsis:
        "Set in Japan, Isle of Dogs follows a boy's odyssey in search of his lost dog.",
    },

    {
      id: 17,
      title: "The Darjeeling Limited",
      image: "images/TheDarjeelingLimited.jpeg",
      trailer: "https://www.youtube.com/embed/aO1bYukdvLI?si=UB_qicQ_apMYlVDE",
      synopsis:
        "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    },
    {
      id: 18,
      title: "Marcel the Shell with Shoes on",
      image: "images/MarcelTheShellWithShoesOn.jpg",
      trailer: "https://www.youtube.com/embed/k98Afd7Nf3Y?si=0Y_sd1zpyu4dNWVu",
      synopsis:
        "A cash-strapped documentary maker decides to make his newest documentary about a mollusk shell he finds living in his Airbnb with his friends.",
    },
    {
      id: 19,
      title: "Fear and Loathing in Las Vegas",
      image: "images/FearAndLoathingInLasVegas.jpg",
      trailer: "https://www.youtube.com/embed/CiTllYeJc48?si=x0PThQgx8MAI0Ar7",
      synopsis:
        "An oddball journalist and his psychopathic lawyer travel to Las Vegas for a series of psychedelic escapades.",
    },
    {
      id: 20,
      title: "The Death of Stalin",
      image: "images/TheDeathOfStalin.jpeg",
      trailer: "https://www.youtube.com/embed/E9eAshaPvYw?si=S_gtmY2UJyMkkv8U",
      synopsis:
        "Moscow, 1953. After being in power for nearly 30 years, Soviet dictator, Joseph Vissarionovich Stalin, takes ill and quickly dies. Now the members of the Council of Ministers scramble for power.",
    },
    {
      id: 21,
      title: "Boiling Point",
      image: "images/BoilingPoint.jpeg",
      trailer: "https://www.youtube.com/embed/UBUfCL_tvro?si=1p3a44NTgmh6kHeY",
      synopsis:
        "Enter the relentless pressure of a restaurant kitchen as a head chef wrangles his team on the busiest day of the year.",
    },
    {
      id: 22,
      title: "Chef",
      image: "images/Chef.jpg",
      trailer: "https://www.youtube.com/embed/FF_rYNupPwg?si=C-Ur9eGRiYoYu2Ej",
      synopsis:
        "A head chef quits his restaurant job and buys a food truck in an effort to reclaim his creative promise, while piecing back together his estranged family.",
    },
    {
      id: 23,
      title: "Spiderman: Into the Spiderverse",
      image: "images/SpidermanIntoTheSpiderverse.jpg",
      trailer: "https://www.youtube.com/embed/g4Hbz2jLxvQ?si=cLD-Ptf93XOiNsV1",
      synopsis:
        "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    },
    {
      id: 24,
      title: "Spiderman: Across the Spiderverse",
      image: "images/SpidermanAcrossTheSpiderverse.jpg",
      trailer: "https://www.youtube.com/embed/shW9i6k8cB0?si=AhAPB3CsgwKBy56S",
      synopsis:
        "Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    },
    {
      id: 25,
      title: "Seven Psychopaths",
      image: "images/SevenPsychopaths.jpg",
      trailer: "https://www.youtube.com/embed/jsHR77oQKEY?si=lHSJ4GeQdsRzBgQN",
      synopsis:
        "A struggling screenwriter inadvertently becomes entangled in the Los Angeles criminal underworld after his oddball friends kidnap a gangster's beloved Shih Tzu.",
    },
    {
      id: 26,
      title: "In Bruges",
      image: "images/InBruges.jpg",
      trailer: "https://www.youtube.com/embed/p-gG2qo_l_A?si=28V7HnoPUsTZ8KCQ",
      synopsis:
        "After a job gone wrong, hitman Ray and his partner await orders from their ruthless boss in Bruges, Belgium, the last place in the world Ray wants to be.",
    },
    {
      id: 27,
      title: "Three Billboards Outside Ebbing, Missouri",
      image: "images/ThreeBillboardsOutsideEbbingMissouri.jpg",
      trailer: "https://www.youtube.com/embed/Jit3YhGx5pU?si=WokX6m-l4aKHgUpV",
      synopsis:
        "A mother personally challenges the local authorities to solve her daughter's murder when they fail to catch the culprit.",
    },
    {
      id: 28,
      title: "The Banshees of Inisherin",
      image: "images/TheBansheesOfInishurin.jpg",
      trailer: "https://www.youtube.com/embed/uRu3zLOJN2c?si=cp64HRGQsbWvs8bg",
      synopsis:
        "Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.",
    },
    {
      id: 29,
      title: "Moneyball",
      image: "images/Moneyball.jpeg",
      trailer: "https://www.youtube.com/embed/-4QPVo0UIzc?si=5_Z6O1-2ISukwlXL",
      synopsis:
        "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
    },
    {
      id: 30,
      title: "The Last Duel",
      image: "images/TheLastDuel.jpeg",
      trailer: "https://www.youtube.com/embed/mgygUwPJvYk?si=odkncPdAkk6CR_vQ",
      synopsis:
        "The Knight Jean de Carrouges must settle the dispute over his wife Marguerite by challenging his former friend to a duel to the death.",
    },
    {
      id: 31,
      title: "Bullet Train",
      image: "images/BulletTrain.jpeg",
      trailer: "https://www.youtube.com/embed/0IOsk2Vlc4o?si=NFMJkxhQs2cbi0CN",
      synopsis:
        "Five assassins aboard a swiftly-moving bullet train find out that their missions have something in common.",
    },
    {
      id: 32,
      title: "Toy Story",
      image: "images/ToyStory.jpg",
      trailer: "https://www.youtube.com/embed/v-PjgYDrg70?si=Q3voHg5-eQLOpSNa",
      synopsis:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
    },
    {
      id: 33,
      title: "Toy Story 2",
      image: "images/ToyStory2.jpg",
      trailer: "https://www.youtube.com/embed/t0bxljESZ5U?si=xYyEyKZthZpc5hmj",
      synopsis:
        "When Woody is stolen by a toy collector, Buzz and his friends set out on a rescue mission to save Woody before he becomes a museum toy property with his roundup gang Jessie, Prospector, and Bullseye.",
    },
    {
      id: 34,
      title: "Toy Story 3",
      image: "images/ToyStory3.jpeg",
      trailer: "https://www.youtube.com/embed/ZZv1vki4ou4?si=YlCbPLAPymzGHx35",
      synopsis:
        "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
    },
    {
      id: 35,
      title: "Kubo and the Two Strings",
      image: "images/KuboAndTheTwoStrings.png",
      trailer: "https://www.youtube.com/embed/qZefKaANfe0?si=jdPc-A--MsTDdcFe",
      synopsis:
        "A young boy named Kubo must locate a magical suit of armour worn by his late father in order to defeat a vengeful spirit from the past.",
    },
    {
      id: 36,
      title: "Drive",
      image: "images/Drive.jpg",
      trailer: "https://www.youtube.com/embed/KBiOF3y1W0Y?si=MDR1BJCWxyY7V_Xt",
      synopsis:
        "A mysterious Hollywood action film stuntman gets in trouble with gangsters when he tries to help his neighbor's husband rob a pawn shop while serving as his getaway driver.",
    },
    {
      id: 37,
      title: "Goodfellas",
      image: "images/Goodfellas.jpg",
      trailer: "https://www.youtube.com/embed/2ilzidi_J8Q?si=GsrSzZ-ILYDjMhT_",
      synopsis:
        "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
    },
    {
      id: 38,
      title: "The Wolf of Wall Street",
      image: "images/TheWolfOfWallStreet.jpg",
      trailer: "https://www.youtube.com/embed/iszwuX1AK6A?si=zZRy137NGaWatWCs",
      synopsis:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    },
    {
      id: 39,
      title: "Shutter Island",
      image: "images/ShutterIsland.jpg",
      trailer: "https://www.youtube.com/embed/v8yrZSkKxTA?si=x9-qrx78a27mC3CA",
      synopsis:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
    },
    {
      id: 40,
      title: "Monsters, Inc.",
      image: "images/MonstersInc.jpg",
      trailer: "https://www.youtube.com/embed/CGbgaHoapFM?si=32K0Are0nePV8LAZ",
      synopsis:
        "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
    },
    {
      id: 41,
      title: "Monsters University",
      image: "images/MonstersUniversity.jpg",
      trailer: "https://www.youtube.com/embed/QxrQ6BaijAY?si=p5SVc-lQEZCtWKZS",
      synopsis:
        "A look at the relationship between Mike Wazowski (Billy Crystal) and James P. Sully Sullivan (John Goodman) during their days at Monsters University, when they weren't necessarily the best of friends.",
    },
    {
      id: 42,
      title: "A Hitchhiker's Guide to the Galaxy",
      image: "images/AHitchhikersGuidetotheGalaxy.jpeg",
      trailer: "https://www.youtube.com/embed/1PaPp9MJm-I?si=uFS5f4ayxgaOABXt",
      synopsis:
        "Mere seconds before the Earth is to be demolished by an alien construction crew, journeyman Arthur Dent is swept off the planet by his friend Ford Prefect, a researcher penning a new edition of The Hitchhiker's Guide to the Galaxy",
    },
    {
      id: 43,
      title: "Insidious",
      image: "images/Insidious.jpg",
      trailer: "https://www.youtube.com/embed/zuZnRUcoWos?si=PWJi3kAUz_gsPbXY",
      synopsis:
        "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.",
    },
    {
      id: 44,
      title: "I Am Legend",
      image: "images/IAmLegend.jpg",
      trailer: "https://www.youtube.com/embed/sFNPNT_4Qww?si=F1jRCZ_tM7r4ERoM",
      synopsis:
        "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
    },
    {
      id: 45,
      title: "The Forbidden Kingdom",
      image: "images/TheForbiddenKingdom.jpeg",
      trailer: "https://www.youtube.com/embed/uVEUNp_JnMc?si=GqJ95AS36Oc_hfvn",
      synopsis:
        "A discovery made by a kung fu obsessed American teen sends him on an adventure to ancient China, where he joins up with a band of martial arts warriors in order to free the imprisoned Monkey King.",
    },
    {
      id: 46,
      title: "Dawn of the Dead",
      image: "images/DawnoftheDead.jpeg",
      trailer: "https://www.youtube.com/embed/DV8mJcuYVaA?si=1G-FrOYfvifDOQ3g",
      synopsis:
        "A nurse, a policeman, a young married couple, a salesman and other survivors of a worldwide plague that is producing aggressive, flesh-eating zombies, take refuge in a mega Midwestern shopping mall.",
    },
    {
      id: 47,
      title: "28 Days Later",
      image: "images/28DaysLater.jpeg",
      trailer: "https://www.youtube.com/embed/FcDhdb6J3rM?si=2dUBJnX3sXQ_KYE7",
      synopsis:
        "Four weeks after a mysterious, incurable virus spreads throughout the UK, a handful of survivors try to find sanctuary.",
    },
    {
      id: 48,
      title: "28 Weeks Later",
      image: "images/28WeeksLater.jpg",
      trailer: "https://www.youtube.com/embed/ljqY7qrnycw?si=doEGQS_6WthMf368",
      synopsis:
        "Six months after the rage virus was inflicted on the population of Great Britain, the US Army helps to secure a small area of London for the survivors to repopulate and start again. But not everything goes according to plan.",
    },
    {
      id: 49,
      title: "World War Z",
      image: "images/WorldWarZ.jpeg",
      trailer: "https://www.youtube.com/embed/Md6Dvxdr0AQ?si=Avn5b43XoXVWDt18",
      synopsis:
        "Former United Nations employee Gerry Lane traverses the world in a race against time to stop a zombie pandemic that is toppling armies and governments and threatens to destroy humanity itself.",
    },
    {
      id: 50,
      title: "Zombieland",
      image: "images/Zombieland.jpeg",
      trailer: "https://www.youtube.com/embed/8m9EVP8X7N8?si=P_o20FSkZL7G7__D",
      synopsis:
        "A shy student trying to reach his family in Ohio, a gun-toting bruiser in search of the last Twinkie and a pair of sisters striving to get to an amusement park join forces in a trek across a zombie-filled America.",
    },
    {
      id: 51,
      title: "Zombieland: Double Tap",
      image: "images/ZombielandDoubleTap.jpeg",
      trailer: "https://www.youtube.com/embed/ZlW9yhUKlkQ?si=IY47F4O3860EVike",
      synopsis:
        "Columbus, Tallahassee, Wichita, and Little Rock move to the American heartland as they face off against evolved zombies, fellow survivors, and the growing pains of the snarky makeshift family.",
    },
    {
      id: 52,
      title: "Inglourious Basterd",
      image: "images/InglouriousBasterds.jpg",
      trailer: "https://www.youtube.com/embed/KnrRy6kSFF0?si=tF3tZO-dXtt-EgOS",
      synopsis:
        "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    },
    {
      id: 53,
      title: "Django Unchained",
      image: "images/DjangoUnchained.jpg",
      trailer: "https://www.youtube.com/embed/_iH0UBYDI4g?si=uaxhlp3wLd7pSU-Z",
      synopsis:
        "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
    },
    {
      id: 54,
      title: "Labyrinth",
      image: "images/Labyrinth.jpeg",
      trailer: "https://www.youtube.com/embed/O2yd4em1I6M?si=p6gcNjg-GjuvaQEN",
      synopsis:
        "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
    },
  ]);
};
