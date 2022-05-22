import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "../../redux/counterSlice";
import './Counter.scss';
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    console.log(addValue);
    const resetAll = ()=>{
        setIncrementAmount(0);
        dispatch(reset());
    }
    return (
        <section>
            <div className="counter">
                <p>{count}</p>
                <input 
                    type="text" 
                    value={incrementAmount} 
                    onChange={(e)=>setIncrementAmount(e.target.value)} 
                    style={{display:'block', width:'50%', margin:'auto'}}
                />
                <button onClick={()=>dispatch(increment())}>+</button>
                <button onClick={()=>dispatch(decrement())}>-</button>
                <button className="reset" onClick={resetAll}>Reset</button>
                <button className="increment-by-amount" onClick={()=>dispatch(incrementByAmount(addValue))}>Increment By Amount</button>
            </div>
        </section> 
     );
}
 
export default Counter;