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

Function.prototype.myApply = function (context, args) {
  const ctx =
    context === null || context === undefined ? globalThis : Object(context);
  const uniqueKey = Symbol("customApply");
  ctx[uniqueKey] = this;
  let safeArgs = args;
  if (safeArgs === null || safeArgs === undefined) {
    safeArgs = [];
  }
  if (typeof safeArgs !== "object") {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  const argsArray = Array.from(safeArgs);
  const result = ctx[uniqueKey](...argsArray);
  delete ctx[uniqueKey];
  return result;
};

showName.myApply(user);

Function.prototype.myBind = function (context, ...args) {
  const originalFn = this;
  const boundFn = function (...callArgs) {
    const isConstructor = this instanceof boundFn;
    const contextToUse = isConstructor ? this : context;
    return originalFn.myApply(contextToUse, [...args, ...callArgs]);
  };

  if (originalFn.prototype) {
    boundFn.prototype = Object.create(originalFn.prototype);
  }

  return boundFn;
};

const newShowName = showName.myBind(user);

for (let i = 0; i < 5; i++) {
  newShowName();
}
