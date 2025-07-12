import Example1 from "./examples/Example1";
import Example2 from "./examples/Example2";

const App = () => {
  return (
    <div className=" p-6 flex flex-wrap gap-x-2 gap-y-2">
      <Example1 />
      <Example2 />
    </div>
  );
};

export default App;
