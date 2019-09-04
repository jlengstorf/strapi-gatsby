const events = require("./src/seedData").events
const path = require("path")

exports.createPages = ({ node, getNode, actions }) => {
  const { createPage } = actions
  const eventTemplate = path.resolve("./src/templates/event.js")

  // Create the event pages
  events.forEach((event, index) => {
    const previous = index === events.length - 1 ? null : events[index + 1]
    const next = index === 0 ? null : events[index - 1]

    createPage({
      path: event.slug,
      component: eventTemplate,
      context: {
        slug: event.slug,
        previous,
        next,
      },
    })
  })
}
