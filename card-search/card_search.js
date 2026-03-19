const cards = [
  {
    id: 1,
    name: "Cyber Dragon",
    image: "../images/cyber_dragon.webp",
    type: "MONSTER",
    subtype: ["EFFECT"],
    monsterType: "MACHINE",
    level: 5,
    attribute: "LIGHT",
    atk: 2100,
    def: 1600,
    description: "If only your opponent controls a monster, you can Special Summon this card (from your hand)."
  },
  {
    id: 2,
    name: "Blue-Eyes White Dragon",
    image: "../images/blue-eyes_white_dragon.webp",
    type: "MONSTER",
    subtype: ["NORMAL"],
    monsterType: "DRAGON",
    level: 8,
    attribute: "LIGHT",
    atk: 3000,
    def: 2500,
    description: "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale."
  },
  {
    id: 3,
    name: "Mirror Force",
    image: "../images/mirror_force.webp",
    type: "TRAP",
    trapType: "NORMAL",
    description: "When an opponent's monster declares an attack: Destroy all your opponent's Attack Position monsters."
  },
  {
    id: 4,
    name: "Dark Magician",
    image: "../images/dark_magician.webp",
    type: "MONSTER",
    subtype: ["NORMAL"],
    monsterType: "SPELLCASTER",
    level: 7,
    attribute: "DARK",
    atk: 2500,
    def: 2100,
    description: "The ultimate wizard in terms of attack and defense."
  },
  {
    id: 5,
    name: "Decode Talker",
    image: "../images/decode_talker.webp",
    type: "MONSTER",
    subtype: ["LINK"],
    monsterType: "CYBERSE",
    linkRating: 3,
    attribute: "DARK",
    atk: 2300,
    description: "[2+ Effect Monsters] Gains 500 ATK for each monster it points to. When your opponent activates a card or effect that targets a card you control, you can tribute 1 monster this card points to; negate the activation."
  },
  {
    id: 6,
    name: "Cycroid",
    image: "../images/cycroid.webp",
    type: "MONSTER",
    subtype: ["NORMAL"],
    monsterType: "MACHINE",
    level: 3,
    attribute: "EARTH",
    atk: 800,
    def: 1000,
    description: "The most lovable and friendly of all the Vehicroids. It can arm itself with training wheels."
  },
  {
    id: 7,
    name: "Aeropixthree",
    image: "../images/aeropixthree.webp",
    type: "MONSTER",
    subtype: ["EFFECT", "TUNER"],
    monsterType: "FAIRY",
    level: 1,
    attribute: "WIND",
    atk: 200,
    def: 200,
    description: "Once per turn (Quick Effect): You can target 1 face-up monster your opponent controls in this card's column; move this card you control to another of your Main Monster Zones, and if you do, move that opponent's monster to their Main Monster Zone in this card's column, then place 1 Burnup Counter on it. (Monsters with Burnup Counters lose 200 ATK/DEF for each Burnup Counter on it.)"
  },
  {
    id: 8,
    name: "Ambulance Rescueroid",
    image: "../images/ambulance_rescueroid.webp",
    type: "MONSTER",
    subtype: ["FUSION"],
    monsterType: "MACHINE",
    level: 6,
    attribute: "FIRE",
    atk: 2300,
    def: 1800,
    description: "[\"Rescueroid\" + \"Ambulanceroid\"] Must be Fusion Summoned. Once per turn, when a monster you control is destroyed by battle and sent to the GY: You can Special Summon that monster in Defense Position."
  },
  {
    id: 9,
    name: "Ambulanceroid",
    image: "../images/ambulanceroid.webp",
    type: "MONSTER",
    subtype: ["EFFECT"],
    monsterType: "MACHINE",
    level: 3,
    attribute: "EARTH",
    atk: 300,
    def: 1200,
    description: "When a \"roid\" monster(s) is added from your GY to your hand (except during the Damage Step): You can Special Summon it."
  },
  {
    id: 10,
    name: "Banisher of the Radiance",
    image: "../images/banisher_of_the_radiance.webp",
    type: "MONSTER",
    subtype: ["EFFECT"],
    monsterType: "FAIRY",
    level: 3,
    attribute: "LIGHT",
    atk: 1600,
    def: 0,
    description: "Any card sent to the GY is banished instead."
  },
  {
    id: 11,
    name: "Weapon Change",
    image: "../images/weapon_change.webp",
    type: "SPELL",
    spellType: "CONTINUOUS",
    description: "Once during each of your Standby Phases: You can pay 700 LP, then target 1 Warrior or Machine monster you control; switch the current ATK and DEF of that target until the end of your opponent's next turn."
  },
  {
    id: 12,
    name: "Vennu, Bright Bird of Divinity",
    image: "../images/vennu_bright_bird_of_divinity.webp",
    type: "MONSTER",
    subtype: ["RITUAL", "EFFECT"],
    monsterType: "FAIRY",
    level: 8,
    attribute: "LIGHT",
    atk: 2800,
    def: 2000,
    description: "You can Ritual Summon this card with \"Primal Cry\". Once per turn: You can reveal 1 monster in your hand, then target 1 face-up monster on the field; that target's Level becomes equal to the Level the revealed monster had, until the end of this turn. Once per turn, if another monster is Tributed from your hand or field (except during the Damage Step): You can target 1 monster in your Graveyard; add it to your hand."
  },
  {
    id: 16,
    name: "Supercharge",
    image: "../images/supercharge.webp",
    type: "TRAP",
    trapType: "NORMAL",
    description: "If an opponent's monster declares an attack while all monsters you control are Machine \"roid\" monsters (min. 1): Draw 2 cards."
  },
  {
    id: 26,
    name: "Bayonater, the Baneful Barrel",
    image: "../images/bayonater_the_baneful_barrel.webp",
    type: "MONSTER",
    subtype: ["EFFECT"],
    monsterType: "ZOMBIE",
    level: 1,
    attribute: "DARK",
    atk: 500,
    def: 0,
    description: "Once per turn: You can target 1 face-up monster your opponent controls; it loses 1000 ATK for each monster your opponent controls."
  },
  {
    id: 43,
    name: "Sprite's Blessing",
    image: "../images/sprites_blessing.webp",
    type: "SPELL",
    spellType: "RITUAL",
    description: "This card can be used to Ritual Summon any LIGHT Ritual Monster. You must also Tribute monsters from your hand or field whose total Levels exactly equal the Level of the Ritual Monster you Ritual Summon."
  }
];

// EVERYTHING BELOW IS UNCHANGED
document.addEventListener("DOMContentLoaded", () => {
  // your original JS unchanged
});
