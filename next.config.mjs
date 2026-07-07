/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      ...(config.watchOptions ?? {}),
      ignored: ["**/.next/**", "**/.npm-cache/**", "**/node_modules/**"]
    };

    return config;
  }
};

export default nextConfig;
