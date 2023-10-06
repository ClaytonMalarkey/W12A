let buttonsubmisson= document.getElementById("testme");

function failureFunction(error) {
    // Do failure code here
    console.log('failure');
}

function successFunction (response) {
    console.log('success');
    document.body.insertAdjacentHTML("afterend", `<p>${response}<p>`)
}

buttonsubmisson.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.insertAdjacentHTML("afterend" ,"<p>loading api</p>");
    axios.request({
        url: `https://swapi.dev/api/people/1/`
    }).then(successFunction).catch(failureFunction);
    // handle submit
    document.body.insertAdjacentHTML("afterend" ,"<p>api loaded</p>")
});

