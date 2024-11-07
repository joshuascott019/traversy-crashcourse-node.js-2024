import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log(`Hello ${name}`);
}

function goodbyeHandler(name) {
  console.log(`Goodbey ${name}`);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events
myEmitter.emit('greet', 'Joshua');
myEmitter.emit('goodbye', 'Joshua');

// Error handling
myEmitter.on('error', (err) => {
  console.log('ERROR:', err);
});

// Simulate error
myEmitter.emit('error', new Error('Oops!'));
