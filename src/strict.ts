interface MyDocument {
  title: string;
  content: string;
  author: string;
}

type Draft<OBJ> = {
  readonly [KEY in keyof OBJ]?: OBJ[KEY];
};

let myDraft: MyDocument = {
  title: "Russel viper",
  author: "Mr. Anaconda",
  content: "Adventurous Novel",
};

// ekhane object er kono property er value ee optional hocche na. -- =====support a jete hobe=====06/05/2026

console.log("before");
console.log(myDraft);

myDraft.title = "mango";

console.log("after");
console.log(myDraft);
