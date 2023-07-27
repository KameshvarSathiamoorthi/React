export default function Products(){
    
    let plist=[
        {id: 1, name: "Laptop", price: 32222 },
        {id: 2, name: "Tablet", price: 222 },
        {id: 3, name: "Mobile", price: 32552 },
        {id: 4, name: "Mouse", price: 302 },
    ]
    //let product= ["Laptop", "Headphones", "Mobiles","Router"];
    
    return(
<ul>
    {plist.map((product)=>{
        return <div key={product.id}>Name : {product.name} , Price : {product.price}</div>
    })}
</ul>
        // <ul>
        //     {product.map(function(product){
        //         return <li>{product}</li>
        //     })}
        // </ul>

// {/* <ul>
//     <li>{product[0]}</li>
//     <li>{product[1]}</li>
//     <li>{product[2]}</li>
//     <li>{product[3]}</li>
// </ul> */}

    )
}
