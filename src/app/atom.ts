import { atom } from "jotai";

export const placeAtom = atom("Republic of India");

export const loadingCityAtom = atom(false);



//jotai Jotai: Jotai is a state management library for React that provides a simple and flexible API for managing state in your React applications. It is similar to other state management libraries like Redux and Recoil but aims to be more lightweight and simpler to use.
// npm install jotai
// import React from 'react';
// import { atom, useAtom } from 'jotai';

// // Create an atom to hold the count state
// const countAtom = atom(0);

// // Define a component that displays the count and allows the user to increment it
// function Counter() {
//   // Use the useAtom hook to access the count state and its setter function
//   const [count, setCount] = useAtom(countAtom);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div> );}

// // Define another component that displays the count without changing it
// function DisplayCount() {
//   // Use the useAtom hook to access the count state
//   const [count] = useAtom(countAtom);

//   return <p>The current count is: {count}</p>;}

// // Define the main App component
// function App() {
//   return (
//     <div>
//       <h1>Jotai Example</h1>
//       <Counter />
//       <DisplayCount />
//     </div>);}

// export default App;

