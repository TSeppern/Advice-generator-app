const api_url = 'https://api.adviceslip.com/advice';

async function getAdvice() {
    fetch(api_url)
        const response = await fetch(api_url);
        const data = await response.json();
        document.getElementById('id').textContent = "ADVICE #" + data.slip.id;
        document.getElementById('advice').textContent = '"' + data.slip.advice + '"';
}

getAdvice();

document.getElementById('dice').addEventListener("click", getAdvice);