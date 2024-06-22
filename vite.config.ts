import { ConfigEnv, UserConfigExport, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';
import tsConfigPaths from 'vite-tsconfig-paths';

const Package = require("./package.json");

export default ( {mode}: ConfigEnv) => {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const commitHash = execSync('git rev-parse --short=8 HEAD').toString();
  const branchName = execSync('git show -s --pretty=%D HEAD').toString().split(',').pop()?.trim();

  let version: string = '';
  if(isDev) {
    version = `v${Package.version} (${branchName} - ${commitHash})`.replace(/(\r\n|\n\r)/gm, "");
    process.env.VITE_BASEURL = 'http://localhost:5173/';
  }
  else if(isProd) {
    version = `v${Package.version} (${commitHash})`.replace(/(\r\n|\n\r)/gm, "");
    process.env.VITE_BASEURL = '/frosthaven-previouslyon/';
  }

  const configOptions: UserConfigExport = {
    base: isProd ? '/frosthaven-previouslyon/' : '',
    plugins: [react(), tsConfigPaths()],
    build: {
      minify: isProd? 'esbuild' : false,
      chunkSizeWarningLimit: 2000
    }
  };

  process.env.VITE_VERSION = version;
  process.env.VITE_BUILD_DATE = new Date().toLocaleDateString();
  return defineConfig(configOptions);  
}
