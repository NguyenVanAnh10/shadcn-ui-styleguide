// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {}
// import "./global.css?modules=false";
import "./index.css";

// You can also export React components from this file and import them into your microfrontends
export { default as Button } from "./button.component";
export { Button as SHButton } from "./components/ui/button";
export { Calendar } from "./components/ui/calendar";
