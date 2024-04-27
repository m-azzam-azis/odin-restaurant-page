function Menu(content) {
  const menu = [
    "javanese lamb skewers (sate kambing)",
    "lamb bone soup",
    "sweet soy sauce",
    "spicy soy sauce",
  ];
  const price = [3, 4, 1, 2];

  const ul = document.createElement("ul");
  for (let i = 0; i < menu.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${menu[i]} = ${price[i]}$`;
    ul.appendChild(li);
  }

  content.appendChild(ul);
}
export default Menu;
