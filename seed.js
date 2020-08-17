const Category = require("./models/category");
const Listing = require("./models/listing");
const mongoose = require("mongoose");

const listings = [
  {
    id: 201,
    title: "Red jacket",
    images: [{ fileName: "jacket1" }],
    price: 100,
    categoryId: 5,
    userId: "5f18bd6e4996f3ada805efe3",
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Gray couch in a great condition",
    images: [{ fileName: "couch2" }],
    categoryId: 1,
    price: 1200,
    userId: "5f18bd6e4996f3ada805efe3",
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 1,
    title: "Room & Board couch (great condition) - delivery included",
    description:
      "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
    images: [
      { fileName: "couch1" },
      { fileName: "couch2" },
      { fileName: "couch3" },
    ],
    price: 1000,
    categoryId: 1,
    userId: "5f18bd6e4996f3ada805efe3",
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Designer wear shoes",
    images: [{ fileName: "shoes1" }],
    categoryId: 5,
    price: 100,
    userId: "5f18bd6e4996f3ada805efe3",
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: "Canon 400D (Great Condition)",
    images: [{ fileName: "camera1" }],
    price: 300,
    categoryId: 3,
    userId: "5f18bd634996f3ada805efe2",
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: "Nikon D850 for sale",
    images: [{ fileName: "camera2" }],
    price: 350,
    categoryId: 3,
    userId: "5f18bd634996f3ada805efe2",
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "Sectional couch - Delivery available",
    description: "No rips no stains no odors",
    images: [{ fileName: "couch3" }],
    categoryId: 1,
    price: 950,
    userId: "5f18bd7b4996f3ada805efe4",
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: "Brown leather shoes",
    images: [{ fileName: "shoes2" }],
    categoryId: 5,
    price: 50,
    userId: "5f18bd7b4996f3ada805efe4",
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const categories = [
  {
    id: 1,
    name: "Furniture",
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
    color: "white",
  },
  {
    id: 2,
    name: "Cars",
    icon: "car",
    backgroundColor: "#fd9644",
    color: "white",
  },
  {
    id: 3,
    name: "Cameras",
    icon: "camera",
    backgroundColor: "#fed330",
    color: "white",
  },
  {
    id: 4,
    name: "Games",
    icon: "cards",
    backgroundColor: "#26de81",
    color: "white",
  },
  {
    id: 5,
    name: "Clothing",
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
    color: "white",
  },
  {
    id: 6,
    name: "Sports",
    icon: "basketball",
    backgroundColor: "#45aaf2",
    color: "white",
  },
  {
    id: 7,
    name: "Movies & Music",
    icon: "headphones",
    backgroundColor: "#4b7bec",
    color: "white",
  },
  {
    id: 8,
    name: "Books",
    icon: "book-open-variant",
    backgroundColor: "#a55eea",
    color: "white",
  },
  {
    id: 9,
    name: "Other",
    icon: "application",
    backgroundColor: "#778ca3",
    color: "white",
  },
];

async function seed() {
  const uri =
    "mongodb+srv://renaissance:renaissance@cluster0.lplcs.mongodb.net/sellIt?retryWrites=true&w=majority";
  await mongoose.connect(uri);

  // await Category.deleteMany({});
  await Listing.deleteMany({});

  // for (const listing of listings) {
  //   await new Listing(listing).save();
  // }np
  // for (const category of categories) {
  //   await new Category(category).save();
  // }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
