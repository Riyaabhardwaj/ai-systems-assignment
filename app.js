const planner=require("./agents/planner");

const retriever=require("./agents/retriever");

const formatter=require("./agents/formatter");

const countTokens=require("./utils/tokenCounter");

const log=require("./utils/logger");

const query="Explain SEO with examples.";

log("Planner","Running");

const plan=planner(query);

const beforeTokens=countTokens(plan+retriever(query));

log("Retriever","Fetching data");

const retrieved=retriever(query);

const optimizedRetrieved=retrieved
.split("\n")
.slice(0,3)
.join("\n");

const afterTokens=countTokens(plan+optimizedRetrieved);

log("Formatter","Formatting");

const answer=formatter(optimizedRetrieved);

console.log(answer);

console.log("\n");

console.log("Before Optimization :",beforeTokens);

console.log("After Optimization :",afterTokens);

console.log("Saved :",beforeTokens-afterTokens,"tokens");