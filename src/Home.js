import Sate from "./sate.jpeg";

function Home(content) {
  const image = document.createElement("img");
  image.src = Sate;

  content.appendChild(image);
}
export default Home;
