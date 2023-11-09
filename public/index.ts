/// <reference lib="dom"/>

import { sum } from "./sum.ts";

type Fruit = {
  name: string,
  price: number
}

const fruits: Fruit = {
  name: "apple",
  price: 100
}

const message = await fetch("/welcome-message")
const element = document.querySelector("body")
if(element !== null) {
  element.innerHTML = `<h1>${await message.text()}</h1>` + `<p>${sum(234, 110)}</p>` + `<p>${fruits.name}</p>` + `<p>${fruits.price}</p>`
}
