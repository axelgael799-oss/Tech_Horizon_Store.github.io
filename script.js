// 🔊 Sonido Tech Horizon
const sound = document.getElementById("clickSound");
let soundEnabled = false;

// desbloquear audio con el primer click
document.addEventListener("click", () => {
    if (!soundEnabled) {
        sound.play().then(() => {
            sound.pause();
            sound.currentTime = 0;
            soundEnabled = true;
            console.log("🔓 Sonido desbloqueado");
        }).catch(() => {});
    }
});

function playSound() {
    if (!soundEnabled) return;

    sound.currentTime = 0;
    sound.volume = 0.3;
    sound.play().catch(() => {});
}
