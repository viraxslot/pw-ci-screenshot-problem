import { test, expect } from "@playwright/test";

test("graph should match screenshot (snapshot)", async ({ page }) => {
  await page.goto(
    "https://echarts.apache.org/examples/en/editor.html?c=area-pieces"
  );
  const graph = page.locator("id=chart-panel");
  await expect(graph).toBeVisible({ timeout: 10_000 });
  await expect(graph).toHaveScreenshot("graph.png", { animations: "disabled" });
});
