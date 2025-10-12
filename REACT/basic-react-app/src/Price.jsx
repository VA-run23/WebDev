import PropTypes from 'prop-types';

function Price({oldPrice, newPrice}){//take props {inside}
    let oldStyles={
        textDecorationLine:"line-through"
    }

    let newstyles={
        fontWeight:"bold",
    }

    let styles={
        backgroundColor:"pink",
        height:"2.5rem",
        borderBottomLeftRadius:"15px",
        borderBottomRightRadius:"15px",

    }
    return (
        <div style={styles}>
           <span style={oldStyles}> {oldPrice}</span>&nbsp;
           <span style={newstyles}> {newPrice}</span>
        </div>
    )
}

Price.propTypes = {//here the Price is the name of the function
    oldPrice: PropTypes.string,
    newPrice: PropTypes.string
};

export default Price;


  ///11:22 paused at