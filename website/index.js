async function updateCounter() {
    let response = await fetch("https://e76tyza5cahp4abj45estcgoam0olzlx.lambda-url.eu-north-1.on.aws/");
    let data = await response.json();
    console.log('data', data)
    document.getElementById("counter").innerHTML = data
}

updateCounter();
