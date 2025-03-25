function calculateDaysUntilNextSelection() {
  const currentDate = new Date();
  const nextSelectionDate = new Date("11/30/2024");
  const timeDifference = nextSelectionDate.getTime() - currentDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  document.getElementById("countdown").innerText = daysDifference + " dias";
}
calculateDaysUntilNextSelection();
