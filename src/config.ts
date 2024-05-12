// config.ts
export default {
    defaultHrefs: {
      appstore: 'https://www.apple.com/app-store/',
      apple: 'https://www.apple.com/macbook',
      twitter: 'https://twitter.com/profile',
      instagram: 'https://instagram.com/profile',
      facebook: 'https://facebook.com/profile',
      // Add more default links as needed
      // These are only used if you set the defaultHref flag to true, inherently no link will be used at all.
    },
    iconSets: {
      User: ['facebook', 'twitter', 'instagram', 'apple'],
      User2: ['facebook', 'twitter', 'instagram', 'apple', 'discord'],
      Footer: ['facebook', 'twitter', 'instagram', 'apple', 'discord', 'twitch'],
      Test: ['facebook', 'twitter', 'instagram'],
      // Add more sets as needed
    },
    setHrefs: { // These are for setting or overriding the default links inside of a set
     User: {
        facebook: 'mailto:support@crtv.to',
        twitter: 'https://twitter.com/',
        // No value is set for instagram, so it uses the defaultHref for instagram
      },
      // Add more hrefs for other sets as needed
    },
  }