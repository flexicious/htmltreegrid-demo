angular.module('fdGrid', []);

angular.module('fdGrid').factory('configBuilder', function (fdAttr) {

    var canRender = function (s) {
        return s.substring(0, 2) == 'xi';
    };

    var addAttrs = function (node) {
        var attr = $(node)[0].attributes;
        var txt = '';
        for (var i = 0; i < attr.length; i++) {
            var attrName = attr[i].nodeName;
            if (canRender(attrName)) {
                txt += ' ' + fdAttr.get(attrName, 'xi') + '="' + attr[i].nodeValue.replace(/"/g, "'") + '"';
            }
        }
        return txt;

    };

    var addChildren = function (node) {
        var innerNodes = $(node).children();
        var txt = '';
        for (var i = 0; i < innerNodes.length; i++) {
            txt += renderConfig($(innerNodes[i]));
        }
        return txt;
    };
    var addNode = function (node) {
        var txt = '', name = node.nodeName.toLowerCase();

        txt += '<' + fdAttr.get(name);
        txt += addAttrs(node);

        var child = addChildren(node);
        if (child) {
            txt += '>';
            txt += child;
            txt += '</' + fdAttr.get(name) + '>';
        } else {
            txt += '/>';
        }


        return txt;
    };

    var renderConfig = function (node) {
        var nodeTxt = '';
        for (var i = 0; i < node.length; i++) {
            nodeTxt += addNode(node[i]);
        }
        return nodeTxt;
    };
    return {
        build: renderConfig
    };

});

angular.module('fdGrid').factory('fdAttr', function () {
    var attrName = function (atName, perfix) {

        if (perfix) {
            if (atName.substring(0, perfix.length) != perfix)
                return atName;
            else
                atName = atName.substring(perfix.length, atName.length)
        }
        if (atName.substring(0, 2) == 'xi')
            atName = atName.substring(2, atName.length)

        return atName.replace(/-\w/g, function (r) {
            return r.charAt(1).toUpperCase()
        });


    };
    return {
        get: attrName
    };
});

angular.module('fdGrid').factory('gridService', function () {
    var service = function (id) {
        return document.getElementById(id).component;
    };
    return {
        grid: service
    };
});

angular.module('fdGrid').directive('fdGrid', function (configBuilder, localStorage) {
    return {
        require: '?ngModel',
        replace: true,

        link: function (scope, elm, attr, ngModel) {

            var subConf = (configBuilder.build($(elm[0]).children()));


            if (!ngModel) return;
            var g = '<grid ';
            for (var a in attr) {
                if (a.substring(0, 2) == 'xi') {
                    g += ' ' + a.substring(2, a.length) + '="' + attr[a] + '"';
                }
            }
            g += '>';
            g += subConf;
            g += '</grid>';

            ngModel.$render = function () {
                if (!ngModel.$viewValue.configuration)
                    ngModel.$viewValue.configuration = g;

                if(elm[0].component && elm[0].component.domElement==elm[0]){
                    //this means we have this grid created before
                    if (ngModel.$viewValue.configuration) {
                        elm[0].component.buildFromXml(ngModel.$viewValue.configuration);
                    }
                    if (ngModel.$viewValue.dataProvider) {
                        elm[0].component.setDataProvider(ngModel.$viewValue.dataProvider);
                    }

                }else{
                    var grid = new flexiciousNmsp.FlexDataGrid(elm[0], ngModel.$viewValue);
                }
 
            };
        }
    };
});

