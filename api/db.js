const mongoose = require("mongoose");
const url =
  "mongodb+srv://blessyv4j:32RNgiLSlWjPOa9H@cluster0.zj3mh.mongodb.net/articles?retryWrites=true&w=majority";

const artDB = async () => {
  const conn = mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, connection) => {
      if (err) {
        console.log(err);
      } else {
        console.log("connected to mongoose");
      }
    }
  );
};

// const ArticlesSchema = mongoose.Schema({
//   //schema
//   title: String,
//   description: String,
//   image: String,
// });
// const Articles = mongoose.model("Articles", ArticlesSchema);

// // document
// const article1 = new Articles({
//   title: "Hi",
//   description: "description",
// });
// const article2 = new Articles({
//   title: "Hi2",
//   description: "description2",
// });

// // Articles.insertMany([article1, article2], (err, docs) => {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(docs);
// //   }
// // });
// Articles.find((err, results) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(results);
//   }
// });

module.exports = artDB;
