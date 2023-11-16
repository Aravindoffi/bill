let a = [] ;

const addProductsToTable = (data)=>{

    const total = data.reduce(
        (acc,prod) =>{
        acc.price  += prod.price * prod.quan;
        acc.quan = +acc.quan + +prod.quan;
        return acc;
        },
        {price: 0, quan: 0}
        );
        console.log(total)
const tbody = document.querySelector("tbody")
tbody.innerHTML=data.map(
    (prod,ind)=>
`<tr>
    <td>${ind+1}</td>
    <td>${prod.name}</td>
    <td>${prod.quan}</td>
    <td>${prod.price}</td>
    <td>${prod.quan * prod.price}</td>
    </tr>`
).join("") +
`<tr> 
<td colspan ="2">Total</td>
<td>${total.quan}</td>
<td> </td>
<td>${total.price}</td>
</td>`


}



const product = document.getElementById("prodName");
const Pquantity = document.getElementById("quantity");
const Pprice = document.getElementById("price");
const addpro = document.querySelector("#addProduct");
const clear = document.querySelector("#clear")
const clearall = document.querySelector("#clearall")
const print = document.querySelector("#print")
print.addEventListener('click',()=>{
    window.print()
})


clearall.addEventListener("click",() =>{
    document.querySelector("tbody").innerHTML= ""
   clear.click()

}
)



clear.addEventListener("click",()=>{

product.value = ""
Pquantity.value = ""
Pprice.value = ""

}

)


addpro.addEventListener("click" ,() => {
let obj = {
    name: product.value,
    quan: Pquantity.value,
    price: Pprice.value,
}
a.push(obj)
console.log(a)
addProductsToTable(a)
});