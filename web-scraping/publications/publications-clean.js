const slugify = require('slugify')
const fs = require('fs')

function cp(string) {
    return string[0].toUpperCase() + string.slice(1);
}

const format = {
    "title": "Regulation (EU) 2021/250 of the European Parliament and of the Council of 16 February 2021 amending Council Regulation (EEC) No 95/93 as regards temporary relief from the slot utilisation rules at Union airports due to the COVID-19 crisis (Text with EEA relevance)<br/>",
    "link": "https://op.europa.eu/pt/publication-detail/-/publication/71d2bcee-726d-11eb-9ac9-01aa75ed71a1/language-pt",
    "description": null,
    "pubDate": "Mon, 15 Feb 2021 23:00:00 GMT",
    "guid": "https://op.europa.eu/pt/publication-detail/-/publication/71d2bcee-726d-11eb-9ac9-01aa75ed71a1/language-pt",
    "dc:creator": "Council of the European Union,European Parliament,",
    "dc:date": "2021-02-15T23:00:00Z"
  }

const transformEntry = (publication) => {
    const creators = publication['dc:creator'] ? publication['dc:creator'].split(',').filter((e) => e.length > 0).map((e) => slugify(e)) : []

    return {
        title: publication.title,
        link: publication.link,
        description: publication.description,
        creators,
        date: publication["dc:date"]
    }
}

fs.readFile('./publications-mep-2021.json', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const jsonData = JSON.parse(data).rss['channel'].item

  const finalData = jsonData.map((publication) => transformEntry(publication))
   
  fs.writeFile('publications-2021.json', JSON.stringify(finalData), function (err) {
    if (err) return console.log(err);
    console.log('Wrote to file');
  });  

})

