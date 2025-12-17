import { useState } from 'react';

function Calculator() {
  // State for inputs
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('Add');
  
  // State for the list of results
  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) return; // Basic validation

    let currentResult = 0;
    if (operation === 'Add') currentResult = n1 + n2;
    if (operation === 'Subtract') currentResult = n1 - n2;
    if (operation === 'Multiply') currentResult = n1 * n2;

    // Append the new result to the existing array
    setResults([...results, currentResult]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Basic Calculator</h2>
      
      {/* Input Boxes */}
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Number 1" 
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Number 2" 
      />

      {/* Dropdown */}
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="Add">Add</option>
        <option value="Subtract">Subtract</option>
        <option value="Multiply">Multiply</option>
      </select>

      {/* Button */}
      <button onClick={handleCalculate}>Perform Action</button>

      {/* Results List */}
      <h3>Results History:</h3>
      <ul>
        {results.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calculator;