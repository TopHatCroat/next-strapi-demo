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
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        version: '0.1.0',
        title: 'Strapi CMS Demo',
        description: 'Strapi CMS Demo API Documentation',
        contact: {
          name: 'TEAM',
          email: 'contact-email@something.io',
          url: 'mywebsite.io'
        },
        license: {
          name: 'MIT',
          url: 'https://opensource.org/license/mit/'
        },
      },
      'x-strapi-config': {
        // Leave empty to ignore plugins during generation
        plugins: [ 'upload', 'users-permissions'],
        path: '/documentation',
      },
      servers: [{ url: 'http://localhost:1337/api', description: 'Development server' }],
      externalDocs: {
        description: 'Find out more',
        url: 'https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html'
      },
      security: [ { bearerAuth: [] } ]
    }
  }
});
