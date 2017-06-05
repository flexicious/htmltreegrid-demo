

myCompanyNameSpace.multipleGrouping_Manual_dpFlat = [
    {Region:"Southwest", RegionCode:"SW", Territory:"Arizona",TerritoryCode:"AZ",
        Territory_Rep:"Barbara Jennings", Actual:38865, Estimate:40000},
    {Region:"Southwest", RegionCode:"SW", Territory:"Arizona",TerritoryCode:"AZ",
        Territory_Rep:"Dana Binn", Actual:29885, Estimate:30000},
    {Region:"Southwest", RegionCode:"SW", Territory:"Central California",TerritoryCode:"CA",
        Territory_Rep:"Joe Smith", Actual:29134, Estimate:30000},
    {Region:"Southwest",RegionCode:"SW",  Territory:"Nevada",TerritoryCode:"NV",
        Territory_Rep:"Bethany Pittman", Actual:52888, Estimate:45000},
    {Region:"Southwest",RegionCode:"SW",  Territory:"Northern California",TerritoryCode:"NC",
        Territory_Rep:"Lauren Ipsum", Actual:38805, Estimate:40000},
    {Region:"Southwest", RegionCode:"SW", Territory:"Northern California",TerritoryCode:"NC",
        Territory_Rep:"T.R. Smith", Actual:55498, Estimate:40000},
    {Region:"Southwest", RegionCode:"SW",Territory:"Southern California",TerritoryCode:"SC",
        Territory_Rep:"Alice Treu", Actual:44985, Estimate:45000},
    {Region:"Southwest", RegionCode:"SW" ,Territory:"Southern California",TerritoryCode:"SC",
        Territory_Rep:"Jane Grove", Actual:44913, Estimate:45000},
    {Region:"NorthEast",RegionCode:"NE" , Territory:"New York",TerritoryCode:"NY",
        Territory_Rep:"Jose Rodriguez", Actual:26992, Estimate:30000},
    {Region:"NorthEast", RegionCode:"NE",Territory:"New York",TerritoryCode:"NY",
        Territory_Rep:"lisa Sims", Actual:47885, Estimate:50000},
    {Region:"NorthEast", RegionCode:"NE", Territory:"Massachusetts",TerritoryCode:"MA",
        Territory_Rep:"kelly o'connell", Actual:172911, Estimate:20000},
    {Region:"NorthEast", RegionCode:"NE", Territory:"Pennsylvania",TerritoryCode:"PA",
        Territory_Rep:"John Barnes", Actual:32105, Estimate:30000},
    {Region:"MidWest",  RegionCode:"NE", Territory:"Illinois",TerritoryCode:"IL",
        Territory_Rep:"Seth Brown", Actual:42511, Estimate:40000}];


myCompanyNameSpace.multipleGrouping_Manual_CreationComplete=function (evt){
    var regions = myCompanyNameSpace.multipleGrouping_Manual_groupBy(myCompanyNameSpace.multipleGrouping_Manual_dpFlat,"Region", "(None)", null, ['RegionCode']);
    for(var i=0;i<regions.length;i++){
        var region=regions[i];
        region.children = myCompanyNameSpace.multipleGrouping_Manual_groupBy(region.children,"Territory", "(None)", null, ['TerritoryCode']);
    }
    grid.setDataProvider(regions);

};

myCompanyNameSpace.multipleGrouping_Manual_groupBy=function(dp, prop, nullValue,filterfunction,additionalProperties,
                      useOtherBucket){

    if(!additionalProperties)additionalProperties=[];
    var buckets = {};
    var key;
    var result = [];
    //iterate through the flat list and create a hierarchy
    if(useOtherBucket){
        buckets["other"] = [];
    }
    for(var i=0;i<dp.length;i++){
        var item=dp[i];
        key = flexiciousNmsp.UIUtils.resolveExpression(item,prop); //the parent
        if(!buckets[key]){
            buckets[key] = [];//the children
        }
        if(filterfunction==null || filterfunction(item))
            buckets[key].push(item); //add to the parents child list
        else if(useOtherBucket){
            buckets["other"].push(item);
        }
    }
    for (key  in buckets){
        var obj = {};
        obj[prop]=key=="null"?nullValue:key;
        obj['children']=buckets[key];
        if(buckets[key].length>0){
            for(var j=0;j<additionalProperties.length;j++){
                var addProp=additionalProperties[j];
                obj[addProp] = buckets[key][0][addProp];
            }
        }
        result.push(obj); //create the final structure
    }
    return result; //this will refresh the grid...

};

myCompanyNameSpace.SAMPLE_CONFIGS["MultipleGrouping_Manual"]='<grid  id="grid" color="0x323232"' +
    '           preferencePersistenceKey="multipleGrouping_Manual" on'+flexiciousNmsp.Constants.EVENT_CREATION_COMPLETE+'="myCompanyNameSpace.multipleGrouping_Manual_CreationComplete">'+
    '				<level childrenField="children" enableFooters="true" >'+
    '					<columns>'+
    '						<column dataField="Region" enableHierarchicalNestIndent="true"/>'+
    '						<column dataField="RegionCode"/>'+
    '					</columns>'+
    '					'+
    '					<nextLevel>'+
    '					<level  enableFooters="true" childrenField="children">'+
    '						<columns>'+
    '							<column dataField="Territory"/>'+
    '							<column dataField="TerritoryCode"/>'+
    '							'+
    '						</columns>'+
    '							<nextLevel>'+
    '								<level  enableFooters="true" childrenCountField="numChildren">'+
    '									<columns>'+
    '										<column dataField="Territory_Rep" headerText="Territory Rep"/>'+
    '										<column dataField="Actual"/>'+
    '										<column dataField="Estimate"/>'+
    '									</columns>'+
    '								</level>'+
    '							</nextLevel>'+
    '					</level>'+
    '				</nextLevel>'+
    '					</level>'+
    '		</grid>';