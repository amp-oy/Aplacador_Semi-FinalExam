<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink :to="{ name: 'Task' }">Task</RouterLink>
       <RouterLink :to="{ name: 'About' }">About</RouterLink>
      
    </nav>
  </div>
    <br>
      <RouterView />
  
</template>

