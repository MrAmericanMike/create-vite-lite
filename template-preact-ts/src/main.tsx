import { render } from "preact";
import App from "./App.tsx";
import "./css/global.css";

render(<App />, document.getElementById("app") as HTMLElement);
