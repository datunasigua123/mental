// src/DiagnosisAlgorithm.js

const diagnoseMentalHealth = (answers) => {
    // Initialize scores for each disorder
    const scores = {
        "გენერალიზებული შფოთვითი აშლილობა": 0,
        "პანიკის აშლილობა": 0,
        "სოციალური შფოთვითი აშლილობა": 0,
        "ობსესიურ-კომპულსიური აშლილობა": 0,
        "პოსტტრავმული სტრესული აშლილობა": 0,
        "ძირითადი დეპრესიული აშლილობა": 0,
        "მუდმივი დეპრესიული აშლილობა": 0,
        "ბიპოლარული აშლილობა": 0,
    };
  
    // Add scores based on answers
    scores["განზოგადებული შფოთვითი აშლილობა"] += answers.excessiveWorry === "თითქმის ყოველთვის" ? 1 : 0;
    scores["პანიკური აშლილობა"] += answers.panicAttacks === "ხშირად" ? 1 : 0;
    scores["სოციალური შფოთვითი აშლილობა"] += answers.socialAvoidance === "საკმაოდ ხშირად" ? 1 : 0;
    scores["ობსესიურ-კომპულსიური აშლილობა"] += answers.intrusiveThoughts === "თითქმის მუდმივად" ? 1 : 0;
    scores["პოსტტრავმული აშლილობა"] += answers.ptsdSymptoms === "საკმაოდ ხშირად" ? 1 : 0;
    scores["ძირითადი დეპრესიული აშლილობა"] += answers.persistentSadness === "თითქმის ყოველთვის" ? 1 : 0;
    scores["მუდმივი დეპრესიული აშლილობა"] += answers.persistentSadness === "ხშირად" ? 1 : 0;
    scores["ბიპოლარული აშლილობა"] += answers.elevatedMood === "ხშირად" ? 1 : 0;
  
    // Identify the disorder with the highest score
    let maxScore = 0;
    let diagnosedDisorder = "დიაგნოზი არ არის"; // Default if no disorder is identified
  
    for (const disorder in scores) {
      if (scores[disorder] > maxScore) {
        maxScore = scores[disorder];
        diagnosedDisorder = disorder;
      }
    }
  
    // Provide explanations for each diagnosis
    const explanations = {
        "გენერალიზებული შფოთვითი აშლილობა": "გადაჭარბებული შფოთვა და შიში ყოველდღიური მოვლენების შესახებ.",
        "პანიკური აშლილობა": "განმეორებადი პანიკური შეტევები, რომლებიც ხასიათდება შიშის ან შიშის უეცარი და ძლიერი გრძნობით.",
        "სოციალური შფოთვითი აშლილობა": "სოციალური სიტუაციების თავიდან აცილება ნეგატიური განსჯის ან უხერხულობის შიშის გამო.",
        "ობსესიურ-კომპულსიური აშლილობა": "ინტრუზიული, არასასურველი აზრები, რომლებიც იწვევს განმეორებით ქცევას ან ფსიქიკურ აქტებს.",
        "პოსტტრავმული სტრესული აშლილობა": "პოსტტრავმული სტრესის სიმპტომები, როგორიცაა მობრუნება, კოშმარები, ძლიერი შფოთვა ან ტრავმის შეხსენებების თავიდან აცილება.",
        "ძირითადი დეპრესიული აშლილობა": "სევდის ან უიმედობის მუდმივი გრძნობა.",
        "მუდმივი დეპრესიული აშლილობა": "გრძელვადიანი, ქრონიკული დეპრესია.",
        "ბიპოლარული აშლილობა": "ამაღლებული განწყობის პერიოდები, გაზრდილი ენერგია, იმპულსურობა და ძილის მოთხოვნილების დაქვეითება, რომელიც მონაცვლეობს დეპრესიის პერიოდებთან.",
    };
  
    const diagnosisExplanation = explanations[diagnosedDisorder];
  
    return { diagnosedDisorder, diagnosisExplanation };
  };
  
  export default diagnoseMentalHealth;
  