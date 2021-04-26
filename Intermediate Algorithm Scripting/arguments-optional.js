function addTogether() {
  let [primo, sec] = Object.values(arguments);
  if (typeof primo !== "number") {
    return undefined;
  }

  let secondoArg = (second) => {
    return (typeof second === "number") ? primo + second : undefined;
  }

  if (sec !== undefined) {
    return secondoArg(sec);
  } else {
    return secondoArg;
  }
}


addTogether(2, 3);