myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["SpinnerExample"]="http://www.flexicious.com/resources/Ultimate/docs/SpinnerExample.htm";

(function(window)
{
    "use strict";
    var CustomSpinner, uiUtil = flexiciousNmsp.UIUtils, flxConstants = flexiciousNmsp.Constants;
    /**
     * A CustomSpinner is a custom spinner renderer, that defines how to use an image within the spinner control
     * @constructor
     * @extends UIComponent
     */
    CustomSpinner=function(){
        //make sure to call constructor
        flexiciousNmsp.UIComponent.apply(this,["span"]);//second parameter is the tag name for the dom element.
        //this.domElement.src = flxConstants.IMAGE_PATH +"/pdf.png";

    };

    myCompanyNameSpace.SpinnerExample_CustomSpinner= CustomSpinner; //add to name space
    CustomSpinner.prototype = new flexiciousNmsp.UIComponent(); //setup hierarchy
    CustomSpinner.prototype.typeName = CustomSpinner.typeName = 'CustomSpinner';//for quick inspection

    CustomSpinner.prototype.spin=function(){
        if(!this.parent){
            this.domElement.innerHTML = "<img src='"+myCompanyNameSpace.IMAGE_PATH +"/ajax-loader.gif'></img> ";
            //we have not been parented yet, so add ourselves to the grid
            this.grid.addChild(this);
            uiUtil.positionComponent(this.grid,this,"center center","center center");
            this.domElement.style.zIndex=999;
        }
        this.domElement.style.display="";
    };
    CustomSpinner.prototype.stop=function(){
        //this.domElement.style.display="none";
    };

}(window));


myCompanyNameSpace.SpinnerExample_CreationComplete=function (event){
    //emulate a delayed load
    window.setTimeout(function(){grid.setDataProvider(myCompanyNameSpace.FlexiciousMockGenerator.instance().getFlatOrgList());},5000);

};


myCompanyNameSpace.SAMPLE_CONFIGS["SpinnerExample"]='<grid id="grid"  creationComplete="myCompanyNameSpace.SpinnerExample_CreationComplete" enablePrint="true" enablePreferencePersistence="true"'+
    '									 enableExport="true" enableCopy="true" preferencePersistenceKey="simpleGrid" spinnerLabel="" '+
    '									 enableMultiColumnSort="true" useCompactPreferences="true" showSpinnerOnFilterPageSort="true" ' +
    '   spinnerFactory="myCompanyNameSpace.SpinnerExample_CustomSpinner" enableEagerDraw="true">'+
    '			<level selectedKeyField="id" enablePaging="true" pageSize="50" enableFilters="true"	enableFooters="true"  initialSortField="legalName" ' +
    '       initialSortAscending="true">'+
    '				<columns>'+
    '					<column id="colId" dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '					<column id="colLegalName" dataField="legalName" headerText="Legal Name"/>'+
    '					<column id="colLine1" dataField="headquarterAddress.line1" headerText="Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '					<column id="colLine2" dataField="headquarterAddress.line2" headerText="Line 2"/>'+
    '					<column id="colCity" dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column id="colState" dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column id="colCountry" dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column id="colAnnRev" dataField="annualRevenue" headerText="Annual Revenue" textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column id="colNumEmp" dataField="numEmployees" headerText="Num Employees" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column id="colEPS"  dataField="earningsPerShare" headerText="EPS" textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column id="colStockPrice" dataField="lastStockPrice" headerText="Stock Price" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '				</columns>'+
    '			</level>'+
    '	</grid>';