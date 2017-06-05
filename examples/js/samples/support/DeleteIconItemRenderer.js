/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    "use strict";
    var DeleteIconRenderer, uiUtil = flexiciousNmsp.UIUtils, flxConstants = flexiciousNmsp.Constants;
    /**
     * A DeleteIconRenderer is a custom item renderer, that defines how to use custom cells with logic that you can control
     * @constructor
     * @namespace com.flexicious.controls
     * @extends UIComponent
     */
    DeleteIconRenderer=function(){
        //make sure to call constructor
        flexiciousNmsp.UIComponent.apply(this,["img"]);
        /**
         * This is a getter/setter for the data property. When the cell is created, it belongs to a row
         * The data property points to the item in the grids dataprovider that is being rendered by this cell.
         * @type {*}
         */
        this.data=null;
        //the add event listener will basically proxy all DomEvents to your code to handle.
        this.addEventListener(this,flxConstants.EVENT_MOUSE_CLICK,this.onClick);
    };
    myCompanyNameSpace.DeleteIconRenderer = DeleteIconRenderer; //add to name space
    DeleteIconRenderer.prototype = new flexiciousNmsp.UIComponent(); //setup hierarchy
    DeleteIconRenderer.prototype.typeName = DeleteIconRenderer.typeName = 'DeleteIconRenderer';//for quick inspection
    DeleteIconRenderer.prototype.getClassNames=function(){
        return ["DeleteIconRenderer","UIComponent"];
    };

    /**
     * This is a getter/setter for the data property. When the cell is created, it belongs to a row
     * The data property points to the item in the grids dataprovider that is being rendered by this cell.
     * @param val
     */
    DeleteIconRenderer.prototype.getData=function(){
        return this.data;
    };
    /**
     * This is important, because the grid looks for a "setData" method on the renderer.
     * @param val
     */
    DeleteIconRenderer.prototype.setData=function(val){
        this.data=val;
    }
    /**
     * UpdateDisplayList is a function that flexicious will call for any UIComponent. The grid will take care
     * of sizing the cell (based upon the column width,etc)
     * @param unscaledWidth
     * @param unscaledHeight
     */
    DeleteIconRenderer.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
        //make sure to call this, so the cell is no longer marked as dirty.
        flexiciousNmsp.UIComponent.prototype.updateDisplayList.apply(this, [unscaledWidth, unscaledHeight]);

        //now we can set our inner HTML
        //we are using a built in image, but you can use any image.
        this.setInnerHTML("<img src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/delete.png' alt='Delete Record' title='Delete Record'>");
    };
    /**
     * This event is dispatched when the user clicks on the icon. The event is actually a flexicious event, and has a trigger event
     * property that points back to the original domEvent.
     * @param event
     */
    DeleteIconRenderer.prototype.onClick=function(evt){
        if(window.confirm("Are you sure you wish to delete record" + this.data.id)){
            window.alert('Do your delete here.');
        }
    }
}(window));