import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("Page", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", { level: 2, name: "À propos de nous" })
  ).toBeDefined();

  expect(
    screen.getByRole("link", { level: 2, name: "À propos de nous" })
  ).toBeDefined();
});
