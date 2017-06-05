myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["XmlGroupedData"]="http://www.flexicious.com/resources/Ultimate/docs/XmlGroupedData.htm";

myCompanyNameSpace.XMLGroupedData_getFooter=function (cell){

    var val=cell.getRowInfo().getData();
    return myCompanyNameSpace.XMLGroupedData_getTotal(val,cell.getLevel().getNestDepth(),
        cell.getColumn().getDataField(),true);

};
myCompanyNameSpace.XMLGroupedData_getTotal=function (val,nestDepth,dataField,usePrefix){

    var arr=[];
    var lbl="";
    var regionGroup;
    var region;
    var rep;
    var items,items2;
    if( val instanceof  Array){
        //the top level footers converts the root to a flat array.
        for(var i=0;i<val.length;i++){
            var  regionGroup=val[i];
            items=regionGroup.children;
            for(var p=0;p<items.length;p++){
                var  region=items[p];
                items2=region.children||[region.Territory_Rep];
                for(var j=0;j<items2.length;j++){
                    var  rep=items2[j];
                    arr.push({"value":rep[dataField]});
                }
            }
        }
    }
    else if(nestDepth==1){
        for(var i=0;i<val.children.length;i++){
            var  regionGroup=val.children[i];
            items=regionGroup.children;
            for(var j=0;j<items.length;j++){
                var  region=items[j];
                items2=region.children;
                for(var k=0;k<items2.length;k++){
                    var  rep=items2[k];
                    arr.push({"value":rep[dataField]});
                }
            }
        }
    }
    else if(nestDepth==2){
        for(var i=0;i<val.children.length;i++){
            var region1=val.children[i];
            var items3=region1.children||[region1.Territory_Rep];
            for(var j=0;j<items3.length;j++){
                var rep1=items3[j];
                arr.push({"value":rep1[dataField]});
            }
        }
        lbl="Region "
    }
    else if(nestDepth==3){
         items=val.children||[val.Territory_Rep]
        for(var k=0;k<items.length;k++){
            var rep2=items[k];
            arr.push({"value":rep2[dataField]});
        }
        lbl="State "
    }
    return (usePrefix?lbl+"Sum:":"")+ flexiciousNmsp.UIUtils.formatCurrency(flexiciousNmsp.UIUtils.sum(arr,"value"));

};

myCompanyNameSpace.XMLGroupedData_getDataValue=function (item,col,cell){
    if(typeof cell=="undefined")cell=null;

    var val="";
    var nestDepth=cell.getLevel().getNestDepth();

    if(nestDepth==3){
        val=flexiciousNmsp.UIUtils.resolveExpression(item, col.getDataField());
        return val?flexiciousNmsp.UIUtils.formatCurrency(parseFloat(val.toString())):"";
    }
    return myCompanyNameSpace.XMLGroupedData_getTotal(item,nestDepth+1,col.getDataField(),false);

};
myCompanyNameSpace.XMLGroupedData_dpHierarchyXML ='<root><Region Region="Southwest">'+
    '   <Region Region="Arizona">'+
    '       <Territory_Rep Territory_Rep="Barbara Jennings" Actual="38865" Estimate="40000"/>'+
    '       <Territory_Rep Territory_Rep="Dana Binn" Actual="29885" Estimate="30000"/>'+
    '   </Region>'+
    '   <Region Region="Central California">'+
    '       <Territory_Rep Territory_Rep="Joe Smith" Actual="29134" Estimate="30000"/>'+
    '   </Region>'+
    '   <Region Region="Nevada">'+
    '       <Territory_Rep Territory_Rep="Bethany Pittman" Actual="52888" Estimate="45000"/>'+
    '   </Region>'+
    '   <Region Region="Northern California">'+
    '       <Territory_Rep Territory_Rep="Lauren Ipsum" Actual="38805" Estimate="40000"/>'+
    '       <Territory_Rep Territory_Rep="T.R. Smith" Actual="55498" Estimate="40000"/>'+
    '   </Region>'+
    '   <Region Region="Southern California">'+
    '       <Territory_Rep Territory_Rep="Alice Treu" Actual="44985" Estimate="45000"/>'+
    '       <Territory_Rep Territory_Rep="Jane Grove" Actual="44913" Estimate="45000"/>'+
    '   </Region>'+
    '   </Region>'+
    '   <Region Region="Northeast">'+
    '   <Region Region="New York">'+
    '       <Territory_Rep Territory_Rep="Alex Smith" Actual="49229" Estimate="50000"/>'+
    '       <Territory_Rep Territory_Rep="Joe Pittman" Actual="35555" Estimate="40000"/>'+
    '   </Region>'+
    '   <Region Region="New Jersey">'+
    '       <Territory_Rep Territory_Rep="Joe Smith" Actual="28394" Estimate="30000"/>'+
    '   </Region>'+
    '   <Region Region="Connecticut">'+
    '       <Territory_Rep Territory_Rep="Amanda Peters" Actual="44331" Estimate="55000"/>'+
    '       <Territory_Rep Territory_Rep="Jake Fremmer" Actual="55434" Estimate="65000"/>'+
    '   </Region>'+
    ' </Region></root>';
myCompanyNameSpace.SAMPLE_CONFIGS["XmlGroupedData"]='<grid id="grid" enablePrint="true" enablePreferencePersistence="true"'+
    '									enableExport="true" enableCopy="true" enableFilters="true" enableDrillDown="true"'+
    '									enableFooters="true"  initialSortField="title" '+
    '									initialSortAscending="true" forcePagerRow="true"'+
    '                                   dataProvider="eval__flexiciousNmsp.xml2json(myCompanyNameSpace.XMLGroupedData_dpHierarchyXML).Region"'+
    '									enableHideIfNoChildren="true"'+
    '									preferencePersistenceKey="xmlGroupedData">'+
    '					<level >'+
    '						<columns>'+
    '							<column dataField="@Region" headerText="Region"/>'+
    '							<column dataField="@Territory_Rep" headerText="Territory Rep"  filterControl="TextInput" filterOperation="BeginsWith"/>'+
    '							<column dataField="@Actual" headerText="Actual" footerAlign="right" textAlign="right" labelFunction2="myCompanyNameSpace.XMLGroupedData_getDataValue" footerLabelFunction2="myCompanyNameSpace.XMLGroupedData_getFooter"/>'+
    '							<column dataField="@Estimate" headerText="Estimate" footerAlign="right" textAlign="right" labelFunction2="myCompanyNameSpace.XMLGroupedData_getDataValue" footerLabelFunction2="myCompanyNameSpace.XMLGroupedData_getFooter"/>'+
    '						</columns>'+
    '						<nextLevel>'+
    '							<level reusePreviousLevelColumns="true" enableFooters="true">'+
    '								<nextLevel>'+
    '									<level reusePreviousLevelColumns="true" enableFooters="true">'+
    '									</level>'+
    '								</nextLevel>'+
    '							</level>'+
    '						</nextLevel>'+
    '					</level>'+
    '	</grid>';