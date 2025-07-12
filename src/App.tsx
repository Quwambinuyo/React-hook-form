import Example3 from "./examples/Example3";
import Example1 from "./examples/Example1";
import Example2 from "./examples/Example2";
import Example4 from "./examples/Example4";

const App = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
    </div>
  );
};

export default App;
