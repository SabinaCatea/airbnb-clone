/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'airbnb';
const collection = 'places';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

db.places.insertOne({
"place_id": 1,
"title":"Villa Dikoarch",
"subtitle": "Ședere de lux în Sithonia, Greece, Grecia",
"guests": 10,
"bedrooms": 5,
"beds":5,
"baths":5,
"description": "In completely harmony with its natural surroundings, Greek sunlight and the presence of water, we have designed a space for visitors, to feel cosy from the first moment, which is located in a pure cape at Lagomandra, Sithonia, Halkidiki, Greece. Using the most advanced architectural, this villa incorporates high design and elegance and effortlessly it pledges to give a unique experience. The villa is immersed in private gardens, surrounded by olive trees, lush Mediterranean plants and herbs."
,"photos": ["https://a0.muscache.com/im/pictures/miso/Hosting-801458664154162658/original/7a853d98-3788-4b0f-b2f7-01f6c665d384.jpeg?im_w=1200"

,"https://a0.muscache.com/im/pictures/miso/Hosting-801458664154162658/original/ece05b42-aa1d-4afe-9aa8-5b2f62db7764.jpeg?im_w=1200"
,"https://a0.muscache.com/im/pictures/miso/Hosting-801458664154162658/original/fccbd751-2495-4c81-8512-b874c77279fc.jpeg?im_w=1200"
,"https://a0.muscache.com/im/pictures/miso/Hosting-801458664154162658/original/d14d21bf-05e1-4c16-9cca-23952d76ff57.jpeg?im_w=1200"
,"https://a0.muscache.com/im/pictures/miso/Hosting-801458664154162658/original/ea4e32cf-2e66-4474-9ca9-1f35f7d0dc16.jpeg?im_w=1200"]
,"location": "GR",
"price":450,
"category": "beach"
})


// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
