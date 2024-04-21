function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
  <lastmod>${new Date()}</lastmod>
  </url>
</urlset>
 `;
}

export async function getServerSideProps({ res }) {

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {   };
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export default SiteMap;