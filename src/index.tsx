import { render as reactRender } from "react-dom";
import { App } from "./components/app";
import "./core/firebase/analytics";
import { appRoot } from "./core/variable";

document.body.insertAdjacentElement("afterbegin", appRoot);

reactRender(<App />, appRoot);
