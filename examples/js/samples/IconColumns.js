myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["IconColumns"]="http://www.flexicious.com/resources/Ultimate/docs/IconColumns.htm";


//myCompanyNameSpace.iconColumns_iconTooltipRenderer = iconTooltipRenderer

myCompanyNameSpace.SAMPLE_CONFIGS["IconColumns"]='<grid  id="grid"  enableFooters="true" enableFilters="true">'+
    '				<level selectedKeyField="id">'+
    '					<columns>'+
    '						<column type="checkbox" id="cbCol" />'+
    '						<column dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '						<column dataField="legalName" headerText="Legal Name"/>'+
    '						<column dataField="annualRevenue" headerText="Annual Revenue" textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter"  labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction" enableIcon="true" icon="'+myCompanyNameSpace.IMAGE_PATH +'/info.gif"  iconToolTip="This is a static tooltip" paddingRight="20" iconRight="5" iconHandCursor="true" filterControl="TextInput" />'+
    '						<column dataField="numEmployees" headerText="Num Employees" textAlign="right"  footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2"  footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction" enableIcon="true" icon="'+myCompanyNameSpace.IMAGE_PATH +'/info.gif" iconToolTipFunction="myCompanyNameSpace.IconFunctions_dynamicTooltipFunction" paddingRight="20"  iconRight="5" iconHandCursor="true" showIconOnRowHover="true" filterControl="TextInput" />'+
    '						<column iconTooltipRenderer="myCompanyNameSpace.IconTooltipRenderer_IconTooltipRenderer" dataField="earningsPerShare" headerText="EPS" textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"  enableIcon="true" iconHandCursor="true" showIconOnCellHover="true" icon="'+myCompanyNameSpace.IMAGE_PATH +'/search.png" iconLeft="5" filterControl="TextInput">' +
    '						</column>'+
    '						<column dataField="lastStockPrice" headerText="Stock Price" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter"  labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction" enableIcon="true" iconFunction="myCompanyNameSpace.IconFunctions_dynamicIconFunction" paddingRight="20"  iconRight="5" iconHandCursor="true" />'+
    '						<column hideText="true"  enableIcon="true" icon="'+myCompanyNameSpace.IMAGE_PATH +'/info.gif" iconToolTip="This column shows only an icon, no text." iconHandCursor="true"  columnWidthMode="fixed" width="30" iconLeft="10" />'+
    '					</columns>'+
    '				</level>'+
    '	</grid>';


/**
 *
 * @param cell
 * @param state
 * @return {*}
 */
myCompanyNameSpace.IconFunctions_dynamicIconFunction=function(cell,state){
    if(typeof state=="undefined")state='';

    if(cell.getRowInfo().getIsDataRow()){
        return myCompanyNameSpace.IMAGE_PATH + (cell.getRowInfo().rowPositionInfo.getRowIndex()%2==0?'/assets/images/upIcon.png':'/assets/images/downIcon.png');
    }
    return null;

};

/**
 *
 * @param cell
 * @return {String}
 */
myCompanyNameSpace.IconFunctions_dynamicTooltipFunction=function(cell){

    return "This is a dynamic tooltip for " + cell.getRowInfo().getData().legalName;

};
/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    "use strict";
    var IconTooltipRenderer, uiUtil = flexiciousNmsp.UIUtils, flxConstants = flexiciousNmsp.Constants;
    /**
     * A IconTooltipRenderer is a custom item renderer, that defines how to use custom cells with logic that you can control
     * @constructor
     * @namespace com.flexicious.controls
     * @extends UIComponent
     */
    IconTooltipRenderer=function(){
        //make sure to call constructor
        flexiciousNmsp.UIComponent.apply(this,["div"]);//second parameter is the tag name for the dom element.
        /**
         * This is a getter/setter for the data property. When the cell is created, it belongs to a row
         * The data property points to the item in the grids dataprovider that is being rendered by this cell.
         * @type {*}
         */
        this.data=null;
        this.grid=null;//this gets you a pointer to the grid.
       // this.domElement.style.position="absolute";
        this.setHeight(350);
        this.setWidth(270);
        this.addEventListener(this,flxConstants.EVENT_CLICK,this.onPopupClick);
    };
    myCompanyNameSpace.IconTooltipRenderer_IconTooltipRenderer = IconTooltipRenderer; //add to name space
    IconTooltipRenderer.prototype = new flexiciousNmsp.UIComponent(); //setup hierarchy
    IconTooltipRenderer.prototype.typeName = IconTooltipRenderer.typeName = 'IconTooltipRenderer';//for quick inspection
    IconTooltipRenderer.prototype.getClassNames=function(){
        return ["IconTooltipRenderer","UIComponent"]; //this is a mechanism to replicate the "is" and "as" keywords of most other OO programming languages
    };

    /**
     * This is important, because the grid looks for a "setData" method on the renderer.
     * In here, we intercept the call to setData, and inject our logic to populate the text input.
     * @param val
     */
    IconTooltipRenderer.prototype.setData=function(val){
        flexiciousNmsp.UIComponent.prototype.setData.apply(this,[val]);

        var html='<div class="flexiciousGrid" style="alpha:0.9;background-color:#FFFF99;border:solid 1px black; overflow:hidden;padding: 2px;">'+
      ' <bold>This is a custom interactive tooltip</bold><br/>'+
      ' Note that you can reference the row data like this : '+val.legalName+'. You can put interactive content within this popup, for example , you can click the Edit Reason link below (to potentially launch another window). The popup will stay in place unless move the mouse out of the popup, or click the close popup button below. "'+
      '	<div style="float:right;margin:10px ">'+
            '											<a class=" button">Edit Reason</a>'+
            '											<a class=" button">Close Popup</a>'+
            '										</div>	'+
      '									</div>';

        this.domElement.innerHTML=html;

    };
    IconTooltipRenderer.prototype.onPopupClick=function(evt){
        var t=evt.target;
        if(evt.triggerEvent.target.text=="Close Popup"){
            this.grid.hideTooltip();
        }
    };
}(window));