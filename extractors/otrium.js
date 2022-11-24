import fetch from 'node-fetch';
import querystring from 'querystring';
import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



(async () => {

  let items = [];

  const encodeBody = (bodyObject) => {
    bodyObject.requests.forEach((el, index) => {
      bodyObject.requests[index].params = querystring.encode(el.params)
    });
    return JSON.stringify(bodyObject);
  }

  let promises = [];
  
  let response = await fetch(`https://www.otrium.nl/api/search/config`)
  let searchData = await response.json()

  for(var i = 1; i <= 95; i++) {

    let body = JSON.parse("{\"requests\":[{\"indexName\":\"nl_products\",\"params\":\"highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&maxValuesPerFacet=1000&hitsPerPage=1000&ruleContexts=%5B%22react_web_shop%22%2C%22category_plp%22%5D&analyticsTags=%5B%22react_web_shop%22%2C%22women%22%5D&filters=genders%3Awomen%20AND%20brand.is_private_sale%3Afalse%20AND%20is_deleted%3A%22false%22%20AND%20brand.designer_only%3Afalse&clickAnalytics=true&userToken=3538914&page=1&facets=%5B%22*%22%5D&tagFilters=&facetFilters=%5B%5B%22categories.meta%3A14096%7C%7CKleding%7C%7Ckleding%7C%7C14100%7C%7Cwomen%22%5D%5D\"},{\"indexName\":\"nl_products\",\"params\":\"highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&maxValuesPerFacet=1000&hitsPerPage=1&ruleContexts=%5B%22react_web_shop%22%2C%22category_plp%22%5D&analyticsTags=%5B%22react_web_shop%22%2C%22women%22%5D&filters=genders%3Awomen%20AND%20brand.is_private_sale%3Afalse%20AND%20is_deleted%3A%22false%22%20AND%20brand.designer_only%3Afalse&clickAnalytics=false&userToken=3538914&page=0&attributesToRetrieve=%5B%5D&attributesToHighlight=%5B%5D&attributesToSnippet=%5B%5D&tagFilters=&analytics=false&facets=categories.meta\"}]}");
    body.requests.forEach((el, index) => {
      body.requests[index].params = querystring.parse(el.params);
    })

    delete body.requests[0].params.facetFilters;
    body.requests[0].params.filters = 'brand.is_private_sale:false AND is_deleted:"false" AND brand.designer_only:false'

    body.requests[0].params.page = i.toString()

    let queryParams = querystring.parse('x-algolia-agent=Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)%3B%20JS%20Helper%20(3.6.2)%3B%20react%20(16.10.1)%3B%20react-instantsearch%20(6.18.0)&x-algolia-api-key=NmY1MzUxNzE2ZTRlMWNlOTE3YTRmYjhlNTFkMTVhNDdmZjU4N2Y4NjkwMTk0MThhM2JlZGExNmZlOTg2MGY1N3ZhbGlkVW50aWw9MTY1OTc3Nzg2OA%3D%3D&x-algolia-application-id=25FPBEQAN7');
    queryParams['x-algolia-api-key'] = searchData.data.searchConfigurationsWeb.search_api_key
    let query = querystring.encode(queryParams);


  let result =
  fetch("https://25fpbeqan7-dsn.algolia.net/1/indexes/*/queries?" + query, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-NL,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,nl;q=0.6",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "Referer": "https://www.otrium.nl/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": encodeBody(body),
    "method": "POST"
  }).then((response) => response.json()).then((data) => {
    return data.results[0].hits;
  });

  promises.push(result);

  }

  Promise.allSettled(promises).then(results => {
    let catalog = results.filter(el => el.status == 'fulfilled').map(el => el.value).flat();

    for(var i = 0; i < catalog.length; i++) {
      delete catalog[i]['_highlightResult'];
    }

    fs.writeFileSync(path.join(__dirname, '..', 'data', 'otrium.json'), JSON.stringify(catalog))
  })

})()
