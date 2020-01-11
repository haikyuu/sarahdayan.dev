const axios = require("axios");

const talks = require("./src/data/talks.json");
const interviews = require("./src/data/interviews.json");
const selectedRepositories = require("./src/data/repositories.json");

module.exports = function(api) {
  api.loadSource(async ({ addCollection }) => {
    const talkCollection = addCollection({
      typeName: "Talks"
    });

    const interviewCollection = addCollection({
      typeName: "Interviews"
    });

    const repositoryCollection = addCollection({
      typeName: "Repositories"
    })

    for (const item of talks) {
      talkCollection.addNode(item);
    }

    for (const item of interviews) {
      interviewCollection.addNode(item);
    }

    const repositories = await axios(
      "https://api.github.com/users/sarahdayan/repos"
    );

    for (const repository of repositories.data) {
      const item = selectedRepositories.find(
        ({ name }) => name === repository.name
      );
      if (item) {
        const enhancedRepository = {
          ...repository,
          featured: item.featured
        };
        repositoryCollection.addNode(enhancedRepository);
      }
    }
  });
};
