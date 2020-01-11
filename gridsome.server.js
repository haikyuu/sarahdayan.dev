const axios = require("axios");

const talks = require("./src/data/talks.json");
const interviews = require("./src/data/interviews.json");
const selectedRepositories = require("./src/data/repositories.json");

module.exports = ({ loadSource }) => {
  loadSource(async ({ addCollection }) => {
    const talkCollection = addCollection({
      typeName: "Talk"
    });

    const interviewCollection = addCollection({
      typeName: "Interview"
    });

    const repositoryCollection = addCollection({
      typeName: "Repository"
    });

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
