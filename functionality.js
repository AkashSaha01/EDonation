document
  .getElementById("noakhali-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputNoakhali = parseFloat(getInputFieldValueByID("input-noakhali"));
    const totalNoakhaliCollection = parseFloat(
      getTextValueByID("noakhali-amount")
    );
    const originAmount = parseFloat(getTextValueByID("pocket-amount"));

    if (isNaN(inputNoakhali) || inputNoakhali < 1) {
      window.alert(
        "Please enter a valid number greater than or equal to 1 for the donation."
      );
      return;
    }

    const updatedNoakhaliCollection = totalNoakhaliCollection + inputNoakhali;
    const updatedTotalPocket = originAmount - inputNoakhali;

    document.getElementById("noakhali-amount").innerText = parseFloat(
      updatedNoakhaliCollection
    );
    document.getElementById("pocket-amount").innerText = updatedTotalPocket;

    const div = document.createElement("div");
    div.classList.add("bg-gray-50", "p-3", "my-2", "border", "border-gray-200");

    const now = new Date();
    const formattedDate = now.toString();

    div.innerHTML = `
    <h2 class="text-md">${inputNoakhali} Taka is Donated for Noakhali Flood-2024 at Noakhali, Bangladesh</h2>
    <p class="text-sm text-gray-500">Date: ${formattedDate}</p>
  `;

    document.getElementById("history-block").appendChild(div);

    // window.alert(
    //   `Thank you! Your donation of ${inputNoakhali} BDT was successful.`
    // );

    const modal = document.getElementById("my_modal_1");
    modal.showModal();
  });

document.getElementById("feni-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const inputFeni = parseFloat(getInputFieldValueByID("input-feni"));
  const totalFeniCollection = parseFloat(getTextValueByID("feni-amount"));
  const originAmount = parseFloat(getTextValueByID("pocket-amount"));

  if (isNaN(inputFeni) || inputFeni < 1) {
    window.alert(
      "Please enter a valid number greater than or equal to 1 for the donation."
    );
    return;
  }

  const updatedFeniCollection = totalFeniCollection + inputFeni;
  const updatedTotalPocket = originAmount - inputFeni;

  document.getElementById("feni-amount").innerText = parseFloat(
    updatedFeniCollection
  );
  document.getElementById("pocket-amount").innerText = updatedTotalPocket;

  const div = document.createElement("div");
  div.classList.add("bg-gray-50", "p-3", "my-2", "border", "border-gray-200");

  const now = new Date();
  const formattedDate = now.toString();

  div.innerHTML = `
    <h2 class="text-md">${inputFeni} Taka is Donated for Feni Flood-2024 at Noakhali, Bangladesh</h2>
    <p class="text-sm text-gray-500">Date: ${formattedDate}</p>
  `;

  document.getElementById("history-block").appendChild(div);
  const modal = document.getElementById("my_modal_1");
  modal.showModal();

  // window.alert(`Thank you! Your donation of ${inputFeni} BDT was successful.`);
});

document
  .getElementById("quoata-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputQuoata = parseFloat(getInputFieldValueByID("input-quoata"));
    const totalQuoataCollection = parseFloat(getTextValueByID("quoata-amount"));
    const originAmount = parseFloat(getTextValueByID("pocket-amount"));

    // Validate input: check if it's a number and greater than or equal to 1
    if (isNaN(inputQuoata) || inputQuoata < 1) {
      window.alert(
        "Please enter a valid number greater than or equal to 1 for the donation."
      );
      return;
    }

    const updatedQuoataCollection = totalQuoataCollection + inputQuoata;
    const updatedTotalPocket = originAmount - inputQuoata;

    document.getElementById("quoata-amount").innerText = parseFloat(
      updatedQuoataCollection
    );
    document.getElementById("pocket-amount").innerText = updatedTotalPocket;

    // Create and append the transaction history entry
    const div = document.createElement("div");
    div.classList.add("bg-gray-50", "p-3", "my-2", "border", "border-gray-200");

    const now = new Date();
    const formattedDate = now.toString();

    div.innerHTML = `
    <h2 class="text-md">${inputQuoata} Taka is Donated for Quota Movement-2024 at Bangladesh</h2>
    <p class="text-sm text-gray-500">Date: ${formattedDate}</p>
  `;

    document.getElementById("history-block").appendChild(div);
    const modal = document.getElementById("my_modal_1");
    modal.showModal();

    // window.alert(
    //   `Thank you! Your donation of ${inputQuoata} BDT was successful.`
    // );
  });
