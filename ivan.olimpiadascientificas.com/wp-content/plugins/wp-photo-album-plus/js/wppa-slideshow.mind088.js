// wppa-slideshow.js
//
// Contains slideshow modules
// Dependancies: wppa.js and default wp jQuery library
//

var wppaJsSlideshowVersion='6.4.03';function wppaStoreSlideInfo(mocc,id,url,size,width,height,fullname,name,desc,photoid,avgrat,discount,myrat,rateurl,linkurl,linktitle,linktarget,iwtimeout,commenthtml,iptchtml,exifhtml,lbtitle,shareurl,smhtml,ogdsc,hiresurl,videohtml,audiohtml){var cursor;desc=wppaRepairScriptTags(desc);if(!_wppaSlides[mocc]||'0'==id){_wppaSlides[mocc]=[];_wppaNames[mocc]=[];_wppaFullNames[mocc]=[];_wppaDsc[mocc]=[];_wppaOgDsc[mocc]=[];_wppaCurIdx[mocc]=-1;_wppaNxtIdx[mocc]=0;if(parseInt(iwtimeout)>0)_wppaTimeOut[mocc]=parseInt(iwtimeout);else _wppaTimeOut[mocc]=wppaSlideShowTimeOut;_wppaSSRuns[mocc]=false;_wppaTP[mocc]=-2;_wppaFg[mocc]=0;_wppaIsBusy[mocc]=false;_wppaFirst[mocc]=true;_wppaId[mocc]=[];_wppaAvg[mocc]=[];_wppaDisc[mocc]=[];_wppaMyr[mocc]=[];_wppaVRU[mocc]=[];_wppaLinkUrl[mocc]=[];_wppaLinkTitle[mocc]=[];_wppaLinkTarget[mocc]=[];_wppaCommentHtml[mocc]=[];_wppaIptcHtml[mocc]=[];_wppaExifHtml[mocc]=[];_wppaUrl[mocc]=[];_wppaSkipRated[mocc]=false;_wppaLbTitle[mocc]=[];_wppaDidGoto[mocc]=false;wppaSlidePause[mocc]=false;_wppaShareUrl[mocc]=[];_wppaShareHtml[mocc]=[];_wppaFilmNoMove[mocc]=false;_wppaHiresUrl[mocc]=[];_wppaIsVideo[mocc]=[];_wppaVideoHtml[mocc]=[];_wppaAudioHtml[mocc]=[];_wppaVideoNatWidth[mocc]=[];_wppaVideoNatHeight[mocc]=[];wppaVideoPlaying[mocc]=false;wppaAudioPlaying[mocc]=false;}
cursor='default';if(linkurl!=''){cursor='pointer';}
else if(wppaLightBox[mocc]!=''){cursor='url( '+wppaImageDirectory+wppaMagnifierCursor+' ),pointer';}
_wppaIsVideo[mocc][id]=(''!=videohtml);if(_wppaIsVideo[mocc][id]){_wppaSlides[mocc][id]=' alt="'+wppaTrimAlt(name)+'" class="theimg theimg-'+mocc+' big" ';if(wppaSlideVideoStart&&wppaLightBox[mocc]==''){_wppaSlides[mocc][id]+=' autoplay ';}}
else{_wppaSlides[mocc][id]=' src="'+url+'" alt="'+wppaTrimAlt(name)+'" class="theimg theimg-'+mocc+' big stereo" ';}
if(wppaSlideSwipe){_wppaSlides[mocc][id]+='ontouchstart="wppaTouchStart( event, this.id, '+mocc+' );"  ontouchend="wppaTouchEnd( event );" ontouchmove="wppaTouchMove( event );" ontouchcancel="wppaTouchCancel( event );" ';}
if(!wppaAutoColumnWidth[mocc])_wppaSlides[mocc][id]+='width="'+width+'" height="'+height+'" ';if(_wppaIsVideo[mocc][id]){var controls;controls='wppa'==wppaLightBox[mocc]?'':'controls';_wppaSlides[mocc][id]+='style="'+size+'; cursor:'+cursor+'; display:none;" '+controls+'>'+videohtml+'</video>';}
else{_wppaSlides[mocc][id]+='style="'+size+'; cursor:'+cursor+'; display:none; vertical-align:middle;">';}
_wppaFullNames[mocc][id]=fullname;_wppaNames[mocc][id]=name;_wppaDsc[mocc][id]=desc;_wppaOgDsc[mocc][id]=ogdsc;_wppaId[mocc][id]=photoid;_wppaAvg[mocc][id]=avgrat;_wppaDisc[mocc][id]=discount;_wppaMyr[mocc][id]=myrat;_wppaVRU[mocc][id]=rateurl;_wppaLinkUrl[mocc][id]=linkurl;_wppaLinkTitle[mocc][id]=linktitle;if(linktarget!=''){_wppaLinkTarget[mocc][id]=linktarget;}
else if(wppaSlideBlank[mocc]){_wppaLinkTarget[mocc][id]='_blank';}
else{_wppaLinkTarget[mocc][id]='_self';}
_wppaCommentHtml[mocc][id]=commenthtml;_wppaIptcHtml[mocc][id]=iptchtml;_wppaExifHtml[mocc][id]=exifhtml;_wppaUrl[mocc][id]=url;_wppaLbTitle[mocc][id]=wppaRepairScriptTags(lbtitle);_wppaShareUrl[mocc][id]=shareurl;_wppaShareHtml[mocc][id]=wppaRepairScriptTags(smhtml);_wppaHiresUrl[mocc][id]=hiresurl;_wppaVideoHtml[mocc][id]=videohtml;_wppaAudioHtml[mocc][id]=audiohtml;_wppaVideoNatWidth[mocc][id]=width;_wppaVideoNatHeight[mocc][id]=height;}
function wppaSpeed(mocc,faster){if(_wppaSSRuns[mocc]){_wppaSpeed(mocc,faster);}}
function wppaStopShow(mocc){if(_wppaSSRuns[mocc]){_wppaStop(mocc);}}
function wppaStartStop(mocc,index){if(_wppaIsBusy[mocc]){_wppaTP[mocc]=index;}
else{if(_wppaSSRuns[mocc]){_wppaStop(mocc);jQuery('#wppa-startstop-icon-'+mocc).attr('src',wppaStartSymbolUrl);}
else{_wppaStart(mocc,index);if(index==-1){jQuery('#wppa-startstop-icon-'+mocc).attr('src',wppaPauseSymbolUrl);}}}}
function wppaBbb(mocc,where,act){if(!_wppaSSRuns[mocc]){_wppaBbb(mocc,where,act);}}
function wppaUbb(mocc,where,act){_wppaUbb(mocc,where,act);}
function wppaRateIt(mocc,value){_wppaRateIt(mocc,value);}
function wppaPrev(mocc){_wppaDidGoto[mocc]=true;if(!_wppaSSRuns[mocc]){_wppaPrev(mocc);}}
function wppaPrevN(mocc,n){_wppaDidGoto[mocc]=true;if(!_wppaSSRuns[mocc]){_wppaPrevN(mocc,n);}}
function wppaFirst(mocc){_wppaDidGoto[mocc]=true;if(!_wppaSSRuns[mocc]){_wppaGoto(mocc,0);}}
function wppaNext(mocc){_wppaDidGoto[mocc]=true;if(!_wppaSSRuns[mocc]){_wppaNext(mocc);}}
function wppaNextN(mocc,n){_wppaDidGoto[mocc]=true;if(!_wppaSSRuns[mocc]){_wppaNextN(mocc,n);}}
function wppaLast(mocc){_wppaDidGoto[mocc]=true;if(!_wppaSSRuns[mocc]){_wppaGoto(mocc,_wppaSlides[mocc].length-1);}}
function wppaFollowMe(mocc,idx){if(!_wppaSSRuns[mocc]){_wppaFollowMe(mocc,idx);}}
function wppaLeaveMe(mocc,idx){if(!_wppaSSRuns[mocc]){_wppaLeaveMe(mocc,idx);}}
function wppaGoto(mocc,idx){_wppaDidGoto[mocc]=true;if(!_wppaSSRuns[mocc]){_wppaGoto(mocc,idx);}}
function wppaGotoFilmNoMove(mocc,idx){_wppaDidGoto[mocc]=true;if(!_wppaSSRuns[mocc]){_wppaFilmNoMove[mocc]=true;_wppaGoto(mocc,idx);}}
function wppaGotoKeepState(mocc,idx){if(_wppaNxtIdx[mocc]==idx)return;_wppaDidGoto[mocc]=true;_wppaGotoKeepState(mocc,idx);}
function _wppaGotoKeepState(mocc,idx){if(_wppaSSRuns[mocc]){_wppaGotoRunning(mocc,idx);}
else{_wppaGoto(mocc,idx);}}
function wppaGotoRunning(mocc,idx){_wppaDidGoto[mocc]=true;_wppaGotoRunning(mocc,idx);}
function wppaValidateComment(mocc){return _wppaValidateComment(mocc);}
function _wppaNextSlide(mocc,mode){var fg=_wppaFg[mocc];var bg=1-fg;if((wppaVideoPlaying[mocc]||wppaAudioPlaying[mocc])&&_wppaSSRuns[mocc]){setTimeout('_wppaNextSlide( '+mocc+', \''+mode+'\' )',500);return;}
wppaStopVideo(mocc);wppaStopAudio();if('auto'==mode){if(wppaSlidePause[mocc]){jQuery('#theimg'+fg+'-'+mocc).attr("title",wppaSlidePause[mocc]);setTimeout('_wppaNextSlide( '+mocc+', "auto" )',250);return;}}
if(!_wppaSSRuns[mocc]&&'auto'==mode)return;if(!_wppaSlides[mocc])return;if(_wppaSlides[mocc].length<2&&!_wppaFirst[mocc])return;if(!_wppaSSRuns[mocc]&&'reset'==mode){_wppaSSRuns[mocc]=true;__wppaOverruleRun=false;}
_wppaVoteInProgress=false;_wppaIsBusy[mocc]=true;if(_wppaSSRuns[mocc])_wppaShowMetaData(mocc,'hide');if(_wppaSSRuns[mocc]){_wppaNxtIdx[mocc]=_wppaCurIdx[mocc]+1;if(_wppaNxtIdx[mocc]==_wppaSlides[mocc].length)_wppaNxtIdx[mocc]=0;}
jQuery('#geodiv-'+mocc+'-'+_wppaId[mocc][_wppaCurIdx[mocc]]).css({display:'none'});jQuery('#geodiv-'+mocc+'-'+_wppaId[mocc][_wppaNxtIdx[mocc]]).css({display:''});if(typeof(_wppaLat)!='undefined'){if(_wppaLat[mocc]){if(_wppaLat[mocc][_wppaId[mocc][_wppaNxtIdx[mocc]]]){jQuery('#map-canvas-'+mocc).css('display','');wppaGeoInit(mocc,_wppaLat[mocc][_wppaId[mocc][_wppaNxtIdx[mocc]]],_wppaLon[mocc][_wppaId[mocc][_wppaNxtIdx[mocc]]]);}
else jQuery('#map-canvas-'+mocc).css('display','none');}
else jQuery('#map-canvas-'+mocc).css('display','none');}
else jQuery('#map-canvas-'+mocc).css('display','none');jQuery('[id^=wppa-numbar-'+mocc+'-]').css({backgroundColor:wppaBGcolorNumbar,borderColor:wppaBcolorNumbar,fontFamily:wppaFontFamilyNumbar,fontSize:wppaFontSizeNumbar,color:wppaFontColorNumbar,fontWeight:wppaFontWeightNumbar});jQuery("#wppa-numbar-"+mocc+"-"+_wppaNxtIdx[mocc]).css({backgroundColor:wppaBGcolorNumbarActive,borderColor:wppaBcolorNumbarActive,fontFamily:wppaFontFamilyNumbarActive,fontSize:wppaFontSizeNumbarActive,color:wppaFontColorNumbarActive,fontWeight:wppaFontWeightNumbarActive});if(_wppaSlides[mocc].length>wppaNumbarMax){jQuery('[id^=wppa-numbar-'+mocc+'-]').html(' . ');jQuery("#wppa-numbar-"+mocc+"-"+_wppaNxtIdx[mocc]).html(' '+(_wppaNxtIdx[mocc]+1)+' ');}
if(_wppaFirst[mocc]){if(_wppaCurIdx[mocc]!=-1){wppaMakeTheSlideHtml(mocc,'0',_wppaCurIdx[mocc]);}
wppaMakeTheSlideHtml(mocc,'1',_wppaNxtIdx[mocc]);jQuery("#imagedesc-"+mocc).html(_wppaDsc[mocc][_wppaCurIdx[mocc]]);jQuery("#imagetitle-"+mocc).html(wppaMakeNameHtml(mocc));jQuery("#wppa-comments-"+mocc).html(_wppaCommentHtml[mocc][_wppaCurIdx[mocc]]);jQuery("#iptc-"+mocc).html(_wppaIptcHtml[mocc][_wppaCurIdx[mocc]]);jQuery("#exif-"+mocc).html(_wppaExifHtml[mocc][_wppaCurIdx[mocc]]);if(wppaIsMini[mocc]||wppaGetContainerWidth(mocc)<wppaMiniTreshold){jQuery('#prev-arrow-'+mocc).html('&laquo;&nbsp;'+wppaPrevP);jQuery('#next-arrow-'+mocc).html(wppaNextP+'&nbsp;&raquo;');jQuery('#wppa-avg-rat-'+mocc).html(wppaAvgRat);jQuery('#wppa-my-rat-'+mocc).html(wppaMyRat);}
else{jQuery('#prev-arrow-'+mocc).html('&laquo;&nbsp;'+wppaPreviousPhoto);jQuery('#next-arrow-'+mocc).html(wppaNextPhoto+'&nbsp;&raquo;');jQuery('#wppa-avg-rat-'+mocc).html(wppaAvgRating);jQuery('#wppa-my-rat-'+mocc).html(wppaMyRating);}}
else{wppaMakeTheSlideHtml(mocc,bg,_wppaNxtIdx[mocc]);}
_wppaLoadSpinner(mocc);_wppaFirst[mocc]=false;_wppaCheckRewind(mocc);wppaColWidth[mocc]=0;_wppaDoAutocol(mocc);setTimeout('_wppaNextSlide_2( '+mocc+' )',10);}
function _wppaNextSlide_2(mocc){var fg=_wppaFg[mocc];var bg=1-fg;var elm=document.getElementById('theimg'+bg+"-"+mocc);if(elm){if(1==elm.nodeType){if('IMG'==elm.nodeName){if(!elm.complete){setTimeout('_wppaNextSlide_2( '+mocc+' )',100);wppaConsoleLog('Retry next2');return;}}}}
wppaUpdateLightboxes();_wppaUnloadSpinner(mocc);if(_wppaSSRuns[mocc]!=-1){if(!_wppaToTheSame){_wppaShowMetaData(mocc,'hide');}}
_wppaFg[mocc]=1-_wppaFg[mocc];fg=_wppaFg[mocc];bg=1-fg;setTimeout('_wppaNextSlide_3( '+mocc+' )',10);}
function _wppaNextSlide_3(mocc){var nw=_wppaFg[mocc];var ol=1-nw;var olIdx=_wppaCurIdx[mocc];var nwIdx=_wppaNxtIdx[mocc];var olSli="#theslide"+ol+"-"+mocc;var nwSli="#theslide"+nw+"-"+mocc;var olImg="#theimg"+ol+"-"+mocc;var nwImg="#theimg"+nw+"-"+mocc;var w=parseInt(jQuery(olSli).css('width'));var dir='nil';if(olIdx==nwIdx)dir='none';if(olIdx==nwIdx-1)dir='left';if(olIdx==nwIdx+1)dir='right';if(olIdx==_wppaSlides[mocc].length-1&&0==nwIdx&&wppaSlideWrap)dir='left';if(0==olIdx&&nwIdx==_wppaSlides[mocc].length-1&&wppaSlideWrap)dir='right';if('nil'==dir){if(olIdx<nwIdx)dir='left';else dir='right';}
jQuery(olSli).css({marginLeft:0,width:w});jQuery(nwSli).css({marginLeft:0,width:w});wppaFormatSlide(mocc);switch(wppaAnimationType){case'fadeover':jQuery(olImg).fadeOut(wppaAnimationSpeed);jQuery(nwImg).fadeIn(wppaAnimationSpeed,_wppaNextSlide_4(mocc));break;case'fadeafter':jQuery(olImg).fadeOut(wppaAnimationSpeed);jQuery(nwImg).delay(wppaAnimationSpeed).fadeIn(wppaAnimationSpeed,_wppaNextSlide_4(mocc));break;case'swipe':switch(dir){case'left':jQuery(olSli).animate({marginLeft:-w+"px"},wppaAnimationSpeed,"swing");jQuery(nwSli).css({marginLeft:w+"px"});jQuery(nwImg).fadeIn(10);jQuery(nwSli).animate({marginLeft:0+"px"},wppaAnimationSpeed,"swing",_wppaNextSlide_4(mocc));break;case'right':jQuery(olSli).animate({marginLeft:w+"px"},wppaAnimationSpeed,"swing");jQuery(nwSli).css({marginLeft:-w+"px"});jQuery(nwImg).fadeIn(10);jQuery(nwSli).animate({marginLeft:0+"px"},wppaAnimationSpeed,"swing",_wppaNextSlide_4(mocc));break;case'none':jQuery(nwImg).fadeIn(10);setTimeout('_wppaNextSlide_4( '+mocc+' )',10);break;}
break;case'stackon':switch(dir){case'left':jQuery(olSli).css({zIndex:80});jQuery(nwSli).css({marginLeft:w+"px",zIndex:81});jQuery(nwImg).fadeIn(10);jQuery(olImg).delay(wppaAnimationSpeed).fadeOut(10);jQuery(nwSli).animate({marginLeft:0+"px"},wppaAnimationSpeed,"swing",_wppaNextSlide_4(mocc));break;case'right':jQuery(olSli).css({zIndex:80});jQuery(nwSli).css({marginLeft:-w+"px",zIndex:81});jQuery(nwImg).fadeIn(10);jQuery(olImg).delay(wppaAnimationSpeed).fadeOut(10);jQuery(nwSli).animate({marginLeft:0+"px"},wppaAnimationSpeed,"swing",_wppaNextSlide_4(mocc));break;case'none':jQuery(nwImg).fadeIn(10);setTimeout('_wppaNextSlide_4( '+mocc+' )',10);break;}
break;case'stackoff':switch(dir){case'left':jQuery(olSli).css({marginLeft:0,zIndex:81});jQuery(olSli).animate({marginLeft:-w+"px"},wppaAnimationSpeed,"swing",_wppaNextSlide_4(mocc));jQuery(nwSli).css({marginLeft:0,zIndex:80});jQuery(nwImg).fadeIn(10);jQuery(olImg).delay(wppaAnimationSpeed).fadeOut(10);break;case'right':jQuery(olSli).css({marginLeft:0,zIndex:81});jQuery(olSli).animate({marginLeft:w+"px"},wppaAnimationSpeed,"swing",_wppaNextSlide_4(mocc));jQuery(nwSli).css({marginLeft:0,zIndex:80});jQuery(nwImg).fadeIn(10);jQuery(olImg).delay(wppaAnimationSpeed).fadeOut(10);break;case'none':jQuery(nwImg).fadeIn(10);setTimeout('_wppaNextSlide_4( '+mocc+' )',10);break;}
break;case'turnover':switch(dir){case'left':case'right':var nwImgWid=parseInt(jQuery(nwSli).css('width'));var nwMarLft=parseInt(jQuery(nwImg).css('marginLeft'));jQuery(olSli).css({zIndex:80});jQuery(nwSli).css({zIndex:81,width:0});jQuery(nwImg).css({maxWidth:0,marginLeft:0});jQuery(nwImg).fadeIn(10);jQuery(nwSli).animate({width:w},wppaAnimationSpeed,"swing");jQuery(nwImg).animate({maxWidth:nwImgWid,marginLeft:nwMarLft},wppaAnimationSpeed,"swing",_wppaNextSlide_4(mocc));jQuery(olImg).delay(wppaAnimationSpeed).fadeOut(10);break;case'none':jQuery(nwImg).fadeIn(10);setTimeout('_wppaNextSlide_4( '+mocc+' )',10);break;}
break;default:alert('Animation type '+wppaAnimationType+' is not supported in this version');}}
function _wppaNextSlide_4(mocc){var nw=_wppaFg[mocc];var ol=1-nw;var olSli="#theslide"+ol+"-"+mocc;var nwSli="#theslide"+nw+"-"+mocc;jQuery(olSli).css({zIndex:80});jQuery(nwSli).css({zIndex:81});_wppaCurIdx[mocc]=_wppaNxtIdx[mocc];wppaFormatSlide(mocc);if(wppaIsMini[mocc]||wppaGetContainerWidth(mocc)<wppaMiniTreshold){jQuery('#counter-'+mocc).html((_wppaCurIdx[mocc]+1)+' / '+_wppaSlides[mocc].length);}
else{jQuery('#counter-'+mocc).html(wppaPhoto+' '+(_wppaCurIdx[mocc]+1)+' '+wppaOf+' '+_wppaSlides[mocc].length);}
jQuery('#bc-pname-'+mocc).html(_wppaNames[mocc][_wppaCurIdx[mocc]]);_wppaAdjustFilmstrip(mocc);_wppaSetRatingDisplay(mocc);setTimeout('_wppaNextSlide_5( '+mocc+' )',_wppaTextDelay);}
function _wppaNextSlide_5(mocc){if(!_wppaToTheSame){jQuery('#imagedesc-'+mocc).html(_wppaDsc[mocc][_wppaCurIdx[mocc]]);if(wppaHideWhenEmpty){var desc=_wppaDsc[mocc][_wppaCurIdx[mocc]];if(''==desc||'&nbsp;'==desc){jQuery('#descbox-'+mocc).css('display','none');}
else{jQuery('#descbox-'+mocc).css('display','');}}
jQuery("#imagetitle-"+mocc).html(wppaMakeNameHtml(mocc));jQuery("#wppa-comments-"+mocc).html(_wppaCommentHtml[mocc][_wppaCurIdx[mocc]]);jQuery("#iptc-"+mocc).html(_wppaIptcHtml[mocc][_wppaCurIdx[mocc]]);jQuery("#exif-"+mocc).html(_wppaExifHtml[mocc][_wppaCurIdx[mocc]]);jQuery("#wppa-share-"+mocc).html(_wppaShareHtml[mocc][_wppaCurIdx[mocc]]);}
_wppaToTheSame=false;if(_wppaSSRuns[mocc]&&!wppaSlideWrap&&((_wppaCurIdx[mocc]+1)==_wppaSlides[mocc].length)){_wppaIsBusy[mocc]=false;_wppaStop(mocc);return;}
_wppaShowMetaData(mocc,'show');if(_wppaTP[mocc]!=-2){var index=_wppaTP[mocc];_wppaTP[mocc]=-2;_wppaDidGoto[mocc]=false;_wppaIsBusy[mocc]=false;if(!wppaIsMini[mocc]){_bumpViewCount(_wppaId[mocc][_wppaCurIdx[mocc]]);}
_wppaDoAutocol(mocc);wppaStartStop(mocc,index);return;}
else{wppaUpdateLightboxes();if(!wppaIsMini[mocc]){var visurl=wppaGetCurrentFullUrl(mocc,_wppaCurIdx[mocc]);if(''==visurl){visurl=_wppaShareUrl[mocc][_wppaCurIdx[mocc]];}
if(typeof(wppaQRUpdate)!='undefined'){wppaQRUpdate(_wppaShareUrl[mocc][_wppaCurIdx[mocc]]);}
if(!_wppaSSRuns[mocc]){if(_wppaSlides[mocc].length>1){wppaPushStateSlide(mocc,_wppaCurIdx[mocc],visurl);}}}
if(_wppaSSRuns[mocc]){setTimeout('_wppaNextSlide( '+mocc+', "auto" )',_wppaTimeOut[mocc]);}}
jQuery(document).trigger('glossaryTooltipReady');_wppaDidGoto[mocc]=false;_wppaIsBusy[mocc]=false;if(!wppaIsMini[mocc]){_bumpViewCount(_wppaId[mocc][_wppaCurIdx[mocc]]);}
_wppaDoAutocol(mocc);wppaStopAudio();if(wppaSlideAudioStart){var elms=jQuery('.wppa-audio-'+_wppaId[mocc][_wppaCurIdx[mocc]]+'-'+mocc);if(elms.length>0){var audio=elms[elms.length-1];if(audio){if(!wppaAudioPlaying[mocc]){audio.play();}}}}}
function wppaFormatSlide(mocc){var imgid='theimg'+_wppaFg[mocc]+'-'+mocc;var slideid='theslide'+_wppaFg[mocc]+'-'+mocc;var frameid='slide_frame-'+mocc;var contw=wppaColWidth[mocc];var elm=document.getElementById(imgid);var audios=jQuery('.wppa-audio-'+mocc);if(!elm)return;if(typeof(contw)=='undefined'||contw==0){contw=wppaGetContainerWidth(mocc);wppaColWidth[mocc]=contw;}
var natwidth=elm.naturalWidth;if(typeof(natwidth)=='undefined')natwidth=parseInt(elm.style.maxWidth);var natheight=elm.naturalHeight;if(typeof(natheight)=='undefined')natheight=parseInt(elm.style.maxHeight);var aspect=wppaAspectRatio[mocc];var fullsize=wppaFullSize[mocc];var delta=wppaFullFrameDelta[mocc];var ponly=wppaPortraitOnly[mocc];var valign=wppaFullValign[mocc];if(typeof(valign)=='undefined')valign='none';var halign=wppaFullHalign[mocc];if(typeof(halign)=='undefined')halign='none';var stretch=wppaStretch;var imgw,imgh;var margl,margt;var slidew,slideh;var framew,frameh;if(ponly){imgw=contw-delta;imgh=parseInt(imgw*natheight/natwidth);margl=0;margt=0;slidew=contw;slideh=imgh+delta;framew=contw;frameh=slideh;jQuery('#'+frameid).css({width:framew,height:frameh});jQuery('#'+slideid).css({width:slidew,height:slideh});jQuery('#'+imgid).css({width:imgw,height:imgh});}
else{framew=contw;if(fullsize<contw){framew=fullsize;}
frameh=parseInt(framew*aspect);slidew=framew;slideh=frameh;if(stretch||natwidth>=(framew-delta)||natheight>=(frameh-delta)){if(((natheight+delta)/(natwidth+delta))>aspect){imgh=frameh-delta;imgw=parseInt(imgh*natwidth/natheight);}
else{imgw=framew-delta;imgh=parseInt(imgw*natheight/natwidth);}}
else{imgw=natwidth;imgh=natheight;}
if(valign!='default'&&valign!='none'){switch(valign){case'top':margt=0;break;case'center':margt=parseInt((frameh-(imgh+delta))/2);break;case'bottom':margt=frameh-(imgh+delta);break;case'fit':margt=0;frameh=imgh+delta;slideh=imgh+delta;break;default:}
jQuery('#'+imgid).css({marginTop:margt,marginBottom:0});}
jQuery('#'+frameid).css({width:framew,height:frameh});jQuery('#'+slideid).css({width:slidew,height:slideh});jQuery('#'+imgid).css({width:imgw,height:imgh});if(valign!='default'&&valign!='none'&&halign!='none'&&halign!='default'){switch(halign){case'left':margl=0;break;case'center':margl=parseInt((contw-framew)/2);break;case'right':margl=contw-framew;break;default:}
if(margl<0)margl=0;jQuery('#'+imgid).css({marginLeft:'auto',marginRight:'auto'});jQuery('#'+frameid).css({marginLeft:margl});}
if(audios.length>0){var i=0;jQuery(audios[i]).css({width:imgw,left:(contw-imgw)/2});i++;}}
var bbbwidth=parseInt(framew/3);var leftmarg=bbbwidth*2;jQuery('#bbb-'+mocc+'-l').css({height:frameh,width:bbbwidth,left:0});jQuery('#bbb-'+mocc+'-r').css({height:frameh,width:bbbwidth,left:leftmarg});}
function wppaMakeNameHtml(mocc){var result='';if(_wppaCurIdx[mocc]<0)return'';if(wppaIsMini[mocc]||_wppaIsVideo[mocc][_wppaCurIdx[mocc]]){result=_wppaFullNames[mocc][_wppaCurIdx[mocc]];}
else switch(wppaArtMonkyLink){case'file':case'zip':if(wppaArtMonkeyButton){if(_wppaFullNames[mocc][_wppaCurIdx[mocc]]){var label=_wppaFullNames[mocc][_wppaCurIdx[mocc]].split('<img');result='<input type="button" title="Download" style="cursor:pointer; margin-bottom:0px; max-width:'+(wppaGetContainerWidth(mocc)-24)+'px;" class="wppa-download-button" onclick="wppaAjaxMakeOrigName( '+mocc+', \''+_wppaId[mocc][_wppaCurIdx[mocc]]+'\' );" ontouchstart="wppaAjaxMakeOrigName( '+mocc+', \''+_wppaId[mocc][_wppaCurIdx[mocc]]+'\' );" value="'+wppaDownLoad+': '+label[0]+'" />';if(label[1])result+='<img'+label[1];}
else{result='';}}
else{result='<a title="Download" style="cursor:pointer;" onclick="wppaAjaxMakeOrigName( '+mocc+', \''+_wppaId[mocc][_wppaCurIdx[mocc]]+'\' );" ontouchstart="wppaAjaxMakeOrigName( '+mocc+', \''+_wppaId[mocc][_wppaCurIdx[mocc]]+'\' );">'+wppaDownLoad+': '+_wppaFullNames[mocc][_wppaCurIdx[mocc]]+'</a>';}
break;case'none':result=_wppaFullNames[mocc][_wppaCurIdx[mocc]];break;default:result='';}
return wppaRepairBrTags(result);}
function wppaMakeTheSlideHtml(mocc,bgfg,idx){var imgVideo=(_wppaIsVideo[mocc][idx])?'video':'img';var theHtml;var url;var theTitle='title';if(wppaLightBox[mocc]=='wppa')theTitle='data-lbtitle';var mmEvents=wppaLightBox[mocc]==''?' onpause="wppaVideoPlaying['+mocc+'] = false;" onplay="wppaVideoPlaying['+mocc+'] = true;"':'';if(_wppaLinkUrl[mocc][idx]!=''){if(wppaSlideToFullpopup){theHtml='<a onclick="wppaStopAudio();'+_wppaLinkUrl[mocc][idx]+'" target="'+_wppaLinkTarget[mocc][idx]+'" title="'+_wppaLinkTitle[mocc][idx]+'">'+'<'+imgVideo+mmEvents+' title="'+_wppaLinkTitle[mocc][idx]+'" id="theimg'+bgfg+'-'+mocc+'" '+_wppaSlides[mocc][idx]+'</a>';}
else{theHtml='<a onclick="wppaStopAudio();" href="'+_wppaLinkUrl[mocc][idx]+'" target="'+_wppaLinkTarget[mocc][idx]+'" title="'+_wppaLinkTitle[mocc][idx]+'">'+'<'+imgVideo+mmEvents+' title="'+_wppaLinkTitle[mocc][idx]+'" id="theimg'+bgfg+'-'+mocc+'" '+_wppaSlides[mocc][idx]+'</a>';}}
else{if(wppaLightBox[mocc]==''){theHtml='<'+imgVideo+mmEvents+' title="'+_wppaNames[mocc][idx]+'" id="theimg'+bgfg+'-'+mocc+'" '+_wppaSlides[mocc][idx];}
else{var html='';var i=0;var set=wppaLightboxSingle[mocc]?'':'[slide-'+mocc+'-'+bgfg+']';while(i<idx){if(wppaOvlHires||(wppaLightBox[mocc]!='wppa')){url=_wppaHiresUrl[mocc][i];}
else{url=wppaMakeFullsizeUrl(_wppaUrl[mocc][i]);}
html+='<a href="'+url+'"'+
((_wppaIsVideo[mocc][i])?' data-videonatwidth="'+_wppaVideoNatWidth[mocc][i]+'"'+' data-videonatheight="'+_wppaVideoNatHeight[mocc][i]+'"'+' data-videohtml="'+encodeURI(_wppaVideoHtml[mocc][i])+'"':'')+
((_wppaAudioHtml[mocc][i]!='')?' data-audiohtml="'+encodeURI(_wppaAudioHtml[mocc][i])+'"':'')+' '+theTitle+'="'+_wppaLbTitle[mocc][i]+'"'+' '+wppaRel+'="'+wppaLightBox[mocc]+set+'"></a>';i++;}
if(wppaOvlHires||(wppaLightBox[mocc]!='wppa')){url=_wppaHiresUrl[mocc][idx];}
else{url=wppaMakeFullsizeUrl(_wppaUrl[mocc][idx]);}
html+='<a href="'+url+'"'+' onclick="wppaStopAudio();"'+' target="'+_wppaLinkTarget[mocc][idx]+'"'+
((_wppaIsVideo[mocc][i])?' data-videonatwidth="'+_wppaVideoNatWidth[mocc][idx]+'"'+' data-videonatheight="'+_wppaVideoNatHeight[mocc][idx]+'"'+' data-videohtml="'+encodeURI(_wppaVideoHtml[mocc][idx])+'"':'')+
((_wppaAudioHtml[mocc][i]!='')?' data-audiohtml="'+encodeURI(_wppaAudioHtml[mocc][idx])+'"':'')+' '+theTitle+'="'+_wppaLbTitle[mocc][idx]+'"'+' '+wppaRel+'="'+wppaLightBox[mocc]+set+'">'+'<'+imgVideo+mmEvents+' title="'+_wppaLinkTitle[mocc][idx]+'" id="theimg'+bgfg+'-'+mocc+'" '+_wppaSlides[mocc][idx]+'</a>';i=idx+1;while(i<_wppaUrl[mocc].length){if(wppaOvlHires||(wppaLightBox[mocc]!='wppa')){url=_wppaHiresUrl[mocc][i];}
else{url=wppaMakeFullsizeUrl(_wppaUrl[mocc][i]);}
html+='<a href="'+url+'"'+
((_wppaIsVideo[mocc][i])?' data-videonatwidth="'+_wppaVideoNatWidth[mocc][i]+'"'+' data-videonatheight="'+_wppaVideoNatHeight[mocc][i]+'"'+' data-videohtml="'+encodeURI(_wppaVideoHtml[mocc][i])+'"':'')+
((_wppaAudioHtml[mocc][i]!='')?' data-audiohtml="'+encodeURI(_wppaAudioHtml[mocc][i])+'"':'')+' '+theTitle+'="'+_wppaLbTitle[mocc][i]+'"'+' '+wppaRel+'="'+wppaLightBox[mocc]+set+'"></a>';i++;}
theHtml=html;}}
if(_wppaAudioHtml[mocc][idx]!=''){theHtml+='<audio'+' controls'+' id="wppa-audio-'+_wppaId[mocc][idx]+'-'+mocc+'"'+' class="wppa-audio-'+mocc+' wppa-audio-'+_wppaId[mocc][idx]+'-'+mocc+'"'+' data-from="wppa"'+' onplay="wppaAudioPlaying['+mocc+'] = true;"'+' onpause="wppaAudioPlaying['+mocc+'] = false"'+' style="'+'position:relative;'+'top:-'+(wppaAudioHeight+wppaSlideBorderWidth)+'px;'+'z-index:10;'+'width:'+_wppaVideoNatWidth[mocc][idx]+'px;'+'left:'+(Math.max(0,(wppaGetContainerWidth(mocc)-_wppaVideoNatWidth[mocc][idx])/2))+'px;'+'padding:0 '+wppaSlideBorderWidth+'px;'+'box-sizing:border-box;'+'"'+' >'+
_wppaAudioHtml[mocc][idx]+'</audio>';}
theHtml=theHtml.replace(/title=""/g,'');jQuery("#theslide"+bgfg+"-"+mocc).html(theHtml);}
function _wppaAdjustFilmstrip(mocc){if(!document.getElementById('wppa-filmstrip-'+mocc))return;jQuery('.wppa-film-'+mocc).removeClass('wppa-filmthumb-active');if(!_wppaFilmNoMove[mocc]){var xoffset;xoffset=wppaFilmStripLength[mocc]/2-(_wppaCurIdx[mocc]+0.5+wppaPreambule)*wppaThumbnailPitch[mocc]-wppaFilmStripMargin[mocc];if(wppaFilmShowGlue)xoffset-=(wppaFilmStripMargin[mocc]*2+2);jQuery('#wppa-filmstrip-'+mocc).stop().animate({marginLeft:xoffset+'px'});}
else{_wppaFilmNoMove[mocc]=false;}
if(_wppaCurIdx[mocc]!=-1){var from=_wppaCurIdx[mocc]-10;if(from<0)from=0;var to=_wppaCurIdx[mocc]+10;if(to>_wppaSlides[mocc].length)to=_wppaSlides[mocc].length;var index=from;while(index<=to){var html=jQuery('#film_wppatnf_'+_wppaId[mocc][index]+'_'+mocc).html();if(html){if(html.search('<!--')!=-1){html=html.replace('<!--','');html=html.replace('-->','');jQuery('#film_wppatnf_'+_wppaId[mocc][index]+'_'+mocc).html(html);if(jQuery('#wppa-film-'+index+'-'+mocc).attr('data-title')!=''){jQuery('#wppa-film-'+index+'-'+mocc).attr('title',jQuery('#wppa-film-'+index+'-'+mocc).attr('data-title'));}
else if(wppaFilmThumbTitle!=''){jQuery('#wppa-film-'+index+'-'+mocc).attr('title',wppaFilmThumbTitle);}
else{jQuery('#wppa-film-'+index+'-'+mocc).attr('title',_wppaNames[mocc][index]);}}}
index++;}}
jQuery('#wppa-film-'+_wppaCurIdx[mocc]+'-'+mocc).addClass('wppa-filmthumb-active');}
function _wppaNext(mocc){if(!wppaSlideWrap&&_wppaCurIdx[mocc]==(_wppaSlides[mocc].length-1))return;_wppaNxtIdx[mocc]=_wppaCurIdx[mocc]+1;if(_wppaNxtIdx[mocc]==_wppaSlides[mocc].length)_wppaNxtIdx[mocc]=0;_wppaNextSlide(mocc,0);}
function _wppaNextN(mocc,n){if(!wppaSlideWrap&&_wppaCurIdx[mocc]>=(_wppaSlides[mocc].length-n))return;_wppaNxtIdx[mocc]=_wppaCurIdx[mocc]+n;while(_wppaNxtIdx[mocc]>=_wppaSlides[mocc].length)_wppaNxtIdx[mocc]-=_wppaSlides[mocc].length;_wppaNextSlide(mocc,0);}
function _wppaNextOnCallback(mocc){if(!wppaSlideWrap&&_wppaCurIdx[mocc]==(_wppaSlides[mocc].length-1))return;if(_wppaSkipRated[mocc]){var now=_wppaCurIdx[mocc];var idx=now+1;if(idx==_wppaSlides[mocc].length)idx=0;var next=idx;if(_wppaMyr[mocc][next]!=0){idx++;if(idx==_wppaSlides[mocc].length)idx=0;while(idx!=next&&_wppaMyr[mocc][idx]!=0){idx++;if(idx==_wppaSlides[mocc].length)idx=0;}
next=idx;}
_wppaNxtIdx[mocc]=next;}
else{_wppaNxtIdx[mocc]=_wppaCurIdx[mocc]+1;if(_wppaNxtIdx[mocc]==_wppaSlides[mocc].length)_wppaNxtIdx[mocc]=0;}
_wppaNextSlide(mocc,0);}
function _wppaPrev(mocc){if(!wppaSlideWrap&&_wppaCurIdx[mocc]==0)return;_wppaNxtIdx[mocc]=_wppaCurIdx[mocc]-1;if(_wppaNxtIdx[mocc]<0)_wppaNxtIdx[mocc]=_wppaSlides[mocc].length-1;_wppaNextSlide(mocc,0);}
function _wppaPrevN(mocc,n){if(!wppaSlideWrap&&_wppaCurIdx[mocc]<n)return;_wppaNxtIdx[mocc]=_wppaCurIdx[mocc]-n;while(_wppaNxtIdx[mocc]<0)_wppaNxtIdx[mocc]+=_wppaSlides[mocc].length;_wppaNextSlide(mocc,0);}
function _wppaGoto(mocc,idx){_wppaToTheSame=(_wppaNxtIdx[mocc]==idx);_wppaNxtIdx[mocc]=idx;_wppaNextSlide(mocc,0);}
function _wppaGotoRunning(mocc,idx){if(_wppaIsBusy[mocc]){setTimeout('_wppaGotoRunning( '+mocc+','+idx+' )',10);return;}
wppaConsoleLog('GotoRunning '+mocc);_wppaSSRuns[mocc]=false;_wppaToTheSame=(_wppaNxtIdx[mocc]==idx);_wppaNxtIdx[mocc]=idx;__wppaOverruleRun=true;_wppaNextSlide(mocc,"manual");_wppaGotoContinue(mocc);}
function _wppaGotoContinue(mocc){if(_wppaIsBusy[mocc]){setTimeout('_wppaGotoContinue( '+mocc+' )',10);return;}
setTimeout('_wppaNextSlide( '+mocc+', "reset" )',_wppaTimeOut[mocc]+10);}
function _wppaStart(mocc,idx){if(idx==-2){var i=0;idx=0;_wppaSkipRated[mocc]=true;if(_wppaMyr[mocc][i]!=0){while(i<_wppaSlides[mocc].length){if(idx==0&&_wppaMyr[mocc][i]==0)idx=i;i++;}}}
if(idx>-1){jQuery('#startstop-'+mocc).html(wppaStart+' '+wppaSlideShow);jQuery('#speed0-'+mocc).css('display','none');jQuery('#speed1-'+mocc).css('display','none');_wppaNxtIdx[mocc]=idx;_wppaCurIdx[mocc]=idx;_wppaNextSlide(mocc,0);_wppaShowMetaData(mocc,'show');}
else{_wppaSSRuns[mocc]=true;_wppaNextSlide(mocc,0);jQuery('#startstop-'+mocc).html(wppaStop);jQuery('#speed0-'+mocc).css('display','inline');jQuery('#speed1-'+mocc).css('display','inline');_wppaShowMetaData(mocc,'hide');jQuery('#bc-pname-'+mocc).html(wppaSlideShow);}
_wppaSetRatingDisplay(mocc);}
function _wppaStop(mocc){_wppaSSRuns[mocc]=false;jQuery('#startstop-'+mocc).html(wppaStart+' '+wppaSlideShow);jQuery('#speed0-'+mocc).css('display','none');jQuery('#speed1-'+mocc).css('display','none');_wppaShowMetaData(mocc,'show');jQuery('#bc-pname-'+mocc).html(_wppaNames[mocc][_wppaCurIdx[mocc]]);}
function _wppaSpeed(mocc,faster){if(faster){if(_wppaTimeOut[mocc]>500)_wppaTimeOut[mocc]/=1.5;}
else{if(_wppaTimeOut[mocc]<60000)_wppaTimeOut[mocc]*=1.5;}}
function _wppaLoadSpinner(mocc){if(!document.getElementById('slide_frame-'+mocc))return;var top;var lft;var elm;var flag=true;if(document.getElementById('theimg0-'+mocc)){if(document.getElementById('theimg0-'+mocc).complete)flag=false;}
if(document.getElementById('theimg1-'+mocc)){if(document.getElementById('theimg1-'+mocc).complete)flag=false;}
top=parseInt(document.getElementById('slide_frame-'+mocc).clientHeight/2)-16;lft=parseInt(document.getElementById('slide_frame-'+mocc).clientWidth/2)-16;jQuery('#spinner-'+mocc).css('top',top);jQuery('#spinner-'+mocc).css('left',lft);jQuery('#spinner-'+mocc).html('<img id="spinnerimg-'+mocc+'" src="'+wppaImageDirectory+'loading.gif" style="box-shadow: none" />');}
function _wppaUnloadSpinner(mocc){jQuery('#spinner-'+mocc).html('');}
function _wppaCheckRewind(mocc){var n_images;var n_diff;var l_substrate;var x_marg;if(!document.getElementById('wppa-filmstrip-'+mocc))return;n_diff=Math.abs(_wppaCurIdx[mocc]-_wppaNxtIdx[mocc]);if(n_diff<=wppaFilmPageSize[mocc])return;var n_images=wppaFilmStripLength[mocc]/wppaThumbnailPitch[mocc];if(n_diff>=((n_images+1)/2)){l_substrate=wppaThumbnailPitch[mocc]*_wppaSlides[mocc].length;if(wppaFilmShowGlue)l_substrate+=(2+2*wppaFilmStripMargin[mocc]);x_marg=parseInt(jQuery('#wppa-filmstrip-'+mocc).css('margin-left'));if(_wppaNxtIdx[mocc]>_wppaCurIdx[mocc]){x_marg-=l_substrate;}
else{x_marg+=l_substrate;}
jQuery('#wppa-filmstrip-'+mocc).css('margin-left',x_marg+'px');}}
function _wppaSetRatingDisplay(mocc){var idx,avg,tmp,cnt,dsc,myr,dsctxt;if(!document.getElementById('wppa-rating-'+mocc))return;avg=_wppaAvg[mocc][_wppaCurIdx[mocc]];if(typeof(avg)=='undefined')return;tmp=avg.split('|');avg=tmp[0];cnt=tmp[1];dsc=_wppaDisc[mocc][_wppaCurIdx[mocc]];myr=_wppaMyr[mocc][_wppaCurIdx[mocc]];wppaConsoleLog('avg='+avg+' cnt='+cnt+' dsc='+dsc+' myr='+myr);if(wppaRatingDisplayType=='graphic'){_wppaSetRd(mocc,avg,'#wppa-avg-');_wppaSetRd(mocc,myr,'#wppa-rate-');if(myr==0){jQuery('#wppa-dislike-'+mocc).css('display','inline');jQuery('#wppa-dislike-imgdiv-'+mocc).css('display','inline');if(document.getElementById('wppa-dislike-'+mocc))jQuery('#wppa-filler-'+mocc).css('display','none');jQuery('#wppa-dislike-'+mocc).stop().fadeTo(100,wppaStarOpacity);}
else{jQuery('#wppa-dislike-'+mocc).css('display','none');jQuery('#wppa-dislike-imgdiv-'+mocc).css('display','none');jQuery('#wppa-filler-'+mocc).css('display','inline');jQuery('#wppa-filler-'+mocc).stop().fadeTo(100,wppaStarOpacity);jQuery('#wppa-filler-'+mocc).attr('title',dsc);}}
else{jQuery('#wppa-numrate-avg-'+mocc).html(avg+' ( '+cnt+' ) ');if(wppaRatingOnce&&myr>0){jQuery('#wppa-numrate-mine-'+mocc).html(myr);}
else if(myr<0){jQuery('#wppa-numrate-mine-'+mocc).html(' dislike');}
else{var htm='';for(i=1;i<=wppaRatingMax;i++){if(myr==i){htm+='<span style="cursor:pointer; font-weight:bold;" onclick="_wppaRateIt( '+mocc+', '+i+' )">&nbsp;'+i+'&nbsp;</span>';}
else{if(myr>(i-1)&&myr<i)htm+='&nbsp;( '+myr+' )&nbsp;';htm+='<span style="cursor:pointer;" onclick="_wppaRateIt( '+mocc+', '+i+' )" onmouseover="this.style.fontWeight=\'bold\'" onmouseout="this.style.fontWeight=\'normal\'" >&nbsp;'+i+'&nbsp;</span>';}}
jQuery('#wppa-numrate-mine-'+mocc).html(htm);}
if(myr==0){jQuery('#wppa-dislike-'+mocc).css('display','inline');jQuery('#wppa-dislike-imgdiv-'+mocc).css('display','inline');jQuery('#wppa-filler-'+mocc).css('display','none');jQuery('#wppa-dislike-'+mocc).stop().fadeTo(100,wppaStarOpacity);}
else{jQuery('#wppa-dislike-'+mocc).css('display','none');jQuery('#wppa-dislike-imgdiv-'+mocc).css('display','none');jQuery('#wppa-filler-'+mocc).css('display','inline');}
jQuery('#wppa-discount-'+mocc).html(dsc+'&bull; ');jQuery('#wppa-filler-'+mocc).css('display','none');}
if(myr==0){jQuery('#wppa-vote-button-'+mocc).val(wppaVoteForMe);}
else{jQuery('#wppa-vote-button-'+mocc).val(wppaVotedForMe);}
jQuery('#wppa-vote-count-'+mocc).html(cnt);}
function wppaGetDislikeText(dsc,myr,incmine){return dsc;}
function _wppaSetRd(mocc,avg,where){var idx1=parseInt(avg);var idx2=idx1+1;var frac=avg-idx1;var opac=wppaStarOpacity+frac*(1.0-wppaStarOpacity);var ilow=1;var ihigh=wppaRatingMax;for(idx=ilow;idx<=ihigh;idx++){if(where=='#wppa-rate-'){jQuery(where+mocc+'-'+idx).attr('src',wppaImageDirectory+'star.png');}
if(idx<=idx1){jQuery(where+mocc+'-'+idx).stop().fadeTo(100,1.0);}
else if(idx==idx2){jQuery(where+mocc+'-'+idx).stop().fadeTo(100,opac);}
else{jQuery(where+mocc+'-'+idx).stop().fadeTo(100,wppaStarOpacity);}}}
function _wppaFollowMe(mocc,idx){if(_wppaSSRuns[mocc])return;if(_wppaMyr[mocc][_wppaCurIdx[mocc]]!=0&&wppaRatingOnce)return;if(_wppaMyr[mocc][_wppaCurIdx[mocc]]<0)return;if(_wppaVoteInProgress)return;_wppaSetRd(mocc,idx,'#wppa-rate-');}
function _wppaLeaveMe(mocc,idx){if(_wppaSSRuns[mocc])return;if(_wppaMyr[mocc][_wppaCurIdx[mocc]]!=0&&wppaRatingOnce)return;if(_wppaMyr[mocc][_wppaCurIdx[mocc]]<0)return;if(_wppaVoteInProgress)return;_wppaSetRd(mocc,_wppaMyr[mocc][_wppaCurIdx[mocc]],'#wppa-rate-');}
function _wppaValidateComment(mocc){var photoid=_wppaId[mocc][_wppaCurIdx[mocc]];var name=jQuery('#wppa-comname-'+mocc).val();if(name.length<1){alert(wppaPleaseName);return false;}
if(wppaEmailRequired){var email=jQuery('#wppa-comemail-'+mocc).val();var atpos=email.indexOf("@");var dotpos=email.lastIndexOf(".");if(atpos<1||dotpos<atpos+2||dotpos+2>=email.length){alert(wppaPleaseEmail);return false;}}
var text=jQuery('#wppa-comment-'+mocc).val();if(text.length<1){alert(wppaPleaseComment);return false;}
return true;}
function _wppaGo(url){document.location=url;}
function _wppaBbb(mocc,where,act){if(_wppaSSRuns[mocc])return;var elm='#bbb-'+mocc+'-'+where;switch(act){case'show':if(where=='l')jQuery(elm).attr('title',wppaPreviousPhoto);if(where=='r')jQuery(elm).attr('title',wppaNextPhoto);jQuery('.bbb-'+mocc).css('cursor','pointer');break;case'hide':jQuery('.bbb-'+mocc).removeAttr('title');jQuery('.bbb-'+mocc).css('cursor','default');break;case'click':if(where=='l')wppaPrev(mocc);if(where=='r')wppaNext(mocc);break;default:alert('Unimplemented instruction: '+act+' on: '+elm);}}
function _wppaUbb(mocc,where,act){var elm='#ubb-'+mocc+'-'+where;switch(act){case'show':if(where=='l')jQuery(elm).attr('title',wppaPreviousPhoto);if(where=='r')jQuery(elm).attr('title',wppaNextPhoto);jQuery('.ubb-'+mocc).css('cursor','pointer');jQuery('.ubb-'+mocc).fadeTo(200,0.8);break;case'hide':jQuery('.ubb-'+mocc).removeAttr('title');jQuery('.ubb-'+mocc).css('cursor','default');jQuery('.ubb-'+mocc).fadeTo(1000,0);break;case'click':var idx;if(where=='l'){idx=_wppaCurIdx[mocc]-1;if(idx<0){if(!wppaSlideWrap){return;}
idx=_wppaSlides[mocc].length-1;}}
if(where=='r'){idx=_wppaCurIdx[mocc]+1;if(idx==_wppaSlides[mocc].length){if(!wppaSlideWrap){return;}
idx=0;}}
wppaGotoKeepState(mocc,idx);break;default:alert('Unimplemented instruction: '+act+' on: '+elm);}}
function wppaOpenComments(mocc){if(_wppaSSRuns[mocc])_wppaStop(mocc);jQuery('#wppa-comtable-wrap-'+mocc).css('display','block');jQuery('#wppa-comform-wrap-'+mocc).css('display','block');jQuery('#wppa-comfooter-wrap-'+mocc).css('display','none');wppaColWidth[mocc]=0;setTimeout('_wppaDoAutocol( '+mocc+' )',100);}
function _wppaShowMetaData(mocc,key){if(!_wppaSSRuns[mocc]&&!__wppaOverruleRun){if(key=='show'){if(wppaAutoOpenComments){jQuery('#wppa-comtable-wrap-'+mocc).css('display','block');jQuery('#wppa-comform-wrap-'+mocc).css('display','block');jQuery('#wppa-comfooter-wrap-'+mocc).css('display','none');}
if(wppaSlideWrap||(_wppaCurIdx[mocc]!=0))
jQuery('.wppa-prev-'+mocc).css('visibility','visible');if(wppaSlideWrap||(_wppaCurIdx[mocc]!=(_wppaSlides[mocc].length-1)))
jQuery('.wppa-next-'+mocc).css('visibility','visible');if(wppaShareHideWhenRunning){jQuery('#wppa-share-'+mocc).css('display','');}
wppaFotomotoToolbar(mocc,_wppaHiresUrl[mocc][_wppaCurIdx[mocc]]);}
else{jQuery('#wppa-comtable-wrap-'+mocc).css('display','none');jQuery('#wppa-comform-wrap-'+mocc).css('display','none');jQuery('#wppa-comfooter-wrap-'+mocc).css('display','block');wppaFotomotoHide(mocc);}}
else{if(key=='show'){if(!wppaFotomotoHideWhenRunning)wppaFotomotoToolbar(mocc,_wppaHiresUrl[mocc][_wppaCurIdx[mocc]]);}
else{if(wppaShareHideWhenRunning){jQuery('#wppa-share-'+mocc).css('display','none');}}}
if(key=='show'){jQuery("#imagedesc-"+mocc).css('visibility','visible');jQuery("#imagetitle-"+mocc).css('visibility','visible');jQuery("#counter-"+mocc).css('visibility','visible');jQuery("#iptccontent-"+mocc).css('visibility','visible');jQuery("#exifcontent-"+mocc).css('visibility','visible');}
else{jQuery("#counter-"+mocc).css('visibility','hidden');jQuery('.wppa-prev-'+mocc).css('visibility','hidden');jQuery('.wppa-next-'+mocc).css('visibility','hidden');jQuery("#iptccontent-"+mocc).css('visibility','hidden');jQuery("#exifcontent-"+mocc).css('visibility','hidden');}}
wppaConsoleLog('wppa-slideshow.js version '+wppaJsSlideshowVersion+' loaded.','force');