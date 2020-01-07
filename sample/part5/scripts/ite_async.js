async function* multi() {
  for (let i = 1; i < 4; i++) {
    let result = await fetch(`test${i}.txt`);
    yield result.text();
  }
}

async function hoge() {
  for await (let content of multi()) {
    console.log(content);
  }
}

hoge();