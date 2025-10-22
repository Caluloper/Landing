"use strict";

/**
 * Muestra el elemento toast interactivo en breakpoints md en adelante.
 * Busca el elemento con id "toast-interactive" y añade la clase Tailwind
 * `md:block` para forzar su visualización en pantallas medianas o mayores.
 *
 * @returns {void}
 */
const showToast = () => {
    const toast = document.getElementById("toast-interactive");
    if (toast) {
        toast.classList.add("md:block");
    }
};

/**
 * Añade un listener al botón de demo para abrir el vídeo en una nueva pestaña.
 * Busca el elemento con id "demo" y, si existe, atacha un manejador de click
 * que abre la URL especificada en una nueva ventana/pestaña.
 *
 * Nota: esta función no recibe parámetros y no devuelve valor.
 *
 * @returns {void}
 */
const showVideo = () => {
    const demo = document.getElementById("demo");
    if (demo) {
        demo.addEventListener("click", () => {
            window.open("https://www.youtube.com/watch?v=TYgxM_suaUw&list=RDTYgxM_suaUw&start_radio=1&pp=ygUEYTd4IKAHAdIHCQkGCgGHKiGM7w%3D%3D", "_blank");
        });
    }
};

(() => {
    showToast();
    showVideo();
})();