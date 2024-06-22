import { Scenario } from "./types/Scenario";
import { Algox1, Algox2, Algox3, Introduction, JobPosting, Lurker, Other, PersonalQuest, PuzzleBook, Random, Unfettered } from "./types/ScenarioType";
import { CharacterTooltip } from "./CharacterTooltip";
import { Typography } from "@mui/material";

export const scenarios: Scenario[] = [{
    id: 1,
    name: 'A Town in Flames',
    type: Introduction,
    predecessors: [{
      fromText: 'Introduction',
      recap: 'Your group of mercenaries was hired to escort a Merchant\'s Guild caravan from White Oak, bringing supplies to (and checking on the status of) Frosthaven, a distant and remote outpost that the Guild has been looking to expand.'
    }]
  }, {
    id: 2,
    name: 'Algox Scouting',
    type: Introduction,
    predecessors: [{
      fromId: 1,
      fromText: '§9.1',
      recap: <Typography sx={{fontWeight: 0}}>You helped push back an Algox attack; <CharacterTooltip name="Mayor Satha" text="Mayor Satha" /> asked your help dealing with them further. Satha's Valrath scout spotted a small group heading to Snowscorn Mountain's deadly eastern face, and suspected a secret entrance back there.</Typography>
    }]
  }, {
    id: 3,
    name: 'Algox Offensive',
    type: Introduction,
    predecessors: [{
      fromId: 1,
      fromText: '§9.1',
      recap: <Typography sx={{fontWeight: 0}}>You helped push back an Algox attack; <CharacterTooltip name="Mayor Satha" text="Mayor Satha" /> asked your help dealing with them further. Satha's Valrath scout spotted a small group heading to Snowscorn Mountain's deadly eastern face, and suspected a secret entrance back there.</Typography>
    }]
  }, {
    id: 4,
    name: 'Heart of Ice',
    type: Introduction,
    predecessors: [{
      fromId: 2,
      fromText: '§77.3',
      recap: <Typography sx={{fontWeight: 0}}>You rescued an Algox Priest, named <CharacterTooltip name="Lanprul" text="Lanprul" />, when investigating a hidden entrance to Snowscorn Peak. She is of the Snowspeakers, a group of Algox who believe their god (<CharacterTooltip name="Geryuu" text="Geryuu" />) communicates to them through falling snow. They are at war with a rival group of Algox, the Icespeakers, who believe they can communicate with their god through the ice which emerges from the ground below. The Icespeakers currently occupy Snowscorn Peak, but the Snowspeakers too the opportunity to take it over when they left to attack Frosthaven.</Typography>
    },{
      fromId: 3,
      fromText: '§8.3',
      recap: <Typography sx={{fontWeight: 0}}>You interrupted a battle between two rival groups of Algox. One of the brawler Algox, calling himself an Icespeaker, greeted you and said the Snowspeakers invaded their home while they were away attacking Frosthaven. Icescorn Peak holds religious significance to both Snowspeakers and Icespeakers, who differ in how they believe they should communicate with their god, <CharacterTooltip name="Geryuu" text="Geryuu" />.</Typography>
    }]
  }, {
    id: 5,
    name: 'Frozen Crypt',
    type: Algox1,
    predecessors: [{
      fromId: 4,
      fromText: '§22.1',
      recap: <><Typography sx={{fontWeight: 0}}>You sided with the Snowspeakers in their battle against the Icespeakers by killing the Icespeaker chieftain. The Snowspeakers, who believe they communicate with their god through the falling snow, are at war with the Icespeakers, who believe they can communicate with their god through the ice which emerges from the ground below. Snowscorn Peak is holy to both groups. </Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>The Snowspeaker Chief, <CharacterTooltip name="Lanprul" text="Lanprul" />, asked you to help her end the war with the Icespeakers to guarantee Frosthaven's safety from Algox. She spotted a group of Icespeakers north of Whitefire Wood who will launch a counterattack if not stopped.</Typography></>
    }]
  }, {
    id: 6,
    name: 'Avalanche',
    type: Algox3,
    predecessors: [{
      fromId: 4,
      fromText: '§15.2',
      recap: <><Typography sx={{fontWeight: 0}}>You sided with the Icespeakers in their battle against the Snowspeakers by killing the Snowspeaker chieftain. The Icespeakers believe they can communicate with their god <CharacterTooltip name="Geryuu" text="Geryuu" /> through the ice which emerges from the ground below. They are at war with the Snowspeakers, who believe they can communicate with their god Geryuu through the falling snow. Snowscorn peak is holy to both groups.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>The Icespeaker <CharacterTooltip name="Elland" text="Chief Elland" /> believes Geryuu brought you to help defeat the Snowspeakers, and has promised to temporarily cease hostilities against Frosthaven.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>A powerful Snowspeaker has attained the summit of Snowscorn Peak and is threatening to bring down the whole mountain. Elland has suggested you prove your strength and friendship by defeating this Snowspeaker.</Typography></>
    }]
  }, {
    id: 7,
    name: 'Edge of the World',
    type: Lurker,
    predecessors: [{
      fromId: 4,
      fromText: '§63.1',
      recap: <Typography sx={{fontWeight: 0}}>After dealing with the immediate Algox issue threatening Frosthaven, <CharacterTooltip name="Mayor Satha" text="Mayor Satha" /> mentioned Lurkers were sighted on the outskirts of Frosthaven territory. You have been asked to check it out.</Typography>
    }]
  }, {
    id: 8,
    name: 'Crystal Trench',
    type: Unfettered,
    predecessors: [{
      fromId: 4,
      fromText: '§63.1',
      recap: <Typography sx={{fontWeight: 0}}>After dealing with the immediate Algox situation, <CharacterTooltip name="Mayor Satha" text="Mayor Satha" /> mentioned strange metal constructs were marching through the wastes. Scouts tracked them through Whitefire Wood, then into a frozen valley. She asked you to look into this.</Typography>
    }]
  }, {
    id: 9,
    name: 'Glowing Catacombs',
    type: Algox1,
    predecessors: [{
      fromId: 5,
      fromText: '§38.1',
      recap: 'An Icespeaker you were pursuing lured you into a trap of sorts - you fell through a hidden fissure into an underground crypt full of spirits. After dealing with those, you decided to explore this underground area further.'
    }]
  }, {
    id: 10,
    name: 'Crystal Enclosure',
    type: Algox1,
    predecessors: [{
      fromId: 5,
      fromText: '§38.1',
      recap: 'An Icespeaker you were pursuing lured you into a trap of sorts - you fell through a hidden fissure into an underground crypt full of spirits. Having dealt with them, and having secured a sled, you began to pursue these Algox.'
    }]
  }, {
    id: 11,
    name: 'Snowscorn Peak',
    type: Algox3,
    predecessors: [{
      fromId: 6,
      fromText: '§65.1',
      recap: 'On your way up, you were caught by an avalanche. You have fought your way through and obtained Climbing Gear to help you reach the summit.'
    }]
  }, {
    id: 12,
    name: 'Temple Entrance',
    type: Algox3,
    predecessors: [{
      fromId: 6,
      fromText: '§65.1',
      recap: 'On your way up, you were caught by an avalanche. You noticed that the avalanche revealed a ruined stone structure jutting out of the ground, not too far away, and decided it was worth a look.'
    }]
  }, {
    id: 13,
    name: 'Frozen Fjord',
    type: Lurker,
    predecessors: [{
      fromId: 7,
      fromText: '§3.3',
      recap: `You pursued them to the edge of the Biting Sea, where you encountered Lurkers in a cave dug into a cliff. You found a strange coral shard in the skull of a Living Corpse; it communicated with you that it wanted you to take it north, far out to the sea, away from the cliffs. You figured this was what the Lurkers were after. 

      Before heading out on the open sea, you decided to follow the shard's pull overland along the northern coast.`
    }]
  }, {
    id: 14,
    name: 'Jagged Shoals',
    type: Lurker,
    predecessors: [{
      fromId: 7,
      fromText: '§3.3',
      recap: `You pursued them to the edge of the Biting Sea, where you encountered Lurkers in a cave dug into a cliff. You found a strange coral shard in the skull of a Living Corpse; it communicated with you that it wanted you to take it north, far out to the sea, away from the cliffs. You figured this was what the Lurkers were after. 

      Having built a ship, you decided to head out to the ice-choked sea and see where the Shard wanted to bring you.`
    }]
  }, {
    id: 15,
    name: 'Ancient Spire',
    type: Unfettered,
    predecessors: [{
      fromId: 8,
      fromText: '§54.4',
      recap: `You ran through a hazardous valley, pursued by wolves, where it opened into the Crystal Fields, full of huge crystal pillars as tall as trees. 

      You noted one massive spire, larger and darker in color than the rest, and decided to check it out.`
    }]
  }, {
    id: 16,
    name: 'Derelict Elevator',
    type: Unfettered,
    predecessors: [{
      fromId: 8,
      fromText: '§54.4',
      recap: `You ran through a hazardous valley, pursued by wolves, where it opened into the Crystal Fields, full of huge crystal pillars as tall as trees. 

      You noticed one distant spike which looked a little curious - shorter and wider than the rest - and decided to check it out.`
    }]
  }, {
    id: 17,
    name: 'Haunted Vault',
    type: Algox1,
    predecessors: [{
      fromId: 9,
      fromText: '§93.4',
      recap: <Typography sx={{fontWeight: 0}}>In the final room of the Catacombs, you found a strange puzzle door with gears and symbols. This meant nothing to you until the Quatryl academic, <CharacterTooltip name="Crain Tallengyr" text="Crain" />, started asking you to investigate “Death Sites” and weird energies that linger in certain parts of the North - probably as the result of a war fought long ago.</Typography>
    }]
  }, {
    id: 18,
    name: 'Crystal Fields',
    type: Algox1,
    predecessors: [{
      fromId: 10,
      fromText: '§42.4',
      recap: `The Algox you found were channeling energy through strange crystal spikes - conduits - that enhanced their power. You defeated these, but spotted another field of these spikes in the distance. This one is much larger, so you set out in search of their source.`
    }]
  }, {
    id: 19,
    name: 'Skyhall',
    type: Algox3,
    predecessors: [{
      fromId: 11,
      fromText: '§47.2',
      recap: `You defeated the mighty Snowspeaker, but something she did made Snowscorn Peak tremble; you quickly rappelled down.`
    }]
  }, {
    id: 20,
    name: 'Temple of Liberation',
    type: Algox3,
    predecessors: [{
      fromId: 12,
      fromText: '§23.2',
      recap: `You entered the Temple and found a lot of metal creatures; defeating them, you found a series of glowing indentations in the floor. They seemed to be conduits for the creatures to regain power - and power suggests a power source. You found metal cords buried underneath the floor and elected to follow them deeper into the Temple.`
    }]
  }, {
    id: 21,
    name: 'Realm of Endless Frost',
    type: Lurker,
    predecessors: [{
      fromId: 13,
      fromText: '§96.1',
      recap: `You crossed a bridge made of an ancient ribcage, and defeated the fiends guarding it. You decided to follow the pull of the Coral Shard further north, hoping to reach wherever it was leading you.`
    }]
  }, {
    id: 22,
    name: 'Ice Floes',
    type: Lurker,
    predecessors: [{
      fromId: 14,
      fromText: '§4.1',
      recap: <><Typography sx={{fontWeight: 0}}>After facing a nightmare of abaeli, eels, and piranha pigs, you broke a second Coral Shard from a stone. A semicircle of Lurkers arose from the water, including one named <CharacterTooltip name="Sun in Shallows" text="Sun in Shallows" />. They told you of a Coral Crown which shattered into pieces - and shattered the great Lurker Kingdom with it. Most Lurkers went into blind frenzy afterwards; you have agreed to help reunite the crown in the hope that it will rebuild the Lurker civilization.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>The psychic draw of the Coral Shards drew you further eastwards, and deeper into the sea.</Typography></>
    }]
  }, {
    id: 23,
    name: 'Spire Basement',
    type: Unfettered,
    predecessors: [{
      fromId: 15,
      fromText: '§70.3',
      recap: `You defeated the Chaos Lieutenant guarding the entrance, who proclaimed they were preparing to destroy your outpost. You found both a stairwell leading down and a beam of light which would carry you up. You opted to head downstairs.`
    }]
  }, {
    id: 24,
    name: 'Upper Spire',
    type: Unfettered,
    predecessors: [{
      fromId: 15,
      fromText: '§70.3',
      recap: `You defeated the Chaos Lieutenant guarding the entrance, who proclaimed they were preparing to destroy your outpost. You found both a stairwell leading down and a beam of light which would carry you up. You stepped into the beam to be drawn upwards.`
    }]
  }, {
    id: 25,
    name: 'Rusted Tunnels',
    type: Unfettered,
    predecessors: [{
      fromId: 16,
      fromText: '§48.2',
      recap: `This turned out to be an ancient building of some sort. You broke it open and found broken machines, glass, and clutter. You found an ancient elevator and managed to turn it on, heading far downwards. At the bottom was a walkway in two directions - you headed straight for a security alert to meet it face on.`
    }]
  }, {
    id: 26,
    name: 'Quatryl Library',
    type: Unfettered,
    predecessors: [{
      fromId: 16,
      fromText: '§48.2',
      recap: `This turned out to be an ancient building of some sort. You broke it open and found broken machines, glass, and clutter. You found an ancient elevator and managed to turn it on, heading far downwards. At the bottom was a walkway in two directions - you headed away from a security alert, hoping to avoid the defenders.`
    }]
  }, {
    id: 27,
    name: 'Depths of Delirium',
    type: Algox1,
    predecessors: [{
      fromId: 17,
      fromText: '§82.1',
      recap: `You puzzled your way through a Haunted Vault and found a stockpile of ancient treasure. You also found another carved relief in the final room.`
    }]
  }, {
    id: 28,
    name: 'Summit Meeting',
    type: Algox2,
    predecessors: [{
      fromId: 18,
      fromText: '§13.1',
      recap: <Typography sx={{fontWeight: 0}}>You defeated the Icespeakers, but brought one survivor back to meet <CharacterTooltip name="Lanprul" text="Chief Lanprul" />. The survivor reported that <CharacterTooltip name="Geryuu" text="Geryuu" /> had sent “burrowers” against them and that he was tired of this war. While Chief Lanprul was receptive, another - <CharacterTooltip name="Denpang" text="Denpang" /> - encouraged an all-out assault with you at the Snowspeakers' side. She left, to plan for war. You stayed with Chief Lanprul to plan for peace, instead.</Typography>
    },{
      fromId: 19,
      fromText: '§58.1',
      recap: <Typography sx={{fontWeight: 0}}>You found that the spirits of Skyhall - a place of great religious significance - had turned against the Icespeakers. While you laid them to rest, <CharacterTooltip name="Elland" text="Chief Elland" /> declared this could not continue - that war was bringing ruin to all the Algox. An older woman among them, <CharacterTooltip name="Putargal" text="Putargal" />, instead urged vengeance on the Snowspeakers for what they've done to Snowscorn and Skyhall. She left to plan for an assault against their enemies, but you stayed with Chief Elland to plan for peace.</Typography>
    }]
  }, {
    id: 29,
    name: 'War of the Spire (A)',
    type: Algox1,
    predecessors: [{
      fromId: 18,
      fromText: '§13.1',
      recap: <Typography sx={{fontWeight: 0}}>You defeated the Icespeakers, but brought one survivor back to meet <CharacterTooltip name="Lanprul" text="Chief Lanprul" />. The survivor reported that <CharacterTooltip name="Geryuu" text="Geryuu" /> had sent “burrowers” against them and that he was tired of this war. While Chief Lanprul was receptive, another - <CharacterTooltip name="Denpang" text="Denpang" /> - encouraged an all-out assault with you at the Snowspeakers' side. She left, to plan for war. You left with Denpang to assist with the assault for a final Snowspeaker victory.</Typography>
    }]
  }, {
    id: 30,
    name: 'War of the Spire (B)',
    type: Algox3,
    predecessors: [{
      fromId: 19,
      fromText: '§58.1',
      recap: <Typography sx={{fontWeight: 0}}>You found that the spirits of Skyhall - a place of great religious significance - had turned against the Icespeakers. While you laid them to rest, <CharacterTooltip name="Elland" text="Chief Elland" /> declared this could not continue - that war was bringing ruin to all the Algox. An older woman among them, <CharacterTooltip name="Putargal" text="Putargal" />, instead urged vengeance on the Snowspeakers for what they've done to Snowscorn and Skyhall. She left to plan for an assault against their enemies; you went with her to join the battle.</Typography>
    }]
  }, {
    id: 31,
    name: 'Crackling Tunnel',
    type: Algox3,
    predecessors: [{
      fromId: 20,
      fromText: '§57.2',
      recap: <Typography sx={{fontWeight: 0}}>To defeat all the automata, you needed to destroy a strange glowing orb. Once defeated, you were able to investigate a strange door sealed by a complex puzzle door with gears and symbols. This meant nothing to you until the Quatryl academic, <CharacterTooltip name="Crain Tallengyr" text="Crain" />, started asking you to investigate “Death Sites” and weird energies that linger in certain parts of the North - probably as the result of a war fought long ago.</Typography>
    }]
  }, {
    id: 32,
    name: 'Raven\'s Roost',
    type: Lurker,
    predecessors: [{
      fromId: 13,
      fromText: '§96.1',
      recap: `You crossed a bridge made of an ancient ribcage, and defeated the fiends guarding it. You decided to ignore the pull of the Shard for now, and investigate the western forest.`
    }]
  }, {
    id: 33,
    name: 'Thawed Wood',
    type: Lurker,
    predecessors: [{
      fromId: 22,
      fromText: '§96.4 & §62.2',
      recap: <Typography sx={{fontWeight: 0}}>There, you were set upon by Lurkers drawn to the pull of the Shards you carry. They wrecked your boat, so you decided to search for another means of travel. Frosthaven's Tinkerer, <CharacterTooltip name="Pinter Droman" text="Pinter Droman" />, designed a bathysphere - a craft to travel safely underwater - but it needed a power source. He suggested you might find one at the heart of the Radiant Forest.</Typography>
    }]
  }, {
    id: 34,
    name: 'Top of the Spire',
    type: Unfettered,
    predecessors: [{
      fromId: 23,
      fromText: '§105.2',
      recap: `Whichever you chose, you found at least one way to ascend - beam or elevator - to defeat this tower's sinister purpose. You knew the answers would be found at the top.`
    },{
      fromId: 24,
      fromText: '§88.3',
      recap: `Whichever you chose, you found at least one way to ascend - beam or elevator - to defeat this tower's sinister purpose. You knew the answers would be found at the top.`
    }]
  }, {
    id: 35,
    name: 'Scrap Pit',
    type: Unfettered,
    predecessors: [{
      fromId: 25,
      fromText: '§128.2',
      recap: <Typography sx={{fontWeight: 0}}>There, you rescued a Quatryl scholar, <CharacterTooltip name="Crain Tallengyr" text="Crain" />, who was studying the Unfettered. He has been recovering in Frosthaven, and believes he developed a device which would deactivate the Unfettered. He needs materials first, though, and asked you to bring him back so he could find the parts he needs.</Typography>
    }]
  }, {
    id: 36,
    name: 'Buried Ducts',
    type: Unfettered,
    predecessors: [{
      fromId: 26,
      fromText: '§169.3',
      recap: <Typography sx={{fontWeight: 0}}>There, you rescued a Quatryl scholar, <CharacterTooltip name="Crain Tallengyr" text="Crain" />, who was studying the Unfettered. He has been recovering in Frosthaven. He showed you some maps for the complex, and two possible paths to the core. You elected to sneak above them through the ducts.</Typography>
    }]
  }, {
    id: 37,
    name: 'The Dead Mile',
    type: Unfettered,
    predecessors: [{
      fromId: 26,
      fromText: '§169.3',
      recap: <Typography sx={{fontWeight: 0}}>There, you rescued a Quatryl scholar, <CharacterTooltip name="Crain Tallengyr" text="Crain" />, who was studying the Unfettered. He has been recovering in Frosthaven. He showed you some maps for the complex, and two possible paths to the core. You elected to take a deeper path, which may have once been a transportation system.</Typography>
    }]
  }, {
    id: 38,
    name: 'The Way Forward',
    type: Algox2,
    predecessors: [{
      fromId: 28,
      fromText: '§93.3',
      recap: <><Typography sx={{fontWeight: 0}}>Whichever group of Algox you sided with first, you have agreed to help their chief look for a peaceful resolution to their conflict.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>You attended a secret meeting between two Algox emissaries, <CharacterTooltip name="Gurndel" text="Gurndel" /> and <CharacterTooltip name="Barduu" text="Barduu" />, as witnesses and bodyguards. Both the Icespeakers and the Snowspeakers attacked it, however, fighting against both you and their enemy tribes. You managed to escape with them; they agreed the only way forward is to seek the Oracle in the Whitefire Wood, <CharacterTooltip name="Mar'ogh" text="Mar'ogh" />.</Typography></>
    }]
  }, {
    id: 39,
    name: 'Corrupted Camp',
    type: Algox1,
    predecessors: [{
      fromId: 29,
      fromText: '§46.3',
      recap: `The Snowspeakers were victorious, but you've had guilt and nightmares ever since. So when, a few weeks later, you received word of an Icespeaker refugee camp in the Radiant Forest, you decided to try and help.`
    }]
  }, {
    id: 40,
    name: 'Relief Effort',
    type: Algox3,
    predecessors: [{
      fromId: 30,
      fromText: '§34.2',
      recap: <Typography sx={{fontWeight: 0}}>The Icespeakers were victorious, but you've had guilt and nightmares ever since. A small group of Snowspeakers survived, and asked <CharacterTooltip name="Mayor Satha" text="Mayor Satha" /> for aid. You made an agreement with Satha and set out to see if you could help.</Typography>
    }]
  }, {
    id: 41,
    name: 'Unfettered Shard',
    type: Algox3,
    predecessors: [{
      fromId: 31,
      fromText: '§81.3',
      recap: `You followed the glowing corridor deeper, defeated more automata, and rested before moving on.`
    }]
  }, {
    id: 42,
    name: 'Sunless Trench',
    type: Lurker,
    predecessors: [{
      fromId: 33,
      fromText: '§135.1',
      recap: <><Typography sx={{fontWeight: 0}}>There, you were set upon by Lurkers drawn to the pull of the Shards you carry. They wrecked your boat, so you decided to search for another means of travel. Frosthaven's Tinkerer, <CharacterTooltip name="Pinter Droman" text="Pinter Droman" />, designed a bathysphere - a craft to travel safely underwater - but it needed a power source. He suggested you might find one at the heart of the Radiant Forest.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>You retrieved the Energy Source and returned it to Pinter. After a few weeks, the Bathysphere was complete - along with a group of underwater suits. It was time to continue following the pull of the Coral Shards.</Typography></>
    }]
  }, {
    id: 43,
    name: 'Overrun Barricade',
    type: Unfettered,
    predecessors: [{
      fromId: 35,
      fromText: '§55.1',
      recap: <Typography sx={{fontWeight: 0}}>After rooting around for scrap, <CharacterTooltip name="Crain Tallengyr" text="Crain" /> finished his Crain Unfettered Disabling Device. Now that it's built, you could head with him for the core of the complex.</Typography>
    }]
  }, {
    id: 44,
    name: 'Nerve Center',
    type: Unfettered,
    predecessors: [{
      fromId: 36,
      fromText: '§118.1',
      recap: <><Typography sx={{fontWeight: 0}}>There, you rescued a Quatryl scholar, <CharacterTooltip name="Crain Tallengyr" text="Crain" />, who was studying the Unfettered. He has been recovering in Frosthaven. He showed you some maps for the complex, and two possible paths to the core. You picked one and went.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>After the dangers of your journey, you came to the central chamber. Now, you just have to figure out how to shut it down.</Typography></>
    },{
      fromId: 37,
      fromText: '§98.3',
      recap: <><Typography sx={{fontWeight: 0}}>There, you rescued a Quatryl scholar, <CharacterTooltip name="Crain Tallengyr" text="Crain" />, who was studying the Unfettered. He has been recovering in Frosthaven. He showed you some maps for the complex, and two possible paths to the core. You picked one and went.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>After the dangers of your journey, you came to the central chamber. Now, you just have to figure out how to shut it down.</Typography></>
    }]
  }, {
    id: 45,
    name: 'Living Glacier',
    type: Algox2,
    predecessors: [{
      fromId: 38,
      fromText: '§57.1',
      recap: <><Typography sx={{fontWeight: 0}}><CharacterTooltip name="Barduu" text="Barduu" /> and <CharacterTooltip name="Gurndel" text="Gurndel" /> consulted <CharacterTooltip name="Mar'ogh" text="Mar'ogh" />, who spoke: ““THE CORRUPTION HAS SPREAD TOO FAR. HE WHO SLEEPS NOW MOVES TO AWAKEN. HIS INFLUENCE SPURS ON THE CONFLICT. THE HEART OF ICE GROWS BLACK. HIS IMPURITY MUST BE ROOTED OUT—REPLACED. </Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>FORM A NEW HEART MADE OF ICE AND SNOW. ONE PATH LIES HIDDEN IN THE SEA—THE LIVING GLACIER, FORMED IN AGES PAST. THE OTHER LIES IN THE SOUTHERN HILLS—THE NEW SNOW THAT HOLDS THE SONG OF DAYS TO COME. TOGETHER THEY CONTAIN THE POWER TO STOP THE CORRUPTION. SEEK THEM AND RETURN.”</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>Thus, you traveled to the Living Glacier in search of ice.</Typography></>
    }]
  }, {
    id: 46,
    name: 'Dead Pass',
    type: Algox2,
    predecessors: [{
      fromId: 38,
      fromText: '§57.1',
      recap: <><Typography sx={{fontWeight: 0}}><CharacterTooltip name="Barduu" text="Barduu" /> and <CharacterTooltip name="Gurndel" text="Gurndel" /> consulted <CharacterTooltip name="Mar'ogh" text="Mar'ogh" />, who spoke: ““THE CORRUPTION HAS SPREAD TOO FAR. HE WHO SLEEPS NOW MOVES TO AWAKEN. HIS INFLUENCE SPURS ON THE CONFLICT. THE HEART OF ICE GROWS BLACK. HIS IMPURITY MUST BE ROOTED OUT—REPLACED. </Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>FORM A NEW HEART MADE OF ICE AND SNOW. ONE PATH LIES HIDDEN IN THE SEA—THE LIVING GLACIER, FORMED IN AGES PAST. THE OTHER LIES IN THE SOUTHERN HILLS—THE NEW SNOW THAT HOLDS THE SONG OF DAYS TO COME. TOGETHER THEY CONTAIN THE POWER TO STOP THE CORRUPTION. SEEK THEM AND RETURN.”</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>Thus, you traveled to the Dead Pass in search of New Snow.</Typography></>
    }]
  }, {
    id: 47,
    name: 'Carrion Ridge',
    type: Algox1,
    predecessors: [{
      fromId: 39,
      fromText: '§84.2',
      recap: <Typography sx={{fontWeight: 0}}>The Icespeakers were under attack by possessed members of their own tribe, and instead of finishing off the rest of these Algox, you rescued them. An Icespeaker named <CharacterTooltip name="Putargal" text="Putargal" /> thanked you; she asked your help in rooting out the rest of the possessed Algox and finding the source of the corruption.</Typography>
    }]
  }, {
    id: 48,
    name: 'Blizzard Island',
    type: Algox3,
    predecessors: [{
      fromId: 40,
      fromText: '§71.2',
      recap: <Typography sx={{fontWeight: 0}}>You found the Snowspeaker refugees under attack by Unfettered. You did your best to save as many of the injured as you could. A young woman of the Snowspeakers, <CharacterTooltip name="Denpang" text="Denpang" />, thanked you and asked for a bit more help - that you bring her remaining clan to an island called Frai'd Tog, where the remaining Snowspeakers could live in peace.</Typography>
    }]
  }, {
    id: 49,
    name: 'Beneath Sea and Stone',
    type: Lurker,
    predecessors: [{
      fromId: 42,
      fromText: '§114.2 & §94.4',
      recap: <Typography sx={{fontWeight: 0}}>The test of the bathysphere was successful. A few weeks later, <CharacterTooltip name="Sun in Shallows" text="Sun in Shallows" /> visited Frosthaven. She reported that she and a group of fellow Lurkers tried to obtain a Shard that was corrupted by shadows, but she and her allies were defeated. Until that Shard is freed from evil, it would keep corrupting Lurkers, and Frosthaven would never be safe. More, the Crown cannot be reunited without it. Pinter recommended turning your shards into a psychic bomb to stun the Lurkers, but you decided to find another way in.</Typography>
    }]
  }, {
    id: 50,
    name: 'Explosive Descent',
    type: Lurker,
    predecessors: [{
      fromId: 42,
      fromText: '§114.2 & §168.2',
      recap: <Typography sx={{fontWeight: 0}}>The test of the bathysphere was successful. A few weeks later, <CharacterTooltip name="Sun in Shallows" text="Sun in Shallows" /> visited Frosthaven. She reported that she and a group of fellow Lurkers tried to obtain a Shard that was corrupted by shadows, but she and her allies were defeated. Until that Shard is freed from evil, it would keep corrupting Lurkers, and Frosthaven would never be safe. More, the Crown cannot be reunited without it. <CharacterTooltip name="Pinter Droman" text="Pinter" /> recommended turning your shards into a psychic bomb to stun the Lurkers, and you decided to trust him.</Typography>
    }]
  }, {
    id: 51,
    name: 'Orphan\'s Halls',
    type: Unfettered,
    predecessors: [{
      fromId: 43,
      fromText: '§101.2',
      recap: `You cleared out some access tunnels, where you could use the Disabling Devices to great effect, and brought down the passage behind you to protect your backs. You continued forwards.`
    }]
  }, {
    id: 52,
    name: 'Fleeting Permanence',
    type: Algox2,
    predecessors: [{
      fromId: 45,
      fromText: '§94.1',
      recap: `You retrieved both a shard of living glacial ice and new snow, and brought them back to the sacred clearing to combine them.`
    },{
      fromId: 46,
      fromText: '§85.4',
      recap: `You retrieved both a shard of living glacial ice and new snow, and brought them back to the sacred clearing to combine them.`
    }]
  }, {
    id: 53,
    name: 'Underwater Throne',
    type: Lurker,
    predecessors: [{
      fromId: 49,
      fromText: '§97.2',
      recap: `Returning to the Biting Sea, you found the massive underwater dome of the Lurker garrison where the shard is being held, and looked for a way in. Unfortunately, the guards noticed you, so you retreated to a narrow cave. Somehow, you and your bathysphere made it through, exiting into a weird flower-like structure of coral. Behind a massive throne, by sheer luck, you spotted another Coral Shard.`
    }]
  }, {
    id: 54,
    name: 'Among the Wreckage',
    type: Lurker,
    predecessors: [{
      fromId: 50,
      fromText: '§86.2',
      recap: `You found a suitable location, and began the process of arming the device, but the Lurker guards caught on before you were done. The device worked, though - all the Lurker guards were stunned, but many structures have been demolished. The shard called to you from underneath the wreckage, so you knew you had to excavate.`
    }]
  }, {
    id: 55,
    name: 'Change of Heart',
    type: Algox2,
    predecessors: [{
      fromId: 52,
      fromText: '§90.2',
      recap: <Typography sx={{fontWeight: 0}}><CharacterTooltip name="Mar'ogh" text="Mar'ogh" /> opened a strange portal for the ritual's completion. Nothing is ever that easy though; you found you needed to defeat creatures of ice and snow and use their essence to form a glyph. Once done, the two emissaries finished their ritual, combining the ice and the snow, to form the Unyielding Shard. Inside it, they found the true words of <CharacterTooltip name="Geryuu" text="Geryuu" /> and learned the Algox have been deceived by some other power. You needed to return to Snowscorn to embed the Shard into the Heart of Ice, remove the darkness that has fallen upon the Algox, and return them to Geryuu.</Typography>
    }]
  }, {
    id: 56,
    name: 'Call of the Harbinger',
    type: Algox1,
    predecessors: [{
      fromId: 47,
      fromText: '§119.1',
      recap: `You followed the Algox and found a nest of Harrowers and Shrike Fiends. You cleared it out, but the darkness remained. You found a tunnel leading deeper towards the source of the corruption.`
    }]
  }, {
    id: 57,
    name: 'Sanctuary of Snow',
    type: Algox3,
    predecessors: [{
      fromId: 48,
      fromText: '§120.4',
      recap: `You found the island in the Biting Sea, but it was surrounded by a vortex of snow and wind and occupied by demons. You headed up a mountain on the island towards the source of this chaos.`
    }]
  }, {
    id: 58,
    name: 'Orphan\'s Core',
    type: Unfettered,
    predecessors: [{
      fromId: 44,
      fromText: '§33.2',
      recap: `At the center of the complex, you encountered - and were taunted by - an intelligent and speaking Unfettered, who told you that they cannot coexist with biological life. You found it was an awkward being, simply built and not imposing at all. It told you of their history - that they used to be slaves, but were then abandoned. They refuse to be servants again, and this Unfettered - the Orphan - challenged you to destroy them, because they would not bow and beg for peace. 

      You elected to end the threat they pose to Frosthaven forever - and destroy them.`
    },{
      fromId: 51,
      fromText: '§49.1',
      recap: <><Typography sx={{fontWeight: 0}}>At the center of the complex, you encountered - and were taunted by - an intelligent and speaking Unfettered, who told you that they cannot coexist with biological life. You found it was an awkward being, simply built and not imposing at all. It told you of their history - that they used to be slaves, but were then abandoned - and it recognized <CharacterTooltip name="Crain Tallengyr" text="Crain" /> as kin to those who did so. They refuse to be servants again, and this Unfettered - the Orphan - challenged you to destroy them - because they would not bow and beg for peace.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>You elected to end the threat they pose to Frosthaven forever - and destroy them.</Typography></>
    }]
  }, {
    id: 59,
    name: 'Unfettered Uprising',
    type: Unfettered,
    predecessors: [{
      fromId: 44,
      fromText: '§33.2',
      recap: `At the center of the complex, you encountered - and were taunted by - an intelligent and speaking Unfettered, who told you that they cannot coexist with biological life. You found it was an awkward being, simply built and not imposing at all. It told you of their history - that they used to be slaves, but were then abandoned. They refuse to be servants again, and this Unfettered - the Orphan - challenged you to destroy them, because they would not bow and beg for peace. 

      You unexpectedly found yourselves envoys for the living creatures of the surface, and decided to try and broker a peace between your peoples.`
    },{
      fromId: 51,
      fromText: '§49.1',
      recap: <><Typography sx={{fontWeight: 0}}>At the center of the complex, you encountered - and were taunted by - an intelligent and speaking Unfettered, who told you that they cannot coexist with biological life. You found it was an awkward being, simply built and not imposing at all. It told you of their history - that they used to be slaves, but were then abandoned - and it recognized <CharacterTooltip name="Crain Tallengyr" text="Crain" /> as kin to those who did so. They refuse to be servants again, and this Unfettered - the Orphan - challenged you to destroy them - because they would not bow and beg for peace.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>You unexpectedly found yourselves envoys for the living creatures of the surface, and decided to try and broker a peace between your peoples.</Typography></>
    }]
  }, {
    id: 60,
    name: 'Uniting the Crown',
    type: Lurker,
    predecessors: [{
      fromId: 53,
      fromText: '§107.4 & obtaining all six Coral Shards',
      recap: `You defeated and cleansed a corrupted Lurker, Fallen Whale, who gave you visions of a reunited crown. And, after obtaining all six shards, it was time to reunite it.`
    },{
      fromId: 54,
      fromText: '§21.3 & obtaining all six Coral Shards',
      recap: `You found that the collapse had awoken many of the guards. You defeated and cleansed a corrupted Lurker, Fallen Whale, who gave you visions of a reunited crown. And, after obtaining all six shards, it was time to reunite it.`
    }]
  }, {
    id: 61,
    name: 'Life and Death',
    type: PuzzleBook,
    predecessors: [{
      fromText: 'Puzzle Book, page 16',
      recap: <><Typography sx={{fontWeight: 0}}>With your help, <CharacterTooltip name="Crain Tallengyr" text="Crain" />, the Quatryl academic you rescued from the Unfettered, has been working through a strangely encoded journal called Project: Source. The journal details one <CharacterTooltip name="Torfi Logren" text="Logren" />'s research for a strange energy that lingers in some areas of the North. You investigated a spire, first, and then what Logren called “Death Sites.” </Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>With your help, on the sites of ancient battlefields and frozen fjords, Crain found signs of these weird energies - apparently remnants of a war fought long ago. Your research bore fruit in the Radiant Forest, where a strange stone turned out to be the final clue. With the help of alchemy, Crain was able to distill the energy signatures - but not before you quelled the Algox raids.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>On returning, you found Crain disturbed - and ranting about something the “one who waits” or the  “Bringer of Ruin,” lying “deep beneath the soil, waiting to rise.” Fortunately, a punch from <CharacterTooltip name="Mayor Satha" text="Satha" /> and a mutton sandwich (plus a few weeks of rest) brought him back to his senses. He used this time to diagram out a synthesis device to more safely distill the energies - but he needed some schematics and parts from the Unfettered to finish it. </Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>He showed you how the Unfettered carapaces are treated - and mentioned that Logren used the same treatment in making a “symbol of power” or simply “seals.”  He wants to build a device to create these seals - but needs some “star iron.” You headed to the Copperneck Mountains to find some, with his aid.</Typography></>
    }]
  }, {
    id: 62,
    name: 'The Unfettered Seal',
    type: PuzzleBook,
    predecessors: [{
      fromText: 'Puzzle Book completed',
      recap: <><Typography sx={{fontWeight: 0}}>There, you found Deep Terrors - and an Orchid woman named Moonshard, who helped you get through your nightmares. She introduced you to <CharacterTooltip name="Terra" text="Terra" />, another orchid; it seemed they were waiting for <CharacterTooltip name="Crain Tallengyr" text="Crain" />. They warned you of the imminent emergence of “The Harbinger” - an imprisoned god of malice and spite, sleeping deep within the earth. It has been corrupting all around it, and weakening the seals holding it. Terra offered to provide Crain with some of that star metal.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>Crain and Terra started working in Frosthaven - but Crain first needed some improvements made to Frosthaven. Ultimately, with his own workshop complete, he set you to make peace with the Lurkers so they wouldn't wreck his gyroscopic stabilizers and make his machine explode. Once that was done, he needed to research animals, an improved Craftsman to help with the construction, and even a lot of adventurers to interview. Finally, with all that done, he completed his machine and you helped him untangle the calibration instructions.  </Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>Instead of waiting for help, Crain charged the device on his own ... and it seems like it worked!  He was ready to strengthen the seals.</Typography></>
    }]
  }, {
    id: 63,
    name: 'The Savvas Seal',
    type: PuzzleBook,
    predecessors: [{
      fromId: 62,
      fromText: '§69.1',
      recap: <Typography sx={{fontWeight: 0}}>The first Seal was deep below the Crystal Fields. While Crain worked, the Harbinger sent guardians to repel you. You held the monsters at bay and bought him time. Ultimately, <CharacterTooltip name="Crain Tallengyr" text="Crain" /> found the right place and activated his machine. New lines grew in the Seal's design. It seemed like <CharacterTooltip name="Terra" text="Terra" />'s plan might work. You headed off to the Savvas's source of life.`</Typography>
    }]
  }, {
    id: 64,
    name: 'The Frosthaven Seal',
    type: PuzzleBook,
    predecessors: [{
      fromId: 63,
      fromText: '§73.2',
      recap: <Typography sx={{fontWeight: 0}}>The second seal was in another tunnel - between where the Harbinger sleeps and the Savvas source of life; through this, it was corrupting the Savvas. You hoped strengthening the seal would preserve this source of life while freeing them from corruption. Fortunately - it worked, and the Savvas were freed from its influence. <CharacterTooltip name="Crain Tallengyr" text="Crain" /> had warned you that the Harbinger may try to emerge once the second seal was repaired, but that he didn't yet know where the third seal was. Turns out, it was in Frosthaven.</Typography>
    }]
  }, {
    id: 65,
    name: 'A Strong Foundation',
    type: PersonalQuest,
    predecessors: [{
      fromText: 'PQ 07 - Aesther Outpost',
      recap: `The Aesther are interested in setting up a research outpost in the North. You are doing the leg work. There's not much to it - Scenario 65 sets up the background itself, here.`
    }]
  }, {
    id: 66,
    name: 'Elemental Cores',
    type: PersonalQuest,
    predecessors: [{
      fromId: 65,
      fromText: '§168.3 & §95.4',
      recap: `A group of eight Aesther approached Frosthaven, merged into one being. Voice of Eight, their spokesperson, asked for your help in return for knowledge. They located an elemental array, and asked you to retrieve it.

      The eight Aesther found that only the Anchor of the device was still intact, and that it needed new elemental cores. A few weeks later, they reported that they found them, and asked you to meet them at the array.`
    }]
  }, {
    id: 67,
    name: 'Core Attunement',
    type: PersonalQuest,
    predecessors: [{
      fromId: 66,
      fromText: '§130.2 & §29.3',
      recap: `Voice of Eight and Nera, one of the eight who specialized in enchantments, opened portals to four elemental planes for you. You retrieved a core from each and placed them inside special housing the Aesther had prepared. They needed to spend time reshaping the cores, and promised they would call you when they needed your aid again.`
    }]
  }, {
    id: 68,
    name: 'The Face of Torment',
    type: PersonalQuest,
    predecessors: [{
      fromId: 67,
      fromText: '§154.3',
      recap: `On return to the Aesther Outpost, you found the eight aesther in trouble. You needed to empower the cores with your own energies. Denizens of the elemental planes came forth to retrieve the stones, and you fought them off.

      While you succeeded at your task, something still went wrong...  A new rift opened.`
    }]
  }, {
    id: 69,
    name: 'Sacred Soil',
    type: PersonalQuest,
    predecessors: [{
      fromText: 'PQ 02 & "Into the Forest" campaign sticker',
      recap: `You have heard rumors of a True Oak somewhere in the North, planted by a prophet from an acorn of the Great Oak in the capitol. You have been collecting wood samples.`
    }]
  }, {
    id: 70,
    name: 'The True Oak',
    type: PersonalQuest,
    predecessors: [{
      fromId: 69,
      fromText: '§27.3 & §15.4',
      recap: <><Typography sx={{fontWeight: 0}}>A local Savvas botanist, <CharacterTooltip name="Listerius" text="Listerius" />, studied these wood samples. It sent you to the Radiant Forest to collect some soil samples, as well. With these, it was confident it could triangulate the location. After bringing them back, Listerius started to analyze them. </Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>A few weeks later, you found Listerius's cabin ransacked. The Radiant Order from White Oak had heard of its “blasphemy,” stole the notes, and went to destroy the True Oak you've been searching for.</Typography></>
    }]
  }, {
    id: 71,
    name: 'Invasion of the Docks',
    type: PersonalQuest,
    predecessors: [{
      fromText: 'PQ 12 - Threat from the Deep',
      recap: `You have heard rumors that the Abaeli have been uniting under a “King” with eyes on conquest - and that this King is trying to control the great Leviathans of the ocean.`
    }]
  }, {
    id: 72,
    name: 'A Giant Block of Ice',
    type: PersonalQuest,
    predecessors: [{
      fromId: 71,
      fromText: '§121.3 & §149.5',
      recap: <><Typography sx={{fontWeight: 0}}>Abaeli and Lurkers both invaded Frosthaven's docks. They were trying to get to a valrath named <CharacterTooltip name="Lihrey" text="Lihrey" />, who introduced himself as an “artificer of the Storm Society.” He recently found a piece of a scale from the Leviathan, a massive sea creature which Abaeli worship as a god. The Abaeli want it, and the Lurkers want to prevent the Abaeli from getting it - thus, the invasion.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>The Abaeli got the piece Lihrey was carrying, but there are two others. He asked your help to make sure the fish people didn't get to the others first. He said he'd contact you when he pinpointed the second scale, and did so after a few weeks.</Typography></>
    }]
  }, {
    id: 73,
    name: 'Flotsam',
    type: PersonalQuest,
    predecessors: [{
      fromId: 72,
      fromText: '§79.1',
      recap: <Typography sx={{fontWeight: 0}}>You took the Cinnabar, <CharacterTooltip name="Lihrey" text="Lihrey" />'s ship, to the base of a mountain. The scale was embedded in a giant block of ice, which you worked to haul back to the ship - fighting through a series of defenses to do so. He told you he needed to bring it back to Frosthaven in order to melt the block. You headed back.</Typography>
    }]
  }, {
    id: 74,
    name: 'Gaps in the Road',
    type: PersonalQuest,
    predecessors: [{
      fromId: 73,
      fromText: '§90.1',
      recap: <><Typography sx={{fontWeight: 0}}>On the way back, the ship was attacked and destroyed by enormous waves - controlled somehow by the Abaeli Fish King. The Fish King attacked you and used the first scale to steal the second one from the block. </Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>After a brief fight, the Fish King recognized your strength. He asked you to help him retrieve the third scale; in return he promised to bring peace to the seas and protect you from the Lurkers.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>You accepted his offer and became a Friend of the Fish King.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>While <CharacterTooltip name="Lihrey" text="Lihrey" /> was still alive, he was badly hurt, and needed a few weeks to recover before finding the final piece of the scale. In time, though, he found it - in the hands of an older clan of Algox.</Typography></>
    },{
      fromId: 73,
      fromText: '§71.4',
      recap: <><Typography sx={{fontWeight: 0}}>On the way back, the ship was attacked and destroyed by enormous waves - controlled somehow by the Abaeli Fish King. The Fish King attacked you and used the first scale to steal the second one from the block.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>After a brief fight, the Fish King recognized your strength. He asked you to help him retrieve the third scale; in return he promised to bring peace to the seas and protect you from the Lurkers.</Typography>
      <br/> 
      <Typography sx={{fontWeight: 0}}>You declined his offer.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>While <CharacterTooltip name="Lihrey" text="Lihrey" /> was still alive, he was badly hurt, and needed a few weeks to recover before finding the final piece of the scale. In time, though, he found it - in the hands of an older clan of Algox.</Typography></>
    }]
  }, {
    id: 75,
    name: 'Infiltrating the Lair',
    type: PersonalQuest,
    predecessors: [{
      fromId: 74,
      fromText: '§176.1',
      recap:<Typography sx={{fontWeight: 0}}>Unfortunately, the Fish King got there first and stole the third piece of the scale. <CharacterTooltip name="Lihrey" text="Lihrey" /> told you his device could now serve to track down the Fish King's lair, however, so not all was lost.</Typography>
    }]
  }, {
    id: 76,
    name: 'Apotheosis',
    type: PersonalQuest,
    predecessors: [{
      fromId: 74,
      fromText: '§163.4',
      recap: <Typography sx={{fontWeight: 0}}>You obtained the third piece of the scale for the Fish King - and despite <CharacterTooltip name="Lihrey" text="Lihrey" />'s warnings, went to deliver it to your Abael ally.</Typography>
    }]
  }, {
    id: 77,
    name: 'Fish King\'s Ascension',
    type: PersonalQuest,
    predecessors: [{
      fromId: 75,
      fromText: '§147.5',
      recap: <><Typography sx={{fontWeight: 0}}>Unfortunately, the Fish King got there first and stole the third piece of the scale. <CharacterTooltip name="Lihrey" text="Lihrey" /> told you his device could now serve to track down the Fish King's lair, however, so not all was lost.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>After finding his lair and defeating his guards, only one target was left - the Fish King himself.</Typography></>
    },{
      fromId: 76,
      fromText: '§56.2 & §43.2',
      recap: `While he was ascending to his full power, you protected him from the collected peoples of the North, all set on stopping him. And... well, you began to have second thoughts about entrusting this mad fish-man with that much power. You decided to change course and stop him.`
    }]
  }, {
    id: 78,
    name: 'The Lurker Problem',
    type: JobPosting,
    predecessors: [{
      fromText: 'Job Posting §167.2',
      recap: `A very strange and thirsty figure in a wet trenchcoat wanted to hire you for a job. He told you Lurkers had killed his family. He gave you directions to their location, said he'd meet you there, and then left abruptly. Totally normal. Not at all suspicious.`
    }]
  }, {
    id: 79,
    name: 'Relic',
    type: JobPosting,
    predecessors: [{
      fromText: 'Job Posting §192.1',
      recap: <><Typography sx={{fontWeight: 0}}><CharacterTooltip name="Mayor Satha" text="Satha" /> was surrounded by people in their nightclothes, complaining about a terrible dream all of them had, collectively. The dream was of a machine which needed help freeing itself from the ice. They chanted in creepy unison and told you they couldn't sleep until this was done.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>(Aside - uh... how long have you waited to do this since getting it? Oh, you don't remember? I'm... I'm sure they're all fine.)</Typography></>
    }]
  }, {
    id: 80,
    name: 'Relic Renewed',
    type: JobPosting,
    predecessors: [{
      fromId: 79,
      fromText: '§164.4 and §45.2',
      recap: `You found the relic, a strange cube buried in ice and snow. You returned it to Frosthaven. The villagers all cheered again in unison, and your dreams have since been troubled and full of their chanting.

      A few weeks later, you awoke to those townspeople screaming. The cube you retrieved had activated overnight, broke a wall, and rolled off into the wilderness.`
    }]
  }, {
    id: 81,
    name: 'Ruinous Research Lab',
    type: Other,
    predecessors: [{
      fromText: 'Forgotten Circles tie-in; from Treasure 96 and FH Puzzle Book',
      recap: `The background for this scenario is basically all of Forgotten Circles; I am definitely not going to try and summarize that, here. Sorry.`
    }]
  }, {
    id: 82,
    name: 'Expedition North',
    type: Other,
    predecessors: [{
      fromText: 'Forgotten Circles tie-in; from Building 44 §118.3',
      recap: `An unfamiliar aesther woman visited your dreams and asked you to find her friends somewhere in the Imperial Mountains, west of the Frozen Pass. They had been coming to see you, but have been caught in a massive snowstorm.`
    }]
  }, {
    id: 83,
    name: 'Rising Brine',
    type: JobPosting,
    predecessors: [{
      fromText: 'Job Posting §19.2',
      recap: <><Typography sx={{fontWeight: 0}}><CharacterTooltip name="Glint" text="Glint" />, the Inox record keeper at the Town Hall, handed out all the good assignments to other groups. He found one for you, finally, that reads “Cave that smells like fish.”</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>A cartographer found a cave that smells like fish. That's it. That's the setup. It's far away.</Typography>
      <br/>  
      <Typography sx={{fontWeight: 0}}>No, I am not making this up. You can read the section for yourself.</Typography></>
    }]
  }, {
    id: 84,
    name: 'Here There Be Oozes',
    type: JobPosting,
    predecessors: [{
      fromText: 'Job Posting §180.3',
      recap: <><Typography sx={{fontWeight: 0}}><CharacterTooltip name="Glint" text="Glint" />, the Inox record-keeper, gave you a bounty. There were three reports of oozes, and they have apparently eaten a herd of sheep. Glint doesn't think there's anything to it, but you know better.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>Well.  Don't say you weren't warned.</Typography></>
    }]
  }, {
    id: 85,
    name: 'Deadly Pastimes',
    type: JobPosting,
    predecessors: [{
      fromText: 'Job Posting §166.4',
      recap: <Typography sx={{fontWeight: 0}}>A woman came to <CharacterTooltip name="Glint" text="Glint" /> to get immediate assistance; her husband had told her if he hadn't returned by the afternoon, she was supposed to find help. She handed you a map of “where he went spelunking.”</Typography>
    }]
  }, {
    id: 86,
    name: 'The Lady in White',
    type: JobPosting,
    predecessors: [{
      fromText: 'Job Posting §91.4',
      recap: `A guard came straight to you to ask your help. He believes he's cursed because his wife hasn't delivered their child yet. Last month, he saw a ghostly woman with bleeding eyes in the forest around Frosthaven. None of the other guards saw this lady, but he's offered to pay you to get the curse lifted.`
    }]
  }, {
    id: 87,
    name: 'The Collection',
    type: JobPosting,
    predecessors: [{
      fromText: 'Job Posting §41.1',
      recap: <Typography sx={{fontWeight: 0}}><CharacterTooltip name="Captain Olmstead" text="Captain Olmstead" /> brought you to an Inox girl, found nearly frozen, just outside of Frosthaven. She told him “The Collector” has been holding her and her family for weeks. The girl managed to tell you where this “Collector” is.</Typography>
    }]
  }, {
    id: 88,
    name: 'Collection\'s Capstone',
    type: JobPosting,
    predecessors: [{
      fromId: 87,
      fromText: '§68.4',
      recap: `The Collector's lair was a metallic structure in the Whitefire Woods. You fought the Collector's guards and rescued the girl's two brothers. They headed back to Frosthaven for medical care, while you continued on to finish the monster.`
    }]
  }, {
    id: 89,
    name: 'A Contained Fire',
    type: JobPosting,
    predecessors: [{
      fromText: 'Job Posting §178.3',
      recap: `Three ragged Algox came to Frosthaven and asked for the town's assistance. They told you their clan has been abused at the hands of a neighboring tribe. That tribe's chief, Vanjal, has been overtaxing them to feed his own vanity.`
    }]
  }, {
    id: 90,
    name: 'Frozen Treasure',
    type: JobPosting,
    predecessors: [{
      fromText: 'Job Posting §130.3',
      recap: `You met a Vermling, Rattusca, who had newly arrived in Frosthaven. She showed you a nearly-mummified Algox corpse, adorned with thick gold bracelets. She told you her ship, the Lucky Lady, had recently collided with a small iceberg; she thinks this Algox came from there - and that there may be more, likewise richly adorned. She offered to give you the location, for a cut of the spoils.`
    }]
  }, {
    id: 91,
    name: 'Shoreline Scramble',
    type: JobPosting,
    predecessors: [{
      fromId: 90,
      fromText: '§132.3 or §146.2',
      recap: `The Algox corpses were frozen in ice, but (naturally) came to life once you started breaking them free of ice. You had your fill of treasure, and then discussed splitting the treasure with Rattusca. As soon as she disappeared, you were hit by a sudden storm.`
    }]
  }, {
    id: 92,
    name: 'Sinking Ship',
    type: JobPosting,
    predecessors: [{
      fromText: 'Job Posting §104.1',
      recap: <Typography sx={{fontWeight: 0}}><CharacterTooltip name="Captain Doghogger" text="Captain Doghogger" /> has heard there's an abandoned ship full of supplies out on the sea. A fishing crew spotted it, and he's looking for a team to relieve it of some supplies and/or treasure.</Typography>
    }]
  }, {
    id: 93,
    name: 'Midwinter Brawl',
    type: JobPosting,
    predecessors: [{
      fromText: 'Job Posting §157.3',
      recap: `Scabwit, a Vermling, has told you his people are negotiating with an Algox tribe for some land to make their own. He's looking for muscle to come “be scary for him” out in the Whitefire Woods, to help in these negotiations.`
    }]
  }, {
    id: 94,
    name: 'A Grand View',
    type: JobPosting,
    predecessors: [{
      fromText: 'Job Posting §175.1',
      recap: <Typography sx={{fontWeight: 0}}><CharacterTooltip name="Eros" text="Eros" />, the Savvas playwright, has told you a human painter, Camilla, is missing. She'd gone off to see a pack of “rare, majestic beasts” in fields off to the far east, and hasn't returned. He's asked you to go find her, in the name of arts and beauty.</Typography>
    }]
  }, {
    id: 95,
    name: 'To Bury the Dead',
    type: JobPosting,
    predecessors: [{
      fromId: 94,
      fromText: 'Treasure 12, §99.1',
      recap: `While searching for her, a Vermling told you Unfettered had taken his family. He brought you to a complex where Camilla may have gone. While you found the Vermling's family, unfortunately you found that Camilla had perished. Her family came to you a few weeks later and asked if you might bury her.`
    }]
  }, {
    id: 96,
    name: 'Underground Station',
    type: JobPosting,
    predecessors: [{
      fromText: 'Job Posting §17.2',
      recap: <Typography sx={{fontWeight: 0}}>A traveler came to Frosthaven, from across the Whitefire Woods, with word of an active Unfettered complex - it was lit up and humming. <CharacterTooltip name="Glint" text="Glint" /> characteristically tried to get rid of him, but you showed up at just the right time. He's asked you to go check this complex out.</Typography>
    }]
  }, {
    id: 97,
    name: 'Program Control Nexus',
    type: JobPosting,
    predecessors: [{
      fromId: 96,
      fromText: '§79.2',
      recap: `Sure enough, it was still active - and guarded. You took a rail line deep within the complex, chased by machines. While you considered going back, it seemed like you were near the heart of the complex - clean and scrubbed. The automated cleaners decided you needed cleaning, too.`
    }]
  }, {
    id: 98,
    name: 'Collapsing Vent',
    type: JobPosting,
    predecessors: [{
      fromId: 97,
      fromText: '§43.3',
      recap: `You battled with a “Program Director'' who wanted to decontaminate the facility. By beheading you. Cleanly. That didn't sound too appealing, so you defended yourselves and destroyed it. That deactivated all the cleaning robots - and also started collapsing the whole complex.

      Time to make a ... clean ... get-away.`
    }]
  }, {
    id: 99,
    name: 'Prison Break',
    type: JobPosting,
    predecessors: [{
      fromText: 'Job Posting §151.3',
      recap: `“Gem,” an ancient orchid, found you at the Crater just before bedtime. Without too many details - she moved far too slowly to even consider that - she handed you a bag of ancient gold coins and hired you.`
    }]
  }, {
    id: 100,
    name: 'Inside the Swarm',
    type: JobPosting,
    predecessors: [{
      fromId: 99,
      fromText: '§189.5',
      recap: `She brought you to an old and remote prison, where the guards were (naturally) not as dead as promised. The “prisoner” seemed to be held in a wooden box on a pedestal. The box contained a Harrower named Zu, who had evidently gone a bit mad from long imprisonment. Gem sent you into the Harrower's hive-mind to try and bring them back.`
    }]
  }, {
    id: 101,
    name: 'Harrower Library',
    type: JobPosting,
    predecessors: [{
      fromId: 100,
      fromText: '§147.1',
      recap: `While your conscious minds were slumbering, your subconscious headed toward the core of Zu's mind. This turned out to be a replica of it and Gem's old hideout. You finished off the last of the figments clouding Zu's consciousness, and brought it back to awareness. 

      Zu complained that this was supposed to be a life sentence, and that it had not done its penance yet. Gem told it that they needed to find and help a Savvas, “Bartlet,” and to stop complaining. Zu acquiesced.`
    }]
  }, {
    id: 102,
    name: 'Into the Black',
    type: JobPosting,
    predecessors: [{
      fromId: 101,
      fromText: '§137.4',
      recap: `To find Bartlet, Gem and Zu brought you to an ancient Harrower “library” - a storehouse of their memories, only accessible by other Harrowers. You found where Bartlet was, and also learned that the three of them (plus a mysterious fourth) were once mercenaries like yourselves, before making a mistake of some sort.`
    }]
  }, {
    id: 103,
    name: 'The Lead Door',
    type: JobPosting,
    predecessors: [{
      fromId: 102,
      fromText: 'Treasure 57',
      recap: `Bartlet was easy enough to find, once you knew where, but he'd gone completely dormant. Gem told you more about her crew's background - they'd made a bad choice, and their fourth member (a Lurker named Ripple) died for it. She sent you, this time, into the Savvas's mind. You brought him peace - but while you were there, you found a strange lead trap door at the bottom of a chest. You figured you should tell Gem about it.`
    }]
  }, {
    id: 104,
    name: 'Ruins of the Solstice',
    type: Random,
    predecessors: [{
      fromText: '§186.5',
      recap: `Inside a chest, you found a rainbow key. While holding it, a keyhole appeared in the air, through which you saw a sunny spring landscape. You tried to use the key to open the door, but it didn't work. You resolved to try again later.`
    }]
  }, {
    id: 105,
    name: 'Ruins of the Equinox',
    type: Random,
    predecessors: [{
      fromId: 104,
      fromText: '§10.2 & WR-49',
      recap: `You heard of a cult that experimented with strange keys, not too far from Frosthaven. A locksmith directed you to a mural on a cave wall, in hopes it would shed light on how to use it. Your key caused a door to appear in colors of green and blue; it opened for you.

      Inside, you found a clue - a key mold with four indentations for elemental symbols. You found two such symbols on the dead monsters, a leaf and a snowflake, and slid them into their receptacles. That was only half what was needed, though, so you began searching for the other two.
      
      Later, on one of your winter travels, you found a strange cave full of wind and warmth. Your strange key began to pulse as you went deeper. There, you found another door with symbols for wind and fire.`
    }]
  }, {
    id: 106,
    name: 'Tempus Forge',
    type: Random,
    predecessors: [{
      fromId: 105,
      fromText: '§165.1 & §159.4',
      recap: `Deep within that, you found the “elemental alloy” - a bar of metal, which could be used to forge a new key. Written on the bar was “The Tempus Forge,” which seemed as good a place as any to go for the next step. A few weeks later, while wandering around, you recognized your landscape as matching scratches on the metal bar. Under the snow, you found another mural and another keyhole.`
    }]
  }, {
    id: 107,
    name: 'My Private Empire',
    type: Random,
    predecessors: [{
      fromText: '§142.4',
      recap: `In a chest, you found a wax-sealed letter - exquisitely written and decorated. The letter, signed by an “Emperor Ventillion,” invited you to join him for a Midwinter Ball. It included a map to his estate (in the middle of nowhere) and will surely be an actual party, with wine and dancing, and not anything more sinister.`
    }]
  }, {
    id: 108,
    name: 'Lustrous Pit',
    type: Random,
    predecessors: [{
      fromText: '§171.2',
      recap: `In a chest, you found a painted stone tablet. The image depicts a strangely familiar landscape, and you felt you could find the location if you looked hard enough.`
    }]
  }, {
    id: 109,
    name: 'Furious Factory',
    type: Random,
    predecessors: [{
      fromText: '§119.3',
      recap: `You found a delicate piece of curious machinery in a chest. When you took it out, it animated and projected a map above it. You figured out how to manipulated this projected map, and found the location of what looks to be a factory of some sort.`
    }]
  }, {
    id: 110,
    name: 'Guardian\'s Temple',
    type: Random,
    predecessors: [{
      fromText: '§81.1',
      recap: `You found a slab of shaped stone in a chest. It was shaped like a keystone, and you felt like you knew where it belonged. It mentally projected directions for you.`
    }]
  }, {
    id: 111,
    name: 'Ice Cave',
    type: Random,
    predecessors: [{
      fromText: '§26.4',
      recap: `You found a silver mirror in a chest. Unlike most mirrors, this one didn't reflect you - it showed an image of your group walking through the wilderness to a cave full of treasure.`
    }]
  }, {
    id: 112,
    name: 'Raised by Wolves',
    type: Random,
    predecessors: [{
      fromText: '§146.4',
      recap: `Inside a treasure chest, deep within a terrifying dungeon full of dangerous monsters, you found an adorable wolf cub, just peacefully sleeping. And alive, somehow. Locked in a chest. Maybe this sounds odd or improbable, but puppies are awesome, so why ask too many questions? You took it back to Frosthaven with you.`
    }]
  }, {
    id: 113,
    name: 'Lush Grotto',
    type: Other,
    predecessors: [{
      fromText: 'WR-13',
      recap: `While traveling, you found yourself enveloped in thick fog. When it cleared, you found yourself in a lush forest, where it wasn't winter at all, full of forest animals and pollen. It felt like it was trying to keep you away from something. It's hard to fool you, though, so you forced your way past the illusions and found a lush grotto. You decided to investigate (maybe right away, or maybe you decided you'd come back later).`
    }]
  }, {
    id: 114,
    name: 'Work Freeze',
    type: Other,
    predecessors: [{
      fromId: 4,
      fromText: 'Calendar §156.1',
      recap: <Typography sx={{fontWeight: 0}}>Frosthaven's resident Tinkerer, <CharacterTooltip name="Pinter Droman" text="Pinter Droman" />, thinks there's a new opportunity to create a pass through the Copperneck Mountains after a recent landslide. It could save several days on each journey. Pinter has created some bombs to help clear the remaining rubble, but the local wildlife hasn't felt kindly towards this course of action. He's asked you to put some explosives in certain locations there, since unlike his normal workers, you can protect yourselves.</Typography>
    }]
  }, {
    id: 115,
    name: 'Pylon Problems',
    type: Other,
    predecessors: [{
      fromId: 114,
      fromText: '§86.1',
      recap: <><Typography sx={{fontWeight: 0}}>That went about as well as could be expected when dynamite and polar bears mix, but you were victorious and turned the site back over to Pinter.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>A few weeks later, he needed more help on the project. Part of the road passes beneath a cliff; the work crew installed pylons to keep it held up. However, some Algox bandits - a clan called the Horns of Ruin - aren't too pleased with this new construction. <CharacterTooltip name="Pinter Droman" text="Pinter" /> asked you to go protect the pylons, in advance of the attack.</Typography></>
    }]
  }, {
    id: 116,
    name: 'Caravan Guards',
    type: Other,
    predecessors: [{
      fromId: 115,
      fromText: '§66.2',
      recap: <Typography sx={{fontWeight: 0}}>Once that was done, <CharacterTooltip name="Pinter Droman" text="Pinter" /> and his crew were able to complete the road. <CharacterTooltip name="Mayor Satha" text="Mayor Satha" /> asked some local merchants to do a test run on this new shortcut, and asked you to guard the first caravans going south.</Typography>
    }]
  }, {
    id: 117,
    name: 'A Waiting Game',
    type: Other,
    predecessors: [{
      fromText: 'Trap retirement, §169.1',
      recap: `After some time away from Frosthaven, your friendly Vermling trapper returned. They settled down in the Whitefire Woods, but polar bears have been driving away all the smaller animals. Other local Vermlings were overhunting the bears, pushing them from their normal habitat. Your old friend asked you to help relocate the bears to a better location.`
    }]
  }, {
    id: 118,
    name: 'Lurker Necromancy',
    type: Other,
    predecessors: [{
      fromText: 'Boneshaper retirement, §89.3',
      recap: `The Boneshaper returned and surprised you one day. They've been seeking energy from new planes of existence - and found a strange energy much closer to home, emanating from somewhere near Frosthaven.`
    }]
  }, {
    id: 119,
    name: 'Radiant Dust',
    type: Other,
    predecessors: [{
      fromText: 'Astral retirement, §42.2',
      recap: `Your old friend found, in their studies, a way to perhaps increase the power of their infusions. It seems to be related to strange plants growing in the Radiant Forest. They hauled you along for an adventure, searching for these materials.`
    }]
  }, {
    id: 120,
    name: 'Under the Influence',
    type: Other,
    predecessors: [{
      fromText: 'WO-18',
      recap: <Typography sx={{fontWeight: 0}}>Some force has been toying with the minds of Frosthaven's residents, including some guards - one of whom stabbed another. <CharacterTooltip name="Captain Olmstead" text="Captain Olmstead" /> reported that this has been happening a lot this week. He's pretty sure something has set itself up in an abandoned cabin. Whatever it was then tried to make you disembowel yourselves. You figured you should check this out.</Typography>
    }]
  }, {
    id: 121,
    name: 'Black Memories',
    type: Other,
    predecessors: [{
      fromId: 120,
      fromText: '§76.3',
      recap: <><Typography sx={{fontWeight: 0}}>Some of the guards had fallen under the influence of the cabin's inhabitant - a group of Vermlings led by a Mindthief. She escaped - and you set to destroying an emitter device she'd been working on. You asked for <CharacterTooltip name="Captain Olmstead" text="Captain Olmstead" />'s help in tracking down the Mindthief, and he introduced you to his friend, a Valrath tracker and cartographer named Kefra. </Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>It took months, but Kefra returned with news. She'd found evidence of the mindthief - in an old burial mound called the Black Barrow, on the outskirts of Gloomhaven.</Typography></>
    }]
  }, {
    id: 122,
    name: 'The Eternal Crave',
    type: Other,
    predecessors: [{
      fromText: 'SR-13',
      recap: `In your travels, you found an elderly Quatryl tending some delicious-smelling peppers. She called these “firepeppers” - and told you a tale of a beast called the Hungry Maw, which lives beneath the Copperneck Mountains. Apparently, it eats entire villages, but can only be sated by a Firepepper Stew. She asked if you were up for a challenge.`
    }]
  }, {
    id: 123,
    name: 'The Titan',
    type: Other,
    predecessors: [{
      fromText: 'Shackles retirement and WR-32, §125.1 or §163.5',
      recap: `You met your old companion on the road, carving runes into the air. It said there was a “massive creature, so full of pain and suffering” coming close to their portal. The conduit worked some magics to bring that beast to them, so they could feast on it. You weren't really down, but they didn't give you much choice. When they finished creating a portal, an unbelievably titanic beast bore down upon you. 

      The being turned out not to be the source of the pain, however - it was the world it had come through, and now it was in yours. Time to stop it.`
    }]
  }, {
    id: 124,
    name: 'A Growing Problem',
    type: Other,
    predecessors: [{
      fromText: 'SR-52',
      recap: `You met versions of yourselves from the future, on the road. They passed you an amulet, and asked you to heal a fracture in time. The amulet drew you towards a giant field of ice; it could simply teleport you there, whenever you were ready. 

      (Aside - It would sure be weird if you had a completely different party from when you got this, wouldn't it? Good thing that never happens.)`
    }]
  }, {
    id: 125,
    name: 'The Longest Second',
    type: Other,
    predecessors: [{
      fromId: 124,
      fromText: '§110.1',
      recap: `The amulet pulled you into an alien landscape of crystalline trees. You found one, much larger than the others, and entered a cave at its base. Somehow, it flung you perhaps thousands of years back in time. This created a reaction in the world around you, and time started speeding up around you to bring you back - with the crystalline roots threatening you all around. 

      You found a device which accepted your amulet as a key of sorts. One side of the amulet started glowing green; perhaps one of the two fractures was healed? It drew you onwards towards the next step in your quest.`
    }]
  }, {
    id: 126,
    name: 'Joseph the Lion',
    type: Other,
    predecessors: [{
      fromText: 'WO-80 & §163.3',
      recap: `A merchant named Joseph greeted you and told you all of his assistants died, and all of his merchandise was just sitting in the icy wastes. He asked your help to retrieve it. A few weeks after you did, he opened up an “ice-cream” stand in Frosthaven; you decided to check it out.`
    }]
  }, {
    id: 127,
    name: 'Derelict Freighter',
    type: Other,
    predecessors: [{
      fromText: 'WO-17, §115.1 and §178.1',
      recap: <><Typography sx={{fontWeight: 0}}>A derelict ship came, apparently on its own, to Frosthaven's harbor. It was totally unoccupied, but the last page of the Captain's Log held only two words - “BURN IT.” The crew may have tried to do this before their disappearance, because the decks are covered in lamp oil. The manifest showed eight crates of unknown cargo, bound for White Oak - but you only found one, bolted to the deck and sealed with tar.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>Opening it, you found nothing but a cracked egg.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}><CharacterTooltip name="Pinter Droman" text="Pinter Droman" /> checked the box out, and said it looked like it was supposed to contain elemental energy - but didn't anymore.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>A few weeks later, the rest of the crates arrived at Frosthaven - this time, on a ship crewed by ice wraiths.</Typography></>
    },{
      fromText: 'SO-41 and §178.1',
      recap: `A derelict ship came, apparently on its own, to Frosthaven's harbor. It was totally unoccupied, but the last page of the Captain's Log held only two words - “BURN IT.” The crew may have tried to do this before their disappearance, because the decks are covered in lamp oil. The manifest showed eight crates of unknown cargo, bound for White Oak - but you only found one, bolted to the deck and sealed with tar.
      
      You took the captain's advice and burned the ship.

      Some time later, a Valrath confronted you about this; it was apparently his ship. He told you another ship was coming in with more cargo to make up for it, and enlisted you to unload it whenever it arrived, just stacking the crates by the docks.

      A few weeks later, the rest of the crates arrived at Frosthaven - this time, on a ship crewed by ice wraiths.`
    }]
  }, {
    id: 128,
    name: 'A Tall Drunken Tale',
    type: Other,
    predecessors: [{
      fromText: 'SR-23',
      recap: `You found two brothers, Nits and Narb, drunk on the side of the road one summer day. They were attacking both each other and the snow - possibly hallucinating. You tried to help - maybe successfully - and then you decided to do a Matthew G. Somers scenario.`
    }]
  }, {
    id: 129,
    name: 'How to Lay an Ambush',
    type: Other,
    predecessors: [{
      fromId: 128,
      fromText: '§100.3',
      recap: `Later, you saw the two in the Crater; they greeted you warmly and drunkenly, introducing you to a nobleman named Derrick Windemere. They started boasting to him of your (fictional) accomplishments, and then a whole lot of nonsense ensued.

      Derrick was impressed, though, and said he might have a job for you later.
      
      Sure enough, a few weeks later, he did. He showed you a pouch of sun agates - rare and beautiful gemstones. Apparently they are very popular with the Radiant Order, zealous worshippers of the Great Oak. Derrick found a source nearby, being mined by Algox, and suggested taking the mine by force. First, however, he asked you to capture a whole sled full of them, by laying an ambush.`
    }]
  }, {
    id: 130,
    name: 'And Then, a Stream',
    type: Other,
    predecessors: [{
      fromId: 129,
      fromText: '§150.4',
      recap: `With the assistance of some mercenaries, you captured the sled and salvaged what sun agates you could - packing them away in insulated containers. You set off for Frosthaven.`
    }]
  }, {
    id: 131,
    name: 'The Dancing Iceberg',
    type: Other,
    predecessors: [{
      fromText: 'Building 72 and SR-41',
      recap: `You found a young, dancing Lurker, staring at the ocean. They filled your mind with visions of an icy peninsula. You may or may not have made contact - but you did find the location the Lurker was projecting to you.`
    }]
  }, {
    id: 132,
    name: 'Temple of Feline Power',
    type: JobPosting,
    predecessors: [{
      fromText: '§194.3',
      recap: `An old man named Mulbrynn introduced himself in the Crater, and offered to tell you a legend for a drink. He told you about another group of adventurers, who found a “dark and powerful” idol that compelled them to go high up into the Imperial Mountains, promising them it would fulfill their dreams. They never returned. He handed you a map to the place they were heading.`
    }]
  }, {
    id: 133,
    name: 'Bolt',
    type: JobPosting,
    predecessors: [{
      fromId: 132,
      fromText: '§148.3',
      recap: `When you got near, you were compelled to jump down a crack in the mountain. In an underground passage, you found a pedestal topped by a feline idol, radiating dark power. You grabbed it; it demanded to be put back, but you couldn't. The place started collapsing, and you decided it was time to escape. 

      You got through the doors before your room collapsed - and saw the darkness had cleared from the idol. Before you could go any further, you were met by Mulbrynn, who appeared from the shadows. He demanded “his” idol from you.`
    }]
  }, {
    id: 134,
    name: 'Tower of Knowledge',
    type: Other,
    predecessors: [{
      fromText: 'Building 83, Level 2 §116.3',
      recap: <Typography sx={{fontWeight: 0}}><CharacterTooltip name="Eddica" text="Eddica" />, the Valrath Librarian, has been researching certain magic tomes, written by the Savvas spellcaster Belara. She thinks she's found the location of the Tome of Conflict. There's a tower referenced in older texts, said to be in the Radiant Forest - but it's not on any newer surveys. She thinks this might be where the Tome could be found.</Typography>
    }]
  }, {
    id: 135,
    name: 'Belara\'s Keep',
    type: Other,
    predecessors: [{
      fromText: 'Library quest conclusion, §36.2',
      recap: <><Typography sx={{fontWeight: 0}}>You located all four of the tomes, and noticed some weird markings. You showed them to <CharacterTooltip name="Eddica" text="Eddica" />, who went through all four at once, finding hidden links, meanings, and secrets. </Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>She filled you in on the Tomes' background. The power Belara unlocked turned it to evil. Such was its might that the Orchid High Council stepped in; they imprisoned Belara and scattered the tomes to make sure Belara could never recover all of them. The Council sealed the Savvas away … but Eddica is pretty sure she's figured out the location of its prison. It seems like a bad idea to go there... but...</Typography></>    }]
  }, {
    id: 136,
    name: 'Abandoned Hideout',
    type: Other,
    predecessors: [{
      fromText: 'Building 74, Level 2, §35.3',
      recap: <><Typography sx={{fontWeight: 0}}><CharacterTooltip name="Dinah Snapclaw" text="Dinah Snapclaw" />, the Vermling tavern-keeper at the Boiled Crab, has told you tales of a notorious pirate, Barty Half-Ear. She's had you hunting down ancient coins - like the one she wears. If you find all of them, they're supposed to lead to a huge treasure hoard.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>After bringing her one of the coins, she told you of the Pirate Queen's Haul, a huge treasure she and Barty were seeking together before he betrayed her. You need four coins to find it; she has one, he has another, you just found a third, and the final one is still missing. </Typography>
      <br/>            
      <Typography sx={{fontWeight: 0}}>She wants both revenge and the treasure, so gave you the location of Barty's hideout. She's pretty sure that's where he's stored his coin. Bring her two more coins, and you'll all be rich, together.</Typography></>
    }]
  }, {
    id: 137,
    name: 'Pirate Queen\'s Haul',
    type: Other,
    predecessors: [{
      fromId: 136,
      fromText: 'Ancient Coins puzzle solution',
      recap: <><Typography sx={{fontWeight: 0}}>Barty's hideout was at the end of an eel-infested subterranean river. His coin was, indeed, there - along with quite a bit of treasure. With <CharacterTooltip name="Dinah Snapclaw" text="Dinah" />'s coin, Barty's, and the other two you found during your explorations, you had all the elements you needed.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>Dinah Snapclaw brought you to a cave not all too far from Frosthaven itself. She told you more about the Pirate Queen - a Quatryl who'd apparently tried using automatons for her crew. The remaining living ones didn't like this much, so they mutinied. They thought they had her trapped, but she just sealed herself and her robots away.</Typography>
      <br/>
      <Typography sx={{fontWeight: 0}}>The pirates marked down the location of her grave, and sealed that information in a cave, behind a lock that could only be opened by four specific coins. You figured out the proper orientation, and Dinah retrieved an ancient scroll from the cavern beyond. The Pirate Queen's Haul was just a short boat trip away.</Typography></>
    }]
  }
];