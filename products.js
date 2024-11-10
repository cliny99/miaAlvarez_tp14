products = ["anafe","licuadora","heladera","microondas","horno","freidora"];

// a.
console.log(products[3]);

// b.
products.push(products.shift());
// console.log(products);

// c.
products.push("mixer","pochoclera");
// console.log(products);

// d.
console.log(products.length);

// e.
if(products.includes("licuadora")){
    console.log("Producto encontrado.")
}else{
    console.log("Producto no encontrado.")
}

if(products.includes("mastodonte")){
    console.log("Producto encontrado.")
}else{
    console.log("Producto no encontrado.")
}

// f.
console.log(products.join(' '));

// g.
