var bc = require('../lib/comment.js');
var utils = require('../lib/comment-utils.js');

describe("comment exposes", function() {

    it("activate() as a public function", function() {
        expect(typeof bc.toggle).toEqual('function');
    });

    it("toggle() as a public function", function() {
        expect(typeof bc.toggle).toEqual('function');
    });
});

describe("comment utils", function() {

    it("removeComment python", function() {
        expect(utils.removeComment('#hello', 'py', 'singleline')).toBe('hello');
    });

    it("addComment", function() {
        expect(utils.addComment('hello', 'fake', 'singleline')).toBe('hello');
    });

    it("addComment", function() {
        expect(utils.addComment('hello', 'py', 'singleline')).toBe('#hello');
    });

    it("toggleComments uncommented", function() {
        expect(utils.toggleComments('hello', 'py', 'singleline')).toBe('#hello');
    });

    it("toggleComments commented", function() {
        expect(utils.toggleComments('# hello', 'py', 'singleline')).toBe(' hello');
    });

    it("is commented python", function() {
        expect(utils.isCommented('# hello', 'py', 'singleline')).toBe(true);
    });

    it("is not commented python", function() {
        expect(utils.isCommented('hello', 'py', 'singleline')).toBe(false);
    });

    it("single line commented", function() {
        expect(utils.isSingleLineCommented('hello', '#')).toBe(false);
    });

    it("single line commented", function() {
        expect(utils.isSingleLineCommented('# hello', '#')).toBe(true);
    });

    it("Get file extension python", function() {
        expect(utils.getExtension('file.py')).toBe('py');
    });

    it("Get file extension", function() {
        expect(utils.getExtension('file.md')).toBe('md');
    });

    it("Support multiline markdown", function() {
        expect(utils.supportsMultiline('md')).toBe(true);
    });

    it("Support multiline python", function() {
        expect(utils.supportsMultiline('py')).toBe(false);
    });

    it("Support multiline fake", function() {
        expect(utils.supportsMultiline('fake')).toBe(false);
    });

    it("Unsupported single line", function() {
        expect(utils.isUnsupportedSingleLine('md')).toBe(true);
    });

    it("Unsupported single line html", function() {
        expect(utils.isUnsupportedSingleLine('html')).toBe(true);
    });

    it("Unsupported single line htm", function() {
        expect(utils.isUnsupportedSingleLine('htm')).toBe(true);
    });
});
