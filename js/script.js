"use strict";

const user = {
  name: "John",
  age: 25,
  address: "Texas",
};

function showName() {
  console.log(this.name);
}

Function.prototype.myCall = function (context, ...args) {
  const ctx =
    context === null || context === undefined ? globalThis : Object(context);
  const uniqueKey = Symbol("customCall");
  ctx[uniqueKey] = this;
  const result = ctx[uniqueKey](...args);
  delete ctx[uniqueKey];
  return result;
};

showName.myCall(user);

Function.prototype.myApply = function (context, args = []) {
  const ctx =
    context === null || context === undefined ? globalThis : Object(context);
  const uniqueKey = Symbol("customApply");
  ctx[uniqueKey] = this;
  if (!Array.isArray(args) && !args.length) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  const result = ctx[uniqueKey](...args);
  delete ctx[uniqueKey];
  return result;
};

showName.myApply(user);

Function.prototype.myBind = function (context, ...args) {
  return (...callArgs) => {
    return this.myCall(context, ...args, ...callArgs);
  };
};

const newShowName = showName.myBind(user);

for (let i = 0; i < 5; i++) {
  newShowName();
}
