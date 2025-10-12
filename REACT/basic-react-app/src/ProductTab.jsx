import Product from './Product.jsx';

function ProductTab(){
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };
    
    return (
       <div style={styles}>
        <Product title="Logitech MK Master" idx={0}/> 
        <Product title="Apple" idx={1}/>
        <Product title="Zebronics transformer" idx={2} />
        <Product title="Boat headphones" idx={3}/>
        {/* <Product /> */}
       </div>
    )
}

//call a major component , from called component call next smaller component


/*we are passing from here */
export default ProductTab;
