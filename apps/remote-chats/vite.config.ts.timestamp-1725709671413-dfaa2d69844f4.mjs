// vite.config.ts
import vue from "file:///D:/Work/web/teacher-frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { fileURLToPath, URL } from "node:url";
import { ElementPlusResolver } from "file:///D:/Work/web/teacher-frontend/node_modules/unplugin-vue-components/dist/resolvers.js";
import Components from "file:///D:/Work/web/teacher-frontend/node_modules/unplugin-vue-components/dist/vite.js";
import { defineConfig, loadEnv } from "file:///D:/Work/web/teacher-frontend/node_modules/vite/dist/node/index.js";
import vuetify from "file:///D:/Work/web/teacher-frontend/node_modules/vite-plugin-vuetify/dist/index.mjs";
import svgLoader from "file:///D:/Work/web/teacher-frontend/node_modules/vite-svg-loader/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/Work/web/teacher-frontend/vite.config.ts";
var componentsConfig = Components({
  dirs: ["src/shared/ui", "src/entities", "src/features", "src/widgets/", "src/pages", "src/apps"],
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
  resolvers: [ElementPlusResolver()],
  directoryAsNamespace: false,
  extensions: ["vue"]
});
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      vue(),
      svgLoader(),
      vuetify({
        autoImport: true,
        styles: { configFile: "./src/apps/styles/_variables.scss" }
      }),
      componentsConfig
    ],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: true
        }
      }
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
        "#apps": fileURLToPath(new URL("./src/apps", __vite_injected_original_import_meta_url)),
        "#pages": fileURLToPath(new URL("./src/pages", __vite_injected_original_import_meta_url)),
        "#widgets": fileURLToPath(new URL("./src/widgets", __vite_injected_original_import_meta_url)),
        "#features": fileURLToPath(new URL("./src/features", __vite_injected_original_import_meta_url)),
        "#entities": fileURLToPath(new URL("./src/entities", __vite_injected_original_import_meta_url)),
        "#shared": fileURLToPath(new URL("./src/shared", __vite_injected_original_import_meta_url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./src/apps/styles/additionals" as *;'
        }
      }
    },
    optimizeDeps: {
      exclude: ["vuetify"],
      entries: ["./src/**/*.vue"]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXb3JrXFxcXHdlYlxcXFx0ZWFjaGVyLWZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxXb3JrXFxcXHdlYlxcXFx0ZWFjaGVyLWZyb250ZW5kXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Xb3JrL3dlYi90ZWFjaGVyLWZyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWV0aWZ5IGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZXRpZnknXG5pbXBvcnQgc3ZnTG9hZGVyIGZyb20gJ3ZpdGUtc3ZnLWxvYWRlcidcblxuY29uc3QgY29tcG9uZW50c0NvbmZpZyA9IENvbXBvbmVudHMoe1xuICBkaXJzOiBbJ3NyYy9zaGFyZWQvdWknLCAnc3JjL2VudGl0aWVzJywgJ3NyYy9mZWF0dXJlcycsICdzcmMvd2lkZ2V0cy8nLCAnc3JjL3BhZ2VzJywgJ3NyYy9hcHBzJ10sXG4gIGV4Y2x1ZGU6IFsvW1xcXFwvXW5vZGVfbW9kdWxlc1tcXFxcL10vLCAvW1xcXFwvXVxcLmdpdFtcXFxcL10vXSxcbiAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgZGlyZWN0b3J5QXNOYW1lc3BhY2U6IGZhbHNlLFxuICBleHRlbnNpb25zOiBbJ3Z1ZSddLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksICcnKSBhcyBJbXBvcnRNZXRhRW52XG5cbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWUoKSxcbiAgICAgIHN2Z0xvYWRlcigpLFxuICAgICAgdnVldGlmeSh7XG4gICAgICAgIGF1dG9JbXBvcnQ6IHRydWUsXG4gICAgICAgIHN0eWxlczogeyBjb25maWdGaWxlOiAnLi9zcmMvYXBwcy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzJyB9LFxuICAgICAgfSksXG4gICAgICBjb21wb25lbnRzQ29uZmlnLFxuICAgIF0sXG4gICAgc2VydmVyOiB7XG4gICAgICBwcm94eToge1xuICAgICAgICAnL2FwaSc6IHtcbiAgICAgICAgICB0YXJnZXQ6IGVudi5WSVRFX0FQSV9VUkwsXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgIHNlY3VyZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICAgJyNhcHBzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9hcHBzJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICcjcGFnZXMnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL3BhZ2VzJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICcjd2lkZ2V0cyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvd2lkZ2V0cycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAnI2ZlYXR1cmVzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9mZWF0dXJlcycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAnI2VudGl0aWVzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9lbnRpdGllcycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAnI3NoYXJlZCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvc2hhcmVkJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHtcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogJ0B1c2UgXCIuL3NyYy9hcHBzL3N0eWxlcy9hZGRpdGlvbmFsc1wiIGFzICo7JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIGV4Y2x1ZGU6IFsndnVldGlmeSddLFxuICAgICAgZW50cmllczogWycuL3NyYy8qKi8qLnZ1ZSddLFxuICAgIH0sXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThRLE9BQU8sU0FBUztBQUM5UixTQUFTLGVBQWUsV0FBVztBQUNuQyxTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLGdCQUFnQjtBQUN2QixTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLGFBQWE7QUFDcEIsT0FBTyxlQUFlO0FBTmlKLElBQU0sMkNBQTJDO0FBUXhOLElBQU0sbUJBQW1CLFdBQVc7QUFBQSxFQUNsQyxNQUFNLENBQUMsaUJBQWlCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGFBQWEsVUFBVTtBQUFBLEVBQy9GLFNBQVMsQ0FBQywwQkFBMEIsaUJBQWlCO0FBQUEsRUFDckQsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsRUFDakMsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWSxDQUFDLEtBQUs7QUFDcEIsQ0FBQztBQUVELElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUUzQyxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixRQUFRLEVBQUUsWUFBWSxvQ0FBb0M7QUFBQSxNQUM1RCxDQUFDO0FBQUEsTUFDRDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLFFBQVE7QUFBQSxVQUNOLFFBQVEsSUFBSTtBQUFBLFVBQ1osY0FBYztBQUFBLFVBQ2QsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxRQUNwRCxTQUFTLGNBQWMsSUFBSSxJQUFJLGNBQWMsd0NBQWUsQ0FBQztBQUFBLFFBQzdELFVBQVUsY0FBYyxJQUFJLElBQUksZUFBZSx3Q0FBZSxDQUFDO0FBQUEsUUFDL0QsWUFBWSxjQUFjLElBQUksSUFBSSxpQkFBaUIsd0NBQWUsQ0FBQztBQUFBLFFBQ25FLGFBQWEsY0FBYyxJQUFJLElBQUksa0JBQWtCLHdDQUFlLENBQUM7QUFBQSxRQUNyRSxhQUFhLGNBQWMsSUFBSSxJQUFJLGtCQUFrQix3Q0FBZSxDQUFDO0FBQUEsUUFDckUsV0FBVyxjQUFjLElBQUksSUFBSSxnQkFBZ0Isd0NBQWUsQ0FBQztBQUFBLE1BQ25FO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFVBQ0osZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBYztBQUFBLE1BQ1osU0FBUyxDQUFDLFNBQVM7QUFBQSxNQUNuQixTQUFTLENBQUMsZ0JBQWdCO0FBQUEsSUFDNUI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
