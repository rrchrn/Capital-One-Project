// import React from 'react'

// isCorrect Function
// question array
const Question = [
  {
    id: 1,
    question:
      "Why is understanding the importance of budgeting crucial for college students?",
    // answer object array // this array will be shuffled
    // answer key: 1432421243
    answers: [
      {
        // Choice 1 //
        text: "To achieve financial freedom",
        isCorrect: true,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 2 //
        text: "To maximize student loan debt",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 3 //
        text: "To ignore financial planning",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 4 //
        text: "To spend recklessly",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
    ],
  },
  {
    id: 2,
    question:
      "What can happen if someone accumulates excessive credit card debt?",
    // answer object array // this array will be shuffled
    answers: [
      {
        // Choice 1 //
        text: "Lower interest rates on loans",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 2 //
        text: "Improved credit score",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 3 //
        text: "Increased borrowing capacity",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 4 //
        text: "Difficulty in making payments and higher interest charges ",
        isCorrect: true,
        correctDescription: "",
        incorrectDescription: "",
      },
    ],
  },
  {
    id: 3,
    question: "How does tracking expenses contribute to financial well-being?",
    // answer object array // this array will be shuffled
    answers: [
      {
        // Choice 1 //
        text: "It leads to overspending",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 2 //
        text: "It helps identify unnecessary expenses",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 3 //
        text: "It aids in creating a personal budget",
        isCorrect: true,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 4 //
        text: "It improves credit score",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
    ],
  },
  {
    id: 4,
    question: "What does differentiating between needs and wants involve?",
    // answer object array // this array will be shuffled
    answers: [
      {
        // Choice 1 //
        text: "Ignoring all wants",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 2 //
        text: "Prioritizing expenses",
        isCorrect: true,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 3 //
        text: "Avoiding needs",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 4 //
        text: "Spending randomly",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
    ],
  },
  {
    id: 5,
    question: "What is the purpose of understanding credit scores and reports?",
    // answer object array // this array will be shuffled
    answers: [
      {
        // Choice 1 //
        text: "To obtain credit cards quickly",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 2 //
        text: "To monitor expenses",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 3 //
        text: "To avoid all types of debt",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 4 //
        text: "To assess creditworthiness and financial health",
        isCorrect: true,
        correctDescription: "",
        incorrectDescription: "",
      },
    ],
  },
  {
    id: 6,
    question:
      "Which of the following actions can positively impact your credit score?",
    // answer object array // this array will be shuffled
    answers: [
      {
        // Choice 1 //
        text: "Making late payments on loans and credit cards",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 2 //
        text: "Paying bills on time and maintaining a low credit utilization ratio",
        isCorrect: true,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 3 //
        text: "Keeping credit card balances close to the credit limit",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 4 //
        text: "Applying for multiple new credit cards within a short period",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
    ],
  },
  {
    id: 7,
    question: "When is the best time to start saving for retirement?",
    // answer object array // this array will be shuffled
    answers: [
      {
        // Choice 1 //
        text: "As soon as possible, even in college or early career stages",
        isCorrect: true,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 2 //
        text: "In your 40s, when you are likely to earn a higher income",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 3 //
        text: "A few years before retirement, when you have more disposable income",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 4 //
        text: "Retirement savings are unnecessary; social security will cover all expenses",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
    ],
  },
  {
    id: 8,
    question:
      "What are the potential consequences of co-signing a loan for someone else?",
    // answer object array // this array will be shuffled
    answers: [
      {
        // Choice 1 //
        text: "No consequences, as long as the borrower is trustworthy",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 2 //
        text: "Lower credit score and difficulty obtaining future credit",
        isCorrect: true,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 3 //
        text: "The co-signer gains ownership of the borrower's assets",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 4 //
        text: "The co-signer is exempt from any responsibility for the loan",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
    ],
  },
  {
    id: 9,
    question: "What does APR stand for in relation to credit cards?",
    // answer object array // this array will be shuffled
    answers: [
      {
        // Choice 1 //
        text: "Automated Payment Reminder",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 2 //
        text: "Account Protection Registry",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 3 //
        text: "Available Purchase Ratio",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 4 //
        text: "Annual Percentage Rate",
        isCorrect: true,
        correctDescription: "",
        incorrectDescription: "",
      },
    ],
  },
  {
    id: 10,
    question: "What is the purpose of a credit score?",
    // answer object array // this array will be shuffled
    answers: [
      {
        // Choice 1 //
        text: "To determine your eligibility for student loans",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 2 //
        text: "To measure your financial wealth",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 3 //
        text: "To assess your creditworthiness and risk as a borrower",
        isCorrect: true,
        correctDescription: "",
        incorrectDescription: "",
      },
      {
        // Choice 4 //
        text: "To evaluate your ability to save money",
        isCorrect: false,
        correctDescription: "",
        incorrectDescription: "",
      },
    ],
  },
];

export default Question;
