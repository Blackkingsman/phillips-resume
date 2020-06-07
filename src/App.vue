<template>
  <div>
   <Navbar/>
   <Profile/>
   <ROTC id="ROTC"/>
   <Projects id="Projects"/>
   <Skills id ="Skills"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Profile from './components/PROFILE'
import ROTC from './components/ROTC'
import Projects from './components/PROJECTS'
import Skills from './components/SKIlls'
export default {
  name: 'App',
  components: {
    Navbar,
    Profile,
    ROTC,
    Projects,
    Skills
  }
}
</script>