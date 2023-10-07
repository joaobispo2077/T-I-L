const text = "Some text explaining something";

const slugfy = (text) => {
  return text.toLowerCase()
    .split(' ').join('-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/([^\w]+|\s+)/g, '-')
    .replace(/\-\-+/g, '-')
    .replace(/(^-+|-+$)/, '')
    .replace(/\s/g, '-');
}

console.info(slugfy("The effects of cohesion and coupling on a software project"));
