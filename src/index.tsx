import { render as reactRender } from "react-dom";
import { App } from "./components/app";
import { appRoot } from "./core/constants";
import "./core/firebase/analytics";

document.body.insertAdjacentElement("afterbegin", appRoot);

reactRender(<App />, appRoot);
