


/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function () {

    "use strict";
    var DojoAdapter;
    /**
     * A utility class that maps utility functions from Flexicious into JQuery
     * @constructor
     * @namespace com.flexicious.adapters
     */
    DojoAdapter = function () {
        flexiciousNmsp.Constants.DEFAULT_DATE_FORMAT = "MMMM-dd-yyyy";
        flexiciousNmsp.Constants.SHORT_DATE_MASK = "MM/dd/yy";
        flexiciousNmsp.Constants.MEDIUM_DATE_MASK = "MMMM dd, yyyy";
        flexiciousNmsp.Constants.LONG_DATE_MASK = "MMMM d, yyyy";
        flexiciousNmsp.Constants.FULL_DATE_MASK = "EEEE, MMMM d yyyy";
        flexiciousNmsp.Constants.SHORT_TIME_MASK = "h:m:s a";
        flexiciousNmsp.Constants.MEDIUM_TIME_MASK = "h:m:s a";
        flexiciousNmsp.Constants.YMD_MASK = "yyyy-MM-dd";
        flexiciousNmsp.Constants.LONG_TIME_MASK = flexiciousNmsp.Constants.MEDIUM_TIME_MASK + " ZZZZ";
        require(['dojo/date/locale',"dojo/query",'dojo/NodeList-traverse'], function(locale,query,traverse) {

        });
    };
    flexiciousNmsp.DojoAdapter = DojoAdapter; //add to name space
    DojoAdapter.prototype.typeName = DojoAdapter.typeName = "DojoAdapter";//for quick inspection
    DojoAdapter.prototype.getClassNames = function () { //for support of "is" keyword
        return ["TypedObject", this.typeName];
    };

    /**
     * Calls the Jquery html method on the parent, passing in innner html.
     * @param parent
     * @param innerHTML
     */
    DojoAdapter.prototype.setHtml = function (parent, innerHTML) {
        //$(parent).html(innerHTML);
        require(["dojo/html"], function(html){
            html.set(node, innerHTML);
        });
    };
    /**
     * Gets the child element of gridDiv that has the specified class name.
     * There must be at least one div with that class name otherwise this method will throw an error.
     * @param gridDiv   The div to search
     * @param className The class to search
     */
    DojoAdapter.prototype.getElementByClassName = function( gridDiv, className) {
        return this.findElementWithClassName(gridDiv,className);
    };
    DojoAdapter.prototype.addChild = function (parent, child) {
        require(["dojo/dom-construct"], function(domConstruct){
            domConstruct.place(child, parent, 'last');
        });
    };
    DojoAdapter.prototype.insertBefore = function (child, refChild) {
        require(["dojo/dom-construct"], function(domConstruct){
            domConstruct.place(child, refChild, 'before');
        });
    };
    DojoAdapter.prototype.removeChild = function (parent, child) {

        require(["dojo/query"], function(query, dom){
             query(child).orphan();
        });
    };


    DojoAdapter.prototype.findElementWithClassName = function (parent, containerClassName) {
        var retVal;
        require(["dojo/query"], function(query, dom){
            retVal = query("."+containerClassName, parent);
        });
        return retVal[0];
    };

    DojoAdapter.prototype.findElementsWithClassName = function (parent, containerClassName) {
        var retVal;
        require(["dojo/query"], function(query, dom){
            retVal = query("."+containerClassName, parent);
        });
        return retVal;
    };

    DojoAdapter.prototype.findFirstElementByTagName = function (parent, tagName) {
        var retVal;
        require(["dojo/query"], function(query, dom){
            retVal = query('>' + tagName, parent);
        });
        return retVal[0];
    };

    DojoAdapter.prototype.isIE = function () {
        return dojo.isIE;
    };

    DojoAdapter.prototype.isMoz = function () {
        return dojo.isMozilla;
    };

    DojoAdapter.prototype.isWebKit = function () {
        return dojo.isWebKit;
    };
    DojoAdapter.prototype.showDialog=function(elem,parent,modal,w,h,title){

        var style="";
        if(w)
        style+="width: "+(w+10)+"px;"
        require(["dojo/ready", "dijit/Dialog"], function(ready, Dialog){
            ready(function(){
                var myDialog = new Dialog({
                    title: title,
                    content: elem,
                    style: style
                });
                elem.dialog=myDialog;
                myDialog.show();
                if(!modal)
                    dojo.style(dijit._underlay.domNode, 'display', 'none');
            });
        });
    };

    DojoAdapter.prototype.setDialogTitle=function(elem,title){
        //elem.dialog.set("title", title);
    };

    DojoAdapter.prototype.removeDialog=function(elem){
        elem.dialog.hide();
    };
    DojoAdapter.prototype.buildUl=function(cols,menu,onMenuItemClick,menuTrigger,button){
        var that=this;
        require(["dijit/Menu", "dijit/MenuItem", "dijit/MenuSeparator", "dijit/PopupMenuItem"], function(Menu, MenuItem, MenuSeparator, PopupMenuItem){
            for (var j=0;j<cols.length;j++){
                if(cols[j].type=='separator'){
                    menu.addChild(new MenuSeparator());
                }else if(cols[j].children&&cols[j].children.length>0){
                    var subMenu= new Menu();
                    var subMenuItems  = [];
                    that.buildUl(cols[j].children,subMenu,onMenuItemClick,menuTrigger,button);
                    menu.addChild(new PopupMenuItem({
                        label:cols[j].label,
                        data:cols[j].data,
                        popup: subMenu
                    }));
                }else{
                    menu.addChild(new MenuItem({
                        label:cols[j].label,
                        data:cols[j].data,
                        onClick: function(){
                            button.set('label',this.label);
                            onMenuItemClick([menuTrigger],{uniqueIdentifier:this.data});
                        }
                    }));
                }
            }
        });
        return menu;
    };
    DojoAdapter.prototype.createMenu=function(menuItems,menuTrigger,onMenuItemClick){;
        var that=this;
        var label=menuTrigger.innerHTML;
        menuTrigger.innerHTML="";
        require(["dojo/ready", "dijit/Menu", "dijit/MenuItem", "dijit/form/ComboButton","dojo/dom-construct"], function(ready, Menu, MenuItem, ComboButton,domConstruct){
            ready(function(){
                var menu = new Menu({ style: "display: none;"});
                var button = new ComboButton({
                    label : label,
                    dropDown: menu
                });
                that.buildUl(menuItems,menu,onMenuItemClick,menuTrigger,button);
                button.placeAt(menuTrigger);
            });
        });
    };

    DojoAdapter.prototype.destroyMenu=function(trigger){
        //$(trigger).remove();
    };
    DojoAdapter.prototype.createDateTimePickerEditor=function(datePicker,dateFormat,dflt,changeHandler,removeOriginal){
        this.createDateTimePicker(datePicker.getTextBox(),dateFormat,dflt,changeHandler,removeOriginal);
        datePicker.getOutsideIcon().style.display ="none";
        datePicker.getInsideIcon().style.display ="none";
        datePicker.getTextBox().style.width = datePicker.getWidth() + "px";
        //domElement.domElement.style.display ="none";
    }
    DojoAdapter.prototype.createDateTimePicker=function(domElement,dateFormat,dflt,changeHandler,removeOriginal){

        var newChild= document.createElement("div");
        this.addChild(domElement.parentNode,newChild);
        newChild.style=domElement.style;
        var w=(domElement.offsetWidth-25)+"px";
        newChild.style.width=w;
        if(removeOriginal){
            this.removeChild(domElement.parentNode,domElement);
        }
        else{
            domElement.style.display ="none";
        }
       require(["dojo/ready", "dijit/form/DateTextBox"], function(ready, DateTextBox){
            ready(function(){
                // Create a button programmatically:
                var dateTextBox = new DateTextBox({
                    constraints: { datePattern : dateFormat }
                    , promptMessage: dateFormat
                    , invalidMessage: "Invalid date format. Use " + dateFormat
                    ,value: dflt
                    ,onChange : function ( ){
                        if(changeHandler!=null)
                            changeHandler(this.value);
                    }
                }, newChild);
                dateTextBox.focus();
                dateTextBox.attr("style",{width:w});
            });
        });
    };



    DojoAdapter.prototype.setupAutoComplete = function (input, options) {
            //not supported
    };

    DojoAdapter.prototype.setupInputMask = function(input,options){
        //not supported
    };

    DojoAdapter.prototype.setupWaterMark=function(input,options){
        //not supported
    };

    DojoAdapter.prototype.offset=function(elem){
        if(elem==document){
            return {top:0,left:0};
        }
        //return $(elem).offset()
        var retval;
        require(["dojo/dom-geometry", "dojo/dom", "dojo/dom-style"], function(domGeom, dom, style){
            var includeScroll = false;
            retval = domGeom.position(elem, includeScroll);
        });
        retval.top=retval.y;
        retval.left=retval.x;
        return retval;
    };

    DojoAdapter.prototype.getCurrentDatePicker=function(){
        return null;
    };

    DojoAdapter.prototype.getDateValue=function(dateStr,dateFormat){
        var retVal;
        require(['dojo/date/locale'], function(locale) {
            retVal=locale.parse(dateStr, {datePattern: dateFormat, selector: "date"})
        });

        return retVal;
    };

    DojoAdapter.prototype.formatDate=function(date,dateFormat){
        var retVal;
        require(['dojo/date/locale'], function(locale) {
            retVal=locale.format(date, {datePattern: dateFormat, selector: "date"})
        });

        return retVal;
    };

    DojoAdapter.prototype.isDatePickerElement=function(elem){
        if(elem.tagName=="OPTION")return true;//sometimes this does not get you the ancestor.
        var ans=this.findAncestorByClassName(elem,"dijitCalendarPopup");

        return (ans?ans:false);
    };

    DojoAdapter.prototype.setText=function(elem,text){
        return  elem.innerText=text;
    };
    DojoAdapter.prototype.setHtml=function(elem,html){
        require(["dojo/dom-prop", "dojo/dom"],
            function(domProp, dom){
            domProp.set(elem, "innerHTML", html);
        });
    };
    DojoAdapter.prototype.findAncestorByClassName=function(elem,className){
        //return $(elem).closest('.'+className)[0];
        var retVal;
        require(["dojo/query",'dojo/NodeList-traverse'], function(query, dom){
            retVal = query(elem).parents('.'+className).first();

        });
        return retVal?retVal[0]:null;
    }



    DojoAdapter.prototype.showTooltip=function(relativeTo, tooltip, dataContext,point,leftOffset,
                                                 topOffset,offScreenMath,where,container,bounds){
        flexiciousNmsp.position.processCommand((tooltip.domElement||tooltip),"processElement", {"my":"right top","at":where+" bottom","of":(relativeTo.domElement||relativeTo),"collision":"fit"
            ,"within":(bounds.domElement||bounds) });
    };

    DojoAdapter.prototype.positionComponent=function(domElementRelativeTo, domElementToPosition, my, at, leftOffset,topOffset){

        if(!my)my="left top";
        if(!at)at="left bottom";
        domElementToPosition=(domElementToPosition.domElement||domElementToPosition);
        flexiciousNmsp.position.processCommand(domElementToPosition
            ,"processElement",
            {"my":my,"at":at,"of":(domElementRelativeTo.domElement||domElementRelativeTo),"collision":"fit",offset:(leftOffset||topOffset?leftOffset + " " + topOffset:null) });

    };
    DojoAdapter.prototype.stringToJson=function(str){
        var retVal;
        require(["dojo/json"], function(JSON){
            retVal=JSON.parse(str, true);
        });
        return  retVal;
    };
    DojoAdapter.prototype.ajaxGet=function(src,callback){

        // Require the xhr module
        require(["dojo/_base/xhr"],
            function(xhr) {

                // Execute a HTTP GET request
                xhr.get({
                    // The URL to request
                    url: src,
                    // The method that handles the request's successful result
                    // Handle the response any way you'd like!
                    load: callback
                });

            });
    };
    DojoAdapter.prototype.showToaster=function(message
        ,title
        ,type
        ,toasterPosition
        ,animationDuration
        ,visibleDuration
        ,moveAnimate
        ,fadeAnimate){

        visibleDuration=visibleDuration||5000;
        animationDuration=animationDuration||1000;

        type=type||"message";
        require(["dojox/widget/Toaster", "dijit/registry", "dojo/on", "dojo/dom", "dojo/domReady!"],
            function(Toaster, registry,  on, dom){
                var toaster = registry.byId('flexiciousToaster');
                if(!toaster)
                    toaster= new Toaster({id: 'flexiciousToaster'});

                toaster.positionDirection = 'tr-down';
                toaster.duration=visibleDuration;
                toaster.slideDuration=animationDuration;
                toaster.setContent(message, type);
                toaster.show();
            });
    };
    flexiciousNmsp.DojoAdapter = DojoAdapter;
}());