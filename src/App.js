import React, { useState } from 'react';
import Questionnaire from './Questionnaire';
import Results from './Results';
import diagnoseMentalHealth from './diagnosisAlgorithm'; // Assuming the correct path to DiagnosisAlgorithm.js

function App() {
  const [diagnosedDisorder, setDiagnosedDisorder] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleQuestionnaireSubmit = (answers) => {
    try {
      // Use the imported diagnoseMentalHealth function
      const { diagnosedDisorder } = diagnoseMentalHealth(answers);

      console.log('Debugging - Diagnosis:', diagnosedDisorder);
      setDiagnosedDisorder(diagnosedDisorder);
      setShowResults(true);
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
      // Handle any specific error related to the diagnosis process
    }
  };

  return (
    <div className="App">
      {showResults ? (
        <Results diagnosedDisorder={diagnosedDisorder} />
      ) : (
        <Questionnaire onSubmit={handleQuestionnaireSubmit} />
      )}
    </div>
  );
}

export default App;
