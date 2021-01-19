exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        services: allStrapiMakeupServices {
          edges {
            node {
              name
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create service pages.
  const services = result.data.services.edges;

  const servicesTemplate = require.resolve('./src/templates/services.js');

  services.forEach((service, index) => {
    createPage({
      path: `/services/${service.node.name}`,
      component: servicesTemplate,
      context: {
        name: service.node.name,
      },
    });
  });
};