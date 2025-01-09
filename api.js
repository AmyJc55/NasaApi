
const API_KEY = "SHV5c4grtQUPTnZN9QP4BLt8G0f6mL5gUzZMnzx7";

// Event listener para el botón "Ver imagen"
document.getElementById("fetch-data").addEventListener("click", async () => {
  // Obtener la fecha seleccionada por el usuario
  const date = document.getElementById("date").value;

  // Verificar si el usuario ha seleccionado una fecha
  if (!date) {
    // Si no se ha seleccionado una fecha, mostrar una alerta
    alert("Por favor selecciona una fecha.");
    return; // Salir de la función si no hay fecha seleccionada
  }

  // Crear la URL para hacer la solicitud a la API de NASA
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;

  try {
    // Hacer la solicitud HTTP a la API de NASA
    const response = await fetch(url);
    
    // Parsear la respuesta JSON
    const data = await response.json();

    // Llamar a la función que mostrará los resultados
    displayResult(data);
  } catch (error) {
    // Si ocurre algún error durante la solicitud, se muestra un mensaje en consola
    console.error("Error fetching data:", error);
    // También se muestra una alerta al usuario
    alert("Ocurrió un error al obtener la información.");
  }
});

// Función para mostrar el resultado de la API
function displayResult(data) {
  // Obtener los elementos del DOM donde se mostrarán los datos
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const image = document.getElementById("image");
  const video = document.getElementById("video");
  const result = document.getElementById("result");

  // Establecer el título de la imagen o video
  title.textContent = data.title;
  // Establecer la descripción de la imagen o video
  description.textContent = data.explanation;

  // Verificar si el contenido es una imagen o un video
  if (data.media_type === "image") {
    // Si es una imagen, establecer la URL de la imagen
    image.src = data.url;
    // Mostrar la imagen y ocultar el video
    image.classList.remove("hidden");
    video.classList.add("hidden");
  } else if (data.media_type === "video") {
    // Si es un video, establecer la URL del video
    video.src = data.url;
    // Mostrar el video y ocultar la imagen
    video.classList.remove("hidden");
    image.classList.add("hidden");
  }

  // Mostrar la sección de resultados (que estaba oculta inicialmente)
  result.classList.remove("hidden");
}
document.getElementById("fetch-data").addEventListener("click", async () => {
    const date = document.getElementById("date").value;
  
    if (!date) {
      alert("Por favor selecciona una fecha.");
      return;
    }
  
    const url = `/nasa-apod?date=${date}`;  // Llamar a tu servidor local
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      displayResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Ocurrió un error al obtener la información.");
    }
  });