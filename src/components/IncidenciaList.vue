<template>
  <!-- Lista de incidencias -->
  <div>
    <h2>Lista de Incidencias</h2>

    <!-- Mostramos todas las incidencias -->
    <ul>
      <li v-for="inc in incidencias" :key="inc.id" >
        <strong>{{ inc.titulo }}</strong> — {{ inc.estado }}

        <!-- Botón para marcar como resuelta -->
        <button v-if="inc.estado !== 'resuelta'" @click="resolver(inc.id)">
          ✅ Resolver
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
// Importamos reactividad y ciclo de vida de Vue
import { ref, onMounted } from "vue";

// Importamos funciones de Firestore
import { db, collection, onSnapshot, updateDoc, doc, query, orderBy } from "../firebase";

// Variable reactiva donde se guardan las incidencias
const incidencias = ref([]);

// Al montar el componente, escuchamos los cambios en la colección "incidencias"
onMounted(() => {
  // Creamos una consulta ordenada por fecha de creación descendente
  const q = query(collection(db, "incidencias"), orderBy("fechaCreacion", "desc"));

  // Escuchamos los cambios en tiempo real con onSnapshot()
  onSnapshot(q, (snapshot) => {
    // Actualizamos el array local con los documentos del snapshot
    incidencias.value = snapshot.docs.map((d) => ({
      id: d.id,
      ...d.data()
    }));
  });
});

// Función para marcar una incidencia como resuelta
async function resolver(id) {
  await updateDoc(doc(db, "incidencias", id), { estado: "resuelta" });
}
</script>
