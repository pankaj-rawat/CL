import supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:1337");

// UNIT test begin

describe("SAMPLE unit test", function () {

    // #1 should return home page

    it("should return home page", function (done) {

        // calling home page api
        server
            .get("/cities/10")
            .expect("Content-type", /json/)
            .expect(200) // THis is HTTP response
            .end(function (err, res) {
                res.status.should.equal(200);
               should(res.body.data).equal(undefined).not.be.ok;
                done();
            });
    });

});