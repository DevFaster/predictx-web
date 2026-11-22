import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { GamingButton } from "@/components/shared/gaming-button";

function renderButton(
  variant: "success" | "primary" | "danger",
  props: { loading?: boolean; disabled?: boolean } = {},
) {
  return renderToStaticMarkup(
    <GamingButton variant={variant} {...props}>
      Test Button
    </GamingButton>,
  );
}

describe("GamingButton", () => {
  it("uses the success theme tokens", () => {
    const html = renderButton("success");
    expect(html).toContain("Test Button");
    expect(html).toContain("var(--accent-green)");
    expect(html).toContain("rgba(57, 255, 20, 0.4)");
  });

  it("uses the primary cyan theme token", () => {
    expect(renderButton("primary")).toContain("var(--accent-cyan)");
  });

  it("uses the danger magenta theme token", () => {
    expect(renderButton("danger")).toContain("var(--accent-magenta)");
  });

  it("renders its loading state as disabled", () => {
    const html = renderButton("success", { loading: true });
    expect(html).toContain('disabled=""');
    expect(html).toContain("Processing...");
  });

  it("renders a disabled button", () => {
    expect(renderButton("success", { disabled: true })).toContain('disabled=""');
  });
});
