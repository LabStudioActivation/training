var chai = require('chai');
var expect = chai.expect;

describe('Application Model', function() {

  var application = require('../../../api/models/application.js');

  describe("application model", function() {

    describe("#getApplicationById", function() {
      it("null id", function() {
        var apps = application.getApplicationById();
        expect(apps).to.be.empty;
      });

      it("invalid id", function() {
        var apps = application.getApplicationById(9999);
        expect(apps).to.be.empty;
      });

      it("valid id", function() {
        var apps = application.getApplicationById(1238);
        expect(apps).to.not.be.empty;
        expect(apps.id).to.equal(1238);
        expect(apps.name).to.equal('Timeline Analytics');
        expect(apps.lastUpdated).to.equal('2015-07-10T18:48:00');
        expect(apps.status).to.equal('online');
      });
    });
  });
});
