/* =========================================================
   SMOOTEA MENU DATA
   Each drink: n = menu number, name, desc,
   c = [top, middle, bottom] liquid colours (also used to re-theme the page),
   pearl = pearl colour (null = none), cloud = cream-cloud colour (null = none),
   tag = small badge text
   ========================================================= */
const MENU = {
  milk: {
    label: "Milk Tea",
    emoji: "🧋",
    blurb: "The classics, shaken creamy.",
    items: [
      { n: 1, name: "Classic Milk Tea", desc: "Black tea, silky milk, chewy brown pearls. The OG.", c: ["#f3dcc0", "#d9ae7e", "#b5814f"], pearl: "#2b140c" },
      { n: 2, name: "Thai Tea", desc: "Bright orange spiced Thai tea with sweet cream.", c: ["#ffd9a8", "#ff9a3c", "#f2711c"], pearl: "#2b140c" },
      { n: 3, name: "Taro Milk Tea", desc: "Nutty, vanilla-sweet purple taro. A lilac dream.", c: ["#efe0ff", "#cfa8f0", "#b083e0"], pearl: "#2b140c" },
      { n: 4, name: "Mango Milk Tea", desc: "Tropical mango blended into creamy milk tea.", c: ["#fff1c2", "#ffd24a", "#ffb31a"], pearl: "#2b140c" },
      { n: 5, name: "Tiger Milk Tea", desc: "Brown sugar tiger stripes clawing down cold milk.", c: ["#fff6ea", "#e9c7a0", "#6b3410"], pearl: "#2b140c", tag: "Fan fave" },
      { n: 6, name: "Brown Sugar Milk Boba", desc: "Warm brown-sugar pearls, caramel drip walls, fresh milk.", c: ["#fff3e2", "#d8a26a", "#5a2a0c"], pearl: "#3a1a08" },
      { n: 7, name: "Ube Brown Sugar Boba", desc: "Purple yam + brown sugar. Filipino x Taiwanese magic.", c: ["#ead7ff", "#9b5de5", "#5a2a0c"], pearl: "#3a1a08" },
      { n: 8, name: "Oreo Brown Sugar Boba", desc: "Cookies-and-cream crumble over brown-sugar milk.", c: ["#f4efe9", "#bfb2a6", "#3a2a22"], pearl: "#1b0f0a" }
    ]
  },
  refreshers: {
    label: "Refreshers",
    emoji: "🍉",
    blurb: "Water-based, fruity and light.",
    items: [
      { n: 9, name: "Mango Refresher", desc: "Juicy mango, crisp and icy. Sunshine in a cup.", c: ["#fff4b8", "#ffd23f", "#ffad0a"], pearl: null },
      { n: 10, name: "Strawberry Refresher", desc: "Sweet berry splash, pink all the way down.", c: ["#ffd1dc", "#ff6b8b", "#e8264f"], pearl: null },
      { n: 11, name: "Passion Fruit Refresher", desc: "Tangy, tropical, golden. Wakes you right up.", c: ["#fff0a8", "#ffc93c", "#f59e0b"], pearl: null },
      { n: 12, name: "Watermelon Refresher", desc: "Summer-in-Reno watermelon cooler.", c: ["#ffd6d6", "#ff7a7a", "#ff4d6d"], pearl: null }
    ]
  },
  specialty: {
    label: "Specialty",
    emoji: "✨",
    blurb: "The wild ones. Layered, blended, topped.",
    items: [
      { n: 13, name: "Ube Halo-Halo", desc: "Shaved ice, ube, leche flan, sweet beans and jellies. A Filipino classic.", c: ["#f1e3ff", "#a66ee8", "#6a2fc2"], pearl: "#ffcf3f", cloud: "#b98cf0", tag: "Signature" },
      { n: 14, name: "Pandan Ube Halo-Halo", desc: "Halo-halo with a fragrant pandan twist.", c: ["#e4ffd9", "#7ed957", "#8b4fd8"], pearl: "#ffcf3f", cloud: "#b98cf0" },
      { n: 15, name: "Melon Chiller", desc: "Honeydew melon, icy and refreshing.", c: ["#ecffe0", "#a8e890", "#6fcf5b"], pearl: null },
      { n: 16, name: "Melon Cream Chiller", desc: "Melon chiller crowned with sweet cream.", c: ["#fffaf0", "#c9f2b4", "#7fd96a"], pearl: null, cloud: "#fff8ea" },
      { n: 17, name: "Pineapple Chiller", desc: "Tropical pineapple, bright and sunny.", c: ["#fffbd1", "#ffe45c", "#ffc800"], pearl: null },
      { n: 18, name: "Pandan Coconut Chiller", desc: "Pandan + coconut cream, with coconut jelly.", c: ["#f6fff0", "#b8eaa0", "#5fbf4a"], pearl: "#f4fbe9" },
      { n: 19, name: "Pandan Lychee Chiller", desc: "Floral lychee meets green pandan.", c: ["#fff5fa", "#cdeeb8", "#7ecb63"], pearl: "#fdf2f6" },
      { n: 20, name: "Strawberry Dream Cream", desc: "Strawberry purée walls, milky cream, pink dreams.", c: ["#fff2f6", "#ffb3c7", "#ff3d74"], pearl: "#ff3d74", cloud: "#ffd4e0" },
      { n: 21, name: "Ube Oreo Blend", desc: "Blended ube, cookies and cream.", c: ["#efe2ff", "#a77be6", "#3b2a4a"], pearl: "#1b0f0a", cloud: "#f4efe9" },
      { n: 22, name: "Dirty Taro", desc: "Taro milk with that brown-sugar 'dirty' drip.", c: ["#efe0ff", "#c39bf0", "#5a2a0c"], pearl: "#3a1a08" },
      { n: 23, name: "Vietnamese Coffee", desc: "Strong coffee + sweetened condensed milk. Bold.", c: ["#f0d9bd", "#b07a46", "#5a3214"], pearl: null },
      { n: 24, name: "Java Choco Chips", desc: "Coffee-chocolate blend with chocolate chips.", c: ["#efe0d0", "#8a5a3c", "#3e2214"], pearl: "#24130a", cloud: "#fff8ef" },
      { n: 25, name: "Milo Oreo Crunch", desc: "Malty Milo chocolate + Oreo crunch.", c: ["#eadbc9", "#8f6a4c", "#4a3020"], pearl: "#1b0f0a", cloud: "#f4efe9" },
      { n: 26, name: "Mango Sticky Rice Cream", desc: "The Thai dessert, but make it a drink.", c: ["#fff8e6", "#ffd85a", "#ffb31a"], pearl: "#fffbee", cloud: "#fff8e6" }
    ]
  },
  matcha: {
    label: "Matcha Series",
    emoji: "🍵",
    blurb: "Premium Uji matcha, layered every way.",
    items: [
      { n: 27, name: "Matcha Milk Tea", desc: "Uji matcha floating on fresh cold milk.", c: ["#cfeaa4", "#7bbf3a", "#f6fbef"], pearl: null },
      { n: 28, name: "Strawberry Cream Matcha", desc: "Strawberry purée, milk, and a matcha float.", c: ["#7bbf3a", "#f8fff0", "#ff3d74"], pearl: "#ff3d74" },
      { n: 29, name: "Ube Cream Matcha", desc: "Matcha over milk, crowned with ube cream cloud.", c: ["#7bbf3a", "#eaf7da", "#f6fbef"], pearl: null, cloud: "#b98cf0", tag: "Must try" },
      { n: 30, name: "Premium Uji Matcha", desc: "Straight-up ceremonial Uji from Kyoto. Clean & grassy.", c: ["#a7d86b", "#6fae2e", "#3f7a16"], pearl: null },
      { n: "★", name: "Pistachio Matcha", desc: "Matcha on pistachio milk with crushed pistachio.", c: ["#6fae2e", "#e9f3cf", "#c9dd9a"], pearl: null, cloud: "#e8f0c8", tag: "New" },
      { n: "★", name: "Biscoff Cream Matcha", desc: "Matcha, Biscoff cookie butter cream & crumbs.", c: ["#6fae2e", "#f2e3cc", "#b5793d"], pearl: "#b5793d", cloud: "#f2e3cc", tag: "New" },
      { n: "★", name: "Mango Matcha", desc: "Matcha over milk and a sunny mango base.", c: ["#7bbf3a", "#fff6dd", "#ffbf1f"], pearl: "#ffbf1f", tag: "New" },
      { n: "★", name: "Brown Sugar Matcha", desc: "Matcha float on brown-sugar pearls & milk.", c: ["#7bbf3a", "#f6efe2", "#5a2a0c"], pearl: "#3a1a08", tag: "New" },
      { n: "★", name: "Jasmine Matcha Bloom", desc: "Floral jasmine and matcha under a vanilla cloud.", c: ["#8cc84b", "#eef7dd", "#fbfdf4"], pearl: null, cloud: "#fff4cc", tag: "New" }
    ]
  },
  coffee: {
    label: "Iced Coffee",
    emoji: "☕",
    blurb: "Regular iced coffee (Nescafé Gold). Pick 1 flavor.",
    items: [
      { n: "IC", name: "Caramel Iced Coffee", desc: "Nescafé Gold iced coffee with buttery caramel.", c: ["#f6e2c4", "#c98b4a", "#7a4517"], pearl: null },
      { n: "IC", name: "Chocolate Iced Coffee", desc: "Nescafé Gold iced coffee with rich chocolate.", c: ["#ead6c4", "#8a5532", "#3e2214"], pearl: null },
      { n: "IC", name: "Hazelnut Iced Coffee", desc: "Nescafé Gold iced coffee with toasty hazelnut.", c: ["#f1dcc3", "#b07a46", "#6b3d1c"], pearl: null },
      { n: "IC", name: "Vanilla Iced Coffee", desc: "Nescafé Gold iced coffee with sweet vanilla.", c: ["#fbefd9", "#d5a670", "#8b5a2b"], pearl: null }
    ]
  },
  seasonal: {
    label: "New Drops",
    emoji: "🔥",
    blurb: "Fresh off the trailer and limited specials.",
    items: [
      { n: "NEW", name: "Mango Coco Paradise", desc: "Fresh mango cubes, blended mango, coconut cream walls, crystal boba.", c: ["#ffe27a", "#fff8ea", "#ffc21a"], pearl: "#f7d58a", cloud: "#ffcc33", tag: "Hot" },
      { n: "NEW", name: "Thai Tea Ube Cloud", desc: "Classic Thai tea topped with rich, creamy ube cloud.", c: ["#ffa24c", "#ff8a1f", "#f2711c"], pearl: null, cloud: "#b98cf0", tag: "Hot" },
      { n: "NEW", name: "Matcha Banana Pudding", desc: "Creamy matcha, homemade banana pudding, vanilla wafer crumbles.", c: ["#5f9e2a", "#eaf3d8", "#fbf8ee"], pearl: "#d9a05b", cloud: "#fff0b8" },
      { n: "NEW", name: "Vietnamese Coffee Ube Cloud", desc: "Bold Vietnamese coffee under a purple ube cloud.", c: ["#d9a76c", "#c08850", "#a46a35"], pearl: null, cloud: "#b98cf0" },
      { n: "NEW", name: "Uji Matcha Ube Cloud", desc: "Uji matcha, fresh milk and an ube cloud crown.", c: ["#7bbf3a", "#d6ecb6", "#f8fbef"], pearl: null, cloud: "#b98cf0" },
      { n: "LTD", name: "Filipino Taho", desc: "Silken tofu, sweet arnibal syrup and tapioca pearls. A classic Filipino favorite.", c: ["#f7e9cf", "#c98a3e", "#8a4a12"], pearl: "#2b140c", tag: "Limited" }
    ]
  }
};

/* Add-ons: clicking these drops them into whatever cup is on screen */
const TOPPINGS = [
  { name: "Black Tapioca Pearls", kind: "pearl", color: "#2b140c" },
  { name: "Coconut Jelly", kind: "pearl", color: "#f4fbe9" },
  { name: "Lychee Jelly", kind: "pearl", color: "#fde3ec" },
  { name: "Mango Popping Boba", kind: "pearl", color: "#ffbf1f" },
  { name: "Strawberry Popping Boba", kind: "pearl", color: "#ff3d74" },
  { name: "Egg Pudding", kind: "pearl", color: "#ffd86b" }
];
const CLOUDS = [
  { name: "Ube Cream Cloud", kind: "cloud", color: "#b98cf0" },
  { name: "Strawberry Cream Cloud", kind: "cloud", color: "#ffb3c7" },
  { name: "Vanilla Cream Cloud", kind: "cloud", color: "#fff4d6" },
  { name: "Cheese Cream Cloud", kind: "cloud", color: "#fff1b8" },
  { name: "Pistachio Cream Cloud", kind: "cloud", color: "#cfe3a1" }
];
