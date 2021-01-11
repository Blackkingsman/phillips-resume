<template>
<div class="body">
    <div class="parallax4">
        <div class="header">
            Employment History
        </div>
    </div>
    <section class="dark">
         
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

h1 {
    margin: 20px;
    text-align: center !important;
    color: #FBCB07 !important;
}

i:last-child {
    color: #FBCB07 !important;
}

i:nth-child(1) {
    color: #15213B !important;
}

.parallax4 {
    background-image: url("../images/computertyping.jpg");
    min-height: 35vh;

}

.col {
    grid-column-gap: 100%;
}

li {
    text-align: left;
    color: #FBCB07 !important;
    font-size: x-large;
}
</style>
