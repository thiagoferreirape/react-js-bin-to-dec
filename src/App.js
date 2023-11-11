import Calc from "./components/Calc";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-purple-400 to-white">
        <div className="grid h-screen place-items-center">
          <Calc></Calc>
        </div>
      </div>
    </>
  );
}
export default App;
