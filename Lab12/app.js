// 1. Create a npm project and install Express.js (Nodemon if you want)
// 2. Change your Express.js app which serves HTML files (of your choice with your content) for “/”, “/users” and “/products”.
// 3. For “/users” and “/products”, provides GET and POST requests handling (of your choice with your content) in different routers.
// 4. Add some static (.js or .css) files to your project that should be required by at least one of your HTML files.
// 5. Customize your 404 page
// 6. Provide your own error handling

const path = require("path");
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const errorRoutes = require("./routes/errorRoutes");
const { urlencoded } = require("express");

app.use(urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/error", errorRoutes);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('error', { error: err });
});

app.listen(3000, () => "listen on 3000...");
