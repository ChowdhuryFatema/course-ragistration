import PropTypes from 'prop-types';
import { totalCredits } from '../Courses/Courses';

const Cart = ({cart, credit, price}) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-lg">
        <div>
            <h3>Credit Hour Remaining {totalCredits - credit} hr</h3>
        </div>
        <div className="divider"></div>
        <div>
            <h4 className='font-bold text-lg'>Course Name</h4>
            <div>
                <ol className="pl-5">
                   {
                    cart.map(n => <li className='list-decimal' key={n.id}>{n.name}</li>)
                   }
                </ol>
            </div>
        </div>
        <div className="divider"></div>
        <div>Total Credit Hour : {credit}</div>
        <div className="divider"></div>
        <div>
            Total Price : {price} USD
        </div>
    </div>
    );
};


Cart.propTypes = {
    cart: PropTypes.array.isRequired, 
    credit: PropTypes.number,
    price: PropTypes.number
}
export default Cart;