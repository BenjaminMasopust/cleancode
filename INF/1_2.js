// Funkce c přijímá dvě čísla a a b
function c(a, b) {
    // Vypočítáme délku přepony v pravoúhlém trojúhelníku pomocí Pythagorovy věty
    let d = Math.sqrt(a * a + b * b);
  
    // Vypíšeme výsledek do konzole
    console.log("The result is: " + d);
  
    // Vrátíme výsledek výpočtu
    return d;
  }
  
  // Proměnné x a y definují délky stran trojúhelníku
  let x = 3;
  let y = 4;
  
  // Zavoláme funkci c s hodnotami x a y a uložíme výsledek do proměnné r
  let r = c(x, y);
  
  // Vypíšeme výsledek výpočtu do konzole
  console.log("Computed value: " + r);
  