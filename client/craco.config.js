module.exports = {
  babel: {
    plugins: [["relay"]],
  },
  webpack: {
    configure: {
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
};
