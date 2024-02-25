// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('airbnb');

// Create a new document in the collection.
db.getCollection('places').insertOne({
    "place_id": 2,
    "title": "My Home Adriona",
    "subtitle": "Luxury stay in Makarska, Splitsko-dalmatinska županija, Croatia",
    "guests": 8,
    "bedrooms": 4,
    "beds": 4,
    "baths": 4.5,
    "description": "Taste the essence of Dalmatia at this custom-designed spa-villa with panoramic views of the Adriatic Sea. Nestled in the lap of Biokovo Mountain Range, the contemporary masterpiece celebrates Croatian tradition with artisanal stonework and antique furnishings, while its private wellness retreat evokes the primordial healing powers of this unique coastline. Explore the vast nature reserve stretching behind you or drive minutes to the beaches of the Marakesa Riviera.",
    "photos": [
      "https://a0.muscache.com/im/pictures/b72d4535-24f4-4fc0-bdc5-77bad7946e70.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/040e9507-b9b7-432a-91ae-9339c0ab6fdf.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/3abff0dc-5eb9-408e-81b4-c18e3078598d.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/c79cf59f-251b-4528-8587-8ef355663f57.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/e9e28741-2401-4889-8e49-75c73c110b65.jpg?im_w=1440"
    ],
    "location": "Croatia",
    "price": 5450,
    "category": "pool"
});
db.getCollection('places').insertOne({
    "place_id": 3,
    "title": "La dolce Vita",
    "subtitle": "Luxury stay in Castellammare del Golfo, Sicilia, Italy",
    "guests": 8,
    "bedrooms": 4,
    "beds": 5,
    "baths": 3,
    "description": "Set on the North Western coast of Sicily, close to Castellammare del Golfo, this breathtaking villa enjoys mountain and sea views from its bright, eclectic interior. After your morning tea in the garden, sit for an alfresco breakfast while gazing out over the countryside. In the afternoon, keep cool in the pool or head to a nearby beach in Scopello, where you’ll also find great restaurants. ",
    "photos": [
      "https://a0.muscache.com/im/pictures/miso/Hosting-904157499728672218/original/142724bf-027c-4d61-97bc-0367d2c2aa43.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-904157499728672218/original/c5d01f14-4356-4ec2-bb88-36546e790e7b.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-904157499728672218/original/2ab4260b-4026-4392-bc04-357b5fc6e993.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-904157499728672218/original/e318824b-cff9-4145-a5df-58d2a44cdee8.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-904157499728672218/original/999edbb4-c055-47c0-bbaa-9b52e0663b87.jpeg?im_w=1440"
    ],
    "location": "Italy",
    "price": 2500,
    "category": "pool"
});
db.getCollection('places').insertOne({
    "place_id": 4,
    "title": "Villa Dikoarch",
    "subtitle": "Luxury stay in Sithonia, Greece",
    "guests": 10,
    "bedrooms": 5,
    "beds": 5,
    "baths": 5,
    "description": "In completely harmony with its natural surroundings, Greek sunlight and the presence of water, we have designed a space for visitors, to feel cosy from the first moment, which is located in a pure cape at Lagomandra, Sithonia, Halkidiki, Greece. Using the most advanced architectural, this villa incorporates high design and elegance and effortlessly it pledges to give a unique experience. The villa is immersed in private gardens, surrounded by olive trees, lush Mediterranean plants and herbs.",
    "photos": [
      "https://a0.muscache.com/im/pictures/miso/Hosting-801458664154162658/original/d9e9c8c4-63a0-4c24-9863-2ee5db2cd660.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-801458664154162658/original/1c32e21c-015d-426f-b8d7-d8d1e81f8df5.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-801458664154162658/original/fccbd751-2495-4c81-8512-b874c77279fc.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-801458664154162658/original/ea4e32cf-2e66-4474-9ca9-1f35f7d0dc16.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-801458664154162658/original/32522eb7-ce66-4e15-8ef2-57a99e7548f7.jpeg?im_w=1440"
    ],
    "location": "Greece",
    "price": 15500,
    "category": "island"
});
db.getCollection('places').insertOne({
    "place_id": 5,
    "title": "Sunny house",
    "subtitle": "Entire home in Balchik, Bulgaria",
    "guests": 12,
    "bedrooms": 4,
    "beds": 7,
    "baths": 4,
    "description": "You will love my place because it is a lovely cozy villa with amaizing sea view , deep heated pool and jakuzzi,sauna,green yard,beautiful garden ,outdoor children playground,BBQ zone with furniture!There are Italian style kitchen (espresso-machine,fridge-freezer,toaster,kettles,microwave,oven/hobs ,washing machine, dishwasher est), high ceilings,super kings size beds and bedrooms,airconditions,French style windows. My place is wonderful for couples, families (with kids), groups.",
    "photos": [
      "https://a0.muscache.com/im/pictures/b1e1bf49-4341-4347-b8e7-57e1ec6f1424.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/8e16f8ad-020a-4fbc-a809-f31714f83a6a.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/07e4913d-687f-4f07-aede-ea7aed9bd9de.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/e7d9f598-42c5-4ac9-b0ee-bccbf0a83f35.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/8d215350-2742-4947-a4ec-76dbb78c9390.jpg?im_w=1440"
    ],
    "location": "Greece",
    "price": 15500,
    "category": "island"
});
db.getCollection('places').insertOne({
    "place_id": 6,
    "title": "Deniz Manzaralı Huzurlu Köşk Dairesi",
    "subtitle": "Entire villa in Adalar, Turkey",
    "guests": 3,
    "bedrooms": 2,
    "beds": 2,
    "baths": 1,
    "description": "Köşkümüz doğa içinde, deniz manzaralı güzel bir çevreye sahip, gürültüden ve stresten uzak merkeze sadece otobüsle 2 durak, yürüme ile 10 dk uzaktadır. Tüm geziler için yeterince yakın olan, tarihi bir ahşap bina. Akşamları gün batımının huzurlu sessizliğinde birşeyler içmek ve kendinizi dinlemek için birebir. Hem şehirden uzak olmanın verdiği keyif, hem doğal güzelliğin tadını çıkarabileceğiniz bir ev 🏠 Köşk Dairesinin tamamı size aittir kullanım alanı olarak 🤍✨",
    "photos": [
      "https://a0.muscache.com/im/pictures/8b40da0d-6034-4950-a944-931ece4461a1.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/b0b5d24c-4c25-4e16-a180-6be0fc37c91a.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/af78e1d4-3eb2-408c-9fa4-524c02a9fa1e.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/35e1f48e-2324-4e78-87da-8eb28a7a84f0.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/2ebfcfc1-0f41-47a8-af35-210574bdc7bb.jpg?im_w=1440"
    ],
    "location": "Turkey",
    "price": 524,
    "category": "new"
});
db.getCollection('places').insertOne({
    "place_id": 7,
    "title": "Cob Cottage",
    "subtitle": "Earthen home in Mayne Island, Canada",
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "baths": 1,
    "description": "Channel the pursuit of pause in this one-of-a-kind earth house. The cozy retreat was hand-sculpted using local and sustainable natural materials, and features a central living space with cantilevered slab stairs leading to the loft bedroom.",
    "photos": [
      "https://a0.muscache.com/im/pictures/e28d45ab-175b-45e4-9e22-9f2fc12b30df.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/32ebd11d-e457-4abc-95d7-b7bcbccd6852.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/d40f89c3-f3ed-4485-b9a9-0dcafce95fa4.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/0f9d9beb-5a59-4dbd-aba3-6a2aaf2ee222.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/1f7bdfa9-5643-4f1d-8b04-d75a3f7031ad.jpg?im_w=1440"
    ],
    "location": "Canada",
    "price": 685,
    "category": "cabins"
});

db.getCollection('places').insertOne({
    "place_id": 8,
    "title": "Moinho das Feteiras | The Mill",
    "subtitle": "Windmill in Ponta Delgada, Portugal",
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "baths": 1,
    "description": "Built in the 19th century, with a 360 degrees view over the sea and surroundings on the top floor.It features a Bedroom with a king size bed, a very well-decorated living room with kitchenette, and a WC.Free WiFi, air conditioning, Led TV and DVD player.Private parking inside the premises, providing extra security.Perfect for an unforgettable honeymoon experience.",
    "photos": [
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/e3beaf52-13ab-44ed-bbfa-56ccf43bab98.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/bc9fdbba-a126-4357-946b-4d5f5581ca0f.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/def4a486-26a6-4555-8c05-4736a4ca262b.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/d0a3e3b1-6d38-426d-8779-1ec5c8fbe30e.jpeg?im_w=1440"
    ],
    "location": "Portugal",
    "price": 1066,
    "category": "cabins"
});
db.getCollection('places').insertOne({
    "place_id": 9,
    "title": "Cabane Lov'Nid Passion pour 2 personnes",
    "subtitle": "Treehouse in Joncherey, France",
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "baths": 1,
    "description": "Découvrez la cabane Lov’Nid Passion, un cocon d’amour perché à 6 mètres de hauteur. Profitez du cadre charmant de ce logement romantique en pleine nature.",
    "photos": [
      "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/19a492ca-0e15-4b4b-9711-6000b657c094.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/eb5b6b2f-7815-42f3-b804-c1030c21596e.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/1c4461ac-ce0a-45e9-bb9e-c44cf2073d65.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/6dd3b27b-f413-4fa5-959f-5ea2b8bdbbb2.jpeg?im_w=1440"
    ],
    "location": "France",
    "price": 1145,
    "category": "cabins"
});
db.getCollection('places').insertOne({
    "place_id": 10,
    "title": "Elia, the private off grid island",
    "subtitle": "Island in Vourvourou, Greece",
    "guests": 4,
    "bedrooms": 2,
    "beds": 5,
    "baths": 1,
    "description": "Elia is a small private off grid island surrounded by turquoise waters and majestic forests. You wake up, the sun is rising behind mount Athos. You enjoy a cup of coffee, while the dolphins jump on the horizon. You walk to the beach and the only thing you can hear is the sea. You cook outside, watching the boats passing by and the seagulls chasing the fish. Now, spend your time painting and playing board games. Finally, you have a glass of wine, waiting for the moon to rise behind the hills.",
    "photos": [
      "https://a0.muscache.com/im/pictures/b66244fd-b989-46c8-a9af-b2877b7da13d.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-33553710/original/2c0c1f6d-0d00-48d6-abb5-41404bd366de.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-33553710/original/c43332a0-31e0-4f70-814d-8befdb7433af.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-33553710/original/530eedfa-4ae0-4aaf-996c-279c7328f666.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/b9c488b3-0470-4667-aa77-7e0d4cba92d0.jpg?im_w=1440"
    ],
    "location": "Greece",
    "price": 1244,
    "category": "island"
});