 function createGame( player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}.">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="bandeira da ${player2}">
        </li>
    `

 }
 
 
 let delay = -0.4;
 function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}
document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="logo da NLW">
    </header>
    <main id="cards">
        ${createCard("24/11", "quinta", 
          createGame("brazil", "16:00", "serbia"))
        }      
        ${createCard("28/11", "segunda",
          createGame( "switzerland", "13:00", "brazil") +
          createGame( "portugal", "13:00", "uruguay"))
        }
        ${createCard("02/12", "sexta", 
        createGame("brazil", "16:00", "cameroon"))
      }
    </main>
`
