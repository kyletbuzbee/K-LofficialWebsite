import "@testing-library/jest-dom/extend-expect";
import "whatwg-fetch";

// Suppress noisy console warnings
const suppressedWarnings = [
  /Warning:.*not wrapped in act/,
  /React has been loaded more than once/
];

const originalError = console.error;
console.error = (...args) => {
  if (suppressedWarnings.some((pattern) => pattern.test(args[0]))) return;
  originalError(...args);
};

// Optional: reset global state before each test
beforeEach(() => {
  // Reset mocks, timers, or global variables here if needed
});