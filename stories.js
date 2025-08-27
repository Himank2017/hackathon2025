// Stories.js - Collection of all interactive stories organized by subject

const STORIES = {
  // science subject stories
  science: {
    "curious-magnet": {
      "start": {
        "text": "You are visiting your grandfather's workshop on a sunny afternoon. As you look around, you notice something interesting - a small iron nail is sticking to a shiny bar. Curious about this phenomenon, what would you like to do?",
        "choices": [
          { "text": "Ask grandfather about the magnetic bar", "next": "askGrandfather" },
          { "text": "Explore and test other objects", "next": "exploreObjects" }
        ]
      },
      "askGrandfather": {
        "text": "Your grandfather smiles warmly and explains, 'That bar is a magnet. Magnets have a special power - they attract certain materials like iron, nickel, and cobalt. But they don't attract things like wood, plastic, or rubber.' He shows you how the magnet works with different materials.",
        "choices": [
          { "text": "Learn about magnetic poles", "next": "learnPoles" },
          { "text": "Test more objects", "next": "exploreObjects" }
        ]
      },
      "exploreObjects": {
        "text": "Excited to learn more, you run around the house with the magnet, testing different objects. The spoons, keys, and scissors all get pulled to the magnet! But when you try it with the wooden chair and plastic toys, nothing happens. 🧲",
        "choices": [
          { "text": "Ask about why some objects stick", "next": "askGrandfather" },
          { "text": "Learn about magnetic poles", "next": "learnPoles" }
        ]
      },
      "learnPoles": {
        "text": "Grandfather picks up another magnet and shows you something fascinating. 'Magnets have two poles—North and South,' he explains. He demonstrates how two North poles push away from each other, but when he brings North and South together, they snap together! You laugh and say, 'So magnets are like people—some come together, some push away!' 🧲",
        "choices": [
          { "text": "Test the poles yourself", "next": "scienceExit" },
          { "text": "Try more experiments", "next": "scienceExit" }
        ]
      },
      "scienceExit": {
        "text": "You've learned so much about magnets today in grandfather's workshop! Now you understand that magnets have special powers to attract certain materials and that their poles can either attract or repel each other. Science can be so much fun! THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "green-friends": {
      "start": {
        "text": "You're sitting in a beautiful park on a sunny day, relaxing under a big mango tree 🌳. A colorful butterfly flutters nearby, catching your attention. Your teacher spots you and walks over with a smile. What would you like to do?",
        "choices": [
          { "text": "Ask about the butterfly", "next": "learnAboutButterfly" },
          { "text": "Ask about the mango tree", "next": "learnAboutTree" }
        ]
      },
      "learnAboutButterfly": {
        "text": "As you watch the butterfly sipping nectar from flowers, your teacher explains, 'This butterfly is an animal - it moves around looking for food because it can't make its own. See how it depends on plants for nectar?' The butterfly's wings shimmer in the sunlight 🦋.",
        "choices": [
          { "text": "Ask about other animals", "next": "exploreAnimals" },
          { "text": "Learn how plants help animals", "next": "plantHelp" }
        ]
      },
      "learnAboutTree": {
        "text": "Your teacher points to the mango tree, 'This tree, like all plants, is amazing! It's green because it has chlorophyll, which helps it make its own food through photosynthesis. Unlike animals, plants stay fixed in one place.' 🌱",
        "choices": [
          { "text": "Ask about photosynthesis", "next": "learnPhotosynthesis" },
          { "text": "Learn about plant types", "next": "explorePlants" }
        ]
      },
      "exploreAnimals": {
        "text": "Your teacher explains how different animals get their food: 'Some eat plants, some eat other animals, and some, like butterflies, drink nectar. But none can make their own food like plants do. They all move around to find what they need.'",
        "choices": [
          { "text": "Learn how animals help plants", "next": "animalHelp" },
          { "text": "Discover more about food chains", "next": "biologyExit" }
        ]
      },
      "plantHelp": {
        "text": "'Plants are like nature's helpers,' your teacher explains. 'They not only provide food for animals but also give us oxygen to breathe! Without plants, animals couldn't survive. The mango tree above us is doing this right now!' 🌳",
        "choices": [
          { "text": "Learn how animals help plants back", "next": "animalHelp" },
          { "text": "Ask about other ways plants help", "next": "biologyExit" }
        ]
      },
      "learnPhotosynthesis": {
        "text": "'Plants are like natural factories,' your teacher explains. 'They use sunlight, water, and air to make their own food through photosynthesis. During this process, they also release oxygen that we breathe!' 🌿",
        "choices": [
          { "text": "Learn about plant parts", "next": "explorePlants" },
          { "text": "Ask about plant benefits", "next": "plantHelp" }
        ]
      },
      "explorePlants": {
        "text": "Your teacher shows you different plants in the park: trees, shrubs, flowers, and grass. 'All these plants are fixed in one place, but they each have special ways to survive and grow. They're all green because of chlorophyll!' 🌿",
        "choices": [
          { "text": "Learn about plant needs", "next": "plantHelp" },
          { "text": "Discover plant varieties", "next": "biologyExit" }
        ]
      },
      "animalHelp": {
        "text": "'Just as plants help animals, animals help plants too!' your teacher says. 'Butterflies and bees help pollinate flowers, birds spread seeds when they eat fruits, and some animals help plants grow better by enriching the soil.' 🦋",
        "choices": [
          { "text": "Learn more about pollination", "next": "biologyExit" },
          { "text": "Explore this friendship further", "next": "biologyExit" }
        ]
      },
      "biologyExit": {
        "text": "Looking at the butterfly dancing around flowers and the strong mango tree above, you understand now - plants and animals are like best friends who help each other! Plants provide food and oxygen, while animals help with pollination and seed spreading. It's a beautiful partnership that keeps our world alive! THE END. 🌱🦋",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "magic-separation": {
      "start": {
        "text": "You're in the kitchen with your mother who is preparing dinner. As she sorts through the rice, you notice small stones mixed in. 'Mom, how will we eat this? There are stones inside!' you exclaim. What would you like to do? ⚗️",
        "choices": [
          { "text": "Ask about how to clean the rice", "next": "learnHandpicking" },
          { "text": "Help mother in the kitchen", "next": "helpMother" }
        ]
      },
      "learnHandpicking": {
        "text": "Your mother smiles and explains, 'We use different separation methods in our daily life. Watch how I carefully pick out the stones from the rice - this is called handpicking. It's one of the simplest ways to separate different things.' She demonstrates the technique.",
        "choices": [
          { "text": "Ask about other separation methods", "next": "otherMethods" },
          { "text": "Try handpicking yourself", "next": "tryHandpicking" }
        ]
      },
      "helpMother": {
        "text": "As you help your mother in the kitchen, she shows you different ways of separating things: sieving flour to remove husk, filtering tea to separate tea leaves, and even explains how salt is made through evaporation! ⚗️",
        "choices": [
          { "text": "Try some separation methods", "next": "tryMethods" },
          { "text": "Learn more about each method", "next": "otherMethods" }
        ]
      },
      "otherMethods": {
        "text": "Your mother explains more separation methods used in cooking: 'We use sieving for flour, filtration while making tea, and even evaporation when making salt - as water disappears leaving salt crystals behind.' Each method has its special use!",
        "choices": [
          { "text": "Try these methods yourself", "next": "tryMethods" },
          { "text": "Ask how they work", "next": "chemistryExit" }
        ]
      },
      "tryMethods": {
        "text": "You try different separation methods: sieving flour through a fine mesh, filtering tea with a strainer, and observe how water evaporates leaving salt behind. 'So Chemistry is in our kitchen too!' you exclaim excitedly.",
        "choices": [
          { "text": "Learn more about chemistry in cooking", "next": "chemistryExit" },
          { "text": "Help with more kitchen tasks", "next": "chemistryExit" }
        ]
      },
      "tryHandpicking": {
        "text": "You carefully try to separate stones from rice. It takes patience, but you start getting better at it! Your mother watches proudly and says, 'Every time we separate substances, we are doing science.' ⚗️",
        "choices": [
          { "text": "Learn about other methods", "next": "otherMethods" },
          { "text": "Continue helping in the kitchen", "next": "chemistryExit" }
        ]
      },
      "chemistryExit": {
        "text": "Through this kitchen adventure, you've discovered that chemistry isn't just in laboratories - it's in our everyday lives! From handpicking stones from rice to filtering tea, separation methods make our daily tasks possible. Science is everywhere! THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    }
  },

  // english subject stories
  english: {
    "enchanted-forest": {
      "start": {
        "text": "You wake up at the edge of an ancient, mysterious forest. The trees tower above you, their leaves rustling with secrets. Two paths stretch before you: one winding to the left through a dense grove of silver birch trees, the other to the right beside a carpet of wildflowers. Which path calls to you?",
        "choices": [
          { "text": "Take the path through the silver birch trees.. ", "next": "leftPath" },
          { "text": "Follow the trail of wildflowerjjjs", "next": "rightPath" }
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
      id: "science", 
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
    "science": {
      "curious-magnet": "The Curious Magnet",
      "magic-separation": "The Magic of Separation",
      "green-friends": "Green Friends and Wild Ones"
    },
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
    "science": {
      "curious-magnet": "Discover the fascinating world of magnets in grandfather's workshop.",
      "magic-separation": "Learn about different separation methods used in everyday cooking.",
      "green-friends": "Explore the amazing relationship between plants and animals in nature."
    },
    "english": {
      "enchanted-forest": "Discover the magical secrets of an ancient, mystical forest.",
      "dragon-quest": "Embark on a perilous journey to confront a fearsome dragon.",
      "wizard-tower": "Scale a mysterious tower filled with magical challenges."
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