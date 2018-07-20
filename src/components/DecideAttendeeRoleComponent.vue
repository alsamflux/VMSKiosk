<template>
<v-container fluid style="min-height: 0;" fill-height> <!-- fill-height makes it fill the view screen vertically, spreading all the objects out -->
    <v-layout column align-center>
        <!-- <v-spacer></v-spacer> -->
        <span class="deep-purple--text flex display-2 font-weight-regular font-italic">
            
                         Welcome!
            
        </span>
        <div class="deep-purple--text flex caption font-weight-regular">
            
                          to the
            
        </div>
        <v-flex justify-center>
        <div class="deep-purple--text flex display-3 text-xs-center">
            
            Volunteer &amp; Visitor Sign-In Page

        </div>
        </v-flex>
        <v-flex justify-center>
        <div class="black--text flex display-3 font-weight-regular text-xs-center">
            
                         I Am...
            
        </div>
        </v-flex>
        <v-layout row wrap style="margin:0px 0px 0px">
            <v-flex justify-center> <!-- Very necessary to have buttons stay screen centered even if they wrap. https://stackoverflow.com/questions/46404884/vuetify-center-items-into-v-flex -->
                <div class="text-xs-center">  <!-- Very necessary to have buttons stay screen centered even if they wrap. -->
                    <v-btn :to="{ name: 'Post'}" flex class="green--text display-3 volunteeringbubble" 
                    style="margin-right:70px;padding:40px 100px 40px;box-shadow:0 0 20px green;"> <!-- margin-right keeps the buttons from butting up against each other. -->
                        <span flex style="padding:35px 0px 40px;">
                            
                            Volunteering
                            
                        </span> <!-- third size is bottom button square -->
                    </v-btn>
                </div>
            </v-flex>
            <v-flex justify-center> <!-- Very necessary to have buttons stay screen centered even if they wrap. -->
                <div class="text-xs-center">
                    <v-btn flex class="blue--text display-3 visitingbubble" 
                    style="margin-right:10px;padding:40px 100px 40px;box-shadow:0 0 20px #2196F3;"
                    >
                        <span flex style="padding:0px 0px 40px">
                            
                            Visiting
                        
                        </span>
                    </v-btn>
                </div>
            </v-flex>
        </v-layout>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

    </v-layout>
</v-container>
</template>
<!--<script src="//cdn.jsdelivr.net/jquery.color-animation/1/mainfile"></script>-->
<script>
export default {
    name: 'DecideAttendeeRole',
}
</script>

<!-- Support for thought bubbles -->

<!--
<script type="text/javascript">
    $(document).ready(function(){$(".volunteeringbubble").tooltip({text: "I am reporting for a Scheduled Volunteering Opportunity.", horzdir: -1,
    bgColor: "greenGloss", // whiteGloss, blackGloss, greenGloss, azureGloss, redGloss, pinkGloss, brownGloss
    width: "300px"
    });});
    $(document).ready(function(){$(".visitingbubble").tooltip({text: "I am visiting a Resident; I am not registered in the system.", horzdir: 1,
    bgColor: "azureGloss", // whiteGloss, blackGloss, greenGloss, azureGloss, redGloss, pinkGloss, brownGloss
    width: "300px"
    });});
</script>
-->
<script type="text/javascript">
    $(document).ready(function(){$(".volunteeringbubble").tooltip({text: "I am reporting for a Scheduled Volunteering Opportunity. I am already registered as a Volunteer.", horzdir: -1,
    bgColor: "greenGloss", // whiteGloss, blackGloss, greenGloss, azureGloss, redGloss, pinkGloss, brownGloss
    width: "300px",
    shiftboxhorz: -310,
    shiftbubblestartpointhorz: 0
    });});
    $(document).ready(function(){$(".visitingbubble").tooltip({text: "I am visiting a Resident; I won't be registering.", horzdir: 1,
    bgColor: "azureGloss", // whiteGloss, blackGloss, greenGloss, azureGloss, redGloss, pinkGloss, brownGloss
    width: "300px",
    shiftboxhorz: 25, // Move just the text box a tad to the right
    shiftbubblestartpointhorz: 340 // Move the whole collection of images way to the right so they come out of the end of the button.
    });});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<!--
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.resultContainer {
    height: 350px;
}

.item {
    min-height: 50px;
    min-width: 80px;
    margin: 10px;
}

.progress-linear{
    width:100px;
    display:inline-block;
    vertical-align:middle;
    height:15px !important;
    margin-right:10px;
}
span {
   text-transform: none !important; /* does not work on v-btn, so wrap text in a span */
}  /* trick to remove all padding */

button {
    border-radius: 10px; /* Works! Applies to all my v-btn objects on this document. */
}
</style>
-->
