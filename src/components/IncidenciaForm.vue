<template>
  <!-- Formulario para crear una nueva incidencia -->
  <form @submit.prevent="crearIncidencia" class="p-4">

    <h2>Crear incidencias</h2>
    <!-- Campo de texto para el título -->
    <input 
      v-model="titulo" 
      placeholder="Título" 
      required 
    />

    <!-- Campo de texto para la descripción -->
    <textarea 
      v-model="descripcion" 
      placeholder="Descripción"
      required  
    ></textarea>

    <!-- Botón de envío -->
    <button type="submit">
      Crear incidencia
    </button>
  </form>
</template>

<script setup>
// Importamos funciones reactivas de Vue
import { ref } from "vue";

// Importamos las funciones necesarias de Firestore
import { db, collection, addDoc, serverTimestamp } from "../firebase";

// Variables reactivas que enlazan con los campos del formulario
const titulo = ref("");
const descripcion = ref("");

// Función para crear una nueva incidencia
async function crearIncidencia() {
  // Evita guardar incidencias vacías
  if (!titulo.value.trim()) return;

  // Añade un nuevo documento a la colección "incidencias"
  await addDoc(collection(db, "incidencias"), {
    titulo: titulo.value,
    descripcion: descripcion.value,
    estado: "pendiente",
    fechaCreacion: serverTimestamp() // Fecha del servidor (no del cliente)
  });

  // Limpia el formulario después de guardar
  titulo.value = "";
  descripcion.value = "";
}
</script>
