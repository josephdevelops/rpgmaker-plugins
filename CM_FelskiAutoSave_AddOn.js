//=============================================================================
// Felski Autosave Add-On
// You may not use this plugin in your project.
// The purpose of this plugin being public is for developer reference.
//=============================================================================

//=============================================================================
/*:
* @plugindesc v1.1
* @author Joseph Abraham, Codemora
*
* @help
* ============================================================================
* Introduction
* ============================================================================
*
* This plugin is for use with Felski's Autosave plugin. Place this plugin under
* Felski's plugin.
*
* This plugin allows the developer to exclude certain maps for autosave.
*
* @plugindesc This plugin removes outlines for RPG Maker MV.
* Contact me via email: josephdevelops@gmail.com
*
* @param Save Settings
* @param Excluded Maps List
* @parent Save Settings
* @desc List of Maps to exclude when using Felski Autosave feature, separate IDs with commas.
* @type string
* @default
*/


* @param Save Settings

* @param Excluded Maps List
* @parent Save Settings
* @desc List of Maps to exclude when using Felski Autosave feature, separate IDs with commas
* @type string
* @default
*/

var CM = CM || {};

var parameters = PluginManager.parameters('CM_FelskiAutoSave_AddOn');

CM.ExcludedMaps = String(parameters['Excluded Maps List']);



	CM.GetExcludedMaps = function() {
		var list = CM.ExcludedMaps.split(",");
		var maps = [];
		list.forEach(function(map) {
			var mapID = parseInt(map);
			if (mapID > 0)
				maps.push(mapID);
		});
		return maps;
	}

	var autoSave = Game_System.prototype.autoSaveGame;
	Game_System.prototype.autoSaveGame = function() {

		if (CM.GetExcludedMaps().includes($gameMap.mapId()))
			return;
		else
			autoSave.call(this);
	}
