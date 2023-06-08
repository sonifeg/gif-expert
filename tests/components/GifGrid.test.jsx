import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("test in GifGrid", () => {
  const category = "saint seiya";

  test("should show loading", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid catefory={category} />);
    expect(screen.getByText("Loading..."));
  });

  test("should show items when useFetchGifs loads", () => {
    const gifs = [
      {
        id: "itsMeMario",
        title: "doctor",
        url: "https://doctormario/mario.jpg",
      },
      {
        id: "itsMeLuigi",
        title: "master",
        url: "https://doctormario/luigi.jpg",
      }
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GifGrid catefory={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
