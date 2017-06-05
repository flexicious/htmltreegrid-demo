/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function () {

    "use strict";
    var JQueryAdapter;
    /**
     * A utility class that maps utility functions from Flexicious into JQuery
     * @constructor
     * @namespace com.flexicious.adapters
     */
    JQueryAdapter = function () {

    };
    flexiciousNmsp.JQueryAdapter = JQueryAdapter; //add to name space
    JQueryAdapter.prototype.typeName = JQueryAdapter.typeName = "JQueryAdapter";//for quick inspection
    JQueryAdapter.prototype.getClassNames = function () { //for support of "is" keyword
        return ["TypedObject", this.typeName];
    };

    /**
     * Calls the Jquery html method on the parent, passing in innner html.
     * @param parent
     * @param innerHTML
     */
    JQueryAdapter.prototype.setHtml = function (parent, innerHTML) {
        $(parent).html(innerHTML);
    };
    /**
     * Gets the child element of gridDiv that has the specified class name.
     * There must be at least one div with that class name otherwise this method will throw an error.
     * @param gridDiv   The div to search
     * @param className The class to search
     */
    JQueryAdapter.prototype.getElementByClassName = function( gridDiv, className) {
        return $(gridDiv).find("." + className)[0];
    };
    JQueryAdapter.prototype.addChild = function (parent, child) {
        return $(parent).append(child);
    };
    JQueryAdapter.prototype.insertBefore = function (child, refChild) {
        return $(child).insertBefore(refChild);
    };
    JQueryAdapter.prototype.removeChild = function (parent, child) {
        return $(child).remove();
    };


    JQueryAdapter.prototype.findElementWithClassName = function (parent, containerClassName) {
        return $(parent).find('.' + containerClassName).toArray()[0];
    };

    JQueryAdapter.prototype.findElementsWithClassName = function (parent, containerClassName) {
        return $(parent).find('.' + containerClassName).toArray();
    };

    JQueryAdapter.prototype.findFirstElementByTagName = function (parent, tagName) {
        return $(parent).find('>' + tagName).toArray()[0];
    };

    JQueryAdapter.prototype.isIE = function () {
        return $.browser.msie;
    };

    JQueryAdapter.prototype.isMoz = function () {
        return $.browser.mozilla;
    };

    JQueryAdapter.prototype.isWebKit = function () {
        return $.browser.webkit;
    };

    JQueryAdapter.prototype.setupAutoComplete = function (input, options) {
        if (options.autoCompleteSource) {
            options.source = options.autoCompleteSource;
        }
        $(input).autocomplete(options);
    };

    JQueryAdapter.prototype.setupInputMask = function(input,options){
        if (options.inputMask) {
            options.mask = options.inputMask;
        }
        $(input).mask(options.mask, options);
    };

    JQueryAdapter.prototype.setupWaterMark=function(input,options){
        if(options.watermark)
            options.watermark=options.watermark;
        if(options.watermarkStyle)
            options.watermarkStyle=options.watermarkStyle;

        $(input).Watermark(options.watermark,options.watermarkStyle);
    };

    JQueryAdapter.prototype.offset=function(elem){
        return $(elem).offset()
    };

    JQueryAdapter.prototype.showDialog=function(elem,parent,modal,w,h,title){
        $(elem).dialog({"modal":modal,minHeight:h + 50,minWidth:w,zIndex: 700,"title":title,close: function(ev, ui) {
            $(this).remove();
        }});
    };

    JQueryAdapter.prototype.setDialogTitle=function(elem,title){
        this.findElementWithClassName(elem.parentNode,"ui-dialog-title").innerHTML= title;

    };

    JQueryAdapter.prototype.removeDialog=function(elem){
        $(elem).remove();

    };
    JQueryAdapter.prototype.buildUl=function(cols){
        var html='<ul>';
        for (var j=0;j<cols.length;j++){
            html+="<li class='flexiciousSortPopupMenuItem' > <a class='"+(cols[j].type=='separator' ? 'separator' :'' )+"' href='#' uniqueidentifier='"+cols[j].data+"'>"+cols[j].label +"</a>";
            if(cols[j].children&&cols[j].children.length>0){
                html+=this.buildUl(cols[j].children);
            }
            html+="</li>";
        }
        html+="</ul>";
        return html;
    }
    JQueryAdapter.prototype.createMenu=function(menuItems,menuTrigger,onMenuItemClick){;
            $(menuTrigger).flxsmenu({ content:this.buildUl(menuItems), flyOut: true,onMenuItemClick:onMenuItemClick });
    };

    JQueryAdapter.prototype.destroyMenu=function(trigger){
        $(trigger).remove();
    };
    JQueryAdapter.prototype.createDateTimePickerEditor=function(domElement,dateFormat,dflt){
        this.createDateTimePicker(domElement.getTextBox(),dateFormat,dflt);
    }
    JQueryAdapter.prototype.createDateTimePicker=function(domElement,dateFormat,dflt){
        if(domElement.domElement){
            domElement=domElement.getTextBox();
        }
        $(domElement).datepicker({dateFormat:dateFormat,showButtonPanel: true ,
            showOn:"both",buttonImageOnly:true, changeYear:true,
            defaultDate:dflt,
            buttonImage: flexiciousNmsp.Constants.IMAGE_PATH+'/date_picker.png' });
        if(dflt&&dateFormat)
            $(domElement).datepicker( "setDate" , dflt);

        $('ui-datepicker-div').focus();
    };
    JQueryAdapter.prototype.getCurrentDatePicker=function(){
        return $('ui-datepicker-div');
    };
    JQueryAdapter.prototype.getDateValue=function(dateStr,dateFormat){
        return $.datepicker.parseDate(dateFormat,dateStr);
    };

    JQueryAdapter.prototype.formatDate=function(date,dateFormat){
        return $.datepicker.formatDate(dateFormat,date);
    };

    JQueryAdapter.prototype.isDatePickerElement=function(elem){
        if(elem.tagName=="OPTION")return true;//sometimes this does not get you the ancestor.
        var ans=this.findAncestorByClassName(elem,"ui-datepicker");

        return (ans?ans:false);
    };

    JQueryAdapter.prototype.setText=function(elem,text){
        return  $(elem).text(text);
    };

    JQueryAdapter.prototype.setHtml=function(elem,html){
        return  $(elem).html(html);
    };

    JQueryAdapter.prototype.findAncestorByClassName=function(elem,className){
        return $(elem).closest('.'+className)[0];
    };



    JQueryAdapter.prototype.showTooltip=function(relativeTo, tooltip, dataContext,point,leftOffset,
                                 topOffset,offScreenMath,where,container,bounds){

       $(tooltip.domElement||tooltip).position({"my":"right top","at":where+" bottom","of":$(relativeTo.domElement||relativeTo),"collision":"fit","within":$(bounds.domElement||bounds) });

    };

    JQueryAdapter.prototype.positionComponent=function(relativeTo, tooltip, my, at, leftOffset,topOffset){

        if(!my)my="left top";
        if(!at)at="left bottom";

        $(tooltip.domElement||tooltip).position({"my":my,"at":at,"of":$(relativeTo.domElement||relativeTo),"collision":"fit",
            offset:(leftOffset||topOffset?leftOffset + " " + topOffset:null) });

    };
    JQueryAdapter.prototype.stringToJson=function(str){
        return  jQuery.parseJSON(str);
    };

    JQueryAdapter.prototype.ajaxGet=function(src,callback){
        $.ajax({
            url: src,
            success: callback,
            dataType:"html"
        });
    };
    JQueryAdapter.prototype.showToaster=function(message
        ,title
        ,type
        ,toasterPosition
        ,animationDuration
        ,visibleDuration
        ,moveAnimate
        ,fadeAnimate){

        visibleDuration=visibleDuration||5000;
            animationDuration=animationDuration||1000;
        type=type||"info";
//        var shortCutFunction = type,
//            msg = message,
//            title = title,
//            $fadeIn = animationDuration,
//            $fadeOut = animationDuration,
//            $timeOut = visibleDuration,
//            $extendedTimeOut = visibleDuration,
//            toastIndex = JQueryAdapter.toastCount++;
//        var toast=new $().Toastr();
//
//        toast.options = {
//             positionClass:  'toast-top-full-width'
//        };
//        var $toast = toast[shortCutFunction](msg, title);
        var opts = {};
        flexiciousNmsp.UIUtils.mergeObjects(opts,$.ui.toaster.defaults);
        flexiciousNmsp.UIUtils.mergeObjects(opts,{timeout: visibleDuration/1000,position:"tr",speed:animationDuration/1000});

        $('<div><p>'+message+'</p><div>').toaster(opts);

    };
    JQueryAdapter.toastCount=0;
    flexiciousNmsp.JQueryAdapter = JQueryAdapter;
}());