/* Back-Tics Syntax */

let tex = `Hello World!`
console.log(tex)

//Qoutes inside the back-tics
let text = `"She is beautifull"`
console.log(text)

//Multi line string

let para = `The Quick
Brown fox, Jump over
the lazy Dog.`
console.log(para)

// string interpolaton is also possible through Template-literals
// ${.....}

//variable Subsitutons
// Templates literals also alows variables in strings
fname = "Muhamamd"
lname = "Zulqarnain"
let sent = `welcome Home ${fname} ${lname}`
console.log(sent)

// Automatic replacing of variables with real values is known as string interpolation.


// HTML Templates

let header = "Templates literals"
let tags = ["trmplate Literals", "JavaScript", "es6"]
let html = `<h2>${header}</h2><ul>`;
for (const x in tags) {
    html += `<li>${x}</li>`
}
console.log(html)
