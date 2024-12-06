
"oppgave 1"
let tall1 = 0

for (let i = 1; i<10; i++) {
    
    document.writeln ('<br>Hello world<br>')
}

"oppgave 2"

for (let i = 1; i<51; i++) {
    document.writeln(`<br>${i}<br>`)
}




"oppgave 3" 
var sum = 0
for (let i = 1; i <11; i++){
    sum = sum +i;
}
document.writeln(sum)


"oppgave 4"

for (let i = 1; i<=4; i++) {
    
    console.log("#".repeat(i));
    
}


"oppgave 5"

for (let i = 2; i<=100; i = i +2) {
    
    console.log(i);
    
    
}




"oppgave 6"
for (let i = 0; i<=100; i+= 5) {
    document.writeln(`<br>${i}<br>`)
}


"oppgave 7"

let liste = [1, 1, 22, 123, 3]
          // -- --  --  ---  -
let sE = liste[0]
 
for (let i = 0; i < liste.length; i++) {
    if (liste[i] > liste[i+1]) {
        sE = liste[i]
    }
}

document.writeln(sE)


