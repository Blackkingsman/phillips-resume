<template>
<div class="body">
    <div class="parallax2">
        <div class="header">
            ROTC
        </div>
    </div>
    <section class="dark">
        <h1 style="color: #FBCB07">
            RESERVE OFFICER TRAINING CORPS
        </h1>
        <div class="ROTCcontainer">

            <h2 style="padding: 10px 4%;">WHAT IS ROTC?</h2>
            <h3 style="font-size:18px; text-align: left;">
                <sm>The University of Central Oklahoma Army Reserve Officer’s Training Corps (ROTC) is designed to develop and train prospective Army officers. College students take ROTC classes and participate in related activities along with their normal college degree program, becoming an officer cadet and learning valuable leadership skills that are well-suited for either a military or civilian job.</sm>
            </h3>
        </div>

        <!-- <div class="ROTCcontainer">
            <h2 style="padding: 10px 4%;">WHY I CHOSE ROTC?</h2>
            <h3 style="font-size:18px; text-align: left;"> I chose ROTC because orginally I wanted to go into the U.S Marines enlisted. However, I discovered what the ROTC program could do for my career. This was a hard decision at first, because my dad was a U.S. marine and I wanted to serve as a Marine. I decided to take on the task and earn my degree in Computer Science. So, this way I could become a U.S. Army 2LT upon my graduation.</h3>
        </div> -->

        <div class="ROTCcontainer">
            <div class="Fortknoxcontainer">
                <h2 style="padding: 10px 4%;">CST(CADET SUMMER TRAINING) FORT KNOX, KY</h2>
            </div>
            <h3 style="font-size:18px; text-align: left;"> Advanced Camp is a 31-day training event that is designed to assess a Cadet’s ability to demonstrate proficiency in basic officer leadership tasks. Cadets are evaluated on their ability to lead at the Squad and Platoon levels, both in garrison and tactical environments. Cadets are mentally and physically tested during a 12-day consequence driven field training exercise that replicates a combat training center rotation. Successful completion of the Advanced Camp is a prerequisite for commissioning.
            </h3>
        </div>
        <div class="ROTCcontainer">
            <h2 style="padding: 10px 4%;">Photos</h2>
            <img class="ROTCimg" src="../images/collage.jpg">

        </div>
        <div class="Gradheader">
            <h2 style="top-margin: 35px">Graduation</h2>
        </div>
        <div class="row justify-content-md-center">
            <div class="col-md-6 col-12">
                <h4 >Oath of Office</h4>
                <div class="photo-container">
                    <img class="Oathimg" src="../images/oath.jpg">
                </div>
                <div class="img-footer">
                    <h4 >8 May 2020</h4>
                    <p>In this picture, I branched as a Armor Officer and recieved my 2LT Rank(Gold Bar)</p>
                </div>
            </div>
            <div class="col-md-6 col-12 " wid>
                <h4 >First Salute</h4>
                <div class="photo-container">
                    <img class="Oathimg" src="../images/firstsalute.jpg">
                </div>
                <div class="img-footer">
                    <h4>SPC LUIS LOPEZ</h4>
                    <p>It is a tradition in our Army that newly commissioned second lieutenants present a silver dollar to the first enlisted Soldier who salutes them. The coin symbolically acknowledges the receipt of respect due the new rank and position.</p>
                </div>
            </div>
        </div>
        <!-- <div class="GraduationPhotos" style="display: inline-block">
            <h4 style="font-size: 16px;">Oath of Office</h4>
            <div class="photo-container">
                <img class="Oathimg" src="../images/oath.jpg">
            </div>
            <div class="img-footer">
                <h4 style="font-size: 16px;">8 May 2020</h4>
            </div>
        </div> -->
        <!-- <div class="GraduationPhotos" style="display: inline-block">
            <h4 style="font-size: 16px;">First Salute</h4>
            <div class="photo-container">
                <img class="Oathimg" src="../images/firstsalute.jpg">
            </div>
            <div class="img-footer">
                <h4 style="font-size: 16px;">SPC LUIS LOPEZ</h4>

            </div>
        </div> -->
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

h4{
    margin: 20px !important;
}
.body {
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
    color: #666;
    text-align: center;
}

.parallax2 {
    background-image: url("../images/cst2.jpg");
    min-height: 60vh;

}

.ROTCcontainer {
    width: 50vw;
    margin: 40px auto;
}

.GraduationPhotos {
    flex-wrap: wrap;
    display: inline-block
}

.img-footer p {
    width: 75%;
    margin: 0 auto;
    text-align: center;
}

.Fortknoxcontainer {
    width: 35vw;
    margin: 0 auto;
}

.ROTCimg {
    max-height: 600px;
    width: 50vw;
    margin: 0 auto;
}

.photo-container {
    height: 400px;
}
h4{
    font-size: x-large;
}
.Oathimg {
    width: auto;
    max-width: 60vw;
    max-height: 100%;
}
</style>
