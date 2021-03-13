const fs = require('fs')

function cp(string) {
    return string[0].toUpperCase() + string.slice(1);
}

fs.readFile('./db.json', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const jsonData = JSON.parse(data)

  const finalNodes = jsonData.nodes.map((node) => {
    return {
        ...node,
        text: node.text.split(' ').map((s) => cp(s.toLowerCase())).join(' ')
    }
  })

  const final = {
      edges: jsonData.edges,
      nodes: finalNodes,
  }

  fs.writeFile('db-2.json', JSON.stringify(final), function (err) {
    if (err) return console.log(err);
    console.log('Wrote to file');
  });  

})

