const promiseExample = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('Hello') }, 3000);
  });
};

promiseExample()
  .then((res) => res + 'You')
  .then((res) => console.log('I am sorry'))
  .catch((e) => console.log('JS IS A MESS ANYWAYS'));
console.log('hi');