import {
  decrement,
  increment,
  incrementByFive,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";

const App = () => {
  const count = useAppSelector((state: RootState) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Counter</h1>
        <div className="flex justify-center">
          <button
            onClick={() => dispatch(increment())}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
          >
            +
          </button>
          <button
            onClick={() => dispatch(incrementByFive(5))}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
          >
            5
          </button>
          <span className="bg-gray-200 text-gray-800 font-bold py-2 px-4">
            {count}
          </span>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
