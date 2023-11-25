import Accordion from "./Accordion";
import { accordionData } from "./Data/Data";

const App = () => {
  return (
    <div>
      <h1>Accordion</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;