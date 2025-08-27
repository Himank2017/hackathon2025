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
    "grid-adventure": {
      "start": {
        "text": "The sea sparkles as you join Maya and her friends—Sam, Aisha, and Leo—stepping onto the golden sands of Map Island 🏝️. Maya holds a mysterious map filled with squares marked with letters and numbers. 'Look!' Maya exclaims, 'It's a grid map! The first clue says: D4.' What would you like to do?",
        "choices": [
          { "text": "Study the grid map", "next": "exploreMap" },
          { "text": "Search the beach", "next": "searchBeach" }
        ]
      },
      "exploreMap": {
        "text": "You examine the grid map with Maya. It shows coordinates A-H across the top and 1-8 down the side. 'We need to trace across to D, then down to 4,' Maya explains. 'That's how grid coordinates work!' 🗺️",
        "choices": [
          { "text": "Head to coordinate D4", "next": "coconutTree" }
        ]
      },
      "searchBeach": {
        "text": "While searching the beach, you notice footprints in the sand - you're not alone on this island! Sam spots a tall coconut tree in the distance. 'That must be at coordinate D4!' he says excitedly.",
        "choices": [
          { "text": "Go to the coconut tree", "next": "coconutTree" }
        ]
      },
      "coconutTree": {
        "text": "Beneath the tall coconut tree at D4 🌴, you find a flat rock. Digging underneath reveals a small wooden box containing seashell necklaces and a note: 'Next: B2, where the waves kiss the stones.' Suddenly, you hear rustling in the bushes!",
        "choices": [
          { "text": "Rush to coordinate B2", "next": "rockyShore" }
        ]
      },
      "rockyShore": {
        "text": "At the rocky shore (B2), waves crash dramatically against dark stones 🌊. Maya spots a glass bottle wedged between rocks. Inside is a scroll: 'For riches untold, seek E5. Beware—others want what you seek.' In the distance, you glimpse two shadowy figures watching your group.",
        "choices": [
          { "text": "Hurry to coordinate E5", "next": "hiddenClearing" }
        ]
      },
      "hiddenClearing": {
        "text": "The clearing at E5 is suspiciously quiet. Suddenly, footsteps approach! Leo spots a rope hanging from a tree and yanks it, revealing a trapdoor. Inside, you find an old compass and another note: 'Two more steps. G3, then H8.' The rival treasure hunters are getting closer! 🧭",
        "choices": [
          { "text": "Race to the cave at G3", "next": "whisperingCave" }
        ]
      },
      "whisperingCave": {
        "text": "Inside the dark cave at G3, ocean echoes create mysterious whispers 🌊. Your flashlight reveals wall carvings pointing east. The rivals' voices grow louder outside. 'H8 must be the final location!' Aisha whispers urgently.",
        "choices": [
          { "text": "Make the final dash to H8", "next": "treasureCliff" }
        ]
      },
      "treasureCliff": {
        "text": "You reach the cliff at H8 just in time! Under coral rocks, you help uncover a massive chest filled with gold coins, a sparkling crown, and the legendary Golden Pearl ✨. The rivals arrive moments too late. Maya grins, 'The grid system helped us win. Every coordinate was a key to the puzzle!'",
        "choices": [
          { "text": "Celebrate your victory", "next": "gridExit" }
        ]
      },
      "gridExit": {
        "text": "As you sail home with your friends, the treasure secured and Map Island fading into the distance 🏝️, you realize that understanding grid coordinates was the real key to your success. The rivals remain on the shore, already planning their next adventure, but thanks to your knowledge of grids and coordinates, you're already victorious! THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "balance-of-life": {
      "start": {
        "text": "Welcome to the peaceful village of Sundarpur! 🌅 Here, you'll meet Aman, a hardworking farmer, and his best friend Ravi, a caring young man. They often meet at the riverbank after their daily tasks. Who would you like to follow first?",
        "choices": [
          { "text": "Follow Aman's day", "next": "amanDay" },
          { "text": "Follow Ravi's day", "next": "raviDay" }
        ]
      },
      "amanDay": {
        "text": "You follow Aman as he starts his day. The sun rises as he heads to his fields 🌄. He plows the earth, sows seeds, and waters the crops carefully. Later, he goes to the market with fresh vegetables. 'This is an economic activity,' Aman explains. 'It helps me earn money for my family.'",
        "choices": [
          { "text": "Visit the market", "next": "marketScene" }
        ]
      },
      "raviDay": {
        "text": "You join Ravi as he starts his morning. He helps his mother cook breakfast in the kitchen 🍳, then sits with his little sister Meera under a tree, teaching her to read and write. 'This is a non-economic activity,' Ravi explains with a smile. 'I do it out of love for my family.'",
        "choices": [
          { "text": "Join the teaching", "next": "teachingScene" }
        ]
      },
      "marketScene": {
        "text": "At the bustling market, Aman arranges his fresh vegetables 🥬. You meet Priya, who proudly shows her stitched clothes. 'Economic activities like this help us be independent,' she says. 'With this money, we can support our families and save for the future.'",
        "choices": [
          { "text": "Visit the banyan tree", "next": "banyanMeeting" }
        ]
      },
      "teachingScene": {
        "text": "Under the shade of a tree 🌳, you watch as Ravi patiently helps Meera with her letters. Nearby, Neha teaches a group of children. 'We may not earn money,' she says, 'but sharing knowledge and caring for others brings joy that money can't buy.' 📚",
        "choices": [
          { "text": "Visit the banyan tree", "next": "banyanMeeting" }
        ]
      },
      "banyanMeeting": {
        "text": "Everyone gathers under the ancient banyan tree 🌳. Grandfather Hari sits with his walking stick, watching the group with wise eyes. The setting sun casts a golden glow as he prepares to share his wisdom about life's balance.",
        "choices": [
          { "text": "Listen to Grandfather Hari", "next": "grandfatherWisdom" }
        ]
      },
      "grandfatherWisdom": {
        "text": "'My children,' says Grandfather Hari, his eyes twinkling, 'economic activities give us money for our needs, but non-economic activities give us love and knowledge. Both are essential for a happy life, just like a bird needs both wings to fly.' ⚖️",
        "choices": [
          { "text": "Ask about finding balance", "next": "balanceLesson" },
          { "text": "Share your understanding", "next": "mysteryEnd" }
        ]
      },
      "balanceLesson": {
        "text": "Grandfather Hari explains how to balance both aspects of life: 'Work hard to earn, but never forget to spend time with family, help others, and share knowledge. Money fills our pockets, but love and kindness fill our hearts.' ❤️",
        "choices": [
          { "text": "Promise to maintain balance", "next": "mysteryEnd" },
          { "text": "Thank everyone for the lesson", "next": "mysteryEnd" }
        ]
      },
      "mysteryEnd": {
        "text": "As the sun sets behind the banyan tree 🌅, you understand the important lesson: money helps us live, but love and care make life worth living. Both economic and non-economic activities create the perfect balance for a happy life. Like the balanced scale - coins on one side, heart and knowledge on the other - both are essential for true happiness. THE END. ⚖️",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "timekeepers-journal": {
      "start": {
        "text": "You are Tara, a curious 10-year-old exploring your Grandma June's attic on a rainy afternoon. In a dusty corner, you spot an intriguing wooden box. What would you like to do? 📚",
        "choices": [
          { "text": "Open the box and look inside", "next": "openBox" },
          { "text": "Ask Grandma about the box", "next": "askGrandma" }
        ]
      },
      "openBox": {
        "text": "Inside the box, you find a collection of treasures: faded photographs showing familiar faces from different times, old letters with beautiful handwriting, and a mysterious diary. The items seem to tell a story of your family's past.",
        "choices": [
          { "text": "Show the items to Grandma", "next": "meetGrandma" },
          { "text": "Read the diary first", "next": "readDiary" }
        ]
      },
      "askGrandma": {
        "text": "Grandma June smiles warmly when she sees the box. 'Ah, our family's memory box! These are records of our family's past. They tell our story in the order it happened—that's called chronology.' She sits beside you, ready to share the stories.",
        "choices": [
          { "text": "Look through the items together", "next": "meetGrandma" },
          { "text": "Ask about chronology", "next": "learnChronology" }
        ]
      },
      "meetGrandma": {
        "text": "As you and Grandma June look through the items, she explains how each piece tells part of your family's story. 'Records like these are precious,' she says. 'They help us remember our past and understand how things changed over time.' ⏳",
        "choices": [
          { "text": "Take a nap and dream", "next": "meetChronos" },
          { "text": "Start organizing the items", "next": "organizeItems" }
        ]
      },
      "readDiary": {
        "text": "The diary's pages are filled with stories from the past. As your eyes grow heavy reading the fascinating entries, you drift off to sleep, and something magical begins to happen...",
        "choices": [
          { "text": "Continue into the dream", "next": "meetChronos" }
        ]
      },
      "meetChronos": {
        "text": "In your dream, you meet Chronos, a friendly magical clock with a warm smile. 'Hello, Tara! I'm Chronos, the keeper of time,' he says cheerfully. 'Would you like to learn why putting events in order is so important?' ⏰",
        "choices": [
          { "text": "Visit the magical library", "next": "visitLibrary" },
          { "text": "Learn about time keeping", "next": "learnTime" }
        ]
      },
      "learnChronology": {
        "text": "Grandma explains that chronology is like a story's timeline. 'Just as every story has a beginning, middle, and end, our lives have events that happen in a specific order. Understanding this order helps us make sense of our history.'",
        "choices": [
          { "text": "Make your own timeline", "next": "createTimeline" },
          { "text": "Take a nap and dream", "next": "meetChronos" }
        ]
      },
      "visitLibrary": {
        "text": "Chronos takes you to a magical library where you meet Eli, a young librarian. The shelves are filled with glowing books, each containing memories and records perfectly organized by time. Eli shows you how everything is arranged to tell clear stories. 📚",
        "choices": [
          { "text": "Explore the family records", "next": "exploreRecords" },
          { "text": "Learn about organization", "next": "learnOrganization" }
        ]
      },
      "learnTime": {
        "text": "Chronos shows you what happens when time records get mixed up - pictures from different years jumble together, and stories lose their meaning. 'See?' he says, 'When we keep things in order, we can understand how one event leads to another.'",
        "choices": [
          { "text": "Fix the mixed-up records", "next": "fixRecords" },
          { "text": "Visit the library", "next": "visitLibrary" }
        ]
      },
      "createTimeline": {
        "text": "You decide to create your own timeline. You write down important dates: '2015 – My 1st day of school, 2018 – Our family trip, 2023 – Got my pet cat Luna.' Grandma beams with pride at your organization skills.",
        "choices": [
          { "text": "Add more memories", "next": "mysteryEnding" },
          { "text": "Share with family", "next": "mysteryEnding" }
        ]
      },
      "exploreRecords": {
        "text": "In the library, you find a shelf labeled 'Family Events: 1950–2020'. Each book shows how your family's story unfolded over time. You realize that keeping records helps preserve precious memories for future generations.",
        "choices": [
          { "text": "Create your own record", "next": "mysteryEnding" },
          { "text": "Thank Eli and Chronos", "next": "mysteryEnding" }
        ]
      },
      "learnOrganization": {
        "text": "Eli shows you different ways to organize memories: by date, by person, by event type. 'When we organize records,' he explains, 'we're not just keeping things tidy - we're making sure stories can be found and shared.' 📅",
        "choices": [
          { "text": "Practice organizing", "next": "mysteryEnding" },
          { "text": "Create a memory box", "next": "mysteryEnding" }
        ]
      },
      "fixRecords": {
        "text": "Working with Chronos, you put the mixed-up records back in order. As each piece finds its proper place, the stories become clear again. You understand now why keeping things in chronological order is so important.",
        "choices": [
          { "text": "Wake up and organize", "next": "mysteryEnding" },
          { "text": "Learn more from Chronos", "next": "mysteryEnding" }
        ]
      },
      "mysteryEnding": {
        "text": "Whether in dreams or reality, you've discovered the importance of keeping memories in order. Now you know that chronology isn't just about dates - it's about preserving stories and understanding how the past shapes our present. You decide to continue adding to your family's records, ensuring your own story will be remembered too. THE END. 📚⏳",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    }
  },
  
  // Historical subject stories
  historical: {
    "kingdom-of-numbers": {
      "start": {
        "text": "Welcome to the Kingdom of Numbers! 👑 You'll join two adventurous friends: Factorina, who loves breaking numbers into smaller pieces, and Multiplo, who enjoys making numbers grow bigger. One morning, a royal messenger announces an exciting challenge from the Number King about the mysterious number 36! Which friend would you like to follow?",
        "choices": [
          { "text": "Join Factorina to find factors", "next": "factorinaPath" },
          { "text": "Follow Multiplo to explore multiples", "next": "multiploPath" }
        ]
      },
      "factorinaPath": {
        "text": "Factorina's eyes sparkle as she explains, 'Big numbers have small secrets! Let's find all the factors of 36 - numbers that divide it without leftovers.' She starts writing with her magic chalk: 1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6... 🔢",
        "choices": [
          { "text": "Help list all factors", "next": "findFactors" }
        ]
      },
      "multiploPath": {
        "text": "Multiplo grins and says, 'Why stop at small when you can make things huge! Let's see how far we can make 6 grow.' He starts chanting: '6, 12, 18, 24, 30, 36...' His eyes shine as the numbers keep getting bigger. 📈",
        "choices": [
          { "text": "Explore multiples", "next": "exploreMultiples" }
        ]
      },
      "findFactors": {
        "text": "'Look what we found!' Factorina exclaims. 'The factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, and 36! Each one divides 36 perfectly.' The Number King nods approvingly, but there's more to come... ✨",
        "choices": [
          { "text": "Face the final challenge", "next": "finalChallenge" }
        ]
      },
      "exploreMultiples": {
        "text": "'The multiples never end!' Multiplo laughs as he continues: '42, 48, 54...' The Number King claps his royal hands, impressed by the endless pattern. But the real test is yet to come... 🔄",
        "choices": [
          { "text": "Face the final challenge", "next": "finalChallenge" }
        ]
      },
      "finalChallenge": {
        "text": "The Number King announces the ultimate challenge: 'Find the common friends of 24 and 36, and their first common home in the Land of Multiples!' Factorina and Multiplo look at each other - this will take both their skills! 👥",
        "choices": [
          { "text": "Work together on the puzzle", "next": "solveChallenge" }
        ]
      },
      "solveChallenge": {
        "text": "Together, you discover that 24 and 36 share common factors: 1, 2, 3, 4, 6, and 12! Then, by listing multiples, you find their first common multiple is 72. The Number King is delighted with your teamwork! 🌟",
        "choices": [
          { "text": "Accept a new mission", "next": "newMission" }
        ]
      },
      "newMission": {
        "text": "Just then, a royal guard rushes in with news: 'Number 60 needs help too!' Factorina giggles and Multiplo grins - another adventure awaits! As newly appointed Number Knights, you're ready to help numbers across the kingdom. 🏰",
        "choices": [
          { "text": "Begin the next quest", "next": "historyExit" }
        ]
      },
      "historyExit": {
        "text": "Congratulations! You've learned that factors are the smaller numbers that divide perfectly, multiples are the bigger numbers that grow endlessly, and working together helps solve the trickiest number puzzles. As Number Knights, you'll continue spreading mathematical wisdom throughout the kingdom! THE END. 👑",
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
      "grid-adventure": "The Great Grid Adventure",
      "balance-of-life": "The Balance of Life",
      "timekeepers-journal": "The Timekeeper's Journal"
    },
    "historical": {
      "kingdom-of-numbers": "The Kingdom of Numbers"
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
      "grid-adventure": "Join Maya and her friends on an exciting treasure hunt using grid coordinates on Map Island.",
      "balance-of-life": "Learn about economic and non-economic activities through the lives of villagers in Sundarpur.",
      "timekeepers-journal": "Join Tara on a magical journey to learn about chronology and the importance of keeping records."
    },
    "historical": {
      "kingdom-of-numbers": "Join Factorina and Multiplo on a magical quest to discover factors and multiples in the Kingdom of Numbers."
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