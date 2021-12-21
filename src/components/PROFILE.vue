<template>
<div class="body">
    <div class="parallax1">
        <div class="header">
            Welcome to Terry's Online Resume
        </div>
    </div>
    <section class="dark" id="Profile">
        <h1 style="color:#FBCB07">
            Profile
        </h1>
        <h4>Motivated Leader Professional</h4>

        <div class="container">

            <div class="row" style="width: 100vw !important">
                <div class="column">
                    <h3 style="color:#FBCB07; text-align: center !important">About Me</h3>
                    <p align="left">Hello, my name is Terry Don Phillips Jr. I'm 22 years old, and I'm currently serving my country as a 19A (Tank Officer) and hold a rank of 2LT (Second Lieutenant). It has always been a goal of mine to serve my country! Additionally, I was born in Shawnee, OK, but was raised in Seminole, OK, Siloam Springs, Ar, and Edmond, OK. I have two sisters, Zarria and Alexis, and a dog named Max. I've been fascinated with technology from a very young age. However, when I reached the 9th grade, I desired to pursue a degree in computer science and join the military.  I want to work for a company that can respect my choice of serving in the military while working within the company as a developer/leader.</p>
                </div>
                <div class="column">
                            <img class="img-responsive" src="../images/headshots.png" alt="Avatar">
                        
                    
                </div>
                <div class="column">
                    <h3 style="color:#FBCB07">Name:</h3>
                    <h5>Terry Don Phillips Jr.</h5>
                    <h3 style="color:#FBCB07">Location:</h3>
                    <h5>Edmond, OK</h5>
                    <h3 style="color:#FBCB07">University</h3>
                    <h5>University of Central Oklahoma</h5>
                    <h3 style="color:#FBCB07">Degree:</h3>
                    <h5>Bachelor of Science</h5>
                    <h3 style="color:#FBCB07">Major:</h3>
                    <h5>Computer Science Applied</h5>
                    <h5> Minor: Military Science </h5>
                    <p></p>
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
.parallax1 {
    background-image: url("../images/uco.jpg");
    min-height: 100vh;

}

.parallax1,
.parallax2,
.parallax3,
.parallax4,
.parallax5 {
    position: relative;
    opacity: .75;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover
}

.two-col {
    width: 60%;
    padding: 0 4%;
    text-align: left;
}

.header {
    position: absolute;
    color: #fff;
    font-size: 450%;
    top: 38%;
    width: 100%;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-shadow: 0 0 10px #000;
}

section {
    overflow: auto;
    padding: 50px 80px;

}

.column {
    float: left;
    width: 33.33%;
    padding: 20px;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

@media screen and (max-width: 900px) {
    .column {
        width: 100%;
    }
}

#first {
    width: 35%;
    display: inline-block;
    flex: 1 1
}

#second {
    width: 40%;
    display: inline-block;
    flex: 1 1
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 90%;
    flex-wrap: wrap;
}

.headshotcropped {
    width: 300px;
    height: 300px;
    margin: 20px;
    border-radius: 50%;
    overflow: hidden;
}
.img-responsive {
    width: 100%;
    height: auto;
}
.headshotcropped img {
    margin: -10px 0px 0px -585px;
}

.dark {
    overflow: auto;
    padding: 50px 80px;
    background-color: #323232;
    color: #f2f2f2
}
</style>
