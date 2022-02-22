const conferences = [...document.querySelectorAll(".conferences-card")];

if (conferences.length > 0) {
  for (let i = 0; i < conferences.length; i++) {
    const card = conferences[i];
    card.style.opacity = 0;
    card.style.transform = "translateX(50px)";
    setTimeout(() => {
      card.style.transitionDuration = "1s";
      card.style.opacity = 1;
      card.style.transform = "translateX(0)";
    }, 200 * (i + 1));
  }
}

const team = [...document.querySelectorAll(".team-card")];

if (team.length > 0) {
  for (let i = 0; i < team.length; i++) {
    const card = team[i];
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    setTimeout(() => {
      card.style.transitionDuration = "1s";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 200 * (i + 1));
  }
}
