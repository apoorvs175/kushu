import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Trophy, Star, Gift, Sparkles, RefreshCw, Dice1, Puzzle, Target, Zap, Crown, GamepadIcon } from 'lucide-react';

const GamesOfLove = () => {
  const [currentGame, setCurrentGame] = useState<'quiz' | 'memory' | 'fortune' | 'puzzle' | 'dice' | 'trivia' | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Memory Game State
  const memoryPairs = [
    { id: 1, content: "💕", matched: false, flipped: false },
    { id: 2, content: "💕", matched: false, flipped: false },
    { id: 3, content: "🌹", matched: false, flipped: false },
    { id: 4, content: "🌹", matched: false, flipped: false },
    { id: 5, content: "💖", matched: false, flipped: false },
    { id: 6, content: "💖", matched: false, flipped: false },
    { id: 7, content: "✨", matched: false, flipped: false },
    { id: 8, content: "✨", matched: false, flipped: false },
  ];

  const [memoryCards, setMemoryCards] = useState(
    [...memoryPairs].sort(() => Math.random() - 0.5)
  );
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  // Puzzle Game State
  const [puzzlePieces, setPuzzlePieces] = useState<number[]>([]);
  const [puzzleMoves, setPuzzleMoves] = useState(0);
  const [puzzleSolved, setPuzzleSolved] = useState(false);

  // Dice Game State
  const [diceValue, setDiceValue] = useState(1);
  const [diceRolling, setDiceRolling] = useState(false);
  const [diceScore, setDiceScore] = useState(0);
  const [diceRolls, setDiceRolls] = useState(0);

  // Trivia Game State
  const [triviaScore, setTriviaScore] = useState(0);
  const [currentTrivia, setCurrentTrivia] = useState(0);
  const [triviaAnswered, setTriviaAnswered] = useState(false);

  const quizQuestions = [
    {
      question: "What date did our love story begin?",
      options: ["March 24, 2024", "March 25, 2024", "April 24, 2024", "February 24, 2024"],
      correct: "March 24, 2024",
      explanation: "March 24, 2024 - the day that changed everything! 💕"
    },
    {
      question: "At what time did I decide on your nickname 'Kushu'?",
      options: ["2 AM", "3 AM", "4 AM", "5 AM"],
      correct: "3 AM",
      explanation: "3 AM - when love spoke louder than sleep! 🌙"
    },
    {
      question: "What was our first movie experience date?",
      options: ["October 10, 2024", "October 11, 2024", "October 12, 2024", "October 9, 2024"],
      correct: "October 11, 2024",
      explanation: "October 11, 2024 - our magical movie night! 🎬"
    },
    {
      question: "Which festival did we celebrate together that was life-changing?",
      options: ["Diwali", "Holi", "Dussehra", "Karva Chauth"],
      correct: "Holi",
      explanation: "Holi 2024 - painted in colors of love! 🎨"
    },
    {
      question: "How many days were you away that felt like forever?",
      options: ["50 days", "56 days", "60 days", "52 days"],
      correct: "56 days",
      explanation: "56 days - every single one made me miss you more! 💔"
    }
  ];

  const triviaQuestions = [
    {
      question: "What's Appii's favorite thing about Kushu?",
      options: ["Her smile", "Her innocence", "Her laugh", "Everything"],
      correct: "Everything"
    },
    {
      question: "What does 'Kushu' mean to Appii?",
      options: ["Sweetness", "Cuteness", "Pure love", "All of the above"],
      correct: "All of the above"
    },
    {
      question: "What's our favorite activity together?",
      options: ["Watching movies", "Shopping", "Just talking", "All moments together"],
      correct: "All moments together"
    }
  ];

  const loveMessages = [
    "You are the sunshine in my cloudy days, Kushu! ☀️",
    "Your smile is my daily dose of happiness! 😊",
    "Every moment with you is a treasure, my sweet Penguinue! 🐧",
    "You make my heart skip a beat every single day! 💓",
    "My love for you grows stronger with each passing moment! 🌱",
    "You are my today and all of my tomorrows, Mahrani Ji! 👑",
    "In your eyes, I found my home, my sweet Kushu! 🏠",
    "You are the missing piece that makes my life complete! 🧩",
    "Every love song reminds me of you, my beautiful Madam Ji! 🎵",
    "You are my greatest adventure and my sweetest love! 🗺️"
  ];

  // Initialize puzzle
  useEffect(() => {
    if (currentGame === 'puzzle') {
      const shuffled = Array.from({ length: 8 }, (_, i) => i + 1)
        .concat([0])
        .sort(() => Math.random() - 0.5);
      setPuzzlePieces(shuffled);
      setPuzzleMoves(0);
      setPuzzleSolved(false);
    }
  }, [currentGame]);

  const handleQuizAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === quizQuestions[currentQuestion].correct) {
      setQuizScore(quizScore + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setQuizScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || memoryCards[index].flipped || memoryCards[index].matched) {
      return;
    }

    const newCards = [...memoryCards];
    newCards[index].flipped = true;
    setMemoryCards(newCards);

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (newCards[first].content === newCards[second].content) {
        setTimeout(() => {
          newCards[first].matched = true;
          newCards[second].matched = true;
          setMemoryCards(newCards);
          setMatchedPairs(matchedPairs + 1);
          setFlippedCards([]);
        }, 1000);
      } else {
        setTimeout(() => {
          newCards[first].flipped = false;
          newCards[second].flipped = false;
          setMemoryCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetMemoryGame = () => {
    const shuffled = [...memoryPairs].sort(() => Math.random() - 0.5);
    setMemoryCards(shuffled);
    setFlippedCards([]);
    setMatchedPairs(0);
  };

  const movePuzzlePiece = (index: number) => {
    const emptyIndex = puzzlePieces.indexOf(0);
    const canMove = [
      emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3
    ].includes(index) && 
    !(emptyIndex % 3 === 0 && index === emptyIndex - 1) &&
    !(emptyIndex % 3 === 2 && index === emptyIndex + 1);

    if (canMove) {
      const newPieces = [...puzzlePieces];
      [newPieces[index], newPieces[emptyIndex]] = [newPieces[emptyIndex], newPieces[index]];
      setPuzzlePieces(newPieces);
      setPuzzleMoves(puzzleMoves + 1);

      // Check if solved
      const solved = newPieces.slice(0, 8).every((piece, i) => piece === i + 1);
      if (solved) setPuzzleSolved(true);
    }
  };

  const rollDice = () => {
    setDiceRolling(true);
    let rolls = 0;
    const rollInterval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
      rolls++;
      if (rolls > 10) {
        clearInterval(rollInterval);
        setDiceRolling(false);
        const finalValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(finalValue);
        setDiceScore(diceScore + finalValue);
        setDiceRolls(diceRolls + 1);
      }
    }, 100);
  };

  const handleTriviaAnswer = (answer: string) => {
    setTriviaAnswered(true);
    if (answer === triviaQuestions[currentTrivia].correct) {
      setTriviaScore(triviaScore + 1);
    }
    
    setTimeout(() => {
      if (currentTrivia < triviaQuestions.length - 1) {
        setCurrentTrivia(currentTrivia + 1);
        setTriviaAnswered(false);
      }
    }, 1500);
  };

  const getRandomMessage = () => {
    return loveMessages[Math.floor(Math.random() * loveMessages.length)];
  };

  const gamesList = [
    {
      id: 'quiz',
      title: 'Love Quiz',
      description: 'Test how well you remember our story!',
      icon: Trophy,
      color: 'from-pink-400 to-rose-500'
    },
    {
      id: 'memory',
      title: 'Memory Game',
      description: 'Match the pairs of love symbols!',
      icon: Star,
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'fortune',
      title: 'Love Fortune',
      description: 'Get a sweet message from Appii!',
      icon: Gift,
      color: 'from-blue-400 to-purple-500'
    },
    {
      id: 'puzzle',
      title: 'Love Puzzle',
      description: 'Solve the sliding number puzzle!',
      icon: Puzzle,
      color: 'from-green-400 to-blue-500'
    },
    {
      id: 'dice',
      title: 'Lucky Dice',
      description: 'Roll the dice and collect love points!',
      icon: Dice1,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'trivia',
      title: 'Love Trivia',
      description: 'Answer questions about our relationship!',
      icon: Target,
      color: 'from-red-400 to-pink-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 pb-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <GamepadIcon className="w-10 h-10 text-pink-600" />
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800">
              Games of Love
            </h1>
            <GamepadIcon className="w-10 h-10 text-pink-600 scale-x-[-1]" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's play some fun games together, Kushu! Test your memory of our beautiful journey.
          </p>
        </motion.div>

        {/* Game Selection */}
        {!currentGame && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {gamesList.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentGame(game.id as any)}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200/50 hover:shadow-xl transition-all duration-300 cursor-pointer text-center relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className={`w-16 h-16 bg-gradient-to-r ${game.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <game.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{game.title}</h3>
                <p className="text-gray-600">{game.description}</p>
                
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Heart className="w-6 h-6 text-pink-400 fill-current" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Quiz Game */}
        {currentGame === 'quiz' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200/50"
          >
            {!showResults ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-serif text-gray-800">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </h3>
                  <div className="text-sm text-gray-600">
                    Score: {quizScore}/{quizQuestions.length}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">
                    {quizQuestions[currentQuestion].question}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleQuizAnswer(option)}
                        disabled={selectedAnswer !== null}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                          selectedAnswer === option
                            ? option === quizQuestions[currentQuestion].correct
                              ? 'border-green-500 bg-green-50 text-green-800'
                              : 'border-red-500 bg-red-50 text-red-800'
                            : 'border-pink-200 hover:border-pink-400 bg-white hover:bg-pink-50'
                        }`}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>

                  {selectedAnswer && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg"
                    >
                      <p className="text-blue-800">
                        {quizQuestions[currentQuestion].explanation}
                      </p>
                    </motion.div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-serif text-gray-800 mb-4">
                  Quiz Complete!
                </h3>
                <p className="text-2xl font-semibold text-pink-600 mb-4">
                  You scored {quizScore} out of {quizQuestions.length}!
                </p>
                <p className="text-gray-600 mb-6">
                  {quizScore === quizQuestions.length 
                    ? "Perfect! You know our story by heart! 💕"
                    : quizScore >= 3
                    ? "Great job! You remember most of our beautiful moments! 💖"
                    : "That's okay, our story is still being written! 🌹"
                  }
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetQuiz}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 mr-4"
                >
                  Play Again
                </motion.button>
              </div>
            )}

            <div className="flex justify-center mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentGame(null)}
                className="px-6 py-3 bg-white border-2 border-pink-300 text-pink-600 rounded-lg font-medium hover:bg-pink-50 transition-all duration-300"
              >
                Back to Games
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Memory Game */}
        {currentGame === 'memory' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200/50"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif text-gray-800">Memory Game</h3>
              <div className="text-sm text-gray-600">
                Pairs found: {matchedPairs}/4
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6 max-w-md mx-auto">
              {memoryCards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCardClick(index)}
                  className={`aspect-square rounded-lg flex items-center justify-center text-2xl cursor-pointer transition-all duration-300 ${
                    card.flipped || card.matched
                      ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {card.flipped || card.matched ? card.content : '?'}
                </motion.div>
              ))}
            </div>

            {matchedPairs === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-pink-50 rounded-lg p-6 mb-6"
              >
                <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-pink-800 mb-2">
                  Congratulations!
                </h4>
                <p className="text-pink-600">
                  You found all the pairs! Just like how we're a perfect pair! 💕
                </p>
              </motion.div>
            )}

            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetMemoryGame}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>New Game</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentGame(null)}
                className="px-6 py-3 bg-white border-2 border-pink-300 text-pink-600 rounded-lg font-medium hover:bg-pink-50 transition-all duration-300"
              >
                Back to Games
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Puzzle Game */}
        {currentGame === 'puzzle' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200/50"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif text-gray-800">Love Puzzle</h3>
              <div className="text-sm text-gray-600">
                Moves: {puzzleMoves}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto mb-6">
              {puzzlePieces.map((piece, index) => (
                <motion.div
                  key={index}
                  whileHover={piece !== 0 ? { scale: 1.05 } : {}}
                  whileTap={piece !== 0 ? { scale: 0.95 } : {}}
                  onClick={() => piece !== 0 && movePuzzlePiece(index)}
                  className={`aspect-square rounded-lg flex items-center justify-center text-xl font-bold cursor-pointer transition-all duration-300 ${
                    piece === 0
                      ? 'bg-gray-100'
                      : 'bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:from-pink-500 hover:to-purple-600 shadow-lg'
                  }`}
                >
                  {piece !== 0 && piece}
                </motion.div>
              ))}
            </div>

            {puzzleSolved && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-green-50 rounded-lg p-6 mb-6"
              >
                <Crown className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-800 mb-2">
                  Puzzle Solved!
                </h4>
                <p className="text-green-600">
                  You completed it in {puzzleMoves} moves! 🎉
                </p>
              </motion.div>
            )}

            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentGame('puzzle')}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>New Puzzle</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentGame(null)}
                className="px-6 py-3 bg-white border-2 border-pink-300 text-pink-600 rounded-lg font-medium hover:bg-pink-50 transition-all duration-300"
              >
                Back to Games
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Dice Game */}
        {currentGame === 'dice' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200/50 text-center"
          >
            <h3 className="text-2xl font-serif text-gray-800 mb-6">Lucky Dice</h3>
            
            <div className="mb-6">
              <motion.div
                animate={diceRolling ? { rotate: 360 } : {}}
                transition={{ duration: 0.1, repeat: diceRolling ? Infinity : 0 }}
                className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <span className="text-3xl font-bold text-white">{diceValue}</span>
              </motion.div>
              
              <div className="text-center mb-4">
                <p className="text-lg font-semibold text-gray-800">Score: {diceScore}</p>
                <p className="text-sm text-gray-600">Rolls: {diceRolls}</p>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={rollDice}
                disabled={diceRolling}
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg font-medium hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50"
              >
                {diceRolling ? 'Rolling...' : 'Roll Dice'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentGame(null)}
                className="px-6 py-3 bg-white border-2 border-pink-300 text-pink-600 rounded-lg font-medium hover:bg-pink-50 transition-all duration-300"
              >
                Back to Games
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Trivia Game */}
        {currentGame === 'trivia' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200/50"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif text-gray-800">Love Trivia</h3>
              <div className="text-sm text-gray-600">
                Score: {triviaScore}/{triviaQuestions.length}
              </div>
            </div>

            {currentTrivia < triviaQuestions.length && (
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">
                  {triviaQuestions[currentTrivia].question}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {triviaQuestions[currentTrivia].options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleTriviaAnswer(option)}
                      disabled={triviaAnswered}
                      className="p-4 rounded-lg border-2 border-pink-200 hover:border-pink-400 bg-white hover:bg-pink-50 transition-all duration-300 disabled:opacity-50"
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {currentTrivia >= triviaQuestions.length && (
              <div className="text-center">
                <Zap className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-purple-800 mb-2">
                  Trivia Complete!
                </h4>
                <p className="text-purple-600 mb-6">
                  You scored {triviaScore} out of {triviaQuestions.length}! 🎉
                </p>
              </div>
            )}

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentGame(null)}
                className="px-6 py-3 bg-white border-2 border-pink-300 text-pink-600 rounded-lg font-medium hover:bg-pink-50 transition-all duration-300"
              >
                Back to Games
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Love Fortune */}
        {currentGame === 'fortune' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200/50 text-center"
          >
            <h3 className="text-2xl font-serif text-gray-800 mb-6">
              Love Fortune from Appii
            </h3>
            
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8 mb-6">
              <Gift className="w-16 h-16 text-pink-600 mx-auto mb-4" />
              <p className="text-lg text-gray-700 leading-relaxed">
                {getRandomMessage()}
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentGame('fortune')}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Another Message
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentGame(null)}
                className="px-6 py-3 bg-white border-2 border-pink-300 text-pink-600 rounded-lg font-medium hover:bg-pink-50 transition-all duration-300"
              >
                Back to Games
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Bottom Message */}
        {!currentGame && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200/50"
          >
            <Heart className="w-8 h-8 text-pink-500 fill-current mx-auto mb-4" />
            <p className="text-gray-600 leading-relaxed">
              "Playing games with you, laughing together, creating memories - 
              these are the moments that make life beautiful, my sweet Kushu."
            </p>
            <p className="text-pink-600 font-serif text-xl mt-4">— Your playful Appii 💕</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default GamesOfLove;