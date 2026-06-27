export type MonthRange = {
  month_start: number;
  month_end: number;
};

export type Plant = {
  name: string;
  description: string;
  tip: string;
  indoor?: MonthRange;
  seed: MonthRange;
  harvest: MonthRange;
};

export const PLANTS: readonly Plant[] = [
  {
    name: 'Tomato',
    description:
      'Heat-loving fruiting vegetable that in Central Europe is almost always started indoors. Sow inside from February to March, transplant outdoors or into a greenhouse only after the last frost in May, harvest from July to October. Needs a warm, sunny spot and consistent watering.',
    tip: 'Do not water over the leaves and regularly remove side shoots, otherwise blight and brown rot can take hold.',
    indoor: { month_start: 2, month_end: 3 },
    seed: { month_start: 5, month_end: 5 },
    harvest: { month_start: 7, month_end: 10 },
  },
  {
    name: 'Cucumber',
    description:
      'Heat-loving climbing plant for beds, greenhouses or containers. Start indoors in April, transplant or direct sow from mid-May, harvest from July to September. Likes warm, sheltered spots and regular watering.',
    tip: 'Cucumbers are sensitive to cold and draughts — even single-digit temperatures can stop their growth.',
    indoor: { month_start: 4, month_end: 4 },
    seed: { month_start: 5, month_end: 5 },
    harvest: { month_start: 7, month_end: 9 },
  },
  {
    name: 'Zucchini',
    description:
      'Fast-growing member of the squash family with high yields from a single plant. Start indoors in April, transplant from mid-May, harvest from July to October. Needs plenty of space, nutrients and water.',
    tip: 'Harvest fruits young at 15 to 20 cm, otherwise they turn hard and the plant stops producing new fruits.',
    indoor: { month_start: 4, month_end: 4 },
    seed: { month_start: 5, month_end: 5 },
    harvest: { month_start: 7, month_end: 10 },
  },
  {
    name: 'Bell Pepper',
    description:
      'Heat-demanding fruiting vegetable with a long growing season. Sow indoors from February to March, transplant after the last frost in May, harvest from August to October. Loves a very warm, sunny and sheltered position.',
    tip: 'Sow early enough, as peppers germinate and grow slowly — otherwise the fruits will not ripen before autumn.',
    indoor: { month_start: 2, month_end: 3 },
    seed: { month_start: 5, month_end: 5 },
    harvest: { month_start: 8, month_end: 10 },
  },
  {
    name: 'Carrot',
    description:
      'Classic root vegetable that is direct-sown into the bed. Direct sow from March to June, harvest depending on sowing time from June to October, storage carrots into autumn. Prefers loose, stone-free soil.',
    tip: 'Mix rows with onions to deter carrot fly, and thin early enough for straight roots.',
    seed: { month_start: 3, month_end: 6 },
    harvest: { month_start: 6, month_end: 10 },
  },
  {
    name: 'Radish',
    description:
      'The fastest vegetable in the garden, often ready to harvest in just four to six weeks. Direct sow from March to September in successions, harvest from April to October. Ideal as a gap filler between slower crops.',
    tip: 'Do not sow too densely and keep evenly moist, otherwise the bulbs become sharp, woody or bolt.',
    seed: { month_start: 3, month_end: 9 },
    harvest: { month_start: 4, month_end: 10 },
  },
  {
    name: 'Iceberg Lettuce',
    description:
      'Crisp head lettuce with tightly closed heads that tolerates heat better than other lettuces. Start indoors from March to April, transplant or direct sow until July, harvest from June to October. Best grown in successions for a continuous supply.',
    tip: 'Do not plant seedlings too deep — the root collar must stay exposed, otherwise the heads will rot.',
    indoor: { month_start: 3, month_end: 4 },
    seed: { month_start: 4, month_end: 7 },
    harvest: { month_start: 6, month_end: 10 },
  },
  {
    name: "Lamb's Lettuce",
    description:
      'Hardy salad for the cold season with a nutty flavour. Direct sow from August to September, harvest from September through spring (April), as the plant overwinters without problems. Very robust and low-maintenance.',
    tip: 'For late sowing, sow shallowly and firm the soil well — in dry conditions, lamb\'s lettuce germinates unevenly.',
    seed: { month_start: 8, month_end: 9 },
    harvest: { month_start: 9, month_end: 4 },
  },
  {
    name: 'Kohlrabi',
    description:
      'Mildly spicy member of the cabbage family with a tender bulb that grows quickly. Start indoors from February to April, transplant or direct sow until July, harvest from May to October. Well suited to multiple successions throughout the year.',
    tip: 'Water consistently — in dry spells followed by renewed growth, the bulbs easily crack.',
    indoor: { month_start: 2, month_end: 4 },
    seed: { month_start: 3, month_end: 7 },
    harvest: { month_start: 5, month_end: 10 },
  },
  {
    name: 'Bush Bean',
    description:
      'Compact bean without support stakes with a rich harvest. Direct sow from mid-May to July, harvest from July to October. Frost-sensitive, so only plant after the last frost.',
    tip: 'Do not sow into cold, wet soil as the seeds will rot — wait for at least 10°C soil temperature.',
    seed: { month_start: 5, month_end: 7 },
    harvest: { month_start: 7, month_end: 10 },
  },
  {
    name: 'Pea',
    description:
      'Cold-tolerant legume that can go into the bed early. Direct sow from March to May, harvest from June to August. Marrowfat peas are sweet, shelling peas keep well.',
    tip: 'Provide a low support and protect from birds, which like to eat fresh seedlings.',
    seed: { month_start: 3, month_end: 5 },
    harvest: { month_start: 6, month_end: 8 },
  },
  {
    name: 'Onion',
    description:
      'Kitchen onion, usually planted as sets for a reliable harvest. Plant sets or sow from March to April, harvest from July to August when the foliage collapses. Prefers loose, relatively dry soil.',
    tip: 'Do not plant sets too deep — the tip should stick out, otherwise only small bulbs will form.',
    seed: { month_start: 3, month_end: 4 },
    harvest: { month_start: 7, month_end: 8 },
  },
  {
    name: 'Garlic',
    description:
      'Flavouring bulb that produces the largest heads when planted in autumn. Plant from October to November, harvest the following summer from July to August. Spring planting in February or March is possible but yields smaller bulbs.',
    tip: 'Only plant individual cloves and never supermarket bulbs — store-bought garlic often carries disease.',
    seed: { month_start: 10, month_end: 11 },
    harvest: { month_start: 7, month_end: 8 },
  },
  {
    name: 'Spinach',
    description:
      'Fast-growing leafy vegetable for the cooler seasons. Direct sow from March to April and again from August to September, harvest in spring from April to June and in autumn. The autumn sowing often overwinters and re-sprouts in spring.',
    tip: 'Do not sow in midsummer — in heat and long days, spinach immediately bolts.',
    seed: { month_start: 3, month_end: 4 },
    harvest: { month_start: 4, month_end: 6 },
  },
  {
    name: 'Beetroot',
    description:
      'Robust root vegetable with an earthy-sweet flavour. Can be started indoors from February, direct sow from April to June, harvest from July to October. Stores well and is also suitable as a winter supply.',
    tip: 'A single seed contains multiple seedlings, so thin early — otherwise the bulbs crowd each other out.',
    indoor: { month_start: 2, month_end: 3 },
    seed: { month_start: 4, month_end: 6 },
    harvest: { month_start: 7, month_end: 10 },
  },
  {
    name: 'Potato',
    description:
      'Versatile tuber planted as pre-sprouted seed potatoes. Plant from April to May, harvest from June for early varieties to October for storage varieties. Needs loose soil and is earthed up as it grows.',
    tip: 'Do not eat green areas or shoots — they contain toxic solanine — and store tubers protected from light.',
    seed: { month_start: 4, month_end: 5 },
    harvest: { month_start: 6, month_end: 10 },
  },
  {
    name: 'Broccoli',
    description:
      'Member of the cabbage family that forms edible flower buds. Start indoors from March to May, transplant from April to June, harvest from June to October. After the main head, smaller side shoots often form for further harvesting.',
    tip: 'Harvest on time while the florets are tightly closed — once they start flowering yellow the flavour turns harsh.',
    indoor: { month_start: 3, month_end: 5 },
    seed: { month_start: 4, month_end: 6 },
    harvest: { month_start: 6, month_end: 10 },
  },
  {
    name: 'Cauliflower',
    description:
      'Delicate cabbage with tender white flower heads that requires consistent care. Start indoors from March to May, transplant from April to June, harvest from June to October. Sensitive to drought and nutrient deficiency.',
    tip: 'Fold the outer leaves over the head to protect it from sun, otherwise it turns yellowish and crumbly.',
    indoor: { month_start: 3, month_end: 5 },
    seed: { month_start: 4, month_end: 6 },
    harvest: { month_start: 6, month_end: 10 },
  },
  {
    name: 'Leek',
    description:
      'Long-stemmed member of the onion family in summer, autumn and winter varieties. Start indoors from February to April, transplant from April to June, harvest depending on variety from August through March as winter varieties remain in the bed. Very sturdy and frost-hardy.',
    tip: 'Earth up or plant deeply to create the long white shaft that is especially prized.',
    indoor: { month_start: 2, month_end: 4 },
    seed: { month_start: 4, month_end: 6 },
    harvest: { month_start: 8, month_end: 3 },
  },
  {
    name: 'Hokkaido Pumpkin',
    description:
      'Popular culinary squash whose skin can be eaten. Start indoors in April, transplant or direct sow from mid-May, harvest from September to October. Needs plenty of space, sun and nutrient-rich soil.',
    tip: 'Harvest before the first frost with the stem attached, otherwise the fruits will not keep and will rot quickly.',
    indoor: { month_start: 4, month_end: 4 },
    seed: { month_start: 5, month_end: 5 },
    harvest: { month_start: 9, month_end: 10 },
  },
  {
    name: 'Strawberry',
    description:
      'Perennial berry plant for beds, pots or raised beds. Plant in spring from March to May, or alternatively in late summer for stronger yields the following year, harvest from May to July. Ever-bearing varieties produce until October.',
    tip: 'Renew plants every three to four years and lay straw underneath, otherwise yield and fruit quality decline.',
    seed: { month_start: 3, month_end: 5 },
    harvest: { month_start: 5, month_end: 7 },
  },
  {
    name: 'Raspberry',
    description:
      'Perennial berry shrub in summer and autumn varieties. Plant preferably in autumn from October to November, harvest depending on variety from June to October. Container plants can be planted almost year-round.',
    tip: 'Follow the correct pruning method for each type — summer raspberries fruit on two-year canes, autumn raspberries on one-year canes.',
    seed: { month_start: 10, month_end: 11 },
    harvest: { month_start: 6, month_end: 10 },
  },
  {
    name: 'Blueberry',
    description:
      'Perennial shrub with aromatic blue berries that needs acidic soil. Plant in spring from March to April, harvest from July to September. Thrives only on lime-free, humus-rich substrate such as rhododendron compost.',
    tip: 'Water with rainwater and maintain acidic soil — tap water and lime cause deficiencies and yellow leaves.',
    seed: { month_start: 3, month_end: 4 },
    harvest: { month_start: 7, month_end: 9 },
  },
  {
    name: 'Currant',
    description:
      'Low-maintenance berry shrub with red, white or black clusters. Plant in autumn from October to November, harvest from June to July. Bears on multi-year wood and should be thinned regularly.',
    tip: 'Cut out old canes from year four onwards, otherwise the shrub ages and yields decline.',
    seed: { month_start: 10, month_end: 11 },
    harvest: { month_start: 6, month_end: 7 },
  },
  {
    name: 'Blackberry',
    description:
      'Robust, vigorous berry shrub, often trained on a trellis. Plant in spring from April to May, harvest from August to October. Thornless varieties are considerably easier to harvest.',
    tip: 'Tie canes to the trellis and remove spent canes after harvest, otherwise the shrub spreads vigorously.',
    seed: { month_start: 4, month_end: 5 },
    harvest: { month_start: 8, month_end: 10 },
  },
  {
    name: 'Climbing Bean',
    description:
      'Twining bean that grows upward on poles or frames and crops for a long time. Direct sow from mid-May to June, harvest from July to October. Produces a high yield in a small space but needs a sturdy support.',
    tip: 'Only sow after the last frost and never eat raw — raw beans contain toxic phasin.',
    seed: { month_start: 5, month_end: 6 },
    harvest: { month_start: 7, month_end: 10 },
  },
  {
    name: 'Aubergine',
    description:
      'Heat-demanding fruiting vegetable that in Central Europe ripens reliably almost only in a greenhouse. Start indoors from February to March, transplant after the last frost in May, harvest from August to October. Needs very high heat and sun.',
    tip: 'Allow only a few fruits per plant to set — otherwise none will ripen fully in our climate.',
    indoor: { month_start: 2, month_end: 3 },
    seed: { month_start: 5, month_end: 5 },
    harvest: { month_start: 8, month_end: 10 },
  },
  {
    name: 'Chilli',
    description:
      'Pungent fruiting plant with a very long growing season. Sow indoors from January to March, transplant in May, harvest from August through November. In a pot, the plant can be overwintered frost-free.',
    tip: 'Sow as early as possible — hot varieties need many months to ripen and like consistently warm conditions throughout.',
    indoor: { month_start: 1, month_end: 3 },
    seed: { month_start: 5, month_end: 5 },
    harvest: { month_start: 8, month_end: 11 },
  },
  {
    name: 'Swiss Chard',
    description:
      'Robust leaf and stem vegetable, related to beetroot. Can be started indoors from March, direct sow from April to July, harvest from June through November. Regrows after cutting.',
    tip: 'Always harvest only the outer leaves and leave the heart — a single plant then provides a continuous supply for months.',
    indoor: { month_start: 3, month_end: 4 },
    seed: { month_start: 4, month_end: 7 },
    harvest: { month_start: 6, month_end: 11 },
  },
  {
    name: 'Parsnip',
    description:
      'Sweet root vegetable that becomes even more aromatic after frost. Direct sow from March to May, harvest from October through February directly from the ground. The roots store very well.',
    tip: 'Use only fresh seed — parsnip seeds germinate slowly and lose viability quickly.',
    seed: { month_start: 3, month_end: 5 },
    harvest: { month_start: 10, month_end: 2 },
  },
  {
    name: 'Celeriac',
    description:
      'Aromatic celeriac with a long growing season. Start indoors from February to April, transplant in May, harvest from October to November before the first hard frost. Needs consistently moist, nutrient-rich soil.',
    tip: 'Do not plant too deeply — the root ball should sit on top of the soil, otherwise no round bulb will form.',
    indoor: { month_start: 2, month_end: 4 },
    seed: { month_start: 5, month_end: 5 },
    harvest: { month_start: 10, month_end: 11 },
  },
  {
    name: 'Red Cabbage',
    description:
      'Hearty head cabbage with red leaves, good for storing and preserving. Start indoors from February to April, transplant from April to May, harvest from August to November. Late varieties can be stored through winter.',
    tip: 'Allow wide spacing and rotate crops — repeated cabbage crops encourage clubroot in the soil.',
    indoor: { month_start: 2, month_end: 4 },
    seed: { month_start: 4, month_end: 5 },
    harvest: { month_start: 8, month_end: 11 },
  },
  {
    name: 'White Cabbage',
    description:
      'Versatile head cabbage, the basis for sauerkraut and stews. Start indoors from February to April, transplant from April to May, harvest depending on variety from July to November. Early varieties come sooner, storage varieties ripen late.',
    tip: 'Cover with a net or fleece to keep cabbage white butterfly and flea beetle away from the plants.',
    indoor: { month_start: 2, month_end: 4 },
    seed: { month_start: 4, month_end: 5 },
    harvest: { month_start: 7, month_end: 11 },
  },
  {
    name: 'Savoy Cabbage',
    description:
      'Mild cabbage with crinkled leaves in summer, autumn and winter varieties. Start indoors from February to May, transplant from April to June, harvest from August through February. Winter varieties tolerate frost and become more tender as a result.',
    tip: 'Leave winter varieties in the bed — a light frost makes the leaves milder and sweeter.',
    indoor: { month_start: 2, month_end: 5 },
    seed: { month_start: 4, month_end: 6 },
    harvest: { month_start: 8, month_end: 2 },
  },
  {
    name: 'Brussels Sprouts',
    description:
      'Tall cabbage with small sprouts along the stem, a classic winter vegetable. Start indoors from March to April, transplant from May to June, harvest from October through February. Frost significantly improves the flavour.',
    tip: 'Do not harvest before the first frost and remove the growing tip only late — otherwise the sprouts remain loose.',
    indoor: { month_start: 3, month_end: 4 },
    seed: { month_start: 5, month_end: 6 },
    harvest: { month_start: 10, month_end: 2 },
  },
  {
    name: 'Kale',
    description:
      'Very frost-hardy leaf cabbage harvested fresh through the winter. Start indoors from April to May, transplant from May to June, harvest from November through February. Only frost makes the leaves mild and sweet.',
    tip: 'Do not harvest before the first frost — without cold, the leaves taste bitter and tough.',
    indoor: { month_start: 4, month_end: 5 },
    seed: { month_start: 5, month_end: 6 },
    harvest: { month_start: 11, month_end: 2 },
  },
  {
    name: 'Rocket',
    description:
      'Peppery salad leaf with a nutty, spicy aroma that grows very quickly. Direct sow from March to September in successions, harvest from April to October. Regrows multiple times after cutting.',
    tip: 'Resow regularly and harvest before flowering — older and flowering leaves become unpleasantly sharp.',
    seed: { month_start: 3, month_end: 9 },
    harvest: { month_start: 4, month_end: 10 },
  },
  {
    name: 'Butterhead Lettuce',
    description:
      'Classic soft head lettuce with tender leaves. Start indoors from February to April, direct sow or transplant until August, harvest from May to October. Best grown in small successions for a continuous harvest.',
    tip: 'In high heat, butterhead lettuce bolts quickly — choose bolt-resistant varieties in midsummer and provide shade.',
    indoor: { month_start: 2, month_end: 4 },
    seed: { month_start: 3, month_end: 8 },
    harvest: { month_start: 5, month_end: 10 },
  },
  {
    name: 'Sweet Corn',
    description:
      'Sweet corn for fresh eating that needs warmth and sun. Start indoors in April or direct sow from mid-May, harvest from August to October. Plant in a block rather than a long single row for good pollination.',
    tip: 'Always plant in a block, not in a single row, otherwise the cobs will be only sparsely filled with kernels.',
    indoor: { month_start: 4, month_end: 4 },
    seed: { month_start: 5, month_end: 5 },
    harvest: { month_start: 8, month_end: 10 },
  },
  {
    name: 'Fennel',
    description:
      'Aromatic bulb with a fine anise flavour. Direct sow preferably from June to July, harvest from September to November. Sowing too early in cool spring weather causes the plant to bolt easily.',
    tip: 'Only sow from summer onwards and keep consistently moist — in cold or dry conditions, fennel bolts instead of forming a bulb.',
    seed: { month_start: 6, month_end: 7 },
    harvest: { month_start: 9, month_end: 11 },
  },
  {
    name: 'Winter Radish',
    description:
      'Sharp root vegetable in summer and winter varieties. Direct sow from March to August, harvest from May to November — winter varieties are sown late and stored. Related to the radish but considerably larger.',
    tip: 'Water consistently and do not sow too densely, otherwise the radish becomes woody, cracked or excessively sharp.',
    seed: { month_start: 3, month_end: 8 },
    harvest: { month_start: 5, month_end: 11 },
  },
  {
    name: 'Asparagus',
    description:
      'Perennial delicacy vegetable planted as crowns. Plant crowns from March to April, harvest from April until midsummer\'s day on 24 June. An asparagus bed does not produce a full crop until after two to three years.',
    tip: 'Stop harvesting by the end of June at the latest — after that the plant needs its shoots to build up energy for the following year.',
    seed: { month_start: 3, month_end: 4 },
    harvest: { month_start: 4, month_end: 6 },
  },
  {
    name: 'Rhubarb',
    description:
      'Perennial herbaceous plant whose tart stalks are used like fruit. Plant in autumn from October to November or in spring, harvest from April until midsummer\'s day on 24 June. Harvesting can begin from the second year; the leaves are toxic.',
    tip: 'Twist stalks out rather than cutting and let the plant rest from late June — after that the oxalic acid content rises sharply.',
    seed: { month_start: 10, month_end: 11 },
    harvest: { month_start: 4, month_end: 6 },
  },
  {
    name: 'Gooseberry',
    description:
      'Perennial berry shrub with sweet-tart fruits. Plant in autumn from October to November, harvest from June to July, or unripe from late May for cooking. Bears on multi-year wood.',
    tip: 'Choose mildew-resistant varieties and prune for an open habit, otherwise American gooseberry mildew attacks the shoots.',
    seed: { month_start: 10, month_end: 11 },
    harvest: { month_start: 6, month_end: 7 },
  },
  {
    name: 'Apple',
    description:
      'The most popular fruit tree in the home garden, depending on variety for immediate eating or storing. Plant bare-root trees from October to November, harvest from August to October. A second variety nearby is usually needed for pollination.',
    tip: 'Make sure a suitable pollinator variety is nearby — a single tree often bears poorly on its own.',
    seed: { month_start: 10, month_end: 11 },
    harvest: { month_start: 8, month_end: 10 },
  },
  {
    name: 'Sweet Cherry',
    description:
      'Large fruit tree with sweet fruits in early summer. Plant from October to November, harvest from June to July. Many varieties need a second cherry tree nearby for pollination.',
    tip: 'Protect the fruits from rain just before ripening — wet sweet cherries split easily, and nets keep birds away.',
    seed: { month_start: 10, month_end: 11 },
    harvest: { month_start: 6, month_end: 7 },
  },
  {
    name: 'Plum',
    description:
      'Fruit tree with firm, freestone flesh. Plant from October to November, harvest from August to September. Many plum varieties are self-fertile and need no pollination partner.',
    tip: 'Support heavily laden branches in good time, otherwise the wood easily breaks under the weight of fruit.',
    seed: { month_start: 10, month_end: 11 },
    harvest: { month_start: 8, month_end: 9 },
  },
  {
    name: 'Basil',
    description:
      'Heat-loving herb that is most aromatic when used fresh. Start indoors from March to April, transplant or direct sow from mid-May, harvest from June to September. In a pot on a windowsill, it can be grown year-round.',
    tip: 'Do not pick individual leaves — instead cut whole shoot tips just above a leaf pair, which promotes bushy growth.',
    indoor: { month_start: 3, month_end: 4 },
    seed: { month_start: 5, month_end: 6 },
    harvest: { month_start: 6, month_end: 9 },
  },
  {
    name: 'Parsley',
    description:
      'Biennial kitchen herb in flat-leaf and curly forms. Direct sow from March to July, harvest from May through March as the plant often overwinters and re-sprouts in spring. Germinates slowly and requires patience.',
    tip: 'Do not sow in the same spot twice in a row, otherwise parsley soil fatigue develops.',
    seed: { month_start: 3, month_end: 7 },
    harvest: { month_start: 5, month_end: 3 },
  },
  {
    name: 'Chives',
    description:
      'Perennial bulb plant with a fine, oniony aroma. Sow or divide from March to May, harvest from April to October. The clump can be divided in autumn and used for propagation.',
    tip: 'Cut back deeply on a regular basis and remove flower heads — after flowering, the stems become hollow and tough.',
    seed: { month_start: 3, month_end: 5 },
    harvest: { month_start: 4, month_end: 10 },
  },
] satisfies Plant[];
