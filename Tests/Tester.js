"use strict";
var Tests;
(function (Tests) {
    class Tester {
        static Test(aPage) {
            this.TestLayout(aPage.Page);
        }
        static Assert(aValue) {
            if (!aValue)
                throw Error('Fail!');
        }
        static TestLayout(aLayout) {
            for (const xCell of aLayout) {
                const xCtrl = xCell.Control;
                if (xCtrl.IsLayout) {
                    this.TestLayout(xCell.Control);
                }
                const xTag = xCtrl.Tag.Value;
                if (xTag) {
                    if (xCtrl instanceof IntraWeb.Controls.Text) {
                        this.Assert(xTag === xCtrl.Root.innerHTML);
                    }
                }
            }
        }
    }
    Tests.Tester = Tester;
})(Tests || (Tests = {}));
//# sourceMappingURL=Tester.js.map