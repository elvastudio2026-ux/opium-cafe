const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(fetchUrl(res.headers.location));
      } else {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
      }
    }).on('error', reject);
  });
}

fetchUrl('https://maps.app.goo.gl/JaKBmNpzjU2cGeC56').then(html => {
  const match = html.match(/<meta content="([^"]+)" property="og:image"/i) || html.match(/<meta property="og:image" content="([^"]+)"/i) || html.match(/<meta itemprop="image" content="([^"]+)"/i);
  if (match) {
    console.log("FOUND IMAGE:", match[1]);
  } else {
    console.log("NO IMAGE FOUND");
  }
});
