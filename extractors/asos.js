import fetch from 'node-fetch';

(async () => {
  let offset = 0;
  let pageCount = 1;
  let itemsPerPage = 200;
  
  for(let i = 0; i < pageCount; i++) {
    offset = i * itemsPerPage;
    let response = await fetch("https://www.asos.com/api/product/search/v2/categories/8799?base_colour=1&channel=mobile-web&country=BE&currency=EUR&keyStoreDataversion=dup0qtf-35&lang=en-GB&limit=200&offset="+offset+"&rowlength=2&store=ROE", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-NL,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,nl;q=0.6",
        "asos-c-name": "asos-web-product-listing-page",
        "asos-c-plat": "web",
        "asos-c-ver": "1.2.0-5cfb7c492e36-5217",
        "asos-cid": "b6ba3a08-06f5-463c-9ff3-b348d7cd1f4a",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "bm_sz=4C1795EE181CD92A4A0F7127581E8CFC~YAAQDhjdWJYOzJ9/AQAAePq/7g+BY/rzqs3Z48Fz6oa3Vy4UQWGNmPqMkqSN65TYkeemuTrp9lDA9L447+LaxjRgb3gl9jl33q02eVm/6B1g1X33f90lwthDnFAbUu5Cw7H3DfwFCQbj0dZ5y1gP0JTuv0/V/ToEGVQLBcDJSKgWJUzzI4a/zvEjNp8hxn5N/G6obc5p7/tD8i8OwCqui9ee1eBcoVejErjnD83D4UfLc5D2IRz7UDLG1KmV/QJO+CrDZlOBHBWIi4QGJtFubjRaoWy4B1AWwmjCP1RgF8j+~3224643~4604741; siteChromeVersion=au=11&com=11&de=11&dk=11&es=11&fr=11&it=11&nl=11&pl=11&roe=11&row=11&ru=11&se=11&us=11; keyStoreDataversion=dup0qtf-35; asosAffiliate=affiliateId=17294; browseCountry=BE; browseCurrency=EUR; browseLanguage=en-GB; browseSizeSchema=EU; storeCode=ROE; currency=19; floor=1000; s_ecid=MCMID%7C45623814878623259940502147548841821527; featuresId=1bc4f43f-1157-41e1-8367-cb1589020b37; ak_bmsc=AC305DF4140EDB44962D39762D46F945~000000000000000000000000000000~YAAQDhjdWKoOzJ9/AQAA8v2/7g925sbN5n59g6lWIfPbuEn7/5GdgUXiBOuL6lOnQVMHCrbgU7DcczMX/SGCJ89FNMTJGwNIsd7osF1JhUdTs1iMxjg2SswXKbC+9AlB7BRnxU4CqS0xHKv5mBtBcqfP1Vf0kdB0ywr5rat35swgr4JTgRmJ/mZQtMetFDNo4PFMEmuC4LL+pzCgM9OLfJGekIT5wPRbNWzituN2jV2cN7pfpPB8SlVc3dVZ+HA58tGeqrMYdHoLSWp+TbY2r6DbOIojRz5R/nlOuj5LUOJozF0Plmw7XJoaFsVgKORGd3lHrykl7V78UBwrxCSTmQ0Rl3JQNQY/nsKe/Xx+VV+crA/ULhIxTksmp1m/hgOszH2oCOtZpg==; asos-b-sdv629=dup0qtf-35; _s_fpv=true; asos=PreferredSite=&currencyid=19&currencylabel=EUR&topcatid=1000&customerguid=2f4e40961d7d4dc08493205df7c41585; _cs_c=0; _gid=GA1.2.334140838.1648978036; FPID=FPID2.2.0r%2B023nvOgIWJUOF1OF5FrJWDXfWnWguONJq%2FmWT13M%3D.1648978036; OptanonAlertBoxClosed=2022-04-03T09:27:16.230Z; _gcl_au=1.1.493119940.1648978036; bt_stdstatus=NOTSTUDENT; FPLC=GRQAaUhX2efnXEUUx03OnD7Tqs9Iby7hghKdYmQmxj6P09UeeUGHS946LosujkAiI0ujZTU8Pk8jEbVREXZpAR1E7c9Nm9BtpniCfwlOp7WYhsPyCrAAsVMTyP2e3g%3D%3D; FPAU=1.1.493119940.1648978036; fita.sid.asos=egqzGo_djv4BCrTiwdS_YOOtiC-h-hGC; geocountry=NL; OptanonConsent=isIABGlobal=false&datestamp=Sun+Apr+03+2022+11%3A39%3A35+GMT%2B0200+(Central+European+Summer+Time)&version=6.30.0&hosts=&consentId=1dec8361-861e-40b3-a6ad-f415479f927b&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0004%3A1&geolocation=NL%3BNH&AwaitingReconsent=false; bm_mi=6DAF7AEEEC1C577486080F723147034B~G7NICOuiwLQDicxEV5gXvRgWjIgt9ZUBGmxRcJR3NSJO3Y5AR2Avn3oXulSEgYW7UgO3TRW4cXyDaNVbKNeC2/IUQbhtlUZaBRSCQd+qpTBt/FLWsJBFsXSiRKEx73zL81yrcJ5OskrXhswk8SBlqDDXDRn2BWkrEMDMB35A6ip8nLD6gkPVLc8M0n8ndr0y+ZfvzSH9yG8y4BsbqlnuxT9Suw0RA5mHF7XdGlCyZ0XKgVR2xV5Ko2glB9mNvrexW+Z1PCq0CX7Ay9o7gS8qARlw3C6NnPOHdV2tHmxSXEUhCb54jDT4MsOf8MmryNaE; s_pers=%20s_vnum%3D1651356000527%2526vn%253D1%7C1651356000527%3B%20gpv_p6%3D%2520%7C1648979833936%3B%20eVar225%3D3%7C1648980575285%3B%20visitCount%3D1%7C1648980575287%3B%20s_invisit%3Dtrue%7C1648980576111%3B%20s_nr%3D1648978776113-New%7C1680514776113%3B%20gpv_e47%3Dno%2520value%7C1648980576114%3B%20gpv_p10%3Ddesktop%2520roe%257Ccategory%2520page%257C8799%2520refined%7C1648980576116%3B; AMCV_C0137F6A52DEAFCC0A490D4C%40AdobeOrg=-1303530583%7CMCMID%7C45623814878623259940502147548841821527%7CMCAAMLH-1649583576%7C6%7CMCAAMB-1649583576%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1648985976s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C3.3.0%7CMCCIDH%7C0; AMCVS_C0137F6A52DEAFCC0A490D4C%40AdobeOrg=1; s_cc=true; asos-perx=2f4e40961d7d4dc08493205df7c41585||4bcd1a408f2c456eb16b1ccf2f9a9777; stc-welcome-message=cappedPageCount=2&resolvedDeliveryCountry=NL; _cs_id=ab0b70b1-f4d0-aea6-c351-2c309ce0a58e.1648978035.1.1648978776.1648978035.1628755191.1683142035130; _cs_s=3.0.0.1648980576574; _gat_UA-1005942-121=1; _ga=GA1.2.62641325.1648978036; __gads=ID=ff1dd024cc7ef7f4:T=1648978778:S=ALNI_MbHsqAPviZQ1fSmLaDRhzox2udjKg; plp_columsCount=twoColumns; _abck=CBC29E823FE603264AAA9B361EC2AC23~0~YAAQDhjdWHiXzJ9/AQAAUtHL7gfPMSysqRlRIiiVU7XbKEB1/av0iIQQdXpdmNvYwn8Ez0PP9bw5hqEJCFvjkdM0nlQ8blSvYoCPdXhOvZ1DIP6k8XHiwEh4q54mNke5Yh10GTB77nQE5g9zb/6Czi85BvyWhwgDqgUNp8pZMcnrf++Jr72KpBPnARs1mvbqB/SCbkg9wO2sUGWqQoYZWZE8lAsk9uS3N59gnJ3au+VzZZXt2EhbKvgI3v2laMfQ+5Zk5gVIRm6Q5nthyusoFK5rh0xGh4h61AA2tsK3hPd4dWox/uNV/WrYtpIb+l6XyTnLgj0S69Key3dd/VstqCzShvxlPtnZPWLOoKsNQkGhE1ZjNwu4p2ErlsT8+EuKYsWQW1BmDZ00tCzLaAQCqiTLIKF4Ww==~-1~-1~-1; _ga_1JR0QCFRSY=GS1.1.1648978035.1.1.1648978809.0; RT=\"z=1&dm=asos.com&si=b8795be7-6423-4d8f-bdfa-71a8f0bbc365&ss=l1j2y1f4&sl=d&tt=95s&bcn=%2F%2F684dd328.akstat.io%2F&ld=gn31&nu=7k6dr5di&cl=gy0o\"; s_sq=asoscomprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Ddesktop%252520roe%25257Ccategory%252520page%252520pagination%25257C8799%252520page%2525204%252520refined%2526link%253DLOAD%252520MORE%2526region%253Dplp%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c",
        "Referer": "https://www.asos.com/women/dresses/cat/?cid=8799&currentpricerange=5-625&nlid=ww%7Cclothing%7Cshop%20by%20product%7Cdresses&page=5&refine=base_colour:1",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    });

    let data = await response.json();
    console.log(data);
    if(i == 0) {
      pageCount = Math.ceil(data.itemCount / itemsPerPage);
    }
  }
})();