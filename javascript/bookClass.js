class book {
    constructor(id, book_name, book_author, category, quantity, price) {
      this.id = id;
      this.book_name = book_name;
      this.book_author = book_author;
      this.category = category;
      this.quantity = quantity;
      this.price = price;

      const selBtn = document.createElement("button");
      selBtn.innerText = "Select";
      selBtn.type = "button";
      selBtn.classList.add("btn-accept");
      this.selBtn = selBtn;
    }

    toRow() {
        const tr = document.createElement("tr");
        // For each property values of the product object, create a table column
        for (let prop of Object.values(this)) {
          const td = document.createElement("td");
          // If the property is an object (button), append it to the column
          // Else, take that property's value and use it as innerText for the column
          (prop instanceof Object) ? td.append(prop) : td.innerText = prop;
          // Append the columns to the product row
          tr.append(td);
        }
        return tr;
      }
};
export default book;