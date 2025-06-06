const part1 = "aHR0cHM6Ly9hcGkubWNzdGF0dXMuaW8v";
const part2 = "djIvc3RhdHVzL2JlZHJvY2sv";
const part3 = "bWluZWNyYWZ0LmdhbGFrLmZyOjI1NTY1";

function decodeBase64(str) {
  return atob(str);
}

function getUrl() {
  return decodeBase64(part1) + decodeBase64(part2) + decodeBase64(part3);
}
