console.log("test")

function clickFunction(){
    let phoneNumber = document.getElementById("user-input").value
    const regex = /^1?\s*(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    console.log(phoneNumber)
    console.log(regex.test(phoneNumber))
    if (phoneNumber == ""){
        return alert("Please provide a phone number")
    }
    else if (regex.test(phoneNumber)) {
        document.getElementById("results-div").innerHTML = 'Valid US number: '+phoneNumber
      } else {
        document.getElementById("results-div").innerHTML = 'Invalid US number: '+phoneNumber
      }
}

function clearFunction(){
    document.getElementById("results-div").innerHTML = ""
}

