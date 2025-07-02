const dadosDiv = document.getElementById('dados');

fetch('https://restcountries.com/v3.1/name/brasil')
  .then(res => res.json())
  .then(paises => {
    const brasil = paises[0]; 
    dadosDiv.innerHTML = `
      <p><strong>Nome:</strong> ${brasil.name.official}</p>
      <p><strong>Capital:</strong> ${brasil.capital[0]}</p>
      <p><strong>População:</strong> ${brasil.population.toLocaleString()}</p>
      <p><strong>Moeda:</strong> ${Object.values(brasil.currencies)[0].name} (${Object.values(brasil.currencies)[0].symbol})</p>
      <img src="${brasil.flags.png}" alt="Bandeira do Brasil" width="200" />
    `;
  })
  .catch(err => {
    dadosDiv.textContent = 'Erro ao carregar dados';
    console.error(err);
  });