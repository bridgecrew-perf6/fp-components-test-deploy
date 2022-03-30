import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import path from "path";

export default defineConfig({
  plugins: [vue(), eslintPlugin()],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "FPComponents",
			formats: ["es", "umd", "cjs"],
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
		sourcemap: true,
	},
});