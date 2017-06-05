myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["ProgramaticCellFormatting"]="http://www.flexicious.com/resources/Ultimate/docs/ProgramaticCellFormatting.htm";

myCompanyNameSpace.ProgrammaticCellFormatting_getRowBackground=function (cell){

    if(cell.rowInfo.getData().headquarterAddress.state.name=="New York"){
        return 0xCFCFCF;
    }else if(cell.rowInfo.getIsFillRow()){
        return [0xCFCFCF,0xFFFFFF]
    }
    return null;

};

myCompanyNameSpace.ProgrammaticCellFormatting_getRowDisabled=function (cell, data){

    if(data.legalName=='Adobe Systems'){
        return true;
    }
    return false;//do not disable by default.

};

myCompanyNameSpace.ProgrammaticCellFormatting_getRowTextColor=function (cell){

    if(cell.rowInfo.getData().headquarterAddress.state.name=="New York"){
        return 0xCC3300;
    }
    return null;

};

myCompanyNameSpace.ProgrammaticCellFormatting_getColumnBackground=function (cell){

    if(cell.getLevel().getSelectedKeys().indexOf(flexiciousNmsp.UIUtils.resolveExpression(cell.getRowInfo().getData(),cell.level.selectedKeyField)) >-1) {
        return grid.getStyle("selectionColor");
    }
    var val=flexiciousNmsp.UIUtils.resolveExpression(cell.getRowInfo().getData(),cell.getColumn().dataField);
    if(val<10000){
        return 0xCC3300;
    }else if(val>50000){
        return 0x66BB88;
    }
    else {
        return null;
    }

};

myCompanyNameSpace.getColumnTextColor=function (cell){

    var val=flexiciousNmsp.UIUtils.resolveExpression(cell.getRowInfo().getData(),cell.getColumn().dataField);
    if(val<10000){
        return 0xFFFFFF;
    }else if(val>50000){
        return 0x000000;
    }
    else {
        return 0x000000;
    }

};
myCompanyNameSpace.SAMPLE_CONFIGS["ProgramaticCellFormatting"]='<grid  id="grid"  enableFooters="true" enableFilters="true"   enableExport="true" preferencePersistenceKey="programaticCellFormatting" forcePagerRow="true">'+
    '			<level  selectedKeyField="id" rowBackgroundColorFunction="myCompanyNameSpace.ProgrammaticCellFormatting_getRowBackground" rowDisabledFunction="myCompanyNameSpace.ProgrammaticCellFormatting_getRowDisabled" rowTextColorFunction="myCompanyNameSpace.ProgrammaticCellFormatting_getRowTextColor" >'+
    '				<columns>'+
    '					<column type="checkbox" />'+
    '					<column dataField="id" headerText="ID" filterControl="TextInput"/>'+
    '					<column dataField="legalName" headerText="Legal Name"/>'+
    '					<column dataField="headquarterAddress.line1" headerText="Address Line 1" footerLabel="Count:" footerOperation="count"/>'+
    '					<column dataField="headquarterAddress.line2" headerText="Address Line 2"/>'+
    '					<column dataField="headquarterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox"   filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column dataField="headquarterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox"  filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '					<column width="50" columnWidthMode="fixed"  cellBackgroundColorFunction="myCompanyNameSpace.ProgrammaticCellFormatting_getColumnBackground" cellTextColorFunction="myCompanyNameSpace.getColumnTextColor" dataField="annualRevenue" headerText="Annual Revenue" textAlign="right" headerAlign="center" footerLabel="Avg:"  footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column width="50"  columnWidthMode="fixed" cellBackgroundColorFunction="myCompanyNameSpace.ProgrammaticCellFormatting_getColumnBackground" cellTextColorFunction="myCompanyNameSpace.getColumnTextColor"  dataField="numEmployees" headerText="Num Employees" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column width="50" columnWidthMode="fixed" dataField="earningsPerShare" headerText="EPS" textAlign="right" footerLabel="Avg:" footerOperation="average" footerFormatter="flexiciousNmsp.CurrencyFormatter"  labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column width="50" columnWidthMode="fixed" dataField="lastStockPrice" headerText="Stock Price"  textAlign="right" footerLabel="Avg:" footerOperation="average" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '				</columns>'+
    '			</level>'+
    '	</grid>';