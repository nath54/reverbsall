
window.ligne=null;
window.mode=0;

function randomchoice(liste){ return liste[parseInt(Math.random()*liste.length)]; }

function traitre_txt(txt){
    ntxt=txt
    ntxt=txt.toLowerCase();
    replacements={
        "é":"e",
        "è":"e",
        "ê":"e",
        "ë":"e",
        "â":"a",
        "ä":"a",
        "à":"a",
        "á":"a",
        "ç":"c",
        "ù":"u",
        "ú":"u",
        "û":"u",
        "ü":"u",
        "î":"i",
        "ï":"i",
        "í":"i",
        "ö":"o",
        "ô":"o",
        "ó":"o",
        "ñ":"n",
        " ":"",
        "\t":"",
        "\r":"",
        "\n":"",
        "!":"",
        ",":"",
        "?":"",
        ";":"",
        ".":"",
        ":":"",
        "/":"",
        "§":"",
        "%":"",
        "*":"",
        "-":"",
        "_":"",
        "'":"",
        '"':"",
        "(":"",
        ")":"",
        "&":"",
        "#":"",
        "{":"",
        "[":"",
        "|":"",
        "`":"",
        "\\":"",
        "^":"",
        "@":"",
        "]":"",
        "}":"",
        "=":"",
        "+":"",
        "°":"",
        "€":"",
        "£":"",
        "µ":"",
        "’":""
    }
    for(k of Object.keys(replacements)){
        while(ntxt.includes(k)){ ntxt=ntxt.replace(k,replacements[k]); }
    }

    return ntxt
}


function aff_q(){
    document.getElementById("francais").innerHTML=window.ligne[0];
    //inf
    var inf=document.createElement("input");
    inf.setAttribute("id","infinitif");
    for(c of document.getElementById("tinf").children){
        document.getElementById("tinf").removeChild(c);
    }
    document.getElementById("tinf").appendChild(inf);
    //pres
    var pres=document.createElement("input");
    pres.setAttribute("id","present");
    for(c of document.getElementById("tpres").children){
        document.getElementById("tpres").removeChild(c);
    }
    document.getElementById("tpres").appendChild(pres);
    //pret
    var pret=document.createElement("input");
    pret.setAttribute("id","preterit");
    for(c of document.getElementById("tpret").children){
        document.getElementById("tpret").removeChild(c);
    }
    document.getElementById("tpret").appendChild(pret);
    //par
    var par=document.createElement("input");
    par.setAttribute("id","parfait");
    for(c of document.getElementById("tpar").children){
        document.getElementById("tpar").removeChild(c);
    }
    document.getElementById("tpar").appendChild(par);
    //bt
    document.getElementById("bt").innerHTML="vérifier";
    
}

function corrige_q(ji,jpr,jpt,jpa){
    //inf
    for(c of document.getElementById("tinf").children){
        document.getElementById("tinf").removeChild(c);
    }
    var inf=document.createElement("p");
    inf.setAttribute("id","infinitif");
    inf.innerHTML=window.ligne[1];
    if(ji){ inf.setAttribute("style","color:green;"); }
    else{ inf.setAttribute("style","color:red;"); }
    document.getElementById("tinf").appendChild(inf);
    //pres
    for(c of document.getElementById("tpres").children){
        document.getElementById("tpres").removeChild(c);
    }
    var pres=document.createElement("p");
    pres.setAttribute("id","present");
    pres.innerHTML=window.ligne[2];
    if(jpr){ pres.setAttribute("style","color:green;"); }
    else{ pres.setAttribute("style","color:red;"); }
    document.getElementById("tpres").appendChild(pres);
    //pret
    for(c of document.getElementById("tpret").children){
        document.getElementById("tpret").removeChild(c);
    }
    var pret=document.createElement("p");
    pret.setAttribute("id","preterit");
    pret.innerHTML=window.ligne[3];
    if(jpt){ pret.setAttribute("style","color:green;"); }
    else{ pret.setAttribute("style","color:red;"); }
    document.getElementById("tpret").appendChild(pret);
    //par
    for(c of document.getElementById("tpar").children){
        document.getElementById("tpar").removeChild(c);
    }
    var par=document.createElement("p");
    par.setAttribute("id","parfait");
    par.innerHTML=window.ligne[4];
    if(jpa){ par.setAttribute("style","color:green;"); }
    else{ par.setAttribute("style","color:red;"); }
    document.getElementById("tpar").appendChild(par);
    //bt
    document.getElementById("bt").innerHTML="suivant";
}

function create_q(){
    var q=randomchoice(voc);
    window.ligne=q;
    aff_q();
}

function repondre(){
    if(window.mode==0){
        var inf=document.getElementById("infinitif").value;
        var pres=document.getElementById("present").value;
        var pret=document.getElementById("preterit").value;
        var par=document.getElementById("parfait").value;
        var ji=traitre_txt(inf)==traitre_txt(window.ligne[1]);
        var jpr=traitre_txt(pres)==traitre_txt(window.ligne[2]);
        var jpt=traitre_txt(pret)==traitre_txt(window.ligne[3]);
        var jpa=traitre_txt(par)==traitre_txt(window.ligne[4]);
        corrige_q(ji,jpr,jpt,jpa);
        window.mode=1;
    }
    else{
        window.mode=0;
        create_q();
    }
}


function checkEnter(e) {
    if(e && e.keyCode == 13) {
       repondre();
    }
 }
