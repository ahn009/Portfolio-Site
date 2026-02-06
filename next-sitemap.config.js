module.exports = {
  siteUrl: 'https://muhammad-awais-portfolio.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  
  // Sitemap configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/.next'],
      },
    ],
    additionalSitemaps: [
      'https://muhammad-awais-portfolio.vercel.app/sitemap.xml',
    ],
  },
  
  // Custom transformation for URLs
  transform: async (config, path) => {
    // Ignore API routes and other non-public routes
    if (path.includes('/api')) {
      return null;
    }

    return {
      loc: path,
      changefreq: getChangeFreq(path),
      priority: getPriority(path),
      lastmod: new Date().toISOString(),
    };
  },
};

// Function to set change frequency based on path
function getChangeFreq(path) {
  if (path === '/') return 'weekly';
  if (path.includes('/blog')) return 'weekly';
  if (path.includes('/projects')) return 'monthly';
  if (path.includes('/services')) return 'monthly';
  return 'monthly';
}

// Function to set priority based on path
function getPriority(path) {
  if (path === '/') return 1.0;
  if (path === '/projects') return 0.9;
  if (path === '/about') return 0.8;
  if (path === '/experience') return 0.8;
  if (path.includes('/services')) return 0.7;
  if (path.includes('/blog')) return 0.7;
  return 0.6;
}
