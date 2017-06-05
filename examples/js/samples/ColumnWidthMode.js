


myCompanyNameSpace.SAMPLE_CONFIGS["ColumnWidthMode"]='<grid  dataProvider="eval__myCompanyNameSpace.Employee.employees" pageSize="25" width="800" color="red"'+
    '			>'+
    '			<level>'+
    '			<columns>'+
    '				<column type="checkbox" columnWidthMode="fixed" width="30" selectedKeyField="employeeId"   />'+
    '				<column columnWidthMode="fitToContent" headerText="ID" dataField="employeeId" filterOperation="Contains" filterControl="TextInput" filterTriggerEvent="enterKeyUp"/>'+
    '				<column columnWidthMode="fitToContent" headerText="First Name" dataField="firstName" filterOperation="BeginsWith" filterControl="TextInput" filterTriggerEvent="enterKeyUp" footerOperation="count" footerLabel="Count:" footerOperationPrecision="0"/>'+
    '				<column columnWidthMode="fitToContent" headerText="Last Name" dataField="lastName" filterOperation="BeginsWith" filterControl="TextInput" filterTriggerEvent="enterKeyUp" footerOperation="count" footerLabel="Count:" footerOperationPrecision="0"/>'+
    '				<column columnWidthMode="fitToContent" percentWidth="25" headerText="Department" dataField="department" filterOperation="Equals" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150" footerOperation="count" footerLabel="Count:" footerOperationPrecision="0"/>'+
    '				<column columnWidthMode="percent" percentWidth="33" headerText="Phone" dataField="phoneNumber" filterOperation="Contains" filterControl="TextInput" filterTriggerEvent="enterKeyUp" footerOperation="count" footerLabel="Count:" footerOperationPrecision="0"/>'+
    '				<column columnWidthMode="fixed" width="40" headerText="Active" dataField="isActive" filterOperation="Equals" filterControl="TriStateCheckBox" footerOperation="count" footerLabel="Count:" footerOperationPrecision="0"/>'+
    '				<column columnWidthMode="percent" percentWidth="33" headerText="Hire Date" dataField="hireDate" filterControl="DateComboBox" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction" ' +
    '               filterDateRangeOptions="[flexiciousNmsp.DateRange.DATE_RANGE_THISQUARTER,flexiciousNmsp.DateRange.DATE_RANGE_LASTQUARTER,flexiciousNmsp.DateRange.DATE_RANGE_THISYEAR,flexiciousNmsp.DateRange.DATE_RANGE_LASTYEAR,flexiciousNmsp.DateRange.DATE_RANGE_CUSTOM]" />' +
    '               filterComboBoxWidth="150" footerOperation="count" footerLabel="Count:" footerOperationPrecision="0"/>'+
    '				<column columnWidthMode="percent" percentWidth="33" textAlign="right" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction" width="100" headerText="Annual Salary" dataField="annualSalary" filterControl="NumericRangeBox" filterTriggerEvent="enterKeyUp" ' +
    '                   />'+
    '			</columns>'+
    '			</level>'+
    '		</grid>';