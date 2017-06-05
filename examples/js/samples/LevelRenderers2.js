myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["LevelRenderers2"]="http://www.flexicious.com/resources/Ultimate/docs/LevelRenderers2.htm";

/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    "use strict";
    var NextLevelRenderer2, uiUtil = flexiciousNmsp.UIUtils, flxConstants = flexiciousNmsp.Constants;
    /**
     * A NextLevelRenderer2 is a custom item renderer, that defines how to use custom cells with logic that you can control
     * @constructor
     * @namespace com.flexicious.controls
     * @extends UIComponent
     */
    NextLevelRenderer2=function(){
        //make sure to call constructor
        flexiciousNmsp.UIComponent.apply(this);//second parameter is the tag name for the dom element.
        this.setHeight(50);
        /**
         * This is a getter/setter for the data property. When the cell is created, it belongs to a row
         * The data property points to the item in the grids dataprovider that is being rendered by this cell.
         * @type {*}
         */
        this.data=null;
    };
    myCompanyNameSpace.LevelRenderers2_NextLevelRenderer2 = NextLevelRenderer2; //add to name space
    NextLevelRenderer2.prototype = new flexiciousNmsp.UIComponent(); //setup hierarchy
    NextLevelRenderer2.prototype.typeName = NextLevelRenderer2.typeName = 'NextLevelRenderer2';//for quick inspection
    NextLevelRenderer2.prototype.getClassNames=function(){
        return ["NextLevelRenderer2","UIComponent"]; //this is a mechanism to replicate the "is" and "as" keywords of most other OO programming languages
    };

    /**
     * This is important, because the grid looks for a "setData" method on the renderer.
     * In here, we intercept the call to setData, and inject our logic to render the html for the renderer.
     * @param val
     */
    NextLevelRenderer2.prototype.setData=function(val){
        flexiciousNmsp.UIComponent.prototype.setData.apply(this,[val]);

        var html = "<fieldset><legend>Orgainzation Information</legend><table style='width:100%'><tr>" +
            "<td style='border:solid 1px #000000'>Organization Name "+val.legalName+" </td>" +
            "<td style='border:solid 1px #000000'>Sales Contact "+val.salesContact.getDisplayName()+" </td>" +
            "<td style='border:solid 1px #000000'>Sales Contact Phone:"+val.salesContact.telephone+" </td>" +
            "</tr><tr>" +
            "<td style='border:solid 1px #000000''>Annual Revenue:"+flexiciousNmsp.UIUtils.formatCurrency(val.annualRevenue)+" </td>" +
            "<td style='border:solid 1px #000000''>EPS:"+flexiciousNmsp.UIUtils.formatCurrency(val.earningsPerShare)+" </td>" +
            "<td style='border:solid 1px #000000''>Last Stock Price:"+flexiciousNmsp.UIUtils.formatCurrency(val.lastStockPrice)+" </td>" +
            "</tr><tr>" +
            "<td style='border:solid 1px #000000''>Employees:"+val.numEmployees+" </td>" +
            "<td colspan='2' style='border:solid 1px #000000''>Address:"+val.headquarterAddress.toDisplayString()+" </td>" +
            "</tr></table></fieldset>";

        this.setInnerHTML(html);
    }
}(window));

myCompanyNameSpace.levelRenderers2_creationCompleteHandler =function (evt){
    grid.validateNow();
    grid.expandAll();
}
myCompanyNameSpace.SAMPLE_CONFIGS["LevelRenderers2"]='<grid id="grid" enablePrint="true"  enableDrillDown="true"'+
    '									 enablePreferencePersistence="true"'+
    '									 enableExport="true" enableCopy="true"'+
    '									 preferencePersistenceKey="levelRenderers2" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.levelRenderers2_creationCompleteHandler">'+
    '			<level enableFilters="true" enablePaging="true" rendererHorizontalGridLines="true"  ' +
    '           rendererVerticalGridLines="true" pageSize="20" childrenField="deals" enableFooters="true" selectedKeyField="id" ' +
    '           nextLevelRenderer="myCompanyNameSpace.LevelRenderers2_NextLevelRenderer2" levelRendererHeight="120">'+
    '				<columns>'+
    '					<column type="checkbox"  />'+
    '					<column enableCellClickRowSelect="false" columnWidthMode="fitToContent" selectable="true" dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '					<column truncateToFit="true"  enableCellClickRowSelect="false" columnWidthMode="fitToContent"  selectable="true" dataField="legalName" headerText="Legal Name"/>'+
    '					<column dataField="headquarterAddress.line1" headerText="Address Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '					<column dataField="headquarterAddress.line2" headerText="Address Line 2"/>'+
    '					<column dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '				</columns>'+
    '		</level>'+
    '	</grid>';
