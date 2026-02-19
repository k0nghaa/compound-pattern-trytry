import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: [".storybook/vitest.setup.ts"],
    globals: true,
  },
});
