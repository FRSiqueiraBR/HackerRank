function caesarCipher(s: string, k: number): string {
  // Write your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let text = "";
  let cipher = s.split("");

  for (var l in cipher) {
    let letterCipher = "";
    let index = alphabet.indexOf(cipher[l].toLowerCase());
    console.log(`index: ${index}`)

    if (index == -1) {
      console.log(`new index: ${l}`)
      letterCipher = cipher[l];
    } else {
      console.log(`new index: ${(index + k) % 26}`)
      letterCipher = alphabet[(index + k) % 26]
    }

    if (cipher[l] == cipher[l].toUpperCase()) {
      letterCipher = letterCipher.toUpperCase();
    }

    text += letterCipher;
  }

  return text;
}

console.log(caesarCipher("middle-Outz", 2))
console.log("okffng-Qwvb")