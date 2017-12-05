// var Shop = require('../src/shop.js');
// var Item = require('../src/item.js');
//
// describe("Shop", function() {
//
//   it("is initialized with items as an empty array by default", function() {
//     const gildedRose = new Shop();
//     expect(gildedRose.items[0]).toBe(undefined);
//   })
//
//   it("is initialized with a names of exceptions property", function() {
//     const gildedRose = new Shop();
//     expect(gildedRose.namesOfExceptions[0]).toBe('Aged Brie');
//     expect(gildedRose.namesOfExceptions[1]).toBe('Backstage passes to a TAFKAL80ETC concert');
//     expect(gildedRose.namesOfExceptions[2]).toBe('Sulfuras, Hand of Ragnaros');
//     expect(gildedRose.namesOfExceptions[3]).toBe('Conjured');
//   })
//
//   it("should foo", function() {
//     item = new Item("foo", 0, 0);
//     // item = { name: "foo", sellIn: 0, quality: 0 };
//     const gildedRose = new Shop([ item ]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].name).toEqual("foo");
//   });
//
//   it("decreases the quality of conjured items twice as fast as normal items", function() {
//     // item = { name: 'Conjured', sellIn: 1, quality: 5 };
//     // newItem = { name: 'Conjured', sellIn: 0, quality: 3};
//     item = new Item("Conjured", 1, 5);
//     newItem = new Item("Conjured", 0, 3);
//     const gildedRose = new Shop([ item ]);
//     expect(gildedRose.updateQuality()).toContain(newItem);
//   });
//
//   it("decreases the quality of conjured items twice as fast as normal items", function() {
//     // item = { name: 'Conjured', sellIn: -1, quality: 5 };
//     // newItem = { name: 'Conjured', sellIn: -2, quality: 1};
//     item = new Item("Conjured", -1, 5);
//     newItem = new Item("Conjured", -2, 1);
//     const gildedRose = new Shop([ item ]);
//     expect(gildedRose.updateQuality()).toContain(newItem);
//   });
//
//   it("decreases the quality of conjured items twice as fast as normal items", function() {
//     // item = { name: 'Conjured', sellIn: -1, quality: 0};
//     // newItem = { name: 'Conjured', sellIn: -2, quality: 0};
//     item = new Item("Conjured", -1, 0);
//     newItem = new Item("Conjured", -2, 0);
//     const gildedRose = new Shop([ item ]);
//     expect(gildedRose.updateQuality()).toContain(newItem);
//   });
//
//


//
//   it("deals with Backstage passes behaviour", function() {
//     // item = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 30};
//     // newItem = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 9, quality: 32};
//     item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30);
//     newItem = new Item("Backstage passes to a TAFKAL80ETC concert", 9, 32);
//     const gildedRose = new Shop([item]);
//     expect(gildedRose.updateQuality()).toContain(newItem);
//   });
//
//   it("deals with Backstage passes behaviour", function() {
//     // item = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 30};
//     // newItem = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 14, quality: 31};
//     item = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 30);
//     newItem = new Item("Backstage passes to a TAFKAL80ETC concert", 14, 31);
//     const gildedRose = new Shop([item]);
//     expect(gildedRose.updateQuality()).toContain(newItem);
//   });
//
//   it("deals with Backstage passes behaviour", function() {
//     // item = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 30};
//     // newItem = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 4, quality: 33};
//     item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30);
//     newItem = new Item("Backstage passes to a TAFKAL80ETC concert", 4, 33);
//     const gildedRose = new Shop([item]);
//     expect(gildedRose.updateQuality()).toContain(newItem);
//   });
//
//   it("deals with Backstage passes behaviour", function() {
//     // item = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 0, quality: 30};
//     // newItem = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: -1, quality: 0};
//     item = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30);
//     newItem = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0);
//     const gildedRose = new Shop([item]);
//     expect(gildedRose.updateQuality()).toContain(newItem);
//   });
//
//   it("deals with Backstage passes behaviour", function() {
//     // item = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 49};
//     // newItem = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 4, quality: 50};
//     item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49);
//     newItem = new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50);
//     const gildedRose = new Shop([item]);
//     expect(gildedRose.updateQuality()).toContain(newItem);
//   });
//
//   it("deals with Sulfuras behaviour", function() {
//     item = { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80};
//     newItem = { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80};
//     const gildedRose = new Shop([item]);
//     expect(gildedRose.updateQuality()).toContain(newItem);
//   });
//
//   it("deals with Sulfuras behaviour", function() {
//     item = { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80};
//     newItem = { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80};
//     const gildedRose = new Shop([item]);
//     expect(gildedRose.updateQuality()).toContain(newItem);
//   });
// });
