<template>
    <nav>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <div :class="nav - links">
            <router-link :to="{ name: 'Active' }">Active</router-link>
            <router-link :to="{ name: 'Cured' }">Cured</router-link>
            <router-link :to="{ name: 'Deaths' }">Deaths</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavigationBar',
}
</script>