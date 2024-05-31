const Items = document.querySelectorAll(".item");
function getNumberOfItems() {
  return `Number of categories: ${Items.length}`;
}
console.log(getNumberOfItems());

Items.forEach((oneItem) => {
  const title = oneItem.querySelector("h2");
  console.log(`Category : ${title.textContent}`);
  const seeUl = oneItem.querySelector("ul");
  const seeElNumber = seeUl.querySelectorAll("li");
  console.log(`Element : ${seeElNumber.length}`);
});
