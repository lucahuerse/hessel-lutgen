const openNavPanel = () => {
  const navPanel = document.querySelector("#navPanel");
  navPanel.classList.add("visible", "transition");

  console.log(navPanel);
};

const closeNavPanel = () => {
  const navPanel = document.querySelector("#navPanel");
  navPanel.classList.remove("visible");
};
