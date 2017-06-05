myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["DynamicLevels"]="http://www.flexicious.com/resources/Ultimate/docs/DynamicLevels.htm";


myCompanyNameSpace.dynamiclevels_gridchangeHandler=function (evt){

    var _selectedObjects = "";
    var items=grid.getSelectedObjects();
    for(var i=0;i<items.length;i++){
        var item=items[i];
        _selectedObjects+= item["@id"].toString()+",";
    }
    var _openObjects="";
    var items2=grid.getOpenKeys();
    for(var j=0;j<items2.length;j++){
        var  item3=items2[j];
        _openObjects+= item3+",";
    }

};
myCompanyNameSpace.dynamiclevels_dpHierarchyXML ='<root><Region Region="Southwest" id="SW">'+
'      <Region Region="Arizona" Actual="68750" Estimate="70000" id="AR">'+
'          <Territory_Rep Territory_Rep="Barbara Jennings"'+
'          Actual="38865" Estimate="40000" id="BJ"/>'+
'          <Territory_Rep Territory_Rep="Dana Binn"'+
'          Actual="29885" Estimate="30000" id="DB"/>'+
'      </Region>'+
'      <Region Region="Central California" Actual="29134" Estimate="30000" id="CC">'+
'          <Territory_Rep Territory_Rep="Joe Smith"'+
'          Actual="29134" Estimate="30000" id="JS"/>'+
'      </Region>'+
'      <Region Region="Nevada" Actual="52888" Estimate="45000" id="NV">'+
'          <Territory_Rep Territory_Rep="Bethany Pittman"'+
'          Actual="52888" Estimate="45000" id="BP"/>'+
'      </Region>'+
'      <Region Region="Northern California" Actual="94303" Estimate="80000" id="NC">'+
'          <Territory_Rep Territory_Rep="Lauren Ipsum"'+
'          Actual="38805" Estimate="40000" id="LI"/>'+
'          <Territory_Rep Territory_Rep="T.R. Smith"'+
'          Actual="55498" Estimate="40000" id="TS"/>'+
'      </Region>'+
'      <Region Region="Southern California" Actual="89898" Estimate="90000" id="SC">'+
'          <Territory_Rep Territory_Rep="Alice Treu"'+
'          Actual="44985" Estimate="45000" id="AT"/>'+
'          <Territory_Rep Territory_Rep="Jane Grove"'+
'          Actual="44913" Estimate="45000" id="JG"/>'+
'      </Region>'+
'</Region></root>';

myCompanyNameSpace.SAMPLE_CONFIGS["DynamicLevels"]='<grid  id="grid"   enablePrint="true"  change="myCompanyNameSpace.dynamiclevels_gridchangeHandler"'+
    '									 enableDrillDown="true" enableDynamicLevels="true" enableSelectionBubble="true" enableTriStateCheckbox="true" '+
    '									 enableExport="true" enableCopy="true" enableSelectionCascade="true" selectedKeyField="@id"'+
    '									 dataProvider="eval__flexiciousNmsp.xml2json(myCompanyNameSpace.dynamiclevels_dpHierarchyXML,null,true).Region">'+
    '			<level enableFooters="true" >'+
    '				<columns>'+
    '					<column dataField="@Region" headerText="Region" enableHierarchicalNestIndent="true"/>'+
    '					<column type="checkbox"  />'+
    '					<column dataField="@id" headerText="ID"/>'+
    '					<column dataField="@Territory_Rep" headerText="Territory Rep"/>'+
    '					<column dataField="@Actual" headerText="Actual" textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '					<column dataField="@Estimate" headerText="Estimate" textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision="2" footerFormatter="flexiciousNmsp.CurrencyFormatter" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatCurrencyLabelFunction"/>'+
    '			</columns>'+
    '			</level>'+
    '	</grid>';