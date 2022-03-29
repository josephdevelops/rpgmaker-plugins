//=============================================================================
// Joseph Develops Plugins - Remove Outlines
// JOE_RemoveOutlines.js
//=============================================================================

//=============================================================================
 /*:
 * @plugindesc v1.1
 * @author Joseph 'Develops' Abraham
 *
 *
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This super simple plugin will remove outlines from your RPG Maker MV game.
 * It's not perfect many prefer the look to the vanilla font look. Try it!
 *
 * You are welcome to use this code for free or commercial games if you credit
 * me and let me know.
 *
 * @plugindesc This plugin removes outlines for RPG Maker MV.
 * Contact me via email: josephdevelops@gmail.com
 */


//BATTLE HUD STUFF

(function() {



Window_BattleActor.prototype.lineHeight = function() {
    return 45;
};



Window_BattleActor.prototype.drawAllItems = function() {
    return 'void';
};


//WINDOW BASE FONT OUTLINES

'use strict';

var _Window_Base_ResetFontSettings = Window_Base.prototype.resetFontSettings;
Window_Base.prototype.resetFontSettings = function() {
    _Window_Base_ResetFontSettings.call( this );
    this.contents.outlineWidth = 0;


};




})();
