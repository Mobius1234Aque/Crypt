<!-- Escitala.svelte -->
<script lang="ts">
    import { cifrarEscitala, descifrarEscitala } from './escitala';
  
    let textoOriginal: string = '';
    let anchura: number = 0;
    let textoCifrado: string = '';
    let textoDescifrado: string = '';
  
    function cifrar() {
      textoCifrado = cifrarEscitala(textoOriginal, anchura);
    }
  
    function descifrar() {
      textoDescifrado = descifrarEscitala(textoCifrado, anchura);
    }
  </script>

  <main class="todo">
    <h1 class="mt-5">Cifrado y Descifrado de Escítala</h1>

    <div class="form-group">
      <label for="textoOriginal">Texto Original:</label>
      <textarea class="form-control" bind:value={textoOriginal} id="textoOriginal"></textarea>
    </div>
    
    <div class="form-group">
      <label for="anchura">Anchura:</label>
      <input class="form-control" type="number" bind:value={anchura} id="anchura" />
    </div>
    
    <div class="btones">
        <button class="btn btn-primary color1" on:click={cifrar}>Cifrar</button>
        <button class="btn btn-secondary" on:click={descifrar}>Descifrar</button>
    </div>
  
    <div>
      <h2 class="mt-2">Texto Cifrado:</h2>
      <p>{textoCifrado}</p>
    </div>
  
    <div>
      <h2 class="mt-2">Texto Descifrado:</h2>
      <p>{textoDescifrado}</p>
    </div>
  </main>
  
  <style>
    /* Importar los estilos de Bootstrap */
    @import 'bootstrap/dist/css/bootstrap.min.css';
    
  </style>