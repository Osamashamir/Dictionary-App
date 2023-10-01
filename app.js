const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWordInfo(form.elements[0].value)
});

// const getWordInfo = async (word) => {
//     const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

//     const data = await response.json();

//     let definations = data[0].meanings[0].definations[0];
//     resultDiv.innerHTML =
    
//         `<h2><strong>Word:</strong>${data[0].word}</h2>
// <p>${data[0].meanings[0].partOfSpeech}</p>
// <p><strong>Meaning:</strong>${definations.defination === undefined ? "Not Found" : definations.defination}</p> 
// <p><strong>Example:</strong>${definations.example === undefined ? "Not Found" : definations.example}</p>
// <p><strong>Antonyms:</strong></p>
// `;

// //fetching

// if(definations.antonyms.length===0){
//     resultDiv.innerHTML +=`<span> Not found</span>`;
// }
// else{
//     for (let i = 0; i < definations.antonyms.length; i++) {
//         resultDiv.innerHTML +=`<li>${definations.antonyms[i]}</li>`
        
// }
// }
//  //read more
//  resultDiv.innerHTML+= `<a href="${data[0].sourceUrls}"target="_blank">Read More</a>`
// console.log(data);

// }

const getWordInfo = async (word) => {
    try {
        
        resultDiv.innerHTML = "Fetching Data...";

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

    const data = await response.json();

    if (data.length > 0) {
        let definations = data[0].meanings[0].definitions[0];
        resultDiv.innerHTML =
            `<h2><strong>Word:</strong>${data[0].word}</h2>
            <p class="partOfspeech">${data[0].meanings[0].partOfSpeech}</p>
            <p><strong>Meaning:</strong>${definations.definition === undefined ? "Not Found" : definations.definition}</p> 
            <p><strong>Example:</strong>${definations.example === undefined ? "Not Found" : definations.example}</p>
            <p><strong>Antonyms:</strong></p>`;

        if (definations.antonyms.length === 0) {
            resultDiv.innerHTML += `<span> Not found</span>`;
        } else {
            for (let i = 0; i < definations.antonyms.length; i++) {
                resultDiv.innerHTML += `<li>${definations.antonyms[i]}</li>`;
            }
        }
//adding
        resultDiv.innerHTML += `<div><a href="${data[0].sourceUrls}" target="_blank">Read More</a></div>`;
    } else {
        resultDiv.innerHTML = '<p>No information found for this word.</p>';
    }
    // console.log(data);

} catch (error) {
    resultDiv.innerHTML = '<p>No information found for this word.</p>';
    console.error('Error fetching data:', error);

}

}
