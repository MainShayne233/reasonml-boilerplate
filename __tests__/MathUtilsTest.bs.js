// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Jest                          = require("bs-jest/src/jest.js");
var MathUtils$ReasonmlBoilerplate = require("../src/MathUtils.bs.js");

describe("Double", (function () {
        return Jest.test("value should be doubled", (function () {
                      return Jest.Expect[/* toEqual */12](10, Jest.Expect[/* expect */0](MathUtils$ReasonmlBoilerplate.$$double(5)));
                    }));
      }));

/*  Not a pure module */
