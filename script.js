// 🎊 Конфетти
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = [];
const numberOfPieces = 150;

for (let i = 0; i < numberOfPieces; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 10 + 5,
    speed: Math.random() * 3 + 1,
    color: hsl(${Math.random() * 360}, 70%, 60%),
    rotation: Math.random() * 360,
  });
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of pieces) {
    p.y += p.speed;
    p.rotation += 3;
    if (p.y > canvas.height) p.y = -p.size;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();
  }
  requestAnimationFrame(updateConfetti);
}

updateConfetti();