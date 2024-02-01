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
        "Sixteen-year-old Sarah must solve a labyrinth to rescue her baby brother when he is taken by the Goblin King.",
    },
    {
      id: 55,
      title: "Ex Machina",
      image: "images/ExMachina.jpg",
      trailer: "https://www.youtube.com/embed/EoQuVnKhxaM?si=QWKx1T449X6P-fXO",
      synopsis:
        "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
    },
    {
      id: 56,
      title: "Arrival",
      image: "images/Arrival.jpeg",
      trailer: "https://www.youtube.com/embed/tFMo3UJ4B4g?si=-_d1yPTp5gGl0auk",
      synopsis:
        "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    },
    {
      id: 57,
      title: "Inception",
      image: "images/Inception.jpeg",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0?si=9_4mZUcKF_sPqZMV",
      synopsis:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    },
    {
      id: 58,
      title: "Prometheus",
      image: "images/Prometheus.jpg",
      trailer: "https://www.youtube.com/embed/yA6OKoW30Pk?si=rqonAyfycMIxrBxB",
      synopsis:
        "Following clues to the origin of mankind, a team finds a structure on a distant moon, but they soon realize they are not alone.",
    },
    {
      id: 59,
      title: "2001: A Space Odyssey",
      image: "images/2001ASpaceOdyssey.jpg",
      trailer: "https://www.youtube.com/embed/oR_e9y-bka0?si=zBGz8L0MKg0_p27v",
      synopsis:
        "After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins: a spacecraft manned by two men and the supercomputer HAL 9000.",
    },
    {
      id: 60,
      title: "Dune",
      image: "images/Dune.jpg",
      trailer: "https://www.youtube.com/embed/8g18jFHCLXk?si=gSDcMTd2_HCwMy2r",
      synopsis:
        "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    },
    {
      id: 61,
      title: "Last Night in Soho",
      image: "images/LastNightInSoho.jpeg",
      trailer: "https://www.youtube.com/embed/AcVnFrxjPjI?si=l_bHfmEOcecjXPSN",
      synopsis:
        "Aspiring fashion designer Eloise is mysteriously able to enter the 1960s, where she encounters dazzling wannabe singer Sandie. But the glamour is not as it seems, and the dreams of the past crack and splinter into something darker.",
    },
    {
      id: 62,
      title: "Prisoners",
      image: "images/Prisoners.jpeg",
      trailer: "https://www.youtube.com/embed/bpXfcTF6iVk?si=8CReHacrCZoBmdjx",
      synopsis:
        "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
    },
    {
      id: 63,
      title: "Coach Carter",
      image: "images/CoachCarter.jpg",
      trailer: "https://www.youtube.com/embed/d_GleoanbPE?si=75E-hqkF_pH3NwGA",
      synopsis:
        "Controversy surrounds high school basketball coach Ken Carter after he benches his entire team for breaking their academic contract with him.",
    },
    {
      id: 64,
      title: "Invictus",
      image: "images/Invictus.jpg",
      trailer: "https://www.youtube.com/embed/o2isdUuHmFY?si=hNYeuy-CcyXNvb2r",
      synopsis:
        "Nelson Mandela, in his first term as President of South Africa, initiates a unique venture to unite the Apartheid-torn land: enlist the national rugby team on a mission to win the 1995 Rugby World Cup.",
    },
    {
      id: 65,
      title: "Cool Runnings",
      image: "images/CoolRunnings.jpeg",
      trailer: "https://www.youtube.com/embed/4BqngFzt-cU?si=ppLerS7rP7bLTe7H",
      synopsis:
        "When a Jamaican sprinter is disqualified from the Olympic Games, he enlists the help of a dishonored coach to start the first Jamaican Bobsled Team.",
    },
    {
      id: 66,
      title: "Le Mans '66 (Ford v Ferrari)",
      image: "images/FordVFerrari.jpeg",
      trailer: "https://www.youtube.com/embed/4aY0dW3hpRc?si=XDx-Ye0Y7mKH_oy9",
      synopsis:
        "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
    },
    {
      id: 67,
      title: "Rush",
      image: "images/Rush.jpeg",
      trailer: "https://www.youtube.com/embed/4XA73ni9eVs?si=DVksnKbZpjka5xA3",
      synopsis:
        "The merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.",
    },
    {
      id: 68,
      title: "Raging Bull",
      image: "images/RagingBull.jpg",
      trailer: "https://www.youtube.com/embed/yUp6d79WRVI?si=x5pMV7b3yzHtrZ0T",
      synopsis:
        "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
    },
    {
      id: 69,
      title: "Foxcatcher",
      image: "images/FoxCatcher.jpg",
      trailer: "https://www.youtube.com/embed/8361stZ8n0w?si=QLvR9Y06CU7iaXvy",
      synopsis:
        "Olympic wrestling champions Mark and Dave Schultz join Team Foxcatcher, led by eccentric multi-millionaire John du Pont, as they train for the Seoul Olympic Games, but John's self-destructive behaviour threatens to consume them all.",
    },
    {
      id: 70,
      title: "Any Given Sunday",
      image: "images/AnyGivenSunday.jpg",
      trailer: "https://www.youtube.com/embed/Q1DRD5Jvzis?si=yWkMRpbPjf_G906d",
      synopsis:
        "A behind-the-scenes look at the life-and-death struggles of modern-day gladiators and those who lead them.",
    },
    {
      id: 71,
      title: "The Waterboy",
      image: "images/TheWaterboy.jpeg",
      trailer: "https://www.youtube.com/embed/vVLvkqfTRVQ?si=ESI39QYcQYfrlhY-",
      synopsis:
        "A waterboy for a college football team discovers he has a unique tackling ability and becomes a member of the team.",
    },
    {
      id: 72,
      title: "Operation Mincemeat",
      image: "images/OperationMincemeat.jpeg",
      trailer: "https://www.youtube.com/embed/YQ7ZXOXHZ20?si=xExJqWmDa6feTc9t",
      synopsis:
        "During WWII, two intelligence officers use a corpse and false papers to outwit German troops.",
    },
    {
      id: 73,
      title: "Fury",
      image: "images/Fury.jpeg",
      trailer: "https://www.youtube.com/embed/q94n3eWOWXM?si=_K5MyggKrKZQPMQl",
      synopsis:
        "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",
    },
    {
      id: 74,
      title: "1917",
      image: "images/1917.jpeg",
      trailer: "https://www.youtube.com/embed/YqNYrYUiMfg?si=LdmphPA6VEMcT3tj",
      synopsis:
        "April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
    },
    {
      id: 75,
      title: "Dunkirk",
      image: "images/Dunkirk.jpg",
      trailer: "https://www.youtube.com/embed/1KLeFboA8gc?si=aqoApQbJRFTnPO-V",
      synopsis:
        "Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.",
    },
    {
      id: 76,
      title: "Darkest Hour",
      image: "images/DarkestHour.jpeg",
      trailer: "https://www.youtube.com/embed/LtJ60u7SUSw?si=-z1k_nEG3IrH4O6O",
      synopsis:
        "In May 1940, the fate of World War II hangs on Winston Churchill, who must decide whether to negotiate with Adolf Hitler, or fight on knowing that it could mean the end of the British Empire.",
    },
    {
      id: 77,
      title: "Jarhead",
      image: "images/Jarhead.jpeg",
      trailer: "https://www.youtube.com/embed/-aBP-c28_1M?si=XslJFzZ2YIXOSAOb",
      synopsis:
        "A psychological study of Marine's state of mind during the Gulf War. Told through the eyes of a U.S. Marine sniper who struggles to cope with boredom, a sense of isolation, and other issues back home.",
    },
    {
      id: 78,
      title: "Lone Survivor",
      image: "images/LoneSurvivor.jpeg",
      trailer: "https://www.youtube.com/embed/yoLFk4JK_RM?si=68J3q-Q3RePR13p_",
      synopsis:
        "Marcus Luttrell and his team set out on a mission to capture or kill notorious Taliban leader Ahmad Shah, in late June 2005. Marcus and his team are left to fight for their lives in one of the most valiant efforts of modern warfare.",
    },
    {
      id: 79,
      title: "Saving Private Ryan",
      image: "images/SavingPrivateRyan.jpeg",
      trailer: "https://www.youtube.com/embed/9CiW_DgxCnQ?si=JmBTQPmmvx89S-2g",
      synopsis:
        "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    },
    {
      id: 80,
      title: "Killers of the Flower Moon",
      image: "images/KillersoftheFlowerMoon.jpeg",
      trailer: "https://www.youtube.com/embed/EP34Yoxs3FQ?si=s3t2qNFiblcqEUaK",
      synopsis:
        "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.",
    },
    {
      id: 81,
      title: "12 Years a Slave",
      image: "images/12YearsASlave.jpg",
      trailer: "https://www.youtube.com/embed/z02Ie8wKKRg?si=OaaoOh5EK4ofOgnf",
      synopsis:
        "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
    },
    {
      id: 82,
      title: "Pan's Labyrinth",
      image: "images/PansLabyrinth.jpeg",
      trailer: "https://www.youtube.com/embed/jVZRnnVSQ8k?si=Sp1Uf8a4FJoLBSDx",
      synopsis:
        "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
    },
    {
      id: 83,
      title: "Dungeons & Dragons: Honour Among Thieves",
      image: "images/DungeonsAndDragons.jpeg",
      trailer: "https://www.youtube.com/embed/IiMinixSXII?si=bu89Aj6Fz3GfXT4D",
      synopsis:
        "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    },
    {
      id: 84,
      title: "The Dark Crystal",
      image: "images/TheDarkCrystal.jpeg",
      trailer: "https://www.youtube.com/embed/eaH6cOR8NKc?si=_j8v7_aFkSVDsTnY",
      synopsis:
        "On another planet in the distant past, a Gelfling embarks on a quest to find the missing shard of a magical crystal, and to restore order to his world.",
    },
    {
      id: 85,
      title: "The Mummy",
      image: "images/TheMummy.jpeg",
      trailer: "www.youtube.com/embed/f7oKxlaUBac?si=JumUEjDMoadpLm6F",
      synopsis:
        "At an archaeological dig in the ancient city of Hamunaptra, an American serving in the French Foreign Legion accidentally awakens a mummy who begins to wreak havoc as he searches for the reincarnation of his long-lost love.",
    },
    {
      id: 86,
      title: "Iron Monkey",
      image: "IronMonkey.jpg",
      trailer: "https://www.youtube.com/embed/B9-OQqbVkU8?si=Ux1iaYzyCijIIZ-t",
      synopsis:
        "A masked doctor steals from corrupt authorities to help the poor, while another doctor is compelled to track him down. Their common enemy emerges as a treacherous shaolin monk seizes control of the authorities.",
    },
    {
      id: 87,
      title: "Ip Man",
      image: "IpMan.jpeg",
      trailer: "https://www.youtube.com/embed/RBYbqO_FUA4?si=XduJyuwzyiC8nvlX",
      synopsis:
        "During the Japanese invasion of China, a wealthy martial artist is forced to leave his home when his city is occupied. With little means of providing for themselves, Ip Man and the remaining members of the city must find a way to survive.",
    },
    {
      id: 88,
      title: "The Raid",
      image: "TheRaid.jpg",
      trailer: "https://www.youtube.com/embed/m6Q7KnXpNOg?si=YdtbIr6zngEOHw0M",
      synopsis:
        "A S.W.A.T. team becomes trapped in a tenement run by a ruthless mobster and his army of killers and thugs.",
    },
    {
      id: 89,
      title: "The Karate Kid",
      image: "KarateKid.jpeg",
      trailer: "https://www.youtube.com/embed/r_8Rw16uscg?si=ezkxxQOoMK_Q9HFB",
      synopsis:
        "A martial arts master agrees to teach karate to a bullied teenager.",
    },
    {
      id: 90,
      title: "Never Back Down",
      image: "NeverBackDown.jpeg",
      trailer: "https://www.youtube.com/embed/2tc-RPjZRm8?si=IhxTgWNyx36UbnFN",
      synopsis:
        "A frustrated and conflicted teenager arrives at a new high school to discover an underground fight club, and meets a classmate who begins to coerce him into fighting.",
    },
    {
      id: 91,
      title: "Man of Tai Chi",
      image: "ManOfTaiChi.jpeg",
      trailer: "https://www.youtube.com/embed/ISxLxZysmgk?si=BNKiYSI_RyyzTZnd",
      synopsis:
        "A young martial artist's unparalleled Tai Chi skills land him in a highly lucrative underworld fight club.",
    },
    {
      id: 92,
      title: "Twin Dragon Encounter",
      image: "TwinDragonEncounter.jpg",
      trailer: "https://www.youtube.com/embed/vgNI8VMcjTs?si=ZH9zLuIoDZF-am01",
      synopsis:
        "Identical twin brothers on vacation are faced with an unexpected battle when their getaway spot is invaded by mercenaries. Using their martial arts expertise, the twins wage war against the invaders in order to free their kidnapped girlfriends.",
    },
    {
      id: 93,
      title: "3:10 to Yuma",
      image: "310ToYuma.jpeg",
      trailer: "https://www.youtube.com/embed/jX1m45CwvJ8?si=XhiFCXISVzkAhqCA",
      synopsis:
        "A small-time rancher agrees to hold a captured outlaw who's awaiting a train to go to court in Yuma. A battle of wills ensues as the outlaw tries to psych out the rancher.",
    },
    {
      id: 94,
      title: "The Ballad of Buster Scruggs",
      image: "TheBalladofBusterScruggs.jpg",
      trailer: "https://www.youtube.com/embed/_2PyxzSH1HM?si=BI_4i4i9G_2NhdBS",
      synopsis:
        "Six tales of life and violence in the Old West, following a singing gunslinger, a bank robber, a traveling impresario, an elderly prospector, a wagon train, and a perverse pair of bounty hunters.",
    },
    {
      id: 95,
      title: "The Hateful Eight",
      image: "TheHatefulEight.jpeg",
      trailer: "https://www.youtube.com/embed/nIOmotayDMY?si=GFeM6gAarNL7RnNK",
      synopsis:
        "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
    },
    {
      id: 96,
      title: "True History of the Kelly Gang",
      image: "TrueHistoryoftheKellyGang.jpeg",
      trailer: "https://www.youtube.com/embed/BnJim7OK2kM?si=v_5hx8KEjymjTCwp",
      synopsis:
        "Australian bushranger Ned Kelly and his gang flee from authorities during the 1870s.",
    },
    {
      id: 97,
      title: "The Revenant",
      image: "TheRevenant.jpeg",
      trailer: "https://www.youtube.com/embed/LoebZZ8K5N0?si=qflknBs7dALB9sk6",
      synopsis:
        "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
    },
    {
      id: 98,
      title: "Butch Cassidy and the Sundance Kid",
      image: "ButchCassidyandtheSundanceKid.jpeg",
      trailer: "https://www.youtube.com/embed/YdJW2UxvSFQ?si=FByQZcMGvr7C9Atb",
      synopsis:
        "In 1890s Wyoming, Butch Cassidy and The Sundance Kid lead a band of outlaws. When a train robbery goes wrong, they find themselves on the run with a posse hard on their heels. After considering their options, they escape to South America.",
    },
    {
      id: 99,
      title: "The Sisters Brothers",
      image: "TheSistersBrothers.jpeg",
      trailer: "https://www.youtube.com/embed/3OwvqKwTKmE?si=2NhjM-YO4eHnxCEx",
      synopsis:
        "Eli and Charlie Sisters, an infamous duo of gunslinging assassins, chase a gold prospector and his unexpected ally in 1850s Oregon.",
    },
    {
      id: 100,
      title: "The Good, the Bad and the Ugly",
      image: "TheGoodTheBadAndTheUgly.jpeg",
      trailer: "https://www.youtube.com/embed/IFNUGzCOQoI?si=cdBERIqE68qym3-H",
      synopsis:
        "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    },
  ]);
};
