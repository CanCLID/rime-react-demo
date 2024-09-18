import react from "@vitejs/plugin-react-swc";
import { viteStaticCopy } from "vite-plugin-static-copy";

import type { UserConfig } from "vite";

export default {
	plugins: [
		react(),
		viteStaticCopy({
			targets: [
				{
					src: "node_modules/rime-react/dist/rime.*",
					dest: "assets",
				},
			],
		}),
	],
	build: {
		target: "esnext",
	},
} satisfies UserConfig;
