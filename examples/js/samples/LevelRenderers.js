myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["LevelRenderers"]="http://www.flexicious.com/resources/Ultimate/docs/LevelRenderers.htm";

/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    "use strict";
    var NextLevelRenderer, uiUtil = flexiciousNmsp.UIUtils, flxConstants = flexiciousNmsp.Constants;
    /**
     * A NextLevelRenderer is a custom item renderer, that defines how to use custom cells with logic that you can control
     * @constructor
     * @namespace com.flexicious.controls
     * @extends UIComponent
     */
    NextLevelRenderer=function(){
        //make sure to call super constructor
        flexiciousNmsp.UIComponent.apply(this);//second parameter is the tag name for the dom element.
        this.setHeight(100);
        /**
         * This is a getter/setter for the data property. When the cell is created, it belongs to a row
         * The data property points to the item in the grids dataprovider that is being rendered by this cell.
         * @type {*}
         */
        this.data=null;
    };
    myCompanyNameSpace.LevelRenderers_NextLevelRenderer = NextLevelRenderer; //add to name space - so we can refer in xml below
    NextLevelRenderer.prototype = new flexiciousNmsp.UIComponent(); //setup hierarchy
    NextLevelRenderer.prototype.typeName = NextLevelRenderer.typeName = 'NextLevelRenderer';//for quick inspection
    NextLevelRenderer.prototype.getClassNames=function(){
        return ["NextLevelRenderer","UIComponent"]; //this is a mechanism to replicate the "is" and "as" keywords of most other OO programming languages
    };

    /**
     * This is important, because the grid looks for a "setData" method on the renderer.
     * In here, we intercept the call to setData, and inject our logic to populate the text input.
     * @param val
     */
    NextLevelRenderer.prototype.setData=function(val){
        flexiciousNmsp.UIComponent.prototype.setData.apply(this,[val]);

        var html = "<fieldset><legend>Invoice Information</legend><table style='width:100%'><tr>" +
            "<td style='border:solid 1px #000000'>Invoice Number "+val.id+" </td>" +
            "<td style='border:solid 1px #000000'>Invoice Date "+flexiciousNmsp.UIUtils.formatDate(val.invoiceDate)+" </td>" +
            "<td style='border:solid 1px #000000'>Due Date:"+flexiciousNmsp.UIUtils.formatDate(val.dueDate)+" </td>" +
            "</tr><tr>" +
            "<td style='border:solid 1px #000000''>Deal Amount:"+flexiciousNmsp.UIUtils.formatCurrency(val.deal.getDealAmount())+" </td>" +
            "<td style='border:solid 1px #000000''>Deal Description:"+val.deal.dealDescription+" </td>" +
            "<td style='border:solid 1px #000000''>Deal Status:"+val.deal.dealStatus.name+" </td>" +
            "</tr><tr>" +
            "<td style='border:solid 1px #000000''>Client Name:"+val.deal.customer.legalName+" </td>" +
            "<td colspan='2' style='border:solid 1px #000000''>Address:"+val.deal.customer.headquarterAddress.toDisplayString()+" </td>" +
            "</tr></table></fieldset>";

        this.setInnerHTML(html);
    }
}(window));


myCompanyNameSpace.levelRenderers_creationCompleteHandler =function (evt){
    grid.validateNow();
    grid.expandAll();
}

myCompanyNameSpace.SAMPLE_CONFIGS["LevelRenderers"]='<grid id="grid" enablePrint="true" '+
    '									 enablePreferencePersistence="true" enableDrillDown="true"'+
    '									 enableExport="true" enableCopy="true"'+
    '									 preferencePersistenceKey="levelRenderers" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.levelRenderers_creationCompleteHandler">'+
    '			<level enableFilters="true" enablePaging="true" pageSize="20" childrenField="deals" enableFooters="true" selectedKeyField="id" >'+
    '				<columns>'+
    '					<column type="checkbox"  />'+
    '					<column enableCellClickRowSelect="false" columnWidthMode="fitToContent"  selectable="true" dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '					<column truncateToFit="true" enableCellClickRowSelect="false"    selectable="true" dataField="legalName" headerText="Legal Name" width="150" columnWidthMode="fixed"/>'+
    '					<column dataField="headquarterAddress.line1" headerText="Address Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '					<column dataField="headquarterAddress.line2" headerText="Address Line 2"/>'+
    '					<column dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="annualRevenue" headerText="Annual Revenue" columnWidthMode="fitToContent"  textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" columnWidthModeFitToContentExcludeHeader="true" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="numEmployees" headerText="Num Employees" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2"  footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="earningsPerShare" headerText="EPS" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true" textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="lastStockPrice" headerText="Stock Price" columnWidthMode="fitToContent" columnWidthModeFitToContentExcludeHeader="true" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2"  footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level childrenField="invoices" enableFooters="true" selectedKeyField="id">'+
    '						<columns>'+
    '							<column type="checkbox" />'+
    '							<column editable="true" dataField="dealDescription" headerText="Deal Description" footerLabel="Count:" footerOperation="count" footerAlign="center"  />'+
    '							<column editable="true" dataField="dealAmount" headerText="Deal Amount" textAlign="right"  footerLabel="Total:" footerOperation="sum" footerAlign="right" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column dataField="dealDate" headerText="Deal Date" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '						</columns>'+
    '						<nextLevel>'+
    '							<level childrenField="lineItems" enableFooters="true" enablePaging="true" pageSize="5" selectedKeyField="id" ' +
    '                               nextLevelRenderer="myCompanyNameSpace.LevelRenderers_NextLevelRenderer" levelRendererHeight="120"> '+
    '								<columns>'+
    '									<column type="checkbox" />'+
    '									<column editable="true" dataField="id" headerText="Invoice Number" footerLabel="Count:" footerOperation="count" footerAlign="center"  />'+
    '									<column editable="true" dataField="invoiceAmount" headerText="Invoice Amount" textAlign="right" footerLabel="Total:" footerOperation="sum" footerAlign="right" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '									<column editable="true" dataField="invoiceStatus.name" headerText="Invoice Status" />'+
    '									<column dataField="invoiceDate" headerText="Invoice Date" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '									<column dataField="dueDate" headerText="Due Date"  labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '								</columns>'+
'							</level>'+
'						</nextLevel>'+
'					</level>'+
'				</nextLevel>'+
'		</level>'+
'	</grid>';
