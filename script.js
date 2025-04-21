
let gold = 100;

const goldDisplay = document.getElementById("gold");
const betSelect = document.getElementById("betSelect");
const resultMsg = document.getElementById("resultMsg");
const winSound = document.getElementById("winSound");
const spinSound = document.getElementById("spinSound");

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

  let results = [];
  let spinCount = [15, 20, 25];

  reels.forEach((reel, i) => {
    let count = spinCount[i];
    const interval = setInterval(() => {
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      reel.textContent = symbol;
      results[i] = symbol;
      count--;
      if (count === 0) clearInterval(interval);
    }, 100);
  });

  setTimeout(() => {
    const [s1, s2, s3] = results;

    if (s1 === s2 && s2 === s3) {
      const winAmount = bet * 5;
      gold += winAmount;
      winSound.play();
      resultMsg.textContent = `Jackpot! Ye won ${winAmount} gold!`;
    } else if (s1 === s2 || s2 === s3 || s1 === s3) {
      const winAmount = bet * 2;
      gold += winAmount;
      winSound.play();
      resultMsg.textContent = `A lucky strike! Ye won ${winAmount} gold!`;
    } else {
      resultMsg.textContent = `Arrr... better luck next spin.`;
    }

    updateGoldDisplay();
  }, 2700);
}
