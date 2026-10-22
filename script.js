const coverScreen = document.querySelector("#cover-screen");
const bookScreen = document.querySelector("#book-screen");
const contentsPanel = document.querySelector("#contents-panel");
const readerPanel = document.querySelector("#reader-panel");
const readerPage = document.querySelector("#reader-page");
const readerTitle = document.querySelector("#reader-title");
const chapterList = document.querySelector("#chapter-list");
const chapterLabel = document.querySelector("#reader-chapter-label");
const pageControls = document.querySelector("#page-controls");
const pageCount = document.querySelector("#page-count");
const previousPageButton = document.querySelector("#previous-page");
const nextPageButton = document.querySelector("#next-page");
const modeToggle = document.querySelector("#mode-toggle");
const modeLabel = document.querySelector("#mode-label");
const tabButtons = document.querySelectorAll("[data-tab]");
const swipeThreshold = 48;
let touchStartX = null;
let touchStartY = null;

const chapters = [
  {
    title: "The Boy Called Skiddo",
    pages: [
      {
        text: "Nobody in the dusty streets of the Lagos trenches knew that the quiet boy standing in the corner was actual royalty. Back in Mali, Skiddo’s father sat on a throne, a king with wealth and power, fully expecting his son to step up and take over the family lineage. But Skiddo wanted a different kind of kingdom. He wanted fame, the kind that didn’t come from a birthright but from pure, raw talent. Against all odds, risking his relationship with his family and leaving everything behind, he packed a bag and took a leap of faith into Nigeria. He didn’t even have a concrete plan; he just knew Lagos was where stars were born."
      },
      {
        text: "Reality hit fast. He found himself living in a rugged ghetto, a part of the trenches where music was the ultimate survival mechanism. Every evening, the local boys would gather around a corner to freestyle, rap, sing, and entertain the neighborhood. Skiddo was naturally shy, so he stayed in the shadows, blending into the background while nodding his head and absorbing the heavy Afrobeat rhythms."
      },
      {
        text: "One evening, looking at his worn-out sneakers, a sudden wave of reality washed over him. I left my father’s palace for this? I haven’t done anything yet, he thought. The boys were organizing one of their usual brutal singing battles, and before his shyness could talk him out of it, Skiddo stepped into the circle. It was his turn.",
        emphasis: [{ text: "I left my father’s palace for this? I haven’t done anything yet,", tag: "em" }]
      },
      {
        text: "When he opened his mouth, the entire street went dead silent."
      },
      {
        text: "The voice that came out of him was pure magic. By the time he hit the final notes, the trenches erupted. People were screaming, jumping, and hugging him, deeply moved by the emotion in his music. Even the well-known local champions, guys who usually dominated the neighborhood, stood frozen in shock. They demanded an encore, and when he sang a second time, he blew their minds all over again."
      },
      {
        text: "Almost overnight, the dynamics changed. As is the nature of the game, girls naturally gravitate toward the guy holding the spotlight. That was when Saida Boj entered the picture. She was the reigning queen of the local scene, the first proper \"oscroh\" of his new life, and she immediately started flocking around him, pulling out all the stops to impress the new talent. Skiddo, just vibing and taking life as it came, leaned into it. She was exactly his type, so he kept her close."
      },
      {
        text: "Then came the day that changed everything."
      },
      {
        text: "Word had spread all the way to the top. Don Jazzy, the legendary producer, was on the hunt for a fresh, unsigned talent for a new project. Suddenly, a massive convoy of luxury SUVs rolled into the trenches, kicking up dust as Don Jazzy set up an impromptu singing competition right there on the streets. One by one, local artists took the stage, giving it everything they had."
      },
      {
        text: "Then, it was Skiddo's turn."
      },
      {
        text: "Before he could even grab the microphone, the crowd went completely feral. The area boys and youth started chanting so loudly the ground shook: \"We want Skiddo! Give us Skiddo!\"",
        emphasis: [{ text: "\"We want Skiddo! Give us Skiddo!\"", tag: "em" }]
      },
      {
        text: "The noise was so deafening that Skiddo couldn't even perform his track. Don Jazzy sat in his ride, completely surprised by the sheer madness and loyalty this unknown boy commanded. Intrigued, the Don rolled down his window, bypassed the protocol, and pulled the young boy from Mali straight into his convoy, driving him out of the ghetto and directly into the legendary Mavin studio."
      },
      {
        text: "When they arrived, Skiddo didn't waste the opportunity. He stunned the entire Mavin crew during his live audition. Impressed by the raw emotion in his tone, Don Jazzy made a bold move,he paired Skiddo on a brand-new romantic track with the queen of the label herself, Ayra Starr."
      }
    ]
  },
  {
    title: "The Rise of a Star",
    pages: [
      {
        text: "Inside the booth, Skiddo caught the vibe perfectly, delivering a sweet, melodious verse that blended seamlessly with Ayra Starr’s vocals. When the song dropped, the reception was instant fireworks. The track blew up everywhere, and listeners completely fell in love with Skiddo's unique sound."
      },
      {
        text: "Within days, a specific snippet of his verse became the biggest TikTok challenge in the country. Then came the ultimate validation: Davido posted the track on his Instagram story with a simple, frantic caption: \"Who is this guy?!\" Suddenly, every major record label and independent artist in Nigeria wanted a piece of Skiddo, desperately trying to sign him.",
        emphasis: [{ text: "\"Who is this guy?!\"", tag: "em" }]
      },
      {
        text: "But Skiddo was incredibly smart. Even though he was working out of the Mavin headquarters, he hadn't actually signed a binding record label deal with Don Jazzy yet. This strategic move kept him completely free. Massive endorsement choices and massive distribution deals were flooding his inbox, and he wasn't locked down by any restrictive contracts."
      },
      {
        text: "Still, Mavin was home. He spent all his time at the studio, freestyling and hanging out with the roster. Because he and Ayra Starr had a hit record, they were practically joined at the hip,performing on big stages, running radio interviews, and doing heavy media rounds. It didn't take long for the general public to start whispering that the two were dating."
      },
      {
        text: "Behind closed doors, the rumors weren't far from the truth. Ayra had genuinely started developing deep feelings for him, and Skiddo felt the exact same way. But he hesitated to make a real move, worried it might look unprofessional since they were colleagues. It became a mutual, silent tension. They would lock eyes romantically in the middle of a crowded room, both knowing the vibe, and away from the cameras, things were quietly becoming very real and romantic between them."
      },
      {
        text: "Skiddo’s momentum was unstoppable. Next, he got the call to hop on a massive collaboration with Burna Boy and DJ Dimple. Skiddo absolutely ate his verse, completely holding his own next to a giant. When the song hit the airwaves, the public realized Skiddo wasn't a one-hit-wonder; he was a powerhouse. Burna Boy was so impressed by the boy's talent and work ethic that he gifted him a whopping sum of cash on the spot."
      },
      {
        text: "To celebrate the success, DJ Dimple invited him out for an exclusive clubbing session. Chilling in their own private VIP corner away from the flashing lights, Skiddo could feel a shift in her energy too. The way she looked at him made him wonder,could she be falling in love with the kid from Mali too?",
        emphasis: [{ text: "could she be falling in love with the kid from Mali too?", tag: "em" }]
      },
      {
        text: "Skiddo kept his head down, fueled by a relentless determination to become a global superstar. Every hit song brought him closer to his ultimate goal: returning to Mali to face his parents, not as a failure, but with the ultimate rich prodigal son story. His insane talent granted him access to the highest elite circles in the country, surrounding him with superstar friends and luxury settings."
      },
      {
        text: "But the past has a way of pulling you back. Back in the trenches, Saida Boj was watching his meteoric rise with bitter eyes. She started causing massive online sagas, going live regularly to claim she was Skiddo’s original woman, shouting that the moment Don Jazzy took him to Mavin, he used her and dumped her. The drama started catching fire, and some female fans online began getting an \"ick\" about Skiddo's personality, publicly debating if he was just a user who forgets the people who supported him early on."
      },
      {
        text: "Bro stayed focused, refusing to let the internet noise derail his vision. And then, the ultimate validation landed on his lap. A massive, multi-million dollar foreign record deal from an international label was placed right on Skiddo’s table."
      },
      {
        text: "It was a huge, life-altering career choice that could take him across the world,but change everything he had built in Lagos."
      }
    ]
  },
  {
    title: "The Oscroh Queens",
    pages: [
      {
        text: "Skiddo’s Instagram was no longer a regular social media page; it was a warzone of affection. The moment he reached global status, his DMs and comment sections completely flooded with the finest women across continents. From local campus babes to high-profile models, the \"oscroh queens\" were all over him, throwing themselves at the boy from Mali. For a young guy who used to just watch the world from the shadows of the trenches, the temptation was massive. But Skiddo knew the stakes. He had to decide whether to drown in the female attention or keep his eyes locked on the prize."
      },
      {
        text: "Because he prize on his table was bigger than anyone could have dreamed: Skiddo had just been selected to perform on the official World Cup 2022 anthem.",
        emphasis: [{ text: "World Cup 2022 anthem", tag: "strong" }]
      },
      {
        text: "It felt completely like a movie. The same boy who was hiding his voice in the Lagos ghetto was now preparing to have his vocals played before every single match of the biggest sporting event on earth. And to make it even more legendary, he was paired with the global South African sensation, Tyla.",
        emphasis: [{ text: "Tyla", tag: "strong" }]
      },
      {
        text: "While working on the anthem, the chemistry between Skiddo and Tyla was instant fireworks. They didn’t just stop at the official football track; they locked themselves in the studio and recorded several personal songs together. However, behind the scenes, politics started creeping in. Heavy management issues and label politics began delaying the release of their personal collaborations, creating a tense backstage tug-of-war."
      },
      {
        text: "But the public didn’t care about industry politics they only cared about the romance."
      },
      {
        text: "Back home in Nigeria, everyone was already convinced that Skiddo and Ayra Starr were secret lovers because of their undeniable history and stage chemistry. But on the global stage, things shifted. Because Skiddo and Tyla were being seen together more openly at international events, the global media started speculating that Tyla and Skiddo were the new IT couple."
      },
      {
        text: "Skiddo just went with the flow. He was a naturally likeable, charismatic guy, and even though he was brief in height, the big, gorgeous superstar girls didn’t care at all they all wanted a piece of him."
      },
      {
        text: "This sparked an absolute online civil war. Tyla’s fanbase, the Tygers, started aggressively pushing the love ship between Skiddo and Tyla, creating edits and demanding they make it official. On the other side, Ayra Starr’s fanbase, the Mobstars, went to war defensively, flooding timelines to prove that Ayra was the original queen of Skiddo's heart. The clash and rivalry between the Tygers and the Mobstars became the biggest pop culture topic in the world.",
        emphasis: [
          { text: "Tygers", tag: "strong" },
          { text: "Mobstars", tag: "strong" }
        ]
      },
      {
        text: "Through all the chaos, Skiddo remained incredibly smart and calm. He never picked a side publicly, never dropped a comment to fuel the fire, and kept a cool, professional relationship with both ladies while focusing on his music. But behind closed doors, the tension was real both Tyla and Ayra genuinely wanted him for themselves."
      },
      {
        text: "As a global superstar, the narrative around his love life was getting out of hand. There were too many girls in the picture, including dozens of non-celebrity \"oscroh queens\" who weren't even in the news. It was becoming a massive distraction. Skiddo realized that to protect his sanity and put an end to the endless rumors, he needed to take a bold, definitive step. He needed to post one specific girl openly to shut down the noise from everywhere else."
      },
      {
        text: "But his choice shocked the entire world."
      },
      {
        text: "Instead of choosing Ayra or Tyla, Skiddo walked up to the iconic American reality star and billionaire model, Kim Kardashian.",
        emphasis: [{ text: "Kim Kardashian", tag: "strong" }]
      },
      {
        text: "The internet completely broke. Kim was way older than him old enough to actually give birth to him. She had a whole history, kids, and wasn’t even technically single. People were utterly bewildered, screaming across social media: \"What is wrong with Skiddo?!\" Young, beautiful, single global pop stars were hunting for him, and he decided to settle for Kim Kardashian? It felt completely outrageous.",
        emphasis: [{ text: "\"What is wrong with Skiddo?!\"", tag: "em" }]
      },
      {
        text: "Instead of stopping the distraction, the bold move backfired spectacularly. Suddenly, Skiddo wasn't on the news for his record-breaking music anymore; the headlines were strictly about his wild personal life and how he was managing his relationships with different oscroh queens from entirely different races."
      },
      {
        text: "But the craziest part of it all? The Skiddo effect was real. Kim Kardashian was so captivated by his charm that she was genuinely ready to leave her current relationship behind and have a baby for the new megastar from Mali."
      },
      {
        text: "Looking at his reflection in the mirror of a luxury penthouse, Skiddo took a deep breath. The realization washed over him with intoxicating clarity: his personality and his aura were so powerful that, at this point in his life, he could get absolutely anything and anyone he wanted in this world."
      }
    ]
  },
  {
    title: "Fame, Money, and Enemies",
    pages: [
      {
        text: "Even though Kim was now officially Skiddo's girl, the female attention didn’t stop. In fact, it got worse. He was living a life of extreme luxury, but he completely lost control over the sheer amount of girls trying to get a piece of him. Just when he thought things couldn't get more chaotic, a massive rumor hit the internet: American rapper Ice Spice was pregnant, and word on the street was that Skiddo was the father."
      },
      {
        text: "This was incredibly dangerous. American cancel culture is brutal, and one wrong move could completely ruin his international career. To protect himself, Skiddo kept his head down and refused to address the rumors. Instead, he just kept flaunting Kim Kardashian on his social media as his main lover. It looked funny to the public; people literally started thinking the boy from Mali was playing some high-level game with the media."
      },
      {
        text: "But the real drama was brewing in the background. Kanye West, Kim’s famous ex, started acting completely weird online. He began posting cryptic tweets and wild rants targeting the young artist. Suddenly, Skiddo found himself trapped in a massive, messy marriage saga. On the internet, his reputation shifted he was now being talked about as a fearless guy who didn't care about taking another man's woman."
      },
      {
        text: "Kim tried to defend him, telling the media she had already wanted to leave her relationship with Kanye long before Skiddo came along. But Skiddo himself never promised Kim forever. They were in a deeply romantic, passionate relationship, but he never made any mention of marriage. They were just living lavishly, showing off their rich lifestyle on Instagram, and being overly freaky and affectionate for the cameras."
      },
      {
        text: "Then, the ticking time bomb finally exploded in private. Ice Spice’s boyfriend, the British rapper Central Cee known to everyone as Cench secretly found out the truth. The baby Ice Spice was carrying wasn't his. It belonged to Skiddo."
      },
      {
        text: "While the internet was still gossiping about the rumors, Cench was quietly losing his mind with rage. But instead of reacting blindly or starting an online back-and-forth, Cench decided to play it incredibly cool. He pretended everything was fine while plotting a crazy revenge plan in the dark."
      },
      {
        text: "Cench had a trusted, undercover friend named Ray. To get inside Skiddo's circle, Ray applied for an open position to work as Skiddo's personal videographer. Because Skiddo's brand was growing daily, his team was hiring, and Ray easily got the job."
      },
      {
        text: "Completely innocent and blind to the danger, Skiddo had no idea he had just welcomed a spy and a snake into his inner circle. He thought he was just hiring a talented guy to shoot his luxury lifestyle, but Ray was actually Cench’s ultimate tool, sent to monitor his every move and find a weakness."
      },
      {
        text: "With Ray officially resuming work as part of the team, he started capturing Skiddo's daily life, his studio sessions, and his private moments. Back in London, Cench sat back with a cold smile. His revenge plot was kicking off perfectly, and Skiddo had absolutely no clue that his downfall was already being filmed."
      }
    ]
  },
  {
    title: "The Fall",
    pages: [
      {
        text: "Aside from his endless weakness for the oscroh queens, Skiddo was actually a very nice and hardworking guy. He treated people with respect, but unfortunately, he had crossed the wrong person, and Cench wanted blood. The plan that Cench and Ray cooked up wasn't just to ruin Skiddo's name they wanted to end his career completely and throw him in jail for life."
      },
      {
        text: "On a random Saturday, Ray used heavy makeup to paint his face in a pool of fake blood, creating nasty looking injuries. Suddenly, he clicked the go-live button on Instagram. Panting and breathing heavily into the camera, Ray looked like he was in pure agony. He started crying to the world, claiming that Skiddo and his team had brutally beaten him up and messed him up for no reason, saying he deeply regretted ever working with the artist."
      },
      {
        text: "The internet went wild. Some people instantly believed the live video because it looked so graphic and real. But others had deep doubts. The people who truly knew Skiddo knew his vibe; he was always friendly and way too nice to ever pull off something so inhumane."
      },
      {
        text: "While the internet was burning, Skiddo was far away, chilling with his lover Kim Kardashian. Suddenly, multiple frantic calls began barging into his phone. Friends, managers, and partners were all asking the same thing: “Why would you do something so wicked?”",
        emphasis: [{ text: "“Why would you do something so wicked?”", tag: "em" }]
      },
      {
        text: "Skiddo was completely shocked and confused. He hadn’t even been in America for the past three days, which was where Ray claimed the attack happened. Skiddo had actually traveled down to Mali to see his parents, taking his romantic partner along to finally show them his success."
      },
      {
        text: "As hours passed, Skiddo’s picture was posted all over blogs and news outlets. All the haters who had been waiting for his downfall especially the toxic fans of other favorite singers he had outshined pounced on the opportunity to tear him down. But Skiddo had undeniable proof. He dropped his flight receipts, location tags, and passport stamps showing he wasn't anywhere near the scene."
      },
      {
        text: "Realizing their first plan had completely failed, Ray had to quickly scramble to save his own face. He went online and started lying, claiming he was heavily drunk and thought he was just doing a video shoot, not knowing it was a live stream. Later, he changed the story again, saying it was just a prank that went wrong."
      },
      {
        text: "The public didn't really know what to believe, and the story eventually lost its juice online. But behind closed doors, Skiddo was furious. He threatened Ray both online and offline, warning him never to let alcohol or drugs make him do something so stupid to ruin the brand again. Skiddo genuinely believed Ray was just high, not knowing it was actually a failed, imperfect revenge plot."
      },
      {
        text: "Because of the scare, Skiddo became much more strict and rigid with his instructions to his team members. This new, tense attitude started showing a bit online, and that strictness was exactly the loophole Cench and Ray needed to pounce a second time."
      },
      {
        text: "This time, Ray knew he had to actually be in the same room with Skiddo for the plan to be airtight. They waited patiently for the perfect moment a time when Skiddo would be completely alone with Ray, with no other team members or cameras around. To make it foolproof, Ray even bribed a nearby local hospital to comply with the script."
      },
      {
        text: "When the moment finally came, Ray took a dangerous, specialized drug that would knock him out cold for hours and cause his nose to bleed, but allow him to wake up perfectly fine later."
      },
      {
        text: "Right there in the private room, Ray suddenly slumped to the floor, bleeding from his nose. Skiddo, in absolute shock and panic, rushed over to help his videographer. Being a caring guy, he immediately carried Ray into his car and drove him straight to the nearby pre-arranged hospital."
      },
      {
        text: "But the moment they arrived, the corrupt doctors went straight to work. After a quick fake examination, they looked at Skiddo and pronounced Ray dead. Because Skiddo was the only one in the room with him and the one who brought him in, the hospital immediately held him accountable and alerted the authorities."
      },
      {
        text: "This wasn't just a social media scandal anymore this was a murder charge that could send Skiddo to prison for life. Before he could even understand what was happening, Skiddo was handcuffed and locked inside a dark detention cell."
      },
      {
        text: "A few hours later, while Skiddo was trapped behind bars, the drug wore off and Ray woke up perfectly healthy. He was immediately smuggled out of the hospital and flew straight back to London to hide out with his friend Cench, making sure nobody would ever see him alive in Nigeria again."
      },
      {
        text: "The tension across the music industry rose to a boiling point. The news hit the streets like wildfire, and blogs began screaming with wild headlines: “Did the Malian superstar murder his own signee?!” “Why did Skiddo do it?!”",
        emphasis: [
          { text: "“Did the Malian superstar murder his own signee?!”", tag: "em" },
          { text: "“Why did Skiddo do it?!”", tag: "em" }
        ]
      },
      {
        text: "As the police launched a massive investigation, Skiddo sat in his cell, completely alone, watching his kingdom crumble over a crime he didn't commit."
      }
    ]
  },
  {
    title: "The Truth",
    pages: [
      {
        text: "Inside the cold, dark detention cell, Skiddo didn’t even blame the system for holding him. He figured it was only natural for the police to suspect him, especially since the entire world had just seen those horrific, fake pictures of a bloody Ray the week before. Everyone already had it in their minds that he was prone to violence."
      },
      {
        text: "Skiddo sat on the concrete floor, his mind racing as he stared at the wall. What kind of drug did Ray take that made him just slump and die like that? he wondered. The crazy part was, he still had absolutely no idea it was a setup. Deep down, Skiddo was actually more heartbroken about losing a hardworking team member than he was about being locked up for investigation. He truly believed his videographer was dead.",
        emphasis: [{ text: "What kind of drug did Ray take that made him just slump and die like that?", tag: "em" }]
      },
      {
        text: "On the outside, the internet was having a field day. Kanye West immediately jumped on X (formerly Twitter), dropping cryptic tweets about \"Karma\" and laughing at Skiddo's downfall, completely clueless about the deeper, sinister plot. Kanye even rushed into the studio and dropped a petty diss track titled Karma, mocking the whole situation.",
        emphasis: [{ text: "Karma", tag: "em" }]
      },
      {
        text: "The pressure was too much for Kim Kardashian. Confused, terrified, and caught right in the middle of a global storm, she completely hid from the media. The thoughts in her head were eating her alive: Have I really been sleeping next to a murderer all this time? Should I just go back to my ex? Do I need to detach myself from this boy completely?",
        emphasis: [{ text: "Have I really been sleeping next to a murderer all this time? Should I just go back to my ex? Do I need to detach myself from this boy completely?", tag: "em" }]
      },
      {
        text: "When the detectives called Kim in for questioning, she completely panicked and drew the line. Desperate to protect her own empire, she looked the investigators in the eye and denied ever really knowing Skiddo. She claimed they were just working on a mutual partnership for a brand advertisement and corporate promotion even though a simple Google search showed dozens of overly intimate and freaky pictures of them all over the internet."
      },
      {
        text: "Back in the cell, the guards threw a heavy dose of reality in Skiddo’s face. They told him flat out that he needed to just admit to the murder. They claimed their investigation didn't link to any other suspect. When Skiddo’s legal team demanded an autopsy to prove his innocence, the bomb dropped: Ray’s body was nowhere to be found. The pre-arranged hospital had completely vanished the \"corpse.\" Because of that, the police decided to just pin the punishment on Skiddo, using his recent history of \"violence\" as their main ammunition."
      },
      {
        text: "Skiddo was utterly shocked. He wasn't even getting a fair trial or a proper say in his own destiny. They dragged him out for a final, intense interrogation, trying to mentally break him and force a confession. But despite the heavy pressure and intimidation, Skiddo stuck firmly to the truth. He refused to confess to a lie."
      },
      {
        text: "For the first time since leaving home, the young prince began deeply regretting the day he ever packed his bags to leave Mali. Tears filled his eyes in the dark. He honestly wished he had just stayed poor, quiet, and seemingly useless under his father's shadow in Mali, rather than experiencing this brutal, heartbreaking drop from grace to grass."
      },
      {
        text: "Because Skiddo stubbornly refused to confess, and because there was no actual visual recording or concrete physical proof of him committing a crime, the judges hesitated to pass the final life imprisonment judgment. They couldn't officially sentence him yet, so they ordered him to be detained indefinitely until further notice."
      },
      {
        text: "Skiddo was completely cut off, with no idea what was happening in the outside world or on the internet. But outside his cell, his brand was completely dead. His face was slapped on every blog, news channel, and magazine cover across the globe, branded forever as a murderer, a domestic abuser, and a monster."
      },
      {
        text: "He was completely buried alive. But just when all hope was lost, a saving grace arrived at the perfect time."
      }
    ]
  },
  {
    title: "HIS QUEEN",
    pages: [
      {
        text: "After days of Skiddo suffering in that cold cell as an innocent man, the truth finally began to leak from the most unexpected place. Inside the pre-arranged hospital that had helped fake Ray’s death, a young, God-fearing nurse named Anna couldn’t hold back her conscience anymore. She had overheard the secret conversations between the corrupt medical staff and the plotters before the incident happened. Watching the global news and seeing a young boy’s life being completely destroyed for a crime that never happened was just too brutal for her to bear."
      },
      {
        text: "Nobody was actually dead. Ray was perfectly fine, yet Skiddo was facing life imprisonment. Anna knew she had to speak up fast before the judges handed down the final sentence and it became too late."
      },
      {
        text: "Taking a deep breath, she first went to one of the head doctors, begging him to confess the truth to the police. But the doctor turned on her with bitter anger. The heavy payout from Central Cee had already been settled and split among the staff. He aggressively threatened Anna, telling her to shut her mouth and mind her business if she valued her job and her life."
      },
      {
        text: "But Anna found a different kind of courage. Waiting until the night shift when the offices were empty, she sneaked into the administrative room, logged into the hospital’s official company database, and fired a detailed anonymous email straight to international law enforcement and the FBI. She narrated every single detail of the setup, the fake drug, and the missing \"body.\""
      },
      {
        text: "When the FBI team received the email, they didn't just dismiss it. They immediately launched a discreet investigation to see if the claims were true or just another wild internet conspiracy. They tracked the hospital's records, monitored recent flights, and used their intelligence network. Within forty-eight hours, their systems flagged a massive discovery: Ray was completely alive and well, hiding out in a luxury apartment on the outskirts of London."
      },
      {
        text: "Disappointed by the deep corruption of the plot, the authorities moved in fast. British police and the FBI cornered Ray and brought him in for intense questioning. Facing federal agents and the threat of severe prison time for conspiracy and international fraud, Ray cracked almost immediately. He confessed to everything, weeping as he admitted the entire thing was a beautifully crafted setup."
      },
      {
        text: "Back in London, Cench was furious and heartbroken when the police kicked down his door. His grand revenge plot had completely backfired, and now he was the one facing brutal punishment and jail time for a vendetta that had gone way too far."
      },
      {
        text: "The cell doors finally swung open, and Skiddo walked out into the bright afternoon sun, a free man. But the scene waiting for him outside completely blew his mind. He was utterly surprised to see Ray standing there the very same guy he thought he had watched die in his arms. Then he noticed Cench standing nearby in handcuffs. Star-struck and completely confused, Skiddo innocently thought Cench had flown all the way from London to help bail him out of jail. He still had no idea."
      },
      {
        text: "The lead investigator sat Skiddo down and explained the entire wicked plot from start to finish. As the words sunk in, the expression on Skiddo’s face shifted from confusion to pure disappointment. The heavy realization that his own team member and a fellow artist had plotted to bury him alive made a deep sadness wash over his eyes. He felt a total loss of trust in the industry."
      },
      {
        text: "Yet, looking at Cench, the prince inside Skiddo took over. Instead of reacting with anger, Skiddo showed true royalty. He walked over and genuinely apologized to Cench for his past indiscretions with Ice Spice, acknowledging that his careless actions with the oscroh queens had caused real pain. Then, turning to the FBI agents, Skiddo did something that shocked everyone he pleaded with them to drop the heavy charges, asking the authorities to let everyone go home peacefully so they could settle the matter as men outside of a courtroom."
      },
      {
        text: "Before he left the building, Skiddo had one final question. He asked to meet the brave person who had risked everything to send that saving email."
      },
      {
        text: "The door opened, and the young nurse, Anna, stepped into the room. The moment Skiddo’s eyes met hers, the world around him went completely quiet. For the first time in his life, he wasn't looking at a celebrity, a model, or an \"oscroh queen\" chasing his clout. He was looking at a pure, genuine soul who had saved his life out of the goodness of her heart. It was love at first sight."
      },
      {
        text: "He walked up to her, took her hand, and looked straight into her eyes."
      },
      {
        text: "\"You will be the true queen of my life,\" Skiddo said softly."
      },
      {
        text: "Anna smiled back nervously, her cheeks flushing pink, completely in love with the humble spirit of the global superstar."
      },
      {
        text: "They left the chaotic world of American celebrity culture and the media paparazzi behind. Holding hands, Skiddo and his real love, Anna, boarded a flight back to Nigeria the vibrant place where his music journey had first started in the trenches. Safe in the arms of a woman who loved him for who he truly was, the King of Oscroh finally found his peace, and they lived happily together forever after."
      }
    ]
  }
];

const chapterStarts = [];
let pageIndex = 0;
let isScrollMode = false;
let totalPageCount = 0;

chapters.forEach((chapter) => {
  chapterStarts.push(totalPageCount);
  totalPageCount += chapter.pages.length + 1;
});

const pages = chapters.flatMap((chapter, chapterIndex) => [
  { chapterIndex, isOpener: true },
  ...chapter.pages.map((content, paragraphIndex) => ({
    chapterIndex,
    paragraphIndex,
    content
  }))
]);
pages.push({ isEndCard: true });
totalPageCount += 1;

function appendStoryParagraph(parent, page) {
  const paragraph = document.createElement("p");
  paragraph.className = "story-paragraph";

  if (!page.emphasis || page.emphasis.length === 0) {
    paragraph.textContent = page.text;
    parent.append(paragraph);
    return;
  }

  let remainingText = page.text;
  page.emphasis.forEach(({ text, tag }) => {
    const emphasisIndex = remainingText.indexOf(text);
    if (emphasisIndex === -1) {
      throw new Error("The emphasized story text must appear in its original paragraph.");
    }

    paragraph.append(document.createTextNode(remainingText.slice(0, emphasisIndex)));
    const emphasis = document.createElement(tag);
    emphasis.textContent = text;
    paragraph.append(emphasis);
    remainingText = remainingText.slice(emphasisIndex + text.length);
  });
  paragraph.append(document.createTextNode(remainingText));
  parent.append(paragraph);
}

function appendEndCard(container) {
  container.classList.add("reader-page__inner--ending");

  const curtain = document.createElement("span");
  curtain.className = "ending-card__curtain";
  curtain.setAttribute("aria-hidden", "true");

  const flourish = document.createElement("span");
  flourish.className = "ending-card__flourish";
  flourish.setAttribute("aria-hidden", "true");
  flourish.textContent = "✦";

  const title = document.createElement("h3");
  title.className = "ending-card__title";
  title.textContent = "THE END";

  container.append(curtain, flourish, title);
}

function renderChapterList() {
  chapters.forEach((chapter, chapterIndex) => {
    const link = document.createElement("button");
    link.className = "chapter-link";
    link.type = "button";
    link.setAttribute("aria-label", `Read Chapter ${chapterIndex + 1}: ${chapter.title}`);

    const number = document.createElement("span");
    number.className = "chapter-link__number";
    number.textContent = String(chapterIndex + 1).padStart(2, "0");

    const details = document.createElement("span");
    details.className = "chapter-link__details";

    const title = document.createElement("span");
    title.className = "chapter-link__title";
    title.textContent = chapter.title;

    const meta = document.createElement("span");
    meta.className = "chapter-link__meta";
    meta.textContent = `Pages ${chapterStarts[chapterIndex] + 1}–${chapterStarts[chapterIndex] + chapter.pages.length + 1}`;

    const arrow = document.createElement("span");
    arrow.className = "chapter-link__arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";

    details.append(title, meta);
    link.append(number, details, arrow);
    link.addEventListener("click", () => {
      isScrollMode = false;
      modeToggle.setAttribute("aria-pressed", "false");
      modeLabel.textContent = "Scrolling mode";
      pageIndex = chapterStarts[chapterIndex];
      showBook("reader");
    });
    chapterList.append(link);
  });
}

function renderPage(turnDirection = "") {
  const page = pages[pageIndex];
  const pageNumber = pageIndex + 1;
  const chapter = page.isEndCard ? null : chapters[page.chapterIndex];
  chapterLabel.textContent = page.isEndCard ? "Curtain call" : `Chapter ${page.chapterIndex + 1}`;
  readerTitle.textContent = page.isEndCard ? "The End" : chapter.title;
  readerPage.classList.remove("reader-page--scroll");
  readerPage.setAttribute("aria-label", `Page ${pageNumber} of ${totalPageCount}`);
  readerPage.replaceChildren();

  const inner = document.createElement("div");
  inner.className = "reader-page__inner";
  if (turnDirection) {
    inner.classList.add(`reader-page__inner--turn-${turnDirection}`);
  }

  if (page.isEndCard) {
    appendEndCard(inner);
  } else if (page.isOpener) {
    inner.classList.add("reader-page__inner--chapter");
    const flourish = document.createElement("span");
    flourish.className = "page-flourish";
    flourish.setAttribute("aria-hidden", "true");
    flourish.textContent = "✦";

    const chapterNumber = document.createElement("p");
    chapterNumber.className = "chapter-opener__number";
    chapterNumber.textContent = `Chapter ${page.chapterIndex + 1}`;

    const title = document.createElement("h3");
    title.className = "chapter-opener__title";
    title.textContent = chapter.title;

    inner.append(flourish, chapterNumber, title);
  } else {
    appendStoryParagraph(inner, page.content);
  }

  const printedPageNumber = document.createElement("span");
  printedPageNumber.className = "page-number";
  printedPageNumber.textContent = String(pageNumber);
  printedPageNumber.setAttribute("aria-label", `Page ${pageNumber}`);
  inner.append(printedPageNumber);
  readerPage.append(inner);

  pageCount.textContent = `${pageNumber} / ${totalPageCount}`;
  previousPageButton.disabled = pageIndex === 0;
  nextPageButton.disabled = pageIndex === totalPageCount - 1;
}

function renderScrollMode() {
  chapterLabel.textContent = "The complete story";
  readerTitle.textContent = "All chapters";
  readerPage.classList.add("reader-page--scroll");
  readerPage.setAttribute("aria-label", "Complete story in scrolling mode");
  readerPage.replaceChildren();

  chapters.forEach((chapter, chapterIndex) => {
    const section = document.createElement("section");
    section.className = "scroll-chapter";

    const number = document.createElement("p");
    number.className = "chapter-opener__number";
    number.textContent = `Chapter ${chapterIndex + 1}`;

    const title = document.createElement("h3");
    title.className = "scroll-chapter__title";
    title.textContent = chapter.title;
    section.append(number, title);

    chapter.pages.forEach((page) => appendStoryParagraph(section, page));
    readerPage.append(section);
  });

  const ending = document.createElement("section");
  ending.className = "scroll-ending";
  ending.setAttribute("aria-label", "The end");
  appendEndCard(ending);
  readerPage.append(ending);
}

function setReadingMode(scrollMode, turnDirection = "") {
  isScrollMode = scrollMode;
  modeToggle.setAttribute("aria-pressed", String(scrollMode));
  modeLabel.textContent = scrollMode ? "Page mode" : "Scrolling mode";
  pageControls.hidden = scrollMode;

  if (scrollMode) {
    renderScrollMode();
  } else {
    renderPage(turnDirection);
  }
}

function openPage(index) {
  const nextPageIndex = Math.max(0, Math.min(index, totalPageCount - 1));
  if (nextPageIndex === pageIndex) {
    return;
  }

  const turnDirection = nextPageIndex > pageIndex ? "next" : "previous";
  pageIndex = nextPageIndex;
  setReadingMode(false, turnDirection);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showCover() {
  bookScreen.hidden = true;
  coverScreen.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showBook(tab) {
  coverScreen.hidden = true;
  bookScreen.hidden = false;
  showTab(tab);
  if (tab === "reader") {
    if (isScrollMode) {
      renderScrollMode();
    } else {
      renderPage();
    }
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showTab(tab) {
  const showContents = tab === "contents";
  contentsPanel.hidden = !showContents;
  readerPanel.hidden = showContents;

  document.querySelectorAll(".book-nav [data-tab]").forEach((button) => {
    button.setAttribute("aria-selected", String(button.dataset.tab === tab));
  });
}

document.querySelectorAll("[data-open-book]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.openBook === "reader") {
      pageIndex = 0;
      isScrollMode = false;
      modeToggle.setAttribute("aria-pressed", "false");
      modeLabel.textContent = "Scrolling mode";
    }
    showBook(button.dataset.openBook);
  });
});

document.querySelectorAll("[data-show-cover]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    showCover();
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showTab(button.dataset.tab);
    if (button.dataset.tab === "reader") {
      if (isScrollMode) {
        renderScrollMode();
      } else {
        renderPage();
      }
    }
  });
});

modeToggle.addEventListener("click", () => {
  setReadingMode(modeToggle.getAttribute("aria-pressed") !== "true");
});

previousPageButton.addEventListener("click", () => openPage(pageIndex - 1));
nextPageButton.addEventListener("click", () => openPage(pageIndex + 1));

readerPage.addEventListener("touchstart", (event) => {
  if (isScrollMode || event.touches.length !== 1) {
    touchStartX = null;
    touchStartY = null;
    return;
  }

  touchStartX = event.changedTouches[0].clientX;
  touchStartY = event.changedTouches[0].clientY;
}, { passive: true });

readerPage.addEventListener("touchend", (event) => {
  if (isScrollMode || event.changedTouches.length !== 1 || touchStartX === null || touchStartY === null) {
    return;
  }

  const deltaX = event.changedTouches[0].clientX - touchStartX;
  const deltaY = event.changedTouches[0].clientY - touchStartY;
  touchStartX = null;
  touchStartY = null;

  if (Math.abs(deltaX) < swipeThreshold || Math.abs(deltaX) <= Math.abs(deltaY)) {
    return;
  }

  openPage(pageIndex + (deltaX < 0 ? 1 : -1));
}, { passive: true });

document.addEventListener("keydown", (event) => {
  if (bookScreen.hidden || readerPanel.hidden || isScrollMode || event.altKey || event.ctrlKey || event.metaKey) {
    return;
  }

  if (event.key === "ArrowLeft") {
    openPage(pageIndex - 1);
  } else if (event.key === "ArrowRight") {
    openPage(pageIndex + 1);
  }
});

renderChapterList();
renderPage();
