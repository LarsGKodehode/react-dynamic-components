// Content
import mainContent from "./data/mainContent";

// Components
import ComponentWithProps from "./components/ComponentWithProps";
import ComponentWithChildProps from "./components/ComponentWithChildProps";

function App() {
  return (
    <div>
      <h1>{mainContent.title}</h1>

      <img src="someFilePath" alt="Image description"></img>

      <ComponentWithProps
        title="Some other title"
        whateverYouWant="Some more props"
        someArray={["array1", "array2"]}
      />

      <a href="www.example.com">Home</a>

      <ComponentWithChildProps>
        <h3>Some element</h3>
        <p>Some paragraph</p>
      </ComponentWithChildProps>

    </div>
  );
}

export default App;