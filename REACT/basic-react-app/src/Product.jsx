import PropTypes from 'prop-types';
import Price from './Price';
import "./Product.css"

function Product({title, idx}) {
  let oldPrices=["12,495", "11,900","12345", "4545", "3453"];
  let newPrices=["4342","45232", "2332", "5666", "7899"];
  let description=[["8,000 DPI","5 programmable buttons"],[ "Intutive surface","User friendly" ],["Designed for iPad Pro", "Exclusive Product"], ["WIreless", "bluetooth connectivity"]]
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>

      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
  )
}

Product.propTypes = {//here the Product is the name of the function 
  title: PropTypes.string,
  oldPrices: PropTypes.arrayOf(PropTypes.string),
  newPrices: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.arrayOf(PropTypes.string),
  idx: PropTypes.number
};

export default Product;


