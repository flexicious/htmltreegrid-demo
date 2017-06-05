(function(window)
{
    "use strict";
    var CustomMatchTextBoxRenderer, uiUtil = flexiciousNmsp.UIUtils, flxConstants = flexiciousNmsp.Constants;
    /**
     * A TextInputRenderer is a custom item renderer, that defines how to use custom cells with logic that you can control
     * @constructor
     * @namespace com.flexicious.controls
     * @extends TextInput
     */
    CustomMatchTextBoxRenderer=function(){
        //make sure to call constructor
        flexiciousNmsp.TextInput.apply(this,["input"]);//second parameter is the tag name for the dom element.
    };

    myCompanyNameSpace.CustomMatchFilterControl_CustomMatchTextBoxRenderer= CustomMatchTextBoxRenderer; //add to name space
    CustomMatchTextBoxRenderer.prototype = new flexiciousNmsp.TextInput(); //setup hierarchy
    CustomMatchTextBoxRenderer.prototype.typeName = CustomMatchTextBoxRenderer.typeName = 'CustomMatchTextBoxRenderer';//for quick inspection
    CustomMatchTextBoxRenderer.prototype.getClassNames=function(){
        //we need to implement ICustomMatchFilterControl because we want to tell the grid to call our isMatch method to do the filter
        //we need to implement IFilterControl to tell the grid that we are actually a filter control, and not a placeholder for non-filterable columns
        //we need to implement iDelayedChange so that the grid listens to our "delayedChange" event, and not the regular change method.
        //if we had set filterTriggerEvent on the column to "enterKeyUp", we would not have had to implement IDelayedChange, but then the
        //user would have had to hit the enter key to run the filter.
        return ["CustomMatchTextBoxRenderer","UIComponent","ICustomMatchFilterControl","IFilterControl","IDelayedChange"]; //this is a mechanism to replicate the "is" and "as" keywords of most other OO programming languages. We need to

    };
    CustomMatchTextBoxRenderer.prototype.isMatch=function(emp){
        var text=this.getText();
        if(emp && text.length>0){
            return emp.firstName.toLowerCase().indexOf(text.toLowerCase())>=0  ||emp.lastName.toLowerCase().indexOf(text.toLowerCase())>=0 ;
        }
        return true;
    };

}(window));
myCompanyNameSpace.CustomMatchFilterControl_getFullName=function(item,col){
    return item.firstName + " " + item.lastName;
}
myCompanyNameSpace.SAMPLE_CONFIGS["CustomMatchFilterControl"]='<grid  id="grid"   ' +
    '                            enableFilters="true" enableCopy="true" enableFooters="true" '+
    '							 enablePaging="true" dataProvider="eval__myCompanyNameSpace.Employee.employees" '+
    '							 pageSize="25" filterRowHeight="25" footerRowHeight="60" >'+
    '					<level>'+
    '		<columns>'+
    //'			<column type="checkbox"  selectedKeyField="employeeId"/>'+
    //'			<column headerText="ID" dataField="employeeId" filterOperation="Contains" filterControl="TextInput" filterTriggerEvent="enterKeyUp"/>'+
    '			<column headerText="Name" labelFunction="myCompanyNameSpace.CustomMatchFilterControl_getFullName" '+
    '											filterRenderer="myCompanyNameSpace.CustomMatchFilterControl_CustomMatchTextBoxRenderer"/>'+
//    '			<column textAlign="right" '+
//    '											labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction" '+
//    '											width="100" headerText="Annual Salary" dataField="annualSalary" ' +
//    '                                           filterControl="NumericRangeBox" filterTriggerEvent="enterKeyUp"/>'+
//    '			<column headerText="State" dataField="stateCode" />'+
//    '			<column headerText="Department" dataField="department" filterOperation="Equals" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid="true" filterComboBoxWidth="150"/>'+
//    '			<column headerText="Phone" dataField="phoneNumber" />'+
//    '			<column headerText="Active" dataField="isActive" filterOperation="Equals" filterControl="TriStateCheckBox" footerOperation="count" footerLabel="Count:" footerOperationPrecision="0"/>'+
//    '			<column headerText="Hire Date" dataField="hireDate" filterControl="DateComboBox" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction" ' +
//    '           filterDateRangeOptions="[flexiciousNmsp.DateRange.DATE_RANGE_THISQUARTER,flexiciousNmsp.DateRange.DATE_RANGE_LASTQUARTER,flexiciousNmsp.DateRange.DATE_RANGE_THISYEAR,flexiciousNmsp.DateRange.DATE_RANGE_LASTYEAR,flexiciousNmsp.DateRange.DATE_RANGE_CUSTOM]" ' +
//    '               filterComboBoxWidth="150" footerOperation="count" footerLabel="Count:" footerOperationPrecision="0"/>'+
    '		</columns>'+
    '					</level>'+
    '	</grid>';