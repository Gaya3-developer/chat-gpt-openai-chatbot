export const AIOptions = [
    {
      name: "Q&A",
      id: "q&a",
      description: "Answer questions based on existing knowledge",
      option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      link:"qa"
    },
    {
      name: "Grammer Correction",
      id: "grammerCorrection",
      description: "Corrects sentences into standard English.",
      option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      link:"grammer"
    },
    {
      name: "Summarize for a 2nd grader",
      id: "summary",
      description: "Translates difficult text into simpler concepts.",
      option: {
        model: "text-davinci-003",
        temperature: 0.7,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      link:"summary"
    },
    {
      name: "English to Other languages",
      id: "translate",
      description: "Translates English text into French, Spanish and Japanese.",
      option: {
        model: "text-davinci-003",
        temperature: 0.3,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      link:"translate"
    },
    {
      name: "Movie to Emoji",
      id: "movieToEmoji",
      description: "Convert movie titles into emoji.",
      option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      link:"movieToEmoji"
    },
    {
      name: "Explain code",
      id: "explainCode",
      description: "Explain a complicated piece of code.",
      option: {
        model: "code-davinci-002",
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      link:"code"
    },
    {
      name: "JavaScript to Python",
      id: "jstopy",
      description: "Convert simple JavaScript expressions into Python.",
      option: {
        model: "code-davinci-002",
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      link:"jstopy"
    },
  ];