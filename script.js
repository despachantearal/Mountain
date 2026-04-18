const facts = [
  "Mount Everest is the highest mountain on Earth.",
  "Mountains are formed by tectonic forces.",
  "Some mountains are volcanoes.",
  "The Himalayas are the tallest mountain range.",
  "Mountains affect climate and weather patterns."
];

function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[random];
}

function climbMountain() {
  alert("🏔️ You start climbing the mountain!");
}
