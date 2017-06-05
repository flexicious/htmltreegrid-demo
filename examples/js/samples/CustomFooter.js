
myCompanyNameSpace.customFooter_gerSalaryFooter =function() {


    var html="<div style='text-align: right'> Avg: "+flexiciousNmsp.UIUtils.formatCurrency(flexiciousNmsp.UIUtils.average(grid.getDataProvider(),"annualSalary"))+"</div>"
     + "<div style='text-align: right'> Min: "+flexiciousNmsp.UIUtils.formatCurrency(flexiciousNmsp.UIUtils.min(grid.getDataProvider(),"annualSalary"))+"</div>"
     + "<div style='text-align: right'> Max: "+flexiciousNmsp.UIUtils.formatCurrency(flexiciousNmsp.UIUtils.max(grid.getDataProvider(),"annualSalary"))+"</div>";

    return html;

};

myCompanyNameSpace.SAMPLE_CONFIGS["CustomFooter"]='<grid  id="grid"   ' +
    '                            enableFilters="true" enableCopy="true" enableFooters="true" '+
    '							 enablePaging="true" dataProvider="eval__myCompanyNameSpace.Employee.employees" '+
    '							 pageSize="25" filterRowHeight="25" footerRowHeight="70" >'+
    '	<level>'+
    '		<columns>'+
    '			<column type="checkbox"  selectedKeyField="employeeId"/>'+
    '			<column headerText="ID" dataField="employeeId" filterOperation="Contains" filterControl="TextInput" filterTriggerEvent="enterKeyUp"/>'+
    '			<column headerText="Name"/>'+
    '			<column textAlign="right" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction" '+
    '											width="100" headerText="Annual Salary" dataField="annualSalary" ' +
    '                                           filterControl="NumericRangeBox" filterTriggerEvent="enterKeyUp"' +
    '                                         footerLabelFunction="myCompanyNameSpace.customFooter_gerSalaryFooter"/>'+
    '			<column headerText="State" dataField="stateCode" />'+
    '			<column headerText="Department" dataField="department" filterOperation="Equals" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
    '			<column headerText="Phone" dataField="phoneNumber" />'+
    '			<column headerText="Active" dataField="isActive" filterOperation="Equals" filterControl="TriStateCheckBox" footerOperation="count" footerLabel="Count:" footerOperationPrecision="0"/>'+
    '			<column headerText="Hire Date" dataField="hireDate" filterControl="DateComboBox" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction" ' +
    '           filterDateRangeOptions="[flexiciousNmsp.DateRange.DATE_RANGE_THISQUARTER,flexiciousNmsp.DateRange.DATE_RANGE_LASTQUARTER,flexiciousNmsp.DateRange.DATE_RANGE_THISYEAR,flexiciousNmsp.DateRange.DATE_RANGE_LASTYEAR,flexiciousNmsp.DateRange.DATE_RANGE_CUSTOM]" ' +
    '               filterComboBoxWidth="150" footerOperation="count" footerLabel="Count:" footerOperationPrecision="0"/>'+
    '		</columns>'+
    '     </level>'+
    '	</grid>';