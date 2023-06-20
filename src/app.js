let pronoun = ["the", "our", "my"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".es", ".com"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < domain.length; l++)
        console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);
    }
  }
}
