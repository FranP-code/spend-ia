/** @type {import('next').NextConfig} */

import path from 'path';

const workspace = path.resolve(process.cwd(), '../../');

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module = {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          exclude: /node_modules/,
          include: [workspace],
          test: /\.(js|jsx|ts|tsx)$/,
          use: options.defaultLoaders.babel,
        },
      ],
    };
    return config;
  },
};

export default nextConfig;
