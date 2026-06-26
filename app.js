let products = [];

fetch("products.json")
  .then(res => res.json())
  .then(data => {
    products = data;
    render();
  });

function render() {
  const grid = document.getElementById("grid");

  products.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}" />
      <div class="info">
        <div>${p.name}</div>
        <div class="price">${p.price}</div>
      </div>
    `;

    card.onclick = () => openModal(index);

    grid.appendChild(card);
  });
}

function openModal(index) {
  const p = products[index];

  document.getElementById("modalContent").innerHTML = `
    <img src="${p.image}" />
    <div class="modal-body">
      <h2>${p.name}</h2>
      <p>${p.price}</p>
      <p>${p.description}</p>
    </div>
  `;

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}