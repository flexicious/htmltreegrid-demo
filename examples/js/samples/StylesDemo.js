myCompanyNameSpace.SAMPLE_CONFIGS_DETAIL_URLS["StylesDemo"]="http://www.flexicious.com/resources/Ultimate/docs/StylesDemo.htm";

myCompanyNameSpace.styledPager_gridstyle={
    filterColors:0xD8D8D8,
    headerColors:0xD8D8D8,
    alternatingItemColors:[0xE6E6E6,0xFFFFFF],
    headerStyleName: 'headerstyle',
    headerVerticalGridLineColor:0xB2C1CD,
    filterStyleName: 'headerstyle',
    filterVerticalGridLineColor:0xB2C1CD,
    headerDrawTopBorder:false,
    headerHorizontalGridLines:false,
    filterHorizontalGridLines:false,
    verticalGridLines:false,
    pagerColors:[0xFFFFFF,0x81F781],
    pagerRollOverColors:[0xFFFFFF,0x81F781]
};

myCompanyNameSpace.styledPager_creationComplete=function(){
    var _employees=[];
    _employees.push({province:"ON",
        children:[
            {city:"Toronto",cityrep:"Jack Jhonson",email:"jjhonson@email.com",actual:"23564"
                ,estimated:"300000",lastSale:new Date(),created:new Date()},
            {city:"Kingston",cityrep:"Kenneth Parcel",email:"kparcel@email.com",actual:"22586"
                ,estimated:"250000",lastSale:new Date(),created:new Date()},
            {city:"Kitchener",cityrep:"Tracy Jordan",email:"tjordan@email.com",actual:"156222"
                ,estimated:"250000",lastSale:new Date(),created:new Date()}
        ] });
    _employees.push({province:"BC",
        children:[
            {city:"Vancouver",cityrep:"Ann Perkins",email:"aperkins@email.com",actual:"23564"
                ,estimated:"300000",lastSale:new Date(),created:new Date()},
            {city:"Victoria",cityrep:"Ron Swansan",email:"rswanson@email.com",actual:"22586"
                ,estimated:"250000",lastSale:new Date(),created:new Date()},
            {city:"Whistler",cityrep:"Shaun White",email:"swhite@email.com",actual:"156222"
                ,estimated:"250000",lastSale:new Date(),created:new Date()}
        ] });


    grid.setDataProvider(_employees);
};

myCompanyNameSpace.SAMPLE_CONFIGS["StylesDemo"]='<grid creationComplete="myCompanyNameSpace.styledPager_creationComplete"  styleName="myGridStyle"  '+
    '									 forcePagerRow="true" pagerRowHeight="40" >'+
    '			<level childrenField="children" enableFilters="true"  headerHeight="22"'+
    '														headerVerticalGridLineThickness="1" filterRowHeight="30"'+
    '														pagerRenderer="myCompanyNameSpace.PagerControl" >'+
    '				<columns>'+
    '					<column type="checkbox"  />'+
    '					<column headerText="Province" dataField="province" filterControl="TextInput" filterOperation="BeginsWith" />'+
    '					<column headerText="City" dataField="city" filterControl="TextInput" filterOperation="BeginsWith" />'+
    '					<column headerText="City Rep" dataField="cityrep" filterControl="TextInput" filterOperation="BeginsWith"/>'+
    '					<column headerText="Email" dataField="email" filterControl="TextInput" filterOperation="BeginsWith"/>'+
    '					<column headerText="Actual" dataField="actual" filterControl="TextInput" filterOperation="BeginsWith" />'+
    '					<column headerText="Estimated" dataField="estimated" filterControl="TextInput" />'+
    '					<column headerText="Last Sale" dataField="lastSale" filterControl="DateComboBox" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '					<column headerText="Created" dataField="created" filterControl="DateComboBox" labelFunction="flexiciousNmsp.UIUtils.dataGridFormatDateLabelFunction"/>'+
    '				</columns>'+
    '				<nextLevel>'+
    '					<level reusePreviousLevelColumns="true"/>'+
    '				</nextLevel>'+
    '			</level>'+
    '	</grid>';



//The code below is ALL the code in the default pager control (toolbar on top of the grid). It is shown below for you to be able to customize it to meet your needs.:
/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{
    var PagerControl=function(){
        flexiciousNmsp.UIComponent.apply(this,["span"]);
        this.addEventListener(this,flxConstants.EVENT_CLICK,
            function(e){
                if(e.triggerEvent.target.className.indexOf('toolbarButtonIconCell')>=0){
                    if(e.triggerEvent.target.className.indexOf('disabled')>=0)return;
                    var children = uiUtil.adapter.findElementsWithClassName(this.domElement,"toolbarButtonIconCell");
                    var actionIdx = children.indexOf(e.triggerEvent.target);
                    var action = this.grid.toolbarActions[actionIdx];
                    this.grid.runToolbarAction(action,e.triggerEvent.target,this);
                }
            }
        );
        uiUtil.attachClass(this.domElement,"flexiciousGridPager");

        this._pageIndex = 0;
        this._totalRecords=0;
        this._pageSize=10;

        this.level=null;
        this.rowInfo=null;
        this.grid=null;
    };
    var p = PagerControl.prototype= new flexiciousNmsp.UIComponent();
    p.typeName=PagerControl.typeName="PagerControl";
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;
    p.getClassNames=function(){
        return ["PagerControl","UIComponent","IExtendedPager"];
    };
    p.doDispatchEvents=true;
    p.getPageSize=function()
    {
        return this._pageSize;
    };
    p.setPageSize=function (val)
    {
        this._pageSize=val;
    };

    p.getPageIndex=function()
    {
        return this._pageIndex;
    };
    p.setPageIndex=function (val)
    {
        if(this._pageIndex != val){
            this._pageIndex = val;
            this.onPageChanged();
            this.dispatchEvent(new flexiciousNmsp.FlexDataGridEvent("pageIndexChanged"));
        }
    };
    p.setTotalRecords=function(val)
    {
        this._totalRecords = val;
        this.setPageIndex(0);
        this.dispatchEvent( new flexiciousNmsp.FlexDataGridEvent("reset"));
        this.refresh();
    };
    p.getTotalRecords=function (){
        return this._totalRecords;
    };




    /**
     * Default handler for the First Page Navigation Button
     */
    p.onImgFirstClick=function(){
        {
            this._pageIndex = 0;
            this.onPageChanged();
        }

    };
    /**
     * Default handler for the Previous Page Navigation Button
     */
    p.onImgPreviousClick=function(){
        if(this._pageIndex > 0)
        {
            this._pageIndex--;
            this.onPageChanged();
        }

    };
    /**
     * Default handler for the Next Page Navigation Button
     */
    p.onImgNextClick=function(){

        if(this._pageIndex < this.getPageCount()-1)
        {
            this._pageIndex++;
            this.onPageChanged();
        }

    };
    /**
     * Default handler for the Last Page Navigation Button
     */
    p.onImgLastClick=function(){
        if(this._pageIndex < this.getPageCount()-1)
        {
            this._pageIndex = this.getPageCount()-1;
            this.onPageChanged();
        }

    };
    /**
     * Default handler for the Page Change Combo Box
     */
    p.onPageCbxChange=function(evt){
        this._pageIndex = parseInt(evt.target.value)-1;
        this.onPageChanged();

    };
    /**
     * Default handler for the Page Change Event
     */
    p.onPageChanged=function(){
        if(this.getPageDropdown() && (this.getPageDropdown().selectedIndex != (this._pageIndex)))
        {
            this.getPageDropdown().selectedIndex=this._pageIndex;
        }
        if(this.doDispatchEvents)
            this.dispatchEvent(new flexiciousNmsp.ExtendedFilterPageSortChangeEvent(flexiciousNmsp.ExtendedFilterPageSortChangeEvent.PAGE_CHANGE));
    };

    p.onCreationComplete=function(evt){
        //btnSettings.visible=btnSettings.includeInLayout=_grid.enablePreferencePersistence;
        if(this.grid.enableToolbarActions){
            //this.grid.toolbarActions.addEventListener(flexiciousNmsp.ArrayCollection.EVENT_COLLECTION_CHANGE,this.onToolbarActionsChanged);
            this.grid.addEventListener(flexiciousNmsp.FlexDataGridEvent.CHANGE,this.onGridSelectionChange);
            this.createToolbarActions();
        }
    };
    /**
     * Sets the page index to 1(0), dispatches the reset event.
     */
    p.reset=function(){
        this._pageIndex=0;
        this.getPageDropdown().selectedIndex=0;
        this.dispatchEvent(new flexiciousNmsp.FlexDataGridEvent("reset"));
    };
    p.getPageStart=function(){
        return this._totalRecords==0?0:((this._pageIndex)*this._pageSize)+1;

    };
    p.getPageEnd=function(){
        var val= (this._pageIndex+1)*this._pageSize;
        return (val>this._totalRecords)?this._totalRecords:val;

    };
    p.getPageCount=function(){
        return this.getPageSize()>0?Math.ceil(this.getTotalRecords()/this.getPageSize()):0;

    };

    /**
     * Default handler for the Word Export Button. Calls
     * ExtendedExportController.instance().doexport(this.grid,ExportOptions.create(ExportOptions.DOC_EXPORT))
     */
    p.onWordExport=function(){
        this.grid.toolbarWordHandlerFunction();

    };
    /**
     * Default handler for the Word Export Button. Calls
     * ExtendedExportController.instance().doexport(this.grid,ExportOptions.create())
     */
    p.onExcelExport=function(){
        this.grid.toolbarExcelHandlerFunction();

    };
    /**
     * Default handler for the Print Button. Calls
     * var po:PrintOptions=PrintOptions.create();
     * po.printOptionsViewrenderer = new ClassFactory(ExtendedPrintOptionsView);
     * ExtendedPrintController.instance().print(this.grid,po)
     */
    p.onPrint=function(){
        this.grid.toolbarPrintHandlerFunction();

    };
    /**
     * Default handler for the Print Button. Calls
     * var po:PrintOptions=PrintOptions.create(true);
     * po.printOptionsViewrenderer = new ClassFactory(ExtendedPrintOptionsView);
     * ExtendedPrintController.instance().print(this.grid,po)
     */
    p.onPdf=function(){
        this.grid.toolbarPdfHandlerFunction();

    };
    /**
     * Default handler for the Clear Filter Button.
     * Calls grid.clearFilter()
     */
    p.onClearFilter=function(){
        this.grid.clearFilter()

    };
    /**
     * Default handler for the Process Filter Button.
     * Calls grid.processFilter()
     */
    p.onProcessFilter=function(){
        this.grid.processFilter();

    };
    /**
     * Default handler for the Show Hide Filter Button.
     * Calls this.grid.filterVisible=!this.grid.filterVisible;nestedGrid.placeSections()
     */
    p.onShowHideFilter=function(){
        this.grid.setFilterVisible(!this.grid.getFilterVisible());
        this.grid.rebuild()
    };
    /**
     * Default handler for the Show Hide Filter Button.
     * Calls this.grid.filterVisible=!this.grid.filterVisible;nestedGrid.placeSections()
     */
    p.onShowHideFooter=function(){
        this.grid.footerVisible=!this.grid.footerVisible;this.grid.placeSections()
    };
    /**
     * Default handler for the Settings Popup
     * Calls var popup:SaveSettingsPopup=new SaveSettingsPopup();UIUtils.addPopUp(popup,grid as DisplayObject);popup.grid=grid;
     */
    p.onShowSettingsPopup=function(){
        var popup=this.grid.popupFactorySettingsPopup.newInstance();
        popup.setGrid(this.grid);
        uiUtil.addPopUp(popup,this.grid,false,null,"Settings");
    };

    /**
     * Default handler for the OPen Settings Popup
     * Calls var popup:OpenSettingsPopup=new OpenSettingsPopup();UIUtils.addPopUp(popup,grid as DisplayObject);popup.grid=grid;
     */
    p.onOpenSettingsPopup=function(){
        var popup=this.grid.popupFactoryOpenSettingsPopup.newInstance();
        popup.setGrid(this.grid);
        uiUtil.addPopUp(popup,this.grid,false,null,"Open Settings");
    };

    /**
     * Default handler for the Save Settings Popup
     * Calls var popup:SaveSettingsPopup=new SaveSettingsPopup();UIUtils.addPopUp(popup,grid as DisplayObject);popup.grid=grid;
     */
    p.onSaveSettingsPopup=function(){
        var popup=this.grid.popupFactorySaveSettingsPopup.newInstance();
        popup.setGrid(this.grid);
        uiUtil.addPopUp(popup,this.grid,false,null,"Save Settings");
    };
    p.createToolbarActions=function (){

    };

    p.onToolbarActionsChanged=function (event){
        this.createToolbarActions();
    };

    p.onGridSelectionChange=function (event){

    };

    p.toolbarActionFilterFunction=function (item){
        return item.level==this.level.getNestDepth() || item.level==-1;

    };

    p.getPageDropdown=function(){
        return uiUtil.adapter.findElementWithClassName(this.domElement,"pageDropdown");
    };
    p.destroy=function(){
        this.destroyButtons([PagerControl.ACTION_FIRST_PAGE,
            PagerControl.ACTION_FIRST_PAGE,
            PagerControl.ACTION_PREV_PAGE,
            PagerControl.ACTION_NEXT_PAGE,
            PagerControl.ACTION_LAST_PAGE,
            PagerControl.ACTION_SORT,
            PagerControl.ACTION_SETTINGS,
            PagerControl.ACTION_SAVE_SETTINGS,
            PagerControl.ACTION_FILTER_SHOW_HIDE,
            PagerControl.ACTION_RUN_FILTER,
            PagerControl.ACTION_CLEAR_FILTER,
            PagerControl.ACTION_PRINT,
            PagerControl.ACTION_PDF,
            PagerControl.ACTION_WORD,
            PagerControl.ACTION_EXCEL
        ]);
        var pageDropDown=this.getPageDropdown();
        if(pageDropDown){
            pageDropDown.pagerControl=null;
            uiUtil.removeDomEventListener(this.getPageDropdown(),"change",onPageDropdownChange)
        }
    };


    p.addToolbarActionsHTML=function () {
        var html="";
        for (var i = 0; i < this.grid.toolbarActions.length; i++) {
            var tca = this.grid.toolbarActions[i];
            html+=(tca.seperatorBefore?"<span  class='pagerDiv separatorCell'>|</span>":"");
            html+=("<span valign='middle' class='pagerDiv iconCell toolbarButtonIconCell'  title='"+tca.tooltip+"'" + (tca.iconUrl?"style='background: transparent url(" + tca.iconUrl + ") no-repeat left center;padding-left:20px' >":">")+ tca.name +  "</span>");
            html+=(tca.seperatorAfter?"<span  class='pagerDiv separatorCell'>|</span>":"")
        }
        return html;
    };

    p.updateDisplayList=function(w,h){
        this.destroy();
        var html="<span class='pagerTable' style='float: left;height:"+this.getHeight()+"px'>" +
            (this.level.enablePaging?"<span  class='pagerDiv pageInfo'></span>" :"")+
            (this.level.enablePaging?"<span  class='pagerDiv toolbarButtonDiv'>|</span>":"")+
            (this.level.enablePaging?"<span  class='pagerDiv iconCell firstPage'><img alt='First Page' tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/firstPage.png' class='imageButtonFirstPage' alt='"+flxConstants.PGR_BTN_FIRST_PAGE_TOOLTIP+"' title='"+flxConstants.PGR_BTN_FIRST_PAGE_TOOLTIP+"'></span>":"")+
            (this.level.enablePaging?"<span  class='pagerDiv iconCell prevPage'><img alt='Previous Page' tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/prevPage.png' class='imageButtonPrevPage' alt='"+flxConstants.PGR_BTN_PREV_PAGE_TOOLTIP+"' title='"+flxConstants.PGR_BTN_PREV_PAGE_TOOLTIP+"'></span>":"")+
            (this.level.enablePaging?"<span  class='pagerDiv iconCell nextPage'><img alt='Next Page' tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/nextPage.png' class='imageButtonNextPage' alt='"+flxConstants.PGR_BTN_NEXT_PAGE_TOOLTIP+"' title='"+flxConstants.PGR_BTN_NEXT_PAGE_TOOLTIP+"'></span>":"")+
            (this.level.enablePaging?"<span  class='pagerDiv iconCell lastPage'><img alt='Last Page' tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/lastPage.png' class='imageButtonLastPage' alt='"+flxConstants.PGR_BTN_LAST_PAGE_TOOLTIP+"' title='"+flxConstants.PGR_BTN_LAST_PAGE_TOOLTIP+"'></span>":"")+
            (this.level.enablePaging?"<span  class='pagerDiv separatorCell'>|</span>":"")+
            (this.level.enablePaging?"<span  class='pagerDiv iconCell gotoPage'>"+flexiciousNmsp.Constants.PGR_LBL_GOTO_PAGE_TEXT+" <select class='pageDropdown'> </select> </span>":"")+
            (this.level.enablePaging?"<span  class='pagerDiv separatorCell'>|</span>":"")+
            "</span>";
        html+="<span class='pagerTable' style='float: right;height:"+this.getHeight()+"px'>" +
            this.addToolbarActionsHTML() ;

        if(this.level.getNestDepth()==1){
            html+=(this.grid.enableDrillDown?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/collapseOne.png' class='imageButtonExpandUp' alt='"+flxConstants.PGR_BTN_EXP_ONE_UP_TOOLTIP+"' title='"+flxConstants.PGR_BTN_EXP_ONE_UP_TOOLTIP+"'></span>":"")+
                (this.grid.enableDrillDown?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/expandOne.png' class='imageButtonExpandDown' alt='"+flxConstants.PGR_BTN_EXP_ONE_DOWN_TOOLTIP+"' title='"+flxConstants.PGR_BTN_EXP_ONE_DOWN_TOOLTIP+"'></span>":"")+
                (this.grid.enableDrillDown?"<span  class='pagerDiv  separatorCell'>|</span>":"")+
                (this.grid.enableDrillDown?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/collapseAll.png' class='imageButtonCollapseAll' alt='"+flxConstants.PGR_BTN_COLLAPSE_ALL_TOOLTIP+"' title='"+flxConstants.PGR_BTN_COLLAPSE_ALL_TOOLTIP+"'></span>":"")+
                (this.grid.enableDrillDown?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/expandAll.png' class='imageButtonExpandAll' alt='"+flxConstants.PGR_BTN_EXP_ALL_TOOLTIP+"' title='"+flxConstants.PGR_BTN_EXP_ALL_TOOLTIP+"'></span>":"")+
                (this.grid.enableDrillDown?"<span  class='pagerDiv  separatorCell'>|</span>":"")+

                (this.grid.enableMultiColumnSort?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/sort.png' class='imageButtonSort' alt='"+flxConstants.PGR_BTN_SORT_TOOLTIP+"' title='"+flxConstants.PGR_BTN_SORT_TOOLTIP+"'></span>":"")+
                (this.grid.enableMultiColumnSort?"<span  class='pagerDiv  separatorCell'>|</span>":"")+
                (this.grid.enablePreferencePersistence?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/settings.png' class='imageButtonSettings' alt='"+flxConstants.PGR_BTN_SETTINGS_TOOLTIP+"' title='"+flxConstants.PGR_BTN_SETTINGS_TOOLTIP+"'></span>":"")+
                (this.grid.enablePreferencePersistence?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/openSettings.png' class='imageButtonOpenSettings' alt='"+flxConstants.PGR_BTN_OPEN_SETTINGS_TOOLTIP+"' title='"+flxConstants.PGR_BTN_OPEN_SETTINGS_TOOLTIP+"'></span>":"")+
                (this.grid.enablePreferencePersistence?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/saveSettings.png' class='imageButtonSaveSettings' alt='"+flxConstants.PGR_BTN_SAVE_SETTINGS_TOOLTIP+"' title='"+flxConstants.PGR_BTN_SAVE_SETTINGS_TOOLTIP+"'></span>":"")+
                (this.grid.enablePreferencePersistence?"<span  class='pagerDiv  separatorCell'>|</span>":"")+
                (this.level.getEnableFilters()?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/filterShowHide.png' class='imageButtonFilterShowHide' alt='"+flxConstants.PGR_BTN_FILTER_TOOLTIP+"' title='"+flxConstants.PGR_BTN_FILTER_TOOLTIP+"r'></span>":"")+
                (this.level.getEnableFilters()?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/filter.png' class='imageButtonFilter' alt='"+flxConstants.PGR_BTN_RUN_FILTER_TOOLTIP+"' title='"+flxConstants.PGR_BTN_RUN_FILTER_TOOLTIP+"'></span>":"")+
                (this.level.getEnableFilters()?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/clearFilter.png' class='imageButtonClearFilter' alt='"+flxConstants.PGR_BTN_CLEAR_FILTER_TOOLTIP+"' title='"+flxConstants.PGR_BTN_CLEAR_FILTER_TOOLTIP+"'></span>":"")+
                (this.level.getEnableFilters()?"<span  class='pagerDiv  separatorCell'>|</span>":"")+
                (this.grid.enablePrint?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/print.png' class='imageButtonPrint' alt='"+flxConstants.PGR_BTN_PRINT_TOOLTIP+"' title='"+flxConstants.PGR_BTN_PRINT_TOOLTIP+"'></span>":"")+
                //(this.grid.enablePdf?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/pdf.png' class='imageButtonPdf' alt='"+flxConstants.PGR_BTN_PDF_TOOLTIP+"' title='"+flxConstants.PGR_BTN_PDF_TOOLTIP+"'></span>":"")+
                (this.grid.enablePrint||this.level.enablePdf?"<span  class='pagerDiv  separatorCell'>|</span>":"")+
                (this.grid.enableExport?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/word.png' class='imageButtonWord' alt='"+flxConstants.PGR_BTN_WORD_TOOLTIP+"' title='"+flxConstants.PGR_BTN_WORD_TOOLTIP+"'></span>":"")+
                (this.grid.enableExport?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + flexiciousNmsp.Constants.IMAGE_PATH + "/export.png' class='imageButtonExcel' alt='"+flxConstants.PGR_BTN_EXCEL_TOOLTIP+"' title='"+flxConstants.PGR_BTN_EXCEL_TOOLTIP+"'></span>":"")+
                (this.grid.enableExport?"<div claes='pagerDiv  '>|</span>":"")+
                "</span>";

        };
        this.setInnerHTML(html);
        this.initializeButtons([PagerControl.ACTION_FIRST_PAGE,
            PagerControl.ACTION_FIRST_PAGE,
            PagerControl.ACTION_PREV_PAGE,
            PagerControl.ACTION_NEXT_PAGE,
            PagerControl.ACTION_LAST_PAGE,
            PagerControl.ACTION_SORT,
            PagerControl.ACTION_SETTINGS,
            PagerControl.ACTION_OPEN_SETTINGS,
            PagerControl.ACTION_SAVE_SETTINGS,
            PagerControl.ACTION_OPEN_SETTINGS,
            PagerControl.ACTION_FILTER_SHOW_HIDE,
            PagerControl.ACTION_RUN_FILTER,
            PagerControl.ACTION_CLEAR_FILTER,
            PagerControl.ACTION_PRINT,
            PagerControl.ACTION_PDF,
            PagerControl.ACTION_WORD,
            PagerControl.ACTION_EXCEL,
            PagerControl.ACTION_EXPAND_UP,
            PagerControl.ACTION_EXPAND_ALL,
            PagerControl.ACTION_EXPAND_DOWN,
            PagerControl.ACTION_COLLAPSE_ALL
        ]);
        if(this.level.enablePaging){
            this.getPageDropdown().pagerControl=this;
            uiUtil.addDomEventListener(this,this.getPageDropdown(),"change",onPageDropdownChange)
        }
        this.refresh();
        flexiciousNmsp.UIComponent.prototype.updateDisplayList.apply(this,[w,h]);

    };
    p.enableDisableButton=function(button, enabled) {
        button.enabled = enabled;
        if (!button.enabled){
            uiUtil.attachClass(button, "disabled")
            var img = uiUtil.adapter.findFirstElementByTagName(button,"IMG");
            if(img){
                uiUtil.detachClass(img, "over");
                //this.grid.domElement.focus();
            }
        }
        else
            uiUtil.detachClass(button, "disabled")
    };
    p.rebuild=function(){
        this.invalidateDisplayList();
    };
    p.refresh=function(){
        var children = uiUtil.adapter.findElementsWithClassName(this.domElement,"toolbarButtonIconCell");
        for (var i = 0; i < children.length; i++) {
            var button = children[i];
            var action=this.grid.toolbarActions[i];
            this.enableDisableButton(button, this.grid.isToolbarActionValid(action, button, this));
            var iconUrl=action.iconUrl;
            if(!button.enabled && action.disabledIconUrl){
                iconUrl=action.disabledIconUrl;
            }
            button.style.background="background: transparent url(" + iconUrl + ") no-repeat left center";
        }

        var pageInfo=uiUtil.adapter.findElementWithClassName(this.domElement,'pageInfo');
        if(pageInfo)
            pageInfo.innerHTML=flxConstants.PGR_ITEMS+" "+this.getPageStart()+" "+flxConstants.PGR_TO+" "+this.getPageEnd()+" "+flxConstants.PGR_OF+" "+this.getTotalRecords()
                +". "+flxConstants.PGR_PAGE+" "+(this.getPageIndex()+1)+" "+flxConstants.PGR_OF+" "+this.getPageCount();
        var firstPage = uiUtil.adapter.findElementWithClassName(this.domElement,'firstPage');
        if(firstPage)
            this.enableDisableButton(firstPage, this.getPageIndex()>0);
        var prevPage = uiUtil.adapter.findElementWithClassName(this.domElement,'prevPage');
        if(prevPage)
            this.enableDisableButton(prevPage, this.getPageIndex()>0);
        var nextPage = uiUtil.adapter.findElementWithClassName(this.domElement,'nextPage');
        if(nextPage)
            this.enableDisableButton(nextPage, this.getPageIndex() < (this.getPageCount()-1));
        var lastPage = uiUtil.adapter.findElementWithClassName(this.domElement,'lastPage');
        if(lastPage)
            this.enableDisableButton(lastPage, this.getPageIndex() < (this.getPageCount()-1));
        if(this.getPageDropdown()){
            var options="";
            for(var i=1;i<=this.getPageCount();i++){
                options+="<option value="+i+" " + ((this.getPageIndex()+1==i)?'selected':'') + ">"+i+"</option>"
            }
            this.getPageDropdown().innerHTML=options;
        }
    };


    PagerControl.ACTION_FIRST_PAGE="firstPage";
    PagerControl.ACTION_PREV_PAGE="prevPage";
    PagerControl.ACTION_NEXT_PAGE="nextPage";
    PagerControl.ACTION_LAST_PAGE="lastPage";
    PagerControl.ACTION_SORT="sort";
    PagerControl.ACTION_SETTINGS="settings";
    PagerControl.ACTION_OPEN_SETTINGS="openSettings";
    PagerControl.ACTION_SAVE_SETTINGS="saveSettings";
    PagerControl.ACTION_FILTER_SHOW_HIDE="filterShowHide";
    PagerControl.ACTION_RUN_FILTER="filter";
    PagerControl.ACTION_CLEAR_FILTER="clearFilter";
    PagerControl.ACTION_PRINT="print";
    PagerControl.ACTION_PDF="pdf";
    PagerControl.ACTION_WORD="word";
    PagerControl.ACTION_EXCEL="excel";
    PagerControl.ACTION_EXPAND_DOWN="expandDown";
    PagerControl.ACTION_EXPAND_UP="expandUp";
    PagerControl.ACTION_EXPAND_ALL="expandAll";
    PagerControl.ACTION_COLLAPSE_ALL="collapseAll";


    var imageButtonMouseOver=function(evt){
        var target = evt.currentTarget || evt.srcElement;
        if(target.parentNode.className.indexOf("disabled")>=0)return;
        if(target.className.indexOf("over")==-1)target.className="over";
    }
    var imageButtonMouseOut=function(evt){
        var target = evt.currentTarget || evt.srcElement;
        if(target.parentNode.className.indexOf("disabled")>=0)return;
        if(target.className.indexOf("over")!=-1)target.className=target.className.replace("over","");
    };
    var imageButtonClick=function(evt){
        var target = evt.currentTarget || evt.srcElement;
        if(target.parentNode.className.indexOf("disabled")>=0)return;
        target.pagerControl.processAction(target.code);
    };
    var onPageDropdownChange=function(evt){
        var target = evt.currentTarget || evt.srcElement;
        var pageIndex = target.value;
        var pagerControl= target.pagerControl;
        pagerControl.setPageIndex(parseInt(target.value)-1);
    };

    p.destroyButtons=function(arr){
        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
            var img=uiUtil.adapter.findElementWithClassName(this.domElement,"imageButton"+uiUtil.doCap(obj));
            if(img){
                img.code=obj;
                uiUtil.removeDomEventListener(img,"mouseover",imageButtonMouseOver)
                uiUtil.removeDomEventListener(img,"mouseout",imageButtonMouseOut)
                uiUtil.removeDomEventListener(img,"click",imageButtonClick);
                img.pagerControl=null;
            }
        }
    }
    p.initializeButtons=function(arr){
        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
            var img=uiUtil.adapter.findElementWithClassName(this.domElement,"imageButton"+uiUtil.doCap(obj));
            if(img){
                img.code=obj;
                uiUtil.addDomEventListener(this,img,"mouseover",imageButtonMouseOver)
                uiUtil.addDomEventListener(this,img,"mouseout",imageButtonMouseOut)
                uiUtil.addDomEventListener(this,img,"click",imageButtonClick)
                img.pagerControl=this;
            }
        }
    }

    p.processAction=function(code){
        if(code==PagerControl.ACTION_FIRST_PAGE){
            this.onImgFirstClick();
        }else if(code==PagerControl.ACTION_PREV_PAGE){
            this.onImgPreviousClick();
        }else if(code==PagerControl.ACTION_NEXT_PAGE){
            this.onImgNextClick();
        }else if(code==PagerControl.ACTION_LAST_PAGE){
            this.onImgLastClick();
        }else if(code==PagerControl.ACTION_SETTINGS){
            this.onShowSettingsPopup();
        }else if(code==PagerControl.ACTION_OPEN_SETTINGS){
            this.onOpenSettingsPopup();
        }else if(code==PagerControl.ACTION_SAVE_SETTINGS){
            this.onSaveSettingsPopup();
        }else if(code==PagerControl.ACTION_CLEAR_FILTER){
            this.onClearFilter();
        }else if(code==PagerControl.ACTION_EXCEL){
            this.onExcelExport();
        }else if(code==PagerControl.ACTION_FILTER_SHOW_HIDE){
            this.onShowHideFilter();
        }else if(code==PagerControl.ACTION_PDF){
            this.onPdf();
        }else if(code==PagerControl.ACTION_PRINT){
            this.onPrint();
        }else if(code==PagerControl.ACTION_RUN_FILTER){
            this.onProcessFilter();
        }else if(code==PagerControl.ACTION_SORT){
            this.grid.multiColumnSortShowPopup();
        }else if(code==PagerControl.ACTION_WORD){
            this.onWordExport();
        }else if(code==PagerControl.ACTION_EXPAND_ALL){
            this.grid.expandAll();
        }else if(code==PagerControl.ACTION_EXPAND_UP){
            this.grid.expandUp();
        }else if(code==PagerControl.ACTION_EXPAND_DOWN){
            this.grid.expandDown();
        }else if(code==PagerControl.ACTION_COLLAPSE_ALL){
            this.grid.collapseAll();
        }

        this.refresh();
    };
    /**
     * Initializes the auto complete and watermark plugins
     */
    p.initialize=function(){
        flexiciousNmsp.UIComponent.prototype.initialize.apply(this);
        this.grid.addEventListener(this,flexiciousNmsp.FlexDataGrid.EVENT_CHANGE,this.refresh);
    };
    p.kill=function(){
        if(this.dead)return;
        this.destroy();

        flexiciousNmsp.UIComponent.prototype.kill.apply(this);
        this.level=null;
        this.rowInfo=null;
        this.grid=null;
    };
    myCompanyNameSpace.PagerControl = PagerControl;
}(window));