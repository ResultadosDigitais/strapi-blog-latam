module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '08a0ff7e5b51dfcf081f9fc1ea98c03d'),
  },
});
