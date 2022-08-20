import fetch from 'node-fetch';
import querystring from 'querystring';




(async () => {
    const query = "category%5B%5D=19__DRESSES__4__CLOTHING&color%5B%5D=red&pageContext=global_products&tagId=1&baseClassification=clothing&collapseData=category%2Cbrand%2Csize%2Cprice%2Ccolor%2Cf_1_8461%2Cf_1_8456%2Cf_1_8457&when=0&page=2&OSZ_VSH=true"

    const queryDecode = decodeURI(query);
    const queryObj = querystring.parse(query)

    const response = await fetch("https://www.fashiondays.ro/products/filter-products?"+query, {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "en-NL,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,nl;q=0.6",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "PHPSESSID=3o19ajk8oofmg1kjjutriekpuf; device_view=full; _gcl_au=1.1.276478844.1649503480; G_ENABLED_IDPS=google; _hjFirstSeen=1; _hjIncludedInSessionSample=0; _hjSession_2712830=eyJpZCI6IjRkNzI2NzhlLTlhODgtNDlmMy04MjRlLTUyYjI3ZGNlZDVkZiIsImNyZWF0ZWQiOjE2NDk1MDM0ODA0MjksImluU2FtcGxlIjpmYWxzZX0=; _fbp=fb.1.1649503480440.1365947766; _ga=GA1.2.475144662.1649503480; _gid=GA1.2.762729674.1649503480; _dc_gtm_UA-52020640-1=1; _pin_unauth=dWlkPU5HSTRaREpoTmpRdFlqVTFZUzAwWkRsbExUaGhPRE10WkdKbVpqa3paV1kyTkRsag; _clck=6tfwy0|1|f0h|0; has_accepted=8; __insp_wid=1906126906; __insp_nv=true; __insp_targlpu=aHR0cHM6Ly93d3cuZmFzaGlvbmRheXMucm8v; __insp_targlpt=Q29sZWN0aWkgZGUgbW9kYSBwZW50cnUgZmVtZWk%3D; __insp_norec_sess=true; _hjSessionUser_2712830=eyJpZCI6IjEwNzljZGFhLWJiODUtNTU5MS04MzNkLTFhYjc5ZTdiNDQzMCIsImNyZWF0ZWQiOjE2NDk1MDM0ODA0MTYsImV4aXN0aW5nIjp0cnVlfQ==; MgidSensorNVis=4; MgidSensorHref=https://www.fashiondays.ro/g/femei-/imbracaminte-rochii; _uetsid=a5a32d50b7f711ec89b217d0bb06ca18; _uetvid=e00a3bd0241f11eca5b775aeecfdaf71; cto_bundle=3siNYF9iUkZxMDN6cXZ6b2t2RFREUVBCRWVNcWNYVlNMcGk5dVZ3aVltYkUlMkJzOTdGUSUyRnVuQTVyJTJGVHN4YnlDdVJoJTJGUmd6WmNicGlEdXcwQnBzN1RsNWlWR3hpSWpnVWxYTmRCNURqWVg0QXZMSEYlMkJnckdCUnpPT0k1d0ZLbHNVaTFEZGVtOVZrbTQ2azlqVkVCUXRSWTI5Z3BnJTNEJTNE; _derived_epik=dj0yJnU9QlVSX28xSk5vc1ZfYzZyb0ttdU9Ja0c3VW9JVmVSZW8mbj1Ed2VpR2lzTVk5UkJpOTc4QkRiS3VRJm09MSZ0PUFBQUFBR0pSYlFNJnJtPTEmcnQ9QUFBQUFHSlJiUU0; new_customer=1; __insp_slim=1649503492556; _gat_UA-52020640-1=1; _clsk=80qu1p|1649503497851|4|1|b.clarity.ms/collect",
            "Referer": "https://www.fashiondays.ro/g/femei-/imbracaminte-rochii/rosu",
            "Referrer-Policy": "no-referrer-when-downgrade"
        },
        "body": null,
        "method": "GET"
    });

    const data = await response.json()
    console.log(data)
})()
