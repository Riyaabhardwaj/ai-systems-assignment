function fakePipeline(){

try{

const random=Math.random();

if(random<0.33){

throw new Error("Timeout");

}

if(random<0.66){

JSON.parse("{wrong json");

}

return "Pipeline Success";

}

catch(err){

console.log("Debug Log:",err.message);

}

}

fakePipeline();