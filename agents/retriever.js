function retriever(query){

const knowledgeBase=[

"SEO stands for Search Engine Optimization.",

"Google ranks websites using hundreds of ranking signals.",

"Good content improves ranking.",

"Backlinks improve authority.",

"Meta titles improve CTR.",

"Keyword stuffing should be avoided."

];

return knowledgeBase.join("\n");

}

module.exports=retriever;