
//global variable, only used for demo purposes.
var grid;
if(!window.myCompanyNameSpace){
    window.myCompanyNameSpace={};
}
myCompanyNameSpace.currentConfig=null;
myCompanyNameSpace.allExamples=[
    { id: 'allExamples', name:'All Examples'},
    { id: 'Simple', name:'Simple', description:'This example demonstrates a number of features of the HTML TreeGrid, including ' +
        'Filter, Footer, Paging, Multi Column Sort, Locked Columns, Grouped Headers, Print, Export, and Preference Persistence' ,parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getFlatOrgList()},
    { id: 'Nested', name:'Nested', description:'This example demonstrates support of nested treegrids, where each level contains ' +
        'its own set of columns.',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList()},
    { id: 'PartialLazyLoaded', description:'This example demonstrates support for loading inner level details in a lazy fashion. It loads ' +
        'each item completely on demand (when the user clicks the expand icon.',name:'Partial Lazy Loaded',parent:'allExamples',dataProvider:null},
    { id: 'FullyLazyLoaded', description:'This example demonstrates further extends the lazy loading concept to load each hierarchical level' +
        'in a lazy fasion.', name:'Fully Lazy Loaded',parent:'allExamples',dataProvider:null},
    { id: 'GroupedData',  description:'This example demonstrates inner levels that share the same set of ' +
        'columns as the top level',name:'Grouped Data',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList()},
    { id: 'GroupedData2',  description:'This example demonstrates inner levels that share the same set of ' +
        'columns as the top level, as well a common name column.', name:'Grouped Data2',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList()},
    { id: 'OutlookGroupedData',  description:'This example shows usage of the built in styles to achieve an Outlook style ' +
        'grouping UI', name:'Outlook Grouped Data',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList(),styles:myCompanyNameSpace.outlookGroupedData_gridstyle},
    { id: 'LevelRenderers',  description:'This example demonstrates inner levels that render a detail area as opposed to ' +
        'a inner table', name:'Level Renderers',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList()},
    { id: 'LevelRenderers2',  description:'This example demonstrates immediate inner level that renders ' +
        'details.', name:'Level Renderers2',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList()},
    { id: 'ProgramaticCellFormatting',  description:'This example demonstrates support for programmatic formatting of cell text color,' +
        'background color, etc.', name:'Programatic Cell Formatting',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList()},
    { id: 'ItemRenderers',  description:'This example demonstrates usage of item renderers to generate the contents of ' +
        'cells programmatically.', name:'Item Renderers',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList()},
    { id: 'EditableCells',  description:'This example demonstrates support for inline cell editing. Each column supports an itemEditor which ' +
        'is a class factory that creates an editor component used to edit the data object assoicated with each cell.', name:'Editable Cells',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList()},
    { id: 'DynamicColumns',  description:'This example demonstrates modifying the columns collection of the grid at runtime' +
        'in a dynamic fasion.', name:'Dynamic Columns',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList(),showIFrame:true,iframeWidth:800,iframeHeight:50},
    { id: 'LargeDataset',  description:'This example demonstrates rendering a large dataset in the grid. The grid supports horizontal ' +
        'and vertical renderer recycling (Drawing only the visible area), there by achieving blazing fast performance, even with large datasets' +
        '', name:'Large Data set',parent:'allExamples',dataProvider:null},
    { id: 'ToolbarActions',  description:'This example demonstrates support for embedding buttons in the toolbar and associating' +
        'callback actions with them.', name:'Toolbar Actions',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getFlatOrgList()},
    { id: 'NestedToolbarActions',  description:'This example demonstrates support for embedding buttons in the toolbar and associating' +
        'callback actions with them, at inner levels.', name:'Nested Toolbar Actions',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList()},
    { id: 'XmlData',  description:'This example demonstrates support for parsing flat XML data and rendering it ' +
        'inside the grid.', name:'Xml Data',parent:'allExamples',dataProvider:null},
    { id: 'XmlGroupedData', name:'Xml Grouped Data',  description:'This example support for parsing nested XML data and rendering it' +
        'inside the grid',parent:'allExamples',dataProvider:null},
    { id: 'AutoResizingGrid',  description:'This example demonstrates support of autosizing the grid based upton number of ' +
        'rows being displayed.', name:'Auto Resizing Grid',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList(),showIFrame:true,iframeWidth:800,iframeHeight:50},
    { id: 'SelectionModes',  description:'This example demonstrates support for various selection modes like ' +
        'Single Cell, Multiple Cell, Single Row, Multiple Rows, Multiple Rows (CTRL-Click), and  None.', name:'Selection Modes',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getFlatOrgList(),showIFrame:true,iframeWidth:800,iframeHeight:50},
    { id: 'CustomMatchFilterControl',  description:'This example demonstrates usage of a custom filter control to embed custom logic' +
        'in the filtering mechanism', name:'Custom Match Filter Control',parent:'allExamples',dataProvider:myCompanyNameSpace.Employee.getAllEmployees()},
    { id: 'ColumnLockModes',  description:'This example demonstrates support for various column lock modes, left locked, right locked and ' +
        'unlocked columns' , name:'Column Lock Modes',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList()},
    { id: 'SpinnerExample',  description:'This example demonstrates support for customization of the loading ' +
        'spinner component' , name:'Spinner Example',parent:'allExamples' },
    { id: 'StylesDemo',  description:'This example demonstrates support for customization of the pager bar ' +
        '(toolbar)' , name:'Custom Toolbar',parent:'allExamples',dataProvider:null,styles:myCompanyNameSpace.styledPager_gridstyle},
    { id: 'LargeDynamicGrid',  description:'This example demonstrates support for a large number of columns and rows' +
        '' , name:'Large Dynamic Grid',parent:'allExamples',dataProvider:null},
    { id: 'DynamicLevels',  description:'This example demonstrates the concept of dynamic levels, where the hierarchical levels are created ' +
        'on basis of the data at runtime, as opposed to in markup at compile time.' , name:'Dynamic Levels',parent:'allExamples',dataProvider:null},
    { id: 'IconColumns', name:'Icon Columns',  description:'This example demonstrates support for icons as well as showing icons by default,' +
        'on row rollover, or on cell rollover' , parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getFlatOrgList()},
    { id: 'ErrorHandling', name:'Error Handling',  description:'This example demonstrates support for error handling and highlighting the ' +
        'cells as well as the rows that are in an error state.',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList()},
    { id: 'DynamicGrouping',  description:'This example shows how to group data dynamically on basis of ' +
        'a property chosen by the user.' , name:'Dynamic Grouping',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList(),showIFrame:true,iframeWidth:800,iframeHeight:50},
    { id: 'SelectionUI1',  description:'This example demonstrates support changing the column in which the disclosure icon ' +
        '(expand collapse icon) appears.' , name:'Selection UI 1',parent:'allExamples',dataProvider:myCompanyNameSpace.SampleData.sampleNestedData},
    { id: 'SelectionUI2',  description:'This example demonstrates support changing the column in which the disclosure icon ' +
        '(expand collapse icon) appears, as well as showing labels along side the default checkboxes.', name:'Selection UI 2',parent:'allExamples',dataProvider:myCompanyNameSpace.SampleData.networkData},
    { id: 'ExternalFilter',  description:'This example demonstrates support applying an external filter to the ' +
        'grid.', name:'External Filter',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList(),showIFrame:true,iframeWidth:800,iframeHeight:50},
    { id: 'ChangeTrackingAPI',  description:'This example demonstrates the Change Tracking API. The grid tracks changes to the ' +
        'underlying data provider via the cell editors. This can be then used to synchroize with the backend datastore.', name:'Change Tracking API',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList(),showIFrame:true,iframeWidth:800,iframeHeight:150},
    { id: 'RowSpanColSpan', name:'Row Span Col Span',  description:'This example demonstrates support for Row and Column Spans' +
        'via the usage of colSpanFunction and rowSpanFunction',parent:'allExamples',dataProvider:null,showIFrame:true,iframeWidth:800,iframeHeight:50},
    { id: 'TraderView', name:'Trader View',  description:'This example demonstrates refreshing the grid with ' +
        'rapidly changing data.',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList(),showIFrame:true,iframeWidth:800,iframeHeight:50},
    { id: 'VariableRowHeight',  description:'This example demonstrates support for dynamic row height that is calculated on basis' +
        'of the underlying data.', name:'Variable Row Height',parent:'allExamples',dataProvider:myCompanyNameSpace.SampleData.bookData},
    { id: 'SelectionOptions',  description:'This example demonstrates support for a number of selection as well as state ' +
        'maintenance scenarios.', name:'Selection Options',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList(),showIFrame:true,iframeWidth:800,iframeHeight:200},
//    { id: 'AdvancedServerGrid', name:'Advanced Server Grid',parent:'allExamples',dataProvider:myCompanyNameSpace.FlexiciousMockGenerator.instance().getDeepOrgList()},
    { id: 'FilterComboBoxDataProvider',  description:'This example demonstrates how to provide a custom data provider for the ' +
        'filter combobox.', name:'Filter ComboBox DataProvider',parent:'allExamples',dataProvider:null},
    { id: 'Localization',  description:'This example demonstrates how to customize various places in the grid where we render' +
        'text.', name:'Localization',parent:'allExamples',dataProvider:myCompanyNameSpace.Employee.getAllEmployees()},
    { id: 'OnlyOneItemOpen',  description:'This example demonstrates how to collapse all other items when a ' +
        'node is opened', name:'Only One Item Open',parent:'allExamples',dataProvider:null},
    { id: 'SortNumeric',  description:'This example demonstrates how to sort string data on a numeric basis' +
        '', name:'SortNumeric',parent:'allExamples',dataProvider:myCompanyNameSpace.sortNumeric_ArrCol},
    { id: 'VirtualScrollTest',  description:'This example demonstrates support for hierarchical ' +
        'virtual scroll.', name:'Virtual Scroll Test',parent:'allExamples',dataProvider:null},
    { id: 'MultiSelectSetFilterValue',  description:'This example demonstrates prepopulating filter values.', name:'Multi Select SetFilter Value',parent:'allExamples',dataProvider:myCompanyNameSpace.multiSelectSetFilterValue_arrColl,showIFrame:true,iframeWidth:800,iframeHeight:50},
    { id: 'VariableHeaderRowHeight',  description:'This example demonstrates support for headers of a dynamic size, where' +
        ' the size of the header is determined dynamically on basis of the header text and column width.', name:'Variable Header Row Height',parent:'allExamples',dataProvider:myCompanyNameSpace.variableHeaderRowHeight_arrColl},
    { id: 'MultipleGrouping_Manual',  description:'This example demonstrates transposing a flat dataprovider into a hierarchica one while ' +
        'at the same time gathering data to render at parent levels.', name:'Multiple Grouping Manual',parent:'allExamples',dataProvider:myCompanyNameSpace.multipleGrouping_Manual_dpFlat},
    { id: 'CustomFooter',  description:'This example demonstrates support for creating dynamic column footers' +
        '', name:'Custom Footer',parent:'allExamples',dataProvider:myCompanyNameSpace.Employee.getAllEmployees()},
    { id: 'ColumnWidthMode',  description:'This example demonstrates support for various column lock modes, none,fixed,percent,and fitToContent', name:'Column Width Mode',parent:'allExamples',dataProvider:myCompanyNameSpace.Employee.getAllEmployees()}
];

myCompanyNameSpace.reloadConfig=function() {
    var cc=myCompanyNameSpace.currentConfig;
    myCompanyNameSpace.loadExample(cc[0],cc[1],cc[2],cc[3],cc[4],cc[5]);
};
myCompanyNameSpace.loadExample=function(config, dp,loadHtml,iframeWidth,iframeHeight,styles) {
    myCompanyNameSpace.currentConfig=[config, dp,loadHtml,iframeWidth,iframeHeight,styles];
    if (grid && grid.domElement && grid.domElement.parentNode){
        var domParent = grid.domElement.parentNode;
        var domElement = grid.domElement;
        grid.kill();
        domElement.innerHTML="";
        domElement.style.width="99%";
        domElement.style.height="99%";
        flexiciousNmsp.UIUtils.addChild(domParent,domElement);//because kill removes from dom.
    }
    grid = new flexiciousNmsp.FlexDataGrid(document.getElementById("gridContainer"),
        {
            dataProvider:dp,
            configuration:myCompanyNameSpace.SAMPLE_CONFIGS[config],
            styles:styles
        });

    //some examples have settings html
    var btnSettings = document.getElementById('btnSettings');
    if(myCompanyNameSpace.openDialog){
        flexiciousNmsp.UIUtils.adapter.removeDialog(myCompanyNameSpace.openDialog);
        myCompanyNameSpace.openDialog=null;
    }
    if(myCompanyNameSpace.currentConfig[2]){
        btnSettings.style.display='';
        myCompanyNameSpace.showSettings();
    }else{
        btnSettings.style.display='none';
    }
    for(var i = 1; i < myCompanyNameSpace.allExamples.length; i++) {
        var item = myCompanyNameSpace.allExamples[i];
        if(item.id==config){
            document.getElementById('lblName').innerHTML=item.name;
            document.getElementById('lblDescription').innerHTML=item.description;
            break;
        }
    }
    var frame=document.getElementById('explanationFrame');
    if(frame)
    frame.src= myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS[config];

    var sourceContainer=document.getElementById('sourceContainer')||document.getElementById('tabs-3');//jquery has some qualms about naming tab chilren
    if(!sourceContainer)return;
    flexiciousNmsp.UIUtils.adapter.ajaxGet(document.getElementById('script_'+config).src, function(result){
        var escaped = result;
        var escaped = result.responseText || result;

        var findReplace = [[/&/g, "&amp;"], [/</g, "&lt;"], [/>/g, "&gt;"], [/"/g, "&quot;"]]
        for(var item in findReplace)
            escaped = escaped.replace(findReplace[item][0], findReplace[item][1]);

        sourceContainer.innerHTML=escaped;
        prettyPrint();
    });
};
myCompanyNameSpace.openDialog=null;
myCompanyNameSpace.showSettings=function(){
    var frame = document.createElement("IFRAME");
    frame.id="exampleHTML";
    if(frame){
        if(myCompanyNameSpace.currentConfig[0]){
            frame.src="examples/js/samples/" + myCompanyNameSpace.currentConfig[0] + ".html";
            frame.style.width="100%";
            frame.style.height=myCompanyNameSpace.currentConfig[4]+"px";
        }else{
            frame.style.width="1px";
            frame.style.height="1px";
        }
    }
    myCompanyNameSpace.openDialog=frame;
    frame.frameBorder=0;
    flexiciousNmsp.UIUtils.adapter.showDialog(frame,document.getElementById('gridContainer'),false,myCompanyNameSpace.currentConfig[3],myCompanyNameSpace.currentConfig[4],"Settings");
    frame.style.width=(myCompanyNameSpace.currentConfig[3]-20)+"px";
};

myCompanyNameSpace.onBodyLoad=function(){
    myCompanyNameSpace.loadExample('Simple',myCompanyNameSpace.FlexiciousMockGenerator.instance().getFlatOrgList());
    myCompanyNameSpace.buildThemes();

    //load example based on query string.
    var result = {}, queryString = location.search.slice(1),
        re = /([^&=]+)=([^&]*)/g, m;
    while (m = re.exec(queryString)) {
        result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    if(result["example"]){
        for(var i = 1; i < myCompanyNameSpace.allExamples.length; i++) {
            var item = myCompanyNameSpace.allExamples[i];
            if(item.name==result["example"]){
                myCompanyNameSpace.loadExample(item.id,item.dataProvider,item.showIFrame,item.iframeWidth,item.iframeHeight,item.styles);
            }
        }
    }

    document.getElementById("loader").style.display = "none";
};

myCompanyNameSpace.buildThemes=function(){
    if(!document.getElementById('themeContainer'))return;
    var html="<div >";
    flexiciousNmsp.themes.forEach(function(thisObject,index) {
        html+="<div id='flexiciousTheme_"+index+"' class='themePreview' style=' float:left;cursor: pointer;' onclick='myCompanyNameSpace.loadTheme("+index+")'>" +
            "<img src='"+flexiciousNmsp.StyleDefaults.defaults.imagesRoot+"/themeicons/"+thisObject.id+"/thumbnail.png'>" +
            " <div style='text-align: center'>"+thisObject.name+"</div>" +
            "</div>";
    });
    html+="</div>";
    document.getElementById('themeContainer').innerHTML=html;
};

myCompanyNameSpace.loadTheme=function(index){
    var theme=flexiciousNmsp.themes[index];
    if(!flexiciousNmsp.StyleDefaults._defaults){
        flexiciousNmsp.StyleDefaults._defaults={};
        flexiciousNmsp.UIUtils.mergeObjects(flexiciousNmsp.StyleDefaults._defaults,flexiciousNmsp.StyleDefaults.defaults);
    }
    var newStyles = {};
    flexiciousNmsp.UIUtils.mergeObjects(newStyles,flexiciousNmsp.StyleDefaults._defaults);
    flexiciousNmsp.UIUtils.mergeObjects(newStyles,theme.styles);
    flexiciousNmsp.UIUtils.mergeObjects(flexiciousNmsp.StyleDefaults.defaults,newStyles);
    myCompanyNameSpace.gotoTab(0);
};
