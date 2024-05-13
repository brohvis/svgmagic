// config.js
export default {
    svgmLinks: { // These links are used when the 'href' property is set, but a link is not defined.
        appstore: 'https://www.apple.com/app-store/',
        apple: 'https://www.apple.com/',
        twitter: 'https://twitter.com/',
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
        // Add more default links as needed
      },
    svgmSets: { // Quickly iterate sets of svg's to display next to eachother, great for logo clouds, social media icons, and more.
      User1: ['facebook', 'twitter'],
      User1Social: ['facebook', 'twitter', 'instagram', 'apple'],
      GuestAuthor1: ['facebook', 'twitter', 'instagram', 'apple'],
      Footer: ['facebook', 'twitter', 'instagram'],
      // Add more sets as needed
    },
    svgmSetLinks: { // svgmSets can automatically inherit SetLinks when they are invoked, just like svgmLinks, but for sets. 
      User1: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com/',
      },
      Footer: {
        facebook: 'https://facebook.com/help',
        instagram: 'https://instagram.com/help'
        // Here I omitted 'twitter', and thus, the svgmLink for 'twitter' will be used as a fallback automatically.
        // In order to override that behavior set the 'property' to false which will disable the link for that icon entirely.
        // Chat, here is where we have to figure out a property to set 'twitter' to. twitter: 'false' would probably cause a typing discrepancy.
        // So, can we use undefined or null or anything here to have an example?
      },
      // Add more links for other sets as needed
    },
  }
  