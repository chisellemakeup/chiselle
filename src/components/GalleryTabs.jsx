import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ensureScrollTrigger } from "../lib/gsapSetup";
import { srcAssetUrl } from "../config/assets";
import FadeUpInView from "./common/FadeUpInView";
import ScrubStagger from "./common/ScrubStagger";
import GalleryLightbox from "./common/GalleryLightbox";
import GalleryImageTile from "./common/GalleryImageTile";

// Traditional Bridal
const gallery1 = srcAssetUrl("traditional-bridal%20(1).jpg");
const gallery2 = srcAssetUrl("traditional-bridal%20(2).jpg");
const gallery3 = srcAssetUrl("traditional-bridal%20(3).jpg");
const gallery4 = srcAssetUrl("traditional-bridal%20(4).jpg");
const gallery5 = srcAssetUrl("traditional-bridal%20(5).jpg");
const gallery6 = srcAssetUrl("traditional-bridal%20(6).jpg");
const gallery7 = srcAssetUrl("traditional-bridal%20(7).jpg");
const gallery8 = srcAssetUrl("traditional-bridal%20(8).jpg");
const gallery9 = srcAssetUrl("traditional-bridal%20(9).jpg");
const gallery10 = srcAssetUrl("traditional-bridal%20(10).jpg");
const gallery11 = srcAssetUrl("traditional-bridal%20(11).jpg");
const gallery12 = srcAssetUrl("traditional-bridal%20(12).jpg");
const gallery13 = srcAssetUrl("traditional-bridal%20(13).jpg");
const gallery14 = srcAssetUrl("traditional-bridal%20(14).jpg");
const gallery15 = srcAssetUrl("traditional-bridal%20(15).jpg");
const gallery16 = srcAssetUrl("traditional-bridal%20(16).jpg");
const gallery17 = srcAssetUrl("traditional-bridal%20(17).jpg");
const gallery18 = srcAssetUrl("traditional-bridal%20(18).jpg");
const gallery19 = srcAssetUrl("traditional-bridal%20(19).jpg");
const gallery20 = srcAssetUrl("traditional-bridal%20(20).jpg");
const gallery21 = srcAssetUrl("traditional-bridal%20(21).jpg");
const gallery22 = srcAssetUrl("traditional-bridal%20(22).jpg");
const gallery23 = srcAssetUrl("traditional-bridal%20(23).jpg");
const gallery24 = srcAssetUrl("traditional-bridal%20(24).jpg");
const gallery25 = srcAssetUrl("traditional-bridal%20(25).jpg");
const gallery26 = srcAssetUrl("traditional-bridal%20(26).jpg");
const gallery27 = srcAssetUrl("traditional-bridal%20(27).jpg");
const gallery28 = srcAssetUrl("traditional-bridal%20(28).jpg");
const gallery29 = srcAssetUrl("traditional-bridal%20(29).jpg");
const gallery30 = srcAssetUrl("traditional-bridal%20(30).jpg");
const gallery31 = srcAssetUrl("traditional-bridal%20(31).jpg");
const gallery32 = srcAssetUrl("traditional-bridal%20(32).jpg");
const gallery33 = srcAssetUrl("traditional-bridal%20(33).jpg");
const gallery34 = srcAssetUrl("traditional-bridal%20(34).jpg");
const gallery35 = srcAssetUrl("traditional-bridal%20(35).jpg");
const gallery36 = srcAssetUrl("traditional-bridal%20(36).jpg");
const gallery37 = srcAssetUrl("traditional-bridal%20(37).jpg");
const gallery38 = srcAssetUrl("traditional-bridal%20(38).jpg");
const gallery39 = srcAssetUrl("traditional-bridal%20(39).jpg");
const gallery40 = srcAssetUrl("traditional-bridal%20(40).jpg");
const gallery41 = srcAssetUrl("traditional-bridal%20(41).jpg");
const gallery42 = srcAssetUrl("traditional-bridal%20(42).jpg");
const gallery43 = srcAssetUrl("traditional-bridal%20(43).jpg");
const gallery44 = srcAssetUrl("traditional-bridal%20(44).jpg");
const gallery45 = srcAssetUrl("traditional-bridal%20(45).jpg");
const gallery46 = srcAssetUrl("traditional-bridal%20(46).jpg");
const gallery47 = srcAssetUrl("traditional-bridal%20(47).jpg");
const gallery48 = srcAssetUrl("traditional-bridal%20(48).jpg");
const gallery49 = srcAssetUrl("traditional-bridal%20(49).jpg");
const gallery50 = srcAssetUrl("traditional-bridal%20(50).jpg"); 
const gallery51 = srcAssetUrl("traditional-bridal%20(51).jpg");
const gallery52 = srcAssetUrl("traditional-bridal%20(52).jpg");
const gallery53 = srcAssetUrl("traditional-bridal%20(53).jpg");
const gallery54 = srcAssetUrl("traditional-bridal%20(54).jpg");
const gallery55 = srcAssetUrl("traditional-bridal%20(55).jpg");
const gallery56 = srcAssetUrl("traditional-bridal%20(56).jpg");
const gallery57 = srcAssetUrl("traditional-bridal%20(57).jpg");
const gallery58 = srcAssetUrl("traditional-bridal%20(58).jpg");
const gallery59 = srcAssetUrl("traditional-bridal%20(59).jpg");
const gallery60 = srcAssetUrl("traditional-bridal%20(60).jpg");
const gallery61 = srcAssetUrl("traditional-bridal%20(61).jpg");
const gallery62 = srcAssetUrl("traditional-bridal%20(62).jpg");
const gallery63 = srcAssetUrl("traditional-bridal%20(63).jpg");
const gallery64 = srcAssetUrl("traditional-bridal%20(64).jpg");
const gallery65 = srcAssetUrl("traditional-bridal%20(65).jpg");
const gallery66 = srcAssetUrl("traditional-bridal%20(66).jpg");
const gallery67 = srcAssetUrl("traditional-bridal%20(67).jpg");
const gallery68 = srcAssetUrl("traditional-bridal%20(68).jpg");
const gallery69 = srcAssetUrl("traditional-bridal%20(69).jpg");
const gallery70 = srcAssetUrl("traditional-bridal%20(70).jpg");
const gallery71 = srcAssetUrl("traditional-bridal%20(71).jpg");
const gallery72 = srcAssetUrl("traditional-bridal%20(72).jpg");
const gallery73 = srcAssetUrl("traditional-bridal%20(73).jpg");
const gallery74 = srcAssetUrl("traditional-bridal%20(74).jpg");
const gallery75 = srcAssetUrl("traditional-bridal%20(75).jpg");
const gallery76 = srcAssetUrl("traditional-bridal%20(76).jpg");
const gallery77 = srcAssetUrl("traditional-bridal%20(77).jpg");
const gallery78 = srcAssetUrl("traditional-bridal%20(78).jpg");
const gallery79 = srcAssetUrl("traditional-bridal%20(79).jpg");
const gallery80 = srcAssetUrl("traditional-bridal%20(80).jpg");
const gallery81 = srcAssetUrl("traditional-bridal%20(81).jpg");
const gallery82 = srcAssetUrl("traditional-bridal%20(82).jpg");
const gallery83 = srcAssetUrl("traditional-bridal%20(83).jpg");
const gallery84 = srcAssetUrl("traditional-bridal%20(84).jpg");
const gallery85 = srcAssetUrl("traditional-bridal%20(85).jpg");
const gallery86 = srcAssetUrl("traditional-bridal%20(86).jpg");
const gallery87 = srcAssetUrl("traditional-bridal%20(87).jpg");
const gallery88 = srcAssetUrl("traditional-bridal%20(88).jpg");
const gallery89 = srcAssetUrl("traditional-bridal%20(89).jpg");
const gallery90 = srcAssetUrl("traditional-bridal%20(90).jpg");
const gallery91 = srcAssetUrl("traditional-bridal%20(91).jpg");
const gallery92 = srcAssetUrl("traditional-bridal%20(92).jpg");
const gallery93 = srcAssetUrl("traditional-bridal%20(93).jpg");
const gallery94 = srcAssetUrl("traditional-bridal%20(94).jpg");
const gallery95 = srcAssetUrl("traditional-bridal%20(95).jpg");
const gallery96 = srcAssetUrl("traditional-bridal%20(96).jpg");
const gallery97 = srcAssetUrl("traditional-bridal%20(97).jpg");
const gallery98 = srcAssetUrl("traditional-bridal%20(98).jpg");
const gallery99 = srcAssetUrl("traditional-bridal%20(99).jpg");
const gallery100 = srcAssetUrl("traditional-bridal%20(100).jpg");
const gallery101 = srcAssetUrl("traditional-bridal%20(101).jpg");
const gallery102 = srcAssetUrl("traditional-bridal%20(102).jpg");
const gallery103 = srcAssetUrl("traditional-bridal%20(103).jpg");
const gallery104 = srcAssetUrl("traditional-bridal%20(104).jpg");
const gallery105 = srcAssetUrl("traditional-bridal%20(105).jpg");
const gallery106 = srcAssetUrl("traditional-bridal%20(106).jpg");
const gallery107 = srcAssetUrl("traditional-bridal%20(107).jpg");
const gallery108 = srcAssetUrl("traditional-bridal%20(108).jpg");
const gallery109 = srcAssetUrl("traditional-bridal%20(109).jpg");
const gallery110 = srcAssetUrl("traditional-bridal%20(110).jpg"); 
const gallery111 = srcAssetUrl("traditional-bridal%20(111).jpg");
const gallery112 = srcAssetUrl("traditional-bridal%20(112).jpg");
const gallery113 = srcAssetUrl("traditional-bridal%20(113).jpg");
const gallery114 = srcAssetUrl("traditional-bridal%20(114).jpg");
const gallery115 = srcAssetUrl("traditional-bridal%20(115).jpg");
const gallery116 = srcAssetUrl("traditional-bridal%20(116).jpg");
const gallery117 = srcAssetUrl("traditional-bridal%20(117).jpg");
const gallery118 = srcAssetUrl("traditional-bridal%20(118).jpg");
const gallery119 = srcAssetUrl("traditional-bridal%20(119).jpg");
const gallery120 = srcAssetUrl("traditional-bridal%20(120).jpg");
const gallery121 = srcAssetUrl("traditional-bridal%20(121).jpg");
const gallery122 = srcAssetUrl("traditional-bridal%20(122).jpg");
const gallery123 = srcAssetUrl("traditional-bridal%20(123).jpg");
const gallery124 = srcAssetUrl("traditional-bridal%20(124).jpg");
const gallery125 = srcAssetUrl("traditional-bridal%20(125).jpg");
const gallery126 = srcAssetUrl("traditional-bridal%20(126).jpg");
const gallery127 = srcAssetUrl("traditional-bridal%20(127).jpg");
const gallery128 = srcAssetUrl("traditional-bridal%20(128).jpg");
const gallery129 = srcAssetUrl("traditional-bridal%20(129).jpg");
const gallery130 = srcAssetUrl("traditional-bridal%20(130).jpg");
const gallery131 = srcAssetUrl("traditional-bridal%20(131).jpg");
const gallery132 = srcAssetUrl("traditional-bridal%20(132).jpg");
const gallery133 = srcAssetUrl("traditional-bridal%20(133).jpg");
const gallery134 = srcAssetUrl("traditional-bridal%20(134).jpg");
const gallery135 = srcAssetUrl("traditional-bridal%20(135).jpg");
const gallery136 = srcAssetUrl("traditional-bridal%20(136).jpg");
const gallery137 = srcAssetUrl("traditional-bridal%20(137).jpg");
const gallery138 = srcAssetUrl("traditional-bridal%20(138).jpg");
const gallery139 = srcAssetUrl("traditional-bridal%20(139).png");
const gallery140 = srcAssetUrl("traditional-bridal%20(140).png");
const gallery141 = srcAssetUrl("traditional-bridal%20(141).png");
const gallery142 = srcAssetUrl("traditional-bridal%20(142).png");
const gallery143 = srcAssetUrl("traditional-bridal%20(143).png");
const gallery144 = srcAssetUrl("traditional-bridal%20(144).png");
const gallery145 = srcAssetUrl("traditional-bridal%20(145).png");

// Reception / Cocktail Bridal
const RCG1 = srcAssetUrl("reception-cocktail%20(1).jpg");
const RCG2 = srcAssetUrl("reception-cocktail%20(2).jpg");
const RCG3 = srcAssetUrl("reception-cocktail%20(3).jpg");
const RCG4 = srcAssetUrl("reception-cocktail%20(4).jpg");
const RCG5 = srcAssetUrl("reception-cocktail%20(5).jpg");
const RCG6 = srcAssetUrl("reception-cocktail%20(6).jpg");
const RCG7 = srcAssetUrl("reception-cocktail%20(7).jpg");
const RCG8 = srcAssetUrl("reception-cocktail%20(8).jpg");
const RCG9 = srcAssetUrl("reception-cocktail%20(9).jpg");
const RCG10 = srcAssetUrl("reception-cocktail%20(10).jpg");
const RCG11 = srcAssetUrl("reception-cocktail%20(11).jpg");
const RCG12 = srcAssetUrl("reception-cocktail%20(12).jpg");
const RCG13 = srcAssetUrl("reception-cocktail%20(13).jpg");
const RCG14 = srcAssetUrl("reception-cocktail%20(14).jpg");
const RCG15 = srcAssetUrl("reception-cocktail%20(15).jpg");
const RCG16 = srcAssetUrl("reception-cocktail%20(16).jpg");
const RCG17 = srcAssetUrl("reception-cocktail%20(17).jpg");
const RCG18 = srcAssetUrl("reception-cocktail%20(18).jpg");
const RCG19 = srcAssetUrl("reception-cocktail%20(19).jpg");
const RCG20 = srcAssetUrl("reception-cocktail%20(20).jpg");
const RCG21 = srcAssetUrl("reception-cocktail%20(21).jpg");
const RCG22 = srcAssetUrl("reception-cocktail%20(22).jpg");
const RCG23 = srcAssetUrl("reception-cocktail%20(23).jpg");
const RCG24 = srcAssetUrl("reception-cocktail%20(24).jpg");
const RCG25 = srcAssetUrl("reception-cocktail%20(25).jpg");
const RCG26 = srcAssetUrl("reception-cocktail%20(26).jpg");
const RCG27 = srcAssetUrl("reception-cocktail%20(27).jpg");
const RCG28 = srcAssetUrl("reception-cocktail%20(28).jpg");
const RCG29 = srcAssetUrl("reception-cocktail%20(29).jpg");
const RCG30 = srcAssetUrl("reception-cocktail%20(30).jpg");
const RCG31 = srcAssetUrl("reception-cocktail%20(31).jpg");
const RCG32 = srcAssetUrl("reception-cocktail%20(32).jpg");
const RCG33 = srcAssetUrl("reception-cocktail%20(33).jpg");
const RCG34 = srcAssetUrl("reception-cocktail%20(34).jpg");
const RCG35 = srcAssetUrl("reception-cocktail%20(35).jpg");
const RCG36 = srcAssetUrl("reception-cocktail%20(36).jpg");
const RCG37 = srcAssetUrl("reception-cocktail%20(37).jpg");
const RCG38 = srcAssetUrl("reception-cocktail%20(38).jpg");
const RCG39 = srcAssetUrl("reception-cocktail%20(39).jpg");
const RCG40 = srcAssetUrl("reception-cocktail%20(40).jpg");
const RCG41 = srcAssetUrl("reception-cocktail%20(41).jpg");
const RCG42 = srcAssetUrl("reception-cocktail%20(42).jpg");
const RCG43 = srcAssetUrl("reception-cocktail%20(43).jpg");
const RCG44 = srcAssetUrl("reception-cocktail%20(44).jpg");
const RCG45 = srcAssetUrl("reception-cocktail%20(45).jpg");
const RCG46 = srcAssetUrl("reception-cocktail%20(46).jpg");
const RCG47 = srcAssetUrl("reception-cocktail%20(47).jpg");
const RCG48 = srcAssetUrl("reception-cocktail%20(48).jpg");
const RCG49 = srcAssetUrl("reception-cocktail%20(49).jpg");
const RCG50 = srcAssetUrl("reception-cocktail%20(50).jpg");
const RCG51 = srcAssetUrl("reception-cocktail%20(51).jpg");
const RCG52 = srcAssetUrl("reception-cocktail%20(52).jpg");
const RCG53 = srcAssetUrl("reception-cocktail%20(53).jpg");
const RCG54 = srcAssetUrl("reception-cocktail%20(54).jpg");
const RCG55 = srcAssetUrl("reception-cocktail%20(55).jpg");
const RCG56 = srcAssetUrl("reception-cocktail%20(56).jpg");
const RCG57 = srcAssetUrl("reception-cocktail%20(57).jpg");
const RCG58 = srcAssetUrl("reception-cocktail%20(58).jpg");
const RCG59 = srcAssetUrl("reception-cocktail%20(59).jpg");
const RCG60 = srcAssetUrl("reception-cocktail%20(60).jpg");
const RCG61 = srcAssetUrl("reception-cocktail%20(61).jpg");
const RCG62 = srcAssetUrl("reception-cocktail%20(62).jpg");
const RCG63 = srcAssetUrl("reception-cocktail%20(63).jpg");
const RCG64 = srcAssetUrl("reception-cocktail%20(64).jpg");
const RCG65 = srcAssetUrl("reception-cocktail%20(65).jpg");
const RCG66 = srcAssetUrl("reception-cocktail%20(66).jpg");
const RCG67 = srcAssetUrl("reception-cocktail%20(67).jpg");
const RCG68 = srcAssetUrl("reception-cocktail%20(68).jpg");
const RCG69 = srcAssetUrl("reception-cocktail%20(69).jpg");
const RCG70 = srcAssetUrl("reception-cocktail%20(70).jpg");
const RCG71 = srcAssetUrl("reception-cocktail%20(71).jpg");
const RCG72 = srcAssetUrl("reception-cocktail%20(72).jpg");
const RCG73 = srcAssetUrl("reception-cocktail%20(73).jpg");
const RCG74 = srcAssetUrl("reception-cocktail%20(74).jpg");
const RCG75 = srcAssetUrl("reception-cocktail%20(75).jpg");
const RCG76 = srcAssetUrl("reception-cocktail%20(76).jpg");
const RCG77 = srcAssetUrl("reception-cocktail%20(77).jpg");
const RCG78 = srcAssetUrl("reception-cocktail%20(78).jpg");
const RCG79 = srcAssetUrl("reception-cocktail%20(79).jpg");
const RCG80 = srcAssetUrl("reception-cocktail%20(80).jpg");
const RCG81 = srcAssetUrl("reception-cocktail%20(81).jpg");
const RCG82 = srcAssetUrl("reception-cocktail%20(82).jpg");
const RCG83 = srcAssetUrl("reception-cocktail%20(83).jpg");
const RCG84 = srcAssetUrl("reception-cocktail%20(84).jpg");
const RCG85 = srcAssetUrl("reception-cocktail%20(85).jpg");
const RCG86 = srcAssetUrl("reception-cocktail%20(86).jpg");
const RCG87 = srcAssetUrl("reception-cocktail%20(87).jpg");
const RCG88 = srcAssetUrl("reception-cocktail%20(88).jpg");
const RCG89 = srcAssetUrl("reception-cocktail%20(89).jpg");
const RCG90 = srcAssetUrl("reception-cocktail%20(90).jpg");
const RCG91 = srcAssetUrl("reception-cocktail%20(91).jpg");
const RCG92 = srcAssetUrl("reception-cocktail%20(92).jpg");
const RCG93 = srcAssetUrl("reception-cocktail%20(93).jpg");
const RCG94 = srcAssetUrl("reception-cocktail%20(94).jpg");
const RCG95 = srcAssetUrl("reception-cocktail%20(95).jpg");
const RCG96 = srcAssetUrl("reception-cocktail%20(96).jpg");
const RCG97 = srcAssetUrl("reception-cocktail%20(97).jpg");
const RCG98 = srcAssetUrl("reception-cocktail%20(98).jpg");
const RCG99 = srcAssetUrl("reception-cocktail%20(99).png");
const RCG100 = srcAssetUrl("reception-cocktail%20(100).png");
const RCG101 = srcAssetUrl("reception-cocktail%20(101).png");
const RCG102 = srcAssetUrl("reception-cocktail%20(102).png");
const RCG103 = srcAssetUrl("reception-cocktail%20(103).png");

// Christian Bridal
const CB1 = srcAssetUrl("Christian-bridal%20(1).jpg");
const CB2 = srcAssetUrl("Christian-bridal%20(2).jpg");
const CB3 = srcAssetUrl("Christian-bridal%20(3).jpg");
const CB4 = srcAssetUrl("Christian-bridal%20(4).jpg");
const CB5 = srcAssetUrl("Christian-bridal%20(5).jpg");
const CB6 = srcAssetUrl("Christian-bridal%20(6).jpg");
const CB7 = srcAssetUrl("Christian-bridal%20(7).jpg");
const CB8 = srcAssetUrl("Christian-bridal%20(8).jpg");
const CB9 = srcAssetUrl("Christian-bridal%20(9).jpg");
const CB10 = srcAssetUrl("Christian-bridal%20(10).jpg");
const CB11 = srcAssetUrl("Christian-bridal%20(11).jpg");
const CB12 = srcAssetUrl("Christian-bridal%20(12).jpg");
const CB13 = srcAssetUrl("Christian-bridal%20(13).jpg");
const CB14 = srcAssetUrl("Christian-bridal%20(14).jpg");
const CB15 = srcAssetUrl("Christian-bridal%20(15).jpg");
const CB16 = srcAssetUrl("Christian-bridal%20(16).jpg");
const CB17 = srcAssetUrl("Christian-bridal%20(17).jpg");
const CB18 = srcAssetUrl("Christian-bridal%20(18).jpg");
const CB19 = srcAssetUrl("Christian-bridal%20(19).jpg");
const CB20 = srcAssetUrl("Christian-bridal%20(20).jpg");
const CB21 = srcAssetUrl("Christian-bridal%20(21).jpg");
const CB22 = srcAssetUrl("Christian-bridal%20(22).jpg");
const CB23 = srcAssetUrl("Christian-bridal%20(23).jpg");
const CB24 = srcAssetUrl("Christian-bridal%20(24).jpg");
const CB25 = srcAssetUrl("Christian-bridal%20(25).jpg");
const CB26 = srcAssetUrl("Christian-bridal%20(26).jpg");
const CB27 = srcAssetUrl("Christian-bridal%20(27).jpg");
const CB28 = srcAssetUrl("Christian-bridal%20(28).jpg");
const CB29 = srcAssetUrl("Christian-bridal%20(29).jpg");
const CB30 = srcAssetUrl("Christian-bridal%20(30).jpg");
const CB31 = srcAssetUrl("Christian-bridal%20(31).jpg");
const CB32 = srcAssetUrl("Christian-bridal%20(32).jpg");
const CB33 = srcAssetUrl("Christian-bridal%20(33).jpg");
const CB34 = srcAssetUrl("Christian-bridal%20(34).jpg");
const CB35 = srcAssetUrl("Christian-bridal%20(35).jpg");
const CB36 = srcAssetUrl("Christian-bridal%20(36).jpg");
const CB37 = srcAssetUrl("Christian-bridal%20(37).png");

// Crew
const cc1 = srcAssetUrl("crew%20(1).jpg");
const cc2 = srcAssetUrl("crew%20(2).jpg");
const cc3 = srcAssetUrl("crew%20(3).jpg");
const cc4 = srcAssetUrl("crew%20(4).jpg");
const cc5 = srcAssetUrl("crew%20(5).jpg");
const cc6 = srcAssetUrl("crew%20(6).jpg");
const cc7 = srcAssetUrl("crew%20(7).jpg");
const cc8 = srcAssetUrl("crew%20(8).jpg");
const cc9 = srcAssetUrl("crew%20(9).jpg");
const cc10 = srcAssetUrl("crew%20(10).png");
const cc11 = srcAssetUrl("crew%20(11).png");

// Celebrity Makeup
const CM1 = srcAssetUrl("celebrities%20(1).jpg");
const CM2 = srcAssetUrl("celebrities%20(2).jpg");
const CM3 = srcAssetUrl("celebrities%20(3).JPG");
const CM4 = srcAssetUrl("celebrities%20(4).jpg");
const CM5 = srcAssetUrl("celebrities%20(5).jpg");
const CM6 = srcAssetUrl("celebrities%20(6).JPG");
const CM7 = srcAssetUrl("celebrities%20(7).jpg");
const CM8 = srcAssetUrl("celebrities%20(8).jpg");
const CM9 = srcAssetUrl("celebrities%20(9).jpg");
const CM10 = srcAssetUrl("celebrities%20(10).JPG");
const CM11 = srcAssetUrl("celebrities%20(11).JPG");
const CM12 = srcAssetUrl("celebrities%20(12).jpg");
const CM13 = srcAssetUrl("celebrities%20(13).jpg");
const CM14 = srcAssetUrl("celebrities%20(14).jpg");
const CM15 = srcAssetUrl("celebrities%20(15).JPG");
const CM16 = srcAssetUrl("celebrities%20(16).JPG");
const CM17 = srcAssetUrl("celebrities%20(17).JPG");
const CM18 = srcAssetUrl("celebrities%20(18).jpg");
const CM19 = srcAssetUrl("celebrities%20(19).jpg");
const CM20 = srcAssetUrl("celebrities%20(20).JPG");
const CM21 = srcAssetUrl("celebrities%20(21).JPG");
const CM22 = srcAssetUrl("celebrities%20(22).JPG");
const CM23 = srcAssetUrl("celebrities%20(23).jpg");
const CM24 = srcAssetUrl("celebrities%20(24).JPG");
const CM25 = srcAssetUrl("celebrities%20(25).jpg");
const CM26 = srcAssetUrl("celebrities%20(26).JPG");
const CM27 = srcAssetUrl("celebrities%20(27).png");
const CM28 = srcAssetUrl("celebrities%20(28).png");
const CM29 = srcAssetUrl("celebrities%20(29).png");
const CM30 = srcAssetUrl("celebrities%20(30).jpeg");
const CM31 = srcAssetUrl("celebrities%20(31).jpeg");
const CM32 = srcAssetUrl("celebrities%20(32).jpeg");
const CM33 = srcAssetUrl("celebrities%20(33).jpeg");
const CM34 = srcAssetUrl("celebrities%20(34).jpeg");
const CM35 = srcAssetUrl("celebrities%20(35).jpeg");
const CM36 = srcAssetUrl("celebrities%20(36).jpeg");
const CM37 = srcAssetUrl("celebrities%20(37).jpeg");
const CM38 = srcAssetUrl("celebrities%20(38).jpeg");
const CM39 = srcAssetUrl("celebrities%20(39).jpeg");
const CM40 = srcAssetUrl("celebrities%20(40).jpeg");


// Editorial / Photoshoots Makeup
const EP1 = srcAssetUrl("photoshoots%20(1).jpg");
const EP2 = srcAssetUrl("photoshoots%20(2).jpg");
const EP3 = srcAssetUrl("photoshoots%20(3).jpg");
const EP4 = srcAssetUrl("photoshoots%20(4).jpg");
const EP5 = srcAssetUrl("photoshoots%20(5).jpg");
const EP6 = srcAssetUrl("photoshoots%20(6).jpg");
const EP7 = srcAssetUrl("photoshoots%20(7).jpg");
const EP8 = srcAssetUrl("photoshoots%20(8).jpg");
const EP9 = srcAssetUrl("photoshoots%20(9).jpg");
const EP10 = srcAssetUrl("photoshoots%20(10).jpg");
const EP11 = srcAssetUrl("photoshoots%20(11).jpg");
const EP12 = srcAssetUrl("photoshoots%20(12).jpg");
const EP13 = srcAssetUrl("photoshoots%20(13).JPG");
const EP14 = srcAssetUrl("photoshoots%20(14).JPG");
const EP15 = srcAssetUrl("photoshoots%20(15).JPG");
const EP16 = srcAssetUrl("photoshoots%20(16).JPG");
const EP17 = srcAssetUrl("photoshoots%20(17).JPG");
const EP18 = srcAssetUrl("photoshoots%20(18).jpg");
const EP19 = srcAssetUrl("photoshoots%20(19).jpg");
const EP20 = srcAssetUrl("photoshoots%20(20).jpg");
const EP21 = srcAssetUrl("photoshoots%20(21).jpg");
const EP22 = srcAssetUrl("photoshoots%20(22).JPG");
const EP23 = srcAssetUrl("photoshoots%20(23).jpg");
const EP24 = srcAssetUrl("photoshoots%20(24).jpg");
const EP25 = srcAssetUrl("photoshoots%20(25).jpg");
const EP26 = srcAssetUrl("photoshoots%20(26).jpg");
const EP27 = srcAssetUrl("photoshoots%20(27).jpg");
const EP28 = srcAssetUrl("photoshoots%20(28).jpg");
const EP29 = srcAssetUrl("photoshoots%20(29).jpg");
const EP30 = srcAssetUrl("photoshoots%20(30).jpg");
const EP31 = srcAssetUrl("photoshoots%20(31).jpg");
const EP32 = srcAssetUrl("photoshoots%20(32).jpg");
const EP33 = srcAssetUrl("photoshoots%20(33).jpg");
const EP34 = srcAssetUrl("photoshoots%20(34).jpg");
const EP35 = srcAssetUrl("photoshoots%20(35).jpg");
const EP36 = srcAssetUrl("photoshoots%20(36).jpg");
const EP37 = srcAssetUrl("photoshoots%20(37).jpg");
const EP38 = srcAssetUrl("photoshoots%20(38).jpg");
const EP39 = srcAssetUrl("photoshoots%20(39).jpg");
const EP40 = srcAssetUrl("photoshoots%20(40).jpg");
const EP41 = srcAssetUrl("photoshoots%20(41).jpg");
const EP42 = srcAssetUrl("photoshoots%20(42).jpg");
const EP43 = srcAssetUrl("photoshoots%20(43).jpg");
const EP44 = srcAssetUrl("photoshoots%20(44).jpg");
const EP45 = srcAssetUrl("photoshoots%20(45).jpg");
const EP46 = srcAssetUrl("photoshoots%20(46).jpg");
const EP47 = srcAssetUrl("photoshoots%20(47).jpg");
const EP48 = srcAssetUrl("photoshoots%20(48).jpg");
const EP49 = srcAssetUrl("photoshoots%20(49).jpg");
const EP50 = srcAssetUrl("photoshoots%20(50).jpg");
const EP51 = srcAssetUrl("photoshoots%20(51).JPG");
const EP52 = srcAssetUrl("photoshoots%20(52).jpg");
const EP53 = srcAssetUrl("photoshoots%20(53).jpg");
const EP54 = srcAssetUrl("photoshoots%20(54).jpg");
const EP55 = srcAssetUrl("photoshoots%20(55).jpg");
const EP56 = srcAssetUrl("photoshoots%20(56).jpg");
const EP57 = srcAssetUrl("photoshoots%20(57).jpg");
const EP58 = srcAssetUrl("photoshoots%20(58).jpg");
const EP59 = srcAssetUrl("photoshoots%20(59).jpg");
const EP60 = srcAssetUrl("photoshoots%20(60).jpg");
const EP61 = srcAssetUrl("photoshoots%20(61).jpg");
const EP62 = srcAssetUrl("photoshoots%20(62).jpg");
const EP63 = srcAssetUrl("photoshoots%20(63).jpg");
const EP64 = srcAssetUrl("photoshoots%20(64).JPG");
const EP65 = srcAssetUrl("photoshoots%20(65).JPG");
const EP66 = srcAssetUrl("photoshoots%20(66).jpg");
const EP67 = srcAssetUrl("photoshoots%20(67).jpg");
const EP68 = srcAssetUrl("photoshoots%20(68).jpg");
const EP69 = srcAssetUrl("photoshoots%20(69).jpg");
const EP70 = srcAssetUrl("photoshoots%20(70).jpg");
const EP71 = srcAssetUrl("photoshoots%20(71).jpg");
const EP72 = srcAssetUrl("photoshoots%20(72).jpg");
const EP73 = srcAssetUrl("photoshoots%20(73).jpg");
const EP74 = srcAssetUrl("photoshoots%20(74).jpg");
const EP75 = srcAssetUrl("photoshoots%20(75).JPG");
const EP76 = srcAssetUrl("photoshoots%20(76).jpg");
const EP77 = srcAssetUrl("photoshoots%20(77).jpg");
const EP78 = srcAssetUrl("photoshoots%20(78).jpg");
const EP79 = srcAssetUrl("photoshoots%20(79).jpg");
const EP80 = srcAssetUrl("photoshoots%20(80).jpg");
const EP81 = srcAssetUrl("photoshoots%20(81).jpg");
const EP82 = srcAssetUrl("photoshoots%20(82).jpg");
const EP83 = srcAssetUrl("photoshoots%20(83).jpg");
const EP84 = srcAssetUrl("photoshoots%20(84).jpg");
const EP85 = srcAssetUrl("photoshoots%20(85).jpg");
const EP86 = srcAssetUrl("photoshoots%20(86).jpg");
const EP87 = srcAssetUrl("photoshoots%20(87).jpg");
const EP88 = srcAssetUrl("photoshoots%20(88).jpg");
const EP89 = srcAssetUrl("photoshoots%20(89).jpg");
const EP90 = srcAssetUrl("photoshoots%20(90).jpg");
const EP91 = srcAssetUrl("photoshoots%20(91).jpg");
const EP92 = srcAssetUrl("photoshoots%20(92).jpg");
const EP93 = srcAssetUrl("photoshoots%20(93).jpg");
const EP94 = srcAssetUrl("photoshoots%20(94).jpg");
const EP95 = srcAssetUrl("photoshoots%20(95).jpg");
const EP96 = srcAssetUrl("photoshoots%20(96).jpg");
const EP97 = srcAssetUrl("photoshoots%20(97).jpg");
const EP98 = srcAssetUrl("photoshoots%20(98).jpg");
const EP99 = srcAssetUrl("photoshoots%20(99).jpg");
const EP100 = srcAssetUrl("photoshoots%20(100).jpg");
const EP101 = srcAssetUrl("photoshoots%20(101).JPG");
const EP102 = srcAssetUrl("photoshoots%20(102).jpg");
const EP103 = srcAssetUrl("photoshoots%20(103).jpg");
const EP104 = srcAssetUrl("photoshoots%20(104).jpg");
const EP105 = srcAssetUrl("photoshoots%20(105).jpg");
const EP106 = srcAssetUrl("photoshoots%20(106).jpg");
const EP107 = srcAssetUrl("photoshoots%20(107).jpg");
const EP108 = srcAssetUrl("photoshoots%20(108).jpg");
const EP109 = srcAssetUrl("photoshoots%20(109).jpg");
const EP110 = srcAssetUrl("photoshoots%20(110).jpg");
const EP111 = srcAssetUrl("photoshoots%20(111).jpg");
const EP112 = srcAssetUrl("photoshoots%20(112).jpg");
const EP113 = srcAssetUrl("photoshoots%20(113).jpg");
const EP114 = srcAssetUrl("photoshoots%20(114).jpg");
const EP115 = srcAssetUrl("photoshoots%20(115).jpg");
const EP116 = srcAssetUrl("photoshoots%20(116).jpg");
const EP117 = srcAssetUrl("photoshoots%20(117).JPG");
const EP118 = srcAssetUrl("photoshoots%20(118).JPG");
const EP119 = srcAssetUrl("photoshoots%20(119).jpg");
const EP120 = srcAssetUrl("photoshoots%20(120).jpg");
const EP121 = srcAssetUrl("photoshoots%20(121).jpg");
const EP122 = srcAssetUrl("photoshoots%20(122).jpg");
const EP123 = srcAssetUrl("photoshoots%20(123).JPG");
const EP124 = srcAssetUrl("photoshoots%20(124).png");
const EP125 = srcAssetUrl("photoshoots%20(125).png");
const EP126 = srcAssetUrl("photoshoots%20(126).png");
const EP127 = srcAssetUrl("photoshoots%20(127).png");
const EP128 = srcAssetUrl("photoshoots%20(128).jpeg");
const EP129 = srcAssetUrl("photoshoots%20(129).jpeg");
const EP130 = srcAssetUrl("photoshoots%20(130).jpeg");
const EP131 = srcAssetUrl("photoshoots%20(131).jpeg");
const EP132 = srcAssetUrl("photoshoots%20(132).jpeg");
const EP133 = srcAssetUrl("photoshoots%20(133).jpeg");
const EP134 = srcAssetUrl("photoshoots%20(134).jpeg");
const EP135 = srcAssetUrl("photoshoots%20(135).jpeg");
const EP136 = srcAssetUrl("photoshoots%20(136).jpeg");
const EP137 = srcAssetUrl("photoshoots%20(137).jpeg");
const EP138 = srcAssetUrl("photoshoots%20(138).jpeg");
const EP139 = srcAssetUrl("photoshoots%20(139).jpeg");
const EP140 = srcAssetUrl("photoshoots%20(140).jpeg");
const EP141 = srcAssetUrl("photoshoots%20(141).jpeg");
const EP142 = srcAssetUrl("photoshoots%20(142).jpeg");
const EP143 = srcAssetUrl("photoshoots%20(143).jpeg");
const EP144 = srcAssetUrl("photoshoots%20(144).jpeg");
const EP145 = srcAssetUrl("photoshoots%20(145).jpeg");
const EP146 = srcAssetUrl("photoshoots%20(146).jpeg");
const EP147 = srcAssetUrl("photoshoots%20(147).jpeg");
const EP148 = srcAssetUrl("photoshoots%20(148).jpeg");
const EP149 = srcAssetUrl("photoshoots%20(149).jpeg");
const EP150 = srcAssetUrl("photoshoots%20(150).jpeg");
const EP151 = srcAssetUrl("photoshoots%20(151).jpeg");
const EP152 = srcAssetUrl("photoshoots%20(152).jpeg");
const EP153 = srcAssetUrl("photoshoots%20(153).jpeg");
const EP154 = srcAssetUrl("photoshoots%20(154).jpeg");
const EP155 = srcAssetUrl("photoshoots%20(155).jpeg");
const EP156 = srcAssetUrl("photoshoots%20(156).jpeg");
const EP157 = srcAssetUrl("photoshoots%20(157).jpeg");
const EP158 = srcAssetUrl("photoshoots%20(158).jpeg");
const EP159 = srcAssetUrl("photoshoots%20(159).jpeg");
const EP160 = srcAssetUrl("photoshoots%20(160).jpeg");
const EP161 = srcAssetUrl("photoshoots%20(161).jpeg");
const EP162 = srcAssetUrl("photoshoots%20(162).jpeg");
const EP163 = srcAssetUrl("photoshoots%20(163).jpeg");
const EP164 = srcAssetUrl("photoshoots%20(164).jpeg");
const EP165 = srcAssetUrl("photoshoots%20(165).jpeg");
const EP166 = srcAssetUrl("photoshoots%20(166).jpeg");
const EP167 = srcAssetUrl("photoshoots%20(167).jpeg");
const EP168 = srcAssetUrl("photoshoots%20(168).jpeg");
const EP169 = srcAssetUrl("photoshoots%20(169).jpeg");
const EP170 = srcAssetUrl("photoshoots%20(170).jpeg");

const TABS = [
  "Traditional Bridal",
  "Reception / Cocktail Bridal",
  "Christian Bridal",
  "Editorial / Photoshoots Makeup",
  "Celebrity Makeup",
  "Chiselle Crew",
];

// Add images per-tab here. For now, only the first tab is filled.
/** Round-robin into columns for masonry-style desktop layout (max 4 columns). */
function splitIntoColumns(items, maxColumns = 4) {
  const n = items.length;
  if (n === 0) return [];
  const columnCount = Math.min(maxColumns, n);
  const cols = Array.from({ length: columnCount }, () => []);
  items.forEach((item, idx) => {
    cols[idx % columnCount].push(item);
  });
  return cols;
}

const TAB_IMAGES = {
  "Traditional Bridal": [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery16,
    gallery17,
    gallery18,
    gallery19,
    gallery20,
    gallery21,
    gallery22,
    gallery23,
    gallery24,
    gallery25,
    gallery26,
    gallery27,
    gallery28,
    gallery29,
    gallery30,
    gallery31,
    gallery32,
    gallery33,
    gallery34,
    gallery35,
    gallery36,
    gallery37,
    gallery38,
    gallery39,
    gallery40,
    gallery41,
    gallery42,
    gallery43,
    gallery44,
    gallery45,
    gallery46,
    gallery47,
    gallery48,
    gallery49,
    gallery50,
    gallery51,
    gallery52,
    gallery53,
    gallery54,
    gallery55,
    gallery56,
    gallery57,
    gallery58,
    gallery59,
    gallery60,
    gallery61,
    gallery62,
    gallery63,
    gallery64,
    gallery65,
    gallery66,
    gallery67,
    gallery68,
    gallery69,
    gallery70,
    gallery71,
    gallery72,
    gallery73,
    gallery74,
    gallery75,
    gallery76,
    gallery77,
    gallery78,
    gallery79,
    gallery80,
    gallery81,
    gallery82,
    gallery83,
    gallery84,
    gallery85,
    gallery86,
    gallery87,
    gallery88,
    gallery89,
    gallery90,
    gallery91,
    gallery92,
    gallery93,
    gallery94,
    gallery95,
    gallery96,
    gallery97,
    gallery98,
    gallery99,
    gallery100,
    gallery101,
    gallery102,
    gallery103,
    gallery104,
    gallery105,
    gallery106,
    gallery107,
    gallery108,
    gallery109,
    gallery110,
    gallery111,
    gallery112,
    gallery113,
    gallery114,
    gallery115,
    gallery116,
    gallery117,
    gallery118,
    gallery119,
    gallery120,
    gallery121,
    gallery122,
    gallery123,
    gallery124,
    gallery125,
    gallery126,
    gallery127,
    gallery128,
    gallery129,
    gallery130,
    gallery131,
    gallery132,
    gallery133,
    gallery134,
    gallery135,
    gallery136,
    gallery137,
    gallery138,
    gallery139,
    gallery140,
    gallery141,
    gallery142,
    gallery143,
    gallery144,
    gallery145,
  ],
  "Reception / Cocktail Bridal": [
    RCG1, RCG2, RCG3, RCG4, RCG5, RCG6, RCG7, RCG8, RCG9, RCG10, RCG11, RCG12, RCG13, RCG14, RCG15, RCG16, RCG17, RCG18, RCG19, RCG20, RCG21, RCG22, RCG23, RCG24, RCG25, RCG26, RCG27, RCG28, RCG29, RCG30, RCG31, RCG32, RCG33, RCG34, RCG35, RCG36, RCG37, RCG38, RCG39, RCG40, RCG41, RCG42, RCG43, RCG44, RCG45, RCG46, RCG47, RCG48, RCG49, RCG50, RCG51, RCG52, RCG53, RCG54, RCG55, RCG56, RCG57, RCG58, RCG59, RCG60, RCG61, RCG62, RCG63, RCG64, RCG65, RCG66, RCG67, RCG68, RCG69, RCG70, RCG71, RCG72, RCG73, RCG74, RCG75, RCG76, RCG77, RCG78, RCG79, RCG80, RCG81, RCG82, RCG83, RCG84, RCG85, RCG86, RCG87, RCG88, RCG89, RCG90, RCG91, RCG92, RCG93, RCG94, RCG95, RCG96, RCG97, RCG98, RCG99, RCG100, RCG101, RCG102, RCG103,
  ],
  "Christian Bridal": [CB1, CB2, CB3, CB4, CB5, CB6, CB7, CB8, CB9, CB10, CB11, CB12, CB13, CB14, CB15, CB16, CB17, CB18, CB19, CB20, CB21, CB22, CB23, CB24, CB25, CB26, CB27, CB28, CB29, CB30, CB31, CB32, CB33, CB34, CB35, CB36, CB37],
  "Editorial / Photoshoots Makeup": [EP1, EP2, EP3, EP4, EP5, EP6, EP7, EP8, EP9, EP10, EP11, EP12, EP13, EP14, EP15, EP16, EP17, EP18, EP19, EP20, EP21, EP22, EP23, EP24, EP25, EP26, EP27, EP28, EP29, EP30, EP31, EP32, EP33, EP34, EP35, EP36, EP37, EP38, EP39, EP40, EP41, EP42, EP43, EP44, EP45, EP46, EP47, EP48, EP49, EP50, EP51, EP52, EP53, EP54, EP55, EP56, EP57, EP58, EP59, EP60, EP61, EP62, EP63, EP64, EP65, EP66, EP67, EP68, EP69, EP70, EP71, EP72, EP73, EP74, EP75, EP76, EP77, EP78, EP79, EP80, EP81, EP82, EP83, EP84, EP85, EP86, EP87, EP88, EP89, EP90, EP91, EP92, EP93, EP94, EP95, EP96, EP97, EP98, EP99, EP100, EP101, EP102, EP103, EP104, EP105, EP106, EP107, EP108, EP109, EP110, EP111, EP112, EP113, EP114, EP115, EP116, EP117, EP118, EP119, EP120, EP121, EP122, EP123, EP124, EP125, EP126, EP127, EP128, EP129, EP130, EP131, EP132, EP133, EP134, EP135, EP136, EP137, EP138, EP139, EP140, EP141, EP142, EP143, EP144, EP145, EP146, EP147, EP148, EP149, EP150, EP151, EP152, EP153, EP154, EP155, EP156, EP157, EP158, EP159, EP160, EP161, EP162, EP163, EP164, EP165, EP166, EP167, EP168, EP169, EP170],
  "Celebrity Makeup": [CM1, CM2, CM3, CM4, CM5, CM6, CM7, CM8, CM9, CM10, CM11, CM12, CM13, CM14, CM15, CM16, CM17, CM18, CM19, CM20, CM21, CM22, CM23, CM24, CM25, CM26, CM27, CM28, CM29, CM30, CM31, CM32, CM33, CM34, CM35, CM36, CM37, CM38, CM39, CM40],
  "Chiselle Crew": [cc1, cc2, cc3, cc4, cc5, cc6, cc7, cc8, cc9, cc10, cc11],
};

export default function GalleryTabs() {
  const [activeTab, setActiveTab] = React.useState(TABS[0]);
  const [lightboxIndex, setLightboxIndex] = React.useState(null);

  const images = TAB_IMAGES[activeTab] ?? [];
  const desktopColumns = splitIntoColumns(images, 4);

  React.useEffect(() => {
    setLightboxIndex(null);
  }, [activeTab]);

  React.useEffect(() => {
    ensureScrollTrigger();
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [activeTab]);

  return (
    <section className="py-16 md:py-24 bg-[#FFF3EE] relative overflow-hidden">
      <div className="container px-5 lg:px-[60px]">
        {/* Heading */}
        <FadeUpInView className="mb-8" variant="text" playOnMount delay={0}>
          <h1 className="mb-4 font-script text-[28px] md:text-[36px] lg:text-[42px] leading-tight tracking-[0.08em] text-brand-primary capitalize font-medium">
            Gallery
          </h1>
        </FadeUpInView>

        {/* Tabs */}
        <FadeUpInView
          className="flex gap-3 mb-10 overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x"
          variant="button"
          playOnMount
          delay={0.16}
        >
          {TABS.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-4 text-xs uppercase rounded-[4px] border font-primary text-nowrap ${
                  isActive
                    ? "bg-brand-primary text-white border-brand-primary"
                    : "bg-transparent text-brand-primary border-[#2B04051A] hover:bg-[#FFE4DD]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </FadeUpInView>

        {/* Gallery content – masonry style similar to home page */}
        {images.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-sm uppercase font-primary text-brand-primary/80">
              No images yet for “{activeTab}”.
            </p>
          </div>
        ) : (
          <>
            <ScrubStagger
              key={`${activeTab}-mobile`}
              variant="card"
              className="grid grid-cols-2 gap-4 mx-auto max-w-5xl sm:grid-cols-3 lg:hidden"
              stagger={0.08}
              sequenceOnEnter
              itemDuration={0.38}
              start="top 88%"
            >
              {images.map((src, idx) => (
                <div key={`${src}-${idx}`} data-scrub-item>
                  <GalleryImageTile
                    src={src}
                    className="h-[180px]"
                    onOpen={() => setLightboxIndex(idx)}
                  />
                </div>
              ))}
            </ScrubStagger>

            <ScrubStagger
              key={`${activeTab}-desktop`}
              variant="card"
              className="hidden gap-4 mx-auto lg:flex"
              stagger={0.08}
              sequenceOnEnter
              itemDuration={0.38}
              start="top 88%"
            >
              {desktopColumns.map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-4">
                  {col.map((src, rowIdx) => (
                    <div
                      key={`${String(src)}-${colIdx}-${rowIdx}`}
                      data-scrub-item
                    >
                      <GalleryImageTile
                        src={src}
                        onOpen={() => setLightboxIndex(images.indexOf(src))}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </ScrubStagger>
          </>
        )}

        <GalleryLightbox
          images={images}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      </div>
    </section>
  );
}
