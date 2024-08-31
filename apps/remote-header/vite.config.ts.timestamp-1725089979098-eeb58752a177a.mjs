// vite.config.ts
import { federation } from "file:///D:/web/practice/cookies-with-tea/social-network/app/node_modules/.pnpm/@module-federation+vite@0.2.8_@softarc+native-federation@2.0.10/node_modules/@module-federation/vite/lib/index.cjs";
import { createEsBuildAdapter } from "file:///D:/web/practice/cookies-with-tea/social-network/app/node_modules/.pnpm/@softarc+native-federation-esbuild@2.0.10/node_modules/@softarc/native-federation-esbuild/src/index.js";
import pluginVue from "file:///D:/web/practice/cookies-with-tea/social-network/app/node_modules/.pnpm/esbuild-plugin-vue-next@0.1.4_@vue+compiler-sfc@3.4.38/node_modules/esbuild-plugin-vue-next/dist/index.js";
import { defineConfig } from "file:///D:/web/practice/cookies-with-tea/social-network/app/node_modules/.pnpm/vite@5.3.1_@types+node@20.16.2_sass@1.77.8/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/web/practice/cookies-with-tea/social-network/app/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_vue@3.4.29/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\web\\practice\\cookies-with-tea\\social-network\\app\\apps\\remote-header";
var vite_config_default = defineConfig(async ({ command, mode }) => {
  return {
    server: {
      fs: {
        allow: ["."]
      }
    },
    plugins: [
      await federation({
        options: {
          workspaceRoot: __vite_injected_original_dirname,
          outputPath: "dist",
          tsConfig: "tsconfig.json",
          federationConfig: "module-federation/federation.config.cjs",
          verbose: true,
          dev: command === "serve"
        },
        adapter: createEsBuildAdapter({ plugins: [pluginVue()] })
      }),
      vue()
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3ZWJcXFxccHJhY3RpY2VcXFxcY29va2llcy13aXRoLXRlYVxcXFxzb2NpYWwtbmV0d29ya1xcXFxhcHBcXFxcYXBwc1xcXFxyZW1vdGUtaGVhZGVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3ZWJcXFxccHJhY3RpY2VcXFxcY29va2llcy13aXRoLXRlYVxcXFxzb2NpYWwtbmV0d29ya1xcXFxhcHBcXFxcYXBwc1xcXFxyZW1vdGUtaGVhZGVyXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93ZWIvcHJhY3RpY2UvY29va2llcy13aXRoLXRlYS9zb2NpYWwtbmV0d29yay9hcHAvYXBwcy9yZW1vdGUtaGVhZGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmVkZXJhdGlvbiB9IGZyb20gXCJAbW9kdWxlLWZlZGVyYXRpb24vdml0ZVwiO1xuaW1wb3J0IHsgY3JlYXRlRXNCdWlsZEFkYXB0ZXIgfSBmcm9tIFwiQHNvZnRhcmMvbmF0aXZlLWZlZGVyYXRpb24tZXNidWlsZFwiO1xuaW1wb3J0IHBsdWdpblZ1ZSBmcm9tIFwiZXNidWlsZC1wbHVnaW4tdnVlLW5leHRcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyhhc3luYyAoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGZzOiB7XG4gICAgICAgIGFsbG93OiBbXCIuXCJdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIGF3YWl0IGZlZGVyYXRpb24oe1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgd29ya3NwYWNlUm9vdDogX19kaXJuYW1lLFxuICAgICAgICAgIG91dHB1dFBhdGg6IFwiZGlzdFwiLFxuICAgICAgICAgIHRzQ29uZmlnOiBcInRzY29uZmlnLmpzb25cIixcbiAgICAgICAgICBmZWRlcmF0aW9uQ29uZmlnOiBcIm1vZHVsZS1mZWRlcmF0aW9uL2ZlZGVyYXRpb24uY29uZmlnLmNqc1wiLFxuICAgICAgICAgIHZlcmJvc2U6IHRydWUsXG4gICAgICAgICAgZGV2OiBjb21tYW5kID09PSBcInNlcnZlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGFkYXB0ZXI6IGNyZWF0ZUVzQnVpbGRBZGFwdGVyKHsgcGx1Z2luczogW3BsdWdpblZ1ZSgpXSB9KSxcbiAgICAgIH0pLFxuICAgICAgdnVlKClcbiAgICBdXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9aLFNBQVMsa0JBQWtCO0FBQy9hLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sZUFBZTtBQUN0QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFKaEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhLE9BQU8sRUFBRSxTQUFTLEtBQUssTUFBTTtBQUN2RCxTQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixJQUFJO0FBQUEsUUFDRixPQUFPLENBQUMsR0FBRztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxNQUFNLFdBQVc7QUFBQSxRQUNmLFNBQVM7QUFBQSxVQUNQLGVBQWU7QUFBQSxVQUNmLFlBQVk7QUFBQSxVQUNaLFVBQVU7QUFBQSxVQUNWLGtCQUFrQjtBQUFBLFVBQ2xCLFNBQVM7QUFBQSxVQUNULEtBQUssWUFBWTtBQUFBLFFBQ25CO0FBQUEsUUFDQSxTQUFTLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO0FBQUEsTUFDMUQsQ0FBQztBQUFBLE1BQ0QsSUFBSTtBQUFBLElBQ047QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
