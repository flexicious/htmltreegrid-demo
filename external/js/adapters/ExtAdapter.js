/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function () {

    "use strict";
    var ExtAdapter;
    /**
     * A utility class that maps utility functions from Flexicious into JQuery
     * @constructor
     * @namespace com.flexicious.adapters
     */
    ExtAdapter = function () {
        flexiciousNmsp.Constants.DEFAULT_DATE_FORMAT = "M-d-Y";
        flexiciousNmsp.Constants.SHORT_DATE_MASK = "m/d/y";
        flexiciousNmsp.Constants.MEDIUM_DATE_MASK = "M d, Y";
        flexiciousNmsp.Constants.LONG_DATE_MASK = "l, F d, Y";
        flexiciousNmsp.Constants.FULL_DATE_MASK = "l, F d, Y g:i:s A";
        flexiciousNmsp.Constants.SHORT_TIME_MASK = "g:i A";
        flexiciousNmsp.Constants.MEDIUM_TIME_MASK = "g:i:s A";
        flexiciousNmsp.Constants.LONG_TIME_MASK = "g:i:s A";
        flexiciousNmsp.Constants.YMD_MASK = "o-m-d";
    };
    flexiciousNmsp.ExtAdapter = ExtAdapter; //add to name space
    ExtAdapter.prototype.typeName = ExtAdapter.typeName = "ExtAdapter";//for quick inspection
    ExtAdapter.prototype.getClassNames = function () { //for support of "is" keyword
        return ["TypedObject", this.typeName];
    };

    /**
     * Calls the Jquery html method on the parent, passing in innner html.
     * @param parent
     * @param innerHTML
     */
    ExtAdapter.prototype.setHtml = function (parent, innerHTML) {
        parent.innerHTML = innerHTML;
    };
    /**
     * Gets the child element of gridDiv that has the specified class name.
     * There must be at least one div with that class name otherwise this method will throw an error.
     * @param gridDiv   The div to search
     * @param className The class to search
     */
    ExtAdapter.prototype.getElementByClassName = function (gridDiv, className) {
        var ret = Ext.get(gridDiv).child("." + className);
        return ret ? ret.dom : null;
    };
    ExtAdapter.prototype.addChild = function (parent, child) {
        return Ext.get(parent).appendChild(child);
    };
    ExtAdapter.prototype.insertBefore = function (child, refChild) {
        return Ext.get(child).insertBefore(refChild);
    };
    ExtAdapter.prototype.removeChild = function (parent, child) {
        return Ext.get(child).remove();
    };
    ExtAdapter.prototype.findElementWithClassName = function (parent, containerClassName) {
        var ret = Ext.get(parent).query('.' + containerClassName)[0];
        return ret && ret.dom ? ret.dom : ret;
    };

    ExtAdapter.prototype.findElementsWithClassName = function (parent, containerClassName) {
        return Ext.get(parent).query('.' + containerClassName);
    };

    ExtAdapter.prototype.findFirstElementByTagName = function (parent, tagName) {
        var ret = Ext.get(parent).query('>' + tagName);
        return ret.length ? ret[0] : null;
    };

    ExtAdapter.prototype.findAncestorByClassName = function (elem, className) {
        return Ext.get(elem).findParent('.' + className);
    };
    ExtAdapter.prototype.offset = function (elem) {
        var elemEl = Ext.get(elem);
        var retval = {};
        retval.top = elemEl.getY();
        retval.left = elemEl.getX();
        return retval;
    };
    ExtAdapter.prototype.isIE = function () {
        return Ext.isIE;
    };

    ExtAdapter.prototype.isMoz = function () {
        return Ext.isGecko;
    };

    ExtAdapter.prototype.isWebKit = function () {
        return Ext.isWebKit;
    };

    ExtAdapter.prototype.setupAutoComplete = function (input, options) {
        //not supported
    };

    ExtAdapter.prototype.setupInputMask = function (input, options) {
        //not supported
    };

    ExtAdapter.prototype.setupWaterMark = function (input, options) {
        //not supported
    };


    ExtAdapter.prototype.showDialog = function (elem, parent, modal, w, h, title) {

        if (elem.component)
            elem.component.validateNow();
        if (!h) {
            h = elem.offsetHeight;
        }
        //need ext code - launch ext popup here
        var popupWin = new Ext.Window({
            //  layout: 'fit',
            modal:modal,
            height:h + 30,
            title:title,
            width:w + 20,
            closeAction:'close',
            contentEl:elem
        });

        popupWin.show();
        elem.popupWin = popupWin;
    };

    ExtAdapter.prototype.setDialogTitle = function (elem, title) {
        elem.popupWin.setTitle(title);
    };

    ExtAdapter.prototype.removeDialog = function (elem) {
        elem.popupWin.hide();
    };
    ExtAdapter.prototype.buildUl = function (items, cols) {
        for (var j = 0; j < cols.length; j++) {
            var item = {text:cols[j].label, data:cols[j].data};
            items.push(item);
            if (cols[j].children && cols[j].children.length > 0) {
                item.menu = [];
                this.buildUl(item.menu, cols[j].children);
            }
        }
    }
    ExtAdapter.prototype.createMenu = function (cols, menuTrigger, onMenuItemClick) {

        if(Ext.ux && Ext.ux.Notification){
            //ext 3
            var items = [];
            this.buildUl(items, cols);
            var ths;
            var initialValue = menuTrigger.innerHTML;
            var menu = new Ext.menu.Menu({
                //id: 'mainMenu',
                style:{
                    overflow:'visible'
                },
                items:items,
               // width:200,
                //cls:'flexiciousGrid',
                listeners:{
                    itemclick:function (baseitem, e) {
                        ths.setText(baseitem.text);
                        onMenuItemClick([menuTrigger], {uniqueIdentifier:baseitem.initialConfig.data});
                    }
                }
            });
            var tb = new Ext.Toolbar();
            menuTrigger.innerHTML = "";
            tb.add({
                text:initialValue,
                menu:menu,
                listeners:{
                    click:function () {
                        ths = this;
                    }
                }
            });
            tb.autoShow = true;
            tb.render(menuTrigger);

        }else{
            //ext 4
            var items = [];
            this.buildUl(items, cols);
            var ths;
            var initialValue = menuTrigger.innerHTML;
            var menu =Ext.create('Ext.menu.Menu', {
                //id: 'mainMenu',
                style:{
                    overflow:'visible'
                },
                items:items,
                // width:200,
                //cls:'flexiciousGrid',
                listeners:{
                    click:function (baseitem, e) {
                        ths.setText(e.data);
                        onMenuItemClick([menuTrigger], {uniqueIdentifier:e.data});
                    }
                }
            });
            var tb = Ext.create('Ext.toolbar.Toolbar');
            menuTrigger.innerHTML = "";
            tb.add({
                text:initialValue,
                menu:menu,
                listeners:{
                    click:function () {
                        ths = this;
                    }
                }
            });
            tb.autoShow = true;
            tb.render(menuTrigger);
        }
    };

    ExtAdapter.prototype.destroyMenu = function (trigger) {
        Ext.get(trigger).remove();
    };
    ExtAdapter.prototype.createDateTimePickerEditor = function (datePicker, dateFormat, dflt, changeHandler, removeOriginal) {
        this.createDateTimePicker(datePicker.getTextBox(), dateFormat, dflt, changeHandler, removeOriginal);
        datePicker.getOutsideIcon().style.display = "none";
        datePicker.getInsideIcon().style.display = "none";
        datePicker.getTextBox().style.width = datePicker.getWidth() + "px";
    }
    ExtAdapter.prototype.createDateTimePicker = function (datePicker, dateFormat, dflt, changeHandler, removeOriginal) {
//alert(datePicker.getWidth() );
        var form = new Ext.form.DateField({
            //  minWidth: datePicker.offsetWidth+50  ,
            width:Math.max(datePicker.offsetWidth-30,30),
            format:dateFormat,
            value:dflt,
            listeners:{
                focus:function () {
                },
                select:function (dp, val) {
                    if (changeHandler != null)
                        changeHandler(val);
                }
            }
        })
        datePicker.style.display = "none";
        form.render(datePicker.parentNode);
        form.focus();
        setTimeout(function () {
            form.onTriggerClick()
        }, 100);
    };
    ExtAdapter.prototype.getCurrentDatePicker = function () {
        return null;
    };
    ExtAdapter.prototype.getDateValue = function (dateStr, dateFormat) {
        return Ext.Date ? Ext.Date.parseDate(dateStr, dateFormat) : Date.parseDate(dateStr, dateFormat);
    };

    ExtAdapter.prototype.formatDate = function (date, dateFormat) {
        return Ext.Date ? Ext.Date.format(date, dateFormat) : Ext.util.Format.date(date, dateFormat);//need to change for later EXT versions
    };

    ExtAdapter.prototype.isDatePickerElement = function (elem) {
        if (elem.tagName == "OPTION")return true;//sometimes this does not get you the ancestor.
        var ans = this.findAncestorByClassName(elem, "x-date-menu");
        return (ans ? ans : false);
    };

    ExtAdapter.prototype.setText = function (elem, text) {
        return  elem.innerText = text;
    };
    ExtAdapter.prototype.setHtml = function (elem, html) {
        return  elem.innerHTML = html;
    };


    ExtAdapter.prototype.showTooltip = function (relativeTo, tooltip, dataContext, point, leftOffset, topOffset, offScreenMath, where, container, bounds) {
        flexiciousNmsp.position.processCommand((tooltip.domElement || tooltip), "processElement",
            {"my":"right top", "at":where + " bottom", "of":(relativeTo.domElement || relativeTo), "collision":"fit", "within":(bounds.domElement || bounds) });
    };

    ExtAdapter.prototype.positionComponent = function (domElementRelativeTo, domElementToPosition, my, at, leftOffset, topOffset) {

        if (!my)my = "left top";
        if (!at)at = "left bottom";
        domElementToPosition = (domElementToPosition.domElement || domElementToPosition);
        flexiciousNmsp.position.processCommand(domElementToPosition
            , "processElement",
            {"my":my, "at":at, "of":(domElementRelativeTo.domElement || domElementRelativeTo), "collision":"fit", offset:(leftOffset || topOffset ? leftOffset + " " + topOffset : null) });

    };
    ExtAdapter.prototype.stringToJson = function (str) {
        return Ext.JSON ? Ext.JSON.decode(str) : Ext.util.JSON.decode(str);

    };

    ExtAdapter.prototype.ajaxGet = function (src, callback) {
        Ext.Ajax.request({
            url:src,
            success:callback,
            failure : function(e){
                callback(e.responseText)
                //alert('failed');

            }
        });
    };
    ExtAdapter.prototype.showToaster = function (message, title, type, toasterPosition, animationDuration, visibleDuration, moveAnimate, fadeAnimate) {

        visibleDuration = visibleDuration || 5000;
        animationDuration = animationDuration || 500;

        if(Ext.ux && Ext.ux.Notification){
            //ext 3
            new Ext.ux.Notification({
                title:title,
                html:"<p style='margin: 20px'>" + message + "</p>",
                autoDestroy:true,
                hideDelay:visibleDuration

            }).show(document);
        }
        else{
            //ext 4
            try{

                Ext.create('widget.uxNotification', {
                    title: title,
                    corner: 'tr',
                    slideDownDelay:animationDuration,
                    slideInDelay:animationDuration,
                    autoDestroyDelay: visibleDuration,
                    spacing: 20,
                    html: "<p style='margin: 20px'>" + message + "</p>"
                }).show();
            }catch (e){}

//            Ext.create('widget.uxNotification', {
//                position: 't',
//                cls: 'ux-notification-light',
//                closable: false,
//                title: '',
//                iconCls: 'ux-notification-icon-information',
//                html: 'Using document as manager. No title and closable: false. Entering from the t edge.'
//            }).show();

        }


    };
    flexiciousNmsp.ExtAdapter = ExtAdapter;
}());
