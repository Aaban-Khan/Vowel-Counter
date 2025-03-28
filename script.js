let textarea = document.querySelector("#textarea")
let button = document.querySelector("#count")
let output = document.querySelector("#output")

button.addEventListener("click",()=>{

    let val = textarea.value
    if(val===""){
        output.textContent="please enter some text"
    } else{
        let count = 0 
        for (let i = 0; i < val.length; i++) {
            if(val[i]==="a" || val[i]==="e" || val[i]==="i" || val[i]==="o" || val[i]==="u"){
                count++
            }
        }
        output.textContent = `Total Vowels are ${count}`
    }
})