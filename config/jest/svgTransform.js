// This is a custom Jest transformer turning svg imports into empty objects.

module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey() {
    // The output is always the same.
    return 'svgTransform';
  },
};
