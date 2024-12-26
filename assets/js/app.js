// Elementos del formulario y vista previa
const deInput = document.getElementById("de");
const paraInput = document.getElementById("para");
const mensajeInput = document.getElementById("mensaje");

const previewPara = document.getElementById("previewPara");
const previewDe = document.getElementById("previewDe");
const previewMensaje = document.getElementById("previewMensaje");

const tarjeta = document.getElementById("tarjeta");
const descargarBtn = document.getElementById("descargarBtn");

// Actualizar la vista previa
deInput.addEventListener("input", () => {
  previewDe.textContent = `De: ${deInput.value || "Tu nombre"}`;
});

paraInput.addEventListener("input", () => {
  previewPara.textContent = `Para: ${paraInput.value || "Nombre del destinatario"}`;
});

mensajeInput.addEventListener("input", () => {
  previewMensaje.textContent = mensajeInput.value || "Tu mensaje aquí";
});

// Descargar tarjeta como imagen
descargarBtn.addEventListener("click", () => {
  html2canvas(tarjeta).then((canvas) => {
    const link = document.createElement("a");
    link.download = "tarjeta-navidad.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});


const textarea = document.getElementById('mensaje');

textarea.addEventListener('input', function () {
  this.style.height = 'auto'; // Restablece la altura
  this.style.height = this.scrollHeight + 'px'; // Ajusta la altura al contenido
});

