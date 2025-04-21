const symbols = [
  "assets/icons/treasure-chest.svg",
  "assets/icons/pirate-ship.svg",
  "assets/icons/gold-coins.svg",
  "assets/icons/skull.svg",
  "assets/icons/rum-bottle.svg",
  "assets/icons/anchor.svg",
  "assets/icons/sword.svg",
  "assets/icons/map.svg"
];
let gold = 1000;

const goldDisplay = document.getElementById("gold");
const betSelect = document.getElementById("betSelect");
const resultMsg = document.getElementById("resultMsg");
const winSound = document.getElementById("winSound");
const spinSound = document.getElementById("spinSound");
const spinBtn = document.getElementById("spin-btn");
const maxBetBtn = document.getElementById("max-bet-btn");

function updateGoldDisplay() {
  goldDisplay.textContent = gold;
}

function spin() {
  const bet = parseInt(betSelect.value);
  if (gold < bet) {
    resultMsg.textContent = "Ye be outta gold, matey!";
    return;
  }

  gold -= bet;
  updateGoldDisplay();
  resultMsg.textContent = "";
  spinSound.play();

  const reels = [
    document.getElementById("r1"),
    document.getElementById("r2"),
    document.getElementById("r3")
  ];

  reels.forEach((reel) => {
    reel.innerHTML = ""; // Clear the reel
    for (let i = 0; i < 5; i++) {
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      const slot = document.createElement("div");
      slot.classList.add("slot");
      slot.innerHTML = `<img src="${symbol}" alt="symbol" />`;
      reel.appendChild(slot);
    }
  });

  setTimeout(() => {
    winSound.play();
    resultMsg.textContent = "Arrr! Ye won some gold!";
    gold += bet * 2; // Example win multiplier
    updateGoldDisplay();
  }, 2000);
}

spinBtn.addEventListener("click", spin);
maxBetBtn.addEventListener("click", () => {
  betSelect.value = Math.min(gold, 50);
  spin();
});
