const getFlag = (flag, list) => {
  const flagIndex = list.findIndex(item => item === flag);

  if (flagIndex === -1) {
    return null;
  }

  const flagValue = list[flagIndex + 1];
  return flagValue;
}



module.exports = { getFlag };
