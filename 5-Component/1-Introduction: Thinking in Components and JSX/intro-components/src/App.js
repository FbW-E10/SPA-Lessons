const animals = [
  { label: "Horse!" },
  { label: "Turtle" },
  { label: "Elephan" },
  { label: "Monkey" },
  { label: "Monkey" },
];

function App() {
  // Why we need return statment in a function?
  // we Don’t need return
  const simple = () => "output-simple";
  console.log(simple());

  // we need return
  const withReturn = () => {
    return "output-withReturn";
  };
  console.log(withReturn());

  return (
    <div className="App">
      <ul>
        {animals.map((item, index) => {
          return (
            <li id="myId" key={index}>
              <span>
                {" "}
                {item.label} - {index}{" "}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
