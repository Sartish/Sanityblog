/* eslint-disable */
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ha8pf34i", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  implements: "part:@sanity/dashboard/config",
  path: "src/dashboardConfig.js",
  useCdn: true,
});
