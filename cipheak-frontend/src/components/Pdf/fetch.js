export const getData = () => fetch("http://localhost:5000/lan")
  .then(response => response.json())