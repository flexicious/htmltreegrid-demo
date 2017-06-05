myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["ErrorHandling"]="http://www.flexicious.com/resources/Ultimate/docs/ErrorHandling.htm";

myCompanyNameSpace.errorhandling_itemEditCancel=function(evt){
    grid.clearErrorByObject(evt.cell.getRowInfo().getData())
}
myCompanyNameSpace.errorhandling_validate=function(editor){
    var cell=grid.getCurrentEditCell();
    var txt= editor;
    if(txt.getValue().length<3){
        grid.setErrorByObject(cell.getRowInfo().getData(),cell.getColumn().getDataField(),"Legal name must be greater than 3 characters");
    }else{
        grid.clearErrorByObject(cell.getRowInfo().getData());
    }

//If you return true, the grid will highlight the error in red and move on to the next row.
//If you return false, the edit box would stay in place and not let the user move forward
//unless the error is corrected.

    return (txt.getValue().length>=3);
}


myCompanyNameSpace.SAMPLE_CONFIGS["ErrorHandling"]='<grid  id="grid" editable="true"  enableFooters="true">'+
    '			<level selectedKeyField="id" onitemEditCancel="myCompanyNameSpace.errorhandling_itemEditCancel">'+
    '				<columns>'+
    '					<column type="checkbox" id="cbCol" />'+
    '					<column dataField="id" headerText="ID" filterControl="TextInput" />'+
    '					<column dataField="legalName" headerText="Legal Name" editable="true" itemEditorValidatorFunction="myCompanyNameSpace.errorhandling_validate" />'+
    '					<column dataField="annualRevenue" headerText="Annual Revenue" textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="numEmployees" headerText="Num Employees" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="earningsPerShare" headerText="EPS" textAlign="right" footerLabel="Avg:" footerOperation="average"  footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="lastStockPrice" headerText="Stock Price" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '				</columns>'+
    '			</level>'+
    '	</grid>';

