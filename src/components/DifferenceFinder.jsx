import React, { useState } from 'react';

const DifferenceFinder = () => {
  const [listA, setListA] = useState('');
  const [listB, setListB] = useState('');
  const [result, setResult] = useState(null);

  const computeDifferences = () => {
    const itemsA = listA.split('\n').map(item => item.trim());
    const itemsB = listB.split('\n').map(item => item.trim());

    const uniqueA = itemsA.filter(item => !itemsB.includes(item));
    const uniqueB = itemsB.filter(item => !itemsA.includes(item));
    const common = itemsA.filter(item => itemsB.includes(item));
    const combined = [...uniqueA, ...uniqueB];

    const differences = {
      uniqueA,
      uniqueB,
      common,
      combined
    };

    setResult(differences);
  };

  return (
    <div>
      <h2>Enter List A</h2>
      <textarea
        value={listA}
        onChange={e => setListA(e.target.value)}
        rows="5"
      />

      <h2>Enter List B</h2>
      <textarea
        value={listB}
        onChange={e => setListB(e.target.value)}
        rows="5"
      />

      <button onClick={computeDifferences}>Compute</button>

      {result && (
        <div>
          <h2>Results</h2>
          <div>
            <h3>Items present only in A:</h3>
            <ul>
              {result.uniqueA.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Items present only in B:</h3>
            <ul>
              {result.uniqueB.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Items present in both A and B:</h3>
            <ul>
              {result.common.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Items combining both A and B (unique):</h3>
            <ul>
              {result.combined.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DifferenceFinder;
