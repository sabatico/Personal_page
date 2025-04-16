document.addEventListener('DOMContentLoaded', function () {
  const textOptions = [
    { upper: "I am the team's", lower: "Swiss-Army Knife (since 2006)" },
    { upper: "Born in Moldova", lower: "Living my best life in the US" },
    { upper: "Hello, I'm", lower: "John (Ion) Sabatico" }
    // Add more options as needed
  ];

  let currentIndex = 0;

  const upperTextDiv = document.getElementById("upperText");
  const lowerTextDiv = document.getElementById("lowerText");

  function updateTextWithTransition() {
    const { upper, lower } = textOptions[currentIndex];

    // Fade out current text
    upperTextDiv.classList.remove("visible");
    lowerTextDiv.classList.remove("visible");

    setTimeout(() => {
      // Update text
      upperTextDiv.textContent = upper;
      lowerTextDiv.textContent = lower;

      // Fade in new text
      upperTextDiv.classList.add("visible");
      lowerTextDiv.classList.add("visible");

      // Update index for next cycle
      currentIndex = (currentIndex + 1) % textOptions.length;
    }, 2000); // Delay matches CSS transition
  }

  function updateTextImmediately() {
    const { upper, lower } = textOptions[2];
    upperTextDiv.textContent = upper;
    lowerTextDiv.textContent = lower;
    upperTextDiv.classList.add("visible");
    lowerTextDiv.classList.add("visible");
  }

  // Initial text update without transition
  updateTextImmediately();

  // Set interval for subsequent updates with transition
  setInterval(updateTextWithTransition, 10000); // 10 seconds interval
});
