'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const SvgGaleOIconsThememode = (props) => (React__namespace.createElement("svg", { width: '1.5rem', height: '1.5rem', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', fill: 'none', stroke: 'currentColor', ...props },
    React__namespace.createElement("path", { d: 'M22 12C22 14.9488 20.7161 17.6169 18.67 19.4323 16.9047 21.0371 14.5677 22 12 22 6.48345 22 2 17.5166 2 12 2 6.48345 6.48345 2 12 2 14.5677 2 16.9047 2.96289 18.67 4.5677 20.7161 6.38315 22 9.05115 22 12ZM6 12C6 15.3099 8.69007 18 12 18V6C8.69007 6 6 8.69007 6 12Z', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' })));

exports.GaleOIconsThememode = SvgGaleOIconsThememode;
