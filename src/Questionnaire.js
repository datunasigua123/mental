// src/Questionnaire.js
import React, { useState } from 'react';
import './Questionnaire.css'; // Import a CSS file for styling

const Questionnaire = ({ onSubmit }) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [education, setEducation] = useState('');

  const [excessiveWorry, setExcessiveWorry] = useState('');
  const [panicAttacks, setPanicAttacks] = useState('');
  const [socialAvoidance, setSocialAvoidance] = useState('');
  const [intrusiveThoughts, setIntrusiveThoughts] = useState('');
  const [ptsdSymptoms, setPtsdSymptoms] = useState('');

  const [persistentSadness, setPersistentSadness] = useState('');
  const [lostInterest, setLostInterest] = useState('');
  const [changesInAppetite, setChangesInAppetite] = useState('');
  const [worthlessness, setWorthlessness] = useState('');
  const [elevatedMood, setElevatedMood] = useState('');

  const [professionalHelp, setProfessionalHelp] = useState('');
  const [familyHistory, setFamilyHistory] = useState('');
  const [significantLifeEvents, setSignificantLifeEvents] = useState('');



  

  const isFormComplete =
    age !== '' &&
    gender !== '' &&
    education !== '' &&
    excessiveWorry !== '' &&
    panicAttacks !== '' &&
    socialAvoidance !== '' &&
    intrusiveThoughts !== '' &&
    ptsdSymptoms !== '' &&
    persistentSadness !== '' &&
    lostInterest !== '' &&
    changesInAppetite !== '' &&
    worthlessness !== '' &&
    elevatedMood !== '' &&
    professionalHelp !== '' &&
    familyHistory !== '';
    

    const handleSubmit = () => {
      if (!isFormComplete) {
        alert('Please fill out all fields before submitting.');
        return;
      }
      const answers = {
      age,
      gender,
      education,
      excessiveWorry,
      panicAttacks,
      socialAvoidance,
      intrusiveThoughts,
      ptsdSymptoms,
      persistentSadness,
      lostInterest,
      changesInAppetite,
      worthlessness,
      elevatedMood,
      professionalHelp,
      familyHistory,
      significantLifeEvents,
    };
    onSubmit(answers);
  };

  return (
    <div className="questionnaire-container">
      <h2>Mental Health Questionnaire</h2>

      {/* Demographic Information */}
      <div className="question">
        <h2>ასაკი:</h2>
        <input type="number" value={age} onChange={(e) => setAge(Math.max(0, e.target.value))} />
      </div>

      <div className="question">
        <h2>სქესი:</h2>
        <div className="checkbox-options">
          {['მამაკაცი', 'ქალი',  'სხვა'].map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={gender === option}
                onChange={() => setGender(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Replace occupation with education */}
      <div className="question">
        <h2>განათლება:</h2>
        <div className="checkbox-options">
          {['საშუალო განათლება', 'სტუდენტი', 'ბაკალავრი', 'მაგისტრი'].map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={education === option}
                onChange={() => setEducation(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Questions about worry or fear */}
      <div className="question-group">
        <div className="question">
          <h2>ბოლო ექვსი თვის განმავლობაში, გქონიათ თუ არა გადაჭარბებული წუხილი ან შიში ყოველდღიური მოვლენების შესახებ?</h2>
          {["სულაც არა", "ზოგჯერ", "ხშირად", "თითქმის ყოველთვის"].map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={excessiveWorry === option}
                onChange={() => setExcessiveWorry(option)}
              />
              {option}
            </label>
          ))}
        </div>

        <div className="question">
          <h2>გქონიათ თუ არა განმეორებითი პანიკის შეტევები, რომლებიც ხასიათდება შიშის ან შიშის უეცარი და ძლიერი გრძნობით?</h2>
          {["არასდროს", "იშვიათად", "ზოგჯერ", "ხშირად"].map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={panicAttacks === option}
                onChange={() => setPanicAttacks(option)}
              />
              {option}
            </label>
          ))}
        </div>

        <div className="question">
          <h2>თავს არიდებთ სოციალურ სიტუაციებს ნეგატიური განსჯის ან უხერხულობის შიშის გამო?</h2>
          {["არასდროს", "იშვიათად", "პერიოდულად", "საკმაოდ ხშირად"].map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={socialAvoidance === option}
                onChange={() => setSocialAvoidance(option)}
              />
              {option}
            </label>
          ))}
        </div>

        <div className="question">
          <h2>გქონიათ თუ არა ინტრუზიული, არასასურველი აზრები, რომლებიც იწვევს განმეორებით ქცევას ან ფსიქიკურ აქტებს?</h2>
          {['არა', 'ზოგჯერ', 'ხშირად', 'თითქმის მუდმივად'].map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={intrusiveThoughts === option}
                onChange={() => setIntrusiveThoughts(option)}
              />
              {option}
            </label>
          ))}
        </div>

        <div className="question">
          <h2>გქონიათ თუ არა განცდილი პოსტტრავმული სტრესის სიმპტომები, როგორიცაა ფლეშბეკები, კოშმარები, ძლიერი შფოთვა ან ტრავმის შეხსენებების თავიდან აცილება?</h2>
          {['არა', 'იშვიათად', 'პერიოდულად', 'საკმაოდ ხშირად'].map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={ptsdSymptoms === option}
                onChange={() => setPtsdSymptoms(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Questions about persistent feelings of sadness or hopelessness */}
      <div className="question-group">
        <div className="question">
          <h2>ბოლო ორი კვირის განმავლობაში გქონიათ მუდმივი მწუხარების ან უიმედობის გრძნობა?</h2>
          {["სულაც არა", "ზოგჯერ", "ხშირად", "თითქმის ყოველთვის"].map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={persistentSadness === option}
                onChange={() => setPersistentSadness(option)}
              />
              {option}
            </label>
          ))}
        </div>

        <div className="question">
          <h2>დაკარგეთ ინტერესი ან სიამოვნება იმ საქმიანობით, რომელიც ოდესღაც გსიამოვნებდათ?</h2>
          {['არა', 'იშვიათად', 'პერიოდულად', 'საკმაოდ ხშირად'].map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={lostInterest === option}
                onChange={() => setLostInterest(option)}
              />
              {option}
            </label>
          ))}
        </div>

        <div className="question">
          <h2>განიცდით ცვლილებებს მადაში, ძილის დარღვევასა და დაღლილობაში?</h2>
          {['არა', 'ზოგჯერ', 'ხშირად', 'თითქმის მუდმივად'].map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={changesInAppetite === option}
                onChange={() => setChangesInAppetite(option)}
              />
              {option}
            </label>
          ))}
        </div>

        <div className="question">
          <h2>გიგრძვნიათ უსარგებლობის გრძნობა ან კონცენტრაციის გაძნელება?</h2>
          {['არა', 'იშვიათად', 'პერიოდულად', 'საკმაოდ ხშირად'].map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={worthlessness === option}
                onChange={() => setWorthlessness(option)}
              />
              {option}
            </label>
          ))}
        </div>

        <div className="question">
          <h2>გქონიათ ოდესმე ამაღლებული განწყობის, ენერგიის მომატების, იმპულსურობის და ძილის მოთხოვნილების დაქვეითების პერიოდები დეპრესიის პერიოდებთან მონაცვლეობით?</h2>
          {['არა', 'იშვიათად', 'ზოგჯერ', 'ხშირად'].map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={elevatedMood === option}
                onChange={() => setElevatedMood(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Additional questions */}
      <div className="question">
        <h2>მიგიმართავთ თუ არა პროფესიონალი ფსიქოლოგისთვის?</h2>
        {['დიახ', 'არა'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={professionalHelp === option}
              onChange={() => setProfessionalHelp(option)}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="question">
        <h2>არის თუ არა შფოთვის ან დეპრესიის ოჯახური ისტორია?</h2>
        {['დიახ', 'არა', 'არ ვიცი'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={familyHistory === option}
              onChange={() => setFamilyHistory(option)}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="question">
        <h2>არის თუ არა რაიმე ბოლოდროინდელი მნიშვნელოვანი ცხოვრებისეული მოვლენა ან სტრესული ფაქტორი, რამაც შესაძლოა ხელი შეუწყო თქვენს ამჟამინდელ გრძნობებს?</h2>
        <textarea value={significantLifeEvents} onChange={(e) => setSignificantLifeEvents(e.target.value)} />
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Questionnaire;
