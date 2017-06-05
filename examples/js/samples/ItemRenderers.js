myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["ItemRenderers"]="http://www.flexicious.com/resources/Ultimate/docs/ItemRenderers.htm";

/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    "use strict";
    var TextInputRenderer, uiUtil = flexiciousNmsp.UIUtils, flxConstants = flexiciousNmsp.Constants;
    /**
     * A TextInputRenderer is a custom item renderer, that defines how to use custom cells with logic that you can control
     * @constructor
     * @namespace com.flexicious.controls
     * @extends UIComponent
     */
    TextInputRenderer=function(){
        //make sure to call constructor
        flexiciousNmsp.UIComponent.apply(this,["input"]);//second parameter is the tag name for the dom element.
        /**
         * This is a getter/setter for the data property. When the cell is created, it belongs to a row
         * The data property points to the item in the grids dataprovider that is being rendered by this cell.
         * @type {*}
         */
        this.data=null;
        //the add event listener will basically proxy all DomEvents to your code to handle.
        this.addEventListener(this,flxConstants.EVENT_CHANGE,this.onChange);
    };
    myCompanyNameSpace.ItemRenderers_TextInputRenderer = TextInputRenderer; //add to name space
    TextInputRenderer.prototype = new flexiciousNmsp.UIComponent(); //setup hierarchy
    TextInputRenderer.prototype.typeName = TextInputRenderer.typeName = 'TextInputRenderer';//for quick inspection
    TextInputRenderer.prototype.getClassNames=function(){
        return ["TextInputRenderer","UIComponent"]; //this is a mechanism to replicate the "is" and "as" keywords of most other OO programming languages
    };

    TextInputRenderer.prototype.setWidth=function(w){
        flexiciousNmsp.UIComponent.prototype.setWidth.apply(this,[w]);
    }
    /**
     * This is important, because the grid looks for a "setData" method on the renderer.
     * In here, we intercept the call to setData, and inject our logic to populate the text input.
     * @param val
     */
    TextInputRenderer.prototype.setData=function(val){
        flexiciousNmsp.UIComponent.prototype.setData.apply(this,[val]);
        this.domElement.value=val.legalName;
    };
    /**
     * This event is dispatched when the user clicks on the icon. The event is actually a flexicious event, and has a trigger event
     * property that points back to the original domEvent.
     * @param event
     */
    TextInputRenderer.prototype.onChange=function(evt){
        this.data.legalName=this.domElement.value;//we use the dom element to wire back the value to the data object.
        var cell = this.parent; //this is an instance of FlexDataGridDataCell (For data rows)
        var column = cell.getColumn();//this is an instance of FlexDataGridColumn.
        column.level.grid.refreshCells();//this will re-render the cells.

    }
    //This sets  the inner html, and grid will try to set it. Since we are an input field, IE 8 will complain. So we ignore it since we dont need it anyway.
    TextInputRenderer.prototype.setText=function(val){

    };

}(window));
/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    "use strict";
    var CheckBoxRenderer, uiUtil = flexiciousNmsp.UIUtils, flxConstants = flexiciousNmsp.Constants;
    /**
     * A CheckBoxRenderer is a custom item renderer, that defines how to use custom cells with logic that you can control
     * @constructor
     * @namespace com.flexicious.controls
     * @extends UIComponent
     */
    CheckBoxRenderer=function(){
        //make sure to call constructor
        flexiciousNmsp.UIComponent.apply(this,["input"]);//second parameter is the tag name for the dom element.
        this.domElement.type = "checkbox"; //so our input element becomes a checkbox;

        /**
         * This is a getter/setter for the data property. When the cell is created, it belongs to a row
         * The data property points to the item in the grids dataprovider that is being rendered by this cell.
         * @type {*}
         */
        this.data=null;

        //the add evt listener will basically proxy all DomEvents to your code to handle.
        this.addEventListener(this,flxConstants.EVENT_CHANGE,this.onChange);
    };
    myCompanyNameSpace.ItemRenderers_CheckBoxRenderer = CheckBoxRenderer; //add to name space
    CheckBoxRenderer.prototype = new flexiciousNmsp.UIComponent(); //setup hierarchy
    CheckBoxRenderer.prototype.typeName = CheckBoxRenderer.typeName = 'CheckBoxRenderer';//for quick inspection
    CheckBoxRenderer.prototype.getClassNames=function(){
        return ["CheckBoxRenderer","UIComponent"]; //this is a mechanism to replicate the "is" and "as" keywords of most other OO programming languages
    };

    /**
     * This is important, because the grid looks for a "setData" method on the renderer.
     * In here, we intercept the call to setData, and inject our logic to populate the text input.
     * @param val
     */
    CheckBoxRenderer.prototype.setData=function(val){
        flexiciousNmsp.UIComponent.prototype.setData.apply(this,[val]);
        var cell = this.parent; //this is an instance of FlexDataGridDataCell (For data rows)
        var column = cell.getColumn();//this is an instance of FlexDataGridColumn.
        this.domElement.checked=this.data[column.getDataField()];
    };
    /**
     * This event is dispatched when the user clicks on the icon. The event is actually a flexicious event, and has a trigger event
     * property that points back to the original domEvent.
     * @param event
     */
    CheckBoxRenderer.prototype.onChange=function(evt){

        //in the renderer, you have the handle to the cell that the renderer belongs to, via the this.parent property that you inherit from flexiciousNmsp.UIComponent.

        var cell = this.parent; //this is an instance of FlexDataGridDataCell (For data rows)
        var column = cell.getColumn();//this is an instance of FlexDataGridColumn.

        this.data[column.getDataField()]=this.domElement.checked;//we use the dom element to wire back the value to the data object.
    };
    //This sets  the inner html, and grid will try to set it. Since we are an input field, IE 8 will complain. So we ignore it since we dont need it anyway.
    CheckBoxRenderer.prototype.setText=function(val){

    };
}(window));



/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    "use strict";
    var CheckBoxHeaderRenderer, uiUtil = flexiciousNmsp.UIUtils, flxConstants = flexiciousNmsp.Constants;
    /**
     * A CheckBoxHeaderRenderer is a custom item renderer, that you can use in a header cell. In this case, we customize the header
     * so that instead of showing a header label, we show a checkbox that switches the dataField flag on all items.
     * @constructor
     * @namespace com.flexicious.controls
     * @extends UIComponent
     */
    CheckBoxHeaderRenderer=function(){
        //make sure to call constructor
        flexiciousNmsp.UIComponent.apply(this,["input"]);//second parameter is the tag name for the dom element.
        this.domElement.type = "checkbox"; //so our input element becomes a checkbox;
        this.domElement.checked=true;
        //the add event listener will basically proxy all DomEvents to your code to handle.
        this.addEventListener(this,flxConstants.EVENT_CHANGE,this.onChange);
    };
    myCompanyNameSpace.ItemRenderers_CheckBoxHeaderRenderer = CheckBoxHeaderRenderer; //add to name space
    CheckBoxHeaderRenderer.prototype = new flexiciousNmsp.UIComponent(); //setup hierarchy
    CheckBoxHeaderRenderer.prototype.typeName = CheckBoxHeaderRenderer.typeName = 'CheckBoxHeaderRenderer';//for quick inspection
    CheckBoxHeaderRenderer.prototype.getClassNames=function(){
        return ["CheckBoxHeaderRenderer","UIComponent"]; //this is a mechanism to replicate the "is" and "as" keywords of most other OO programming languages
    };

    /**
     * This event is dispatched when the user clicks on the icon. The event is actually a flexicious event, and has a trigger event
     * property that points back to the original domEvent.
     * @param event
     */
    CheckBoxHeaderRenderer.prototype.onChange=function(event){

        //in the renderer, you have the handle to the cell that the renderer belongs to, via the this.parent property that you inherit from flexiciousNmsp.UIComponent.

        var cell = this.parent; //this is an instance of FlexDataGridDataCell (For data rows)
        var column = cell.getColumn();//this is an instance of FlexDataGridColumn.
        //var dp = cell.level.getGrid().getDataProvider();//this is a pointer back to the grid and its dataprovider.
        var dp=this.data;//for header cells, specifically in case of nested grids, the data property is a pointer back to the top level array, or the children array

        if(this.data.hasOwnProperty("deals")){
            //this means we are at a inner level checkbox header
            dp=this.data.deals;
        }
        //based upon which level this renderer appears.
        for (var i=0;i<dp.length;i++){
            dp[i][column.getDataField()] = this.domElement.checked;
        }

        column.level.grid.refreshCells();//this will re-render the cells.
    };
    //This sets  the inner html, and grid will try to set it. Since we are an input field, IE 8 will complain. So we ignore it since we dont need it anyway.
    CheckBoxHeaderRenderer.prototype.setText=function(val){

    };
}(window));

myCompanyNameSpace.ItemRenderers_getStockChartHTML=function(item,column){
    //here, we use the label function to come up with custom html for the cell and assocate this function to the column via the labelfunction property (See below)
    return "<img src="+item.chartUrl+">";
};

myCompanyNameSpace.ItemRenderers_getWebsiteLink=function(item,column){
    //here, we use the label function to come up with custom html for the cell and assocate this function to the column via the labelfunction property (See below)
    return "<a href='http://www.google.com?q="+item.legalName+"' target='_blank'>"+item.legalName+"</a>";
};

myCompanyNameSpace.ItemRenderers_grid_itemClickHandler=function(e){
    if(e.column.getDataField()=="id"){
        var item=e.item;
        var html = "<table style='width:100%'>" +
            "   <tr>" +
                    "<td style='border:solid 1px #000000'>Organization Name "+item.legalName+" </td>" +
                    "<td style='border:solid 1px #000000'>Annual Revenue "+item.annualRevenue+" </td>" +
                    "<td style='border:solid 1px #000000'>Sales Contact Phone:"+item.salesContact.telephone+" </td>" +
            "   </tr>" +
            "   <tr>" +
                    "<td style='border:solid 1px #000000'>Sales Contact:"+item.salesContact.displayName+" </td>" +
                    "<td style='border:solid 1px #000000'>EPS:"+item.earningsPerShare+" </td>" +
                    "<td style='border:solid 1px #000000'>Last Stock Price:"+item.lastStockPrice+" </td>" +
            "   </tr>" +
            "   <tr>" +
                    "<td style='border:solid 1px #000000'>Sales Contact Phone:"+item.salesContact.telephone+" </td>" +
                    "<td style='border:solid 1px #000000'>Employee Strength:"+item.numEmployees+" </td>" +
            "   </tr>" +
            "</table>";
        var div = document.createElement("div");
        div.innerHTML=html;
        flexiciousNmsp.UIUtils.adapter.showDialog(div,(grid.domElement),true,300,200,"Details");
    }
};

myCompanyNameSpace.SAMPLE_CONFIGS["ItemRenderers"]='<grid id="grid"  enablePrint="true" enablePreferencePersistence="true"'+
    '									 enableExport="true" enableCopy="true" itemClick="myCompanyNameSpace.ItemRenderers_grid_itemClickHandler"'+
    '									 selectedKeyField="id" enablePaging="true" pageSize="50" enableFilters="true"'+
    '									enableFooters="true"  initialSortField="legalName" initialSortAscending="true"'+
    '									preferencePersistenceKey="itemRenderers" >'+
    '			<level pageSize="20" childrenField="deals" enableFooters="true" selectedKeyField="id">'+
    '				<columns>'+
    '					<column dataField="id" headerText="ID" filterControl="TextInput" useUnderLine="true" useHandCursor="true"'+
    '														   enableCellClickRowSelect="false" />'+
    '					'+
    '					<column headerText="Editable Name" dataField="legalName" '+
    '					   filterControl="TextInput" filterOperation="BeginsWith" paddingLeft="5" paddingBottom="5"  '+
    '					   paddingRight="8" enableCellClickRowSelect="false" itemRenderer="myCompanyNameSpace.ItemRenderers_TextInputRenderer">'+
    '					</column>'+

    '					<column  labelFunction="myCompanyNameSpace.ItemRenderers_getWebsiteLink" headerText="Website" enableCellClickRowSelect="false" useHandCursor="true" useUnderLine="true"/>'+
    '					<column dataField="lastStockPrice" headerText="Stock Price" labelFunction="myCompanyNameSpace.ItemRenderers_getStockChartHTML">'+
    '					</column>'+
    '					<column sortable="false" enableCellClickRowSelect="false" width="50" dataField="isActive" itemRenderer="myCompanyNameSpace.ItemRenderers_CheckBoxRenderer"' +
    '                   headerRenderer="myCompanyNameSpace.ItemRenderers_CheckBoxHeaderRenderer">'+
    '					</column>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level enableFooters="true" selectedKeyField="id"'+
    '																initialSortField="dealDate" initialSortAscending="false">'+
    '						<columns>'+
    '							<column type="checkbox" />'+
    '							<column dataField="dealDescription" headerText="Deal Description"   '+
    '																   footerLabel="Count:" footerOperation="count" footerAlign="center"'+
    '																   />'+
    '							<column dataField="dealAmount" headerText="Deal Amount" textAlign="right" '+
    '																   footerLabel="Total:" footerOperation="sum" footerAlign="right"'+
    '																   footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" '+
    '																   labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '							<column dataField="dealDate" headerText="Deal Date" '+
    '																   labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"'+
    '																   resizable="false"/>'+
    '						'+
    '							<column sortable="false" enableCellClickRowSelect="false" width="50" dataField="finalized" itemRenderer="myCompanyNameSpace.ItemRenderers_CheckBoxRenderer"' +
    '                   headerRenderer="myCompanyNameSpace.ItemRenderers_CheckBoxHeaderRenderer" />'+
    '						</columns>'+
    '					</level>'+
    '				</nextLevel>'+
    '			</level>'+
    '		'+
    '	</grid>';
