var Params = function(controllerReady) {
    this.sex = null;
    this.ethnicity = null;
    this.major = null;
    this.controllerReady = controllerReady;

    this.percent = null;

    this.sexChosen = false;
    this.ethnicityChosen = false;
    this.majorChosen = false;
};

Params.prototype.chooseSex = function(sex) {
    this.sex = sex;
    this.sexChosen = true;

    this.changeTotalAnswer();

    document.getElementById("sex").style.display = "none";
    if (!this.ethnicity) {
        document.getElementById("ethnicity").style.display = "inline";
    }
    document.getElementById("sexUndo").style.display = "inline";
    document.getElementById("sexUndoButton").style.display = "inline";

    this.check();
};

Params.prototype.chooseEthnicity = function(ethnicity) {
    this.ethnicity = ethnicity;
    this.ethnicityChosen = true;

    this.changeTotalAnswer();

    document.getElementById("ethnicity").style.display = "none";
    if (!this.major) {
        document.getElementById("major").style.display = "inline";
    }
    document.getElementById("ethnicityUndo").style.display = "inline";
    document.getElementById("ethnicityUndoButton").style.display = "inline";

    this.check();
};

Params.prototype.chooseMajor = function(major) {
    this.major = major;
    this.majorChosen = true;

    this.changeTotalAnswer();

    document.getElementById("major").style.display = "none";
    document.getElementById("majorUndo").style.display = "inline";
    document.getElementById("majorUndoButton").style.display = "inline";

    this.check();
};

Params.prototype.undoSex = function() {
    this.sexChosen = false;
    document.getElementById("sex").style.display = "inline";
    document.getElementById("sexUndo").style.display = "none";

    this.check();
};

Params.prototype.undoEthnicity = function() {
    this.ethnicityChosen = false;
    document.getElementById("ethnicity").style.display = "inline";
    document.getElementById("ethnicityUndo").style.display = "none";

    this.check();
};

Params.prototype.undoMajor = function() {
    this.majorChosen = false;
    document.getElementById("major").style.display = "inline";
    document.getElementById("majorUndo").style.display = "none";

    this.check();
};

Params.prototype.check = function() {
    if (!this.sexChosen) {
        document.getElementById("checkSex").style.display = "inline";
    } else {
        document.getElementById("checkSex").style.display = "none";
    }
    if (!this.ethnicityChosen) {
        document.getElementById("checkEthnicity").style.display = "inline";
    } else {
        document.getElementById("checkEthnicity").style.display = "none";
    }
    if (!this.majorChosen) {
        document.getElementById("checkMajor").style.display = "inline";
    } else {
        document.getElementById("checkMajor").style.display = "none";
    }

    if (this.sexChosen && this.ethnicityChosen && this.majorChosen) {
        //document.getElementById("startButton").style.display = "inline";
        document.getElementById("controllerPrompt").style.display = "inline";
        this.controllerReady.playerOneParams = true;
        this.controllerReady.update();
    } else {
        //document.getElementById("startButton").style.display = "none";
        document.getElementById("controllerPrompt").style.display = "none";
        this.controllerReady.playerOneParams = false;
    }
};

Params.prototype.changeTotalAnswer = function() {
    document.getElementById("completeAnswer").innerHTML = "Player 1 chose a(n) '" 
        + this.ethnicity + "' '" + this.sex + "' majoring in '" + this.major + "'.";
};

Params.prototype.setPercent = function() {
    switch (this.sex) {
        case ("Male"):
            switch (this.ethnicity) {
                case ("White"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent = 42;
                            break;
                        case ("Engineering"):
                            this.percent = 29;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent = 83;
                            break;
                        case ("Physical Sciences"):
                            this.percent = 39;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent = 98;
                            break;
                        default:
                            this.percent = 51;
                            break;
                    }
                    break;
                case ("Asian or Pacific Islander"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent = 47;
                            break;
                        case ("Engineering"):
                            this.percent = 36; 
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  58;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  50;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  132;
                            break;
                        default:
                            this.percent =  54;
                            break;
                    }
                    break;
                case ("Black"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent =  16;
                            break;
                        case ("Engineering"):
                            this.percent =  10;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  38;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  19;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  63;
                            break;
                        default:
                            this.percent =  27;
                            break;
                    }
                    break;
                case ("Hispanic or Latio"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent =  20;
                            break;
                        case ("Engineering"):
                            this.percent =  15;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  42;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  22;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  59;
                            break;
                        default:
                            this.percent =  28;
                            break;
                    }
                    break;
                case ("American Indian or Alaska Native"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent =  18;
                            break;
                        case ("Engineering"):
                            this.percent =  14;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  37;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  20;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  54;
                            break;
                        default:
                            this.percent =  29;
                            break;
                    }
                    break;
                default:
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent =  35;
                            break;
                        case ("Engineering"):
                            this.percent =  27;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  71;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  37;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  92;
                            break;
                        default:
                            this.percent =  46;
                            break;
                    }
                    break;

            }
            break;
        case (female):
            switch (this.ethnicity) {
                case ("White"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent =  36;
                            break;
                        case ("Engineering"):
                            this.percent =  27;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  85;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  36;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  106;
                            break;
                        default:
                            this.percent =  61;
                            break;
                    }
                    break;
                case ("Asian or Pacific Islander"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent = 46; 
                            break;
                        case ("Engineering"):
                            this.percent =  33;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  62;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  51;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  126;
                            break;
                        default:
                            this.percent =  64;
                            break;
                    }
                    break;
                case ("Black"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent =  15;
                            break;
                        case ("Engineering"):
                            this.percent =  11;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  55;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  23;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  63;
                            break;
                        default:
                            this.percent =  36;
                            break;
                    }
                    break;
                case ("Hispanic or Latio"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent =  19;
                            break;
                        case ("Engineering"):
                            this.percent =  20;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  46;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  31;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  57;
                            break;
                        default:
                            this.percent =  38;
                            break;
                    }
                    break;
                case ("American Indian or Alaska Native"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent =  26;
                            break;
                        case ("Engineering"):
                            this.percent =  8;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  32;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  65;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  68;
                            break;
                        default:
                            this.percent =  39;
                            break;
                    }
                    break;
                default:
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent = 31;
                            break;
                        case ("Engineering"):
                            this.percent =  25;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  76;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  34;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  93;
                            break;
                        default:
                            this.percent =  54;
                            break;
                    }
                    break;

            }
            break;
        default:
            switch (this.ethnicity) {
                case ("White"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent =  38;
                            break;
                        case ("Engineering"):
                            this.percent =  29;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  82;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  39;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  102;
                            break;
                        default:
                            this.percent =  55;
                            break;
                    }
                    break;
                case ("Asian or Pacific Islander"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent =  46;
                            break;
                        case ("Engineering"):
                            this.percent =  35;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  59;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  51;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  127;
                            break;
                        default:
                            this.percent =  58;
                            break;
                    }
                    break;
                case ("Black"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent =  15;
                            break;
                        case ("Engineering"):
                            this.percent =  10;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  43;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  21;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  64;
                            break;
                        default:
                            this.percent =  32;
                            break;
                    }
                    break;
                case ("Hispanic or Latio"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent =  19;
                            break;
                        case ("Engineering"):
                            this.percent =  17;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  45;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  26;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  57;
                            break;
                        default:
                            this.percent =  33;
                            break;
                    }
                    break;
                case ("American Indian or Alaska Native"):
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent =  21;
                            break;
                        case ("Engineering"):
                            this.percent =  12;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  34;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  26;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  62;
                            break;
                        default:
                            this.percent =  34;
                            break;
                    }
                    break;
                default:
                    switch (this.major) {
                        case ("Biological and Agricultural Sciences"):
                            this.percent =  32;
                            break;
                        case ("Engineering"):
                            this.percent =  27;
                            break;
                        case ("Mathematics, Statistics, and Computer Sciences"):
                            this.percent =  73;
                            break;
                        case ("Physical Sciences"):
                            this.percent =  35;
                            break;
                        case ("Social and Behavioral Sciences"):
                            this.percent =  92;
                            break;
                        default:
                            this.percent =  50;
                            break;
                    }
                    break;
            }
            break;
    }
    /*
    this.sex = null;
    this.ethnicity = null;
    this.major = null;
    */
};
