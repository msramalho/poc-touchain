# Touchain MVP

Touchain helps you visualize the links between people, institutions, former employers and career trajectories of civil servants. 

## The Problem

The complex organizational structure of the European Union’s institutions is an entry barrier for _young_ enthusiasts looking to engage with the EU. It also leaves room for misconceptions on the purpose of roles and agencies. 

The EU does make an effort to inform and keep its citizens up-to-date but does so through a myriad of digital platforms and sources. Ironically, the approach adds a layer of opacity to the EU’s transparency efforts, limiting the efficiency of knowledge discovery, and providing no entry-point for newcomers, namely young people who are not familiar with the organizations at play.

## What Touchain brings to the table

In the current scenario, information is scattered between multiple websites in an unintelligible format that is not accessible to the layman. In order to solve this, Touchain aggregates data from multiple data sources to provide a centralized digital platform for discovering the work and people of the EU. Users can explore the fields of work, positions, and documents produced by each person, agency or body of the union. They can also quickly visualize each institution's hierarchical structure, filtering people who work in their areas of interest and access their contacts and public social media information. 

This solution bridges the gap between people and the work of the EU institutions. Young people can consult the documents produced in their areas of interest and learn about the people and institutions that have been working in this area. Moreover, Touchain fosters the cooperation of people who work in different EU institutions and want to quickly and intuitively understand which colleagues to contact regarding a particular work area. 

You can try out our MVP [here](https://msramalho.github.io/poc-touchain/).

![example network](https://taikai.azureedge.net/KBpM_g2mVStEu3P4m8IlW2D-y02TjqookB6gkV89p6c/rs:fit:800:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy84ZDYzNjIzMC04M2ZjLTExZWItOTQ2NS0zYjQ4ZTdiNGMzZWJpbWFnZS5wbmc)
Example network of Ms Ursula Von Der Leyen hierarchy within the EU.

## How does Touchain work?

These are the main steps required to bring Touchain to life:

We build a scraping tool to retrieve information from relevant sources, both from official European Union’s websites, and other data providers (e.g., Social Media). [1]
Given the retrieved data, we design our own database, mapping the relationships between people, roles, institutions, their produced works, among others. This will be the foundation for our enhanced knowledge base
We build a web-based application to serve the final content. This is a graph-based interface to allow for both a holistic overview of the data, but also fine-grained information analysis.
To increase engagement, additional features will be added on top of the data:
Provide the user with a list of relevant people/groups given their categories of interest.
Expand the relationships shown to include people and organizations from outside the EU’s world, to provide more context from a world perspective.
To achieve this, we use the following technologies (all open-source):

* Web Scraping: [Python](https://www.python.org/) + [Scrapy](https://scrapy.org/)
* Databases: [Mongodb](https://www.mongodb.com/) (storing data) + [Neo4j](https://neo4j.com/) (storing relationships) - For our MVP, data was stored in JSON files that resulted from the web scrapping.
* Web Application: [Vue.js](https://vuejs.org/) (with [Nuxt.js](https://nuxtjs.org)) + [Cytoscape.js](https://js.cytoscape.org/) (graph visualization)


## Development instructions

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# generate and deploy to gh-pages
npm run generate:gh-pages && npm run deploy  
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
