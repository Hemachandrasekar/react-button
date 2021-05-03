import {Sidebar} from "./component/Sidebar";
import Playground from "./component/Playground";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <Playground />
    </div>
  );
}
