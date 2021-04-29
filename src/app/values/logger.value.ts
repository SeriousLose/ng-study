const loggerValue = {
  logs: ['Hello', 'World'],
  log: (msg) => {
    console.warn('From values: ' + msg);
  },
  hello: () => {
    console.log('Just say hello!');
  },
};

export { loggerValue };
