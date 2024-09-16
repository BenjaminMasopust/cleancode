// Definice třídy P
class P {
  // Konstruktor přijímá dva parametry: n (jméno) a a (věk)
  constructor(n, a) {
      this.n = n; // Přiřazení jména
      this.a = a; // Přiřazení věku
  }

  // Metoda d vypíše do konzole větu s jménem a věkem osoby
  d() {
      console.log(this.n + " is " + this.a + " years old."); // Vypíše "jméno je věk let starý."
  }
}

// Vytvoříme nový objekt třídy P se jménem "Alice" a věkem 30
let p = new P("Alice", 30);

// Zavoláme metodu d pro objekt p, která vypíše větu do konzole
p.d();
