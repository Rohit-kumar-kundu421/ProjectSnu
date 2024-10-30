window.addEventListener("scroll", () => {
  const scrollTriggers = document.querySelectorAll(".scroll-trigger");
  const windowHeight = window.innerHeight;

  scrollTriggers.forEach((trigger) => {
    const triggerTop = trigger.getBoundingClientRect().top;

    // Check if the element's top position is within the viewport
    if (triggerTop < windowHeight - 100) {
      trigger.classList.add("active");
    }
  });
});
