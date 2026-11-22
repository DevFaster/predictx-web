import { render, screen } from "@testing-library/react";
import { GamingButton } from "@/components/shared/gaming-button";
import { describe, it, expect } from "vitest";

describe("GamingButton", () => {
  it("renders success variant with correct CSS variable for color", () => {
    render(
      <GamingButton variant="success" onClick={() => {}}>
        Success Button
      </GamingButton>,
    );

    const button = screen.getByRole("button", { name: /Success Button/i });
    expect(button).toBeInTheDocument();

    // Check that the button uses the CSS variable --accent-green for text color
    // The success variant should use var(--accent-green) which resolves to #39ff14
    const styles = window.getComputedStyle(button);
    expect(styles.color).toBe("rgb(57, 255, 20)"); // #39ff14 in rgb
  });

  it("renders success variant with correct border color using CSS variable", () => {
    render(
      <GamingButton variant="success" onClick={() => {}}>
        Success Button
      </GamingButton>,
    );

    const button = screen.getByRole("button", { name: /Success Button/i });
    const styles = window.getComputedStyle(button);

    // Border should use the success variant's border color (rgba with --accent-green channels)
    expect(styles.borderColor).toContain("57, 255, 20");
  });

  it("renders primary variant with cyan color", () => {
    render(
      <GamingButton variant="primary" onClick={() => {}}>
        Primary Button
      </GamingButton>,
    );

    const button = screen.getByRole("button", { name: /Primary Button/i });
    const styles = window.getComputedStyle(button);

    // Primary should use --accent-cyan (0, 217, 255)
    expect(styles.color).toBe("rgb(0, 217, 255)");
  });

  it("renders danger variant with magenta color", () => {
    render(
      <GamingButton variant="danger" onClick={() => {}}>
        Danger Button
      </GamingButton>,
    );

    const button = screen.getByRole("button", { name: /Danger Button/i });
    const styles = window.getComputedStyle(button);

    // Danger should use --accent-magenta (255, 0, 110)
    expect(styles.color).toBe("rgb(255, 0, 110)");
  });

  it("applies loading state correctly", () => {
    render(
      <GamingButton variant="success" loading onClick={() => {}}>
        Loading Button
      </GamingButton>,
    );

    const button = screen.getByRole("button", { name: /Loading Button/i });
    expect(button).toBeDisabled();
    expect(screen.getByText(/Processing.../i)).toBeInTheDocument();
  });

  it("applies disabled state correctly", () => {
    render(
      <GamingButton variant="success" disabled onClick={() => {}}>
        Disabled Button
      </GamingButton>,
    );

    const button = screen.getByRole("button", { name: /Disabled Button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveStyle({ opacity: "0.5" });
  });
});