'use strict';
angular.module('bachelor-patrick-fieger', ['ngRoute']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]).run(function($rootScope) {

})
.controller('IndexCtrl', ['$scope','$http','$timeout', function($scope,$http,$timeout) {


    // Variablen Initialisierung

    $scope.patients = ["Jenny V.","Rebekka R.","Vicky V.","Angi K.","Karla R.","Marcel F.","Max R.","Eugen T.","Roman J.","Matthias B.","Günes Y. (KNN Beispiel 1)","Pablo B. (KNN Beispiel 2)"];
    $scope.calender = ["KW 1","KW 2","KW 3","KW 4","KW 5","KW 6","KW 7","KW 8","KW 9","KW 10","KW 11","KW 12","KW 13","KW 14","KW 15","KW 16","KW 17","KW 18","KW 19","KW 20","KW 21","KW 22","KW 23","KW 24","KW 25","KW 26","KW 27","KW 28","KW 29","KW 30","KW 31","KW 32","KW 33","KW 34","KW 35","KW 36","KW 37","KW 38","KW 39","KW 40","KW 41","KW 42","KW 43","KW 44","KW 45","KW 46","KW 47","KW 48","KW 49","KW 50","KW 51","KW 52"];
    
    var color1 = "#e0d468"
    var color2 = "#f88654"
    var chart;
    var isLineChartInizialized = false;

    $scope.bar_point_one = buildNumberArray(4)
    $scope.bar_point_all = buildNumberArray(94)

    $scope.first_patient = [];
    $scope.second_patient = [];

    $scope.first_patient_calculated = [];
    $scope.second_patient_calculated = [];

    $scope.showBars = false;
    $scope.showLines = false;

    $scope.bild1 = "placeholder.png"
    $scope.bild2 = "placeholder.png"

    $scope.patient1 = "";
    $scope.patient2 = "";
    $scope.datum1 = "";
    $scope.datum2 = "";

    $scope.patient1_befindlichkeit = 0;
    $scope.patient2_befindlichkeit = 0;

    $scope.question_choosed;
    $scope.question_choosed_text = "";

    $scope.calculateAll = false;

    $scope.questions = [];
    var validRequest = false;

    $scope.isInit = false;

    $scope.showAlertNotification = false;
    $scope.notification = "";


    // Nur zur Übersicht
    function buildNumberArray(max){
        var arr = [];
        for (let index = 0; index <= max; index++) {
            arr.push(index);
        }
        return arr;
    }


    // Lade alle Fragen und Bilde
    $http.get('/questions')
    .success(function(data,status){
        $scope.questions = data;

        console.log($scope.questions)

        $timeout(function(){
            $('#question_chooser').find('option').eq(25).attr('disabled', true);
        },1000);
    });

    // Checkt, ob wir Daten laden sollten
    $scope.checkWeHaveToLoadData = function(){
    
        if($scope.patient1 !== ""){
            $scope.bild1 = $scope.patient1 + ".jpg"
        }

        if($scope.patient2 !== ""){
            $scope.bild2 = $scope.patient2 + ".jpg"
        }

        if($scope.patient1 !== ""
            && $scope.patient2 !== ""
            && $scope.datum1 !== ""
            && $scope.datum2 !== ""
        ){
            if(parseInt($scope.datum1) <= parseInt($scope.datum2)){
                validRequest = true;
                if(!$scope.isInit){
                    $timeout(function(){
                        $scope.showBars = true;
                    },1000)
                }

                $scope.isInit = true;
                loadData();
            }else{
                validRequest = false;
                showAlert('Bitte wählen Sie einen richtigen Zeitraum aus!')
            }
        }
    }


    // Läd Daten aus einer JSON-Datei auf dem Server
    function loadData(){
        $http.get('/patient/' + $scope.patient1 + "/" + $scope.datum1 + "/" + $scope.datum2)
        .success(function(data,status){
            $scope.first_patient = data;
        });

        $http.get('/patient/' + $scope.patient2 + "/" + $scope.datum1 + "/" + $scope.datum2)
        .success(function(data,status){
            $scope.second_patient = data;
        });

        $timeout(function(){
            if($scope.question_choosed !== ""){
                $scope.chooseDataSetFromPatients();
            }
        },300)
    }

    $scope.questionIncrease = function(increase){
        if(increase){
            $scope.question_choosed++;
            if($scope.question_choosed == 24) $scope.question_choosed++;
        }else{
            $scope.question_choosed--;
            if($scope.question_choosed == 24) $scope.question_choosed--;
        }

        console.log($scope.question_choosed)

        $scope.chooseDataSetFromPatients();
    }

    // Berechnet die Befindlichkeit über einen bestimmten Zeitraum
    function calculateBefindlichkeit(){
        var befindlichkeit1 = 0;
        var befindlichkeit2 = 0;

        for (let index = 0; index < $scope.first_patient_calculated.length; index++) {
            befindlichkeit1 += $scope.first_patient_calculated[index].befindlichkeit;
        }

        for (let index = 0; index < $scope.second_patient_calculated.length; index++) {
            befindlichkeit2 += $scope.second_patient_calculated[index].befindlichkeit;
        }

        $scope.patient1_befindlichkeit = Math.round(befindlichkeit1 / $scope.first_patient_calculated.length) 
        $scope.patient2_befindlichkeit = Math.round(befindlichkeit2 / $scope.second_patient_calculated.length) 
    }


    // Aufbereitung zur Datendarstellung
    function calculateTable(calculateAll, index___){
        $scope.first_patient_calculated = [];
        $scope.second_patient_calculated = [];

        $scope.calculateAll = calculateAll;

        if(calculateAll){
            for (let index = 0; index < $scope.first_patient.length; index++) {
                var all = 0;
                for (let index2 = 0; index2 < $scope.first_patient[index].questions.length; index2++) {
                    all += $scope.first_patient[index].questions[index2];
                }

                var first_ = $scope.first_patient[index];
                first_.all = all

                $scope.first_patient_calculated.push(first_)   
            }

            for (let index = 0; index < $scope.second_patient.length; index++) {
                var all = 0;
                for (let index2 = 0; index2 < $scope.second_patient[index].questions.length; index2++) {
                    all += $scope.second_patient[index].questions[index2];
                }

                var second_ = $scope.second_patient[index];
                second_.all = all

                $scope.second_patient_calculated.push(second_)
            }
        }else{
            for (let index = 0; index < $scope.first_patient.length; index++) {
                var first_ = $scope.first_patient[index];
                first_.question_choosed = first_.questions[index___]

                $scope.first_patient_calculated.push(first_)   
            }

            for (let index = 0; index < $scope.second_patient.length; index++) {
                var second_ = $scope.second_patient[index];
                second_.question_choosed = second_.questions[index___]

                $scope.second_patient_calculated.push(second_)   
            }
        }

        
        calculateBefindlichkeit();
        UpdateLineChart();
    }

    
    // Funktion um Line-Chart zu initialisieren
    function UpdateLineChart(){
        var doc = document.getElementById("line_chart__");

        doc.height = $('.bars').height() + 70
        doc.width = $('.bars').width()
        $('.line_chart,.lines,#line_chart__').width($('.bar_wrapper').width());
        $('.line_chart,.lines,#line_chart__').height($('.bar_wrapper').height() + 70);

        if(!isLineChartInizialized){
            isLineChartInizialized = true;
            chart = new Chart(doc, {
                type: 'line',
                data: {
                  labels: getDateArray(),
                  datasets: [{ 
                      data: getOnlyAnwsersFromArray($scope.first_patient_calculated),
                      label: $scope.patients[$scope.patient1 - 1],
                      borderColor: color1,
                      fill: false
                    }, { 
                      data: getOnlyAnwsersFromArray($scope.second_patient_calculated),
                      label: $scope.patients[$scope.patient2 - 1],
                      borderColor: color2,
                      fill: false
                    }
                  ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                stepSize: 1,
                                beginAtZero: true,
                                suggestedMax: 4
                            }
                        }]
                    },
                    options: {
                        events: []
                    },
                    animation: {
                        duration: 2000, // general animation time
                        easing:"easeInOutExpo"
                    },
                    elements: {
                        line: {
                            tension: 0, // disables bezier curves
                        }
                    },
                    label:{
                        display: false
                    }
                }
              });
        }else{
            chart.data.labels = getDateArray(),
            chart.data.datasets = [{ 
                data: getOnlyAnwsersFromArray($scope.first_patient_calculated),
                label: "Patient " + $scope.patient1,
                borderColor: color1,
                fill: false
              }, { 
                data: getOnlyAnwsersFromArray($scope.second_patient_calculated),
                label: "Patient " + $scope.patient2,
                borderColor: color2,
                fill: false
              }
            ]
            chart.update();
        }
    }



    function getOnlyAnwsersFromArray(obj){
        var arr = [];

        for (let index = 0; index < obj.length; index++) {
            if($scope.calculateAll){
                arr.push(obj[index].all)
            }else{
                arr.push(obj[index].question_choosed)
            }
        }

        return arr;
    }

    function getDateArray(){
        var date_array = [];
        var begin = parseInt($scope.datum1);
        var end = parseInt($scope.datum2);
        for (let index = begin; index <= end; index++) {
            date_array.push(index);
        }

        return date_array;
    }

    $scope.chooseDataSetFromPatients = function(){
        var index = parseInt($scope.question_choosed);
        
        $scope.question_choosed_text = $scope.questions[index];

        if(validRequest){
            if(index == 0){
                calculateTable(true,0)
            }else{
                var i = index < 24 ? index - 1 : index - 2

                calculateTable(false,i);
            }
        }
    }

    // Funktion zum Anzeigen von Fehlern
    function showAlert(text){
        $scope.showAlertNotification = true;
        $scope.notification = text;
        $timeout(function(){
            $scope.showAlertNotification = false;
        },5000)
    }

    $('.bar_wrapper').hover(function(e){
        if($(e.target).hasClass('date')){
            $('.bar_wrapper').removeClass('hover');
            e.preventDefault();
        }else{
            $('.bar_wrapper').addClass('hover');
        } 
    },function(){
        $('.bar_wrapper').removeClass('hover');
    });

    $(document).on('mousemove','.bar_wrapper',function(e){
        if($('.bar_wrapper').hasClass('hover')){
            var parentOffset = $('.bar_wrapper').offset(); 
            var relY = e.pageY - parentOffset.top;

            $('.line_hover').css('top', relY + 'px');
        }
    });

    $(document).on('click','#erklaerung button',function(){
        $('#erklaerung').removeClass('active')
        $timeout(function(){
            $('.start_anim').each(function(index,el){
                var that = $(this)
                $timeout(function(){
                    that.addClass('start_active');
                },150 * index)
            });
        },1000)
    });

    $timeout(function(){
        $('#erklaerung').addClass('active')
    },500)
    
}]);