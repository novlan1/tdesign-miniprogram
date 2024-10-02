Component({
  data: {
    curFormat: 'CSS',
    formatList: ['CSS', 'HEX', 'RGB', 'HSL', 'HSV', 'CMYK'].map((item) => ({
      label: `${item} 模式`,
      value: item,
    })),
  },
  methods: {
    onChangeRadio(e) {
      this.setData({
        curFormat: e.detail.value,
      });
    },
  },
});
