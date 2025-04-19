const symbols = ["🍒", "🍋", "🍉", "🍇", "⭐", "7️⃣"];

function spin() {
  const reels = [
    document.getElementById("r1"),
    document.getElementById("r2"),
    document.getElementById("r3")
  ];

  reels.forEach((reel, i) => {
    let count = 10 + i * 5;
    const interval = setInterval(() => {
      reel.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      count--;
      if (count === 0) clearInterval(interval);
    }, 100);
  });
}
