import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Little Lemon navigation", () => {
  render(<App />);

  const homeLink = screen.getByText("Home");
  const aboutLink = screen.getByText("About");
  const menuLink = screen.getByText("Menu");
  const reservationsLink = screen.getByText("Reservations");

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(menuLink).toBeInTheDocument();
  expect(reservationsLink).toBeInTheDocument();
});