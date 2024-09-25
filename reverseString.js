function reverseString(text) {
    let reversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}

const originalText = "example";
const reversedText = reverseString(originalText);
console.log(`Original text: ${originalText}`);
console.log(`Reversed text: ${reversedText}`);
