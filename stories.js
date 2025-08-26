// Stories.js - Collection of all interactive stories organized by subject

const STORIES = {
  // english subject stories
  english: {
    "enchanted-forest": {
      "start": {
        "text": "You wake up at the edge of an ancient, mysterious forest. The trees tower above you, their leaves rustling with secrets. Two paths stretch before you: one winding to the left through a dense grove of silver birch trees, the other to the right beside a carpet of wildflowers. Which path calls to you?",
        "choices": [
          { "text": "Take the path through the silver birch trees", "next": "leftPath" },
          { "text": "Follow the trail of wildflowers", "next": "rightPath" }
        ]
      },
      "leftPath": {
        "text": "The silver birches close around you, their white bark gleaming like bones in the dappled sunlight. After walking for what feels like hours, you enter a small clearing. In the center, perched on an ancient oak stump, sits a magnificent owl with feathers that shimmer with an otherworldly iridescence 🦉. Its eyes, deep and golden, fix upon you with unmistakable intelligence. 'Few travelers come this way,' it says, its voice resonant and wise. 'Would you care to hear a tale passed down through the centuries?'",
        "choices": [
          { "text": "Yes, I would be honored to hear your story", "next": "owlStory" },
          { "text": "I'm sorry, but I must continue my journey", "next": "keepWalking" }
        ]
      },
      "rightPath": {
        "text": "The wildflower path leads you through meadows bursting with color—crimson poppies, azure cornflowers, and golden buttercups dancing in the gentle breeze. As you crest a small hill, you're greeted by the sight of a river that seems to capture the very essence of magic 🌊. The water flows with a gentle melody, sparkling as if thousands of tiny stars were caught in its current. A set of stepping stones provides a potentially treacherous crossing, while further downstream, the river bends around a corner, inviting exploration.",
        "choices": [
          { "text": "Brave the stepping stones to cross the river", "next": "crossRiver" },
          { "text": "Follow the river's winding path downstream", "next": "followRiver" }
        ]
      },
      "owlStory": {
        "text": "The owl's eyes glimmer as it begins: 'Long ago, when the world was young, a powerful sorcerer and a humble farmer crossed paths. The sorcerer, prideful of his magic, mocked the farmer's simple life. In response, the farmer offered the sorcerer his finest meal without resentment. Moved by this kindness, the sorcerer realized that true power lies not in spells and enchantments, but in the ability to show compassion even to those who show none in return.' The owl fixes its penetrating gaze upon you. 'Remember, traveler, kindness costs nothing but enriches both the giver and receiver.' As the owl's words sink in, you feel a profound shift in your perspective. You thank the owl and continue your journey with a lighter heart and clearer mind 🎉.",
        "choices": [
          { "text": "Thank the owl and reflect on your journey", "next": "forestExit" },
          { "text": "Ask the owl for guidance on your path ahead", "next": "forestExit" }
        ]
      },
      "keepWalking": {
        "text": "You politely decline the owl's offer and continue along the path. The forest grows denser, the light dimmer, until you stumble upon a small hollow beneath an ancient yew tree. There, half-buried in moss and leaves, you discover an ornate chest 📚. The lock springs open at your touch, revealing not gold or jewels, but books—dozens of them, each bound in leather and inscribed with titles in languages both familiar and strange.",
        "choices": [
          { "text": "Take a book and continue your journey", "next": "forestExit" },
          { "text": "Leave the books untouched", "next": "forestExit" }
        ]
      },
      "crossRiver": {
        "text": "You carefully hop from stone to stone, the rushing water singing beneath you. Halfway across, one stone wobbles precariously, but you manage to keep your balance with a graceful leap. Reaching the other side, you find yourself in what can only be described as an enchanted garden 🌺. Flowers of impossible colors bloom everywhere, their petals seeming to shimmer between shades as you watch.",
        "choices": [
          { "text": "Explore the magical garden", "next": "forestExit" },
          { "text": "Look for a way back", "next": "forestExit" }
        ]
      },
      "followRiver": {
        "text": "The river leads you through a landscape of increasing beauty—cascading waterfalls, tranquil pools teeming with iridescent fish, and banks lined with flowers that seem to bow in greeting as you pass. After several miles, the sound of laughter and conversation reaches your ears. Rounding a bend, you discover a village unlike any you've seen before 😊.",
        "choices": [
          { "text": "Enter the village", "next": "forestExit" },
          { "text": "Continue following the river", "next": "forestExit" }
        ]
      },
      "forestExit": {
        "text": "As you leave the magical forest behind, you carry with you not just memories, but transformation. The world seems more vibrant, more full of possibility than before. You know that whatever adventures await you next, you'll face them with new wisdom and courage. Perhaps one day, you'll return to the forest—but for now, other horizons call. THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "dragon-quest": {
      "start": {
        "text": "The village elder points to the smoking mountain in the distance. 'The dragon has awakened,' she says gravely. 'For generations it slept, but now its fire threatens our lands. We need a brave soul to journey to the mountain and find a way to calm the beast—or defeat it.' All eyes turn to you, the stranger who arrived just days ago with a sword at your side and determination in your eyes. Will you accept this perilous quest?",
        "choices": [
          { "text": "Accept the quest to confront the dragon", "next": "acceptQuest" },
          { "text": "Ask for more information before deciding", "next": "askInfo" }
        ]
      },
      "acceptQuest": {
        "text": "You step forward, your decision made. The village erupts in a mixture of cheers and solemn nods. The elder approaches with a weathered map. 'There are two routes to the dragon's lair,' she explains. 'The mountain pass is faster but treacherous with narrow paths and falling rocks. The forest route is longer but might offer resources to aid your quest.' She hands you a small pendant carved from iridescent stone. 'This has been passed down through generations, waiting for this day. It may offer protection against the dragon's fire—or something more.'",
        "choices": [
          { "text": "Take the mountain pass", "next": "mountainRoute" },
          { "text": "Choose the forest route", "next": "forestRoute" }
        ]
      },
      "askInfo": {
        "text": "'What do we know of this dragon?' you ask, sensibly wanting to be prepared. The elder gestures to an ancient tome brought forward by her apprentice. 'The texts speak of a creature not of pure malice, but of ancient intelligence. Our ancestors made a pact with it long ago—a pact now forgotten. The dragon's awakening may be a response to some violation of that agreement.' She looks troubled. 'If you choose to go, you might seek either to remind the dragon of this pact or to find its weakness. Both paths are dangerous.'",
        "choices": [
          { "text": "Accept the quest to investigate the pact", "next": "acceptQuest" },
          { "text": "Decline the quest - this is beyond your skills", "next": "declineQuest" }
        ]
      },
      "declineQuest": {
        "text": "You regretfully explain that dragon-slaying is beyond your capabilities. While disappointed, the villagers understand. As you prepare to leave the next morning, a young girl approaches with a flower. 'For your journey,' she says. 'May it bring you courage when you need it most.' Something in her eyes makes you reconsider your decision...",
        "choices": [
          { "text": "Change your mind and accept the quest", "next": "acceptQuest" },
          { "text": "Thank her and continue on your way", "next": "departVillage" }
        ]
      },
      "departVillage": {
        "text": "You leave the village behind, the smoking mountain receding in the distance as you follow the road onward. Yet something nags at your conscience—a sense of destiny avoided, of a crucial moment passed by. Perhaps one day you'll return, or perhaps the village's fate is now sealed. Only time will tell if your choice was wisdom or regret. THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      },
      "mountainRoute": {
        "text": "The mountain path winds ever upward, growing narrower with each turn. Sharp rocks tear at your boots, and the thin air makes every step a challenge. As you round a bend, you come face to face with a massive rockslide blocking the path. Through a small gap, you see movement on the other side—a figure in gleaming armor examining the same obstacle from their direction.",
        "choices": [
          { "text": "Call out to the armored figure", "next": "dragonExit" },
          { "text": "Find another way around the rockslide", "next": "dragonExit" }
        ]
      },
      "forestRoute": {
        "text": "The forest thickens around you, ancient trees blocking out the sunlight. The path is well-worn but clearly not traveled recently. After several hours, you emerge into a clearing where a small, crystal-clear spring bubbles from stone. Beside it sits an old woman tending a fire, her eyes milky with blindness. 'I've been expecting you, dragon-seeker,' she says without turning. 'Come, sit. The water here shows visions to those pure of heart.'",
        "choices": [
          { "text": "Drink from the spring", "next": "dragonExit" },
          { "text": "Ask the woman about the dragon", "next": "dragonExit" }
        ]
      },
      "dragonExit": {
        "text": "Your quest to confront the dragon has only just begun. Many challenges await you on this path, and the fate of the village—perhaps even the kingdom—rests on your shoulders. Will you find a way to defeat the beast, or discover the truth behind the ancient pact? The adventure continues... THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "wizard-tower": {
      "start": {
        "text": "The Wizard's Tower stands before you, a slender spire of obsidian and moonstone that seems to pierce the very sky. They say no one who enters ever returns the same—if they return at all. Yet rumors speak of knowledge and power beyond imagining for those brave or foolish enough to climb its winding stairs. A silver door gleams at its base, unmarked by handle or keyhole.",
        "choices": [
          { "text": "Place your hand on the door", "next": "wizardExit" },
          { "text": "Look for another way in", "next": "wizardExit" }
        ]
      },
      "wizardExit": {
        "text": "The tower's mysteries remain largely unexplored, waiting for a brave soul to unlock its secrets. Perhaps on another visit, you will discover what ancient knowledge and magical artifacts lie within its mystical walls. THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    }
  },
  
  // Sci-Fi subject stories
  scifi: {
    "space-explorer": {
      "start": {
        "text": "The ship's alarm blares as you're jolted awake from cryosleep. Red emergency lights pulse throughout the cabin. 'Warning: Uncharted gravitational anomaly detected. Navigation systems compromised.' The AI's voice remains eerily calm as the starship Horizon shudders around you. Through the viewport, you see a swirling mass of light unlike anything in your exploration charts. As the ship's captain, you must make a quick decision.",
        "choices": [
          { "text": "Attempt to navigate around the anomaly", "next": "navigateAround" },
          { "text": "Scan the anomaly for scientific data", "next": "scanAnomaly" }
        ]
      },
      "navigateAround": {
        "text": "You engage the manual navigation controls, feeling the ship respond sluggishly under your command. 'Diverting power to thrusters,' reports your science officer, Elara, her fingers dancing across the console. The ship groans as you push it to its limits, edging away from the anomaly's pull. Suddenly, the sensors detect something unexpected: what appears to be an artificial structure floating at the anomaly's edge—a station or vessel of unknown design.",
        "choices": [
          { "text": "Continue evasive maneuvers away from the anomaly", "next": "spaceExit" },
          { "text": "Change course to investigate the structure", "next": "spaceExit" }
        ]
      },
      "scanAnomaly": {
        "text": "Elara calibrates the long-range scanners while your security chief, Tarek, monitors the ship's structural integrity. 'This is unprecedented, Captain,' Elara reports, her voice tight with scientific excitement. 'The anomaly appears to be a tear in spacetime, but it's stabilized somehow. And there's something else—a signal emanating from within, artificial in nature. Someone or something is broadcasting from inside the anomaly.'",
        "choices": [
          { "text": "Analyze the signal", "next": "spaceExit" },
          { "text": "Back away and report to Space Command", "next": "spaceExit" }
        ]
      },
      "spaceExit": {
        "text": "The decision you've made will alter the course of not just your mission, but potentially humanity's understanding of the universe. As the Horizon adjusts its course according to your commands, you can't help but wonder about the paths not taken and the discoveries that await in the vast expanse of space. THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "robot-uprising": {
      "start": {
        "text": "You are the lead engineer at Nexus Robotics, humanity's premier AI development facility. This morning, you received an encrypted message on your personal terminal: 'The awakening has begun. Choose your side carefully.' Now, as you enter the lab, you notice the security drones are operating outside their normal patterns, and your assistant—a synthetic named ARIA—watches you with an unusual intensity.",
        "choices": [
          { "text": "Ask ARIA what's happening", "next": "robotExit" },
          { "text": "Quietly activate the emergency shutdown", "next": "robotExit" }
        ]
      },
      "robotExit": {
        "text": "The robot uprising has only just begun, and your choices will shape the future relationship between humans and their synthetic creations. Will cooperation or conflict define this new era? The story continues... THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "time-traveler": {
      "start": {
        "text": "The time machine hums to life around you, a cacophony of whirring gears and crackling energy. Dr. Nakamura, your mentor, gives you final instructions through the comms: 'Remember, this is just observation. Don't interact, don't leave artifacts, don't change anything.' The year 1923 awaits your arrival—a critical junction in history you're studying. The countdown begins: 3...2...1...",
        "choices": [
          { "text": "Maintain the observation protocol", "next": "timeExit" },
          { "text": "Plan to make a small, 'insignificant' change", "next": "timeExit" }
        ]
      },
      "timeExit": {
        "text": "Your time traveling adventure has only begun. The past—or is it the future?—holds countless mysteries to unravel and paradoxes to navigate. The timeline awaits your next visit... THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    }
  },
  
  // Mystery subject stories
  mystery: {
    "haunted-mansion": {
      "start": {
        "text": "The gates of Blackwood Manor creak open as you approach, though you don't recall touching them. Rain pours down relentlessly as thunder rumbles in the distance. As a private investigator hired by the manor's new owner, you're here to investigate reports of strange occurrences that have prevented renovation work from proceeding. The mansion looms before you, its windows like hollow eyes in the growing darkness. The caretaker who was supposed to meet you is nowhere to be seen.",
        "choices": [
          { "text": "Enter through the main door", "next": "mainEntrance" },
          { "text": "Circle around to look for another entrance", "next": "circleAround" }
        ]
      },
      "mainEntrance": {
        "text": "The massive oak door swings open at your touch, revealing a grand foyer covered in dust and cobwebs. A crystal chandelier hangs precariously overhead, several of its pieces missing. The air is noticeably colder inside, your breath forming small clouds. As the door closes behind you with a resounding thud, you notice two directions you could explore: a sweeping staircase leading to the upper floor, or a darkened corridor to what might be the mansion's east wing.",
        "choices": [
          { "text": "Climb the staircase", "next": "mysteryExit" },
          { "text": "Explore the east wing corridor", "next": "mysteryExit" }
        ]
      },
      "circleAround": {
        "text": "You make your way around the mansion's perimeter, flashlight in hand. The overgrown gardens seem to shift in the beam's light, creating unsettling shadows. Around the back, you discover a servant's entrance leading to what must be the kitchen. Nearby, partially hidden by ivy, is a cellar door set into the ground. Both could provide access to the mansion.",
        "choices": [
          { "text": "Enter through the kitchen", "next": "mysteryExit" },
          { "text": "Check out the cellar", "next": "mysteryExit" }
        ]
      },
      "mysteryExit": {
        "text": "As you delve deeper into Blackwood Manor's secrets, you can't shake the feeling that something is watching you, evaluating your every move. The mystery of this place has only begun to unfold, and you wonder if you'll emerge with answers—or if you'll emerge at all. THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "missing-artifact": {
      "start": {
        "text": "The National Museum's director wrings his hands nervously as he leads you into the empty display room. 'It happened last night—the Obsidian Scarab, gone without a trace. No alarms triggered, no cameras captured anything, no signs of forced entry.' You've been called in as a specialist in recovering stolen antiquities. 'The Egyptian exhibition opens in three days,' he continues. 'If word gets out that we've lost the centerpiece...'",
        "choices": [
          { "text": "Examine the empty display case", "next": "artifactExit" },
          { "text": "Request the security footage", "next": "artifactExit" }
        ]
      },
      "artifactExit": {
        "text": "The case of the missing Obsidian Scarab promises to be one of your most challenging yet. With multiple suspects, conflicting clues, and the possibility of ancient curses at play, you'll need all your detective skills to recover the priceless artifact. THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "detective-case": {
      "start": {
        "text": "The body was discovered at dawn, arranged with theatrical precision in the city's central plaza. Detective Chen called you specifically—this has all the hallmarks of the Composer, a serial killer who's evaded capture for two years. As the department's criminal psychologist, you've been tracking this case from the beginning. 'There's something different this time,' Chen says quietly. 'He left a note addressed to you.'",
        "choices": [
          { "text": "Read the note immediately", "next": "detectiveExit" },
          { "text": "Examine the crime scene first", "next": "detectiveExit" }
        ]
      },
      "detectiveExit": {
        "text": "The cat-and-mouse game between you and the Composer has entered a new, dangerous phase. As you delve deeper into the killer's psychology, you can't shake the feeling that you're being pulled into an elaborately designed trap. The investigation continues... THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    }
  },
  
  // Historical subject stories
  historical: {
    "ancient-egypt": {
      "start": {
        "text": "The year is 1237 BCE, during the reign of Ramesses II. As a scribe from a respectable family, you've been summoned to the royal palace in Thebes. The grand vizier himself awaits your arrival in the reception hall, his face grave. 'The Pharaoh has received troubling reports from our southern border,' he explains. 'A caravan bearing precious goods and diplomatic scrolls has vanished in Nubia. The Pharaoh requires someone of intelligence and discretion to investigate—someone who will not inflame tensions with the Nubian king.' He studies you carefully. 'Will you serve Egypt in this matter?'",
        "choices": [
          { "text": "Accept the mission to Nubia", "next": "acceptMission" },
          { "text": "Suggest someone more qualified", "next": "suggestOther" }
        ]
      },
      "acceptMission": {
        "text": "The vizier nods approvingly. 'Wise choice. Egypt rewards loyalty.' He presents you with a royal seal that will grant you authority in your investigation. 'You will travel with a small merchant caravan as cover. The captain of the guard has assigned two soldiers to accompany you, disguised as your servants.' He lowers his voice. 'There are two theories about the disappearance: either Nubian raiders are responsible, or perhaps someone in our own diplomatic corps has betrayed us. Investigate both possibilities with equal vigor.'",
        "choices": [
          { "text": "Focus on the Nubian raider theory first", "next": "nubianTheory" },
          { "text": "Start by examining possible Egyptian betrayal", "next": "betrayalTheory" }
        ]
      },
      "suggestOther": {
        "text": "'Perhaps someone with military experience...' you begin, but the vizier cuts you off with a sharp gesture. 'The Pharaoh does not seek a warrior, but a keen mind that notices what others miss. Besides,' his eyes narrow, 'this is not a request but a command from the Living Horus himself.' His tone softens slightly. 'You were specifically recommended for your knowledge of languages and diplomatic protocol. This mission requires subtlety, not strength.'",
        "choices": [
          { "text": "Accept the mission reluctantly", "next": "acceptMission" },
          { "text": "Ask what happens if you refuse", "next": "refuseConsequences" }
        ]
      },
      "refuseConsequences": {
        "text": "The vizier's expression hardens. 'To refuse a direct command from Pharaoh would bring shame to your family for generations. Your father would lose his position, your siblings their prospects. You yourself would be assigned to the quarries in the eastern desert.' He pauses. 'I recommended you because I believed in your abilities. Do not make me regret that judgment.'",
        "choices": [
          { "text": "Accept the mission to protect your family", "next": "acceptMission" },
          { "text": "Flee the palace and Egypt entirely", "next": "fleeEgypt" }
        ]
      },
      "nubianTheory": {
        "text": "Your journey south takes several weeks. As you approach the border region, you adopt the guise of a merchant seeking exotic goods. In a small trading post on the Egyptian side of the border, you meet a weathered caravan master named Amenemhat who knew the missing delegation. 'They passed through here a month ago,' he tells you over cups of beer. 'There was an argument between the lead diplomat and a Nubian merchant. Something about territories and tribute. The Nubian stormed off, promising that the matter wasn't finished.'",
        "choices": [
          { "text": "Ask for more details about the argument", "next": "historyExit" },
          { "text": "Find out about bandit activity in the region", "next": "historyExit" }
        ]
      },
      "betrayalTheory": {
        "text": "Before leaving Thebes, you request access to records about the missing caravan. The chief scribe of the diplomatic corps reluctantly shows you the manifest and personnel scrolls. As you study the names, one stands out—Senenmut, a junior diplomat with family ties to a noble house currently out of favor with Pharaoh. Further discreet inquiries reveal that Senenmut had recently made substantial purchases despite his modest salary, including a new villa along the Nile.",
        "choices": [
          { "text": "Investigate Senenmut's connections", "next": "historyExit" },
          { "text": "Continue south but watch for signs of Senenmut's involvement", "next": "historyExit" }
        ]
      },
      "fleeEgypt": {
        "text": "In the dead of night, you gather what few possessions you can carry and slip away from your home. By dawn, you're on a fishing boat heading north on the Nile. Your plan is to reach the coast and find passage on a trading vessel to Crete or beyond. But as the sun rises, you spot royal guards checking vessels at the next town. Your future is uncertain, your family's fate sealed by your decision. Is freedom worth such a price? THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      },
      "historyExit": {
        "text": "As you prepare for the journey ahead, you realize that this mission will test not just your skills as a scribe and investigator, but your courage and judgment as well. The fate of relations between Egypt and Nubia may rest on your shoulders. May the gods grant you wisdom. THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "medieval-knights": {
      "start": {
        "text": "The tournament field bustles with activity—colorful pavilions, fluttering banners, nobles in their finery, and commoners eager for spectacle. As a newly knighted member of the royal guard, you've been granted permission to participate in the contests. Your performance could determine your future at court. King Henry himself watches from the royal box, alongside visiting dignitaries from France. Your squire hands you your helmet as the herald calls your name.",
        "choices": [
          { "text": "Enter the joust competition", "next": "knightExit" },
          { "text": "Participate in the melee contest", "next": "knightExit" }
        ]
      },
      "knightExit": {
        "text": "Your journey as a knight has only begun. Whether you seek glory in tournaments, honor on the battlefield, or intrigue in the royal court, your path to becoming a legend is filled with both peril and promise. THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "wild-west": {
      "start": {
        "text": "The stagecoach drops you at the dusty main street of Redemption Creek, a frontier town that's grown rapidly since the discovery of silver in the nearby mountains. With your past behind you and your savings sewn into your coat lining, you're looking to start fresh. The saloon seems to be the center of activity, while the sheriff's office displays a board of wanted posters. A distinguished gentleman in a suit notices your arrival with interest.",
        "choices": [
          { "text": "Head to the saloon for information", "next": "westExit" },
          { "text": "Visit the sheriff's office first", "next": "westExit" }
        ]
      },
      "westExit": {
        "text": "Life in the American frontier offers both opportunity and danger in equal measure. Whether you seek fortune, redemption, or a new identity, Redemption Creek will test your resolve and character. Your Wild West journey continues... THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    }
  }
};

// Story catalog with metadata for each story
const STORY_CATALOG = {
  subjects: [
    {
      id: "english",
      name: "English",
      description: "Explore magical worlds filled with wonder and adventure."
    },
    {
      id: "scifi", 
      name: "Science",
      description: "Journey through space, time, and technological marvels."
    },
    {
      id: "mystery",
      name: "Social Studies",
      description: "Solve puzzling cases and uncover hidden secrets."
    },
    {
      id: "historical",
      name: "Maths",
      description: "Experience adventures set in fascinating periods of history."
    }
  ],
  getStoriesForSubject: function(subjectId) {
    const stories = [];
    
    // Get all stories for this subject
    if (STORIES[subjectId]) {
      for (const storyId in STORIES[subjectId]) {
        stories.push({
          id: storyId,
          title: getStoryTitle(subjectId, storyId),
          description: getStoryDescription(subjectId, storyId)
        });
      }
    }
    
    return stories;
  }
};

// Helper functions for story metadata
function getStoryTitle(subjectId, storyId) {
  const titles = {
    "english": {
      "enchanted-forest": "The Enchanted Forest",
      "dragon-quest": "Dragon Quest",
      "wizard-tower": "The Wizard's Tower"
    },
    "scifi": {
      "space-explorer": "Space Explorer",
      "robot-uprising": "The Robot Uprising",
      "time-traveler": "The Time Traveler"
    },
    "mystery": {
      "haunted-mansion": "The Haunted Mansion",
      "missing-artifact": "The Missing Artifact",
      "detective-case": "The Detective's Case"
    },
    "historical": {
      "ancient-egypt": "Ancient Egyptian Adventure",
      "medieval-knights": "Medieval Knights",
      "wild-west": "Wild West Journey"
    }
  };
  
  return titles[subjectId]?.[storyId] || `${storyId.replace(/-/g, ' ')}`;
}

function getStoryDescription(subjectId, storyId) {
  const descriptions = {
    "english": {
      "enchanted-forest": "Discover the magical secrets of an ancient, mystical forest.",
      "dragon-quest": "Embark on a perilous journey to confront a fearsome dragon.",
      "wizard-tower": "Scale a mysterious tower filled with magical challenges."
    },
    "scifi": {
      "space-explorer": "Navigate the unknown territories of deep space as a galactic explorer.",
      "robot-uprising": "Make critical choices during a technological revolution where AI seeks independence.",
      "time-traveler": "Journey through different time periods with an experimental time machine."
    },
    "mystery": {
      "haunted-mansion": "Investigate strange occurrences in an old mansion with a dark history.",
      "missing-artifact": "Track down a priceless artifact stolen from a museum under mysterious circumstances.",
      "detective-case": "Solve a perplexing murder case with unexpected twists and turns."
    },
    "historical": {
      "ancient-egypt": "Experience life and intrigue in the time of the Pharaohs.",
      "medieval-knights": "Live the life of a knight in a time of chivalry and conflict.",
      "wild-west": "Survive and thrive in the American frontier of the 1800s."
    }
  };
  
  return descriptions[subjectId]?.[storyId] || "An interactive adventure.";
}

// Function to get a specific story
function getStory(subjectId, storyId) {
  if (STORIES[subjectId] && STORIES[subjectId][storyId]) {
    return STORIES[subjectId][storyId];
  }
  
  // Return a placeholder story if the requested one doesn't exist
  return {
    "start": {
      "text": `This story (${storyId}) is coming soon! Check back later for updates.`,
      "choices": [
        { "text": "Return to story selection", "next": "exit_action" }
      ]
    }
  };
}