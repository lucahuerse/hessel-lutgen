const openNavPanel = () => {
  const navPanel = document.querySelector("#navPanel");
  if (navPanel.classList.contains("visible"))
    navPanel.classList.remove("visible");
  else navPanel.classList.add("visible", "transition");
};

const closeNavPanel = () => {
  const navPanel = document.querySelector("#navPanel");
  navPanel.classList.remove("visible");
};
