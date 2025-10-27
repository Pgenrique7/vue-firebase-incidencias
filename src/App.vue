<template>
  <h1 class="page-title">Incidencias prueba (Vue + Firebase)</h1>
  <main class="main-container">
    <section class="form-section">
      <IncidenciaForm />
    </section>

    <section class="list-section">
      <IncidenciaList />
    </section>
  </main>
</template>

<script setup>
import IncidenciaForm from "./components/IncidenciaForm.vue";
import IncidenciaList from "./components/IncidenciaList.vue";
</script>

<style>
.page-title {
  margin-top: 5%;
  text-align: left;
  color: #333;
}

.main-container {
  width: 100%;
  max-width: 1200px;   
  margin: 0 auto;      
  display: flex;
  gap: 32px;
  padding: 16px 24px 32px;
  box-sizing: border-box;
}

.form-section {
  flex: 0 0 36%;      
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,.08);
  min-width: 300px;
}

.list-section {
  flex: 1;            
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,.08);
  min-width: 340px;
}

/* Responsive*/
@media (max-width: 900px) {
  .main-container {
    flex-direction: column;
    padding: 8px 16px 24px;
  }
  .form-section,
  .list-section {
    min-width: 0;
    width: 100%;
  }
}

/* Fondo general opcional para dar contraste */
html, body {
  background: #f2f3f5;
  margin: 0;
}
</style>
