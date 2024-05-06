(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"shadow":false,"gap":10,"definitions": [{"thumbnailUrl":"media/panorama_47290011_4DD6_A4A8_41CB_107229661705_t.jpg","partial":false,"label":trans('panorama_47290011_4DD6_A4A8_41CB_107229661705.label'),"hfovMin":"150%","hfovMax":130,"class":"Panorama","frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_47290011_4DD6_A4A8_41CB_107229661705_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_47290011_4DD6_A4A8_41CB_107229661705_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_47290011_4DD6_A4A8_41CB_107229661705_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_47290011_4DD6_A4A8_41CB_107229661705_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"hfov":360,"pitch":0,"data":{"label":"360 QR code"},"id":"panorama_47290011_4DD6_A4A8_41CB_107229661705"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_47290011_4DD6_A4A8_41CB_107229661705_camera","media":"this.panorama_47290011_4DD6_A4A8_41CB_107229661705","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"shadow":false,"borderRadius":0,"width":80,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","paddingTop":0,"propagateClick":false,"backgroundOpacity":0,"horizontalAlign":"left","paddingBottom":0,"id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","paddingRight":0,"paddingLeft":0,"top":21.17,"verticalAlign":"top","toolTipHorizontalAlign":"center","height":85,"maxHeight":80,"class":"Image","left":26.3,"maxWidth":80,"minHeight":80,"data":{"name":"Image4995"},"minWidth":80,"borderSize":0,"scaleMode":"fill"},{"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","data":{"name":"Main Viewer"},"borderRadius":0,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeadOpacity":1,"playbackBarBorderColor":"#AAAAAA","playbackBarHeadShadowHorizontalLength":0,"subtitlesBackgroundColor":"#000000","playbackBarBorderSize":2,"playbackBarBorderRadius":4,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"shadow":false,"playbackBarHeight":20,"playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"paddingRight":0,"progressBackgroundColorRatios":[0,1],"paddingLeft":0,"toolTipBackgroundColor":"#999999","subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipShadowVerticalLength":0,"toolTipFontSize":12,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#666666","progressOpacity":1,"progressRight":10,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"toolTipHorizontalAlign":"center","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":10,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#222222","#444444"],"subtitlesPaddingLeft":5,"progressBackgroundOpacity":1,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#AAAAAA","subtitlesPaddingBottom":5,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"toolTipFontWeight":"normal","progressBarBackgroundColor":["#222222","#444444"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#EEEEEE","#CCCCCC"],"class":"ViewerArea","progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"progressBottom":1,"playbackBarHeadHeight":30,"minHeight":50,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF0000","playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"progressHeight":20,"borderSize":0,"toolTipPaddingRight":6,"progressBorderSize":2,"minWidth":100,"subtitlesFontFamily":"Arial","subtitlesOpacity":1,"subtitlesBorderSize":0,"subtitlesBorderColor":"#FFFFFF","toolTipShadowHorizontalLength":0,"subtitlesTextShadowBlurRadius":0,"toolTipTextShadowBlurRadius":3,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":4,"transitionDuration":500,"progressBorderRadius":4,"subtitlesFontWeight":"normal","toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","top":0,"playbackBarProgressBackgroundColorRatios":[0,1],"bottom":0,"surfaceReticleColor":"#FFFFFF","progressLeft":10,"surfaceReticleOpacity":0.6,"subtitlesTextDecoration":"none","subtitlesTextShadowVerticalLength":1,"toolTipShadowColor":"#333333","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"vrPointerSelectionTime":2000,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":0.5,"subtitlesGap":0,"displayTooltipInSurfaceSelection":true,"left":0,"playbackBarHeadShadowVerticalLength":0,"vrPointerColor":"#FFFFFF","right":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"playbackBarRight":0},{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_47290011_4DD6_A4A8_41CB_107229661705_camera"},{"displayPlaybackBar":true,"surfaceSelectionEnabled":false,"zoomEnabled":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"}],"width":"100%","borderRadius":0,"mediaActivationMode":"window","overflow":"hidden","paddingTop":0,"propagateClick":false,"backgroundOpacity":1,"scrollBarMargin":2,"paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"scripts":{"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizFinish":TDV.Tour.Script.quizFinish,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"playAudioList":TDV.Tour.Script.playAudioList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getKey":TDV.Tour.Script.getKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showPopupImage":TDV.Tour.Script.showPopupImage,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"openLink":TDV.Tour.Script.openLink,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"clone":TDV.Tour.Script.clone,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"init":TDV.Tour.Script.init,"getOverlays":TDV.Tour.Script.getOverlays,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"initQuiz":TDV.Tour.Script.initQuiz,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMainViewer":TDV.Tour.Script.getMainViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizShowScore":TDV.Tour.Script.quizShowScore,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"registerKey":TDV.Tour.Script.registerKey,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"downloadFile":TDV.Tour.Script.downloadFile,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"historyGoBack":TDV.Tour.Script.historyGoBack,"mixObject":TDV.Tour.Script.mixObject,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"shareSocial":TDV.Tour.Script.shareSocial,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPixels":TDV.Tour.Script.getPixels,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getComponentByName":TDV.Tour.Script.getComponentByName,"setLocale":TDV.Tour.Script.setLocale,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"cloneCamera":TDV.Tour.Script.cloneCamera,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setValue":TDV.Tour.Script.setValue,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"existsKey":TDV.Tour.Script.existsKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"unregisterKey":TDV.Tour.Script.unregisterKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"resumePlayers":TDV.Tour.Script.resumePlayers,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"translate":TDV.Tour.Script.translate,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizStart":TDV.Tour.Script.quizStart},"paddingRight":0,"paddingLeft":0,"horizontalAlign":"left","vrPolyfillScale":1,"verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"defaultVRPointer":"gaze","toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#000000"],"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","children":["this.MainViewer","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C"],"downloadEnabled":false,"creationPolicy":"inAdvance","backgroundPreloadEnabled":true,"start":"this.init()","class":"Player","minHeight":20,"data":{"defaultLocale":"fr","name":"Player28156","initialScale":0.65,"locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1}},"backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Mon May 6 2024