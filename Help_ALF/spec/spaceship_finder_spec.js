describe("findSpaceship", function() {
    it("should find the spaceship at the correct coordinates", function() {
        var map = ".......\n" +
                  ".......\n" +
                  ".......\n" +
                  ".......\n" +
                  ".......\n" +
                  ".......\n" +
                  ".......\n" +
                  "..X.....\n";
        expect(findSpaceship(map)).toEqual([7, 2]); 
    });
        it("should find the spaceship at the bottom coordinates", function() {
        var map =   ".......\n" +
                    ".......\n" +
                    ".......\n" +
                    ".......\n" +
                    ".......\n" +
                    ".......\n" +
                    "........\n"+
                    ".......\n"+
                    "..X....\n";
        expect(findSpaceship(map)).toEqual([8, 2]);
    })
    it("should find the spaceship one upper the true coordinates", function() {
    var map =   ".......\n" +
                ".......\n" +
                ".......\n" +
                ".......\n" +
                ".......\n" +
                ".......\n" +
                "..X.....\n"+
                ".......\n"+
                ".......\n";
    expect(findSpaceship(map)).toEqual([6, 2]);
})
        it("should find the spaceship two upper the true coordinates", function() {
    var map =   ".......\n" +
                ".......\n" +
                ".......\n" +
                ".......\n" +
                ".......\n" +
                "..X....\n" +
                "........\n"+
                ".......\n"+
                ".......\n";
    expect(findSpaceship(map)).toEqual([5, 2]);
})
        it("should find the spaceshipthree upper the true coordinates", function() {
    var map =   ".......\n" +
                ".......\n" +
                ".......\n" +
                ".......\n" +
                "..X....\n" +
                ".......\n" +
                "........\n"+
                ".......\n"+
                ".......\n";
    expect(findSpaceship(map)).toEqual([4, 2]);
})
        it("should find the spaceship four upper the true coordinates", function() {
    var map =   ".......\n" +
                ".......\n" +
                ".......\n" +
                "..X....\n" +
                ".......\n" +
                ".......\n" +
                "........\n"+
                ".......\n"+
                ".......\n";
    expect(findSpaceship(map)).toEqual([3, 2]);
})
        it("should find the spaceship five upper the true coordinates", function() {
    var map =   ".......\n" +
                ".......\n" +
                "..X....\n" +
                ".......\n" +
                ".......\n" +
                ".......\n" +
                "........\n"+
                ".......\n"+
                ".......\n";
    expect(findSpaceship(map)).toEqual([2, 2]);
})
        it("should find the spaceship six upper the true coordinates", function() {
    var map =   ".......\n" +
                "..X....\n" +
                ".......\n" +
                ".......\n" +
                ".......\n" +
                ".......\n" +
                "........\n"+
                ".......\n"+
                ".......\n";
    expect(findSpaceship(map)).toEqual([1, 2]);
})
        it("should find the spaceship on top instaed of the true coordinates", function() {
    var map =   "..X....\n" +
                ".......\n" +
                ".......\n" +
                ".......\n" +
                ".......\n" +
                ".......\n" +
                "........\n"+
                ".......\n"+
                ".......\n";
    expect(findSpaceship(map)).toEqual([0, 2]);
})
    it("should return 'Spaceship lost forever.' if no spaceship is found", function() {
        var map = ".......\n" +
                  ".......\n" +
                  ".......\n" +
                  ".......\n" +
                  ".......\n" +
                  ".......\n" +
                  ".......\n" +
                  ".......\n";
        expect(findSpaceship(map)).toBe("Spaceship lost forever.");
    });
});
