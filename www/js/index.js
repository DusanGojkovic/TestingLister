/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


 function izracunaj(){
            
           var agregat=document.getElementById("agregat").value;
           var startCas=document.getElementById("start_cas").value;
           var startMin=document.getElementById("start_min").value;
           var endCas=document.getElementById("end_cas").value;
           var endMin=document.getElementById("end_min").value;
     
     
            if(startCas=="" || startMin=="" || endCas=="" || endMin==""){
                
               document.getElementById("greska").style.display="block";
               document.getElementById("greska").innerHTML="popunite sva polja!";
               document.getElementById("rezultat").style.display="none";
           }
           else{
             document.getElementById("greska").style.display="none";
             document.getElementById("rezultat").style.display="block";
           }
          


           var start=startCas+"."+startMin;
           var end=endCas+"."+endMin;
           console.log(end);
           var endParsed=parseFloat(end);
           var startParsed=parseFloat(start);

           var moto=endParsed-startParsed;

           var motocas=(moto*60/60).toFixed(2);

           var gorivo=motocas*agregat;

           var ispis="Agregat je ukupno radio:"+"<br>"+motocas+" "+"motocasa"+"<br>"+"Goriva potrošeno za to vreme:"+gorivo.toFixed(2);
           document.getElementById("rezultat").innerHTML=ispis;
             
          }


        function ponisti() {
           var startCas=document.getElementById("start_cas").value="";
           var startMin=document.getElementById("start_min").value="";
           var endCas=document.getElementById("end_cas").value="";
           var endMin=document.getElementById("end_min").value="";
            document.getElementById("rezultat").innerHTML="";


        } 


    document.getElementById("izracunaj").addEventListener("click",izracunaj);
    document.getElementById("ponisti").addEventListener("click",ponisti);
