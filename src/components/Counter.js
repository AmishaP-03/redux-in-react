import { useDispatch, useSelector } from 'react-redux'; // custom hooks provided by react-redux
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {};

  /**
   * Function called by react-redux. Current state value is passed to it and we make it return the counter value from the state.
   * 
   * When we use this function, react-redux will automatically set up a subscription to redux store for this component. Thus, this
   * component will be updated/re-executed i.e it will receive the latest value of the store whenever the counter state changes.
   * 
   * When this component is unmounted from the DOM, react-redux will automatically clear this subscription for us
   */
  const counter = useSelector(state => state.counter);

  /**
   * Function which will dispatch our action to the redux store
   */
  const dispatchFunction = useDispatch();

  function handleIncrement() {
    dispatchFunction({type: "INCREMENT"});
  }

  function handleDecrement() {
    dispatchFunction({type: "DECREMENT"});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
