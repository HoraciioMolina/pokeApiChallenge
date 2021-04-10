import { render } from "@testing-library/react";
import { withRouter } from "react-router-dom";
import App from "./App";

test("renders learn react link", () => {
  render(withRouter(<App />));
});
