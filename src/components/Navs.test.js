// Navs.test.js

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navs from "./Navs";

test("Should return true when the active page is '/search'", () => {
  render(
    <MemoryRouter initialEntries={["/search"]}>
      <Navs />
    </MemoryRouter>,
  );

  const searchPageLink = screen.getByTestId("search-p");
  expect(searchPageLink.classList.contains("active")).toBe(true);
});
