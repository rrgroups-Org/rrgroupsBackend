module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '553941c7c008f74ce730c703c261b753'),
  },
});
