

async function fetchComidas() {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let data = await response.json();
    console.log(data);
    renderComidas();
}

function renderComidas() {
    const container = document.getElementById("nombre_1");
    const comida = datas[0]["meals"][idIngredient]["strIngredient"];
    container.innerHTML = `
    <p class="java">${comida} - ${datas[0]["meals"][idIngredient]["nombre"]}</p>
    <p class="nombrejava">${datas[0]["meals"][idIngredient]["strIngredient"]}</p>

    `;
}
