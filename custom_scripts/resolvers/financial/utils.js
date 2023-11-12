async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runSerialPromises(promises) {
  const results = [];
  for (const promise of promises) {
    results.push(await promise);
  }
  return results;
}

async function runParallelPromises(promises) {
  return await Promise.all(promises);
}

async function runSerialPromisesResolveOneKey(list, key) {
  const results = [];
  for (const item of list) {
    const result = await Promise.resolve(item[key].call());
    const newItem = { ...item, [key]: result };
    results.push(newItem);
  }
  return results;
}

async function runParallelPromisesResolveOneKey(list, key) {
  const promises = list.map(item => Promise.resolve(item[key].call()));
  const results = await Promise.all(promises);
  return results.map((result, index) => ({ ...list[index], [key]: result }));
}


module.exports = {
  runSerialPromises,
  runParallelPromises,
  runSerialPromisesResolveOneKey,
  runParallelPromisesResolveOneKey,
  delay
};
