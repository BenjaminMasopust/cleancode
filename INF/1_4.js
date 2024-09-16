// Funkce s přijímá jeden parametr r (poloměr kruhu)
function s(r) {
  // Vypočítáme plochu kruhu pomocí vzorce P = π * r^2
  let a = 3.14 * r * r;

  // Vypočítáme obvod kruhu pomocí vzorce O = 2 * π * r
  let c = 2 * 3.14 * r;

  // Vypíšeme plochu do konzole
  console.log("Area: " + a);

  // Vypíšeme obvod do konzole
  console.log("Circumference: " + c);
}

// Zavoláme funkci s s poloměrem 5
s(5);

