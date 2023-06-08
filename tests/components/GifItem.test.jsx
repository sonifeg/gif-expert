import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Tests in <GifItem/>", () => {
  const title = "totoro";
  const url = "https://totoro.com/totoro.jpg";

  test("should match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show url img and right alt", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("should show title in component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
