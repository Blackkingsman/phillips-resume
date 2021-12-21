<template>
<div>
    <b-navbar class="nav" toggleable="lg"  fixed="top"  >
        <b-navbar-brand class="" >Terry's Portfolio </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav >
                <b-nav-item style="color: white !important" href="#" v-scroll-to="'#Profile'">Profile</b-nav-item>
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
   data: function() {
  return {
    isActive: false
  };
},
    name: 'Navbar',
    methods: {
        handleScroll: function (){
 this.isUserScrolling = (window.scrollY > 900);
 if(window.scrollY>900){
     this.isActive=true;
      console.log('calling handleScroll ' + window.scrollY.toString()) ;
 }else{
     this.isActive = false;
 }
        }
    },
    created: function(){
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function(){
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
   .nav {
    width: 100%;
    height: 65px;
    position: fixed;
    line-height: 65px;
    text-align: center;
}

 .nav-brand{
    float: left;
    width: auto;
    height: auto;
    padding-left: 3rem;
}

.nav div.logo a {
    text-decoration: none;
    color: #fff;
    font-size: 2.5rem;
}

.nav div.logo a:hover {
    color: #00E676;
}

.nav div.main_list {
    height: 65px;
    float: right;
}

.nav div.main_list ul {
    width: 100%;
    height: 65px;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav div.main_list ul li {
    width: auto;
    height: 65px;
    padding: 0;
    padding-right: 3rem;
}

.nav div.main_list ul li a {
    text-decoration: none;
    color: #fff;
    line-height: 65px;
    font-size: 2.4rem;
}

.nav div.main_list ul li a:hover {
    color: #00E676;
}
</style>
