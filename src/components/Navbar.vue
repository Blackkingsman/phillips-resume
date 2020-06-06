<template>
<div>
    <b-navbar class="mainnav" toggleable="lg" type="dark" fixed="top" variant="dark">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#" v-scroll-to="'#Profile'">Profile</b-nav-item>
                <b-nav-item href="#" v-scroll-to ="'#ROTC'">ROTC</b-nav-item>
                <b-nav-item href="#" v-scroll-to="'#Projects'">Projects</b-nav-item>
                <b-nav-item href="#" v-scroll-to="'#Skills'">Skills</b-nav-item>
                <b-nav-item href="#" v-scroll-to="'#EmploymentHistory'">Employment History</b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
</style>
