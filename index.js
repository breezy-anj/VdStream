import express from "express"
import path from "path"

const PORT = 5001;
const app = express();

app.use(express.static(path.resolve("public")));
app.use("/content", express.static(path.resolve("content")));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
