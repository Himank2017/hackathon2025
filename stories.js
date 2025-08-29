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
    "magical-garden": {
      "start": {
        "text": "One bright morning, a curious boy named Rohan goes exploring near the forest. In the distance, something catches his eye—a mysterious gate glinting in the sunlight. What kind of gate do you see? 🌸",
        "choices": [
          { "text": "A sparkling golden gate", "next": "goldenGate" },
          { "text": "An ancient mossy gate", "next": "mossyGate" }
        ]
      },
      "goldenGate": {
        "text": "The magnificent golden gate stands before you, its surface shimmering with magical energy. Behind it, you glimpse a garden unlike any you've ever seen. As you approach, the gate slowly swings open, inviting you into a world of wonder. 🏰",
        "choices": [
          { "text": "Explore the rose garden", "next": "roseGarden" },
          { "text": "Visit the sunflower patch", "next": "sunflowerPatch" },
          { "text": "Check out the tulip field", "next": "tulipField" }
        ]
      },
      "mossyGate": {
        "text": "The ancient gate is covered in soft, emerald moss that seems to glow with its own gentle light. As you touch it, the gate recognizes a friend and creaks open to reveal a magical garden within. ✨",
        "choices": [
          { "text": "Explore the rose garden", "next": "roseGarden" },
          { "text": "Visit the sunflower patch", "next": "sunflowerPatch" },
          { "text": "Check out the tulip field", "next": "tulipField" }
        ]
      },
      "roseGarden": {
        "text": "You enter a section filled with roses. How would you describe these magical flowers? Each rose seems to be...",
        "choices": [
          { "text": "Glowing with rainbow colors", "next": "deeperGarden1" },
          { "text": "Dancing in the breeze", "next": "deeperGarden1" },
          { "text": "Singing soft melodies", "next": "deeperGarden1" }
        ]
      },
      "sunflowerPatch": {
        "text": "You discover a patch of extraordinary sunflowers. How do these magical sunflowers appear to you? They look...",
        "choices": [
          { "text": "Gigantic and friendly", "next": "deeperGarden1" },
          { "text": "Sparkly and golden", "next": "deeperGarden1" },
          { "text": "Cheerful and bouncing", "next": "deeperGarden1" }
        ]
      },
      "tulipField": {
        "text": "You come across a field of magical tulips. When you touch their petals, they feel...",
        "choices": [
          { "text": "Soft as silk clouds", "next": "deeperGarden1" },
          { "text": "Warm like sunshine", "next": "deeperGarden1" },
          { "text": "Cool as morning dew", "next": "deeperGarden1" }
        ]
      },
      "deeperGarden1": {
        "text": "As you walk deeper into the garden, you discover three magical plants. Which one catches your attention? 🌿",
        "choices": [
          { "text": "A crystal-covered cactus", "next": "meetFairy" },
          { "text": "A rainbow-swirled vine", "next": "meetFairy" },
          { "text": "A star-sprinkled daisy", "next": "meetFairy" }
        ]
      },
      "meetFairy": {
        "text": "Suddenly, in a shower of sparkles, a fairy appears! She wears a dress that changes colors like a prism in sunlight, and carries a wand that trails stardust. She smiles at you and says, \"Welcome, friend! I am the Guardian of Adjectives. Would you like to learn about the magic of describing words?\" 🧚‍♀️",
        "choices": [
          { "text": "Yes, teach me about adjectives!", "next": "learnAdjectives" },
          { "text": "Show me more magical plants", "next": "magicalPlants" }
        ]
      },
      "learnAdjectives": {
        "text": "The fairy waves her wand, creating glowing words in the air. \"Adjectives are magical words that describe things. Like 'sparkly' stars, 'gentle' breeze, or 'mysterious' garden. They make our world more colorful and interesting!\" ✨",
        "choices": [
          { "text": "Practice using adjectives", "next": "practice" },
          { "text": "Explore with new knowledge", "next": "magicalPlants" }
        ]
      },
      "magicalPlants": {
        "text": "The fairy leads you to a special part of the garden where the plants respond to adjectives. \"Try describing what you see,\" she encourages. \"The more descriptive your words, the more magical the garden becomes!\" 🌺",
        "choices": [
          { "text": "Describe the flowers", "next": "practice" },
          { "text": "Create new plants", "next": "practice" }
        ]
      },
      "practice": {
        "text": "The fairy hands you a shimmering notebook that sparkles with rainbow light. \"This is your Adjective Journal. When you write descriptive words in it, the garden comes alive with magic! What would you like to describe first?\" 📖",
        "choices": [
          { "text": "Write about the magical garden", "next": "gardenExit" },
          { "text": "Describe the fairy's magic", "next": "gardenExit" }
        ]
      },
      "gardenExit": {
        "text": "As you write in your magical notebook, the garden responds to your adjectives! Flowers grow more vibrant, vines dance with new energy, and everything seems more alive. The fairy beams with pride. \"Remember,\" she says, \"adjectives are like magic spells that make our words paint beautiful pictures!\" You promise to keep using descriptive words to make your stories as magical as this enchanted garden. THE END. 🌈✨",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "grammar-battle": {
      "start": {
        "text": "Welcome to the magical Grammar Town! 🌈 Here, candy-colored houses line streets paved with golden cobblestones, and rainbow fountains sparkle in sunlit squares. Three extraordinary best friends protect this enchanted place: Noun (who wears a crown of crystal letters), Verb (who dances in a cape of swirling rainbow energy), and Adjective (who floats on a cloud of shimmering colors). The town glows with magical light until one day, a swirling purple cloud appears on the horizon... What would you like to do? 🏰✨",
        "choices": [
          { "text": "Meet the grammar friends", "next": "meetFriends" },
          { "text": "Watch the dark cloud", "next": "darkCloud" }
        ]
      },
      "meetFriends": {
        "text": "The three friends gather around you. Noun stands proudly, Verb bounces with energy, and Adjective twirls gracefully. Who would you like to talk to first? 👥",
        "choices": [
          { "text": "Chat with Noun", "next": "meetNoun" },
          { "text": "Talk to Verb", "next": "meetVerb" },
          { "text": "Speak with Adjective", "next": "meetAdjective" }
        ]
      },
      "meetNoun": {
        "text": "Noun bows gracefully. \"I give names to everything!\" they explain. \"I can be a person (teacher), a place (school), or a thing (book). Without me, you wouldn't know who or what the sentence is about!\" 📚",
        "choices": [
          { "text": "Meet another friend", "next": "meetFriends" },
          { "text": "Practice with nouns", "next": "practiceNouns" }
        ]
      },
      "meetVerb": {
        "text": "Verb does a backflip! \"I'm all about action!\" they exclaim while demonstrating. \"I can run, jump, swim, dance, sing, and play! I show what's happening in the sentence.\" 🏃‍♂️",
        "choices": [
          { "text": "Meet another friend", "next": "meetFriends" },
          { "text": "Practice with verbs", "next": "practiceVerbs" }
        ]
      },
      "meetAdjective": {
        "text": "Adjective spins in a rainbow of colors. \"I make everything beautiful and clear!\" they say with a smile. \"I describe nouns: happy dog, tall tree, shiny star. I help paint pictures with words!\" 🌈",
        "choices": [
          { "text": "Meet another friend", "next": "meetFriends" },
          { "text": "Practice with adjectives", "next": "practiceAdjectives" }
        ]
      },
      "darkCloud": {
        "text": "The dark cloud grows larger, and suddenly... BOOM! The Sentence Monster appears! It roars and starts jumbling words in Grammar Town. The first mess it creates is: \"runs cat the fast\" The townspeople panic! 😱",
        "choices": [
          { "text": "Help fix the sentence", "next": "fixFirstSentence" },
          { "text": "Call the grammar friends", "next": "callFriends" }
        ]
      },
      "practiceNouns": {
        "text": "Noun shows you some examples: \"Look around! 'Teacher' is a person-noun, 'park' is a place-noun, and 'ball' is a thing-noun. Can you spot more nouns in Grammar Town?\" 🎯",
        "choices": [
          { "text": "Continue exploring", "next": "darkCloud" },
          { "text": "Meet other friends", "next": "meetFriends" }
        ]
      },
      "practiceVerbs": {
        "text": "Verb demonstrates actions: \"Watch me! I can 'jump' (jumps), 'dance' (dances), and 'spin' (spins). Every action you see is a verb! Want to try some?\" 💫",
        "choices": [
          { "text": "Continue exploring", "next": "darkCloud" },
          { "text": "Meet other friends", "next": "meetFriends" }
        ]
      },
      "practiceAdjectives": {
        "text": "Adjective points to things around: \"See that 'tall' tree? That 'happy' child? That 'bright' sun? I added all those describing words! They make everything more interesting!\" ✨",
        "choices": [
          { "text": "Continue exploring", "next": "darkCloud" },
          { "text": "Meet other friends", "next": "meetFriends" }
        ]
      },
      "callFriends": {
        "text": "The three friends rush to help! Noun examines the jumbled words: \"I see 'cat'—that's me!\" Verb points: \"And 'runs' is my part!\" Adjective adds: \"'Fast' is one of mine!\" Together, they can fix this! 💪",
        "choices": [
          { "text": "Help fix the sentence", "next": "fixFirstSentence" }
        ]
      },
      "fixFirstSentence": {
        "text": "Working together, you and the friends rearrange the words. \"The fast cat runs.\" Perfect! Each word is in its right place: 'the cat' (noun), 'runs' (verb), 'fast' (adjective). But wait—the monster isn't done! 🔄",
        "choices": [
          { "text": "Face the next challenge", "next": "secondChallenge" }
        ]
      },
      "secondChallenge": {
        "text": "The monster throws another jumbled sentence: \"happy dog a plays\" The friends look at you expectantly. Can you help them fix this one too? Remember what each friend does! 🤔",
        "choices": [
          { "text": "Reorganize the words", "next": "fixSecondSentence" },
          { "text": "Ask friends for help", "next": "getFriendsHelp" }
        ]
      },
      "getFriendsHelp": {
        "text": "Noun points to 'dog', Verb claims 'plays', and Adjective shows that 'happy' describes the dog. The article 'a' helps introduce our noun. Now you can put it all together! 📝",
        "choices": [
          { "text": "Fix the sentence", "next": "fixSecondSentence" }
        ]
      },
      "fixSecondSentence": {
        "text": "\"A happy dog plays.\" The sentence is fixed! The monster howls in defeat and begins to fade away. The townspeople cheer as Grammar Town is saved by the power of properly organized words! 🎉",
        "choices": [
          { "text": "Celebrate victory", "next": "grammarExit" }
        ]
      },
      "grammarExit": {
        "text": "Thanks to you and the grammar friends, Grammar Town is safe again! Noun, Verb, and Adjective thank you for your help. \"Remember,\" they say, \"every good sentence needs a name (noun), an action (verb), and sometimes a description (adjective) to be complete!\" THE END. 🌟",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "punctuation-party": {
      "start": {
        "text": "Welcome to the enchanted land of Grammar, where words live in houses made of crystal prisms that shower rainbows across flower-lined streets! Each house sparkles with its own magical glow—some pulse with sapphire light, others shimmer with emerald and ruby hues. But something isn't quite right—the sentences are as tangled as a garden of confused butterflies. Suddenly, a royal announcement echoes through the streets, carried by glowing paper airplanes that leave trails of golden sparkles: \"Tonight, we shall hold the Punctuation Party! Everyone must attend.\" What would you like to do? ✨🌟",
        "choices": [
          { "text": "Head to the palace", "next": "enterPalace" },
          { "text": "Watch the punctuation marks arrive", "next": "watchArrivals" }
        ]
      },
      "enterPalace": {
        "text": "The Grammar Palace glitters with lights, and music fills the air. Inside, you see empty spaces at the ends of sentences, waiting for their punctuation marks. The Queen of Grammar stands at her throne, watching the entrance expectantly. 👑",
        "choices": [
          { "text": "Greet the Queen", "next": "meetQueen" },
          { "text": "Watch the guests arrive", "next": "watchArrivals" }
        ]
      },
      "meetQueen": {
        "text": "The Queen smiles warmly. \"Welcome to our Punctuation Party! We must help our sentences look neat and clear. Each punctuation mark has a special job to do. Would you like to meet them?\" 👑",
        "choices": [
          { "text": "Meet the punctuation marks", "next": "watchArrivals" },
          { "text": "Ask about their jobs", "next": "learnPunctuation" }
        ]
      },
      "watchArrivals": {
        "text": "The punctuation marks begin to arrive! First comes the Full Stop (.), walking calmly and wisely. Then the energetic Question Mark (?) hops in, followed by the excited Exclamation Mark (!). Finally, the Quotation Marks arrive together. Who would you like to meet first?",
        "choices": [
          { "text": "Talk to Full Stop", "next": "meetFullStop" },
          { "text": "Chat with Question Mark", "next": "meetQuestion" },
          { "text": "Greet Exclamation Mark", "next": "meetExclamation" },
          { "text": "Meet Quotation Marks", "next": "meetQuotations" }
        ]
      },
      "meetFullStop": {
        "text": "The Full Stop (.) bows politely. \"I end sentences,\" he explains calmly. \"Without me, thoughts would go on and on. I help readers know when to pause. Like this.\" He demonstrates by completing a sentence perfectly.",
        "choices": [
          { "text": "Meet another mark", "next": "watchArrivals" },
          { "text": "Help with a sentence", "next": "helpSentence" }
        ]
      },
      "meetQuestion": {
        "text": "The Question Mark (?) bounces excitedly. \"Do you want to know what I do? Can you guess my job? Isn't it fun to ask questions?\" He grins. \"I help people ask things and show curiosity! Want to try making a question?\"",
        "choices": [
          { "text": "Meet another mark", "next": "watchArrivals" },
          { "text": "Help with a sentence", "next": "helpSentence" }
        ]
      },
      "meetExclamation": {
        "text": "The Exclamation Mark (!) jumps up and down. \"Wow! This party is amazing! I love showing excitement and strong feelings! Don't you think everything's more fun with enthusiasm!\" He practically sparkles with energy!",
        "choices": [
          { "text": "Meet another mark", "next": "watchArrivals" },
          { "text": "Help with a sentence", "next": "helpSentence" }
        ]
      },
      "meetQuotations": {
        "text": "The Quotation Marks bow together. \"We work as a pair,\" they say. \"We hold important words that people say. Like this: 'Hello!' See how we keep the words safe between us?\" They demonstrate their teamwork.",
        "choices": [
          { "text": "Meet another mark", "next": "watchArrivals" },
          { "text": "Help with a sentence", "next": "helpSentence" }
        ]
      },
      "learnPunctuation": {
        "text": "The Queen explains: \"Full Stops end sentences (.), Question Marks ask things (?), Exclamation Marks show excitement (!), and Quotation Marks hold spoken words. Together, they make our writing clear!\" 📝",
        "choices": [
          { "text": "Meet the marks", "next": "watchArrivals" },
          { "text": "Help with a sentence", "next": "helpSentence" }
        ]
      },
      "helpSentence": {
        "text": "Suddenly, a messy sentence stumbles into the party: \"can you help me find my bag\" It looks lost without proper punctuation! The Queen turns to you. \"Will you help fix this sentence?\" 📝",
        "choices": [
          { "text": "Make it a question", "next": "fixQuestion" },
          { "text": "Make it a statement", "next": "fixStatement" }
        ]
      },
      "fixQuestion": {
        "text": "Working together with the punctuation marks, you help fix the sentence. The Capital Letter stands tall at the start, and the Question Mark hops to the end. Now it reads perfectly: \"Can you help me find my bag?\" Everyone cheers! ✨",
        "choices": [
          { "text": "Celebrate success", "next": "partyExit" }
        ]
      },
      "fixStatement": {
        "text": "With the help of the punctuation marks, you transform the sentence. The Capital Letter leads the way, and the Full Stop provides a perfect ending: \"Can you help me find my bag.\" But wait—doesn't it sound like a question? Maybe try another way! 🤔",
        "choices": [
          { "text": "Try making it a question instead", "next": "fixQuestion" }
        ]
      },
      "partyExit": {
        "text": "Thanks to you and the punctuation marks, the sentence is now clear and proper! The Queen of Grammar smiles proudly. \"Remember,\" she says, \"punctuation marks are the true heroes of writing. They help us express ourselves clearly and beautifully!\" The party continues with perfectly punctuated joy! THE END. 🎉",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "tense-machine": {
      "start": {
        "text": "Meet Arjun, an adventurous boy who loves science, his eyes sparkling like stars discovering new galaxies. In his magical workshop, where rainbow-colored light dances through crystal wind chimes and bounces off walls covered in shimmering diagrams, he's about to unveil his proudest invention. It's a magnificent machine that seems to capture starlight itself—a box of polished silver that glows like moonlight, with buttons that pulse with enchanted colors: one red like a sunset, one green like spring leaves, and one blue like ocean waves. He calls it the Tense Machine. His cat, Meenu, a fluffy orange cloud with golden eyes that shine like tiny suns, sits beside him on a cushion embroidered with swirling time spirals. What would you like to do? 🌟",
        "choices": [
          { "text": "Examine the machine's buttons", "next": "examineButtons" },
          { "text": "Ask about the invention", "next": "askInvention" }
        ]
      },
      "examineButtons": {
        "text": "You look at the machine closely. There are three glowing buttons: 🔴 Past (Red), 🟢 Present (Green), and 🔵 Future (Blue). Each button seems to pulse with a mysterious energy. Meenu purrs softly, as if encouraging you to press one.",
        "choices": [
          { "text": "Press the Past button", "next": "pastButton" },
          { "text": "Press the Present button", "next": "presentButton" },
          { "text": "Press the Future button", "next": "futureButton" }
        ]
      },
      "askInvention": {
        "text": "Arjun's eyes light up as he explains, 'This is my Tense Machine! It helps us understand how we talk about things that happened before (past), things happening now (present), and things that will happen (future). Want to try it out?' 🔮",
        "choices": [
          { "text": "Yes, let's test it!", "next": "examineButtons" },
          { "text": "Ask how it works first", "next": "machineExplanation" }
        ]
      },
      "machineExplanation": {
        "text": "'The machine connects grammar to real events,' Arjun explains excitedly. 'Each button shows us how verbs change with time. It's like a time-traveling grammar teacher!' Meenu meows in agreement, pawing at the buttons. 🐱",
        "choices": [
          { "text": "Try the machine now", "next": "examineButtons" }
        ]
      },
      "pastButton": {
        "text": "You press the red Past button 🔴. The machine whirs to life and displays: 'Yesterday, you played cricket with your friends.' Arjun grins, 'I remember that match! I scored a six!' The machine shows how we talk about things that already happened.",
        "choices": [
          { "text": "Try another button", "next": "examineButtons" },
          { "text": "Learn about past tense", "next": "learnPast" }
        ]
      },
      "presentButton": {
        "text": "The green Present button 🟢 glows as you press it. The screen shows: 'Right now, you play with your brother.' Just then, Arjun's brother calls from the next room, inviting him for a chess game! The machine shows what's happening now.",
        "choices": [
          { "text": "Try another button", "next": "examineButtons" },
          { "text": "Learn about present tense", "next": "learnPresent" }
        ]
      },
      "futureButton": {
        "text": "Pressing the blue Future button 🔵, the machine comes alive with a soft hum. It displays: 'Tomorrow, you will play football in the park.' Arjun gasps, excited about both the prediction and the grammar lesson about things yet to happen.",
        "choices": [
          { "text": "Try another button", "next": "examineButtons" },
          { "text": "Learn about future tense", "next": "learnFuture" }
        ]
      },
      "learnPast": {
        "text": "The machine explains: 'Past tense tells us about things that already happened. Words often end in -ed: played, walked, talked. But some are different: ran, went, saw.' Arjun adds, 'Like when I scored that six yesterday!' 📚",
        "choices": [
          { "text": "Continue exploring", "next": "grammarExit" }
        ]
      },
      "learnPresent": {
        "text": "A lesson appears: 'Present tense shows what's happening now. Sometimes we add -s: plays, walks, talks. For I/you/we/they, we use the basic form: play, walk, talk.' Meenu watches the screen intently. 📖",
        "choices": [
          { "text": "Continue exploring", "next": "grammarExit" }
        ]
      },
      "learnFuture": {
        "text": "The machine teaches: 'Future tense shows what will happen later. We use 'will' or 'going to': will play, is going to walk, will talk.' Arjun excitedly plans his tomorrow's game. 🎮",
        "choices": [
          { "text": "Continue exploring", "next": "grammarExit" }
        ]
      },
      "grammarExit": {
        "text": "Thanks to Arjun's amazing Tense Machine, you've learned how language changes with time—past, present, and future. Meenu purrs contentedly as Arjun declares, 'Now we can time travel through grammar!' The machine glows softly, ready for more adventures in language. THE END. ⏰",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    }
  },
  
  // Sci-Fi subject stories
  
  
  // Mystery subject stories
  mystery: {
    "british-rule": {
      "start": {
        "text": "Welcome to the time-traveling archives! You've been chosen to explore the fascinating history of India, once known as the 'Golden Bird' 🌏. Before you are three mystical scrolls, each holding different parts of this important story. Which scroll would you like to read first?",
        "choices": [
          { "text": "The Golden Bird and Early Trade", "next": "goldenBird" },
          { "text": "The Rise of Company Rule", "next": "companyRule" },
          { "text": "The Path to Freedom", "next": "freedomPath" }
        ]
      },
      "goldenBird": {
        "text": "As you open the first scroll, images of ancient India shimmer before your eyes. You see bustling markets filled with precious silks, fragrant spices, and glittering gems. Traders from distant lands arrive on ships, drawn by India's legendary wealth. Among them, you notice British merchants of the East India Company arriving in the 1600s. 🏺",
        "choices": [
          { "text": "Explore the trading centers", "next": "tradeCenters" },
          { "text": "Learn about Indian treasures", "next": "indianTreasures" },
          { "text": "Watch the British traders", "next": "britishTraders" }
        ]
      },
      "tradeCenters": {
        "text": "The scroll reveals four major trading centers: Surat with its busy ports, Madras (now Chennai) with its fort, Bombay (now Mumbai) with its harbor, and Calcutta (now Kolkata) along the river. Each center tells a story of commerce, culture, and growing British influence. 🏰",
        "choices": [
          { "text": "Investigate British motives", "next": "companyRule" },
          { "text": "Learn about local rulers", "next": "localRulers" }
        ]
      },
      "indianTreasures": {
        "text": "You discover the richness of India's treasures: finest cotton and silk textiles, exotic spices that European kings craved, precious gems that adorned palaces, and advanced crafts that amazed the world. No wonder India was called the 'Golden Bird'! ✨",
        "choices": [
          { "text": "See how trade changed", "next": "companyRule" },
          { "text": "Explore cultural exchange", "next": "culturalExchange" }
        ]
      },
      "companyRule": {
        "text": "The second scroll glows with a darker energy. It shows how the East India Company transformed from traders to rulers. The Battle of Plassey in 1757 appears—a turning point where betrayal and cunning led to British control over Bengal, India's richest province. 🗡️",
        "choices": [
          { "text": "Learn about the changes", "next": "colonialChanges" },
          { "text": "Witness people's struggles", "next": "peopleStruggle" }
        ]
      },
      "colonialChanges": {
        "text": "You see dramatic changes: farmers forced to grow indigo and cotton instead of food, heavy taxes crushing the people, and ancient industries like weaving being destroyed. But you also notice new railways cutting across the land, telegraph lines connecting cities, and schools teaching in English. 🚂",
        "choices": [
          { "text": "Explore the resistance", "next": "resistance" },
          { "text": "Learn about education", "next": "education" }
        ]
      },
      "resistance": {
        "text": "The scroll shows the brave revolt of 1857—soldiers and citizens rising against Company rule. Though the revolt was crushed, it forced a change: the British Crown took direct control of India. But the spark of resistance had been lit... ⚔️",
        "choices": [
          { "text": "Meet freedom fighters", "next": "freedomPath" },
          { "text": "Learn about peaceful protests", "next": "gandhiPath" }
        ]
      },
      "freedomPath": {
        "text": "The final scroll radiates with hope. You see great leaders emerging: Dadabhai Naoroji exposing British exploitation, Tilak demanding 'Swaraj' (self-rule), Gandhi leading peaceful protests, Bose building an army, and Bhagat Singh inspiring the youth. 🕊️",
        "choices": [
          { "text": "Follow Gandhi's path", "next": "gandhiPath" },
          { "text": "Learn about other leaders", "next": "otherLeaders" }
        ]
      },
      "gandhiPath": {
        "text": "Gandhi's unique way of fighting appears: using truth and non-violence (Satyagraha). You witness the historic Salt March, where thousands walked to protest unjust salt laws, and the powerful Quit India Movement that shook British rule. 🧂",
        "choices": [
          { "text": "Join the Salt March", "next": "saltMarch" },
          { "text": "Experience Independence", "next": "independence" }
        ]
      },
      "saltMarch": {
        "text": "You walk alongside Gandhi and thousands of Indians in the Salt March. The determination in their eyes, the peaceful resistance against unjust laws, and the unity of people from all backgrounds shows you the power of non-violent protest. ✊",
        "choices": [
          { "text": "See the impact", "next": "independence" }
        ]
      },
      "independence": {
        "text": "Finally, you reach the historic moment: August 15, 1947. The Indian flag rises over a free nation as the British flag comes down. You understand now that India's freedom came through unity, courage, and the determination of countless people who never gave up. 🇮🇳 THE END.",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
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
    "integer-kingdom": {
      "start": {
        "text": "Welcome to the Kingdom of Integers! 👑 A magical realm divided into three great regions: the sunny Positive Plains, the mysterious Negative Valley, and at the center, Zero City. King Zero rules from his throne on the Number Line Bridge. Which region would you like to explore first?",
        "choices": [
          { "text": "Visit the Positive Plains", "next": "positivePlains" },
          { "text": "Venture into Negative Valley", "next": "negativeValley" }
        ]
      },
      "positivePlains": {
        "text": "In the bright Positive Plains ☀️, you find citizens celebrating! Sir +1 dances merrily while +2 and +3 race toward +10. Sir +5 boasts, 'Life is wonderful when you move forward! The further we go, the greater we become!' But suddenly, troubling news arrives...",
        "choices": [
          { "text": "Learn about the conflict", "next": "conflictBegins" }
        ]
      },
      "negativeValley": {
        "text": "In the shadowy Negative Valley 🌙, you find Lady -1 and Lord -5 discussing their concerns. 'Those Positives think they're the best,' Lady -1 frowns. 'They forget that for every step forward, we take one backward. Without us, there would be no balance!'",
        "choices": [
          { "text": "Join the gathering conflict", "next": "conflictBegins" }
        ]
      },
      "conflictBegins": {
        "text": "Both groups march to the Number Line Bridge in Zero City! +7 shouts about being bigger and brighter, while -7 argues back. The argument grows until King Zero raises his royal staff. 'SILENCE!' he commands. ⚔️",
        "choices": [
          { "text": "Listen to King Zero's wisdom", "next": "kingsWisdom" }
        ]
      },
      "kingsWisdom": {
        "text": "'This kingdom survives because of balance,' King Zero declares. 'Without Negatives, Positives would tip over. Without Positives, Negatives would drift away. And without me, there would be no center! Shall we play the Game of Addition to prove it?' 👑",
        "choices": [
          { "text": "Play the Game of Addition", "next": "additionGame" }
        ]
      },
      "additionGame": {
        "text": "The King pairs opposite numbers together. When +3 joins hands with -3, POOF! They vanish into Zero! 💫 The same happens with +5 and -5, +10 and -10. Everyone watches in amazement as opposites create perfect balance.",
        "choices": [
          { "text": "Try another experiment", "next": "finalLesson" }
        ]
      },
      "finalLesson": {
        "text": "King Zero then demonstrates what happens with unpaired numbers. +4 steps forward alone, and stays positive! 'See?' says the King. 'Without your opposite, you remain yourself. But together, you create balance. This is the foundation of integer addition and subtraction!' ✨",
        "choices": [
          { "text": "Learn about applications", "next": "integerExit" }
        ]
      },
      "integerExit": {
        "text": "From that day forward, Positives and Negatives worked together in harmony, building bridges, helping Fractions find homes, and becoming the foundation of Algebra! The Kingdom of Integers stretches forever in both directions, proving that every number—positive or negative—has an important role to play. THE END. ⚖️",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
    "fraction-friends": {
      "start": {
        "text": "Welcome to the magical land of Mathville! 🏰 You'll join three best friends known as the Fraction Friends: Fiona the Fox 🦊, Benny the Bear 🐻, and Lila the Lamb 🐑. They're heading to Chef Fraction's Pie Shop, hungry for a delicious adventure! How would you like to help them?",
        "choices": [
          { "text": "Help share the first pie", "next": "sharePie" },
          { "text": "Learn about fractions", "next": "learnFractions" }
        ]
      },
      "sharePie": {
        "text": "Chef Fraction places a giant pie on the table. 🥧 Fiona suggests cutting it in half, but Benny growls that it won't be fair with three friends. 'We need to think about this carefully,' says Lila. What should they try?",
        "choices": [
          { "text": "Cut into thirds", "next": "thirdsPie" }
        ]
      },
      "learnFractions": {
        "text": "Fiona explains that fractions help share things fairly. She draws on a napkin: 'Look, if we cut something in half, each piece is 1/2. If we cut it in three, each piece is 1/3!' The others watch with interest. 📝",
        "choices": [
          { "text": "Try sharing the pie", "next": "thirdsPie" }
        ]
      },
      "thirdsPie": {
        "text": "Benny carefully cuts the pie into three equal parts, giving each friend 1/3. 'Now it's fair!' But after eating their shares, Lila is still hungry. Chef Fraction offers to bake another pie! 🥧",
        "choices": [
          { "text": "Explore equivalent fractions", "next": "equivalentFractions" }
        ]
      },
      "equivalentFractions": {
        "text": "The new pie is cut into 6 equal pieces. Each friend takes 2 pieces (2/6). Fiona notices something interesting: 'Hey, 2/6 looks the same as 1/3 from before!' Benny exclaims, 'That's called equivalent fractions!' ✨",
        "choices": [
          { "text": "Try adding fractions", "next": "addingFractions" }
        ]
      },
      "addingFractions": {
        "text": "Benny spots 8 cookies 🍪 and creates a puzzle: 'If I eat 1/4 and Fiona eats 2/8, how much is that together?' Lila thinks carefully. 'Well, 1/4 equals 2/8, so together that's 4/8, which is the same as 1/2!'",
        "choices": [
          { "text": "Compare different fractions", "next": "compareFractions" }
        ]
      },
      "compareFractions": {
        "text": "Chef Fraction brings out three fruit tarts, cut differently: one in quarters (1/4), one in eighths (1/8), and one in halves (1/2). 'Who can pick the biggest piece?' he challenges. 🥧",
        "choices": [
          { "text": "Help choose the biggest piece", "next": "solvePuzzle" }
        ]
      },
      "solvePuzzle": {
        "text": "Fiona chooses 1/2, Benny picks 1/4, and Lila takes 1/8. By comparing the pieces, it's clear that 1/2 is bigger than both 1/4 and 1/8! Fiona wins the challenge and learns about comparing fractions. 🏆",
        "choices": [
          { "text": "Celebrate and review", "next": "fractionExit" }
        ]
      },
      "fractionExit": {
        "text": "What a delicious adventure! The Fraction Friends learned that fractions help share things fairly, can be equivalent even when they look different, can be added together, and can be compared. Most importantly, they discovered that 'Fractions make life fair and fun!' THE END. 🥧✨",
        "choices": [
          { "text": "Start a new adventure", "next": "start" }
        ]
      }
    },
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
      "integer-kingdom": "The Kingdom of Integers: The Battle for Balance",
      "fraction-friends": "The Fraction Friends' Big Feast",
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
      "integer-kingdom": "Explore the magical realm where positive and negative numbers learn about balance and harmony under King Zero's wisdom.",
      "fraction-friends": "Join Fiona Fox, Benny Bear, and Lila Lamb on a delicious adventure learning about fractions at Chef Fraction's Pie Shop.",
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