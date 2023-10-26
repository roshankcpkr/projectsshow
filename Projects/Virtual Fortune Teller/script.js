const fortunes = [
    "Your future is bright!",
    "Don't count on it...",
    "You will meet someone special today.",
    "Focus on your goals, and success will follow.",
    "Expect the unexpected.",
    "A great adventure awaits you!",
    "Good things come to those who wait.",
    "Your hard work will pay off soon.",
    "Today is a lucky day for you.",
    "Take risks – they may lead to great rewards.",
    "A surprise awaits you around the corner.",
    "Your creativity will shine in the coming days.",
    "Someone from your past will reappear in your life.",
    "Travel is in your future. Pack your bags!",
    "An opportunity will knock on your door.",
    "Your determination will overcome any obstacle.",
    "The best is yet to come.",
    "Listen to your intuition; it knows the way.",
    "Happiness is a choice. Choose it today.",
    "You are destined for greatness.",
    "New friendships will enrich your life.",
    "A big decision is on the horizon. Trust yourself.",
    "Your luck will change for the better.",
    "Your kindness will be rewarded in unexpected ways.",
    "Believe in the power of positive thinking.",
    "A financial windfall is in your future.",
    "A long-held wish will come true soon.",
    "Your health and well-being are improving.",
    "You will find love when you least expect it.",
    "Embrace change; it will lead to personal growth.",
    "Your family will bring you joy and support.",
    "Keep your eyes open for a life-changing opportunity.",
];

const fortuneElement = document.querySelector(".fortune");
const fortuneButton = document.querySelector(".fortune-button");

function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

fortuneButton.addEventListener("click", () => {
    const randomFortune = getRandomFortune();
    fortuneElement.textContent = randomFortune;
});

// Display a random fortune on page load
window.addEventListener("load", () => {
    const randomFortune = getRandomFortune();
    fortuneElement.textContent = randomFortune;
});


fortuneButton.addEventListener("click", () => {
    const randomFortune = getRandomFortune();
    fortuneElement.textContent = randomFortune;
    
    // Add the 'active' class to trigger the animation
    fortuneElement.classList.add("active");

    // Remove the 'active' class after the animation is complete
    setTimeout(() => {
        fortuneElement.classList.remove("active");
    }, 3000); // 500ms matches the animation duration
});
