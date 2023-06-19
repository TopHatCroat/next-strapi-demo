export default ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        sizeLimit: 40 * 1024 * 1024, // 40mb in bytes
        localServer: {
          maxage: 300000
        },
      },
    },
  },
});
