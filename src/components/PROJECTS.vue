<template>
<div class="body">
    <div class="parallax3">
        <div class="header">
            Projects
        </div>
    </div>
    <section class="dark">
        <div class="outer-wrapper">
            <div class="wrapper">
                <div class="slide one">
                    <h1 style="color: #FBCB07">Webserver (Node.js) </h1>
                    <iframe class="youtube" src="https://www.youtube.com/embed/videoseries?list=PLIhcadFe-zD-Z_rJ4-K5Pow0RZFISYuvp">
                    </iframe>
                </div>
                <div class="slide two">
                <h1 style="color: #15213B">Internet of Things (Python 3) </h1>
                    <iframe class="youtube" src="https://www.youtube.com/embed/videoseries?list=PLIhcadFe-zD_niF4J0qVyLha2MOYWDiYc">
                    </iframe>
                </div>
                <div class="slide three">
                    <h1 style="color: #FBCB07">Mobile Apps (Flutter) </h1>
                    <iframe class="youtube" src="https://www.youtube.com/embed/videoseries?list=PLIhcadFe-zD-Z_rJ4-K5Pow0RZFISYuvp">
                    </iframe>
                </div>
                <div class="slide four">
                     <h1 style="color: #15213B">Object Oriented Software Construct (Java) </h1>
                    <iframe class="youtube" src="https://www.youtube.com/embed/videoseries?list=PLIhcadFe-zD9etFf4GogqVbcSIbXLwbtS">
                    </iframe>
                </div>
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

.parallax3 {
    background-image: url("../images/computerscience.jpg");
    min-height: 30vh;

}
.youtube {
    height: 90.5%;
    width: inherit;
}
.slide {
    width: 80vw;
    height: 60vh;
}

.wrapper {
    display: flex;
    flex-direction: row;
    width: 320vw
}

.one {
    background: #15213B;
    
}

.two {
    background: #FBCB07
}

.three {
    background:#15213B;
}

.four {
    background: #FBCB07
}

.outter-wrapper {
    width: 100vh;
    height: 100vw;
    transform: rotate(-90deg);
    transform-origin: top left;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;

}

::-webkit-scrollbar {
    display: none
}
</style>
