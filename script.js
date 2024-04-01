// async function fetchUrbanDictionaryDefinition() {
//     const term = document.getElementById('word').select();
//   const url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=' + term;
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '3aa8916456mshf2da62238d9000cp173cc6jsn5574c902ea78',
//       'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     const def =JSON.parse(result).list[0].definition;
//     console.log(def);
//     const resAria = document.getElementById('result');
//     resAria.innerText(def);
//   } catch (error) {
//     console.error(error);
//   }
// }

async function fetchUrbanDictionaryDefinition() {
  const term = document.getElementById('word').value; // Use .value for input text
  const url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=' + term;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3aa8916456mshf2da62238d9000cp173cc6jsn5574c902ea78',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (result.list && result.list.length > 0) { // Check if there's a definition
      const def = result.list[0].definition;
      console.log(def);
      document.getElementById('result').innerHTML = def; // Set innerHTML
    } else {
      document.getElementById('result').innerHTML = "No definition found for '" + term + "'";
    }
  } catch (error) {
    console.error(error);
    document.getElementById('result').innerHTML = "Error fetching definition.";
  }
}
