const sentence = "My name is chika chika Slim Shady";

const typewriter = sentence => {
  for (const char in sentence) {
    let letter = sentence[char];
    setTimeout(() => {
      process.stdout.write(letter);
    }, char * 50)
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, sentence.length * 50)
};

typewriter(sentence);