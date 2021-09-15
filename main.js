const app = () => {
  const currencyCards = document.querySelectorAll(".currency");
  const inputFields = document.querySelectorAll(".input-field-parent input");
  const exchangeFields = document.querySelectorAll(
    ".input-field-parent .exchange"
  );
  const CURRENCY_DICTIONARY = {
    PS: {
      PS: 1,
      EGP: 4.89,
      USD: 0.31,
      EUR: 0.26,
      DZD: 42.38,
      SAR: 1.17,
    },
    EGP: {
      PS: 0.2,
      EGP: 1,
      USD: 0.064,
      EUR: 0.054,
      DZD: 8.66,
      SAR: 0.24,
    },
    USD: {
      PS: 3.21,
      EGP: 15.7,
      USD: 1,
      EUR: 0.85,
      DZD: 136.14,
      SAR: 3.75,
    },
    EUR: {
      PS: 3.8,
      EGP: 18.58,
      USD: 1.18,
      EUR: 1,
      DZD: 160.79,
      SAR: 4.43,
    },
    DZD: {
      PS: 0.024,
      EGP: 0.12,
      USD: 0.0073,
      EUR: 0.0062,
      DZD: 1,
      SAR: 0.028,
    },
    SAR: {
      PS: 0.86,
      EGP: 4.19,
      USD: 0.27,
      EUR: 0.23,
      DZD: 36.3,
      SAR: 1,
    },
  };
  inputFields.forEach((input) => {
    input.oninput = function () {
      inputFields.forEach((i) => {
        // Get the equivellent in other currencies.
        if (i !== this) {
          if (input.value.trim() !== "") {
            i.value = (
              input.value *
              CURRENCY_DICTIONARY[this.dataset.cur.toUpperCase()][
                i.dataset.cur.toUpperCase()
              ]
            ).toFixed(2);
          } else i.value = "";
        }
      });

      // Change the exchange text.
      exchangeFields.forEach((ex) => {
        ex.textContent = `1 ${this.dataset.cur.toUpperCase()} = ${
          CURRENCY_DICTIONARY[this.dataset.cur.toUpperCase()][
            ex.dataset.cur.toUpperCase()
          ]
        } ${ex.dataset.cur.toUpperCase()}`;
      });
    };

    // Select text when focus.
    input.addEventListener("focus", function () {
      this.select();
    });
  });

  // Add the class "active" to the current currency.
  currencyCards.forEach((card) => {
    card.onclick = function () {
      currencyCards.forEach((c) => c.classList.remove("active"));
      this.classList.add("active");
    };
  });
};

app();
