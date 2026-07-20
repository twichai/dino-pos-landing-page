module.exports = {
  apps: [
    {
      name: "dino-pos-landing-page",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3003",
      env: {
        NODE_ENV: "production",
        PORT: 3003,
      },
    },
  ],
};
