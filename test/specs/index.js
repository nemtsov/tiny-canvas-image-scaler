import unit from '../../src';
import getLoadedImage from '../../src/getLoadedImage';
import starImageUrl from '../fixtures/starImageUrl';

describe('scaler', function() {
  describe('getScaledUrl', function() {
    it('should reject if no maxWidth or maxHeight is provided', function(done) {
      unit.getScaledUrl(starImageUrl)
      .catch((e) => {
        expect(e.message).toMatch(/maxWidth/);
        done();
      });
    });

    it('should scale down provided a width', function(done) {
      unit.getScaledUrl(starImageUrl, { maxWidth: 8 })
      .then((scaledUrl) => {
        return getLoadedImage(scaledUrl)
        .then((image) => {
          expect(image.naturalWidth).toEqual(8);
          done();
        });
      }, done.fail);
    });

    it('should scale down provided a height', function(done) {
      unit.getScaledUrl(starImageUrl, { maxHeight: 8 })
      .then((scaledUrl) => {
        return getLoadedImage(scaledUrl)
        .then((image) => {
          expect(image.naturalHeight).toEqual(8);
          done();
        });
      }, done.fail);
    });

    it('should scale down provided both height and width (width smaller than height)', function(done) {
      unit.getScaledUrl(starImageUrl, { maxWidth: 4, maxHeight: 8 })
        .then((scaledUrl) => {
          return getLoadedImage(scaledUrl)
          .then((image) => {
            expect(image.naturalHeight).toEqual(4);
            expect(image.naturalWidth).toEqual(4);
            done();
          });
        }, done.fail);
    });

    it('should scale down provided both height and width (height smaller than width)', function(done) {
      unit.getScaledUrl(starImageUrl, { maxWidth: 8, maxHeight: 4 })
        .then((scaledUrl) => {
          return getLoadedImage(scaledUrl)
          .then((image) => {
            expect(image.naturalHeight).toEqual(4);
            expect(image.naturalWidth).toEqual(4);
            done();
          });
        }, done.fail);
    });

    it('should not scale up for height', function(done) {
      unit.getScaledUrl(starImageUrl, { maxHeight: 32 })
      .then((scaledUrl) => {
        return getLoadedImage(scaledUrl)
        .then((image) => {
          expect(image.naturalHeight).toEqual(16);
          done();
        });
      }, done.fail);
    });

    it('should not scale up for width', function(done) {
      unit.getScaledUrl(starImageUrl, { maxWidth: 32 })
      .then((scaledUrl) => {
        return getLoadedImage(scaledUrl)
        .then((image) => {
          expect(image.naturalWidth).toEqual(16);
          done();
        });
      }, done.fail);
    });
  });

  describe('getScaledCanvas', function() {
    it('should scale down', function(done) {
      unit.getScaledCanvas(starImageUrl, { maxWidth: 8 })
      .then((canvas) => {
        expect(canvas.getContext).toBeDefined();
        expect(canvas.width).toEqual(8);
        done();
      }, done.fail);
    });
  });
});
