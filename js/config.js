$(function() {

  CMS.init({

    // Name of your site or location of logo file, relative to root directory (img/logo.png)
//    siteName: 'My Site',
    siteName: 'tkj2016k',

    // Tagline for your site
//    siteTagline: 'Your site tagline',
    siteTagline: 'tietoKantaJarjestelmat',

    // Email address
    siteEmail: 'your_email@example.com',

    // Name
    siteAuthor: 'Your Name',

    // Navigation items
    siteNavItems: [
//      { name: 'Github', href: 'https://github.com/yourname', newWindow: false},
//      { name: 'About'}
    ],

    // Posts folder name
    postsFolder: 'posts',

    // Homepage posts snippet length
    postSnippetLength: 120,

    // Pages folder name
    pagesFolder: 'pages',

    // Order of sorting (true for newest to oldest)
    sortDateOrder: true,

    // Posts on Frontpage (blog style)
//    postsOnFrontpage: true,
    postsOnFrontpage: false,

    // Page as Frontpage (static)
//    pageAsFrontpage: '',
    pageAsFrontpage: 'about',

    // Posts/Blog on different URL
    postsOnUrl: '',

    // Site fade speed
    fadeSpeed: 50,

    // Site footer text
    //footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',
    footerText: new Date().getFullYear() + '/TiM',

    // Mode 'Github' for Github Pages, 'Server' for Self Hosted. Defaults
    // to Github
    mode: 'Github',

     // If Github mode is set, your Github username and repo name.
    githubUserSettings: {
      username: 'timedu',
      repo: 'tkj'
    },

    // If Github mode is set, choose which Github branch to get files from.
    // Defaults to Github pages branch (gh-pages)
    githubSettings: {
      branch: 'gh-pages',
      host: 'https://api.github.com'
    }

  });

  // Markdown settings
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
//    sanitize: true,
    sanitize: false,
    smartLists: true,
//    smartypants: false
    smartypants: true
  });

});
