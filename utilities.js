function getInputFieldValueByID(id) {
  const inputValue = document.getElementById(id).value;
  const parsedResult = parseFloat(inputValue);
  return parsedResult;
}
function getTextValueByID(id) {
  const theText = document.getElementById(id).innerText;
  const parsedText = parseFloat(theText);
  return parsedText;
}
function showSelectionById(id) {
  document.getElementById("card-calculation").classList.add("hidden");
  document.getElementById("history-block").classList.add("hidden");

  document.getElementById("history-btn").classList.add("bg-gray-200");
  document.getElementById(id).classList.remove("hidden");
  if (id == "history-block") {
    document.getElementById("history-btn").classList.add("bg-lime-400");
    document.getElementById("donation-btn").classList.remove("bg-lime-400");
    document.getElementById("donation-btn").classList.add("bg-gray-200");
  } else if (id == "card-calculation") {
    document.getElementById("history-btn").classList.remove("bg-lime-400");
    document.getElementById("history-btn").classList.add("bg-gray-200");
    document.getElementById("donation-btn").classList.add("bg-lime-400");
  }
}
