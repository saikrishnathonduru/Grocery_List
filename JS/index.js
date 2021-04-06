function getit() {
            let result = document.getElementById('demo');
            let allitems = 0;
            let itemCount = prompt("how many items do you need?");
            let items = {};
            for (i = 0; i < itemCount; i++) {
                items[i] = {

                    name: prompt("Product Name"),
                    price: prompt("Price of the product"),
                    qty: prompt("Quantity of the product")

                }
                
            }

            for (i = 0; i < itemCount; i++) {
                let subtotal = 0;
                let total = 0;
                subtotal = items[i].price * items[i].qty;
                total = subtotal * 1.05;
                allitems = allitems + subtotal;
                result.innerHTML += "Name of the Product: " + items[i].name + "<br/>";
                result.innerHTML += "Total Quantity: " + items[i].qty + "<br/>";
                result.innerHTML += "Amount of the product: " + subtotal + "<br/>";
                //result.innerHTML += "Sub total: " + total + "<br/>";
                if (i == (itemCount - 1)) { result.innerHTML += "Total amount: " + allitems + "<br/>"; }
                
            }
        }