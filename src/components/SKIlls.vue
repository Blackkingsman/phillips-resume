<template>
<div class="body">
    <div class = "parallax4">
        <div class ="header">
            Skills
        </div>
    </div>
    <section class="dark">
        <h1>
            Skills Stuff
        </h1>
        <h3>2016-2020</h3>
            <p>Skills stuff</p>
           <div class="col-sm-3">
                                <div class="skill-item">
                                    <span class="fa-stack fa-4x">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-html5 fa-stack-1x text-primary"></i>
                                </span>
                                    <h4>
                                        <strong>HTML</strong>
                                    </h4>
                                </div>
                            </div>
    </section>
</div>
</template>

<script>
import Parallax from 'vue-parallaxy'
export default {
    name: "Profile",
    Parallax
}
</script>

<style>
.body {
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
    color: #666;
    text-align: center;
}
.parallax4{
    background-image: url("../images/skills.jpeg");
    min-height: 35vh;

}


</style>