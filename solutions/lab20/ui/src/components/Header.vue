<template>
    <nav class= "navbar">
        <div class="container">
            <router-link class="navbar-brand" :to="{name:'home'}">Logo</router-link>
            <ul class="nav navbar-nav flex-row">
                <li class="nav nav-bar p-2">
                    <router-link class="nav-link"  active-class="active" exact :to="{name:'home'}">Home</router-link>
                </li>
                <li  class="nav nav-bar p-2">
                    <router-link class="nav-link" active-class="active" exact :to="{name:'login'}">Sign In</router-link>
                </li>
                <li  class="nav nav-bar p-2">
                    <router-link class="nav-link" active-class="active" exact :to="{name:'register'}"><i class="ion-compose"></i>Sign Up</router-link>             
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'Header'
    }
</script>