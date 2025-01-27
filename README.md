# React Native Dimensions.get('window') returns incorrect dimensions (0,0)

This repository demonstrates a common issue in React Native where `Dimensions.get('window')` returns incorrect dimensions, often (0,0), particularly during the initial render. The problem is often inconsistent and might resolve itself after a few seconds, yet it can cause significant layout problems.

The `DimensionsBug.js` file shows the buggy behavior, while `DimensionsBugSolution.js` presents a solution using `useEffect` and `Dimensions` API with proper state management to ensure accurate dimensions are used.