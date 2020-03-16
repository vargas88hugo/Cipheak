import React, { Component } from "react"
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import imgdata from './imagedata';
import {text} from './paragraphs';
import cipheak_font from './cipheak-normal';

class PdfGenerator extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    addLogo = () => {

    }

    jsGenerator = () => {
        let doc = jsPDF('p', 'pt');
        //add cypheak font 
        doc.addFileToVFS("cipheak.ttf", cipheak_font);
        doc.addFont('cipheak.ttf', 'cipheak_font', 'normal');
        // convert string into string arrays (paragraphs)
        let firstParArray = doc.splitTextToSize(text["firstParagraph"], 570);
        let secondParArray = doc.splitTextToSize(text["secondParagraph"], 570);
        let thirdParArray = doc.splitTextToSize(text["thirdParagraph"], 570);
        let fourParArray = doc.splitTextToSize(text["fourParagraph"], 570);
        let fiveParArray = doc.splitTextToSize(text["fiveParagraph"], 570);
        let sixParArray = doc.splitTextToSize(text["sixParagraph"], 570);
        let sevenParArray = doc.splitTextToSize(text["sevenParagraph"], 570);
        let eigthParArray = doc.splitTextToSize(text["eigthParagraph"], 570);
        let nineParArray = doc.splitTextToSize(text["nineParagraph"], 570);
        let tenParArray = doc.splitTextToSize(text["tenParagraph"], 400);
        let elevenParArray = doc.splitTextToSize(text["elevenParagraph"], 570);
        let twelveParArray = doc.splitTextToSize(text["twelveParagraph"], 400);
        let treceParArray = doc.splitTextToSize(text["treceParagraph"], 570);
        let diezcuatroParArray = doc.splitTextToSize(text["diezcuatroParagraph"], 400);
        let diezcincoParArray = doc.splitTextToSize(text["diezcincoParagraph"], 570);
        let diezseisParArray = doc.splitTextToSize(text["diezseisParagraph"], 570);
        let diezsieteParArray = doc.splitTextToSize(text["diezsieteParagraph"], 570);
        let diezochoParArray = doc.splitTextToSize(text["diezochoParagraph"], 570);
        let dieznueveParArray = doc.splitTextToSize(text["dieznueveParagraph"], 400);
        let veinteParArray = doc.splitTextToSize(text["veinteParagraph"], 400);
        let dosunoParArray = doc.splitTextToSize(text["dosunoParagraph"], 400);
        let dosdosParArray = doc.splitTextToSize(text["dosdosParagraph"], 300);
        let dostresParArray = doc.splitTextToSize(text["dostresParagraph"], 400);
        let doscuatroParArray = doc.splitTextToSize(text["doscuatroParagraph"], 570);
        let doscincoParArray = doc.splitTextToSize(text["doscincoParagraph"], 570);
        let dosseisParArray = doc.splitTextToSize(text["dosseisParagraph"], 570);
        let dossieteParArray = doc.splitTextToSize(text["dossieteParagraph"], 570);
        let dosochoParArray = doc.splitTextToSize(text["dosochoParagraph"], 570);
        let dosnueveParArray = doc.splitTextToSize(text["dosnueveParagraph"], 570);
        let tresceroParArray = doc.splitTextToSize(text["tresceroParagraph"], 400);
        let tresunoParArray = doc.splitTextToSize(text["tresunoParagraph"], 400);
        let tresdosParArray = doc.splitTextToSize(text["tresdosParagraph"], 400);
        let trestresParArray = doc.splitTextToSize(text["trestresParagraph"], 400);
        let trescuatroParArray = doc.splitTextToSize(text["trescuatroParagraph"], 400);
        let trescincoParArray = doc.splitTextToSize(text["trescincoParagraph"], 400);
        let tresseisParArray = doc.splitTextToSize(text["tresseisParagraph"], 400);
        let tressieteParArray = doc.splitTextToSize(text["tressieteParagraph"], 400);
        let tresochoParArray = doc.splitTextToSize(text["tresochoParagraph"], 400);
        let tresnueveParArray = doc.splitTextToSize(text["tresnueveParagraph"], 400);
        let cuatroceroParArray = doc.splitTextToSize(text["cuatroceroParagraph"], 400);
        let cuatrounoParArray = doc.splitTextToSize(text["cuatrounoParagraph"], 400);
        let cuatrodosParArray = doc.splitTextToSize(text["cuatrodosParagraph"], 400);
        let cuatrotresParArray = doc.splitTextToSize(text["cuatrotresParagraph"], 400);
        let cuatrocuatroParArray = doc.splitTextToSize(text["cuatrocuatroParagraph"], 400);
        let cuatrocincoParArray = doc.splitTextToSize(text["cuatrocincoParagraph"], 400);
        let cuatroseisParArray = doc.splitTextToSize(text["cuatroseisParagraph"], 400);
        let cuatrosieteParArray = doc.splitTextToSize(text["cuatrosieteParagraph"], 400);
        let cuatroochoParArray = doc.splitTextToSize(text["cuatroochoParagraph"], 400);
        let cuatronueveParArray = doc.splitTextToSize(text["cuatronueveParagraph"], 400);
        let cincoceroParArray = doc.splitTextToSize(text["cincoceroParagraph"], 400);
        let cincounoParArray = doc.splitTextToSize(text["cincounoParagraph"], 400);
        let cincodosParArray = doc.splitTextToSize(text["cincodosParagraph"], 400);
        let cincotresParArray = doc.splitTextToSize(text["cincotresParagraph"], 400);
        let cincocuatroParArray = doc.splitTextToSize(text["cincocuatroParagraph"], 400);
        let cincocincoParArray = doc.splitTextToSize(text["cincocincoParagraph"], 400);
        let cincoseisParArray = doc.splitTextToSize(text["cincoseisParagraph"], 400);
        let cincosieteParArray = doc.splitTextToSize(text["cincosieteParagraph"], 400);
        let cincoochoParArray = doc.splitTextToSize(text["cincoochoParagraph"], 400);
        let cinconueveParArray = doc.splitTextToSize(text["cinconueveParagraph"], 400);
        let seisceroParArray = doc.splitTextToSize(text["seisceroParagraph"], 400);
        let seisunoParArray = doc.splitTextToSize(text["seisunoParagraph"], 400);
        let seisdosParArray = doc.splitTextToSize(text["seisdosParagraph"], 400);
        let seistresParArray = doc.splitTextToSize(text["seistresParagraph"], 400);
        let seiscuatroParArray = doc.splitTextToSize(text["seiscuatroParagraph"], 100);
        let seiscincoParArray = doc.splitTextToSize(text["seiscincoParagraph"], 100);
        let seisseisParArray = doc.splitTextToSize(text["seisseisParagraph"], 100);
        let seissieteParArray = doc.splitTextToSize(text["seissieteParagraph"], 400);
        let seisochoParArray = doc.splitTextToSize(text["seisochoParagraph"], 400);
        let seisnueveParArray = doc.splitTextToSize(text["seisnueveParagraph"], 400);
        let sieteceroParArray = doc.splitTextToSize(text["sieteceroParagraph"], 400);
        let sieteunoParArray = doc.splitTextToSize(text["sieteunoParagraph"], 400);
        let sietedosParArray = doc.splitTextToSize(text["sietedosParagraph"], 400);
        let sietetresParArray = doc.splitTextToSize(text["sietetresParagraph"], 400);
        let sietecuatroParArray = doc.splitTextToSize(text["sietecuatroParagraph"], 400);
        let sietecincoParArray = doc.splitTextToSize(text["sietecincoParagraph"], 400);
        let sieteseisParArray = doc.splitTextToSize(text["sieteseisParagraph"], 400);
        let sietesieteParArray = doc.splitTextToSize(text["sietesieteParagraph"], 400);
        let sieteochoParArray = doc.splitTextToSize(text["sieteochoParagraph"], 400);
        let sietenueveParArray = doc.splitTextToSize(text["sietenueveParagraph"], 400);
        let ochoceroParArray = doc.splitTextToSize(text["ochoceroParagraph"], 400);
        let ochounoParArray = doc.splitTextToSize(text["ochounoParagraph"], 400);
        let ochodosParArray = doc.splitTextToSize(text["ochodosParagraph"], 400);
        let ochotresParArray = doc.splitTextToSize(text["ochotresParagraph"], 400);
        let ochocuatroParArray = doc.splitTextToSize(text["ochocuatroParagraph"], 400);
        let ochocincoParArray = doc.splitTextToSize(text["ochocincoParagraph"], 400);
        let ochoseisParArray = doc.splitTextToSize(text["ochoseisParagraph"], 400);
        let ochosieteParArray = doc.splitTextToSize(text["ochosieteParagraph"], 400);
        let ochoochoParArray = doc.splitTextToSize(text["ochoochoParagraph"], 400);
        let ochonueveParArray = doc.splitTextToSize(text["ochonueveParagraph"], 400);
        let nueveceroParArray = doc.splitTextToSize(text["nueveceroParagraph"], 400);
        let nueveunoParArray = doc.splitTextToSize(text["nueveunoParagraph"], 400);
        let nuevedosParArray = doc.splitTextToSize(text["nuevedosParagraph"], 400);
        let nuevetresParArray = doc.splitTextToSize(text["nuevetresParagraph"], 400);
        let nuevecuatroParArray = doc.splitTextToSize(text["nuevecuatroParagraph"], 400);
        let nuevecincoParArray = doc.splitTextToSize(text["nuevecincoParagraph"], 400);
        let nueveseisParArray = doc.splitTextToSize(text["nueveseisParagraph"], 400);
        let nuevesieteParArray = doc.splitTextToSize(text["nuevesieteParagraph"], 400);
        let nueveochoParArray = doc.splitTextToSize(text["nueveochoParagraph"], 400);
        let nuevenueveParArray = doc.splitTextToSize(text["nuevenueveParagraph"], 400);
        let cienParArray = doc.splitTextToSize(text["cienParagraph"], 500);
        let cienunoParArray = doc.splitTextToSize(text["cienunoParagraph"], 400);
        let ciendosParArray = doc.splitTextToSize(text["ciendosParagraph"], 600);
        let cientresParArray = doc.splitTextToSize(text["cientresParagraph"], 600);
        let ciencuatroParArray = doc.splitTextToSize(text["ciencuatroParagraph"], 600);
        let ciencincoParArray = doc.splitTextToSize(text["ciencincoParagraph"], 600);
        let cienseisParArray = doc.splitTextToSize(text["cienseisParagraph"], 600);
        let unoTale = doc.splitTextToSize(text["unoTale"], 500);
        let dosTale = doc.splitTextToSize(text["dosTale"], 500);
        let tresTale = doc.splitTextToSize(text["tresTale"], 500);
        let cuatroTale = doc.splitTextToSize(text["cuatroTale"], 500);
        let cincoTale = doc.splitTextToSize(text["cincoTale"], 500);
        let seisTale = doc.splitTextToSize(text["seisTale"], 500);
        let sieteTale = doc.splitTextToSize(text["sieteTale"], 500);
        let ochoTale = doc.splitTextToSize(text["ochoTale"], 500);
        let nueveTale = doc.splitTextToSize(text["nueveTale"], 500);
        let unoceroTale = doc.splitTextToSize(text["unoceroTale"], 500);
        let unounoTale = doc.splitTextToSize(text["unounoTale"], 500);
        let finishuno = doc.splitTextToSize(text["finishuno"], 500);
        let finishdos = doc.splitTextToSize(text["finishdos"], 500);





        // phrases list
        let firstListone = doc.splitTextToSize(text["firstList"]["first"], 400);
        let firstListsecond = doc.splitTextToSize(text["firstList"]["second"], 400);
        let firstListthird = doc.splitTextToSize(text["firstList"]["third"], 500);
        let firstListfourth = doc.splitTextToSize(text["firstList"]["fourth"], 200);
        let firstListfifth = doc.splitTextToSize(text["firstList"]["fifth"], 200);
        let firstListsixth = doc.splitTextToSize(text["firstList"]["sixth"], 200);
        let firstListseventh = doc.splitTextToSize(text["firstList"]["seventh"], 200);
        let firstListeigth = doc.splitTextToSize(text["firstList"]["eigth"], 400);


        // adds the cipheak logo
        doc.addImage(imgdata, "PNG", 250, 15, 85, 80);
        // set font and size for the languague name
        doc.setFontSize(18);
        doc.setFont('cipheak_font', '');
        // add languague name to the pdf
        doc.text(230, 110, '{languageName}');
        // set font size for the key
        doc.setFontSize(14)
        doc.text(222, 135, '|SECRET_KEY_USER|');
        // set font size for the pdf body
        doc.setFontSize(15);
        // add text paragraphs
        doc.text(30, 170, firstParArray, {maxWidth: 530, align: "justify"});
        doc.text(30, 320, secondParArray, {maxWidth: 530, align: "justify"});
        doc.text(30, 410, thirdParArray, {maxWidth: 530, align: "justify"});
        // set font for the first title
        doc.setFont('cipheak_font', 'bold');
        doc.text(280, 450, text["firstTitle"], {maxWidth: 530, align: "center"});
        doc.setFontSize(15);
        // set text body font again
        doc.setFont('cipheak_font', '');

        // add list of phrases
        doc.text(30, 470, firstListone, {maxWidth:530, align: "justify"});
        doc.text(30, 510, firstListsecond, {maxWidth:530, align: "justify"});
        doc.text(30, 550, firstListthird, {maxWidth:630, align: "justify"});
        doc.text(30, 600, firstListfourth, {maxWidth:500, align: "justify"});
        doc.text(30, 640, firstListfifth, {maxWidth:500, align: "justify"});
        doc.text(30, 680, firstListsixth, {maxWidth:500, align: "justify"});
        doc.text(30, 720, firstListseventh, {maxWidth:500, align: "justify"});
        doc.text(30, 770, firstListeigth, {maxWidth:500, align: "justify"});

        //add page #2
        doc.addPage();
        doc.setFont('cipheak_font', 'bold');
        // adds first title to second page
        doc.text(280, 50, text["secondTitle"], {maxWidth: 530, align: "center"});
        // return font to normal
        doc.setFontSize(15);
        doc.setFont('cipheak_font', '');
        //adds first paragraph of second page
        doc.text(30, 110, fourParArray, {maxWidth: 530, align: "justify"});
        // set line for diagram
        doc.line(80, 300, 510, 300);
        doc.line(300, 210, 300, 390);
        // add text to the diagram with specific font
        doc.setFont('cipheak_font', 'bold');
        doc.text(150, 260, 'ENDINGS');
        doc.text(350, 260, 'PREPOSITIONS');
        doc.text(150, 340, 'AFFIXES');
        doc.text(350, 340, 'CORRELATIVES');
        // return font to normal
        doc.setFontSize(15);
        doc.setFont('cipheak_font', '');
        doc.text(30, 460, fiveParArray, {maxWidth: 530, align: "justify"});
        // add a title
        doc.setFont('cipheak_font', 'bold');
        doc.text(280, 560, text["thirdTitle"], {maxWidth: 530, align: "center"});
        // return font to normal
        doc.setFontSize(15);
        doc.setFont('cipheak_font', '');
        doc.text(30, 600, sixParArray, {maxWidth: 530, align: "justify"});
        doc.text(30, 700, sevenParArray, {maxWidth: 530, align: "justify"});

        //add page #3
        doc.addPage();
        // create table
        doc.autoTable(text["column"],text["data"],
            { margin:{ top: 25 }}
            );
        // add a title
        doc.setFont('cipheak_font', 'bold');
        doc.text(280, 680, text["fourTitle"], {maxWidth: 530, align: "center"});
        // return font to normal
        doc.setFontSize(15);
        doc.setFont('cipheak_font', '');
        doc.text(30, 720, eigthParArray, {maxWidth: 530, align: "justify"});


        //add page #4
        doc.addPage();
        // add a title
        doc.setFont('cipheak_font', 'bold');
        doc.text(280, 40, text["fiveTitle"], {maxWidth: 530, align: "center"});
        // return font to normal
        doc.setFontSize(15);
        doc.setFont('cipheak_font', '');
        doc.text(30, 70, nineParArray, {maxWidth: 530, align: "justify"});
        doc.text(50, 130, tenParArray, {maxWidth: 400, align: "justify"});
        // add a title
        doc.setFont('cipheak_font', 'bold');
        doc.text(280, 220, text["sixTitle"], {maxWidth: 530, align: "center"});
        doc.setFontSize(13);
        doc.text(100, 250, text["sevenTitle"], {maxWidth: 530, align: "right"});
        // return font to normal
        doc.setFontSize(15);
        doc.setFont('cipheak_font', '');
        doc.text(30, 280, elevenParArray, {maxWidth: 530, align: "justify"});
        doc.text(50, 450, twelveParArray, {maxWidth: 500, align: "justify"});
        // add title
        doc.setFont('cipheak_font', 'bold');
        doc.setFontSize(13);
        doc.text(70, 550, text["eigthTitle"], {maxWidth: 530, align: "right"});
        // return font to normal
        doc.setFontSize(15);
        doc.setFont('cipheak_font', '');
        doc.text(30, 590, treceParArray, {maxWidth: 530, align: "justify"});
        doc.text(50, 690, diezcuatroParArray, {maxWidth: 600, align: "justify"});
        
        //add page #5
        doc.addPage();
        // add paragraphs
        doc.text(30, 50, diezcincoParArray, {maxWidth: 530, align: "justify"});
        doc.text(30, 180, diezseisParArray, {maxWidth: 530, align: "justify"});
        doc.text(30, 250, diezsieteParArray, {maxWidth: 530, align: "justify"});
        doc.text(30, 355, diezochoParArray, {maxWidth: 530, align: "justify"});
        // add title
        doc.setFont('cipheak_font', 'bold');
        doc.text(280, 410, text["nineTitle"], {maxWidth: 530, align: "center"});
        doc.setFontSize(15);
        doc.setFont('cipheak_font', '');
        //add paragraph
        doc.text(30, 440, dieznueveParArray, {maxWidth: 530, align: "justify"});
        doc.text(30, 470, veinteParArray, {maxWidth: 530, align: "justify"});
        doc.text(30, 530, dosunoParArray, {maxWidth: 530, align: "justify"});
        // add title
        doc.setFont('cipheak_font', 'bold');
        doc.text(280, 600, text["tenTitle"], {maxWidth: 530, align: "center"});
        doc.setFontSize(15);
        doc.setFont('cipheak_font', '');
        doc.text(30, 630, dosdosParArray, {maxWidth: 530, align: "justify"});
        // add title
        doc.setFont('cipheak_font', 'bold');
        doc.text(280, 700, text["elevenTitle"], {maxWidth: 500, align: "center"});
        doc.setFontSize(15);
        doc.setFont('cipheak_font', '');
        doc.text(30, 720, dostresParArray, {maxWidth: 530, align: "justify"});

        //add page #6
        doc.addPage();
        doc.setFont('cipheak_font', 'bold');
        doc.text(30, 40, text["twelveTitle"], {maxWidth: 500, align: "left"});
        doc.setFontSize(15);
        doc.setFont('cipheak_font', '');
        doc.text(30, 70, text["secondList"]["first"], {maxWidth: 530, align: "justify"});
        doc.text(50, 100, text["secondList"]["second"], {maxWidth: 530, align: "justify"});
        doc.text(50, 120, text["secondList"]["third"], {maxWidth: 530, align: "justify"});
        doc.text(50, 140, text["secondList"]["fourth"], {maxWidth: 530, align: "justify"});
        doc.text(50, 160, text["secondList"]["fifth"], {maxWidth: 530, align: "justify"});
        doc.setFont('cipheak_font', 'bold');
        doc.text(30, 200, text["unotresTitle"], {maxWidth: 500, align: "left"});
        doc.setFontSize(15);
        doc.setFont('cipheak_font', '');
        doc.text(30, 230, doscuatroParArray, {maxWidth: 500, align: "justify"});
        doc.text(50, 300, text["thirdList"]["first"], {maxWidth: 530, align: "justify"});
        doc.text(50, 320, text["thirdList"]["second"], {maxWidth: 530, align: "justify"});
        doc.text(50, 340, text["thirdList"]["third"], {maxWidth: 530, align: "justify"});
        doc.text(50, 360, text["thirdList"]["fourth"], {maxWidth: 530, align: "justify"});
        doc.text(30, 400, text["thirdList"]["fifth"], {maxWidth: 530, align: "justify"});
        doc.text(50, 430, text["thirdList"]["sixth"], {maxWidth: 530, align: "justify"});
        doc.text(50, 450, text["thirdList"]["seventh"], {maxWidth: 530, align: "justify"});
        doc.setFont('cipheak_font', 'bold');
        doc.text(30, 500, text["unocuatroTitle"], {maxWidth: 500, align: "left"});
        doc.setFontSize(15);
        doc.setFont('cipheak_font', '');
        doc.text(30, 530, doscincoParArray, {maxWidth: 500, align: "justify"});
        doc.text(50, 640, text["fourthList"]["first"], {maxWidth: 530, align: "justify"});
        doc.text(50, 680, text["fourthList"]["second"], {maxWidth: 530, align: "justify"});
        doc.setFont('cipheak_font', 'bold');
        doc.text(30, 730, text["unocincoTitle"], {maxWidth: 500, align: "left"});
        doc.setFontSize(15);
        doc.setFont('cipheak_font', '');
        doc.text(30, 760, dosseisParArray, {maxWidth: 500, align: "justify"});

       //add page #7
       doc.addPage();
       doc.text(50, 40, text["fifthList"]["first"], {maxWidth: 530, align: "justify"});
       doc.text(50, 70, text["fifthList"]["second"], {maxWidth: 530, align: "justify"});
       doc.text(50, 100, text["fifthList"]["third"], {maxWidth: 530, align: "justify"});
       doc.text(50, 130, text["fifthList"]["fourth"], {maxWidth: 530, align: "justify"});
       doc.text(50, 160, text["fifthList"]["fifth"], {maxWidth: 530, align: "justify"});
       doc.text(50, 190, text["fifthList"]["sixth"], {maxWidth: 530, align: "justify"});
       doc.text(50, 220, text["fifthList"]["seventh"], {maxWidth: 530, align: "justify"});
       doc.text(50, 250, text["fifthList"]["eigth"], {maxWidth: 530, align: "justify"});
       doc.setFont('cipheak_font', 'bold');
       doc.text(30, 310, text["unoseisTitle"], {maxWidth: 500, align: "left"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 350, dossieteParArray, {maxWidth: 500, align: "justify"});
       doc.text(50, 420, text["sixthList"]["first"], {maxWidth: 530, align: "justify"});
       doc.text(50, 440, text["sixthList"]["second"], {maxWidth: 530, align: "justify"});
       doc.text(50, 460, text["sixthList"]["third"], {maxWidth: 530, align: "justify"});
       doc.text(50, 480, text["sixthList"]["fourth"], {maxWidth: 530, align: "justify"});
       doc.text(30, 550, text["sixthList"]["fifth"], {maxWidth: 550, align: "justify"});
       doc.text(30, 600, text["sixthList"]["sixth"], {maxWidth: 530, align: "justify"});
       doc.setFont('cipheak_font', 'bold');
       doc.text(30, 660, text["unosieteTitle"], {maxWidth: 500, align: "left"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 690, text["seventhList"]["first"], {maxWidth: 530, align: "justify"});
       doc.text(50, 710, text["seventhList"]["second"], {maxWidth: 530, align: "justify"});
       doc.text(50, 730, text["seventhList"]["third"], {maxWidth: 530, align: "justify"});
       doc.text(50, 760, text["seventhList"]["fourth"], {maxWidth: 530, align: "justify"});
       doc.text(50, 790, text["seventhList"]["fifth"], {maxWidth: 530, align: "justify"});

       //add page #8
       doc.addPage();
       doc.setFont('cipheak_font', 'bold');
       doc.text(30, 40, text["unoochoTitle"], {maxWidth: 500, align: "left"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 70, text["eigthList"]["first"], {maxWidth: 530, align: "justify"});
       doc.text(50, 110, text["eigthList"]["second"], {maxWidth: 530, align: "justify"});
       doc.text(50, 150, text["eigthList"]["third"], {maxWidth: 530, align: "justify"});
       doc.text(50, 190, text["eigthList"]["fourth"], {maxWidth: 530, align: "justify"});
       doc.text(50, 210, text["eigthList"]["fifth"], {maxWidth: 530, align: "justify"});
       doc.setFont('cipheak_font', 'bold');
       doc.text(30, 250, text["unonueveTitle"], {maxWidth: 500, align: "left"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 280, text["nineList"]["first"], {maxWidth: 530, align: "justify"});
       doc.text(40, 320, text["nineList"]["second"], {maxWidth: 530, align: "justify"});
       doc.text(40, 340, text["nineList"]["third"], {maxWidth: 540, align: "justify"});
       doc.text(40, 380, text["nineList"]["fourth"], {maxWidth: 540, align: "justify"});
       doc.setFont('cipheak_font', 'bold');
       doc.text(30, 460, text["dosceroTitle"], {maxWidth: 500, align: "left"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 490, dosochoParArray, {maxWidth: 500, align: "justify"});
       doc.text(30, 600, text["tenList"]["first"], {maxWidth: 530, align: "justify"});
       doc.text(30, 630, text["tenList"]["second"], {maxWidth: 530, align: "justify"});
       doc.text(30, 680, text["tenList"]["third"], {maxWidth: 530, align: "justify"});
       doc.text(30, 720, text["tenList"]["fourth"], {maxWidth: 530, align: "justify"});
       doc.text(30, 795, text["tenList"]["fifth"], {maxWidth: 530, align: "justify"});
       doc.text(30, 815, text["tenList"]["sixth"], {maxWidth: 530, align: "justify"});

       //add page #9
       doc.addPage();
       doc.setFont('cipheak_font', 'bold');
       doc.text(30, 40, text["dosunoTitle"], {maxWidth: 500, align: "left"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 70, text["elevenList"]["first"], {maxWidth: 530, align: "justify"});
       doc.text(50, 110, text["elevenList"]["second"], {maxWidth: 530, align: "justify"});
       doc.text(50, 130, text["elevenList"]["third"], {maxWidth: 530, align: "justify"});
       doc.text(50, 150, text["elevenList"]["fourth"], {maxWidth: 530, align: "justify"});
       doc.text(50, 170, text["elevenList"]["fifth"], {maxWidth: 530, align: "justify"});
       doc.text(50, 190, text["elevenList"]["sixth"], {maxWidth: 530, align: "justify"});
       doc.text(50, 210, text["elevenList"]["seventh"], {maxWidth: 530, align: "justify"});
       doc.text(50, 230, text["elevenList"]["eigth"], {maxWidth: 530, align: "justify"});
       doc.text(50, 250, text["elevenList"]["nine"], {maxWidth: 530, align: "justify"});
       doc.text(50, 270, text["elevenList"]["ten"], {maxWidth: 530, align: "justify"});
       doc.text(50, 290, text["elevenList"]["eleven"], {maxWidth: 530, align: "justify"});
       doc.text(50, 310, text["elevenList"]["twelve"], {maxWidth: 530, align: "justify"});
       doc.text(50, 330, text["elevenList"]["thirteen"], {maxWidth: 530, align: "justify"});
       doc.text(50, 350, text["elevenList"]["fourteen"], {maxWidth: 530, align: "justify"});
       doc.setFont('cipheak_font', 'bold');
       doc.text(30, 390, text["dosdosTitle"], {maxWidth: 500, align: "left"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 410, dosnueveParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 490, tresceroParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 610, text["twelveList"]["first"], {maxWidth: 540, align: "justify"});
       doc.text(30, 650, text["twelveList"]["second"], {maxWidth: 540, align: "justify"});
       doc.text(30, 700, text["twelveList"]["third"], {maxWidth: 500, align: "justify"});
       doc.text(30, 750, text["twelveList"]["fourth"], {maxWidth: 530, align: "justify"});
       doc.text(30, 790, text["twelveList"]["fifth"], {maxWidth: 550, align: "justify"});

       //add page #10
       doc.addPage();
       doc.text(30, 50, tresunoParArray, {maxWidth: 500, align: "justify"});
       doc.text(30, 100, tresdosParArray, {maxWidth: 280, align: "justify"});
       doc.text(30, 140, trestresParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 190, trescuatroParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 250, trescincoParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 330, tresseisParArray, {maxWidth: 530, align: "justify"});
       doc.setFont('cipheak_font', 'bold');
       doc.text(30, 480, text["dostresTitle"], {maxWidth: 500, align: "left"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 510, tressieteParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 630, tresochoParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 670, tresnueveParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 730, cuatroceroParArray, {maxWidth: 500, align: "justify"});
       doc.text(50, 770, cuatrounoParArray, {maxWidth: 500, align: "justify"});
       doc.text(50, 810, cuatrodosParArray, {maxWidth: 400, align: "justify"});

       //add page #11
       doc.addPage();
       doc.text(50, 50, cuatrotresParArray, {maxWidth: 500, align: "justify"});
       doc.text(30, 100, cuatrocuatroParArray, {maxWidth: 500, align: "justify"});
       doc.setFont('cipheak_font', 'bold');
       doc.text(30, 130, text["doscuatroTitle"], {maxWidth: 500, align: "left"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 160, cuatrocincoParArray, {maxWidth: 500, align: "justify"});
       doc.text(50, 200, text["unotresList"]["first"], {maxWidth: 540, align: "justify"});
       doc.text(50, 220, text["unotresList"]["second"], {maxWidth: 540, align: "justify"});
       doc.text(50, 240, text["unotresList"]["third"], {maxWidth: 540, align: "justify"});
       doc.text(50, 260, text["unotresList"]["fourth"], {maxWidth: 540, align: "justify"});
       doc.text(50, 280, text["unotresList"]["fifth"], {maxWidth: 540, align: "justify"});
       doc.text(50, 300, text["unotresList"]["sixth"], {maxWidth: 540, align: "justify"});
       doc.text(50, 320, text["unotresList"]["seventh"], {maxWidth: 540, align: "justify"});
       doc.text(50, 340, text["unotresList"]["eigth"], {maxWidth: 540, align: "justify"});
       doc.text(50, 360, text["unotresList"]["nine"], {maxWidth: 540, align: "justify"});
       doc.text(50, 380, text["unotresList"]["ten"], {maxWidth: 540, align: "justify"});
       doc.text(50, 400, text["unotresList"]["eleven"], {maxWidth: 540, align: "justify"});
       doc.text(50, 420, text["unotresList"]["twelve"], {maxWidth: 540, align: "justify"});
       doc.text(50, 440, text["unotresList"]["onetree"], {maxWidth: 540, align: "justify"});
       doc.text(50, 460, text["unotresList"]["onefour"], {maxWidth: 540, align: "justify"});
       doc.text(50, 480, text["unotresList"]["onefive"], {maxWidth: 540, align: "justify"});
       doc.text(50, 500, text["unotresList"]["onesix"], {maxWidth: 540, align: "justify"});
       doc.text(30, 530, cuatroseisParArray, {maxWidth: 500, align: "justify"});
       doc.text(30, 640, cuatrosieteParArray, {maxWidth: 500, align: "justify"});
       doc.text(50, 670, cuatroochoParArray, {maxWidth: 400, align: "justify"});
       doc.text(50, 720, cuatronueveParArray, {maxWidth: 440, align: "justify"});
       doc.text(50, 770, cincoceroParArray, {maxWidth: 440, align: "justify"});

       //add page #12
       doc.addPage();
       doc.text(50, 50, cincounoParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 90, cincodosParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 170, cincotresParArray, {maxWidth: 530, align: "justify"});
       doc.setFont('cipheak_font', 'bold');
       doc.text(30, 230, text["doscincoTitle"], {maxWidth: 500, align: "left"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 250, cincocuatroParArray, {maxWidth: 440, align: "justify"});
       doc.text(50, 280, cincocincoParArray, {maxWidth: 440, align: "justify"});
       doc.text(50, 320, cincoseisParArray, {maxWidth: 440, align: "justify"});
       doc.text(50, 350, cincosieteParArray, {maxWidth: 440, align: "justify"});
       doc.text(50, 390, cincoochoParArray, {maxWidth: 440, align: "justify"});
       doc.text(30, 440, cinconueveParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 520, seisceroParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 580, seisunoParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 640, seisdosParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 680, seistresParArray, {maxWidth: 530, align: "justify"});
       doc.text(40, 720, seiscuatroParArray, {maxWidth: 530, align: "justify"});
       doc.text(40, 780, seiscincoParArray, {maxWidth: 530, align: "justify"});

       //add page #13
       doc.addPage();
       doc.setFont('cipheak_font', '');
       doc.text(40, 60, seisseisParArray, {maxWidth: 530, align: "justify"});
       doc.text(40, 130, seissieteParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 160, text["unocuatroList"]["first"], {maxWidth: 400, align: "justify"});
       doc.text(50, 180, text["unocuatroList"]["second"], {maxWidth: 400, align: "justify"});
       doc.text(50, 200, text["unocuatroList"]["third"], {maxWidth: 400, align: "justify"});
       doc.text(50, 220, text["unocuatroList"]["fourth"], {maxWidth: 500, align: "justify"});
       doc.text(50, 240, text["unocuatroList"]["fifth"], {maxWidth: 400, align: "justify"});
       doc.text(50, 260, text["unocuatroList"]["sixth"], {maxWidth: 400, align: "justify"});
       doc.text(50, 280, text["unocuatroList"]["seventh"], {maxWidth: 400, align: "justify"});
       doc.text(50, 300, text["unocuatroList"]["eigth"], {maxWidth: 400, align: "justify"});
       doc.text(50, 320, text["unocuatroList"]["nine"], {maxWidth: 400, align: "justify"});
       doc.text(30, 350, seisochoParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 410, seisnueveParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 460, sieteceroParArray, {maxWidth: 530, align: "justify"});
       doc.setFont('cipheak_font', 'bold');
       doc.text(30, 505, text["dosseisTitle"], {maxWidth: 500, align: "left"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 530, sieteunoParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 610, sieteunoParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 680, sietedosParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 710, sietetresParArray, {maxWidth: 530, align: "justify"});

       //add page #14
       doc.addPage();
       doc.text(30, 50, sietecuatroParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 100, sietecincoParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 120, sieteseisParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 170, sietesieteParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 190, text["unocincoList"]["first"], {maxWidth: 400, align: "justify"});
       doc.text(50, 210, text["unocincoList"]["second"], {maxWidth: 400, align: "justify"});
       doc.text(50, 230, text["unocincoList"]["third"], {maxWidth: 400, align: "justify"});
       doc.text(50, 250, text["unocincoList"]["fourth"], {maxWidth: 500, align: "justify"});
       doc.text(50, 270, text["unocincoList"]["fifth"], {maxWidth: 400, align: "justify"});
       doc.text(50, 290, text["unocincoList"]["sixth"], {maxWidth: 400, align: "justify"});
       doc.text(50, 310, text["unocincoList"]["seventh"], {maxWidth: 400, align: "justify"});
       doc.text(50, 330, text["unocincoList"]["eigth"], {maxWidth: 400, align: "justify"});
       doc.setFont('cipheak_font', 'bold');
       doc.text(30, 370, text["dossieteTitle"], {maxWidth: 500, align: "left"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 400, sieteochoParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 510, sietenueveParArray, {maxWidth: 530, align: "justify"});
       // create table
       doc.autoTable(text["columndos"],text["datados"],
           {margin:{ top: 560},
            rowPageBreak: 'auto',
            bodyStyles: { valign: 'top' },
            styles: { cellWidth: 'wrap' },
            columnStyles: { 1: { cellWidth: 'auto' }, 2: { cellWidth: 'auto' }, 3: { cellWidth: 'auto' }},
            } 
        );

       //add page #15
       doc.addPage();
       doc.autoTable(text["columndos"],text["datadosUno"],
           {margin:{ top: 70},
            rowPageBreak: 'auto',
            bodyStyles: { valign: 'top' },
            styles: { cellWidth: 'wrap' },
            columnStyles: { 1: { cellWidth: 'auto' }, 2: { cellWidth: 'auto' }, 3: { cellWidth: 'auto' }},
            });

       doc.autoTable(text["columntres"],text["datatres"],
           {margin:{ top: doc.previousAutoTable.finalY + 10},
            rowPageBreak: 'auto',
            bodyStyles: { valign: 'top' },
            styles: { cellWidth: 'wrap' },
            columnStyles: { 1: { cellWidth: 'auto' }, 2: { cellWidth: 'auto' }, 3: { cellWidth: 'auto' }},
            } 
       );
       doc.autoTable(text["columntres"],text["datatresuno"],
       {margin:{top: 50},
            rowPageBreak: 'auto',
            bodyStyles: { valign: 'top' },
            styles: { cellWidth: 'wrap' },
            columnStyles: { 1: { cellWidth: 'auto' }, 2: { cellWidth: 'auto' }, 3: { cellWidth: 'auto' }},
            } 
       );
       doc.setFont('cipheak_font', 'bold');
       doc.text(280, 400, text["dosochoTitle"], {maxWidth: 500, align: "center"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 450, ochoceroParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 620, ochounoParArray, {maxWidth: 530, align: "justify"});
       

       //add page
       doc.addPage();
       doc.autoTable(text["columncuatro"],text["datacuatro"],
       {margin:{top: 50},
            rowPageBreak: 'auto',
            bodyStyles: { valign: 'top' },
            styles: { cellWidth: 'wrap' },
            columnStyles: { 1: { cellWidth: 'auto' }, 2: { cellWidth: 'auto' }, 3: { cellWidth: 'auto' }, 4: { cellWidth: 'auto' }, 5: { cellWidth: 'auto' }},
            } 
       );
       doc.text(30, 330, ochodosParArray, {maxWidth: 530, align: "justify"});
       doc.autoTable(text["columncuatrouno"],text["datacuatrouno"],
       {startY: 400,
            rowPageBreak: 'auto',
            bodyStyles: { valign: 'top' },
            styles: { cellWidth: 'wrap' },
            columnStyles: { 1: { cellWidth: 'auto' }, 2: { cellWidth: 'auto' }, 3: { cellWidth: 'auto' }, 4: { cellWidth: 'auto' }, 5: { cellWidth: 'auto' }},
            } 
       );
       doc.text(30, 700, ochotresParArray, {maxWidth: 530, align: "justify"});


       //add page
       doc.addPage();
       doc.autoTable(text["columncinco"],text["datacinco"],
       {startY: 50,
            rowPageBreak: 'auto',
            bodyStyles: { valign: 'top' },
            styles: { cellWidth: 'wrap' },
            columnStyles: { 1: { cellWidth: 'auto' }, 2: { cellWidth: 'auto' }, 3: { cellWidth: 'auto' }, 4: { cellWidth: 'auto' }, 5: { cellWidth: 'auto' }},
            } 
       );
       doc.text(30, 360, ochocuatroParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 440, ochocincoParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 570, ochoseisParArray, {maxWidth: 530, align: "justify"});
       //add diagram
       doc.setLineWidth(1.5);
       doc.setDrawColor(255, 0, 0)
       doc.setFontSize(9);
       doc.setFont('cipheak_font', '');
       doc.text(20, 675, text["diagram"]["third"]);
       doc.line(20, 680, 200, 680);
       doc.text(20, 715, text["diagram"]["fourth"]);
       doc.line(20, 720, 200, 720);
       doc.text(20, 755, text["diagram"]["fifth"]);
       doc.line(20, 760, 200, 760); 
       doc.text(20, 795, text["diagram"]["sixth"]);
       doc.line(20, 800, 200, 800);
       doc.line(200, 800, 200, 680);
       doc.text(210, 735, text["diagram"]["second"]);
       doc.text(280, 760, text["diagram"]["first"]);
       doc.text(310, 735, text["diagram"]["sixth"]);
       doc.line(200, 740, 430, 740);
       doc.line(430, 810, 430, 600);
       //add rigth part of the diagram
       doc.line(430, 600, 580, 600);
       doc.text(440, 595, text["diagram"]["eigth"]);
       doc.line(430, 630, 580, 630);
       doc.text(440, 625, text["diagram"]["nine"]);
       doc.line(430, 660, 580, 660);
       doc.text(440, 655, text["diagram"]["ten"]);
       doc.line(430, 690, 580, 690);
       doc.text(440, 685, text["diagram"]["eleven"]);
       doc.line(430, 720, 580, 720);
       doc.text(440, 715, text["diagram"]["twelve"]);
       doc.line(430, 750, 580, 750);
       doc.text(440, 745, text["diagram"]["onetree"]);
       doc.line(430, 780, 580, 780);
       doc.text(440, 775, text["diagram"]["onefour"]);
       doc.line(430, 810, 580, 810);
       doc.text(440, 805, text["diagram"]["onefive"]);

       //add page
       doc.addPage();
       doc.autoTable(text["columnseis"],text["dataseis"],
       { allSectionHooks: true,
        didParseCell: function(data) {
          if (data.row.index === 0) {
            data.cell.styles.fillColor = [65, 105, 1255]
          } },
          willDrawCell: function(data) {
                if (data.row.index === 0) {
                    doc.setTextColor(255, 255, 255)
                }
            },
           startY: 50,
            rowPageBreak: 'auto',
            bodyStyles: { valign: 'top' },
            styles: { cellWidth: 'wrap' },
            columnStyles: {
                0: { cellWidth: 'auto', fillColor: [65, 105, 225], textColor: [255, 255, 255] },
                1: { cellWidth: 'auto', fillColor: [65, 105, 225], textColor: [255, 255, 255] },
                2: { cellWidth: 'auto' },
                3: { cellWidth: 'auto' },
                4: { cellWidth: 'auto' },
                5: { cellWidth: 'auto' },
                6: { cellWidth: 'auto' }
            },
                
            } 
       );
       doc.setFontSize(15);
       doc.text(30, 640, ochosieteParArray, {maxWidth: 530, align: "justify"});


       //add page
       doc.addPage();
       doc.text(30, 60, ochoochoParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 240, ochonueveParArray, {maxWidth: 530, align: "justify"});
       doc.text(30, 370, nueveceroParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 420, nueveunoParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 470, nuevedosParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 510, nuevetresParArray, {maxWidth: 540, align: "justify"});
       doc.text(50, 550, nuevecuatroParArray, {maxWidth: 540, align: "justify"});
       doc.text(30, 580, nuevecincoParArray, {maxWidth: 540, align: "justify"});
       doc.text(50, 660, nueveseisParArray, {maxWidth: 520, align: "justify"});
       doc.text(30, 710, nuevesieteParArray, {maxWidth: 540, align: "justify"});
       doc.setFont('cipheak_font', 'bold');
       doc.text(280, 750, text["dosnueveTitle"], {maxWidth: 500, align: "center"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 770, nueveochoParArray, {maxWidth: 540, align: "justify"});

       //add page
       doc.addPage();
       doc.text(50, 50, nuevenueveParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 120, cienParArray, {maxWidth: 490, align: "justify"});
       doc.text(50, 200, cienunoParArray, {maxWidth: 530, align: "justify"});
       doc.text(50, 280, ciendosParArray);
       doc.text(30, 350, cientresParArray);
       doc.text(30, 400, ciencuatroParArray);
       doc.text(30, 440, ciencincoParArray);
       doc.text(30, 480, cienseisParArray);
       doc.setFont('cipheak_font', 'bold');
       doc.text(280, 520, text["tresceroTitle"], {maxWidth: 500, align: "center"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 590, unoTale);
       doc.text(30, 700, dosTale);

       //add page
       doc.addPage();
       doc.text(30, 60, tresTale);
       doc.text(30, 400, cuatroTale);
       doc.text(30, 620, cincoTale);

       //add page
       doc.addPage();
       doc.text(30, 60, seisTale);
       doc.text(30, 300, sieteTale);

       //add page
       doc.addPage();
       doc.text(30, 50, ochoTale);
       doc.text(30, 420, nueveTale);

       //add page
       doc.addPage();
       doc.text(30, 50, unoceroTale);
       doc.text(30, 380, unounoTale);
       
       //add page
       doc.addPage();
       doc.setFont('cipheak_font', 'bold');
       doc.text(280, 50, text["tresunoTitle"], {maxWidth: 500, align: "center"});
       doc.setFontSize(15);
       doc.setFont('cipheak_font', '');
       doc.text(30, 80, finishuno);
       doc.text(30, 280, finishdos);




       //saves document
       doc.save('lanuague.pdf');
    }

    render() {
        return (
        <div>
            <h1>hello worddld</h1>
            <button onClick={this.jsGenerator}>Download pdf</button>
        </div>
        );
    }
}
export default PdfGenerator;