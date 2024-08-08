document.addEventListener('DOMContentLoaded', () => { //no se que es esto la verdad
    fetchComments();
});

function fetchComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => { // AQUI ESTA EL TERNARY OPERATOR
        const status = response.ok ?? 400;
        
        return response.json();
    })// Convertir la respuesta a JSON
        .then(data => { // Aquí ya tenemos los datos
            const comments = data.slice(0, 10); // Tomar solo los primeros 10 comentarios
            const cardsContainer = document.getElementById('benefits-cards'); // Obtener el contenedor de las tarjetas
            comments.forEach(comment => { // Iterar sobre los comentarios
                const card = document.createElement('div'); // Crear un elemento div
                card.className = 'card'; // Agregar la clase card al div
                //Aqui escribes el contenido de la card en html desde javascript:
                card.innerHTML = `
                    <h3>${comment.name}</h3>
                    <p>${comment.body}</p>
                    <p><strong>Email:</strong> ${comment.email}</p>
                `; // Agregar el contenido del comentario al div
                cardsContainer.appendChild(card); // Agregar la tarjeta al contenedor
            });
        })
        .catch(error => console.error('Error fetching comments:', error)); // Manejar errores
}


function botonPresionado() {
    alert("Usted es afortunado!");
    console.log(1);
}


// DUDAS



// 5. ¿Como puedo alinear la imagen del logo al lado del title examen cursito cursito?