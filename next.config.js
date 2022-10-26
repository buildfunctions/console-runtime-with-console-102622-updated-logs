module.exports = {
  async redirects() {
    return [
      {
        source: '/billing',
        destination: '/billing/dashboard',
        permanent: true
      },
      {
        source: '/metrics',
        destination: '/metrics/dashboard',
        permanent: true
      },
      {
        source: '/console/new',
        destination: '/new',
        permanent: true
      },
    ];
  },
};
