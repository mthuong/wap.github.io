let i = 0;

setTimeout(() => console.log(i), 1000)

setTimeout((m) => console.log(m), 1000, i)

for (let index = 0; index < 10; index++) {
  i++
}

// i = 10