myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["DynamicGrouping"]="http://www.flexicious.com/resources/Ultimate/docs/DynamicGrouping.htm";

myCompanyNameSpace.dynamicGrouping_CreationComplete = function() {
    myCompanyNameSpace.dynamicGrouping_groupBy("invoice.id");
};

myCompanyNameSpace.dynamicGrouping_groupBy=function (prop){

    var buckets = {};
    var key;
    var result =[];
    var _dataProvider= new Object();
    var _flat= myCompanyNameSpace.FlexiciousMockGenerator.instance().getAllLineItems();
    //iterate through the flat list and create a hierarchy
    for(var i=0;i<_flat.length;i++){
        var item=_flat[i];
        key = flexiciousNmsp.UIUtils.resolveExpression(item,prop); //the parent
        if(!buckets[key]){
            buckets[key] = [];//the children
        }
        buckets[key].push(item); //add to the parents child list
    }
    for (key  in buckets){
        result.push({name:key,children:buckets[key]}); //create the final structure
    }
    _dataProvider=result; //this will refresh the grid...
    grid.setDataProvider(_dataProvider);
    grid.rebuild();
};

myCompanyNameSpace.SAMPLE_CONFIGS["DynamicGrouping"]='<grid horizontalScrollPolicy="on" id="grid" width="800" height="600"  '+
    '											enableDynamicLevels="true" enableHeightAutoAdjust="true" preferencePersistenceKey="dynamicGrouping" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.dynamicGrouping_CreationComplete">'+
    '					<level childrenField="children" nestIndent="25">'+
    '						<columns>'+
    '							<column dataField="name" headerText="Name" columnLockMode="left" />'+
    '							<column dataField="id" headerText="1 ID" />'+
    '							<column dataField="lineItemDescription" headerText="2 Line Item Description" width="200" />'+
    '							<column dataField="lineItemAmount" headerText="3 Line Item Amount" />'+
    '							<column dataField="invoice.invoiceNumber" headerText="4 Invoice Number" />'+
    '							<column dataField="invoice.invoiceAmount" headerText="5 Invoice Amount" />'+
    '							<column dataField="invoice.invoiceStatus.name" headerText="6 Invoice Status" />'+
    '							<column dataField="invoice.deal.dealDescription" headerText="7 Deal" />'+
    '							<column dataField="invoice.invoiceDate" headerText="8 Invoice Date" />'+
    '							<column dataField="invoice.dueDate" headerText="9 Due Date" />'+
    '							<column dataField="invoice.deal.dealDescription" headerText="10 Deal" width="200"/>'+
    '							<column dataField="invoice.deal.dealStatus.name" headerText="11 Deal Status" />'+
    '							<column dataField="invoice.deal.customer.legalName" headerText="12 Customer" />'+
    '							<column dataField="invoice.deal.customer.headquarterAddress.line1" headerText="13 Address Line 1" />'+
    '							<column dataField="invoice.deal.customer.headquarterAddress.line2" headerText="14 Address Line 2"/>'+
    '							<column dataField="invoice.deal.customer.headquarterAddress.city.name" headerText="15 City" />'+
    '							<column dataField="invoice.deal.customer.headquarterAddress.state.name" headerText="16 State" />'+
    '							<column dataField="invoice.deal.customer.headquarterAddress.country.name" headerText="17 Country"/>'+
    '							<column dataField="invoice.deal.customer.annualRevenue" headerText="18 Annual Revenue" textAlign="right" headerAlign="center" />'+
    '							<column dataField="invoice.deal.customer.numEmployees" headerText="19 Num Employees" textAlign="right" />'+
    '							<column dataField="invoice.deal.customer.earningsPerShare" headerText="20 EPS" textAlign="right" />'+
    '						</columns>'+
    '					</level>'+
    '			</grid>';