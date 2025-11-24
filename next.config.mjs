<<<<<<< HEAD
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

=======
>>>>>>> c08bdbe7842b013e97483538583823bdfd7fa2e0
import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
});

// Export the final Next.js config with Nextra included
export default withNextra({
<<<<<<< HEAD
=======
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
>>>>>>> c08bdbe7842b013e97483538583823bdfd7fa2e0
  // ... Add regular Next.js options here
});
